
import { Type } from "lucide-react";
import Link from "next/link";
import { DownloadAllButton } from "./DownloadAllButton";
import { getScannedFonts } from "@/app/lib/font-scanner";

export async function SiteHeader() {
  const scannedFonts = await getScannedFonts();

  return (
    <header className="border-b border-border/50 bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="bg-primary text-primary-foreground p-2 rounded-lg">
            <Type className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-headline font-bold text-white tracking-tight">
              Tringledo <span className="text-primary">Fonts</span>
            </h1>
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">
              Curated Open Source Typography
            </p>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/all-fonts" className="text-sm font-medium hover:text-primary transition-colors">Catalog</Link>
          <a href="#license" className="text-sm font-medium hover:text-primary transition-colors">Licensing</a>
          <DownloadAllButton fonts={scannedFonts} />
        </nav>
      </div>
    </header>
  );
}
