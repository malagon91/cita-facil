import { type ReactNode } from 'react';
import { Providers } from './providers'

export const metadata = {
  title: 'My Next.js App with Chakra UI',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
      <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
      </html>
  );
}
