import path from "node:path";
import react from "@vitejs/plugin-react-swc";
import { componentTagger } from "lovable-tagger";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
	server: {
		host: "0.0.0.0",
		port: 3389,
		strictPort: true,
		allowedHosts: ["loodgieter.alive.best"],
		hmr: {
			protocol: "wss",
			host: "loodgieter.alive.best",
			port: 443,
			path: "/__vite_hmr",
		},
		fs: {
			strict: true,
			allow: ["/app"],
		},
		cors: true,
	},
	preview: {
		host: "0.0.0.0",
		port: 3389,
		allowedHosts: ["loodgieter.alive.best"],
	},
	plugins: [react(), mode === "development" && componentTagger()].filter(
		Boolean,
	),
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
}));
