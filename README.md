# Screen Scroller / Скроллер экранов

[English](#english) | [Русский](#русский)

## English

Screen Scroller is a lightweight, pure JavaScript and CSS library for creating full-screen scrolling sections with smooth text reveal effects. It uses modern CSS scroll-driven animations for optimal performance, with a JavaScript fallback for broader browser support.

### Features
- Full-screen sections that stack on scroll.
- Text reveals with mask gradients that animate based on scroll position.
- Optimized with CSS `animation-timeline` for off-main-thread animation.
- Graceful fallback to JavaScript for browsers without scroll-driven animation support.
- Simple markup: just add `class="scrollscreener"` to sections.
- Responsive and works with any content height.

### Usage
Include the CSS and JavaScript files in your HTML:

```html
<link rel="stylesheet" href="style.css">
<script src="script.js"></script>
```

Wrap consecutive `.scrollscreener` elements in a container (or place them directly under `<body>`). The script will automatically group them and apply the effect.

### Browser Support
- Chrome 115+ (full support)
- Edge 115+
- Safari 17.2+
- Firefox: fallback to JavaScript (no scroll-driven animation yet)

### Development
The source SCSS file (`style.scss`) is available for customization. The project uses a small JavaScript module to handle grouping and background switching.

### License
MIT

## Русский

Скроллер экранов — это легковесная библиотека на чистом JavaScript и CSS для создания полноэкранных секций с плавным эффектом раскрытия текста. Использует современные CSS-анимации, управляемые прокруткой, для максимальной производительности, с fallback на JavaScript для поддержки старых браузеров.

### Особенности
- Секции на весь экран, которые накладываются при прокрутке.
- Раскрытие текста с помощью маски-градиента, анимированной в зависимости от положения прокрутки.
- Оптимизация через CSS `animation-timeline` для работы вне основного потока.
- Автоматический fallback на JavaScript для браузеров без поддержки scroll-driven animations.
- Простая разметка: просто добавьте `class="scrollscreener"` к секциям.
- Адаптивность и работа с любой высотой контента.

### Использование
Подключите CSS и JavaScript файлы в HTML:

```html
<link rel="stylesheet" href="style.css">
<script src="script.js"></script>
```

Расположите последовательные элементы `.scrollscreener` внутри контейнера (или прямо в `<body>`). Скрипт автоматически сгруппирует их и применит эффект.

### Поддержка браузеров
- Chrome 115+ (полная поддержка)
- Edge 115+
- Safari 17.2+
- Firefox: fallback на JavaScript (пока нет поддержки scroll-driven animation)

### Разработка
Исходный SCSS файл (`style.scss`) доступен для кастомизации. Проект использует небольшой JavaScript модуль для группировки и переключения фона.

### Лицензия
MIT