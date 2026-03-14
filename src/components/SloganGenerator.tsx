"use client";

import { useState } from "react";
import { Sparkles, Loader2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generateSloganSuggestions } from "@/ai/flows/generate-slogan-suggestions";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface SloganGeneratorProps {
  onSelect: (slogan: string) => void;
}

export function SloganGenerator({ onSelect }: SloganGeneratorProps) {
  const [loading, setLoading] = useState(false);
  const [slogans, setSlogans] = useState<string[]>([]);
  const [topic, setTopic] = useState("");

  const handleGenerate = async () => {
    if (!topic.trim()) return;
    setLoading(true);
    try {
      const result = await generateSloganSuggestions({ topic });
      setSlogans(result.slogans);
    } catch (error) {
      console.error("Failed to generate slogans", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="sm" className="text-accent hover:text-accent hover:bg-accent/10 gap-2">
          <Sparkles className="w-4 h-4" />
          AI Slogans
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-4 border-border bg-card shadow-2xl" align="end">
        <div className="space-y-4">
          <div className="space-y-2">
            <h4 className="font-headline font-semibold text-sm">Generate Preview Slogans</h4>
            <p className="text-xs text-muted-foreground">Type a topic and let AI create varied phrases for testing fonts.</p>
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="e.g. coffee shop, futuristic city"
              className="flex-1 bg-background border border-border rounded-md px-3 py-1.5 text-xs focus:outline-none focus:ring-1 focus:ring-primary"
              onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
            />
            <Button size="sm" onClick={handleGenerate} disabled={loading || !topic}>
              {loading ? <Loader2 className="w-3 h-3 animate-spin" /> : "Go"}
            </Button>
          </div>
          
          {slogans.length > 0 && (
            <div className="pt-2 border-t border-border space-y-2 max-h-48 overflow-y-auto custom-scrollbar">
              {slogans.map((slogan, i) => (
                <button
                  key={i}
                  onClick={() => {
                    onSelect(slogan);
                  }}
                  className="w-full text-left text-xs p-2 rounded hover:bg-secondary border border-transparent hover:border-border transition-all flex items-center justify-between group"
                >
                  <span className="truncate mr-2">{slogan}</span>
                  <Check className="w-3 h-3 opacity-0 group-hover:opacity-100 text-primary" />
                </button>
              ))}
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}
