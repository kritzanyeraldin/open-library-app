import { FavoriteButton } from '@/components';
import { Params } from '@/types';

import { loadBookDetails } from './_lib/book.loader';

export async function generateMetadata(context: { params: Promise<Params> }) {
  const { id } = await context.params;
  const bookDetails = await loadBookDetails(id);

  return {
    title: bookDetails.title,
  };
}

export default async function BookDetails({
  params,
}: {
  params: Promise<Params>;
}) {
  const { id } = await params;
  const bookDetails = await loadBookDetails(id);

  return (
    <main className="min-h-screen bg-[var(--background)] py-10 text-[var(--foreground)]">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-12 md:flex-row">
        {bookDetails.coverId ? (
          <img
            src={`https://covers.openlibrary.org/b/id/${bookDetails.coverId}-L.jpg`}
            alt={bookDetails.title}
            className="w-full max-w-sm rounded-lg object-cover shadow-lg md:max-w-xs"
          />
        ) : (
          <div className="flex h-80 w-full max-w-sm items-center justify-center rounded-lg bg-gray-200 text-gray-500 md:max-w-xs">
            No cover
          </div>
        )}

        <section className="flex-1">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h1 className="text-4xl leading-tight font-extrabold">
              {bookDetails.title}
            </h1>

            <div className="w-xs">
              <FavoriteButton book={bookDetails} />
            </div>
          </div>

          {bookDetails.authorName && (
            <p className="text-lg font-medium text-gray-700">
              {bookDetails.authorName}
            </p>
          )}
          {bookDetails.firstPublishDate && (
            <p className="mb-6 text-gray-600">
              Published on {bookDetails.firstPublishDate}
            </p>
          )}

          {bookDetails.description && (
            <div className="mt-4">
              <h2 className="mb-3 text-xl font-semibold">Synopsis</h2>
              <p className="max-w-3xl leading-relaxed text-gray-700">
                {bookDetails.description}
              </p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
