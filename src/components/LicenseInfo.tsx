import { ShieldCheck, Info, AlertTriangle } from "lucide-react";

export function LicenseInfo() {
  return (
    <section id="license" className="py-24 px-6 bg-[#0f110d] border-t border-border/50">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="bg-accent/10 text-accent p-3 rounded-2xl">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-headline font-bold text-white">Non-Commercial Usage & Licensing</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              All fonts provided by <a href="https://www.tringledo.com/" target="_blank" rel="noopener noreferrer" className="text-white font-bold hover:text-primary transition-colors">Tringledo</a> are open-source and intended primarily for 
              <span className="text-accent"> non-commercial</span>, educational, or personal creative projects. While many fonts follow the 
              SIL Open Font License (OFL), it is crucial for designers to verify the specific license attached to each archive.
            </p>
            
            <div className="bg-card border border-border p-5 rounded-xl space-y-3">
              <h4 className="font-bold flex items-center gap-2 text-sm uppercase tracking-wider">
                <Info className="w-4 h-4 text-primary" /> Permitted Use
              </h4>
              <ul className="text-xs space-y-2 text-muted-foreground">
                <li>• Personal portfolio projects</li>
                <li>• Educational assignments & research</li>
                <li>• Non-profit organizational branding</li>
                <li>• Social media content (non-sponsored)</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-accent/5 border border-accent/20 p-5 rounded-xl space-y-3">
              <h4 className="font-bold flex items-center gap-2 text-sm uppercase tracking-wider text-accent">
                <AlertTriangle className="w-4 h-4" /> Commercial Disclaimer
              </h4>
              <p className="text-xs leading-relaxed text-muted-foreground">
                If you intend to use these fonts for high-revenue commercial purposes, advertising, or mass-produced retail products, 
                please double-check the bundled license file. Most authors appreciate a small donation or attribution even if not strictly required.
              </p>
            </div>

            <div className="pt-4">
              <p className="text-sm text-muted-foreground">
                Need more info? Contact our licensing department or visit the <a href="https://openfontlicense.org/ofl-faq/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">OFL Official FAQ</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
