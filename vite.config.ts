import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// Экспорт конфигурации Vite
export default defineConfig({
	plugins: [tsconfigPaths()],
	base: '/kicks',
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern',
			},
		},
	},
})
