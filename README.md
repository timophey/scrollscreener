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

### Build & Development

The project uses PUG templates and SCSS. The source files are `index.pug` and `body.pug` for markup, and `style.scss` for styles.

#### With Bootstrap
The example markup uses Bootstrap 5 utility classes (e.g., `container`, `vh-100`, `d-flex`, `align-items-center`, `justify-content-center`). Bootstrap is included via CDN in the `<head>`. To build the HTML from PUG:

1. Install PUG globally or use `npx`:
   ```bash
   npx pug index.pug -o .
   ```
   This will generate `index.html` in the current directory.

2. Open `index.html` in a browser. No further build step is required for CSS/JS because `style.css` and `script.js` are already compiled. If you modify `style.scss`, recompile it to CSS:
   ```bash
   npx sass style.scss style.css
   ```

#### Without Bootstrap
If you prefer not to use Bootstrap, you can replace the utility classes with your own CSS. The core effect only requires that each `.scrollscreener` section is full-screen (`height: 100vh`) and that its content is centered. Example minimal CSS:

```css
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}
.vh-100 { height: 100vh; }
.d-flex { display: flex; }
.align-items-center { align-items: center; }
.justify-content-center { justify-content: center; }
.text-center { text-align: center; }
```

Add similar rules for any other Bootstrap classes you use. The PUG templates remain the same; just ensure the generated HTML includes the classes you define.

### Quick Start for New Projects
1. Copy `index.pug`, `body.pug`, `style.scss`, `script.js` into your project.
2. Compile PUG to HTML (`npx pug index.pug`).
3. Compile SCSS to CSS (`npx sass style.scss style.css`).
4. Open `index.html` in a browser or serve via a local server.
5. Customize the content in `body.pug` and styles in `style.scss`.

### Browser Support
- Chrome 115+ (full support for CSS scroll-driven animations)
- Edge 115+
- Safari 17.2+
- Firefox: works via JavaScript fallback (no native scroll-driven animation yet)

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

### Сборка и разработка

Проект использует PUG-шаблоны и SCSS. Исходные файлы: `index.pug` и `body.pug` для разметки, `style.scss` для стилей.

#### С Bootstrap
Пример разметки использует утилитарные классы Bootstrap 5 (например, `container`, `vh-100`, `d-flex`, `align-items-center`, `justify-content-center`). Bootstrap подключается через CDN в `<head>`. Чтобы собрать HTML из PUG:

1. Установите PUG глобально или используйте `npx`:
   ```bash
   npx pug index.pug -o .
   ```
   Это сгенерирует `index.html` в текущей директории.

2. Откройте `index.html` в браузере. Дальнейшая сборка CSS/JS не требуется, так как `style.css` и `script.js` уже скомпилированы. Если вы меняете `style.scss`, перекомпилируйте его в CSS:
   ```bash
   npx sass style.scss style.css
   ```

#### Без Bootstrap
Если вы предпочитаете не использовать Bootstrap, вы можете заменить утилитарные классы своими стилями. Ядро эффекта требует, чтобы каждая секция `.scrollscreener` была на весь экран (`height: 100vh`) и её контент был центрирован. Пример минимального CSS:

```css
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}
.vh-100 { height: 100vh; }
.d-flex { display: flex; }
.align-items-center { align-items: center; }
.justify-content-center { justify-content: center; }
.text-center { text-align: center; }
```

Добавьте аналогичные правила для любых других классов Bootstrap, которые вы используете. PUG-шаблоны остаются теми же; просто убедитесь, что сгенерированный HTML включает определяемые вами классы.

### Быстрый старт для новых проектов
1. Скопируйте `index.pug`, `body.pug`, `style.scss`, `script.js` в ваш проект.
2. Скомпилируйте PUG в HTML (`npx pug index.pug`).
3. Скомпилируйте SCSS в CSS (`npx sass style.scss style.css`).
4. Откройте `index.html` в браузере или запустите локальный сервер.
5. Настройте контент в `body.pug` и стили в `style.scss`.

### Поддержка браузеров
- Chrome 115+ (полная поддержка CSS scroll-driven animations)
- Edge 115+
- Safari 17.2+
- Firefox: работает через JavaScript fallback (пока нет нативной поддержки scroll-driven animation)

### Лицензия
MIT