
require('reveal.js/lib/js/head.min.js');
require('file-loader?name=[name].[ext]!reveal.js/plugin/notes/notes.html')

window.Reveal = require('reveal.js');

Reveal.initialize({
  history: true,
  transition: 'slide',
  transitionSpeed: 'fast',

  dependencies: [
    { src: require('reveal-plugin-loader!reveal.js/plugin/markdown/marked.js'), async: true },
    { src: require('reveal-plugin-loader!reveal.js/plugin/markdown/markdown.js'), async: true },
    { src: require('reveal-plugin-loader!reveal.js/plugin/notes/notes.js'), async: true },
    { src: require('reveal-plugin-loader!reveal.js/plugin/highlight/highlight.js'), async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
  ]
});
