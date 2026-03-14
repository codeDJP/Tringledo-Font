export interface FontMetadata {
  id: string;
  name: string;
  designer: string;
  category: 'Serif' | 'Sans Serif' | 'Display' | 'Monospace';
  cssFamily: string;
  license: string;
  styles: string[];
}

export const FONT_CATALOG: FontMetadata[] = [
  {
    id: 'space-grotesk',
    name: 'Space Grotesk',
    designer: 'Florian Karsten',
    category: 'Sans Serif',
    cssFamily: "'Space Grotesk', sans-serif",
    license: 'OFL (Non-Commercial/Free)',
    styles: ['Light', 'Regular', 'Medium', 'Bold']
  },
  {
    id: 'bungee',
    name: 'Bungee',
    designer: 'David Jonathan Ross',
    category: 'Display',
    cssFamily: "'Bungee', cursive",
    license: 'OFL (Non-Commercial/Free)',
    styles: ['Regular']
  },
  {
    id: 'permanent-marker',
    name: 'Permanent Marker',
    designer: 'Font Diner',
    category: 'Display',
    cssFamily: "'Permanent Marker', cursive",
    license: 'Apache 2.0 (Free)',
    styles: ['Regular']
  },
  {
    id: 'jetbrains-mono',
    name: 'JetBrains Mono',
    designer: 'JetBrains',
    category: 'Monospace',
    cssFamily: "'JetBrains Mono', monospace",
    license: 'OFL (Non-Commercial/Free)',
    styles: ['Regular', 'Bold']
  },
  {
    id: 'playfair-display',
    name: 'Playfair Display',
    designer: 'Claus Eggers Sørensen',
    category: 'Serif',
    cssFamily: "'Playfair Display', serif",
    license: 'OFL (Non-Commercial/Free)',
    styles: ['Regular', 'Bold', 'Italic']
  },
  {
    id: 'unbounded',
    name: 'Unbounded',
    designer: 'Nanotoma',
    category: 'Sans Serif',
    cssFamily: "'Unbounded', sans-serif",
    license: 'OFL (Non-Commercial/Free)',
    styles: ['Regular', 'Bold']
  },
  {
    id: 'fraunces',
    name: 'Fraunces',
    designer: 'Phaedra Charles',
    category: 'Serif',
    cssFamily: "'Fraunces', serif",
    license: 'OFL (Non-Commercial/Free)',
    styles: ['Soft', 'Regular', 'Bold']
  },
  {
    id: 'syne',
    name: 'Syne',
    designer: 'Bonjour Monde',
    category: 'Display',
    cssFamily: "'Syne', sans-serif",
    license: 'OFL (Non-Commercial/Free)',
    styles: ['Regular', 'Bold', 'Extra Bold']
  },
  {
    id: 'outfit',
    name: 'Outfit',
    designer: 'Outfit Team',
    category: 'Sans Serif',
    cssFamily: "'Outfit', sans-serif",
    license: 'OFL (Non-Commercial/Free)',
    styles: ['Light', 'Regular', 'Bold']
  }
];
