import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve, join } from 'path';
import fs from 'fs';

// 自动扫描 src/page 下所有 *.client.tsx 作为入口
// 自动扫描 src/page 下所有子目录的 *.client.tsx 作为入口，入口名用文件夹名
const entryRoot = resolve(__dirname, 'src/page');
const entries = {};

fs.readdirSync(entryRoot, { withFileTypes: true }).forEach(dirent => {
  if (dirent.isDirectory()) {
    // 查找该目录下的 *.client.tsx 文件
    const files = fs.readdirSync(join(entryRoot, dirent.name));
    const clientEntry = files.find(f => f.endsWith('.client.tsx'));
    if (clientEntry) {
      entries[dirent.name] = join(entryRoot, dirent.name, clientEntry);
    }
  }
});

export default defineConfig({
  root: '',
  build: {
    outDir: 'client/dist',
    emptyOutDir: true,
    rollupOptions: {
      input: entries,
      output: {
        entryFileNames: 'assets/[name].js',
      },
    },
  },
  plugins: [react()],
});