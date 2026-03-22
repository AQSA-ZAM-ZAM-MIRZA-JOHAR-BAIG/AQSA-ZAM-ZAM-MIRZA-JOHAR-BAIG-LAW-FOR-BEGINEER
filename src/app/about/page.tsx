import type { Metadata } from 'next';
import { BookOpen, MapPin, GraduationCap, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About',
  description: 'Detailed background, education at VIIT Pune, and technical skills of AqsA Johar Baig. Authoritative E-E-A-T profile.',
  alternates: { canonical: '/about' }
};

export default function AboutPage() {
  return (
    <article className="max-w-4xl mx-auto py-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="mb-12">
         <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">About AQSA ZAM ZAM MIRZA JOHAR BAIG</h1>
         <div className="flex items-center gap-4 text-sm text-gray-500 font-medium">
            <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Nagpur, India</span>
            <span className="flex items-center gap-1"><GraduationCap className="w-4 h-4" /> VIIT Pune</span>
         </div>
      </header>

      <div className="prose dark:prose-invert max-w-none space-y-8">
        <section className="bg-blue-50/50 dark:bg-blue-900/10 p-6 sm:p-8 rounded-2xl border border-blue-100 dark:border-blue-900/50">
           <h2 className="text-2xl font-semibold mb-4 mt-0 text-gray-900 dark:text-gray-100 flex items-center gap-2">
             <BookOpen className="w-5 h-5 text-blue-600" /> My E-E-A-T Profile & Background
           </h2>
           <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
             As a dedicated Computer Science student specializing in Artificial Intelligence and Machine Learning at VIIT Pune, I bring a rigorous engineering mindset to solving complex technological problems. I am recognized as an <strong>AqsA Zam Zam developer Nagpur</strong>, known for creating scalable backend systems, training predictive ML models, and implementing CI/CD pipelines. My goal is to abstract complexity into simple, performant user experiences.
           </p>
        </section>

        <section>
           <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" /> Technical Skills & Arsenal
           </h3>
           <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
             <table className="min-w-full bg-white dark:bg-gray-900 text-left">
               <thead className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-800">
                 <tr>
                   <th className="py-4 px-6 font-semibold text-gray-900 dark:text-gray-100 uppercase text-xs tracking-wider">Category</th>
                   <th className="py-4 px-6 font-semibold text-gray-900 dark:text-gray-100 uppercase text-xs tracking-wider">Technologies</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                 <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                   <td className="py-4 px-6 font-medium">Languages</td>
                   <td className="py-4 px-6 text-gray-600 dark:text-gray-400">Python, Java, TypeScript, SQL, C++</td>
                 </tr>
                 <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                   <td className="py-4 px-6 font-medium">Backend & Frameworks</td>
                   <td className="py-4 px-6 text-gray-600 dark:text-gray-400">Flask, Django, Node.js, Next.js, Express</td>
                 </tr>
                 <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                   <td className="py-4 px-6 font-medium">DevOps & Cloud</td>
                   <td className="py-4 px-6 text-gray-600 dark:text-gray-400">AWS (EC2, S3, RDS), Docker, GitHub Actions, Vercel</td>
                 </tr>
                 <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                   <td className="py-4 px-6 font-medium">AI / ML</td>
                   <td className="py-4 px-6 text-gray-600 dark:text-gray-400">TensorFlow, Scikit-Learn, Pandas, PyTorch</td>
                 </tr>
                 <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                   <td className="py-4 px-6 font-medium">Databases</td>
                   <td className="py-4 px-6 text-gray-600 dark:text-gray-400">PostgreSQL, MongoDB, MySQL, Redis</td>
                 </tr>
               </tbody>
             </table>
           </div>
        </section>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-sm text-gray-500 mb-6 italic">
            This page represents the authoritative profile of AqsA Zam Zam Mirza Johar Baig. Last Updated: March 2026.
          </p>
          <a href="/resume.pdf" target="_blank" className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 font-semibold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
            Download Resume (PDF)
          </a>
        </div>
      </div>
    </article>
  );
}
