'use client';

import { useRouter, useSearchParams } from 'next/navigation';

import { Icon } from './Icon';

type TopBarProps = {
  title: string;
};

export const TopBar = ({ title }: TopBarProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const q = searchParams.get('q') ?? undefined;

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;

    const params = new URLSearchParams(searchParams.toString());

    if (query.length > 0) {
      params.set('q', query);
    } else {
      params.delete('q');
    }

    router.push(`?${params.toString()}`);
  };

  return (
    <header className="sticky top-0 right-0 left-0 z-40 flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4">
      <div className="flex gap-5">
        <button className="text-2xl font-bold">
          <Icon type="bookOpen" size={28} />
        </button>
        <a className="text-2xl font-bold" href="/">
          {title}
        </a>
      </div>

      <form>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
            <Icon type="search" />
          </div>
          <input
            type="text"
            defaultValue={q}
            onChange={handleQueryChange}
            placeholder="Buscar por título, género"
            className="text-md focus:ring-primary/50 block w-xl rounded-lg bg-[var(--background)] py-2 ps-11 text-gray-900 focus:ring-2 focus:outline-0"
          />
        </div>
      </form>
    </header>
  );
};
