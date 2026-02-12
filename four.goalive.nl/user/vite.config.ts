import path from "node:path";
import react from "@vitejs/plugin-react-swc";
import { aliveTagger } from "@alive-game/alive-tagger";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
	server: {
		host: "::",
		port: 3345,
		allowedHosts: ["localhost", ".alive.best", ".sonno.tech"],
		hmr: {
			// For reverse proxy (Caddy) with HTTPS
			protocol: "wss",
			clientPort: 443,
		},
		headers: {
			"X-Frame-Options": "ALLOWALL",
		},
	},
	preview: {
		host: "::",
		port: 3345,
		allowedHosts: ["localhost", ".alive.best", ".sonno.tech"],
		headers: {
			"X-Frame-Options": "ALLOWALL",
		},
	},
	plugins: [react(), mode === "development" && aliveTagger()].filter(
		Boolean,
	),
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
}));
