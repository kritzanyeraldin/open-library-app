import { Inter } from 'next/font/google';

import { Sidebar, TopBar } from '@/components';

import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <TopBar title="Open Library" />
        <Sidebar />
        <div className="ml-64 flex-1 py-10">
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
