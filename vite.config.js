import {defineConfig} from 'vite'
import path from 'path';
import fs from 'fs';
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
    css: {
        modules: {localsConvention: 'camelCase'},
        generateScopedName: '[name]_[hash:base64:5]'
    },
    resolve: {
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
        alias: {
            '@': path.resolve(__dirname, '/src'),
        },
    },
    server: {
        host: '0.0.0.0',
        port: 5000,
        https: {
            key: fs.readFileSync(path.resolve(__dirname, './localhost-key.pem')),
            cert: fs.readFileSync(path.resolve(__dirname, './localhost.pem')),
        }
    },
    plugins: [reactRefresh()]
})
