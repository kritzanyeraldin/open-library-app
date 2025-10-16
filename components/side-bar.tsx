'use client';

import Link from 'next/link';

import { Icon } from '@/components';
import { useBookStore } from '@/store';

export function Sidebar() {
  const { favorites, removeFavorite } = useBookStore();

  const handleRemove = (key: string) => {
    removeFavorite(key);
  };

  return (
    <aside className="fixed left-0 z-40 h-screen w-64 border-r border-gray-200 bg-white px-4 py-5">
      <h2 className="mb-4 text-lg font-bold">Mis favoritos</h2>
      {favorites.length === 0 ? (
        <p className="text-sm text-gray-500">No tienes libros favoritos aún</p>
      ) : (
        <ul className="space-y-2 text-base">
          {favorites.map((book) => (
            <li key={book.id}>
              <div className="flex items-center justify-between gap-3 overflow-hidden">
                <div className="flex items-center gap-2">
                  <Icon type="bookBookmark" />
                  <span className="max-w-[120px] truncate group-hover:text-blue-600">
                    {book.title}
                  </span>
                </div>
                <div className="flex gap-1">
                  <Link
                    href={`/book/${book.id}`}
                    target="_blank"
                    className="rounded p-1 hover:bg-neutral-100"
                  >
                    <Icon type="arrowSquareOut" />
                  </Link>
                  <button
                    onClick={() => handleRemove(book.id)}
                    className="rounded p-1 hover:bg-neutral-100"
                  >
                    <Icon type="trash" />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}
