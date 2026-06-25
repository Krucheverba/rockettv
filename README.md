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

### GitHub Pages

1. Settings → Pages → Source: `Deploy from a branch`
2. Branch: `main`, папка `/ (root)`
3. После сохранения сайт будет доступен по адресу вида `https://<user>.github.io/<repo>/`

## Контакты

- partners@rockettv.ru
