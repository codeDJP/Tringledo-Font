
"use client";

import { Download, Loader2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface DownloadAllButtonProps {
  fonts: any[];
}

export function DownloadAllButton({ fonts }: DownloadAllButtonProps) {
  const [downloading, setDownloading] = useState(false);
  const { toast } = useToast();

  const handleDownloadAll = async () => {
    if (!fonts || fonts.length === 0) {
      toast({
        title: "No fonts found",
        description: "There are no fonts available to download.",
        variant: "destructive",
      });
      return;
    }

    setDownloading(true);
    toast({
      title: "Starting Download",
      description: `Preparing to download ${fonts.length} items. Please allow multiple downloads in your browser if prompted.`,
    });

    // We download them one by one with a small delay to avoid browser blocking
    for (let i = 0; i < fonts.length; i++) {
      const font = fonts[i];
      if (!font.url) continue;

      const link = document.createElement('a');
      link.href = font.url;
      link.download = font.fileName || `${font.name}.zip`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Small delay between downloads
      await new Promise(resolve => setTimeout(resolve, 500));
    }

    setDownloading(false);
    toast({
      title: "Downloads Queued",
      description: "All font files have been sent to your browser.",
    });
  };

  return (
    <button 
      onClick={handleDownloadAll}
      disabled={downloading}
      className="bg-secondary hover:bg-secondary/80 text-foreground px-4 py-2 rounded-full text-sm font-medium border border-border flex items-center gap-2 transition-all disabled:opacity-50"
    >
      {downloading ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : (
        <Download className="w-4 h-4" />
      )}
      {downloading ? "Downloading..." : "Download All"}
    </button>
  );
}
