import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: 'AQSA ZAM ZAM MIRZA JOHAR BAIG | %s Portfolio',
    default: 'AQSA ZAM ZAM MIRZA JOHAR BAIG | Portfolio & Shayari',
  },
  description: "Discover AQSA ZAM ZAM MIRZA JOHAR BAIG's coding projects, Urdu shayari, and blogs. AqsA Johar Baig is a CS Student, Full-Stack Developer, and Poet from Nagpur.",
  metadataBase: new URL('https://aqsazammam.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://aqsazammam.com',
    title: 'AQSA ZAM ZAM MIRZA JOHAR BAIG | CS Portfolio & Shayari',
    description: "Discover AQSA ZAM ZAM MIRZA JOHAR BAIG's coding projects, Urdu shayari, and blogs.",
    images: [{ url: '/profile.png', alt: 'AQSA ZAM ZAM MIRZA JOHAR BAIG portrait' }],
  },
  keywords: ['AQSA ZAM ZAM MIRZA JOHAR BAIG', 'AqsA Zam Zam Mirza Johar Baig', 'AqsA Johar Baig portfolio', 'AqsA Zam Zam Mirza projects', 'AqsA Mirza Urdu shayari', 'AqsA Baig blogs coding', 'AqsA Zam Zam developer Nagpur'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'AQSA ZAM ZAM MIRZA JOHAR BAIG',
    alternateName: ['AqsA Johar Baig', 'AqsA Zam Zam Mirza'],
    url: 'https://aqsazammam.com',
    jobTitle: 'CS Student & Developer',
    description: 'Computer Science student, Full-Stack Developer, AI/ML Researcher, and Urdu Shayari Poet from Nagpur.',
    knowsAbout: ['AI/ML', 'DevOps', 'Urdu Shayari', 'Python', 'Next.js', 'AWS'],
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'VIIT Pune',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Nagpur',
      addressCountry: 'India'
    },
    sameAs: [
      'https://www.linkedin.com/in/aqsa-zam-zam-mirza-johar-baig-28501b3b6/',
      'https://github.com/AQSA-ZAM-ZAM-MIRZA-JOHAR-BAIG'
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics & Search Console Placeholder */}
        <meta name="google-site-verification" content="YOUR_GSC_VERIFICATION_CODE" />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
