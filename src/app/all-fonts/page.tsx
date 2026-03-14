import { SiteHeader } from "@/components/SiteHeader";
import { FontGallery } from "@/components/FontGallery";
import { getScannedFonts } from "@/app/lib/font-scanner";
import { DynamicFontLoader } from "@/components/DynamicFontLoader";

export default async function AllFontsPage() {
  const scannedFonts = await getScannedFonts();

  return (
    <main className="min-h-screen">
      <DynamicFontLoader fonts={scannedFonts} />
      <SiteHeader />
      
      <div className="pt-12">
        <div className="container mx-auto px-6 mb-8 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-white mb-4">
            Browse the <span className="text-primary italic">Full</span> Catalog
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Explore our verified collection of open-source typefaces. Filter by category, test with live previews, and download your favorites.
          </p>
        </div>
        <FontGallery initialScannedFonts={scannedFonts} />
      </div>

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
