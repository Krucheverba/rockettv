// ===== year =====
document.getElementById('yr').textContent = new Date().getFullYear();

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ===== mailto prefill =====
(function mailto(){
  const TO = 'partners@rockettv.ru';
  const SUBJ_BASE = 'Заявка с лендинга RDDU-1';

  const templates = {
    door: {
      sub: 'Замена дверцы на RDDU-1',
      body:
`Здравствуйте!

Интересует вариант "Только дверца" — замена стекла на RDDU-1 на штатной раме.

Сеть / компания:
Город / регион:
Количество холодильников:
Преобладающая ширина модуля (600 / 1200 мм):
Удобный способ связи:

Пара слов о парке (бренды/модели холодильников):

Спасибо!`
    },
    haas: {
      sub: 'Подписка на дверцу (HaaS / revenue share)',
      body:
`Здравствуйте!

Интересует подключение по модели "Дверца по подписке" — без капвложений, с шерингом выручки.

Сеть / компания:
Город / регион:
Количество холодильников:
Средний трафик точки (если известен):
Удобный способ связи:

Спасибо!`
    },
    full: {
      sub: 'Замена холодильников целиком (с RDDU-1, трейд-ин)',
      body:
`Здравствуйте!

Интересует обновление парка холодильников с уже встроенной RDDU-1, с трейд-ином текущего оборудования.

Сеть / компания:
Город / регион:
Сколько единиц планируем обновить:
Удобный способ связи:

Спасибо!`
    },
    default: {
      sub: '',
      body:
`Здравствуйте!

Интересует RDDU-1. Прошу прислать модельный расчёт под нашу сеть.

Сеть / компания:
Город / регион:
Количество холодильников:
Интересующий формат (только дверца / подписка / весь холодильник / ещё не выбрали):
Удобный способ связи:

Спасибо!`
    }
  };

  function buildHref(key){
    const t = templates[key] || templates.default;
    const subject = t.sub ? `${SUBJ_BASE} — ${t.sub}` : SUBJ_BASE;
    return `mailto:${TO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(t.body)}`;
  }

  const mailBtn = document.getElementById('mailBtn');
  if(mailBtn) mailBtn.href = buildHref('default');

  document.querySelectorAll('[data-prefill]').forEach(a => {
    const key = a.getAttribute('data-prefill');
    a.addEventListener('click', e => {
      e.preventDefault();
      const cta = document.getElementById('cta');
      if(cta) cta.scrollIntoView({behavior: reduceMotion ? 'auto' : 'smooth', block:'start'});
      if(mailBtn) mailBtn.href = buildHref(key);
      if(mailBtn && !reduceMotion){
        mailBtn.animate(
          [{transform:'scale(1)'},{transform:'scale(1.03)'},{transform:'scale(1)'}],
          {duration:500, easing:'ease-out'}
        );
      }
    });
  });
})();

// ===== reveal-on-scroll =====
(function reveal(){
  if(reduceMotion) return;
  const els = document.querySelectorAll('.stat, .step, .way, .vs, .fit__list, .faq, .cta__panel, .trust');
  els.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(14px)';
    el.style.transition = 'opacity .6s ease, transform .6s ease';
  });
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){
        e.target.style.opacity = '1';
        e.target.style.transform = 'none';
        io.unobserve(e.target);
      }
    });
  }, {threshold:.12});
  els.forEach(el => io.observe(el));
})();
