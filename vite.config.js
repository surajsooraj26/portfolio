import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/portfolio/", // Set the base path for deployment

  // server: {
  //   host: "0.0.0.0", // allow external access
  //   port: 5173, // your Vite port
  //   strictPort: true,
  //   cors: true, // enable CORS if needed
  //   origin: "https://a32ce37be1ad.ngrok-free.app/", // <-- Replace with your ngrok URL
  // },
});
