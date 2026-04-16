import './globals.css';
import ClientLayout from './client-layout';

export const metadata = {
  title: {
    default: 'Muhammad Umair | Full-Stack Developer & MERN Expert',
    template: '%s | Muhammad Umair'
  },
  description: 'Final-year Computer Science student and full-stack developer with production experience. Built enrollment systems for 20,000+ users using MERN stack. Available for internships.',
  keywords: [
    'Muhammad Umair',
    'Full-Stack Developer',
    'MERN Stack Developer',
    'React.js Developer',
    'Next.js Developer',
    'Node.js Expert',
    'Web Developer Pakistan',
    'University of Agriculture Faisalabad',
    'Playwright Scraping',
    'IoT Developer',
    'AI Enthusiast',
    'umair12x'
  ],
  authors: [{ name: 'Muhammad Umair', url: 'https://github.com/umair12x' }],
  creator: 'Muhammad Umair',
  publisher: 'Muhammad Umair',
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://umair12x.me'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
    },
  },
  openGraph: {
    title: 'Muhammad Umair | Full-Stack Developer & MERN Expert',
    description: 'Production-ready full-stack developer. Built E-Enrollment System serving 20,000+ students. Specialized in MERN stack, Next.js, and scalable architectures.',
    url: 'https://umair12x.dev',
    siteName: 'Muhammad Umair Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Muhammad Umair - Full-Stack Developer Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
    emails: ['umairim24@gmail.com'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Umair | Full-Stack Developer',
    description: 'Built scalable systems for 20K+ users | MERN Stack | Next.js | Node.js | Available for internships',
    creator: '@umair12x',
    site: '@umair12x',
    images: {
      url: '/og-image.jpg',
      alt: 'Muhammad Umair Portfolio',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    // other verification codes
  },
  category: 'technology',
  classification: 'Personal Portfolio',
  referrer: 'origin-when-cross-origin',
  colorScheme: 'dark light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' },
  ],
  manifest: '/site.webmanifest',
};

// Optional: Add viewport separately (Next.js 14+)
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' },
  ],
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased text-black bg-white dark:bg-black dark:text-white">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}