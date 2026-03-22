import type { Metadata } from 'next';
import { Feather, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Urdu Shayari',
  description: 'Original AqsA Mirza Urdu shayari. Read deep, emotional poetry and ghazals written in Urdu, Devanagari, and English transliteration.',
  alternates: { canonical: '/urdu-shayari' }
};

const shayariCollection = [
  {
    title: "1: The Code of Silence",
    urdu: "خاموشی کا بھی اپنا اک مقام ہے\nہر لفظ میں چھپا اک پیام ہے",
    roman: "Khamoshi ka bhi apna ik maqaam hai,\nHar lafz mein chhupa ik payaam hai.",
    english: "(Silence too holds a station of its own, / In every word, a hidden message is sown.)"
  },
  {
    title: "2: Variables of Love",
    urdu: "محبتوں کے بھی کچھ اصول ہوتے ہیں\nبغیر شرط کے جو قبول ہوتے ہیں",
    roman: "Mohabbaton ke bhi kuch usool hotay hain,\nBaghair shart ke jo qubool hotay hain.",
    english: "(Love too operates on certain strict principles, / Accepted truly only when conditionally invisible.)"
  },
  {
    title: "3: The Infinite Loop",
    urdu: "زندگی کا سفر، ایک جستجو ہے مسلسل\nکبھی منزل، تو کبھی راستہ ہے الجھن",
    roman: "Zindagi ka safar, ek justuju hai musalsal,\nKabhi manzil, toh kabhi raasta hai uljhan.",
    english: "(The journey of life is a continuous quest, / Sometimes the destination, sometimes the path tests.)"
  },
  {
    title: "4: Logic Errors in Heart",
    urdu: "دل کے معاملات میں عقل کہاں چلتی ہے\nیہ تو وہ شاخ ہے جو کٹنے سے اور پھلتی ہے",
    roman: "Dil ke maamlaat mein aql kahan chalti hai,\nYeh toh wo shakh hai jo katne se aur phalti hai.",
    english: "(Where does logic work in matters of the heart? / It is the branch that flourishes more when torn apart.)"
  },
  {
    title: "5: Compiling Dreams",
    urdu: "خوابوں کی تعبیر میں صدیاں گزاری ہیں میں نے\nتب جا کر یہ راتیں کہیں سنواری ہیں میں نے",
    roman: "Khwabon ki tabeer mein sadiyan guzari hain maine,\nTab jaa kar yeh raatein kahin sanwari hain maine.",
    english: "(Centuries I've spent compiling the interpretation of dreams, / Only then have I decorated these nights into gentle streams.)"
  }
];

export default function ShayariPage() {
  return (
    <section className="max-w-3xl mx-auto py-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <header className="mb-14 text-center">
        <div className="mx-auto w-16 h-16 bg-rose-100 dark:bg-rose-900/30 rounded-full flex items-center justify-center mb-6 text-rose-600">
           <Feather className="w-8 h-8" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">AqsA Mirza Urdu Shayari</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Between the lines of rigorous code, I write the lines of life. Explore the soul-stirring world of <strong>AQSA ZAM ZAM MIRZA JOHAR BAIG</strong> through original Urdu poetry, blending technical logic with deep emotion.
        </p>
      </header>

      <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 dark:before:via-gray-800 before:to-transparent">
        {shayariCollection.map((poem, idx) => (
          <article key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            {/* Timeline dot */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-rose-200 dark:border-rose-900 bg-white dark:bg-gray-900 text-rose-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:bg-rose-500 group-hover:text-white transition-colors duration-300 z-10">
              <Heart className="w-4 h-4 fill-current opacity-50" />
            </div>
            
            {/* Content Box */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 md:p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700/60 hover:shadow-md transition-shadow">
              <h2 className="text-xl font-bold mb-6 text-rose-600 dark:text-rose-400">Ghazal {poem.title}</h2>
              
              {/* Urdu RTL */}
              <div 
                className="text-right font-serif text-2xl md:text-3xl leading-loose mb-6 text-gray-900 dark:text-gray-100 border-r-4 border-rose-200 dark:border-rose-900/50 pr-4" 
                dir="rtl"
              >
                {poem.urdu.split('\n').map((line, i) => <p key={i}>{line}</p>)}
              </div>
              
              {/* Transliteration */}
              <div className="italic text-gray-700 dark:text-gray-300 mb-4 bg-gray-50 dark:bg-gray-900/50 p-4 rounded-lg">
                {poem.roman.split('\n').map((line, i) => <p key={i}>{line}</p>)}
              </div>
              
              {/* English Translation */}
              <div className="font-light text-sm text-gray-500 dark:text-gray-400 mt-4 leading-relaxed tracking-wide">
                {poem.english}
              </div>
            </div>
          </article>
        ))}
      </div>
      
      <div className="mt-16 text-center text-sm text-gray-500">
         <p>All poetry © 2026 AQSA ZAM ZAM MIRZA JOHAR BAIG. Original works.</p>
      </div>
    </section>
  );
}
