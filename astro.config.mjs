// @ts-check
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

const site = 'https://bond.pe';

// https://astro.build/config
export default defineConfig({
    site,
    integrations: [sitemap()],
    vite: {
        plugins: [tailwindcss()]
    }
});
