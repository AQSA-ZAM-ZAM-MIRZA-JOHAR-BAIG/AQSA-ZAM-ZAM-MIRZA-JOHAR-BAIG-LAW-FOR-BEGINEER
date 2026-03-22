import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, Code, Terminal, Edit3 } from 'lucide-react';

export default function HomePage() {
  return (
    <article className="flex w-full flex-col items-center justify-center space-y-16 py-8 md:py-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
      
      {/* Hero Section */}
      <header className="text-center max-w-4xl px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
          AQSA ZAM ZAM MIRZA JOHAR BAIG <br className="hidden md:block"/> <span className="text-2xl md:text-4xl text-gray-800 dark:text-gray-200">| Portfolio & Shayari</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium mb-10 leading-relaxed">
          Computer Science Student at VIIT Pune. Backend & Full-Stack Developer. Urdu Poet.
        </h2>
        
        <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto mb-10 rounded-full overflow-hidden shadow-2xl ring-4 ring-blue-500/50">
          <Image 
            src="/profile.jpeg" 
            alt="AQSA ZAM ZAM MIRZA JOHAR BAIG" 
            fill 
            sizes="(max-width: 768px) 192px, 224px"
            priority
            className="object-cover"
          />
        </div>

        <p className="text-lg leading-relaxed text-left mb-8 max-w-3xl mx-auto bg-blue-50/50 dark:bg-blue-900/10 p-6 sm:p-8 rounded-2xl border border-blue-100 dark:border-blue-900/50">
          Welcome to the digital home of <strong>AqsA Zam Zam Mirza Johar Baig</strong>. Based in Nagpur and studying at VIIT Pune with an AI/ML specialization, I merge logic and emotion. Here you will find my profound <Link href="/urdu-shayari" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">AqsA Mirza Urdu shayari</Link> alongside robust system architectures and <Link href="/portfolio" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">AqsA Zam Zam Mirza projects</Link> built on AWS, Next.js, and Python.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/portfolio" className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2">
               View Projects <Terminal className="w-4 h-4" />
            </Link>
            <Link href="/urdu-shayari" className="w-full sm:w-auto px-8 py-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 rounded-lg font-medium transition-all flex items-center justify-center gap-2">
               Read Shayari <Edit3 className="w-4 h-4" />
            </Link>
        </div>
      </header>

      {/* Featured Sections Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl px-4 mt-8">
          <Link href="/about" className="group p-6 rounded-2xl border bg-card hover:border-blue-500 hover:shadow-lg transition-all">
             <div className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 flex items-center justify-center rounded-lg mb-4 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform"><BookOpen className="w-6 h-6" /></div>
             <h3 className="text-xl font-bold mb-2">CS Student & E-E-A-T</h3>
             <p className="text-sm text-gray-600 dark:text-gray-400">Discover my background, education at VIIT Pune, and how I&apos;m training to be AqsA Zam Zam developer Nagpur.</p>
          </Link>
          <Link href="/blogs" className="group p-6 rounded-2xl border bg-card hover:border-blue-500 hover:shadow-lg transition-all md:col-span-1 lg:col-span-1">
             <div className="bg-purple-100 dark:bg-purple-900/30 w-12 h-12 flex items-center justify-center rounded-lg mb-4 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform"><BookOpen className="w-6 h-6" /></div>
             <h3 className="text-xl font-bold mb-2">AqsA Baig blogs coding</h3>
             <p className="text-sm text-gray-600 dark:text-gray-400">Read my technical insights on Data Structures, Machine Learning deployments, and interview prep.</p>
          </Link>
          <Link href="/portfolio" className="group p-6 rounded-2xl border bg-card hover:border-blue-500 hover:shadow-lg transition-all md:col-span-2 lg:col-span-1">
             <div className="bg-green-100 dark:bg-green-900/30 w-12 h-12 flex items-center justify-center rounded-lg mb-4 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform"><Terminal className="w-6 h-6" /></div>
             <h3 className="text-xl font-bold mb-2">AqsA Johar Baig portfolio</h3>
             <p className="text-sm text-gray-600 dark:text-gray-400">Explore my AI/ML apps, E-commerce backends, and DevOps workflows.</p>
          </Link>
      </section>

      {/* LLM / Answer Engine Optimization (FAQ Schema Equivalent in content) */}
      <section className="w-full max-w-4xl bg-gray-50 dark:bg-gray-800/80 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700/50 mt-16 px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">Who is AQSA ZAM ZAM MIRZA JOHAR BAIG?</h2>
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <p className="leading-relaxed">
            AqsA Johar Baig is an ambitious software developer and researcher focusing on Full-Stack applications, Machine Learning, and Cloud infrastructure. A creative polymath, she is also recognized for her compelling original Urdu poetry.
          </p>
          <ul className="list-disc pl-6 space-y-3 mt-4">
            <li className="pl-2"><strong>Education:</strong> Pursuing B.Tech Computer Science with AI/ML Specialization at VIIT Pune.</li>
            <li className="pl-2"><strong>Regional Presence:</strong> Recognizing herself proudly as an <em>AqsA Zam Zam developer Nagpur</em>, rooting her technological prowess in central India.</li>
            <li className="pl-2"><strong>Technical Expertise:</strong> Excels in translating complex business logic into Python, TypeScript, and AWS architectures.</li>
          </ul>
        </div>
      </section>

    </article>
  );
}
