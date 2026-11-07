import { html, css } from './template.js';

// The original portfolio/hero is the first JavaScript-rendered page.
export class portfolio {
  static get title() { return 'Portfolio'; }

  static get style() {
    return css`/* Page-specific styles can be added here. */`;
  }

  render() {
    return html`
      <section aria-label="Developer introduction">
        <p class="eyebrow" style="text-align:center;padding-top:20px">jvsbProDev / portfolio</p>
<div class="hero-wrapper">
 <div class="hero-inner">
  <h1 class="nprinsleyy nprinsley-text-rainbowan" style="font-size:44px; margin-top: 0.5rem;">
   Jovi Van Shannon Belnas
  </h1>
  <p class="othermes_nprinsh nprinsley-detaxt">
   !!! Software Developer for Hire !!!
  </p>
  <h2 class="nathan-prinsley_none" style="font-size:32px;">
   Java | Python | C# | Javascript
  </h2>
  <a class="hubungi_prinsh" href="https://github.com/jvsbProDev" rel="noopener noreferrer" style="font-size:24px; font-family: 'Silkscreen', monospace; display: inline-block; margin: 10px 0 15px;" target="_blank">
   ⚡ My Github Repository ⚡
  </a>
 </div>
</div>

      </section>
      <section class="home-panel" aria-labelledby="welcome-heading">
        <div class="terminal-container">
          <div class="terminal-header">
            <div class="terminal-buttons" aria-hidden="true">
              <span class="terminal-button red"></span>
              <span class="terminal-button yellow"></span>
              <span class="terminal-button green"></span>
            </div>
            <span>jvsb@ProDev:~</span><span></span>
          </div>
          <div class="terminal-body">
            <pre class="terminal-code"><span class="token redtext">jvsb</span><span class="token yellowtext">@</span><span class="token navytext">ProDev</span><span class="token greentext">:~</span><span class="token orangetext">$ whoami</span></pre>
            <pre class="terminal-code token grasstext">jvsbProDev</pre>
          </div>
        </div>
        <h2 id="welcome-heading">Explore more about me</h2>
        <p>Learn about shell scripting, command parameters, and Linux file permissions in the interactive tutorials.</p>
        <a class="cta" href="#/about">about me →</a>
      </section>
    `;
  }
}
