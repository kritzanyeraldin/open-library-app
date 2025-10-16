'use client';

import type { Book, BookDetails } from '@/types';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface BookStore {
  favorites: (Book | BookDetails)[];
  addFavorite: (book: Book | BookDetails) => void;
  removeFavorite: (key: string) => void;
  isFavorite: (key: string) => boolean;
}

export const useBookStore = create<BookStore>()(
  persist(
    (set, get) => ({
      favorites: [],
      addFavorite: (book) => {
        const { favorites } = get();
        if (!favorites.some((f) => f.id === book.id)) {
          set({ favorites: [...favorites, book] });
        }
      },
      removeFavorite: (id) => {
        const { favorites } = get();
        set({ favorites: favorites.filter((f) => f.id !== id) });
      },

      isFavorite: (id) => {
        const { favorites } = get();
        return favorites.some((f) => f.id === id);
      },
    }),
    {
      name: 'book-favorites',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
