import Link from "next/link";
import { ArrowRight, BookOpen, GraduationCap, Scale, ChevronRight, Github, Linkedin, Youtube, ExternalLink, User, Feather, FileText, Database, PenTool } from "lucide-react";
import { DashboardWidget } from "@/components/DashboardWidget";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center pt-8 pb-20 w-full px-4 sm:px-0">
      {/* Hero Section */}
      <section className="w-full max-w-5xl rounded-3xl bg-gradient-to-b from-primary/5 via-primary/[0.02] to-transparent pt-16 pb-12 sm:pt-24 sm:pb-20 px-6 sm:px-12 border border-primary/10 shadow-sm relative overflow-hidden">
        {/* Abstract decorative elements */}
        <div className="absolute top-0 right-0 -m-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-50 pointer-events-none" />
        <div className="absolute bottom-0 left-0 -m-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-50 pointer-events-none" />

        <div className="relative z-10 flex flex-col justify-center items-center text-center space-y-8 max-w-3xl mx-auto">
          <div className="inline-flex animate-in fade-in slide-in-from-bottom-4 duration-500 items-center rounded-full border px-4 py-1.5 text-sm font-semibold bg-white dark:bg-black text-primary border-primary/20 tracking-tight shadow-sm cursor-default">
            <GraduationCap className="w-4 h-4 mr-2" />
            Law made simple for everyone
          </div>
          <h1 className="animate-in fade-in slide-in-from-bottom-6 duration-700 text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-foreground text-balance leading-tight sm:leading-tight">
            Understand Your Rights <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
              Without the Jargon
            </span>
          </h1>
          <p className="animate-in fade-in slide-in-from-bottom-8 duration-1000 text-xl text-muted-foreground font-medium md:leading-relaxed text-balance max-w-2xl">
            A premium, beginner-friendly legal education platform designed to explain complex legal concepts using simple language and real-world scenarios.
          </p>
          <div className="animate-in fade-in slide-in-from-bottom-10 duration-1000 flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto">
            <Link
              href="/learn/introduction"
              className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-xl bg-primary px-8 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98]"
            >
              Start Learning Path
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/topics"
              className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-xl border-2 border-input bg-background/50 backdrop-blur-sm px-8 text-base font-semibold shadow-sm transition-all hover:bg-accent hover:text-accent-foreground hover:border-accent-foreground/20 hover:scale-[1.02] active:scale-[0.98]"
            >
              Browse Library
            </Link>
          </div>
        </div>
      </section>

      <DashboardWidget />

      {/* Feature Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 w-full max-w-5xl">
        <div className="group rounded-2xl border bg-card text-card-foreground shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] p-8 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1">
          <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
            <BookOpen className="h-7 w-7 text-primary group-hover:text-current" />
          </div>
          <h3 className="text-2xl font-bold mb-3 tracking-tight">Crystal Clear</h3>
          <p className="text-muted-foreground leading-relaxed">
            We break down the complexities of law into bite-sized, easy-to-understand explanations with relatable real-world analogies.
          </p>
        </div>
        
        <div className="group rounded-2xl border bg-card text-card-foreground shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] p-8 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1">
          <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
            <Scale className="h-7 w-7 text-primary group-hover:text-current" />
          </div>
          <h3 className="text-2xl font-bold mb-3 tracking-tight">Structured Paths</h3>
          <p className="text-muted-foreground leading-relaxed">
            Follow our guided curriculum logically, from Introduction to Law, to Civil Law, Fundamental Rights, and Criminal Law basics.
          </p>
        </div>
        
        <div className="group rounded-2xl border bg-card text-card-foreground shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] p-8 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1">
          <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
            <ArrowRight className="h-7 w-7 text-primary group-hover:text-current" />
          </div>
          <h3 className="text-2xl font-bold mb-3 tracking-tight">Actionable Tips</h3>
          <p className="text-muted-foreground leading-relaxed">
            Learn exactly what to do in practical scenarios, like knowing how to file an FIR or understanding your rights in an arrest.
          </p>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="w-full max-w-5xl mt-24 mb-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Popular Starting Points</h2>
          <Link href="/topics" className="text-primary font-medium hover:underline flex items-center mt-2 sm:mt-0">
            View all topics <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/learn/introduction/types-of-law" className="p-5 border rounded-xl hover:border-primary hover:bg-primary/5 transition-colors flex items-center justify-between group">
            <div className="flex items-center gap-4">
              <div className="bg-muted p-3 rounded-lg group-hover:bg-background">
                <BookOpen className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-foreground">Civil vs Criminal Law</h4>
                <p className="text-sm text-muted-foreground">Understand the two main branches</p>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
          </Link>

          <Link href="/learn/criminal/what-is-fir" className="p-5 border rounded-xl hover:border-primary hover:bg-primary/5 transition-colors flex items-center justify-between group">
            <div className="flex items-center gap-4">
              <div className="bg-muted p-3 rounded-lg group-hover:bg-background">
                <Scale className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-foreground">What is an FIR?</h4>
                <p className="text-sm text-muted-foreground">The first step in a criminal investigation</p>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
          </Link>
          
          <Link href="/learn/rights/freedom" className="p-5 border rounded-xl hover:border-primary hover:bg-primary/5 transition-colors flex items-center justify-between group">
            <div className="flex items-center gap-4">
              <div className="bg-muted p-3 rounded-lg group-hover:bg-background">
                <Scale className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-foreground">Right to Freedom</h4>
                <p className="text-sm text-muted-foreground">Your 6 key constitutional freedoms</p>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
          </Link>

          <Link href="/learn/civil/contracts" className="p-5 border rounded-xl hover:border-primary hover:bg-primary/5 transition-colors flex items-center justify-between group">
            <div className="flex items-center gap-4">
              <div className="bg-muted p-3 rounded-lg group-hover:bg-background">
                <BookOpen className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-foreground">Basics of Contracts</h4>
                <p className="text-sm text-muted-foreground">What makes a promise binding?</p>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
          </Link>
        </div>
      </section>

      {/* SEO Optimized Section: Online Profiles & Projects */}
      <section className="w-full max-w-5xl mt-12 mb-20">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary tracking-wide uppercase">Creator & Developer</p>
          <h2 className="text-3xl font-extrabold tracking-tight mt-2 pb-2">Aqsa Zam Zam Mirza Johar Baig</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            BA LLB Student at Dr. Panjabrao Deshmukh College of Law, Amravati | CLAT 2022 AIR 42 | Legal Researcher & Web Developer
          </p>
        </div>

        <div className="space-y-16">
          {/* Profiles */}
          <div>
            <div className="flex items-center gap-2 mb-6 border-b pb-2">
              <User className="w-5 h-5 text-primary" />
              <h3 className="text-2xl font-bold">Online Profiles</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <a href="https://www.linkedin.com/in/aqsa-zam-zam-mirza-johar-baig-28501b3b6/?isSelfProfile=true" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl border bg-card hover:border-primary hover:shadow-md transition-all group">
                <div className="bg-[#0A66C2]/10 p-3 rounded-lg text-[#0A66C2]"><Linkedin className="w-5 h-5" /></div>
                <div className="flex-1 overflow-hidden">
                  <div className="font-semibold text-sm truncate">LinkedIn</div>
                  <div className="text-xs text-muted-foreground truncate">Aqsa Zam Zam Mirza Johar Baig</div>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href="https://github.com/AQSA-ZAM-ZAM-MIRZA-JOHAR-BAIG" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl border bg-card hover:border-primary hover:shadow-md transition-all group">
                <div className="bg-foreground/10 p-3 rounded-lg text-foreground"><Github className="w-5 h-5" /></div>
                <div className="flex-1 overflow-hidden">
                  <div className="font-semibold text-sm truncate">GitHub</div>
                  <div className="text-xs text-muted-foreground truncate">@AQSA-ZAM-ZAM-MIRZA...</div>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href="https://www.youtube.com/@aqsamirza08" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl border bg-card hover:border-primary hover:shadow-md transition-all group">
                <div className="bg-[#FF0000]/10 p-3 rounded-lg text-[#FF0000]"><Youtube className="w-5 h-5" /></div>
                <div className="flex-1 overflow-hidden">
                  <div className="font-semibold text-sm truncate">YouTube</div>
                  <div className="text-xs text-muted-foreground truncate">@aqsamirza08</div>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href="https://aqsamirza08.medium.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl border bg-card hover:border-primary hover:shadow-md transition-all group">
                <div className="bg-foreground/10 p-3 rounded-lg text-foreground"><PenTool className="w-5 h-5" /></div>
                <div className="flex-1 overflow-hidden">
                  <div className="font-semibold text-sm truncate">Medium Blog</div>
                  <div className="text-xs text-muted-foreground truncate">@aqsamirza08</div>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href="https://www.kaggle.com/aqsamirza08" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl border bg-card hover:border-primary hover:shadow-md transition-all group">
                <div className="bg-[#20BEFF]/10 p-3 rounded-lg text-[#20BEFF]"><Database className="w-5 h-5" /></div>
                <div className="flex-1 overflow-hidden">
                  <div className="font-semibold text-sm truncate">Kaggle</div>
                  <div className="text-xs text-muted-foreground truncate">@aqsamirza08</div>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href="https://stackoverflow.com/users/32468898/aqsa-zam-zam-mirza-johar-baig" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl border bg-card hover:border-primary hover:shadow-md transition-all group">
                <div className="bg-[#F58025]/10 p-3 rounded-lg text-[#F58025]"><Database className="w-5 h-5" /></div>
                <div className="flex-1 overflow-hidden">
                  <div className="font-semibold text-sm truncate">Stack Overflow</div>
                  <div className="text-xs text-muted-foreground truncate">Aqsa Zam Zam Mirza...</div>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>

          {/* Projects */}
          <div>
            <div className="flex items-center gap-2 mb-6 border-b pb-2">
              <BookOpen className="w-5 h-5 text-primary" />
              <h3 className="text-2xl font-bold">Other Projects</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href="https://aqsa-zam-zam-mirza-johar-baig-portf.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-5 border rounded-xl hover:border-primary hover:bg-primary/5 transition-colors group">
                <div className="flex items-center gap-4">
                  <div className="bg-muted p-3 rounded-lg group-hover:bg-background text-primary"><User className="w-5 h-5" /></div>
                  <div>
                    <h4 className="font-semibold text-sm text-foreground">Personal Portfolio</h4>
                    <p className="text-xs text-muted-foreground">aqsa-zam-zam-mirza-johar-baig-portf</p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
              </a>
              <a href="https://aqsa-zam-zam-mirza-johar-baig-const.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-5 border rounded-xl hover:border-primary hover:bg-primary/5 transition-colors group">
                <div className="flex items-center gap-4">
                  <div className="bg-muted p-3 rounded-lg group-hover:bg-background text-primary"><Scale className="w-5 h-5" /></div>
                  <div>
                    <h4 className="font-semibold text-sm text-foreground">Constitutional Law Blog</h4>
                    <p className="text-xs text-muted-foreground">aqsa-zam-zam-mirza-johar-baig-const</p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
              </a>
              <a href="https://aqsa-zam-zam-mirza-johar-baig-law-d.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-5 border rounded-xl hover:border-primary hover:bg-primary/5 transition-colors group">
                <div className="flex items-center gap-4">
                  <div className="bg-muted p-3 rounded-lg group-hover:bg-background text-primary"><BookOpen className="w-5 h-5" /></div>
                  <div>
                    <h4 className="font-semibold text-sm text-foreground">Law Dictionary</h4>
                    <p className="text-xs text-muted-foreground">aqsa-zam-zam-mirza-johar-baig-law-d</p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
              </a>
              <a href="https://aqsa-zam-zam-mirza-johar-baig-blogs.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-5 border rounded-xl hover:border-primary hover:bg-primary/5 transition-colors group">
                <div className="flex items-center gap-4">
                  <div className="bg-muted p-3 rounded-lg group-hover:bg-background text-primary"><FileText className="w-5 h-5" /></div>
                  <div>
                    <h4 className="font-semibold text-sm text-foreground">Personal Blogs</h4>
                    <p className="text-xs text-muted-foreground">aqsa-zam-zam-mirza-johar-baig-blogs</p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
              </a>
              <a href="https://aqsa-zam-zam-mirza-johar-baig-urdu.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-5 border rounded-xl hover:border-primary hover:bg-primary/5 transition-colors group">
                <div className="flex items-center gap-4">
                  <div className="bg-muted p-3 rounded-lg group-hover:bg-background text-primary"><Feather className="w-5 h-5" /></div>
                  <div>
                    <h4 className="font-semibold text-sm text-foreground">Urdu Shayari</h4>
                    <p className="text-xs text-muted-foreground">aqsa-zam-zam-mirza-johar-baig-urdu</p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
