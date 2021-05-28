(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[5682],{8741:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ActivityMonitor=void 0;const o=n(58137);t.ActivityMonitor=class{constructor(e){this._timer=-1,this._timeout=-1,this._isDisposed=!1,this._activityStopped=new o.Signal(this),e.signal.connect(this._onSignalFired,this),this._timeout=e.timeout||1e3}get activityStopped(){return this._activityStopped}get timeout(){return this._timeout}set timeout(e){this._timeout=e}get isDisposed(){return this._isDisposed}dispose(){this._isDisposed||(this._isDisposed=!0,o.Signal.clearData(this))}_onSignalFired(e,t){clearTimeout(this._timer),this._sender=e,this._args=t,this._timer=setTimeout((()=>{this._activityStopped.emit({sender:this._sender,args:this._args})}),this._timeout)}}},45682:function(e,t,n){"use strict";var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),r=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||o(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),r(n(8741),t),r(n(23611),t),r(n(81661),t),r(n(71017),t),r(n(57227),t),r(n(95856),t),r(n(65773),t),r(n(41888),t)},23611:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0})},81661:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MarkdownCodeBlocks=void 0,function(e){e.CODE_BLOCK_MARKER="```";const t=[".markdown",".mdown",".mkdn",".md",".mkd",".mdwn",".mdtxt",".mdtext",".text",".txt",".Rmd"];class n{constructor(e){this.startLine=e,this.code="",this.endLine=-1}}e.MarkdownCodeBlock=n,e.isMarkdown=function(e){return t.indexOf(e)>-1},e.findMarkdownCodeBlocks=function(t){if(!t||""===t)return[];const o=t.split("\n"),r=[];let i=null;for(let t=0;t<o.length;t++){const a=o[t],s=0===a.indexOf(e.CODE_BLOCK_MARKER),u=null!=i;if(s||u)if(u)i&&(s?(i.endLine=t-1,r.push(i),i=null):i.code+=a+"\n");else{i=new n(t);const o=a.indexOf(e.CODE_BLOCK_MARKER),s=a.lastIndexOf(e.CODE_BLOCK_MARKER);o!==s&&(i.code=a.substring(o+e.CODE_BLOCK_MARKER.length,s),i.endLine=t,r.push(i),i=null)}}return r}}(t.MarkdownCodeBlocks||(t.MarkdownCodeBlocks={}))},71017:function(__unused_webpack_module,exports,__webpack_require__){"use strict";var process=__webpack_require__(34406),__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.PageConfig=void 0;const coreutils_1=__webpack_require__(66065),minimist_1=__importDefault(__webpack_require__(33649)),url_1=__webpack_require__(41888);var PageConfig;(function(PageConfig){function getOption(name){if(configData)return configData[name]||getBodyData(name);configData=Object.create(null);let found=!1;if("undefined"!=typeof document&&document){const e=document.getElementById("jupyter-config-data");e&&(configData=JSON.parse(e.textContent||""),found=!0)}if(!found)try{const cli=minimist_1.default(process.argv.slice(2)),path=__webpack_require__(21023);let fullPath="";"jupyter-config-data"in cli?fullPath=path.resolve(cli["jupyter-config-data"]):"JUPYTER_CONFIG_DATA"in{}&&(fullPath=path.resolve({}.JUPYTER_CONFIG_DATA)),fullPath&&(configData=eval("require")(fullPath))}catch(e){console.error(e)}if(coreutils_1.JSONExt.isObject(configData))for(const e in configData)"string"!=typeof configData[e]&&(configData[e]=JSON.stringify(configData[e]));else configData=Object.create(null);return configData[name]||getBodyData(name)}function setOption(e,t){const n=getOption(e);return configData[e]=t,n}function getBaseUrl(){return url_1.URLExt.normalize(getOption("baseUrl")||"/")}function getTreeUrl(){return url_1.URLExt.join(getBaseUrl(),getOption("treeUrl"))}function getShareUrl(){return url_1.URLExt.normalize(getOption("shareUrl")||getBaseUrl())}function getTreeShareUrl(){return url_1.URLExt.normalize(url_1.URLExt.join(getShareUrl(),getOption("treeUrl")))}function getUrl(e){var t,n,o;let r=getOption("baseUrl")||"/";const i=null!==(t=e.mode)&&void 0!==t?t:getOption("mode"),a=null!==(n=e.workspace)&&void 0!==n?n:getOption("workspace"),s="multiple-document"===i?"lab":"doc";r=url_1.URLExt.join(r,s),a!==PageConfig.defaultWorkspace&&(r=url_1.URLExt.join(r,"workspaces",encodeURIComponent(getOption("workspace"))));const u=null!==(o=e.treePath)&&void 0!==o?o:getOption("treePath");return u&&(r=url_1.URLExt.join(r,"tree",url_1.URLExt.encodeParts(u))),r}function getWsUrl(e){let t=getOption("wsUrl");if(!t){if(0!==(e=e?url_1.URLExt.normalize(e):getBaseUrl()).indexOf("http"))return"";t="ws"+e.slice(4)}return url_1.URLExt.normalize(t)}function getNBConvertURL({path:e,format:t,download:n}){const o=url_1.URLExt.encodeParts(e),r=url_1.URLExt.join(getBaseUrl(),"nbconvert",t,o);return n?r+"?download=true":r}function getToken(){return getOption("token")||getBodyData("jupyterApiToken")}function getNotebookVersion(){const e=getOption("notebookVersion");return""===e?[0,0,0]:JSON.parse(e)}PageConfig.getOption=getOption,PageConfig.setOption=setOption,PageConfig.getBaseUrl=getBaseUrl,PageConfig.getTreeUrl=getTreeUrl,PageConfig.getShareUrl=getShareUrl,PageConfig.getTreeShareUrl=getTreeShareUrl,PageConfig.getUrl=getUrl,PageConfig.defaultWorkspace="default",PageConfig.getWsUrl=getWsUrl,PageConfig.getNBConvertURL=getNBConvertURL,PageConfig.getToken=getToken,PageConfig.getNotebookVersion=getNotebookVersion;let configData=null,Extension;function getBodyData(e){if("undefined"==typeof document||!document.body)return"";const t=document.body.dataset[e];return void 0===t?"":decodeURIComponent(t)}!function(e){function t(e){try{const t=getOption(e);if(t)return JSON.parse(t)}catch(t){console.warn(`Unable to parse ${e}.`,t)}return[]}e.deferred=t("deferredExtensions"),e.disabled=t("disabledExtensions"),e.isDeferred=function(t){const n=t.indexOf(":");let o="";return-1!==n&&(o=t.slice(0,n)),e.deferred.some((e=>e===t||o&&e===o))},e.isDisabled=function(t){const n=t.indexOf(":");let o="";return-1!==n&&(o=t.slice(0,n)),e.disabled.some((e=>e===t||o&&e===o))}}(Extension=PageConfig.Extension||(PageConfig.Extension={}))})(PageConfig=exports.PageConfig||(exports.PageConfig={}))},57227:function(e,t,n){"use strict";var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&o(t,e,n);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.PathExt=void 0;const a=i(n(21023));!function(e){function t(e){return 0===e.indexOf("/")&&(e=e.slice(1)),e}e.join=function(...e){const n=a.join(...e);return"."===n?"":t(n)},e.basename=function(e,t){return a.basename(e,t)},e.dirname=function(e){const n=t(a.dirname(e));return"."===n?"":n},e.extname=function(e){return a.extname(e)},e.normalize=function(e){return""===e?"":t(a.normalize(e))},e.resolve=function(...e){return t(a.resolve(...e))},e.relative=function(e,n){return t(a.relative(e,n))},e.normalizeExtension=function(e){return e.length>0&&0!==e.indexOf(".")&&(e=`.${e}`),e},e.removeSlash=t}(t.PathExt||(t.PathExt={}))},95856:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Text=void 0,function(e){const t="𝐚".length>1;e.jsIndexToCharIndex=function(e,n){if(t)return e;let o=e;for(let t=0;t+1<n.length&&t<e;t++){const e=n.charCodeAt(t);if(e>=55296&&e<=56319){const e=n.charCodeAt(t+1);e>=56320&&e<=57343&&(o--,t++)}}return o},e.charIndexToJsIndex=function(e,n){if(t)return e;let o=e;for(let e=0;e+1<n.length&&e<o;e++){const t=n.charCodeAt(e);if(t>=55296&&t<=56319){const t=n.charCodeAt(e+1);t>=56320&&t<=57343&&(o++,e++)}}return o},e.camelCase=function(e,t=!1){return e.replace(/^(\w)|[\s-_:]+(\w)/g,(function(e,n,o){return o?o.toUpperCase():t?n.toUpperCase():n.toLowerCase()}))},e.titleCase=function(e){return(e||"").toLowerCase().split(" ").map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join(" ")}}(t.Text||(t.Text={}))},65773:function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Time=void 0;const r=o(n(19034));var i;(i=t.Time||(t.Time={})).formatHuman=function(e){r.default.locale(document.documentElement.lang);let t=r.default(e).fromNow();return t="a few seconds ago"===t?"seconds ago":t,t},i.format=function(e,t="YYYY-MM-DD HH:mm"){return r.default(e).format(t)}},41888:function(e,t,n){"use strict";var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&o(t,e,n);return r(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.URLExt=void 0;const s=a(n(64846)),u=i(n(21023));!function(e){function t(e){if("undefined"!=typeof document&&document){const t=document.createElement("a");return t.href=e,t}return s.default(e)}function n(...e){const t=s.default(e[0],{}),n=`${t.protocol}${t.slashes?"//":""}${t.auth}${t.auth?"@":""}${t.host}`,o=u.join(`${n&&"/"!==t.pathname[0]?"/":""}${t.pathname}`,...e.slice(1));return`${n}${"."===o?"":o}`}e.parse=t,e.getHostName=function(e){return s.default(e).hostname},e.normalize=function(e){return e&&t(e).toString()},e.join=n,e.encodeParts=function(e){return n(...e.split("/").map(encodeURIComponent))},e.objectToQueryString=function(e){const t=Object.keys(e).filter((e=>e.length>0));return t.length?"?"+t.map((t=>{const n=encodeURIComponent(String(e[t]));return t+(n?"="+n:"")})).join("&"):""},e.queryStringToObject=function(e){return e.replace(/^\?/,"").split("&").reduce(((e,t)=>{const[n,o]=t.split("=");return n.length>0&&(e[n]=decodeURIComponent(o||"")),e}),{})},e.isLocal=function(e){const{protocol:n}=t(e);return(!n||0!==e.toLowerCase().indexOf(n))&&0!==e.indexOf("/")}}(t.URLExt||(t.URLExt={}))},64846:(e,t,n)=>{"use strict";var o=n(57245),r=n(97375),i=/^[A-Za-z][A-Za-z0-9+-.]*:[\\/]+/,a=/^([a-z][a-z0-9.+-]*:)?([\\/]{1,})?([\S\s]*)/i,s=new RegExp("^[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]+");function u(e){return(e||"").toString().replace(s,"")}var c=[["#","hash"],["?","query"],function(e){return e.replace("\\","/")},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d+)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],l={hash:1,query:1};function f(e){var t,o=("undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{}).location||{},r={},a=typeof(e=e||o);if("blob:"===e.protocol)r=new p(unescape(e.pathname),{});else if("string"===a)for(t in r=new p(e,{}),l)delete r[t];else if("object"===a){for(t in e)t in l||(r[t]=e[t]);void 0===r.slashes&&(r.slashes=i.test(e.href))}return r}function d(e){e=u(e);var t=a.exec(e);return{protocol:t[1]?t[1].toLowerCase():"",slashes:!!(t[2]&&t[2].length>=2),rest:t[2]&&1===t[2].length?"/"+t[3]:t[3]}}function p(e,t,n){if(e=u(e),!(this instanceof p))return new p(e,t,n);var i,a,s,l,h,g,_=c.slice(),m=typeof t,O=this,v=0;for("object"!==m&&"string"!==m&&(n=t,t=null),n&&"function"!=typeof n&&(n=r.parse),t=f(t),i=!(a=d(e||"")).protocol&&!a.slashes,O.slashes=a.slashes||i&&t.slashes,O.protocol=a.protocol||t.protocol||"",e=a.rest,a.slashes||(_[3]=[/(.*)/,"pathname"]);v<_.length;v++)"function"!=typeof(l=_[v])?(s=l[0],g=l[1],s!=s?O[g]=e:"string"==typeof s?~(h=e.indexOf(s))&&("number"==typeof l[2]?(O[g]=e.slice(0,h),e=e.slice(h+l[2])):(O[g]=e.slice(h),e=e.slice(0,h))):(h=s.exec(e))&&(O[g]=h[1],e=e.slice(0,h.index)),O[g]=O[g]||i&&l[3]&&t[g]||"",l[4]&&(O[g]=O[g].toLowerCase())):e=l(e);n&&(O.query=n(O.query)),i&&t.slashes&&"/"!==O.pathname.charAt(0)&&(""!==O.pathname||""!==t.pathname)&&(O.pathname=function(e,t){if(""===e)return t;for(var n=(t||"/").split("/").slice(0,-1).concat(e.split("/")),o=n.length,r=n[o-1],i=!1,a=0;o--;)"."===n[o]?n.splice(o,1):".."===n[o]?(n.splice(o,1),a++):a&&(0===o&&(i=!0),n.splice(o,1),a--);return i&&n.unshift(""),"."!==r&&".."!==r||n.push(""),n.join("/")}(O.pathname,t.pathname)),"/"!==O.pathname.charAt(0)&&O.hostname&&(O.pathname="/"+O.pathname),o(O.port,O.protocol)||(O.host=O.hostname,O.port=""),O.username=O.password="",O.auth&&(l=O.auth.split(":"),O.username=l[0]||"",O.password=l[1]||""),O.origin=O.protocol&&O.host&&"file:"!==O.protocol?O.protocol+"//"+O.host:"null",O.href=O.toString()}p.prototype={set:function(e,t,n){var i=this;switch(e){case"query":"string"==typeof t&&t.length&&(t=(n||r.parse)(t)),i[e]=t;break;case"port":i[e]=t,o(t,i.protocol)?t&&(i.host=i.hostname+":"+t):(i.host=i.hostname,i[e]="");break;case"hostname":i[e]=t,i.port&&(t+=":"+i.port),i.host=t;break;case"host":i[e]=t,/:\d+$/.test(t)?(t=t.split(":"),i.port=t.pop(),i.hostname=t.join(":")):(i.hostname=t,i.port="");break;case"protocol":i.protocol=t.toLowerCase(),i.slashes=!n;break;case"pathname":case"hash":if(t){var a="pathname"===e?"/":"#";i[e]=t.charAt(0)!==a?a+t:t}else i[e]=t;break;default:i[e]=t}for(var s=0;s<c.length;s++){var u=c[s];u[4]&&(i[u[1]]=i[u[1]].toLowerCase())}return i.origin=i.protocol&&i.host&&"file:"!==i.protocol?i.protocol+"//"+i.host:"null",i.href=i.toString(),i},toString:function(e){e&&"function"==typeof e||(e=r.stringify);var t,n=this,o=n.protocol;o&&":"!==o.charAt(o.length-1)&&(o+=":");var i=o+(n.slashes?"//":"");return n.username&&(i+=n.username,n.password&&(i+=":"+n.password),i+="@"),i+=n.host+n.pathname,(t="object"==typeof n.query?e(n.query):n.query)&&(i+="?"!==t.charAt(0)?"?"+t:t),n.hash&&(i+=n.hash),i}},p.extractProtocol=d,p.location=f,p.trimLeft=u,p.qs=r,e.exports=p}}]);
//# sourceMappingURL=5682.bundle.js.map