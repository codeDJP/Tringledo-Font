
"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { FONT_CATALOG } from "@/app/lib/font-catalog";
import { FontCard } from "./FontCard";
import { Search } from "lucide-react";
import { SloganGenerator } from "./SloganGenerator";

interface FontGalleryProps {
  initialScannedFonts: any[];
}

export function FontGallery({ initialScannedFonts }: FontGalleryProps) {
  const searchParams = useSearchParams();
  const [previewText, setPreviewText] = useState("");
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const [activeCategory, setActiveCategory] = useState<string | null>(searchParams.get("cat") || null);

  const allFonts = useMemo(() => {
    return [...initialScannedFonts, ...FONT_CATALOG];
  }, [initialScannedFonts]);

  const filteredFonts = useMemo(() => {
    const normalizedQuery = searchQuery.toLowerCase().replace(/[-_]/g, ' ').trim();
    
    return allFonts.filter(font => {
      const normalizedName = font.name.toLowerCase().replace(/[-_]/g, ' ');
      const normalizedFileName = (font.fileName || "").toLowerCase().replace(/[-_]/g, ' ');
      const normalizedDesigner = (font.designer || "").toLowerCase().replace(/[-_]/g, ' ');

      const matchesSearch = !searchQuery || 
                            normalizedName.includes(normalizedQuery) || 
                            normalizedFileName.includes(normalizedQuery) ||
                            normalizedDesigner.includes(normalizedQuery);

      const matchesCategory = activeCategory ? font.category === activeCategory : true;
      
      return matchesSearch && matchesCategory;
    });
  }, [allFonts, searchQuery, activeCategory]);

  const categories = useMemo(() => Array.from(new Set(allFonts.map(f => f.category))), [allFonts]);

  return (
    <section id="gallery" className="py-12 px-6">
      <div className="container mx-auto space-y-12">
        
        {/* Controls Section */}
        <div className="space-y-8 bg-[#1a1c15] p-6 md:p-10 rounded-2xl border border-border/50">
          <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center">
            <div className="flex-1 w-full space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-primary">Live Type Preview</label>
              <div className="relative group">
                <input
                  type="text"
                  value={previewText}
                  onChange={(e) => setPreviewText(e.target.value)}
                  placeholder="Type something to preview across all fonts..."
                  className="w-full bg-background/50 border-b-2 border-border focus:border-primary px-0 py-4 text-2xl md:text-3xl font-headline font-light focus:outline-none transition-all placeholder:text-muted-foreground/30"
                />
                <div className="absolute right-0 top-1/2 -translate-y-1/2">
                   <SloganGenerator onSelect={setPreviewText} />
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-72 space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Search Catalog</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Font name or designer..."
                  className="w-full bg-background/50 border border-border rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border/50">
            <div className="flex flex-wrap items-center gap-2">
              <button 
                onClick={() => setActiveCategory(null)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all border ${!activeCategory ? 'bg-primary text-primary-foreground border-primary' : 'bg-transparent text-muted-foreground border-border hover:border-muted-foreground'}`}
              >
                All Fonts
              </button>
              {categories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all border ${activeCategory === cat ? 'bg-primary text-primary-foreground border-primary' : 'bg-transparent text-muted-foreground border-border hover:border-muted-foreground'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
            
            <div className="flex items-center gap-4 text-muted-foreground">
              <span className="text-xs font-medium">{filteredFonts.length} Fonts Available</span>
            </div>
          </div>
        </div>

        {/* Grid Display */}
        {filteredFonts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredFonts.map(font => (
              <FontCard key={font.id} font={font} previewText={previewText} />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center space-y-4">
            <Search className="w-12 h-12 text-muted-foreground/20 mx-auto" />
            <h3 className="text-xl font-headline font-bold">No fonts found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filters to find what you're looking for.</p>
          </div>
        )}
      </div>
    </section>
  );
}
