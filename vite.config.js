import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
	base: "/LoftSpace/",
	plugins: [
		svgr({
			include: "**/*.svg",
			svgrOptions: {
				icon: true,
				svgoConfig: {
					plugins: [
						{
							name: "convertColors",
							params: {
								currentColor: true,
							},
						},
					],
				},
			},
		}),
		react(),
	],
	resolve: {
		alias: [{ find: "@", replacement: "/src" }],
	},
	define: {
		__API__: JSON.stringify("https://loft-space-server.vercel.app"), //"http://localhost:8000"
	},
});
