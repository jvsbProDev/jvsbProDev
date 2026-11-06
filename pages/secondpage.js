import { html, css } from './template.js';

// The uploaded Linux tutorial sections are preserved as accessible <details> accordions.
export class secondpage {
  static get title() { return 'Terminal Guides'; }

  static get style() {
    return css`/* Page-specific styles can be added here. */`;
  }

  render() {
    return html`
      <header class="page-lead">
        <p class="eyebrow">jvsbProDev / interactive notes</p>
        <h1>Linux Terminal &amp; Scripting</h1>
        <p>Select a lesson below to expand its examples and reference tables.</p>
      </header>
<section class="container">
  <details class="lesson">
    <summary class="header"><span class="token grasstext">📝 Write &amp; Modify Script</span></summary>
    <div class="accordion-content" id="accordion-write-mod-script">

<p>Script files should be named in a <span class="token grasstext">file_name.extension</span> format such as <span class="token grasstext">script.sh</span>
                To create a file, use the <span class="command">touch</span> command :</p>
<div class="terminal-container">
<div class="terminal-header">
<div class="terminal-buttons"><span class="terminal-button red"></span><span class="terminal-button yellow"></span><span class="terminal-button green"></span></div>
<div>Using &ldquo;touch&rdquo; command</div><div></div>
</div>
<div class="terminal-body"><pre class="terminal-code"><span class="token redtext">jvsb</span><span class="token yellowtext">@</span><span class="token navytext">ProDev</span><span class="token greentext">:~</span><span class="token orangetext">$ touch</span> <span class="token grasstext">script.sh</span></pre></div>
</div>
<p><span class="token bluetext">Alternative #1 :</span> Use <span class="command">cat</span> command to create a file with a <span class="token grasstext">redirect</span> (<span class="command">&gt;</span>) :</p>
<div class="terminal-container">
<div class="terminal-header"><div class="terminal-buttons"><span class="terminal-button red"></span><span class="terminal-button yellow"></span><span class="terminal-button green"></span></div><div>Using &ldquo;cat&rdquo; command</div><div></div></div>
<div class="terminal-body"><pre class="terminal-code"><span class="token redtext">jvsb</span><span class="token yellowtext">@</span><span class="token navytext">ProDev</span><span class="token greentext">:~</span><span class="token orangetext">$ cat</span> &gt; <span class="token grasstext">script.sh</span></pre></div>
</div>
<div class="terminal-container">
<div class="terminal-header"><div class="terminal-buttons"></div><div>Enter the following while in &ldquo;cat&rdquo; command</div><div></div></div>
<div class="terminal-body"><pre class="terminal-code">#!/bin/bash</pre><pre class="terminal-code"><span class="token orangetext">echo</span> 'Hello World'</pre></div>
</div>
<p>press <span class="token grasstext">CTRL + D</span> while under <span class="command">cat</span> to exit.</p>
<div class="terminal-container">
<div class="terminal-header"><div class="terminal-buttons"><span class="terminal-button red"></span><span class="terminal-button yellow"></span><span class="terminal-button green"></span></div><div>View script.sh with cat</div><div></div></div>
<div class="terminal-body"><pre class="terminal-code"><span class="token redtext">jvsb</span><span class="token yellowtext">@</span><span class="token navytext">ProDev</span><span class="token greentext">:~</span><span class="token orangetext">$ cat</span> <span class="token grasstext">script.sh</span></pre><pre class="terminal-code">#!/bin/bash</pre><pre class="terminal-code"><span class="token orangetext">echo</span> 'Hello World'</pre></div>
</div>
<p><span class="token bluetext">Alternative #2 :</span> Use <span class="command">nano</span> command to modify script :</p>
<div class="terminal-container">
<div class="terminal-header"><div class="terminal-buttons"><span class="terminal-button red"></span><span class="terminal-button yellow"></span><span class="terminal-button green"></span></div><div>Using nano</div><div></div></div>
<div class="terminal-body"><pre class="terminal-code"><span class="token redtext">jvsb</span><span class="token yellowtext">@</span><span class="token navytext">ProDev</span><span class="token greentext">:~</span><span class="token orangetext">$ nano</span> <span class="token grasstext">script.sh</span></pre></div>
</div>
<div class="terminal-container"><div class="terminal-header"><div class="terminal-buttons"></div><div>Content in nano</div><div></div></div>
<div class="terminal-body"><pre class="terminal-code">#!/bin/bash</pre><pre class="terminal-code"><span class="token orangetext">echo</span> 'Goodbye World'</pre></div></div>
<p>press <span class="token grasstext">CTRL + O</span> to Overwrite, <span class="token grasstext">CTRL + X</span> to Exit.</p>
<div class="terminal-container"><div class="terminal-header"><div class="terminal-buttons"><span class="terminal-button red"></span><span class="terminal-button yellow"></span><span class="terminal-button green"></span></div><div>Verify changes</div><div></div></div>
<div class="terminal-body"><pre class="terminal-code"><span class="token redtext">jvsb</span><span class="token yellowtext">@</span><span class="token navytext">ProDev</span><span class="token greentext">:~</span><span class="token orangetext">$ cat</span> <span class="token grasstext">script.sh</span></pre><pre class="terminal-code">#!/bin/bash</pre><pre class="terminal-code"><span class="token orangetext">echo</span> 'Goodbye World'</pre></div></div>

    </div>
  </details>
</section>

<section class="container">
  <details class="lesson">
    <summary class="header"><span class="token grasstext">⚙️ Command Parameters</span></summary>
    <div class="accordion-content" id="accordion-command-parameters">

<p>Note: <span class="command">-switch</span>, <span class="command">--option=value</span> modify command behavior.</p>
<div class="table-scroll">
<table>
<tr><th>Aspect</th><th>-Switch</th><th>--Options</th><th>-f, --Flag</th></tr>
<tr><td>Syntax</td><td>Single hyphen, short (-v)</td><td>Double hyphen, descriptive (--verbose)</td><td>Single or double hyphen (-d, --debug)</td></tr>
<tr><td>Arguments</td><td>Typically no arguments</td><td>Often requires a value</td><td>No arguments</td></tr>
</table>
</div>
<p><span class="command">ls</span> command stands for <span class="token grasstext">Lists</span> directory contents.</p>
<div class="table-scroll">
<table><tr><th>Switch</th><th>Explanation</th></tr><tr><td><span class="command">-l</span></td><td>long list format (permissions)</td></tr>
<tr><td><span class="command">-a</span></td><td><span class="token grasstext">--all</span>, show hidden files</td></tr>
<tr><td><span class="command">-h</span></td><td><span class="token grasstext">--human-readable</span>, sizes with -l</td></tr></table>
</div>
<div class="terminal-container"><div class="terminal-header"><div class="terminal-buttons"><span class="terminal-button red"></span><span class="terminal-button yellow"></span><span class="terminal-button green"></span></div><div>Multiple switches with ls</div><div></div></div>
<div class="terminal-body"><pre class="terminal-code"><span class="token greentext"># Separate switches</span>
<span class="token redtext">jvsb</span><span class="token yellowtext">@</span><span class="token navytext">ProDev</span><span class="token greentext">:~</span><span class="token orangetext">$ ls</span> -l -a -h
<span class="token greentext"># Combined</span>
<span class="token redtext">jvsb</span><span class="token yellowtext">@</span><span class="token navytext">ProDev</span><span class="token greentext">:~</span><span class="token orangetext">$ ls</span> -lah</pre></div></div>
<div class="terminal-container"><div class="terminal-header"><div class="terminal-buttons"></div><div>Example output</div><div></div></div>
<div class="terminal-body"><pre class="terminal-code">total 8K
drwx------ 14 jvsbPD jvsbPD 4.0K Aug 16 13:22 <span class="token grasstext">.</span>
drwxrwx--x  4 jvsbPD jvsbPD 4.0K Jul 17 09:42 <span class="token grasstext">..</span>
-rw-------  1 jvsbPD jvsbPD   31 Aug 16 11:16 <span class="token grasstext">script.sh</span></pre></div></div>
<div class="table-scroll"><table><tr><th>File</th><th>Meaning</th></tr><tr><td><span class="command">.</span></td><td>current directory</td></tr><tr><td><span class="command">..</span></td><td>parent directory</td></tr></table></div>

    </div>
  </details>
</section>

<section class="container">
  <details class="lesson">
    <summary class="header"><span class="token grasstext">🔐 File Type &amp; Permission</span></summary>
    <div class="accordion-content" id="accordion-filetype-permission">

<p>Use <span class="command">ls -l</span> to view permissions.</p>
<div class="terminal-container"><div class="terminal-header"><div class="terminal-buttons"></div><div>ls -l output</div><div></div></div>
<div class="terminal-body"><pre class="terminal-code"><span class="token grasstext">d</span>rwxrwxrwx 5 root   root   4020 Nov 1 12:07 h4ck1ng
<span class="token grasstext">d</span>rwxrwxrwx 2 root   root   4020 Nov 1 12:07 isN3v3r
<span class="token grasstext">-</span>rw------- 1 jvsbPD jvsbPD  31 Aug 16 11:11 script.sh</pre></div></div>
<div class="table-scroll"><table><tr><th>File char</th><th>Type</th></tr><tr><td><span class="command">-</span></td><td>normal</td></tr><tr><td><span class="command">d</span></td><td>directory</td></tr><tr><td><span class="command">l</span></td><td>link</td></tr></table></div>
<p>Permissions: <span class="command">r</span> (read), <span class="command">w</span> (write), <span class="command">x</span> (execute).</p>
<div class="terminal-container"><div class="terminal-header"><div class="terminal-buttons"><span class="terminal-button red"></span><span class="terminal-button yellow"></span><span class="terminal-button green"></span></div><div>Grant executable</div><div></div></div>
<div class="terminal-body"><pre class="terminal-code"><span class="token redtext">jvsb</span><span class="token yellowtext">@</span><span class="token navytext">ProDev</span><span class="token greentext">:~</span><span class="token orangetext">$ chmod</span> +x script.sh
<span class="token redtext">jvsb</span><span class="token yellowtext">@</span><span class="token navytext">ProDev</span><span class="token greentext">:~</span><span class="token orangetext">$ ls -l</span> script.sh
-rwx------ 1 jvsbPD jvsbPD 31 Aug 16 11:13 script.sh</pre></div></div>
<p><span class="command">*</span> wildcard examples: <span class="command">*.sh</span> matches all shell scripts.</p>
<div class="terminal-container"><div class="terminal-header"><div class="terminal-buttons"><span class="terminal-button red"></span><span class="terminal-button yellow"></span><span class="terminal-button green"></span></div><div>Wildcard chmod</div><div></div></div>
<div class="terminal-body"><pre class="terminal-code"><span class="token greentext"># all .sh files</span>
<span class="token redtext">jvsb</span><span class="token yellowtext">@</span><span class="token navytext">ProDev</span><span class="token greentext">:~</span><span class="token orangetext">$ chmod</span> +x *.sh
<span class="token greentext"># everything in current dir</span>
<span class="token redtext">jvsb</span><span class="token yellowtext">@</span><span class="token navytext">ProDev</span><span class="token greentext">:~</span><span class="token orangetext">$ chmod</span> +x *</pre></div></div>
<p>Octal permission reference:</p>
<div class="table-scroll"><table><tr><th>Binary</th><th>Octal</th><th>rwx</th></tr><tr><td>000</td><td>0</td><td>---</td></tr><tr><td>001</td><td>1</td><td>--x</td></tr><tr><td>010</td><td>2</td><td>-w-</td></tr><tr><td>011</td><td>3</td><td>-wx</td></tr><tr><td>100</td><td>4</td><td>r--</td></tr><tr><td>101</td><td>5</td><td>r-x</td></tr><tr><td>110</td><td>6</td><td>rw-</td></tr><tr><td>111</td><td>7</td><td>rwx</td></tr></table></div>
<div class="terminal-container"><div class="terminal-header"><div class="terminal-buttons"><span class="terminal-button red"></span><span class="terminal-button yellow"></span><span class="terminal-button green"></span></div><div>UGO &amp; Octal examples</div><div></div></div>
<div class="terminal-body"><pre class="terminal-code"><span class="token greentext"># rwx for user, rx for group/others</span>
<span class="token redtext">jvsb</span><span class="token yellowtext">@</span><span class="token navytext">ProDev</span><span class="token greentext">:~</span><span class="token orangetext">$ chmod</span> 755 script.sh
<span class="token greentext"># full permissions for all</span>
<span class="token redtext">jvsb</span><span class="token yellowtext">@</span><span class="token navytext">ProDev</span><span class="token greentext">:~</span><span class="token orangetext">$ chmod</span> 777 script.sh</pre></div></div>
<p>Symbolic method: <span class="command">u=rwx,g=rx,o=r</span> etc.</p>
<div class="terminal-container"><div class="terminal-body"><pre class="terminal-code"><span class="token redtext">jvsb</span><span class="token yellowtext">@</span><span class="token navytext">ProDev</span><span class="token greentext">:~</span><span class="token orangetext">$ chmod</span> u+rwx,g+rx,o+r script.sh</pre></div></div>

    </div>
  </details>
</section>
    `;
  }
}
