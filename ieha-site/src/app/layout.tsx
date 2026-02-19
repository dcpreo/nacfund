import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'materielart.tech — Material Art',
  description: 'Platform for material art, creative practice, and artistic research.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
