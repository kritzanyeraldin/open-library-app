import 'server-only';

import { cache } from 'react';

import appConfig from '@/config/app.config';

import { adaptBooks } from '../_adapters/books.adapters';

interface BooksLoaderParams {
  q: string;
  limit?: string;
}

export const loadBooks = cache(async (params: BooksLoaderParams) => {
  const { q, limit = '20' } = params;
  const url = `${appConfig.apiUrl}/search.json?q=${encodeURIComponent(q)}&limit=${parseInt(limit)}`;
  const response = await fetch(url);

  if (!response.ok) throw new Error('Failed to fetch books');
  const data = await response.json();

  if (!data?.docs?.length) return [];

  const books = adaptBooks(data.docs ?? []);
  return books;
});
