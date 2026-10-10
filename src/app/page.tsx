import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, Terminal, Edit3, ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <article className="flex w-full flex-col items-center justify-center space-y-16 py-8 md:py-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
      
      {/* Hero Section */}
      <header className="text-center max-w-4xl px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
          AQSA ZAM ZAM MIRZA JOHAR BAIG <br className="hidden md:block"/> <span className="text-2xl md:text-4xl text-gray-800 dark:text-gray-200">| Software Developer</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium mb-10 leading-relaxed">
          AI/ML Specialist | Full-Stack Developer | Y.C. College (Grade O Outstanding, Open Category)
        </h2>
        
        <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto mb-10 rounded-full overflow-hidden shadow-2xl ring-4 ring-blue-500/50">
          <Image 
            src="/profile.png" 
            alt="AQSA ZAM ZAM MIRZA JOHAR BAIG" 
            fill 
            sizes="(max-width: 768px) 192px, 224px"
            priority
            unoptimized
            className="object-cover"
          />
        </div>

        <p className="text-lg leading-relaxed text-left mb-8 max-w-3xl mx-auto bg-blue-50/50 dark:bg-blue-900/10 p-6 sm:p-8 rounded-2xl border border-blue-100 dark:border-blue-900/50 text-gray-800 dark:text-gray-200">
          Welcome to the professional portfolio of <strong>AqsA Zam Zam Mirza Johar Baig</strong>. Based in Pune, Maharashtra, I am a Computer Science undergraduate specializing in Artificial Intelligence and Machine Learning. With strong foundations in Data Structures, Algorithms, and System Design, I build scalable full-stack applications and cloud-based distributed systems using Java, Python, JavaScript, and AWS.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/portfolio" className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md">
               View Projects <Terminal className="w-4 h-4" />
            </Link>
            <Link href="/urdu-shayari" className="w-full sm:w-auto px-8 py-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700/80 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 rounded-lg font-medium transition-all flex items-center justify-center gap-2 shadow-sm">
               Read Shayari <Edit3 className="w-4 h-4" />
            </Link>
        </div>
      </header>

      {/* Featured Sections Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl px-4 mt-8">
          <Link 
            href="/about" 
            className="group flex flex-col justify-between p-7 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/80 dark:backdrop-blur-sm hover:border-blue-500 dark:hover:border-blue-500/70 hover:shadow-xl dark:hover:shadow-blue-500/5 hover:-translate-y-1 transition-all duration-300"
          >
             <div>
               <div className="bg-blue-100 dark:bg-blue-900/30 border border-blue-200/50 dark:border-blue-800/50 w-12 h-12 flex items-center justify-center rounded-xl mb-5 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                 <BookOpen className="w-6 h-6" />
               </div>
               <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                 CS Student &amp; E-E-A-T
               </h3>
               <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                 Discover my background, education at Y.C. College (Yashwantrao Chavan College), and how I&apos;m training to be AqsA Zam Zam developer Nagpur.
               </p>
             </div>
             <div className="flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">
               Learn More <ArrowRight className="w-4 h-4 ml-1.5" />
             </div>
          </Link>

          <Link 
            href="/blogs" 
            className="group flex flex-col justify-between p-7 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/80 dark:backdrop-blur-sm hover:border-purple-500 dark:hover:border-purple-500/70 hover:shadow-xl dark:hover:shadow-purple-500/5 hover:-translate-y-1 transition-all duration-300 md:col-span-1 lg:col-span-1"
          >
             <div>
               <div className="bg-purple-100 dark:bg-purple-900/30 border border-purple-200/50 dark:border-purple-800/50 w-12 h-12 flex items-center justify-center rounded-xl mb-5 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                 <BookOpen className="w-6 h-6" />
               </div>
               <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                 AqsA Baig blogs coding
               </h3>
               <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                 Read my technical insights on Data Structures, Machine Learning deployments, and interview prep.
               </p>
             </div>
             <div className="flex items-center text-sm font-semibold text-purple-600 dark:text-purple-400 group-hover:translate-x-1 transition-transform">
               Read Blogs <ArrowRight className="w-4 h-4 ml-1.5" />
             </div>
          </Link>

          <Link 
            href="/portfolio" 
            className="group flex flex-col justify-between p-7 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/80 dark:backdrop-blur-sm hover:border-emerald-500 dark:hover:border-emerald-500/70 hover:shadow-xl dark:hover:shadow-emerald-500/5 hover:-translate-y-1 transition-all duration-300 md:col-span-2 lg:col-span-1"
          >
             <div>
               <div className="bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200/50 dark:border-emerald-800/50 w-12 h-12 flex items-center justify-center rounded-xl mb-5 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
                 <Terminal className="w-6 h-6" />
               </div>
               <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                 Aqsa Zam Zam Mirza Johar Baig portfolio
               </h3>
               <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                 Explore my AI/ML apps, E-commerce backends, and DevOps workflows.
               </p>
             </div>
             <div className="flex items-center text-sm font-semibold text-emerald-600 dark:text-emerald-400 group-hover:translate-x-1 transition-transform">
               View Projects <ArrowRight className="w-4 h-4 ml-1.5" />
             </div>
          </Link>
      </section>

      {/* LLM / Answer Engine Optimization (FAQ Schema Equivalent in content) */}
      <section className="w-full max-w-4xl bg-gray-50 dark:bg-gray-800/80 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700/50 mt-16 px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">Professional Summary</h2>
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <p className="leading-relaxed">
            Aqsa Zam Zam Mirza Johar Baig is an ambitious software developer specializing in Artificial Intelligence and Machine Learning with strong foundations in Data Structures, Algorithms, Object-Oriented Programming, and System Design.
          </p>
          <ul className="list-disc pl-6 space-y-3 mt-4">
            <li className="pl-2"><strong>Education:</strong> Computer Science at Y.C. College (Yashwantrao Chavan College) — Grade O (Outstanding), Open Category.</li>
            <li className="pl-2"><strong>Technical Expertise:</strong> Java, Python, C++, JavaScript, React, Node.js, and AWS Cloud services.</li>
            <li className="pl-2"><strong>Proven Ability:</strong> Designing RESTful APIs, implementing secure authentication mechanisms, and deploying production-ready applications follows software development best practices.</li>
          </ul>
        </div>
      </section>

    </article>
  );
}
