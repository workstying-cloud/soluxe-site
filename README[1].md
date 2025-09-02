
# Soluxe — We enjoy your money for you

A polished, funny, one-page site that lets people send crypto. Dark, glassy, responsive. Ocean video background, lifestyle carousel (no nudity).

## Tech
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Netlify deploy (`@netlify/plugin-nextjs`)
- Vitest + Playwright (light tests)

## Run
```bash
npm install
npm run dev
```

## Test
```bash
npm run test       # vitest
npm run e2e        # playwright
```

## Deploy to Netlify
1. Push this repo to GitHub.
2. In Netlify, **New site from Git** → select repo.
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Add plugin: `@netlify/plugin-nextjs` (already in package.json & netlify.toml)
6. Connect custom domain **solcray.art** → DNS to Netlify, enable HTTPS.

## Wallets
- Bitcoin (BTC): `bc1qs6av5dnypaufju9m4h20q8j02htjhme6rar489`
- Ethereum (ETH / ERC-20): `0x7D651888C22737694a6b57FF07452D9fB3986ee2`
- Solana (SOL): `3VAL2eJKVLcZtmNJqc3uEazHCGRD7eyb5kCzxpsYwGaa`
- TRON (TRX / USDT-TRC20): `TYpaK72jkLmaxhADzz7w3KzDTfFhXha37h`

## Disclaimer
⚠️ Contributions sent here are voluntary gifts. They are **non tax deductible** and provide no financial return, ownership, or services in exchange.

---

© {YEAR} Soluxe — “Because someone has to.” • powered by Solcray Luxe
