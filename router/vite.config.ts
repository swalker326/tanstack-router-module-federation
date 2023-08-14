import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "router",
      filename: "remoteEntry.js",
      remotes: {
        host: "http://localhost:5000/assets/remoteEntry.js",
        remote: "http://localhost:5001/assets/remoteEntry.js",
      },
      exposes: {
        "./router": "./src/router",
      },
      shared: ["react", "react-dom", "@tanstack/react-router"]
    })
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false
  }
});
