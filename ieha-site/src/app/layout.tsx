import type { Metadata } from 'next';
import './globals.css';
// ieha-site/src/app/layout.tsx
import { Agentation } from 'agentation';

export const metadata: Metadata = {
  title: 'materielart.tech — Material Art',
  description: 'Platform for material art, creative practice, and artistic research.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        {children}
        {process.env.NODE_ENV === 'development' && (
          <Agentation
            endpoint="http://localhost:4747"
            onSessionCreated={(sessionId) => console.log('Session started:', sessionId)}
          />
        )}
      </body>
    </html>
  );
}
