# Takosware Web

Takosware web varlığının kişisel portföy sayfası:

- `/tarikcetinturk`: Tarık Çetintürk kişisel portföyü ve özgeçmişi

## Çalıştırma

```bash
npm install
npm run dev
```

## Doğrulama

```bash
npm run build
npm test
```

## Production

Container yerelde yalnızca `127.0.0.1:8092` portunu dinler. Sunucunun Caddy katmanı
`takosware.com` isteğini bu porta yönlendirir.

```bash
docker compose -f docker-compose.production.yml up -d --build
```
