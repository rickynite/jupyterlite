(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[8585],{56548:(r,o,t)=>{"use strict";t.r(o),t.d(o,{default:()=>a});var n=t(1799),e=t.n(n),i=t(82609),c=t.n(i)()(e());c.push([r.id,"/*\n\n    Name:       Tomorrow Night - Bright\n    Author:     Chris Kempson\n\n    Port done by Gerard Braad <me@gbraad.nl>\n\n*/\n\n.cm-s-tomorrow-night-bright.CodeMirror { background: #000000; color: #eaeaea; }\n.cm-s-tomorrow-night-bright div.CodeMirror-selected { background: #424242; }\n.cm-s-tomorrow-night-bright .CodeMirror-gutters { background: #000000; border-right: 0px; }\n.cm-s-tomorrow-night-bright .CodeMirror-guttermarker { color: #e78c45; }\n.cm-s-tomorrow-night-bright .CodeMirror-guttermarker-subtle { color: #777; }\n.cm-s-tomorrow-night-bright .CodeMirror-linenumber { color: #424242; }\n.cm-s-tomorrow-night-bright .CodeMirror-cursor { border-left: 1px solid #6A6A6A; }\n\n.cm-s-tomorrow-night-bright span.cm-comment { color: #d27b53; }\n.cm-s-tomorrow-night-bright span.cm-atom { color: #a16a94; }\n.cm-s-tomorrow-night-bright span.cm-number { color: #a16a94; }\n\n.cm-s-tomorrow-night-bright span.cm-property, .cm-s-tomorrow-night-bright span.cm-attribute { color: #99cc99; }\n.cm-s-tomorrow-night-bright span.cm-keyword { color: #d54e53; }\n.cm-s-tomorrow-night-bright span.cm-string { color: #e7c547; }\n\n.cm-s-tomorrow-night-bright span.cm-variable { color: #b9ca4a; }\n.cm-s-tomorrow-night-bright span.cm-variable-2 { color: #7aa6da; }\n.cm-s-tomorrow-night-bright span.cm-def { color: #e78c45; }\n.cm-s-tomorrow-night-bright span.cm-bracket { color: #eaeaea; }\n.cm-s-tomorrow-night-bright span.cm-tag { color: #d54e53; }\n.cm-s-tomorrow-night-bright span.cm-link { color: #a16a94; }\n.cm-s-tomorrow-night-bright span.cm-error { background: #d54e53; color: #6A6A6A; }\n\n.cm-s-tomorrow-night-bright .CodeMirror-activeline-background { background: #2a2a2a; }\n.cm-s-tomorrow-night-bright .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }\n","",{version:3,sources:["webpack://./../../node_modules/codemirror/theme/tomorrow-night-bright.css"],names:[],mappings:"AAAA;;;;;;;CAOC;;AAED,yCAAyC,mBAAmB,EAAE,cAAc,EAAE;AAC9E,sDAAsD,mBAAmB,EAAE;AAC3E,kDAAkD,mBAAmB,EAAE,iBAAiB,EAAE;AAC1F,uDAAuD,cAAc,EAAE;AACvE,8DAA8D,WAAW,EAAE;AAC3E,qDAAqD,cAAc,EAAE;AACrE,iDAAiD,8BAA8B,EAAE;;AAEjF,8CAA8C,cAAc,EAAE;AAC9D,2CAA2C,cAAc,EAAE;AAC3D,6CAA6C,cAAc,EAAE;;AAE7D,8FAA8F,cAAc,EAAE;AAC9G,8CAA8C,cAAc,EAAE;AAC9D,6CAA6C,cAAc,EAAE;;AAE7D,+CAA+C,cAAc,EAAE;AAC/D,iDAAiD,cAAc,EAAE;AACjE,0CAA0C,cAAc,EAAE;AAC1D,8CAA8C,cAAc,EAAE;AAC9D,0CAA0C,cAAc,EAAE;AAC1D,2CAA2C,cAAc,EAAE;AAC3D,4CAA4C,mBAAmB,EAAE,cAAc,EAAE;;AAEjF,gEAAgE,mBAAmB,EAAE;AACrF,0DAA0D,0BAA0B,EAAE,uBAAuB,EAAE",sourcesContent:["/*\n\n    Name:       Tomorrow Night - Bright\n    Author:     Chris Kempson\n\n    Port done by Gerard Braad <me@gbraad.nl>\n\n*/\n\n.cm-s-tomorrow-night-bright.CodeMirror { background: #000000; color: #eaeaea; }\n.cm-s-tomorrow-night-bright div.CodeMirror-selected { background: #424242; }\n.cm-s-tomorrow-night-bright .CodeMirror-gutters { background: #000000; border-right: 0px; }\n.cm-s-tomorrow-night-bright .CodeMirror-guttermarker { color: #e78c45; }\n.cm-s-tomorrow-night-bright .CodeMirror-guttermarker-subtle { color: #777; }\n.cm-s-tomorrow-night-bright .CodeMirror-linenumber { color: #424242; }\n.cm-s-tomorrow-night-bright .CodeMirror-cursor { border-left: 1px solid #6A6A6A; }\n\n.cm-s-tomorrow-night-bright span.cm-comment { color: #d27b53; }\n.cm-s-tomorrow-night-bright span.cm-atom { color: #a16a94; }\n.cm-s-tomorrow-night-bright span.cm-number { color: #a16a94; }\n\n.cm-s-tomorrow-night-bright span.cm-property, .cm-s-tomorrow-night-bright span.cm-attribute { color: #99cc99; }\n.cm-s-tomorrow-night-bright span.cm-keyword { color: #d54e53; }\n.cm-s-tomorrow-night-bright span.cm-string { color: #e7c547; }\n\n.cm-s-tomorrow-night-bright span.cm-variable { color: #b9ca4a; }\n.cm-s-tomorrow-night-bright span.cm-variable-2 { color: #7aa6da; }\n.cm-s-tomorrow-night-bright span.cm-def { color: #e78c45; }\n.cm-s-tomorrow-night-bright span.cm-bracket { color: #eaeaea; }\n.cm-s-tomorrow-night-bright span.cm-tag { color: #d54e53; }\n.cm-s-tomorrow-night-bright span.cm-link { color: #a16a94; }\n.cm-s-tomorrow-night-bright span.cm-error { background: #d54e53; color: #6A6A6A; }\n\n.cm-s-tomorrow-night-bright .CodeMirror-activeline-background { background: #2a2a2a; }\n.cm-s-tomorrow-night-bright .CodeMirror-matchingbracket { text-decoration: underline; color: white !important; }\n"],sourceRoot:""}]);const a=c},82609:r=>{"use strict";r.exports=function(r){var o=[];return o.toString=function(){return this.map((function(o){var t=r(o);return o[2]?"@media ".concat(o[2]," {").concat(t,"}"):t})).join("")},o.i=function(r,t,n){"string"==typeof r&&(r=[[null,r,""]]);var e={};if(n)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(e[c]=!0)}for(var a=0;a<r.length;a++){var s=[].concat(r[a]);n&&e[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),o.push(s))}},o}},1799:r=>{"use strict";function o(r,o){(null==o||o>r.length)&&(o=r.length);for(var t=0,n=new Array(o);t<o;t++)n[t]=r[t];return n}r.exports=function(r){var t,n,e=(n=4,function(r){if(Array.isArray(r))return r}(t=r)||function(r,o){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r)){var t=[],n=!0,e=!1,i=void 0;try{for(var c,a=r[Symbol.iterator]();!(n=(c=a.next()).done)&&(t.push(c.value),!o||t.length!==o);n=!0);}catch(r){e=!0,i=r}finally{try{n||null==a.return||a.return()}finally{if(e)throw i}}return t}}(t,n)||function(r,t){if(r){if("string"==typeof r)return o(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);return"Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n?Array.from(r):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(r,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=e[1],c=e[3];if("function"==typeof btoa){var a=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),A="/*# ".concat(s," */"),m=c.sources.map((function(r){return"/*# sourceURL=".concat(c.sourceRoot||"").concat(r," */")}));return[i].concat(m).concat([A]).join("\n")}return[i].join("\n")}},58585:(r,o,t)=>{var n=t(56548);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[r.id,n,""]]);t(46062)(n,{insert:"head",singleton:!1}),n.locals&&(r.exports=n.locals)},46062:(r,o,t)=>{"use strict";var n,e={},i=function(){var r={};return function(o){if(void 0===r[o]){var t=document.querySelector(o);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(r){t=null}r[o]=t}return r[o]}}();function c(r,o){for(var t=[],n={},e=0;e<r.length;e++){var i=r[e],c=o.base?i[0]+o.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};n[c]?n[c].parts.push(a):t.push(n[c]={id:c,parts:[a]})}return t}function a(r,o){for(var t=0;t<r.length;t++){var n=r[t],i=e[n.id],c=0;if(i){for(i.refs++;c<i.parts.length;c++)i.parts[c](n.parts[c]);for(;c<n.parts.length;c++)i.parts.push(d(n.parts[c],o))}else{for(var a=[];c<n.parts.length;c++)a.push(d(n.parts[c],o));e[n.id]={id:n.id,refs:1,parts:a}}}}function s(r){var o=document.createElement("style");if(void 0===r.attributes.nonce){var n=t.nc;n&&(r.attributes.nonce=n)}if(Object.keys(r.attributes).forEach((function(t){o.setAttribute(t,r.attributes[t])})),"function"==typeof r.insert)r.insert(o);else{var e=i(r.insert||"head");if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(o)}return o}var A,m=(A=[],function(r,o){return A[r]=o,A.filter(Boolean).join("\n")});function h(r,o,t,n){var e=t?"":n.css;if(r.styleSheet)r.styleSheet.cssText=m(o,e);else{var i=document.createTextNode(e),c=r.childNodes;c[o]&&r.removeChild(c[o]),c.length?r.insertBefore(i,c[o]):r.appendChild(i)}}function l(r,o,t){var n=t.css,e=t.media,i=t.sourceMap;if(e&&r.setAttribute("media",e),i&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}var g=null,u=0;function d(r,o){var t,n,e;if(o.singleton){var i=u++;t=g||(g=s(o)),n=h.bind(null,t,i,!1),e=h.bind(null,t,i,!0)}else t=s(o),n=l.bind(null,t,o),e=function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(t)};return n(r),function(o){if(o){if(o.css===r.css&&o.media===r.media&&o.sourceMap===r.sourceMap)return;n(r=o)}else e()}}r.exports=function(r,o){(o=o||{}).attributes="object"==typeof o.attributes?o.attributes:{},o.singleton||"boolean"==typeof o.singleton||(o.singleton=(void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n));var t=c(r,o);return a(t,o),function(r){for(var n=[],i=0;i<t.length;i++){var s=t[i],A=e[s.id];A&&(A.refs--,n.push(A))}r&&a(c(r,o),o);for(var m=0;m<n.length;m++){var h=n[m];if(0===h.refs){for(var l=0;l<h.parts.length;l++)h.parts[l]();delete e[h.id]}}}}}}]);
//# sourceMappingURL=8585.bundle.js.map