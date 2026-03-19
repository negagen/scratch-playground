import {defineConfig} from 'vite';

const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const isUserOrOrgPage = repo.endsWith('.github.io');
const pagesBase = repo && !isUserOrOrgPage ? `/${repo}/` : '/';

export default defineConfig({
  base: process.env.GITHUB_ACTIONS === 'true' ? pagesBase : '/',
  build: {
    sourcemap: true,
  },
  publicDir: 'public',
});
