
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react-swc';
  import path from 'path';
  import { writeFileSync, readFileSync } from 'fs';
  import { resolve } from 'path';

  // Plugin to generate favicon from shared logo data
  const faviconPlugin = () => {
    const generateFavicon = () => {
      try {
        const logoPathsContent = readFileSync(resolve(__dirname, 'src/assets/logoPaths.ts'), 'utf-8');
        // Extract the paths (simple regex extraction for build-time)
        const heartMatch = logoPathsContent.match(/heart:\s*"([^"]+)"/);
        const letterLMatch = logoPathsContent.match(/letterL:\s*"([^"]+)"/);
        const letterUMatch = logoPathsContent.match(/letterU:\s*"([^"]+)"/);
        const letterVMatch = logoPathsContent.match(/letterV:\s*"([^"]+)"/);
        const transformMatch = logoPathsContent.match(/transform:\s*"([^"]+)"/);
        
        if (heartMatch && letterLMatch && letterUMatch && letterVMatch && transformMatch) {
          const faviconSVG = `<svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="${heartMatch[1]}"
    fill="#f43f5e"
  />
  <g
    fill="white"
    fillRule="evenodd"
    stroke="#f43f5e"
    strokeWidth="2"
    transform="${transformMatch[1]}"
  >
    <path d="${letterLMatch[1]}"/>
    <g>
      <path d="${letterUMatch[1]}"/>
      <path d="${letterVMatch[1]}" fill="#f43f5e" fillRule="evenodd" stroke="none"/>
    </g>
  </g>
</svg>`;
          writeFileSync(resolve(__dirname, 'public/favicon.svg'), faviconSVG);
        }
      } catch (error) {
        console.warn('Could not generate favicon from logoPaths.ts:', error);
      }
    };

    return {
      name: 'generate-favicon',
      buildStart: generateFavicon,
      configureServer() {
        // Also generate on dev server start
        generateFavicon();
      },
    };
  };

  export default defineConfig({
    plugins: [react(), faviconPlugin()],
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      alias: {
        'vaul@1.1.2': 'vaul',
        'sonner@2.0.3': 'sonner',
        'recharts@2.15.2': 'recharts',
        'react-resizable-panels@2.1.7': 'react-resizable-panels',
        'react-hook-form@7.55.0': 'react-hook-form',
        'react-day-picker@8.10.1': 'react-day-picker',
        'next-themes@0.4.6': 'next-themes',
        'lucide-react@0.487.0': 'lucide-react',
        'input-otp@1.4.2': 'input-otp',
        'figma:asset/948fe3bdbd94ab8d333035ceffc4e0884e82054e.png': path.resolve(__dirname, './src/assets/948fe3bdbd94ab8d333035ceffc4e0884e82054e.png'),
        'figma:asset/5629bb49a580382f9f44d0885caef801b0de6dfc.png': path.resolve(__dirname, './src/assets/5629bb49a580382f9f44d0885caef801b0de6dfc.png'),
        'figma:asset/0b9bf62f4bbf6d17d9b64af8a00f57f76d9a7f7b.png': path.resolve(__dirname, './src/assets/0b9bf62f4bbf6d17d9b64af8a00f57f76d9a7f7b.png'),
        'embla-carousel-react@8.6.0': 'embla-carousel-react',
        'cmdk@1.1.1': 'cmdk',
        'class-variance-authority@0.7.1': 'class-variance-authority',
        '@radix-ui/react-tooltip@1.1.8': '@radix-ui/react-tooltip',
        '@radix-ui/react-toggle@1.1.2': '@radix-ui/react-toggle',
        '@radix-ui/react-toggle-group@1.1.2': '@radix-ui/react-toggle-group',
        '@radix-ui/react-tabs@1.1.3': '@radix-ui/react-tabs',
        '@radix-ui/react-switch@1.1.3': '@radix-ui/react-switch',
        '@radix-ui/react-slot@1.1.2': '@radix-ui/react-slot',
        '@radix-ui/react-slider@1.2.3': '@radix-ui/react-slider',
        '@radix-ui/react-separator@1.1.2': '@radix-ui/react-separator',
        '@radix-ui/react-select@2.1.6': '@radix-ui/react-select',
        '@radix-ui/react-scroll-area@1.2.3': '@radix-ui/react-scroll-area',
        '@radix-ui/react-radio-group@1.2.3': '@radix-ui/react-radio-group',
        '@radix-ui/react-progress@1.1.2': '@radix-ui/react-progress',
        '@radix-ui/react-popover@1.1.6': '@radix-ui/react-popover',
        '@radix-ui/react-navigation-menu@1.2.5': '@radix-ui/react-navigation-menu',
        '@radix-ui/react-menubar@1.1.6': '@radix-ui/react-menubar',
        '@radix-ui/react-label@2.1.2': '@radix-ui/react-label',
        '@radix-ui/react-hover-card@1.1.6': '@radix-ui/react-hover-card',
        '@radix-ui/react-dropdown-menu@2.1.6': '@radix-ui/react-dropdown-menu',
        '@radix-ui/react-dialog@1.1.6': '@radix-ui/react-dialog',
        '@radix-ui/react-context-menu@2.2.6': '@radix-ui/react-context-menu',
        '@radix-ui/react-collapsible@1.1.3': '@radix-ui/react-collapsible',
        '@radix-ui/react-checkbox@1.1.4': '@radix-ui/react-checkbox',
        '@radix-ui/react-avatar@1.1.3': '@radix-ui/react-avatar',
        '@radix-ui/react-aspect-ratio@1.1.2': '@radix-ui/react-aspect-ratio',
        '@radix-ui/react-alert-dialog@1.1.6': '@radix-ui/react-alert-dialog',
        '@radix-ui/react-accordion@1.2.3': '@radix-ui/react-accordion',
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      target: 'esnext',
      outDir: 'build',
    },
    server: {
      port: 3000,
      open: true,
    },
  });