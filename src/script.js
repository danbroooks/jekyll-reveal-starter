
window.Reveal = require('reveal.js');

Reveal.initialize({
  history: true,
  transition: 'slide',
  transitionSpeed: 'fast',
});

require('reveal.js/plugin/markdown/marked.js');
require('reveal.js/plugin/markdown/markdown.js');
require('reveal.js/plugin/notes/notes.js');

window.hljs = require('highlight.js');
require('./highlight-reveal.js');
hljs.initHighlightingOnLoad();
