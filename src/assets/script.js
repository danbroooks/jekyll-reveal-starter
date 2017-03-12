require('./styles.scss');
require('reveal.js/lib/js/head.min.js');
require('reveal.js/lib/font/source-sans-pro/source-sans-pro.css');

window.Reveal = require('reveal.js');

Reveal.initialize({
  history: true,
  transition: 'slide',
  transitionSpeed: 'fast',

  dependencies: [
    { src: 'assets/plugin/markdown/marked.js', async: true },
    { src: 'assets/plugin/markdown/markdown.js', async: true },
    { src: 'assets/plugin/notes/notes.js', async: true },
    { src: 'assets/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
  ]
});
