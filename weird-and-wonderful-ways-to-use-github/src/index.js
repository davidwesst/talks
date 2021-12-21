import Reveal from 'reveal.js';

import 'reveal.js/dist/reset.css';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';

import Zoom from 'reveal.js/plugin/zoom/zoom.esm.js';
import Notes from 'reveal.js/plugin/notes/notes.esm.js';
import Search from 'reveal.js/plugin/search/search.esm.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js';

console.log('Hello Webpack Again!');
Reveal.initialize({
    controls: true,
    progress: true,
    center: true,
    hash: true,

    // Learn about plugins: https://revealjs.com/plugins/
    plugins: [ Zoom, Notes, Search, Markdown, Highlight ]
});


