import { defineConfig } from '@/utils/config';
import path from 'path';

export default defineConfig({
  prefix: 'api',
  upload: {
    rootDir: path.resolve(__dirname, '../public/upload'),
  },
});
