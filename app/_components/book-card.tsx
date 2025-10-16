'use client';

import Image from 'next/image';
import Link from 'next/link';

import { FavoriteButton } from '@/components';
import { Book } from '@/types';

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  const coverUrl = book.coverId
    ? `https://covers.openlibrary.org/b/id/${book.coverId}-M.jpg`
    : '/no-cover.png';

  return (
    <article className="flex w-full max-w-xs flex-col overflow-hidden rounded-xl">
      <Link href={`/book/${book.id}`} target="_blank">
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl shadow-lg">
          <Image
            priority
            src={coverUrl}
            alt={book.title}
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            className="object-cover transition-transform duration-300 hover:scale-[1.03]"
          />
        </div>

        <div className="py-3">
          <h3 className="font-semibold text-gray-900">{book.title}</h3>
          <p className="mb-2 truncate text-sm text-gray-800">
            {book.authorName}
          </p>
        </div>
      </Link>
      <FavoriteButton book={book} />
    </article>
  );
}
