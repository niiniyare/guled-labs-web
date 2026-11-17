// Checks every internal link and #anchor in the built site (dist/).
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const root = 'dist';
const files = [];
const walk = (d) => readdirSync(d).forEach((f) => {
  const p = join(d, f);
  statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') && files.push(p);
});
walk(root);

const pageFor = (path) => {
  const clean = path.replace(/\/$/, '');
  const cands = [join(root, clean, 'index.html'), join(root, clean + '.html'), join(root, clean)];
  return cands.find((c) => existsSync(c) && statSync(c).isFile());
};
const idsIn = (file) => new Set([...readFileSync(file, 'utf8').matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));

let bad = 0;
for (const file of files) {
  const html = readFileSync(file, 'utf8');
  const self = '/' + file.slice(root.length + 1).replace(/index\.html$/, '').replace(/\.html$/, '');
  for (const [, href] of html.matchAll(/\shref="([^"]+)"/g)) {
    if (/^(https?:|mailto:|tel:|\/_astro|\/favicon|\/sitemap)/.test(href) || href === '#') continue;
    const [path, hash] = href.split('#');
    const target = path ? pageFor(path.split('?')[0]) : file;
    if (!target) { console.log(`✗ ${self} → ${href} (missing page)`); bad++; continue; }
    if (hash && !idsIn(target).has(hash)) { console.log(`✗ ${self} → ${href} (missing #${hash})`); bad++; }
  }
}
console.log(bad ? `\n${bad} broken link(s) in ${files.length} pages` : `All internal links OK across ${files.length} pages`);
process.exit(bad ? 1 : 0);
