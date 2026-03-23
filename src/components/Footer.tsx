export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-50 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-800 py-8 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <p className="text-gray-500 dark:text-gray-400 mb-4">
          SEO Optimized Portfolio created for AQSA ZAM ZAM MIRZA JOHAR BAIG
        </p>
        <div className="flex space-x-4 mb-4">
          <a href="https://linkedin.com/in/aqsamirza08" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            LinkedIn
          </a>
          <a href="https://github.com/AQSA-ZAM-ZAM-MIRZA-JOHAR-BAIG" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            GitHub
          </a>
        </div>
        <p className="text-sm text-gray-400 dark:text-gray-500">
          © {currentYear} AqsA Johar Baig. Built with Next.js (App Router).
        </p>
      </div>
    </footer>
  );
}
