(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[4705],{4705:(t,e,s)=>{"use strict";s.r(e),s.d(e,{OutputArea:()=>f,OutputAreaModel:()=>h,OutputPrompt:()=>w,SimplifiedOutputArea:()=>C,Stdin:()=>O});var n,i=s(62867),r=s(75138),a=s(99871),o=s(62510),d=s(71187),u=s(9727);class h{constructor(t={}){this.clearNext=!1,this._trusted=!1,this._isDisposed=!1,this._stateChanged=new r.Signal(this),this._changed=new r.Signal(this),this._trusted=!!t.trusted,this.contentFactory=t.contentFactory||h.defaultContentFactory,this.list=new o.ObservableList,t.values&&(0,i.each)(t.values,(t=>{this._add(t)})),this.list.changed.connect(this._onListChanged,this)}get stateChanged(){return this._stateChanged}get changed(){return this._changed}get length(){return this.list?this.list.length:0}get trusted(){return this._trusted}set trusted(t){if(t===this._trusted)return;const e=this._trusted=t;for(let t=0;t<this.list.length;t++){let s=this.list.get(t);const n=s.toJSON();s.dispose(),s=this._createItem({value:n,trusted:e}),this.list.set(t,s)}}get isDisposed(){return this._isDisposed}dispose(){this.isDisposed||(this._isDisposed=!0,this.list.dispose(),r.Signal.clearData(this))}get(t){return this.list.get(t)}set(t,e){e=u.JSONExt.deepCopy(e),n.normalize(e);const s=this._createItem({value:e,trusted:this._trusted});this.list.set(t,s)}add(t){return this.clearNext&&(this.clear(),this.clearNext=!1),this._add(t)}clear(t=!1){this._lastStream="",t?this.clearNext=!0:((0,i.each)(this.list,(t=>{t.dispose()})),this.list.clear())}fromJSON(t){this.clear(),(0,i.each)(t,(t=>{this._add(t)}))}toJSON(){return(0,i.toArray)((0,i.map)(this.list,(t=>t.toJSON())))}_add(t){const e=this._trusted;if(t=u.JSONExt.deepCopy(t),n.normalize(t),a.isStream(t)&&this._lastStream&&t.name===this._lastName&&this.shouldCombine({value:t,lastModel:this.list.get(this.length-1)})){this._lastStream+=t.text,this._lastStream=n.removeOverwrittenChars(this._lastStream),t.text=this._lastStream;const s=this._createItem({value:t,trusted:e}),i=this.length-1;return this.list.get(i).dispose(),this.list.set(i,s),i}a.isStream(t)&&(t.text=n.removeOverwrittenChars(t.text));const s=this._createItem({value:t,trusted:e});return a.isStream(t)?(this._lastStream=t.text,this._lastName=t.name):this._lastStream="",this.list.push(s)}shouldCombine(t){return!0}_createItem(t){const e=this.contentFactory.createOutputModel(t);return e.changed.connect(this._onGenericChange,this),e}_onListChanged(t,e){this._changed.emit(e)}_onGenericChange(){this._stateChanged.emit(void 0)}}!function(t){class e{createOutputModel(t){return new d.OutputModel(t)}}t.ContentFactory=e,t.defaultContentFactory=new e}(h||(h={})),function(t){t.normalize=function(t){a.isStream(t)&&Array.isArray(t.text)&&(t.text=t.text.join("\n"))},t.removeOverwrittenChars=function(t){return function(t){for(t=t.replace(/\r+\n/gm,"\n");t.search(/\r[^$]/g)>-1;){const e=t.match(/^(.*)\r+/m)[1];let s=t.match(/\r+(.*)$/m)[1];s+=e.slice(s.length,e.length),t=t.replace(/\r+.*$/m,"\r").replace(/^.*\r/m,s)}return t}(function(t){let e=t;do{e=(t=e).replace(/[^\n]\x08/gm,"")}while(e.length<t.length);return t}(t))}}(n||(n={}));var l=s(97209),c=s(72189),p=s(27529),g=s(94269);const m="jp-OutputArea-child",_="jp-OutputArea-output",y="jp-OutputArea-prompt";class f extends p.Widget{constructor(t){super(),this.outputLengthChanged=new r.Signal(this),this._onIOPub=t=>{const e=this.model,s=t.header.msg_type;let n;const i=(t.content.transient||{}).display_id;let r;switch(s){case"execute_result":case"display_data":case"stream":case"error":n=Object.assign(Object.assign({},t.content),{output_type:s}),e.add(n);break;case"clear_output":{const s=t.content.wait;e.clear(s);break}case"update_display_data":if(n=Object.assign(Object.assign({},t.content),{output_type:"display_data"}),r=this._displayIdMap.get(i),r)for(const t of r)e.set(t,n)}i&&"display_data"===s&&(r=this._displayIdMap.get(i)||[],r.push(e.length-1),this._displayIdMap.set(i,r))},this._onExecuteReply=t=>{const e=this.model,s=t.content;if("ok"!==s.status)return;const n=s&&s.payload;if(!n||!n.length)return;const i=n.filter((t=>"page"===t.source));if(!i.length)return;const r={output_type:"display_data",data:JSON.parse(JSON.stringify(i[0])).data,metadata:{}};e.add(r)},this._minHeightTimeout=null,this._displayIdMap=new Map;const e=this.model=t.model;this.addClass("jp-OutputArea"),this.rendermime=t.rendermime,this.contentFactory=t.contentFactory||f.defaultContentFactory,this.layout=new p.PanelLayout;for(let t=0;t<e.length;t++){const s=e.get(t);this._insertOutput(t,s)}e.changed.connect(this.onModelChanged,this),e.stateChanged.connect(this.onStateChanged,this)}get widgets(){return this.layout.widgets}get future(){return this._future}set future(t){if(this.model.isDisposed)throw Error("Model is disposed");this._future!==t&&(this._future&&this._future.dispose(),this._future=t,this.model.clear(),this.widgets.length&&(this._clear(),this.outputLengthChanged.emit(this.model.length)),t.onIOPub=this._onIOPub,t.onReply=this._onExecuteReply,t.onStdin=e=>{g.KernelMessage.isInputRequestMsg(e)&&this.onInputRequest(e,t)})}dispose(){this._future&&(this._future.dispose(),this._future=null),this._displayIdMap.clear(),super.dispose()}onModelChanged(t,e){switch(e.type){case"add":this._insertOutput(e.newIndex,e.newValues[0]),this.outputLengthChanged.emit(this.model.length);break;case"remove":if(this.widgets.length){if(0===this.model.length)this._clear();else{const t=e.oldIndex;for(let s=0;s<e.oldValues.length&&t<this.widgets.length;++s){const e=this.widgets[t];e.parent=null,e.dispose()}this._moveDisplayIdIndices(t,e.oldValues.length),this._preventHeightChangeJitter()}this.outputLengthChanged.emit(this.model.length)}break;case"set":this._setOutput(e.newIndex,e.newValues[0]),this.outputLengthChanged.emit(this.model.length)}}_moveDisplayIdIndices(t,e){this._displayIdMap.forEach((s=>{const n=t+e;for(let i=s.length-1;i>=0;--i){const r=s[i];r>=t&&r<n?s.splice(i,1):r>=n&&(s[i]-=e)}}))}onStateChanged(t){for(let t=0;t<this.model.length;t++)this._setOutput(t,this.model.get(t));this.outputLengthChanged.emit(this.model.length)}_clear(){if(!this.widgets.length)return;const t=this.widgets.length;for(let e=0;e<t;e++){const t=this.widgets[0];t.parent=null,t.dispose()}this._displayIdMap.clear(),this._preventHeightChangeJitter()}_preventHeightChangeJitter(){const t=this.node.getBoundingClientRect();this.node.style.minHeight=`${t.height}px`,this._minHeightTimeout&&window.clearTimeout(this._minHeightTimeout),this._minHeightTimeout=window.setTimeout((()=>{this.isDisposed||(this.node.style.minHeight="")}),50)}onInputRequest(t,e){const s=this.contentFactory,n=t.content.prompt,i=t.content.password,r=new p.Panel;r.addClass(m),r.addClass("jp-OutputArea-stdin-item");const a=s.createOutputPrompt();a.addClass(y),r.addWidget(a);const o=s.createStdin({prompt:n,password:i,future:e});o.addClass(_),r.addWidget(o),this.layout.addWidget(r),o.value.then((t=>{this.model.add({output_type:"stream",name:"stdin",text:t+"\n"}),r.dispose()}))}_setOutput(t,e){const s=this.layout,n=s.widgets[t],i=n.widgets?n.widgets[1]:n,r=this.rendermime.preferredMimeType(e.data,e.trusted?"any":"ensure");i.renderModel&&v.currentPreferredMimetype.get(i)===r&&f.isIsolated(r,e.metadata)===i instanceof v.IsolatedRenderer?i.renderModel(e):(s.widgets[t].dispose(),this._insertOutput(t,e))}_insertOutput(t,e){let s=this.createOutputItem(e);s?s.toggleClass("jp-OutputArea-executeResult",null!==e.executionCount):s=new p.Widget,this.layout.insertWidget(t,s)}createOutputItem(t){const e=this.createRenderedMimetype(t);if(!e)return null;const s=new p.Panel;s.addClass(m);const n=this.contentFactory.createOutputPrompt();return n.executionCount=t.executionCount,n.addClass(y),s.addWidget(n),e.addClass(_),s.addWidget(e),s}createRenderedMimetype(t){const e=this.rendermime.preferredMimeType(t.data,t.trusted?"any":"ensure");if(!e)return null;let s=this.rendermime.createRenderer(e);return!0===f.isIsolated(e,t.metadata)&&(s=new v.IsolatedRenderer(s)),v.currentPreferredMimetype.set(s,e),s.renderModel(t).catch((t=>{const e=document.createElement("pre");e.textContent=`Javascript Error: ${t.message}`,s.node.appendChild(e),s.node.className="lm-Widget jp-RenderedText",s.node.setAttribute("data-mime-type","application/vnd.jupyter.stderr")})),s}}class C extends f{onInputRequest(t,e){}createOutputItem(t){const e=this.createRenderedMimetype(t);return e&&e.addClass(_),e}}!function(t){t.execute=async function(t,e,s,n){var i;let r=!0;n&&Array.isArray(n.tags)&&-1!==n.tags.indexOf("raises-exception")&&(r=!1);const a={code:t,stop_on_error:r},o=null===(i=s.session)||void 0===i?void 0:i.kernel;if(!o)throw new Error("Session has no kernel.");const d=o.requestExecute(a,!1,n);return e.future=d,d.done},t.isIsolated=function(t,e){const s=e[t];return s&&void 0!==s.isolated?!!s.isolated:!!e.isolated};class e{createOutputPrompt(){return new w}createStdin(t){return new O(t)}}t.ContentFactory=e,t.defaultContentFactory=new e}(f||(f={}));class w extends p.Widget{constructor(){super(),this._executionCount=null,this.addClass("jp-OutputPrompt")}get executionCount(){return this._executionCount}set executionCount(t){this._executionCount=t,this.node.textContent=null===t?"":`[${t}]:`}}class O extends p.Widget{constructor(t){super({node:v.createInputWidgetNode(t.prompt,t.password)}),this._promise=new u.PromiseDelegate,this.addClass("jp-Stdin"),this._input=this.node.getElementsByTagName("input")[0],this._input.focus(),this._future=t.future,this._value=t.prompt+" "}get value(){return this._promise.promise.then((()=>this._value))}handleEvent(t){const e=this._input;"keydown"===t.type&&13===t.keyCode&&(this._future.sendInputReply({status:"ok",value:e.value}),"password"===e.type?this._value+=Array(e.value.length+1).join("·"):this._value+=e.value,this._promise.resolve(void 0))}onAfterAttach(t){this._input.addEventListener("keydown",this),this.update()}onUpdateRequest(t){this._input.focus()}onBeforeDetach(t){this._input.removeEventListener("keydown",this)}}var v;!function(t){t.createInputWidgetNode=function(t,e){const s=document.createElement("div"),n=document.createElement("pre");n.className="jp-Stdin-prompt",n.textContent=t;const i=document.createElement("input");return i.className="jp-Stdin-input",e&&(i.type="password"),s.appendChild(n),n.appendChild(i),s};class e extends p.Widget{constructor(t){super({node:document.createElement("iframe")}),this.addClass("jp-mod-isolated"),this._wrapped=t;const e=this.node;e.frameBorder="0",e.scrolling="auto",e.addEventListener("load",(()=>{e.contentDocument.open(),e.contentDocument.write(this._wrapped.node.innerHTML),e.contentDocument.close();const t=e.contentDocument.body;e.style.height=`${t.scrollHeight}px`,e.heightChangeObserver=new l.Z((()=>{e.style.height=`${t.scrollHeight}px`})),e.heightChangeObserver.observe(t)}))}renderModel(t){return this._wrapped.renderModel(t).then((()=>{const t=this.node.contentWindow;t&&t.location.reload()}))}}t.IsolatedRenderer=e,t.currentPreferredMimetype=new c.AttachedProperty({name:"preferredMimetype",create:t=>""})}(v||(v={}))}}]);
//# sourceMappingURL=4705.bundle.js.map