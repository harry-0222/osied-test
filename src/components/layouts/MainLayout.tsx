import { Inter } from 'next/font/google';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main
      className={`
      grid w-screen min-h-screen items-center px-10 xs:px-3 py-10 ${inter.className}
    `}>
      {children}
    </main>
  );
};

export default MainLayout;
