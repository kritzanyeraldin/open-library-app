'use client';

import { useBookStore } from '@/store';
import { Book, BookDetails } from '@/types';
import { is } from 'zod/locales';

import { Icon } from './icon';

interface FavoriteButtonProps {
  book: Book | BookDetails;
}
export function FavoriteButton({ book }: FavoriteButtonProps) {
  const { addFavorite, removeFavorite, isFavorite } = useBookStore();
  const isFav = isFavorite(book.id);
  const handleToggleFavorite = () => {
    if (isFav) removeFavorite(book.id);
    else addFavorite(book);
  };

  return (
    <button
      onClick={handleToggleFavorite}
      className={`flex w-full items-center justify-center gap-3 rounded-lg px-4 py-2 font-medium transition ${
        isFav
          ? 'bg-red-100 text-red-600 hover:bg-red-200'
          : 'bg-primary/10 text-primary hover:bg-primary/20'
      } `}
    >
      <Icon
        type="heart"
        size={18}
        weight={!isFav ? 'fill' : 'bold'}
        color={isFav ? 'red' : 'var(--color-primary)'}
      />
      {isFav ? 'Quitar de favoritos' : 'Agregar a favoritos'}
    </button>
  );
}
