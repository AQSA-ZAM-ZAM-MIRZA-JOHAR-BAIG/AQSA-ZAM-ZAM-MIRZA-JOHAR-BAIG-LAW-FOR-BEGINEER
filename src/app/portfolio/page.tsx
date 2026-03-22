import type { Metadata } from 'next';
import { Terminal, Github, Code2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore AqsA Zam Zam Mirza projects. Scalable e-commerce backends, Hospital Management logic, and Machine Learning models.',
  alternates: { canonical: '/portfolio' }
};

const projects = [
  { 
    id: 1, 
    title: 'E-Commerce Microservices Backend', 
    desc: 'Engineered a highly scalable, fault-tolerant backend architecture handling thousands of concurrent requests using Node.js and distributed AWS services.', 
    tech: ['AWS', 'Node.js', 'Redis', 'Docker'],
    icon: <Terminal className="w-8 h-8"/>,
    link: "https://github.com/AQSA-ZAM-ZAM-MIRZA-JOHAR-BAIG"
  },
  { 
    id: 2, 
    title: 'Smart Hospital Management System', 
    desc: 'Developed comprehensive patient tracking schemas and predictive ML logic utilizing Random Forest to forecast ICU bed availability during high-traffic periods.', 
    tech: ['Python', 'Flask', 'React', 'MongoDB'],
    icon: <Code2 className="w-8 h-8"/>,
    link: "https://github.com/AQSA-ZAM-ZAM-MIRZA-JOHAR-BAIG"
  },
  { 
    id: 3, 
    title: 'IPO Sentiment Analysis Platform', 
    desc: 'Constructed live data scraping pipelines fetching market data and applying NLP sentiment analysis to rank upcoming IPOs for retail investors.', 
    tech: ['Next.js', 'Python', 'Pandas', 'NLTK'],
    icon: <Terminal className="w-8 h-8"/>,
    link: "https://github.com/AQSA-ZAM-ZAM-MIRZA-JOHAR-BAIG"
  },
  { 
    id: 4, 
    title: 'DevOps CI/CD Pipeline Generator', 
    desc: 'Created an automated workflow generation tool that provisions GitHub Actions templates for Next.js and Django monoliths instantly, cutting setup time by 90%.', 
    tech: ['GitHub Actions', 'YAML', 'Bash'],
    icon: <Code2 className="w-8 h-8"/>,
    link: "https://github.com/AQSA-ZAM-ZAM-MIRZA-JOHAR-BAIG"
  },
  { 
    id: 5, 
    title: 'Predictive NLP Model for Text Summarization', 
    desc: 'Fine-tuned a specialized transformer model capable of summarizing lengthy legal and financial documents while preserving over 95% of critical factual contexts.', 
    tech: ['PyTorch', 'HuggingFace', 'FastAPI'],
    icon: <Terminal className="w-8 h-8"/>,
    link: "https://github.com/AQSA-ZAM-ZAM-MIRZA-JOHAR-BAIG"
  },
];

export default function PortfolioPage() {
  return (
    <section className="max-w-6xl mx-auto py-10 animate-in fade-in slide-in-from-bottom-6 duration-700">
      <header className="mb-12 max-w-2xl">
         <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-gray-900 dark:text-white">AqsA Johar Baig Portfolio</h1>
         <p className="text-lg text-gray-600 dark:text-gray-400">
           A deep dive into the architectural decisions, scalable deployments, and robust <strong>AqsA Zam Zam Mirza projects</strong>. Blending theoretical knowledge from VIIT Pune with real-world complexities.
         </p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(p => (
          <div key={p.id} className="group bg-white dark:bg-gray-800/80 rounded-2xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700/80 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
            <div className="p-8 pb-0">
               <div className="bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-blue-100 dark:border-blue-900/50 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {p.icon}
               </div>
               <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100 tracking-tight leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                 {p.title}
               </h2>
               <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed">
                 {p.desc}
               </p>
            </div>
            
            <div className="mt-auto p-8 pt-0">
               <div className="flex flex-wrap gap-2 mb-6">
                 {p.tech.map(t => (
                    <span key={t} className="text-xs font-mono font-medium bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-300 px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700">
                      {t}
                    </span>
                 ))}
               </div>
               
               <a href={p.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors gap-1.5">
                  <Github className="w-4 h-4" /> View Source 
               </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
