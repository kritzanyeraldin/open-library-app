import { SearchParams } from '@/types';

import { BookCard } from './_components';
import { loadBooks } from './_lib/books.loader';

export async function generateMetadata() {
  return {
    title: 'Libros Populares',
  };
}
export default async function Home({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const { q, limit } = await searchParams;
  const books = await loadBooks({ q, limit });

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="container mx-auto px-4">
        <h1 className="mb-8 text-2xl font-semibold text-gray-800">
          Libros populares
        </h1>
        {books.length === 0 ? (
          <p className="text-center text-gray-500">No se encontraron libros.</p>
        ) : (
          <ul className="grid grid-cols-1 justify-items-center gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {books.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
