(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[5124],{93958:(r,o,n)=>{"use strict";n.r(o),n.d(o,{default:()=>s});var e=n(1799),c=n.n(e),t=n(82609),a=n.n(t)()(c());a.push([r.id,"/*\n\n    Name:       gruvbox-dark\n    Author:     kRkk (https://github.com/krkk)\n\n    Original gruvbox color scheme by Pavel Pertsev (https://github.com/morhetz/gruvbox)\n\n*/\n\n.cm-s-gruvbox-dark.CodeMirror, .cm-s-gruvbox-dark .CodeMirror-gutters { background-color: #282828; color: #bdae93; }\n.cm-s-gruvbox-dark .CodeMirror-gutters {background: #282828; border-right: 0px;}\n.cm-s-gruvbox-dark .CodeMirror-linenumber {color: #7c6f64;}\n.cm-s-gruvbox-dark .CodeMirror-cursor { border-left: 1px solid #ebdbb2; }\n.cm-s-gruvbox-dark div.CodeMirror-selected { background: #928374; }\n.cm-s-gruvbox-dark span.cm-meta { color: #83a598; }\n\n.cm-s-gruvbox-dark span.cm-comment { color: #928374; }\n.cm-s-gruvbox-dark span.cm-number, span.cm-atom { color: #d3869b; }\n.cm-s-gruvbox-dark span.cm-keyword { color: #f84934; }\n\n.cm-s-gruvbox-dark span.cm-variable { color: #ebdbb2; }\n.cm-s-gruvbox-dark span.cm-variable-2 { color: #ebdbb2; }\n.cm-s-gruvbox-dark span.cm-variable-3, .cm-s-gruvbox-dark span.cm-type { color: #fabd2f; }\n.cm-s-gruvbox-dark span.cm-operator { color: #ebdbb2; }\n.cm-s-gruvbox-dark span.cm-callee { color: #ebdbb2; }\n.cm-s-gruvbox-dark span.cm-def { color: #ebdbb2; }\n.cm-s-gruvbox-dark span.cm-property { color: #ebdbb2; }\n.cm-s-gruvbox-dark span.cm-string { color: #b8bb26; }\n.cm-s-gruvbox-dark span.cm-string-2 { color: #8ec07c; }\n.cm-s-gruvbox-dark span.cm-qualifier { color: #8ec07c; }\n.cm-s-gruvbox-dark span.cm-attribute { color: #8ec07c; }\n\n.cm-s-gruvbox-dark .CodeMirror-activeline-background { background: #3c3836; }\n.cm-s-gruvbox-dark .CodeMirror-matchingbracket { background: #928374; color:#282828 !important; }\n\n.cm-s-gruvbox-dark span.cm-builtin { color: #fe8019; }\n.cm-s-gruvbox-dark span.cm-tag { color: #fe8019; }\n","",{version:3,sources:["webpack://./../../node_modules/codemirror/theme/gruvbox-dark.css"],names:[],mappings:"AAAA;;;;;;;CAOC;;AAED,wEAAwE,yBAAyB,EAAE,cAAc,EAAE;AACnH,wCAAwC,mBAAmB,EAAE,iBAAiB,CAAC;AAC/E,2CAA2C,cAAc,CAAC;AAC1D,wCAAwC,8BAA8B,EAAE;AACxE,6CAA6C,mBAAmB,EAAE;AAClE,kCAAkC,cAAc,EAAE;;AAElD,qCAAqC,cAAc,EAAE;AACrD,kDAAkD,cAAc,EAAE;AAClE,qCAAqC,cAAc,EAAE;;AAErD,sCAAsC,cAAc,EAAE;AACtD,wCAAwC,cAAc,EAAE;AACxD,yEAAyE,cAAc,EAAE;AACzF,sCAAsC,cAAc,EAAE;AACtD,oCAAoC,cAAc,EAAE;AACpD,iCAAiC,cAAc,EAAE;AACjD,sCAAsC,cAAc,EAAE;AACtD,oCAAoC,cAAc,EAAE;AACpD,sCAAsC,cAAc,EAAE;AACtD,uCAAuC,cAAc,EAAE;AACvD,uCAAuC,cAAc,EAAE;;AAEvD,uDAAuD,mBAAmB,EAAE;AAC5E,iDAAiD,mBAAmB,EAAE,wBAAwB,EAAE;;AAEhG,qCAAqC,cAAc,EAAE;AACrD,iCAAiC,cAAc,EAAE",sourcesContent:["/*\n\n    Name:       gruvbox-dark\n    Author:     kRkk (https://github.com/krkk)\n\n    Original gruvbox color scheme by Pavel Pertsev (https://github.com/morhetz/gruvbox)\n\n*/\n\n.cm-s-gruvbox-dark.CodeMirror, .cm-s-gruvbox-dark .CodeMirror-gutters { background-color: #282828; color: #bdae93; }\n.cm-s-gruvbox-dark .CodeMirror-gutters {background: #282828; border-right: 0px;}\n.cm-s-gruvbox-dark .CodeMirror-linenumber {color: #7c6f64;}\n.cm-s-gruvbox-dark .CodeMirror-cursor { border-left: 1px solid #ebdbb2; }\n.cm-s-gruvbox-dark div.CodeMirror-selected { background: #928374; }\n.cm-s-gruvbox-dark span.cm-meta { color: #83a598; }\n\n.cm-s-gruvbox-dark span.cm-comment { color: #928374; }\n.cm-s-gruvbox-dark span.cm-number, span.cm-atom { color: #d3869b; }\n.cm-s-gruvbox-dark span.cm-keyword { color: #f84934; }\n\n.cm-s-gruvbox-dark span.cm-variable { color: #ebdbb2; }\n.cm-s-gruvbox-dark span.cm-variable-2 { color: #ebdbb2; }\n.cm-s-gruvbox-dark span.cm-variable-3, .cm-s-gruvbox-dark span.cm-type { color: #fabd2f; }\n.cm-s-gruvbox-dark span.cm-operator { color: #ebdbb2; }\n.cm-s-gruvbox-dark span.cm-callee { color: #ebdbb2; }\n.cm-s-gruvbox-dark span.cm-def { color: #ebdbb2; }\n.cm-s-gruvbox-dark span.cm-property { color: #ebdbb2; }\n.cm-s-gruvbox-dark span.cm-string { color: #b8bb26; }\n.cm-s-gruvbox-dark span.cm-string-2 { color: #8ec07c; }\n.cm-s-gruvbox-dark span.cm-qualifier { color: #8ec07c; }\n.cm-s-gruvbox-dark span.cm-attribute { color: #8ec07c; }\n\n.cm-s-gruvbox-dark .CodeMirror-activeline-background { background: #3c3836; }\n.cm-s-gruvbox-dark .CodeMirror-matchingbracket { background: #928374; color:#282828 !important; }\n\n.cm-s-gruvbox-dark span.cm-builtin { color: #fe8019; }\n.cm-s-gruvbox-dark span.cm-tag { color: #fe8019; }\n"],sourceRoot:""}]);const s=a},82609:r=>{"use strict";r.exports=function(r){var o=[];return o.toString=function(){return this.map((function(o){var n=r(o);return o[2]?"@media ".concat(o[2]," {").concat(n,"}"):n})).join("")},o.i=function(r,n,e){"string"==typeof r&&(r=[[null,r,""]]);var c={};if(e)for(var t=0;t<this.length;t++){var a=this[t][0];null!=a&&(c[a]=!0)}for(var s=0;s<r.length;s++){var i=[].concat(r[s]);e&&c[i[0]]||(n&&(i[2]?i[2]="".concat(n," and ").concat(i[2]):i[2]=n),o.push(i))}},o}},1799:r=>{"use strict";function o(r,o){(null==o||o>r.length)&&(o=r.length);for(var n=0,e=new Array(o);n<o;n++)e[n]=r[n];return e}r.exports=function(r){var n,e,c=(e=4,function(r){if(Array.isArray(r))return r}(n=r)||function(r,o){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r)){var n=[],e=!0,c=!1,t=void 0;try{for(var a,s=r[Symbol.iterator]();!(e=(a=s.next()).done)&&(n.push(a.value),!o||n.length!==o);e=!0);}catch(r){c=!0,t=r}finally{try{e||null==s.return||s.return()}finally{if(c)throw t}}return n}}(n,e)||function(r,n){if(r){if("string"==typeof r)return o(r,n);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?o(r,n):void 0}}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),t=c[1],a=c[3];if("function"==typeof btoa){var s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),A="/*# ".concat(i," */"),u=a.sources.map((function(r){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(r," */")}));return[t].concat(u).concat([A]).join("\n")}return[t].join("\n")}},25124:(r,o,n)=>{var e=n(93958);"string"==typeof(e=e.__esModule?e.default:e)&&(e=[[r.id,e,""]]);n(46062)(e,{insert:"head",singleton:!1}),e.locals&&(r.exports=e.locals)},46062:(r,o,n)=>{"use strict";var e,c={},t=function(){var r={};return function(o){if(void 0===r[o]){var n=document.querySelector(o);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(r){n=null}r[o]=n}return r[o]}}();function a(r,o){for(var n=[],e={},c=0;c<r.length;c++){var t=r[c],a=o.base?t[0]+o.base:t[0],s={css:t[1],media:t[2],sourceMap:t[3]};e[a]?e[a].parts.push(s):n.push(e[a]={id:a,parts:[s]})}return n}function s(r,o){for(var n=0;n<r.length;n++){var e=r[n],t=c[e.id],a=0;if(t){for(t.refs++;a<t.parts.length;a++)t.parts[a](e.parts[a]);for(;a<e.parts.length;a++)t.parts.push(p(e.parts[a],o))}else{for(var s=[];a<e.parts.length;a++)s.push(p(e.parts[a],o));c[e.id]={id:e.id,refs:1,parts:s}}}}function i(r){var o=document.createElement("style");if(void 0===r.attributes.nonce){var e=n.nc;e&&(r.attributes.nonce=e)}if(Object.keys(r.attributes).forEach((function(n){o.setAttribute(n,r.attributes[n])})),"function"==typeof r.insert)r.insert(o);else{var c=t(r.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(o)}return o}var A,u=(A=[],function(r,o){return A[r]=o,A.filter(Boolean).join("\n")});function d(r,o,n,e){var c=n?"":e.css;if(r.styleSheet)r.styleSheet.cssText=u(o,c);else{var t=document.createTextNode(c),a=r.childNodes;a[o]&&r.removeChild(a[o]),a.length?r.insertBefore(t,a[o]):r.appendChild(t)}}function b(r,o,n){var e=n.css,c=n.media,t=n.sourceMap;if(c&&r.setAttribute("media",c),t&&btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(t))))," */")),r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}var l=null,m=0;function p(r,o){var n,e,c;if(o.singleton){var t=m++;n=l||(l=i(o)),e=d.bind(null,n,t,!1),c=d.bind(null,n,t,!0)}else n=i(o),e=b.bind(null,n,o),c=function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)};return e(r),function(o){if(o){if(o.css===r.css&&o.media===r.media&&o.sourceMap===r.sourceMap)return;e(r=o)}else c()}}r.exports=function(r,o){(o=o||{}).attributes="object"==typeof o.attributes?o.attributes:{},o.singleton||"boolean"==typeof o.singleton||(o.singleton=(void 0===e&&(e=Boolean(window&&document&&document.all&&!window.atob)),e));var n=a(r,o);return s(n,o),function(r){for(var e=[],t=0;t<n.length;t++){var i=n[t],A=c[i.id];A&&(A.refs--,e.push(A))}r&&s(a(r,o),o);for(var u=0;u<e.length;u++){var d=e[u];if(0===d.refs){for(var b=0;b<d.parts.length;b++)d.parts[b]();delete c[d.id]}}}}}}]);
//# sourceMappingURL=5124.bundle.js.map