"use client";

import { Download, FileArchive, Type } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface FontCardProps {
  font: any;
  previewText: string;
}

export function FontCard({ font, previewText }: FontCardProps) {
  const [downloading, setDownloading] = useState(false);
  const { toast } = useToast();

  const handleDownload = () => {
    if (!font.url) {
      toast({
        title: "Download Unavailable",
        description: "This font is served via a CDN and cannot be downloaded directly.",
        variant: "destructive",
      });
      return;
    }

    setDownloading(true);
    
    const link = document.createElement('a');
    link.href = font.url;
    link.download = font.fileName || `${font.name}.zip`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setDownloading(false);
      toast({
        title: "Download Started",
        description: `${font.name} is being downloaded.`,
      });
    }, 500);
  };

  const isArchive = font.isArchive;
  const fileExtension = font.fileName?.split('.').pop() || 'Web';

  return (
    <div className="font-preview-card bg-card border border-border/50 rounded-xl overflow-hidden hover:border-primary/50 flex flex-col group h-full">
      <div className="p-4 border-b border-border/50 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {isArchive ? (
            <FileArchive className="w-4 h-4 text-accent" />
          ) : (
            <Type className="w-4 h-4 text-primary" />
          )}
          <div>
            <h3 className="font-headline font-bold text-white text-sm">{font.name}</h3>
            <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">{font.designer || 'Open Source'}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
           <span className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-tighter ${isArchive ? 'bg-accent/10 text-accent' : 'bg-secondary text-primary'}`}>
            {font.category}
          </span>
        </div>
      </div>
      
      <div className={`flex-1 p-6 flex items-center justify-center min-h-[160px] ${isArchive ? 'bg-[#12140e]' : 'bg-[#1a1c15]'}`}>
        {isArchive ? (
          <div className="text-center space-y-2">
            <p className="text-muted-foreground text-xs uppercase tracking-widest font-bold">Compressed Archive</p>
            <p className="text-white/40 text-sm">Preview unavailable for ZIP files</p>
          </div>
        ) : (
          <p 
            style={{ fontFamily: font.name }}
            className="text-3xl md:text-4xl text-white text-center break-words leading-tight"
          >
            {previewText || "The quick brown fox jumps over the lazy dog"}
          </p>
        )}
      </div>

      <div className="p-4 bg-card/50 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="flex gap-4">
          <div className="flex flex-col">
            <span className="text-[9px] text-muted-foreground uppercase font-bold">Type</span>
            <span className="text-xs font-medium text-white">{isArchive ? 'Package' : 'Font Face'}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[9px] text-muted-foreground uppercase font-bold">Format</span>
            <span className="text-xs font-medium text-white uppercase">{fileExtension}</span>
          </div>
        </div>
        <Button 
          onClick={handleDownload}
          disabled={downloading}
          size="sm" 
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-8"
        >
          {downloading ? (
            <span className="flex items-center gap-2">Preparing...</span>
          ) : (
            <span className="flex items-center gap-2">
              <Download className="w-3.5 h-3.5" /> 
              {isArchive ? 'Download ZIP' : 'Get Font'}
            </span>
          )}
        </Button>
      </div>
    </div>
  );
}