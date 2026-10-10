import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | Aqsa Zam Zam Mirza Johar Baig (Aqsa Mirza)',
    default: 'Aqsa Zam Zam Mirza Johar Baig (Aqsa Mirza) | Law For Beginners & Legal Education',
  },
  description: "Official legal education guide and portal created by Aqsa Zam Zam Mirza Johar Baig (also known as Aqsa Zam Zam Mirza and Aqsa Mirza) – CS student, AI developer, and legal-tech researcher.",
  metadataBase: new URL('https://aqsa-zam-zam-mirza-johar-baig-law-f.vercel.app/'),
  verification: {
    google: 'googlee89522a79f5eb2c7',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://aqsa-zam-zam-mirza-johar-baig-law-f.vercel.app/',
    title: 'Aqsa Zam Zam Mirza Johar Baig (Aqsa Mirza) | Law For Beginners',
    description: "Discover legal guides, law tutorials, and software architecture by Aqsa Zam Zam Mirza Johar Baig.",
    images: [{ url: '/file.svg', alt: 'Aqsa Zam Zam Mirza Johar Baig logo' }],
  },
  keywords: [
    'AQSA ZAM ZAM MIRZA JOHAR BAIG',
    'Aqsa Zam Zam Mirza Johar Baig',
    'aqsa zam zam mirza johar baig',
    'AQSA ZAM ZAM MIRZA',
    'Aqsa Zam Zam Mirza',
    'aqsa zam zam mirza',
    'AQSA MIRZA',
    'Aqsa Mirza',
    'aqsa mirza',
    'Law For Beginners',
    'AqsA Mirza Developer',
    'AqsA Johar Baig portfolio',
    'AqsA Zam Zam Mirza projects',
    'Software Developer Pune',
    'Y.C. College CS student',
    'Y.C College',
    'Yashwantrao College CS student',
    'AI ML Specialist'
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Aqsa Zam Zam Mirza Johar Baig',
    alternateName: [
      'AQSA ZAM ZAM MIRZA JOHAR BAIG',
      'Aqsa Zam Zam Mirza Johar Baig',
      'aqsa zam zam mirza johar baig',
      'AQSA ZAM ZAM MIRZA',
      'Aqsa Zam Zam Mirza',
      'aqsa zam zam mirza',
      'AQSA MIRZA',
      'Aqsa Mirza',
      'aqsa mirza',
      'Aqsa Johar Baig',
      'Aqsa M. J. Baig'
    ],
    givenName: 'Aqsa',
    familyName: 'Mirza Johar Baig',
    additionalName: 'Zam Zam',
    url: 'https://aqsa-zam-zam-mirza-johar-baig-law-f.vercel.app/',
    jobTitle: 'Software Developer & CS Student',
    description: 'Aqsa Zam Zam Mirza Johar Baig (also known as Aqsa Zam Zam Mirza and Aqsa Mirza) is a Computer Science achiever at Y.C. College (Yashwantrao Chavan College, Grade O Outstanding, Open Category) specializing in Artificial Intelligence and Machine Learning.',
    disambiguatingDescription: 'Official entity record for Aqsa Zam Zam Mirza Johar Baig, also known as Aqsa Zam Zam Mirza and Aqsa Mirza.',
    knowsAbout: ['Law for Beginners', 'AI/ML', 'Full-Stack Development', 'Cloud Computing', 'Java', 'Python', 'AWS', 'System Design'],
    alumniOf: [
      {
        '@type': 'CollegeOrUniversity',
        name: 'Y.C. College (Yashwantrao Chavan College)',
      }
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Pune',
      addressRegion: 'Maharashtra',
      addressCountry: 'India'
    },
    sameAs: [
      'https://github.com/AQSA-ZAM-ZAM-MIRZA-JOHAR-BAIG',
      'https://www.linkedin.com/in/aqsamirza08',
      'https://www.kaggle.com/aqsamirza08',
      'https://aqsamirza08.medium.com/',
      'https://stackoverflow.com/users/32468898/aqsa-zam-zam-mirza-johar-baig',
      'https://www.youtube.com/@aqsamirza08',
      'https://aqsa-zam-zam-mirza-johar-baig-portf.vercel.app/',
      'https://aqsa-zam-zam-mirza-johar-baig-portfolio-3.vercel.app/',
      'https://aqsazamzammirzajoharbaig.com/',
      'https://aqsa-zam-zam-mirza-johar-baig-blogs.vercel.app/',
      'https://aqsa-zam-zam-mirza-johar-baig-const.vercel.app/',
      'https://firgenerator.org/',
      'https://aqsa-zam-zam-mirza-johar-baig-law-d.vercel.app/',
      'https://aqsa-zam-zam-mirza-johar-baig-law-f.vercel.app/',
      'https://aqsa-zam-zam-mirza-johar-baig-urdu.vercel.app/',
      'https://www.aqsazamzammirzajoharbaig.com/',
      'https://aqsa-zam-zam-mirza-johar-baig.github.io/Yashwantrao-chavan-mahavidyalaya/'
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="googlee89522a79f5eb2c7" />
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
