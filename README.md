# RDDU-1 Landing — Rocket TV

Статический мини-лендинг для предложения собственникам торговых сетей: цифровая дверь-витрина RDDU-1 (реклама, +8% к продажам, данные из POS).

## Содержимое

- `index.html` — структура страницы
- `styles.css` — стили, адаптив, `prefers-reduced-motion`
- `app.js` — карусель рекламы, live-счётчик, mailto-шаблоны

## Запуск

Никакой сборки. Достаточно открыть `index.html` в браузере, либо запустить любой статический сервер:

```bash
python3 -m http.server 8080
# или
npx serve .
```

## Деплой

Подходит любая статика: GitHub Pages, Netlify, Vercel, Cloudflare Pages, S3.

### Cloudflare Pages (рекомендуется)

В репозитории уже лежит всё, что нужно Cloudflare:

- `_headers` — security-заголовки (CSP, HSTS, X-Frame-Options и т.д.) и cache-control
- `_redirects` — задел под редиректы
- `404.html` — кастомная 404, Cloudflare Pages подхватывает её автоматически
- `wrangler.toml` — для деплоя через CLI

**Вариант 1. Через Dashboard (Git-интеграция):**

1. Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git.
2. Выбрать репозиторий `Krucheverba/rockettv`, ветку `main`.
3. Build settings:
   - Framework preset: `None`
   - Build command: *(оставить пустым)*
   - Build output directory: `/`
4. Save and Deploy. После пуша в `main` Cloudflare задеплоит автоматически.

**Вариант 2. Через wrangler CLI:**

```bash
npx wrangler login
npx wrangler pages deploy . --project-name=rockettv
```

### GitHub Pages

1. Settings → Pages → Source: `Deploy from a branch`
2. Branch: `main`, папка `/ (root)`
3. После сохранения сайт будет доступен по адресу вида `https://<user>.github.io/<repo>/`

## Контакты

- partners@rockettv.ru
