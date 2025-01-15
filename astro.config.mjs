// @ts-check
import { defineConfig } from "astro/config"

import tailwind from "@astrojs/tailwind"

import svelte from "@astrojs/svelte"

import vercel from "@astrojs/vercel"

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte()],
  site: "https://rhythmnationblog.netlify.app",
  adapter: vercel(),
})
