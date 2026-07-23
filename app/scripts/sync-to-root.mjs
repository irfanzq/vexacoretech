import { cpSync, existsSync, rmSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const appRoot = join(dirname(fileURLToPath(import.meta.url)), '..')
const repoRoot = join(appRoot, '..')
const dist = join(appRoot, 'dist')

const siteEntries = [
  'assets',
  'css',
  'fonts',
  'images',
  'media',
  'index.html',
  '404.html',
  'robots.txt',
  'sitemap.xml',
  'CNAME',
  '.nojekyll',
]

const legacyRootFiles = ['script.js', 'styles.css', 'contact.html', 'favicon.svg']

for (const entry of siteEntries) {
  const source = join(dist, entry)
  if (!existsSync(source)) {
    continue
  }

  const target = join(repoRoot, entry)
  rmSync(target, { recursive: true, force: true })
  cpSync(source, target, { recursive: true })
}

for (const file of legacyRootFiles) {
  rmSync(join(repoRoot, file), { force: true })
}
