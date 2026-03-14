'use client';

import { useMemo } from 'react';

interface ScannedFont {
  name: string;
  url: string;
  isArchive?: boolean;
}

export function DynamicFontLoader({ fonts }: { fonts: ScannedFont[] }) {
  const css = useMemo(() => {
    if (!fonts || fonts.length === 0) return '';
    return fonts
      .filter(font => !font.isArchive)
      .map(font => `
        @font-face {
          font-family: '${font.name}';
          src: url('${font.url}');
          font-display: swap;
        }
      `).join('\n');
  }, [fonts]);

  if (!css) return null;

  return <style dangerouslySetInnerHTML={{ __html: css }} />;
}
