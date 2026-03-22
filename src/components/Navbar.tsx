import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 py-4 top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight text-blue-600 dark:text-blue-400">
          AqsA Johar Baig
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/about" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 font-medium">About</Link>
          <Link href="/portfolio" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 font-medium">Projects</Link>
          <Link href="/blogs" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 font-medium">Blogs</Link>
          <Link href="/urdu-shayari" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 font-medium">Urdu Shayari</Link>
          <Link href="/contact" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 font-medium">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
