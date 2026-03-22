import type { Metadata } from 'next';
import { Calendar, Clock, ChevronRight, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blogs',
  description: 'Technical insights from AqsA Baig blogs coding. Topics cover Data Structures, Machine Learning algorithms, and AWS deployment strategies.',
  alternates: { canonical: '/blogs' }
};

const posts = [
  {
    id: 1,
    title: 'Optimizing Data Structures for Technical Interviews',
    excerpt: 'A comprehensive guide to cracking FAANG-level algorithmic challenges by breaking down trees, graphs, and dynamic programming.',
    date: 'March 15, 2026',
    readTime: '8 min read',
    category: 'Algorithms',
    author: 'AqsA Baig'
  },
  {
    id: 2,
    title: 'Deploying Machine Learning Models on AWS serverless',
    excerpt: 'Step-by-step tutorial on taking a PyTorch sentiment analysis model from local Jupyter to AWS Lambda with API Gateway.',
    date: 'February 28, 2026',
    readTime: '12 min read',
    category: 'DevOps & ML',
    author: 'AqsA Baig'
  },
  {
    id: 3,
    title: 'Why Next.js App Router is the Future of Full Stack',
    excerpt: 'Analyzing the architectural benefits of Server Components and how they solve the traditional React hydration waterfall problem.',
    date: 'January 10, 2026',
    readTime: '6 min read',
    category: 'Web Dev',
    author: 'AqsA Baig'
  }
];

export default function BlogsPage() {
  return (
    <section className="max-w-4xl mx-auto py-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <header className="mb-12 border-b border-gray-200 dark:border-gray-800 pb-8">
         <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">AqsA Baig Blogs Coding</h1>
         <p className="text-xl text-gray-600 dark:text-gray-400 font-light">
           Deep dives into software architecture, algorithmic patterns, and DevOps infrastructure. Documenting the learning process of a CS student at VIIT Pune.
         </p>
      </header>
      
      <div className="space-y-10">
        {posts.map(post => (
          <article key={post.id} className="group flex flex-col sm:flex-row gap-6 items-start p-6 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors border border-transparent hover:border-gray-200 dark:hover:border-gray-700">
             <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 p-4 rounded-xl shrink-0">
                <BookOpen className="w-8 h-8" />
             </div>
             
             <div className="flex-1">
                <div className="flex items-center gap-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                   <span className="text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/40 px-3 py-1 rounded-full">{post.category}</span>
                   <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5"/> {post.date}</span>
                   <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5"/> {post.readTime}</span>
                </div>
                
                <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform w-max cursor-pointer">
                  Read Full Article <ChevronRight className="w-4 h-4 ml-1" />
                </div>
             </div>
          </article>
        ))}
      </div>
    </section>
  );
}
