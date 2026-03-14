import { SiteHeader } from "@/components/SiteHeader";
import { LicenseInfo } from "@/components/LicenseInfo";
import { Search } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      
      {/* Search Header Section */}
      <section className="pt-24 pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto relative z-10 text-center space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-headline font-bold text-white tracking-tighter">
              The <span className="text-primary italic">Font</span> Scanner
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A minimalist boutique of high-quality typography for your next project. 
              Search our curated archives below.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <form action="/all-fonts" className="relative group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <input 
                name="q"
                type="text" 
                placeholder="Search font names, styles, or designers..."
                className="w-full bg-[#1a1c15] border-2 border-border/50 focus:border-primary/50 rounded-full pl-16 pr-8 py-6 text-xl md:text-2xl font-headline focus:outline-none shadow-2xl transition-all"
              />
              <button 
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold hover:scale-105 transition-all"
              >
                Go
              </button>
            </form>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground/40 mr-2">Quick Access:</span>
              <Link href="/all-fonts" className="text-xs font-bold uppercase tracking-widest text-primary hover:underline">All Fonts</Link>
              <Link href="/all-fonts?cat=Serif" className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-white">Serif</Link>
              <Link href="/all-fonts?cat=Display" className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-white">Display</Link>
              <Link href="/all-fonts?cat=Monospace" className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-white">Monospace</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-headline font-bold text-white mb-6">Ready to see more?</h2>
          <Link 
            href="/all-fonts" 
            className="inline-flex bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-5 rounded-full font-bold text-lg transition-all transform hover:scale-105"
          >
            Explore Entire Catalog
          </Link>
        </div>
      </section>
      
      <LicenseInfo />

      <footer className="py-12 px-6 border-t border-border/50 bg-[#0a0c08]">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h4 className="text-lg font-headline font-bold text-white">
              <a href="https://www.tringledo.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Tringledo</a> Fonts
            </h4>
            <p className="text-sm text-muted-foreground">© 2026 Tringledo Creative Studios. All rights reserved.</p>
          </div>
          <div className="flex gap-8">
            <a href="https://x.com/KumarJayaranga" target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">Twitter</a>
            <a href="https://www.behance.net/kumarjayaranga" target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">Behance</a>
            <a href="https://dribbble.com/kumarjayaranga" target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">Dribbble</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
