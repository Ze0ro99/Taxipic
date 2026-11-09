import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["sb-646x9zk48t36.vercel.run"],
  },
})
