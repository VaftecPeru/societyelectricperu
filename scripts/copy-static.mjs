import { copyFile, mkdir } from 'node:fs/promises'

await mkdir('dist', { recursive: true })
await copyFile('public/.htaccess', 'dist/.htaccess')
console.log('Copied cPanel SPA rewrite rules to dist/.htaccess')
