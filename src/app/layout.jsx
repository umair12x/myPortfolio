import './globals.css';
import ClientLayout from './client-layout';

export const metadata = {
  title: 'Muhammad Umair | Full-Stack Developer',
  description: 'Premium full-stack portfolio of Muhammad Umair, a final-year CS student and MERN stack developer.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-black text-black dark:text-white antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}