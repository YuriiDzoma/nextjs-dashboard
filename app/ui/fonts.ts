import { Inter } from 'next/font/google';
import { Roboto } from 'next/font/google';
import { Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });
export const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '700'], // вкажи потрібну вагу
});

export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
});