import type { Metadata } from 'next';
import { Mail, MapPin, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with AqsA Zam Zam Mirza Johar Baig for developer roles across Nagpur, collaborations, and queries.',
  alternates: { canonical: '/contact' }
};

export default function ContactPage() {
  return (
    <section className="max-w-5xl mx-auto py-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Contact Info */}
        <div>
           <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Let&apos;s Connect.</h1>
           <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-10">
             Whether you&apos;re looking for a software developer to build your next scalable application, or want to discuss AI/ML research at VIIT Pune or IIT Madras, feel free to reach out. I&apos;m always open to discussing new projects and technical challenges.
           </p>
           
           <div className="space-y-8">
              <a href="mailto:aqsamirz6306@gmail.com" className="flex items-center gap-6 p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 hover:border-blue-500 hover:shadow-md transition-all group">
                 <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-xl text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                 </div>
                 <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-1">Email</h3>
                    <p className="text-lg font-medium text-gray-900 dark:text-white">aqsamirz6306@gmail.com</p>
                 </div>
              </a>
              
              <div className="flex items-center gap-6 p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700">
                 <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-xl text-green-600 dark:text-green-400">
                    <MapPin className="w-6 h-6" />
                 </div>
                 <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-1">Location</h3>
                    <p className="text-lg font-medium text-gray-900 dark:text-white">Pune, Maharashtra, India</p>
                 </div>
              </div>

              <div className="flex items-center gap-6 p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700">
                 <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-xl text-purple-600 dark:text-purple-400">
                    <Phone className="w-6 h-6" />
                 </div>
                 <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-1">Phone</h3>
                    <p className="text-lg font-medium text-gray-900 dark:text-white">+91 7219718451</p>
                 </div>
              </div>
           </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white dark:bg-gray-800 p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-700 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
           <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />
           
           <h2 className="text-2xl font-bold mb-8 relative z-10">Send a Message</h2>
           
           <form className="relative z-10 space-y-6">
              <div>
                 <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
                 <input type="text" id="name" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="John Doe" />
              </div>
              <div>
                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                 <input type="email" id="email" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
              </div>
              <div>
                 <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Message</label>
                 <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none" placeholder="How can I help you?"></textarea>
              </div>
              <button type="button" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                 Send Message via Next.js Action
              </button>
           </form>
        </div>
      </div>
    </section>
  );
}
