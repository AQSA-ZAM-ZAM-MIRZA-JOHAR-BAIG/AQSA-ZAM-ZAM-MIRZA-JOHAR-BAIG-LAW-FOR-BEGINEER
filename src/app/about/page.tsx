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
            <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Pune, Maharashtra, India</span>
            <span className="flex items-center gap-1"><GraduationCap className="w-4 h-4" /> VIIT Pune & IIT Madras</span>
         </div>
      </header>

      <div className="prose dark:prose-invert max-w-none space-y-12">
        <section className="bg-blue-50/50 dark:bg-blue-900/10 p-6 sm:p-8 rounded-2xl border border-blue-100 dark:border-blue-900/50">
           <h2 className="text-2xl font-semibold mb-4 mt-0 text-gray-900 dark:text-gray-100 flex items-center gap-2">
             <BookOpen className="w-5 h-5 text-blue-600" /> Professional Summary
           </h2>
           <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
             Computer Science undergraduate specializing in Artificial Intelligence and Machine Learning with strong foundations in Data Structures, Algorithms, Object-Oriented Programming, and System Design. Experienced in building scalable full-stack applications and cloud-based distributed systems using Java, Python, JavaScript, and AWS. Proven ability to design RESTful APIs, implement secure authentication mechanisms, and deploy production-ready applications following software development best practices.
           </p>
        </section>

        <section>
           <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-purple-600" /> Education
           </h3>
           <div className="space-y-6">
              <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
                 <div className="flex flex-col md:flex-row justify-between mb-2">
                    <h4 className="text-lg font-bold">Vishwakarma Institute of Information Technology (VIIT), Pune</h4>
                    <span className="text-blue-600 dark:text-blue-400 font-semibold">CGPA: 8.77</span>
                 </div>
                 <p className="text-gray-600 dark:text-gray-400 italic mb-2">Bachelor of Technology in Computer Science and Engineering (AI & ML)</p>
                 <p className="text-sm text-gray-500">Aug 2023 – Jun 2027</p>
              </div>
              <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
                 <div className="flex flex-col md:flex-row justify-between mb-2">
                    <h4 className="text-lg font-bold">Indian Institute of Technology (IITM), IIT Madras</h4>
                    <span className="text-blue-600 dark:text-blue-400 font-semibold">CGPA: 7.44</span>
                 </div>
                 <p className="text-gray-600 dark:text-gray-400 italic mb-2">Bachelor of Science in Data Science</p>
                 <p className="text-sm text-gray-500">May 2023 – Jun 2027</p>
              </div>
           </div>
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
                   <td className="py-4 px-6 font-medium">Programming</td>
                   <td className="py-4 px-6 text-gray-600 dark:text-gray-400">Java, Python, C++, JavaScript</td>
                 </tr>
                 <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                   <td className="py-4 px-6 font-medium">Frameworks & Libs</td>
                   <td className="py-4 px-6 text-gray-600 dark:text-gray-400">React.js, Vue.js, Node.js, Express.js, Flask</td>
                 </tr>
                 <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                   <td className="py-4 px-6 font-medium">Web Technologies</td>
                   <td className="py-4 px-6 text-gray-600 dark:text-gray-400">HTML, CSS, Bootstrap, Jinja, REST APIs</td>
                 </tr>
                 <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                   <td className="py-4 px-6 font-medium">Data & ML</td>
                   <td className="py-4 px-6 text-gray-600 dark:text-gray-400">PyTorch, Scikit-learn, TensorFlow, NumPy, Pandas, Matplotlib, seaborn, Power BI</td>
                 </tr>
                 <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                   <td className="py-4 px-6 font-medium">Databases</td>
                   <td className="py-4 px-6 text-gray-600 dark:text-gray-400">MySQL, PostgreSQL, MongoDB, SQLite, Redis</td>
                 </tr>
                 <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                   <td className="py-4 px-6 font-medium">Cloud & DevOps</td>
                   <td className="py-4 px-6 text-gray-600 dark:text-gray-400">AWS (EC2, S3, IAM, Lambda, RDS), CI/CD, Git, GitHub, Postman</td>
                 </tr>
               </tbody>
             </table>
           </div>
        </section>

        <section>
           <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-500" /> Industry Programs (AICTE)
           </h3>
           <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4 py-2">
                 <h4 className="font-bold">EduSkills – Web Development (Apr 2024 – Jun 2024)</h4>
                 <ul className="text-sm text-gray-600 dark:text-gray-400 list-disc pl-5 mt-2">
                    <li>Built 5+ responsive web applications using HTML, CSS, JavaScript, and Bootstrap.</li>
                    <li>Collaborated on backend integrations, reducing page load time by 30%.</li>
                 </ul>
              </div>
              <div className="border-l-4 border-orange-500 pl-4 py-2">
                 <h4 className="font-bold">AWS – AWS Cloud Practices (Jul 2024 – Sept 2024)</h4>
                 <ul className="text-sm text-gray-600 dark:text-gray-400 list-disc pl-5 mt-2">
                    <li>Learned and implemented 15+ AWS services for cloud-based applications.</li>
                    <li>Deployed 3+ scalable, highly available applications on AWS.</li>
                 </ul>
              </div>
              <div className="border-l-4 border-red-500 pl-4 py-2">
                 <h4 className="font-bold">Google – Artificial Intelligence & Machine Learning (Oct 2024 – Dec 2024)</h4>
                 <ul className="text-sm text-gray-600 dark:text-gray-400 list-disc pl-5 mt-2">
                    <li>Applied supervised and unsupervised learning on real-world datasets.</li>
                    <li>Gained hands-on experience evaluating performance using 10+ metrics.</li>
                 </ul>
              </div>
           </div>
        </section>

        <section>
           <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-blue-500" /> Certifications
           </h3>
           <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-center gap-2">
                 <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                 Microsoft Certified: Azure Fundamentals (AZ-900)
              </li>
              <li className="flex items-center gap-2">
                 <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                 Oracle Cloud Infrastructure 2025 Certified Generative AI Professional
              </li>
           </ul>
        </section>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
           <a href="https://github.com/AQSA-ZAM-ZAM-MIRZA-JOHAR-BAIG" target="_blank" className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 font-semibold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
             Visit My GitHub Profile
           </a>
        </div>
      </div>
    </article>
  );
}
