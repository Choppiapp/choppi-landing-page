import react from "@vitejs/plugin-react";
import svgr from 'vite-plugin-svgr';
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), svgr()],
	server: {
		allowedHosts: true,
	},
});
