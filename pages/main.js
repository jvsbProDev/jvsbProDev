import { html, css, escapeHtml } from './template.js';
import { firstpage } from './firstpage.js';
import { secondpage } from './secondpage.js';

const routes = Object.freeze({
  home: { name: 'Portfolio', view: new firstpage() },
  guides: { name: 'Terminal Guides', view: new secondpage() },
});

// Original footer quotes, retained from the uploaded HTML.
const footerQuotes = [
  "if it_works: dont_touch_it() else: panic()",
  "while(alive) { code(); }",
  "confidence = 100 if tests_pass else 0",
  "404: Motivation Not Found",
  "200 OK: Coffee Received",
  "500: Internal Brain Error",
  "403: Social Life Forbidden",
  "git commit -m \"I have no idea why this works\"",
  "sudo make me a sandwich",
  "// TODO: Fix my life",
  "try { life(); } catch(e) { coffee(); }",
  "if (salary > stress) stay(); else quit();",
  "“There are 10 types of people in the world. Those who understand binary and those who don't.”",
  "“Why do Java programmers wear glasses? Because they can't C#.”",
  "“My code doesn't have bugs. It develops unexpected features.”",
  "“Programming is 10% writing code and 90% figuring out why it doesn't work.”",
  "“I don't always test my code, but when I do, I do it in production.”",
  "“A programmer's favorite place? Anywhere with no meetings and good Wi-Fi.”",
  "“Code never lies. Comments sometimes do.”"
];

export class main {
  constructor(root) {
    this.root = root;
    this.previousRoute = null;
    this.onHashChange = this.navigate.bind(this);
  }

  static get style() {
    return css`
      .site-header {
        position: sticky; top: 0; z-index: 30;
        display: flex; flex-wrap: wrap; gap: 12px;
        justify-content: space-between; align-items: center;
        padding: 12px clamp(14px, 4vw, 42px);
        background: rgba(4, 10, 10, .94);
        border-bottom: 1px solid #254330;
        backdrop-filter: blur(12px);
      }
      .brand { color: #a6e22e; font: 700 1rem 'Silkscreen', monospace; text-decoration: none; }
      .brand span { color: #e9e9e9; }
      .site-nav { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; }
      .site-nav a, #audio-toggle {
        display: inline-flex; padding: 9px 12px; border: 1px solid transparent;
        border-radius: 8px; background: transparent; color: #cfd9cf;
        font: 500 .85rem 'Fira Code', monospace; text-decoration: none;
        cursor: pointer; transition: background .18s ease, color .18s ease;
      }
      .site-nav a:hover, #audio-toggle:hover { background: #172c21; color: #fff; }
      .site-nav a[aria-current="page"] {
        color: #a6e22e; background: #122619; border-color: #365a39;
      }
      #audio-toggle { border-color: #2b4635; }
      #page-content { max-width: 100%; }
      .ticker {
        position: fixed; inset: auto 0 0; height: 36px; overflow: hidden;
        background: #030807; border-top: 2px solid #00eb00; z-index: 40;
        display: flex; align-items: center; white-space: nowrap;
      }
      .ticker-track { display: flex; width: max-content; animation: ticker-scroll 100s linear infinite; }
      .ticker-group { display: flex; flex: none; align-items: center; }
      .ticker-item { display: inline-block; font: 700 12px 'Silkscreen', monospace; padding-right: 38px; }
      .ticker:hover .ticker-track, .ticker:focus-within .ticker-track { animation-play-state: paused; }
      @keyframes ticker-scroll { to { transform: translateX(-50%); } }
      @media (max-width: 600px) {
        .site-header { justify-content: center; text-align: center; }
        .site-nav { justify-content: center; }
        .site-nav a, #audio-toggle { font-size: .75rem; padding: 8px 10px; }
      }
      @media (prefers-reduced-motion: reduce) {
        .ticker-track { animation: none; }
      }
    `;
  }

  render() {
    const quotes = footerQuotes.map(quote =>
      `<span class="ticker-item nprinsley-text-rainbowan">${escapeHtml(quote)}</span>`
    ).join('');

    return html`
      <div class="site-shell">
        <header class="site-header">
          <a class="brand" href="#/home">JVSB<span> / ProDev</span></a>
          <nav class="site-nav" aria-label="Primary navigation">
            <a href="#/home" data-route="home">jvsbProDev</a>
            <a href="#/guides" data-route="guides">about me</a>
            <button type="button" id="audio-toggle" aria-pressed="false" aria-label="Play background audio">♫ Audio: Off</button>
          </nav>
        </header>
        <main id="page-content" tabindex="-1"></main>
        <footer class="ticker" aria-label="Scrolling programming jokes">
          <div class="ticker-track">
            <div class="ticker-group">${quotes}</div>
            <div class="ticker-group" aria-hidden="true">${quotes}</div>
          </div>
        </footer>
        <audio id="background-audio" src="https://k.top4top.io/m_3433hzkyu1.mp3" loop preload="none"></audio>
      </div>
    `;
  }

  mount() {
    if (!this.root) throw new Error('Mount element #app was not found.');
    if (!document.getElementById('app-module-style')) {
      const style = document.createElement('style');
      style.id = 'app-module-style';
      style.textContent = main.style;
      document.head.append(style);
    }
    this.root.innerHTML = this.render();
    window.addEventListener('hashchange', this.onHashChange);
    this.setupAudio();
    this.navigate();
  }

  navigate() {
    // Whitelist route names: never interpret the URL as HTML or a module path.
    const slug = window.location.hash.replace(/^#\/?/, '').split('?')[0];
    const key = Object.hasOwn(routes, slug) ? slug : 'home';
    const page = routes[key].view;
    const panel = this.root.querySelector('#page-content');
    panel.innerHTML = page.render();
    document.title = `${routes[key].name} | JVSB Pro Dev`;

    this.root.querySelectorAll('[data-route]').forEach(link => {
      if (link.dataset.route === key) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
    if (this.previousRoute !== null && this.previousRoute !== key) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      panel.focus({ preventScroll: true });
    }
    this.previousRoute = key;
  }

  setupAudio() {
    const button = this.root.querySelector('#audio-toggle');
    const audio = this.root.querySelector('#background-audio');
    button.addEventListener('click', async () => {
      if (!audio.paused) {
        audio.pause();
        button.textContent = '♫ Audio: Off';
        button.setAttribute('aria-pressed', 'false');
        button.setAttribute('aria-label', 'Play background audio');
        return;
      }
      try {
        await audio.play();
        button.textContent = '♫ Audio: On';
        button.setAttribute('aria-pressed', 'true');
        button.setAttribute('aria-label', 'Pause background audio');
      } catch (error) {
        button.textContent = '♫ Audio unavailable';
        button.setAttribute('aria-pressed', 'false');
        button.setAttribute('aria-label', 'Background audio could not be played');
        console.warn('Background audio unavailable:', error);
      }
    });
  }
}

new main(document.getElementById('app')).mount();
