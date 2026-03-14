import fs from 'fs';
import path from 'path';

export interface ScannedFont {
  id: string;
  name: string;
  fileName: string;
  url: string;
  category: 'Uploaded' | 'Archive';
  designer: string;
  styles: string[];
  cssFamily: string;
  isArchive: boolean;
}

export async function getScannedFonts(): Promise<ScannedFont[]> {
  const fontsDir = path.join(process.cwd(), 'public', 'fonts');
  
  if (!fs.existsSync(fontsDir)) {
    try {
      fs.mkdirSync(fontsDir, { recursive: true });
    } catch (e) {
      console.error('Could not create fonts directory', e);
      return [];
    }
    return [];
  }

  try {
    const files = fs.readdirSync(fontsDir);
    const fontExtensions = ['.ttf', '.otf', '.woff', '.woff2'];
    const archiveExtensions = ['.zip', '.rar', '.7z'];
    
    return files
      .filter(file => {
        const ext = path.extname(file).toLowerCase();
        return fontExtensions.includes(ext) || archiveExtensions.includes(ext);
      })
      .map(file => {
        const ext = path.extname(file).toLowerCase();
        const isArchive = archiveExtensions.includes(ext);
        const name = path.parse(file).name
          .replace(/[-_]/g, ' ')
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
          
        return {
          id: `scanned-${file}`,
          name: name,
          fileName: file,
          url: `/fonts/${file}`,
          category: isArchive ? 'Archive' : 'Uploaded',
          designer: 'Local File',
          styles: ['Regular'],
          cssFamily: isArchive ? 'inherit' : `'${name}', sans-serif`,
          isArchive
        };
      })
      .sort((a, b) => a.name.localeCompare(b.name));
  } catch (error) {
    console.error('Error scanning fonts directory:', error);
    return [];
  }
}
