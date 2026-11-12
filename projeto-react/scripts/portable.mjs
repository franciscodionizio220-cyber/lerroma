import {readFileSync,writeFileSync,mkdirSync,cpSync} from 'node:fs';
import path from 'node:path';
const output='abrir-no-chrome';mkdirSync(output,{recursive:true});
let html=readFileSync('dist/index.html','utf8');
const scripts=[];
html=html.replace(/<script type="module"[^>]*src="([^"]+)"[^>]*><\/script>/g,(_,url)=>{
 const js=readFileSync(path.join('dist',url),'utf8').replaceAll('/images/','./images/');
 scripts.push(`<script>${js.replaceAll('</script','<\\/script')}</script>`);return '';
});
html=html.replace(/<link rel="stylesheet"[^>]*href="([^"]+)"[^>]*>/g,(_,url)=>{
 let css=readFileSync(path.join('dist',url),'utf8').replaceAll('/images/','./images/');
 css=css.replace(/url\(([^)]+)\)/g,(original,asset)=>{
 const file=asset.replace(/["']/g,'');if(!file.includes('.woff'))return original;
 const data=readFileSync(path.join('dist',file));return `url(data:font/woff2;base64,${data.toString('base64')})`;
 });return `<style>${css}</style>`;
});
html=html.replace('</body>',scripts.join('')+'</body>').replaceAll('href="/favicon.svg"','href="./favicon.svg"');
cpSync('public/images',`${output}/images`,{recursive:true});cpSync('public/favicon.svg',`${output}/favicon.svg`);
writeFileSync(`${output}/index.html`,html);console.log(`Versão para duplo clique: ${output}/index.html`);
