import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// Wajib sama dengan nama repository GitHub kamu.
export default defineConfig({ plugins: [react()], base: '/zerava-filmboard/' });
