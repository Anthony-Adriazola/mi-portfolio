import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"

import robotsTxt from "astro-robots-txt"

// https://astro.build/config
const isProd = process.env.NODE_ENV === 'production'

export default defineConfig({
  integrations: [tailwind(), robotsTxt()],
  site: 'https://anthony-adriazola.github.io',
  base: isProd ? '/mi-portfolio' : undefined,
})
