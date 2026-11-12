# Hotel Lerroma

## Abrir no Chrome sem instalar nada

Na entrega v2, extraia o ZIP inteiro e abra o index.html da pasta principal com dois cliques. Mantenha a pasta images ao lado dele. O código React fica separado em projeto-react. No projeto de desenvolvimento, a versão pronta fica em abrir-no-chrome/index.html e é regenerada pelo build. O index.html da raiz do projeto React é código-fonte e exige Vite; não deve ser aberto diretamente.


Landing page independente em React, TypeScript e Vite. Fontes Inter e Playfair Display locais, ícones Lucide, CSS responsivo. Sem backend, credenciais ou serviços pagos de reservas.

## Executar

Node.js 22.18+ ou 24 LTS e npm:

```sh
npm install
npm run dev
npm test
npm run build
npm run preview
```

Também funciona com `pnpm install`, `pnpm dev`, `pnpm test`, `pnpm build` e `pnpm preview`. O lockfile pnpm está incluído. `dist/` é gerada pelo build.

## Organização e alterações

- `src/data/hotel.ts`: contatos, mensagens do WhatsApp, quartos, preços, imagens, galeria e rotas.
- `src/sections/`: conteúdo de cada seção.
- `src/components/`: cabeçalho, botões compartilhados, marca e rodapé.
- `src/styles/site.css`: cores, tipografia, espaçamentos e regras responsivas.
- `public/images/`: imagens e materiais compartilháveis.
- `scripts/seo.mjs`: geração de robots, sitemap, canonical e Schema Hotel no build.
- `tests/`: verificações das mensagens e URLs.

Para trocar o WhatsApp, altere `hotel.whatsapp` (apenas dígitos com país e DDD) e `whatsappLabel`. Todos os botões usam a mesma função. O formulário valida os campos, abre uma conversa preenchida e mantém os valores. O visitante precisa concluir o envio no WhatsApp. Não há confirmação fictícia de entrega nem armazenamento em servidor.

## Fotografias extraídas das referências

Com autorização posterior do usuário, as fotos foram recortadas dos prints, excluindo preços, rótulos e interface. Os JPGs em public/images são fotografias reais visíveis nas capturas, sem geração de conteúdo. A abertura usa a recepção do print Sobre, pois a foto do print inicial tem texto e overlay incorporados.

Resoluções disponíveis: quartos cerca de 430×267 px; recepção 465×367 px; fotos menores da galeria 220×150 px; buffet 465×150 px. São utilizáveis, mas podem perder nitidez quando ampliadas. Os arquivos originais em alta resolução continuam recomendados. Substitua os JPGs mantendo os nomes para não alterar o layout.

Para redes sociais, substitua og-hotel.svg por uma arte JPG 1200×630 e ajuste index.html e scripts/seo.mjs.
## Conferência comercial antes de publicar

Confirmar com o hotel os preços R$ 160/230/280, áreas 14/18/24 m², capacidades e camas, nota 4,3 e 360+ avaliações, serviços, horários, distâncias e prazo de resposta. Os valores foram transcritos do material fornecido, não verificados externamente. A foto de referência do quarto individual mostra uma cama diferente da descrição; confirmar a fotografia adequada. O Schema não inclui preços nem avaliações.

O Facebook só aparece quando `hotel.facebookUrl` recebe a URL oficial: não foi fornecida, portanto não foi inventada. O Google Maps usa o endereço fornecido em iframe; Maps e Waze recebem esse mesmo endereço, sem coordenadas fictícias. Validar visualmente o destino em ambos antes da divulgação. Carregamento externo do mapa depende de conexão e políticas do navegador.

## GitHub

Crie um repositório vazio e execute dentro desta pasta (substitua a URL):

```sh
git init
git add .
git commit -m "Implementa site Hotel Lerroma"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/hotel-lerroma.git
git push -u origin main
```

Não envie `node_modules`, `dist` ou arquivos `.env` com informações privadas.

## Vercel

Importe o repositório no painel da Vercel. Escolha o preset Vite, diretório raiz do projeto, comando `npm run build` (ou `pnpm build`) e saída `dist`. Não é necessário backend ou regra de reescrita, pois a navegação usa âncoras.

Defina `SITE_URL` nas variáveis de build com o domínio real, por exemplo `https://DOMINIO-CONFIRMADO`, e faça um novo deploy. Sem essa variável, o build bloqueia indexação em `robots.txt` e gera sitemap vazio, evitando inventar um domínio ou indexar o preview incompleto. O build gera canonical, Open Graph absoluto, sitemap e Schema básico quando o domínio está configurado.

Para domínio próprio, abra Settings → Domains no projeto Vercel e siga os registros DNS apresentados para seu domínio. Aguarde validação DNS e certificado HTTPS; ajuste `SITE_URL` e faça novo deploy. Não há domínio nem conta Vercel configurados neste projeto. Confira as condições do plano escolhido para uso comercial antes da contratação/publicação.

Para atualizar, edite os arquivos, execute testes e build e faça commit/push. A integração Git da Vercel fará novo deploy. A estrutura visual está pronta; as fotos em alta resolução e a conferência comercial são recomendadas para concluir a fidelidade e liberar a publicação.

