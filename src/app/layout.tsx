import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Law for Beginners | Aqsa Zam Zam Mirza Johar Baig",
    template: "%s | Law for Beginners"
  },
  description: "Learn legal concepts without the jargon. A structured, beginner-friendly platform by Aqsa Zam Zam Mirza Johar Baig (BA LLB, Legal Researcher) for understanding fundamental rights and criminal law.",
  keywords: ["Aqsa Zam Zam Mirza Johar Baig", "Aqsa Mirza", "law for beginners", "legal education", "fundamental rights", "criminal law basics", "learn law simple"],
  authors: [{ name: "Aqsa Zam Zam Mirza Johar Baig", url: "https://aqsa-zam-zam-mirza-johar-baig-portf.vercel.app/" }],
  creator: "Aqsa Zam Zam Mirza Johar Baig",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://law-for-beginners.vercel.app",
    title: "Law for Beginners | Aqsa Zam Zam Mirza Johar Baig",
    description: "The easiest way to learn law and understand your rights through storytelling and real-life examples, crafted by Legal Researcher Aqsa Zam Zam Mirza Johar Baig.",
    siteName: "Law for Beginners",
  },
  twitter: {
    card: "summary_large_image",
    title: "Law for Beginners | by Aqsa Zam Zam Mirza Johar Baig",
    description: "The easiest way to learn law and understand your rights through storytelling and real-life examples.",
    creator: "@aqsamirza",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background font-sans text-foreground">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <main className="flex-1 overflow-y-auto">
            <div className="container mx-auto max-w-5xl p-6 md:p-10">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
