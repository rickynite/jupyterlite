(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[153],{50153:(t,e,i)=>{"use strict";i.r(e),i.d(e,{DefaultSchemaValidator:()=>p,ISettingRegistry:()=>y,SettingRegistry:()=>g,Settings:()=>m});var s=i(84778),a=i.n(s),r=i(96111),n=i(81443),o=i(66065),c=i(98669),h=i(58137);const l=JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema","title":"JupyterLab Plugin Settings/Preferences Schema","description":"JupyterLab plugin settings/preferences schema","version":"1.0.0","type":"object","additionalProperties":true,"properties":{"jupyter.lab.setting-deprecated":{"type":"boolean","default":false},"jupyter.lab.setting-icon":{"type":"string","default":""},"jupyter.lab.setting-icon-class":{"type":"string","default":""},"jupyter.lab.setting-icon-label":{"type":"string","default":"Plugin"},"jupyter.lab.shortcuts":{"items":{"$ref":"#/definitions/shortcut"},"type":"array","default":[]},"jupyter.lab.transform":{"type":"boolean","default":false}},"definitions":{"shortcut":{"properties":{"args":{"type":"object"},"command":{"type":"string"},"disabled":{"type":"boolean","default":false},"keys":{"items":{"type":"string"},"minItems":1,"type":"array"},"selector":{"type":"string"}},"required":["command","keys","selector"],"type":"object"}}}'),d=o.JSONExt.deepCopy,u=String.fromCharCode(30);class p{constructor(){this._composer=new(a())({useDefaults:!0}),this._validator=new(a()),this._composer.addSchema(l,"jupyterlab-plugin-schema"),this._validator.addSchema(l,"jupyterlab-plugin-schema")}validateData(t,e=!0){const i=this._validator.getSchema(t.id),s=this._composer.getSchema(t.id);if(!i||!s)return"object"!==t.schema.type?[{dataPath:"type",keyword:"schema",schemaPath:"",message:`Setting registry schemas' root-level type must be 'object', rejecting type: ${t.schema.type}`}]:this._addSchema(t.id,t.schema)||this.validateData(t);let a;try{a=r.parse(t.raw)}catch(t){if(t instanceof SyntaxError)return[{dataPath:"",keyword:"syntax",schemaPath:"",message:t.message}];const{column:e,description:i}=t;return[{dataPath:"",keyword:"parse",schemaPath:"",message:`${i} (line ${t.lineNumber} column ${e})`}]}if(!i(a))return i.errors;const n=d(a);return s(n)?(e&&(t.data={composite:n,user:a}),null):s.errors}_addSchema(t,e){const i=this._composer,s=this._validator,a=s.getSchema("jupyterlab-plugin-schema");return a(e)?s.validateSchema(e)?(i.removeSchema(t),s.removeSchema(t),i.addSchema(e,t),s.addSchema(e,t),null):s.errors:a.errors}}class g{constructor(t){this.schema=l,this.plugins=Object.create(null),this._pluginChanged=new h.Signal(this),this._ready=Promise.resolve(),this._transformers=Object.create(null),this.connector=t.connector,this.validator=t.validator||new p,this._timeout=t.timeout||1e3,t.plugins&&(this._ready=this._preload(t.plugins))}get pluginChanged(){return this._pluginChanged}async get(t,e){await this._ready;const i=this.plugins;if(t in i){const{composite:s,user:a}=i[t].data;return{composite:void 0!==s[e]?d(s[e]):void 0,user:void 0!==a[e]?d(a[e]):void 0}}return this.load(t).then((()=>this.get(t,e)))}async load(t){await this._ready;const e=this.plugins;return t in e?new m({plugin:e[t],registry:this}):this.reload(t)}async reload(t){await this._ready;const e=await this.connector.fetch(t),i=this.plugins;if(void 0===e)throw[{dataPath:"",keyword:"id",message:`Could not fetch settings for ${t}.`,schemaPath:""}];return await this._load(await this._transform("fetch",e)),this._pluginChanged.emit(t),new m({plugin:i[t],registry:this})}async remove(t,e){await this._ready;const i=this.plugins;if(!(t in i))return;const s=r.parse(i[t].raw);return delete s[e],delete s[`// ${e}`],i[t].raw=f.annotatedPlugin(i[t],s),this._save(t)}async set(t,e,i){await this._ready;const s=this.plugins;if(!(t in s))return this.load(t).then((()=>this.set(t,e,i)));const a=r.parse(s[t].raw);return s[t].raw=f.annotatedPlugin(s[t],Object.assign(Object.assign({},a),{[e]:i})),this._save(t)}transform(t,e){const i=this._transformers;if(t in i)throw new Error(`${t} already has a transformer.`);return i[t]={fetch:e.fetch||(t=>t),compose:e.compose||(t=>t)},new c.DisposableDelegate((()=>{delete i[t]}))}async upload(t,e){await this._ready;const i=this.plugins;return t in i?(i[t].raw=e,this._save(t)):this.load(t).then((()=>this.upload(t,e)))}async _load(t){const e=t.id;try{await this._validate(t)}catch(t){const i=[`Validating ${e} failed:`];throw t.forEach(((t,e)=>{const{dataPath:s,schemaPath:a,keyword:r,message:n}=t;(s||a)&&i.push(`${e} - schema @ ${a}, data @ ${s}`),i.push(`{${r}} ${n}`)})),console.warn(i.join("\n")),t}}async _preload(t){await Promise.all(t.map((async t=>{var e;try{await this._load(await this._transform("fetch",t))}catch(t){"timeout"!==(null===(e=t[0])||void 0===e?void 0:e.keyword)&&console.warn("Ignored setting registry preload errors.",t)}})))}async _save(t){const e=this.plugins;if(!(t in e))throw new Error(`${t} does not exist in setting registry.`);try{await this._validate(e[t])}catch(e){throw console.warn(`${t} validation errors:`,e),new Error(`${t} failed to validate; check console.`)}await this.connector.save(t,e[t].raw);const i=await this.connector.fetch(t);if(void 0===i)throw[{dataPath:"",keyword:"id",message:`Could not fetch settings for ${t}.`,schemaPath:""}];await this._load(await this._transform("fetch",i)),this._pluginChanged.emit(t)}async _transform(t,e,i=(new Date).getTime()){const s=(new Date).getTime()-i,a=e.id,r=this._transformers,n=this._timeout;if(!e.schema["jupyter.lab.transform"])return e;if(a in r){const i=r[a][t].call(null,e);if(i.id!==a)throw[{dataPath:"",keyword:"id",message:"Plugin transformations cannot change plugin IDs.",schemaPath:""}];return i}if(s<n)return await new Promise((t=>{setTimeout((()=>{t()}),250)})),this._transform(t,e,i);throw[{dataPath:"",keyword:"timeout",message:`Transforming ${e.id} timed out.`,schemaPath:""}]}async _validate(t){const e=this.validator.validateData(t);if(e)throw e;this.plugins[t.id]=await this._transform("compose",t)}}class m{constructor(t){this._changed=new h.Signal(this),this._isDisposed=!1,this.id=t.plugin.id,this.registry=t.registry,this.registry.pluginChanged.connect(this._onPluginChanged,this)}get changed(){return this._changed}get composite(){return this.plugin.data.composite}get isDisposed(){return this._isDisposed}get plugin(){return this.registry.plugins[this.id]}get schema(){return this.plugin.schema}get raw(){return this.plugin.raw}get user(){return this.plugin.data.user}get version(){return this.plugin.version}annotatedDefaults(){return f.annotatedDefaults(this.schema,this.id)}default(t){return f.reifyDefault(this.schema,t)}dispose(){this._isDisposed||(this._isDisposed=!0,h.Signal.clearData(this))}get(t){const{composite:e,user:i}=this;return{composite:void 0!==e[t]?d(e[t]):void 0,user:void 0!==i[t]?d(i[t]):void 0}}remove(t){return this.registry.remove(this.plugin.id,t)}save(t){return this.registry.upload(this.plugin.id,t)}set(t,e){return this.registry.set(this.plugin.id,t,e)}validate(t){const{id:e,schema:i}=this.plugin,s=this.registry.validator,a=this.version;return s.validateData({data:{composite:{},user:{}},id:e,raw:t,schema:i,version:a},!1)}_onPluginChanged(t,e){e===this.plugin.id&&this._changed.emit(void 0)}}var f;!function(t){t.reconcileShortcuts=function(t,e){const i={};return e=e.filter((t=>{const e=n.CommandRegistry.normalizeKeys(t).join(u);if(!e)return console.warn("Skipping this shortcut because there are no actionable keys on this platform",t),!1;e in i||(i[e]={});const{selector:s}=t;return s in i[e]?(console.warn("Skipping this shortcut because it collides with another shortcut.",t),!1):(i[e][s]=!1,!0)})),t=[...t.filter((t=>!!t.disabled)),...t.filter((t=>!t.disabled))].filter((t=>{const e=n.CommandRegistry.normalizeKeys(t).join(u);if(!e)return!1;e in i||(i[e]={});const{disabled:s,selector:a}=t;return a in i[e]?(i[e][a]&&console.warn("Skipping this default shortcut because it collides with another default shortcut.",t),!1):(i[e][a]=!s,!0)})),e.concat(t).filter((t=>!t.disabled))}}(g||(g={})),function(t){const e="    ",i="[missing schema description]",s="[missing schema title]";function a(t){return t.reduce(((e,i,s)=>{const a=i.split("\n");return e+i+(0===a[a.length-1].trim().indexOf("//")||s===t.length-1?"":",")+(s===t.length-1?"":"\n\n")}),"")}function r(t,e="    // "){return e+t.split("\n").join(`\n${e}`)}function n(t,e){var i;if(!("default"in(t=(e?null===(i=t.properties)||void 0===i?void 0:i[e]:t)||{}))||"object"!==t.type)return t.default;const s=o.JSONExt.deepCopy(t.default),a=t.properties||{};for(const t in a)s[t]=n(a[t]);return s}t.annotatedDefaults=function(t,o){const{description:c,properties:h,title:l}=t,d=h?Object.keys(h).sort(((t,e)=>t.localeCompare(e))):[],u=Math.max((c||i).length,o.length);return["{",r(`${l||s}`),r(o),r(c||i),r("*".repeat(u)),"",a(d.map((s=>function(t,s){const a=t.properties&&t.properties[s]||{},o=a.type,c=a.description||i,h=a.title||"",l=n(t,s),d=e.length,u=void 0!==l?r(`"${s}": ${JSON.stringify(l,null,d)}`,e):r(`"${s}": ${o}`);return[r(h),r(c),u].filter((t=>t.length)).join("\n")}(t,s)))),"}"].join("\n")},t.annotatedPlugin=function(t,n){const{description:o,title:c}=t.schema,h=Object.keys(n).sort(((t,e)=>t.localeCompare(e))),l=Math.max((o||i).length,t.id.length);return["{",r(`${c||s}`),r(t.id),r(o||i),r("*".repeat(l)),"",a(h.map((a=>function(t,a,n){const o=t.properties&&t.properties[a],c=o&&o.description||i,h=o&&o.title||s,l=e.length,d=r(`"${a}": ${JSON.stringify(n,null,l)}`,e);return[r(h),r(c),d].join("\n")}(t.schema,a,n[a])))),"}"].join("\n")},t.reifyDefault=n}(f||(f={}));const y=new o.Token("@jupyterlab/coreutils:ISettingRegistry")}}]);
//# sourceMappingURL=153.bundle.js.map