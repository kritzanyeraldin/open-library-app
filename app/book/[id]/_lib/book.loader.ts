import 'server-only';

import { cache } from 'react';

import appConfig from '@/config/app.config';
import { BookDetailsDto } from '@/types';

import { adaptBookDetails } from '../_adapters/book.adapters';

const loadAuthor = cache(async (id: string) => {
  const url = `${appConfig.apiUrl}${id}.json`;
  const response = await fetch(url);
  if (!response.ok) return;

  const data = await response.json();
  if (!data?.name) return;
  return data.name as string;
});

export const loadBookDetails = cache(async (id: string) => {
  let authorName = 'Autor desconocido';
  const url = `${appConfig.apiUrl}/works/${id}.json`;
  const response = await fetch(url);
  if (!response.ok) throw new Error('Failed to fetch book details');

  const data = (await response.json()) as BookDetailsDto;
  if (!data) throw new Error('Failed to fetch book details');

  if (data.authors?.length && data.authors[0]?.author?.key) {
    const authorKey = data.authors[0].author.key;
    const loadedAuthorName = await loadAuthor(authorKey);
    authorName = loadedAuthorName ?? authorName;
  }
  const bookDetails = adaptBookDetails(data ?? []);
  return {
    ...bookDetails,
    authorName,
  };
});
