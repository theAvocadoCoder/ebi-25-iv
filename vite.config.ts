import { resolve } from "node:path"
import { defineConfig } from "vite"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  input: {
    main: resolve(import.meta.dirname, "index.html"),
    perfumes: resolve(import.meta.dirname, "perfumes/index.html"),
    guests: resolve(import.meta.dirname, "guests/index.html"),
  },
  plugins: [
    tailwindcss(),
  ],
})