// QA local: PLAYWRIGHT_MODULE pode apontar para uma instalação disponível no ambiente.
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
(async()=>{
 const browser=await chromium.launch({channel:'chrome',headless:true});
 const page=await browser.newPage({viewport:{width:1440,height:1000},reducedMotion:'reduce'});
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 // O mapa externo é conferido separadamente; o teste da aplicação não depende de terceiros.
 await page.route('https://maps.google.com/**',route=>route.fulfill({status:200,body:'<html><body>Mapa externo isolado no teste automatizado.</body></html>',contentType:'text/html'}));
 await page.goto('http://127.0.0.1:5173');await page.evaluate(()=>document.fonts.ready);await page.locator('img').evaluateAll(imgs=>Promise.all(imgs.map(img=>{img.loading='eager';return img.decode();}))); 
 for(const width of [1920,1440,1366,1024,768,430,390,360]){
  await page.setViewportSize({width,height:1000});
  assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`overflow em ${width}px`);
  assert.equal(await page.locator('img').evaluateAll(imgs=>imgs.filter(img=>!img.complete||img.naturalWidth===0).length),0);
 }
 await page.setViewportSize({width:390,height:844});
 await page.getByRole('button',{name:'Abrir menu',exact:true}).click();
 await page.locator('#main-menu').getByRole('link',{name:'Acomodações',exact:true}).click();
 assert.equal(await page.getByRole('button',{name:'Abrir menu',exact:true}).getAttribute('aria-expanded'),'false');
 assert.equal(new URL(page.url()).hash,'#acomodacoes');
 await page.setViewportSize({width:1440,height:1000});
 for(const id of ['inicio','acomodacoes','comodidades','sobre','localizacao','contato']){
  await page.locator(`#main-menu a[href="#${id}"]`).click();
  assert.equal(new URL(page.url()).hash,`#${id}`);
  const top=await page.locator(`#${id}`).evaluate(el=>el.getBoundingClientRect().top);
  assert.ok(top>=0,`seção oculta pelo cabeçalho: ${id}`);
 }
 const links=await page.locator('a[href^="https://wa.me/"]').evaluateAll(as=>as.map(a=>a.href));
 assert.ok(links.length>=7);assert.ok(links.every(h=>new URL(h).pathname==='/5519987372320'));
 await page.evaluate(()=>{window.__opened=[];window.open=url=>{window.__opened.push(url);return null;};});
 await page.locator('button[type="submit"]').click();assert.equal(await page.evaluate(()=>window.__opened.length),0);
 await page.locator('#name').fill('Ana Teste');await page.locator('#contact').fill('ana@example.com');await page.locator('#subject').selectOption('Reserva de acomodação');await page.locator('#message').fill('Gostaria de reservar para minha família & amigos.');await page.locator('button[type="submit"]').click();
 const opened=await page.evaluate(()=>window.__opened);assert.equal(opened.length,1);assert.ok(new URL(opened[0]).searchParams.get('text').includes('família & amigos'));assert.equal(await page.locator('#name').inputValue(),'Ana Teste');
 await page.getByRole('button',{name:'Ampliar Recepção',exact:true}).click();assert.ok(await page.locator('dialog').isVisible());await page.keyboard.press('ArrowRight');assert.ok((await page.locator('figcaption').textContent()).includes('Quartos'));await page.keyboard.press('Escape');assert.equal(await page.locator('dialog').isVisible(),false);
 assert.equal(await page.locator('a[href="tel:+551938316112"]').count(),3);assert.equal(await page.locator('a[href="mailto:hotellerroma@gmail.com"]').count(),2);
 assert.ok((await page.locator('iframe').getAttribute('src')).includes('output=embed'));
 assert.equal((await page.request.get('http://127.0.0.1:5173/favicon.svg')).status(),200);assert.deepEqual(errors,[]);
 fs.mkdirSync('test-results',{recursive:true});await page.goto('http://127.0.0.1:5173');await page.screenshot({path:'test-results/desktop.png',fullPage:true});await page.setViewportSize({width:390,height:844});await page.screenshot({path:'test-results/mobile.png',fullPage:true});
 console.log('PASS: 8 larguras, imagens, âncoras, menu mobile, reservas, validação/envio do formulário, galeria/teclado, contatos, favicon e ausência de erros JS. Mapa externo isolado.');
 await browser.close();
})().catch(e=>{console.error(e);process.exitCode=1;});


