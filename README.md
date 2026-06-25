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

Подходит любая статика: Cloudflare Workers / Pages, GitHub Pages, Netlify, Vercel, S3.

### Cloudflare Workers Static Assets (текущий продакшен)

В репозитории лежит `wrangler.toml` под Workers Static Assets — статика без Worker-скрипта.

```bash
npx wrangler login
npx wrangler deploy
```

`.assetsignore` исключает `wrangler.toml`, `_headers`, `_redirects`, `README.md` и прочие служебные файлы из публичных ассетов. `404.html` подключается через `not_found_handling = "404-page"`.

**Важно:** на Workers Static Assets файлы `_headers` и `_redirects` не интерпретируются (это формат Pages). Если нужны кастомные security-заголовки (CSP, HSTS) или редиректы — переехать на Pages или добавить мини-Worker.

### Cloudflare Pages (альтернатива)

1. Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git.
2. Выбрать репозиторий `Krucheverba/rockettv`, ветку `main`.
3. Build settings:
   - Framework preset: `None`
   - Build command: *(оставить пустым)*
   - Build output directory: `/`
4. Save and Deploy.

При переезде на Pages `_headers` и `_redirects` начнут работать как задумано.

### GitHub Pages

1. Settings → Pages → Source: `Deploy from a branch`
2. Branch: `main`, папка `/ (root)`
3. После сохранения сайт будет доступен по адресу вида `https://<user>.github.io/<repo>/`

## Контакты

- partners@rockettv.ru
