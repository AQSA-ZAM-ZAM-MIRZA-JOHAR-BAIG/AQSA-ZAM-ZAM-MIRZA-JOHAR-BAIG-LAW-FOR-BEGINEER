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
    default: 'AQSA ZAM ZAM MIRZA JOHAR BAIG | Software Developer Portfolio',
  },
  description: "Portfolio of AQSA ZAM ZAM MIRZA JOHAR BAIG, a CS Student and Software Developer specializing in AI/ML, Full-Stack Development, and Cloud Distributed Systems.",
  metadataBase: new URL('https://aqsa-zam-zam-mirza-johar-baig-law-f.vercel.app/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://aqsa-zam-zam-mirza-johar-baig-law-f.vercel.app/',
    title: 'AQSA ZAM ZAM MIRZA JOHAR BAIG | Software Developer Portfolio',
    description: "Discover AQSA ZAM ZAM MIRZA JOHAR BAIG's coding projects, software architecture, and technical expertise.",
    images: [{ url: '/file.svg', alt: 'AQSA ZAM ZAM MIRZA JOHAR BAIG logo' }],
  },
  keywords: ['AQSA ZAM ZAM MIRZA JOHAR BAIG', 'AqsA Mirza Developer', 'AqsA Johar Baig portfolio', 'AqsA Zam Zam Mirza projects', 'Software Developer Pune', 'VIIT Pune CS student', 'AI ML Specialist'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'AQSA ZAM ZAM MIRZA JOHAR BAIG',
    alternateName: ['Aqsa Johar Baig', 'Aqsa Mirza', 'Aqsa Zam Zam Mirza Johar Baig', 'Aqsa Zam Zam'],
    url: 'https://aqsa-zam-zam-mirza-johar-baig-law-f.vercel.app/',
    jobTitle: 'Software Developer & CS Student',
    description: 'Computer Science undergraduate specializing in Artificial Intelligence and Machine Learning. Experienced in building scalable full-stack applications and cloud-based distributed systems.',
    knowsAbout: ['AI/ML', 'Full-Stack Development', 'Cloud Computing', 'Java', 'Python', 'AWS', 'System Design'],
    alumniOf: [
      {
        '@type': 'CollegeOrUniversity',
        name: 'Vishwakarma Institute of Information Technology (VIIT), Pune',
      },
      {
        '@type': 'CollegeOrUniversity',
        name: 'IIT Madras',
      }
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Pune',
      addressRegion: 'Maharashtra',
      addressCountry: 'India'
    },
    sameAs: [
      'https://www.linkedin.com/in/aqsamirza08',
      'https://github.com/AQSA-ZAM-ZAM-MIRZA-JOHAR-BAIG',
      'https://www.kaggle.com/aqsamirza08',
      'https://aqsamirza08.medium.com/',
      'https://stackoverflow.com/users/32468898/aqsa-zam-zam-mirza-johar-baig',
      'https://www.youtube.com/@aqsamirza08'
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
