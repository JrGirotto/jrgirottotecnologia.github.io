# JR Girotto Tecnologia — Site (Next.js estático para GitHub Pages)

## Como publicar
1. Suba este projeto para o seu repositório (branch `main` ou ajuste o workflow).
2. No GitHub: Settings → Pages → Source: **GitHub Actions**.
3. Faça um push. O workflow `Deploy to GitHub Pages` fará o build e deploy.
4. DNS: `www.jrgirotto.com.br` deve apontar por CNAME para `SEU_USUARIO.github.io`.
5. O arquivo `public/CNAME` garante o domínio personalizado no Pages.

## Desenvolvimento
```bash
npm i
npm run dev
# build/export
npm run export
```
