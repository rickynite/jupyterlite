(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[2609],{12609:(e,t,s)=>{"use strict";s.r(t),s.d(t,{AttachmentsCell:()=>te,AttachmentsCellModel:()=>H,Cell:()=>Z,CellDragUtils:()=>l,CellFooter:()=>C,CellHeader:()=>_,CellModel:()=>P,CodeCell:()=>ee,CodeCellModel:()=>B,Collapser:()=>c,InputArea:()=>f,InputCollapser:()=>p,InputPlaceholder:()=>U,InputPrompt:()=>w,MarkdownCell:()=>se,MarkdownCellModel:()=>W,OutputCollapser:()=>m,OutputPlaceholder:()=>L,Placeholder:()=>J,RawCell:()=>ae,RawCellModel:()=>A,isCodeCellModel:()=>N,isMarkdownCellModel:()=>F,isRawCellModel:()=>I});var a=s(79028),n=s(52522);const i="jp-dragImage",o="jp-dragImage-content",r="jp-dragImage-prompt",d="jp-dragImage-multipleBack";var l;!function(e){e.findCell=function(e,t,s){let n=-1;for(;e&&e.parentElement;){if(s(e)){(0,a.each)(t,((t,s)=>{if(t.node===e)return n=s,!1}));break}e=e.parentElement}return n},e.detectTargetArea=function(e,t){let s;return s=e?e.editorWidget.node.contains(t)?"input":e.promptNode.contains(t)?"prompt":"cell":"unknown",s},e.shouldStartDrag=function(e,t,s,a){const n=Math.abs(s-e),i=Math.abs(a-t);return n>=5||i>=5},e.createCellDragImage=function(e,t){const s=t.length;let a;if("code"===e.model.type){const t=e.model.executionCount;a=" ",t&&(a=t.toString())}else a="";const l=e.model.value.text.split("\n")[0].slice(0,26);return s>1?""!==a?n.VirtualDOM.realize(n.h.div(n.h.div({className:i},n.h.span({className:r},"["+a+"]:"),n.h.span({className:o},l)),n.h.div({className:d},""))):n.VirtualDOM.realize(n.h.div(n.h.div({className:i},n.h.span({className:r}),n.h.span({className:o},l)),n.h.div({className:d},""))):""!==a?n.VirtualDOM.realize(n.h.div(n.h.div({className:"jp-dragImage jp-dragImage-singlePrompt"},n.h.span({className:r},"["+a+"]:"),n.h.span({className:o},l)))):n.VirtualDOM.realize(n.h.div(n.h.div({className:"jp-dragImage jp-dragImage-singlePrompt"},n.h.span({className:r}),n.h.span({className:o},l))))}}(l||(l={}));var h=s(19573),u=s(96927);class c extends h.ReactWidget{constructor(){super(),this.addClass("jp-Collapser")}get collapsed(){return!1}render(){return u.createElement("div",{className:"jp-Collapser-child",onClick:e=>this.handleClick(e)})}}class p extends c{constructor(){super(),this.addClass("jp-InputCollapser")}get collapsed(){var e;const t=null===(e=this.parent)||void 0===e?void 0:e.parent;return!!t&&t.inputHidden}handleClick(e){var t;const s=null===(t=this.parent)||void 0===t?void 0:t.parent;s&&(s.inputHidden=!s.inputHidden),this.update()}}class m extends c{constructor(){super(),this.addClass("jp-OutputCollapser")}get collapsed(){var e;const t=null===(e=this.parent)||void 0===e?void 0:e.parent;return!!t&&t.outputHidden}handleClick(e){var t;const s=null===(t=this.parent)||void 0===t?void 0:t.parent;s&&(s.outputHidden=!s.outputHidden),this.update()}}var g=s(77031);class _ extends g.Widget{constructor(){super(),this.addClass("jp-CellHeader")}}class C extends g.Widget{constructor(){super(),this.addClass("jp-CellFooter")}}var y=s(64662),v=s(67106);class f extends g.Widget{constructor(e){super(),this.addClass("jp-InputArea");const t=this.model=e.model,s=this.contentFactory=e.contentFactory||f.defaultContentFactory,a=this._prompt=s.createInputPrompt();a.addClass("jp-InputArea-prompt");const n={model:t,factory:s.editorFactory,updateOnShow:e.updateOnShow},i=this._editor=new y.CodeEditorWrapper(n);i.addClass("jp-InputArea-editor");const o=this.layout=new g.PanelLayout;o.addWidget(a),o.addWidget(i)}get editorWidget(){return this._editor}get editor(){return this._editor.editor}get promptNode(){return this._prompt.node}renderInput(e){const t=this.layout;this._rendered&&(this._rendered.parent=null),this._editor.hide(),this._rendered=e,t.addWidget(e)}showEditor(){this._rendered&&(this._rendered.parent=null),this._editor.show()}setPrompt(e){this._prompt.executionCount=e}dispose(){this.isDisposed||(this._prompt=null,this._editor=null,this._rendered=null,super.dispose())}}!function(e){class t{constructor(t={}){this._editor=t.editorFactory||e.defaultEditorFactory}get editorFactory(){return this._editor}createInputPrompt(){return new w}}e.ContentFactory=t,e.defaultEditorFactory=(new v.CodeMirrorEditorFactory).newInlineEditor,e.defaultContentFactory=new t({})}(f||(f={}));class w extends g.Widget{constructor(){super(),this._executionCount=null,this.addClass("jp-InputPrompt")}get executionCount(){return this._executionCount}set executionCount(e){this._executionCount=e,this.node.textContent=null===e?" ":`[${e||" "}]:`}}var x=s(66065),S=s(58137),O=s(34604),b=s(85);class j{constructor(e={}){if(this._map=new O.ObservableMap,this._isDisposed=!1,this._stateChanged=new S.Signal(this),this._changed=new S.Signal(this),this._modelDB=null,this._serialized=null,this._changeGuard=!1,this.contentFactory=e.contentFactory||j.defaultContentFactory,e.values)for(const t of Object.keys(e.values))void 0!==e.values[t]&&this.set(t,e.values[t]);this._map.changed.connect(this._onMapChanged,this),e.modelDB&&(this._modelDB=e.modelDB,this._serialized=this._modelDB.createValue("attachments"),this._serialized.get()?this.fromJSON(this._serialized.get()):this._serialized.set(this.toJSON()),this._serialized.changed.connect(this._onSerializedChanged,this))}get stateChanged(){return this._stateChanged}get changed(){return this._changed}get keys(){return this._map.keys()}get length(){return this._map.keys().length}get isDisposed(){return this._isDisposed}dispose(){this.isDisposed||(this._isDisposed=!0,this._map.dispose(),S.Signal.clearData(this))}has(e){return this._map.has(e)}get(e){return this._map.get(e)}set(e,t){const s=this._createItem({value:t});this._map.set(e,s)}remove(e){this._map.delete(e)}clear(){this._map.values().forEach((e=>{e.dispose()})),this._map.clear()}fromJSON(e){this.clear(),Object.keys(e).forEach((t=>{void 0!==e[t]&&this.set(t,e[t])}))}toJSON(){const e={};for(const t of this._map.keys())e[t]=this._map.get(t).toJSON();return e}_createItem(e){const t=this.contentFactory.createAttachmentModel(e);return t.changed.connect(this._onGenericChange,this),t}_onMapChanged(e,t){this._serialized&&!this._changeGuard&&(this._changeGuard=!0,this._serialized.set(this.toJSON()),this._changeGuard=!1),this._changed.emit(t),this._stateChanged.emit(void 0)}_onSerializedChanged(e,t){this._changeGuard||(this._changeGuard=!0,this.fromJSON(t.newValue),this._changeGuard=!1)}_onGenericChange(){this._stateChanged.emit(void 0)}}!function(e){class t{createAttachmentModel(e){return new b.AttachmentModel(e)}}e.ContentFactory=t,e.defaultContentFactory=new t}(j||(j={}));class k{constructor(e){this._parent=e.parent||null,this._model=e.model}async resolveUrl(e){return this._parent&&!e.startsWith("attachment:")?this._parent.resolveUrl(e):e}async getDownloadUrl(e){if(this._parent&&!e.startsWith("attachment:"))return this._parent.getDownloadUrl(e);const t=e.slice("attachment:".length),s=this._model.get(t);if(void 0===s)return e;const{data:a}=s,n=Object.keys(a)[0];if(void 0===n||-1===b.imageRendererFactory.mimeTypes.indexOf(n))throw new Error(`Cannot render unknown image mime type "${n}".`);return`data:${n};base64,${a[n]}`}isLocal(e){var t,s,a;return!(this._parent&&!e.startsWith("attachment:"))||null===(a=null===(s=(t=this._parent).isLocal)||void 0===s?void 0:s.call(t,e))||void 0===a||a}}var D,E=s(49634),M=s(48188);function N(e){return"code"===e.type}function F(e){return"markdown"===e.type}function I(e){return"raw"===e.type}class P extends y.CodeEditor.Model{constructor(e){var t;super({modelDB:e.modelDB,id:e.id||(null===(t=e.cell)||void 0===t?void 0:t.id)||x.UUID.uuid4()}),this.contentChanged=new S.Signal(this),this.stateChanged=new S.Signal(this),this._modelDBMutex=E.M(),this.value.changed.connect(this.onGenericChange,this),this.modelDB.createValue("type").set(this.type);const s=this.modelDB.createMap("metadata");s.changed.connect(this.onModelDBMetadataChange,this),s.changed.connect(this.onGenericChange,this);const a=e.cell,n=this.modelDB.createValue("trusted");if(n.changed.connect(this.onTrustedChanged,this),!a)return void n.set(!1);n.set(!!a.metadata.trusted),delete a.metadata.trusted,Array.isArray(a.source)?this.value.text=a.source.join(""):this.value.text=a.source;const i=x.JSONExt.deepCopy(a.metadata);"raw"!==this.type&&delete i.format,"code"!==this.type&&(delete i.collapsed,delete i.scrolled);for(const e in i)s.set(e,i[e])}get type(){return"raw"}get id(){return this.sharedModel.getId()}get metadata(){return this.modelDB.get("metadata")}get trusted(){return this.modelDB.getValue("trusted")}set trusted(e){this.trusted!==e&&this.modelDB.setValue("trusted",e)}toJSON(){const e=Object.create(null);for(const t of this.metadata.keys()){const s=JSON.parse(JSON.stringify(this.metadata.get(t)));e[t]=s}return this.trusted&&(e.trusted=!0),{cell_type:this.type,source:this.value.text,metadata:e}}onTrustedChanged(e,t){}onModelDBMetadataChange(e,t){const s=this.sharedModel.getMetadata();this._modelDBMutex((()=>{switch(t.type){case"add":case"change":this._changeCellMetata(s,t);break;case"remove":delete s[t.key];break;default:throw new Error(`Invalid event type: ${t.type}`)}this.sharedModel.setMetadata(s)}))}_changeCellMetata(e,t){switch(t.key){case"jupyter":e.jupyter=t.newValue;break;case"collapsed":e.collapsed=t.newValue;break;case"name":e.name=t.newValue;break;case"scrolled":e.scrolled=t.newValue;break;case"tags":e.tags=t.newValue;break;case"trusted":e.trusted=t.newValue;break;default:e[t.key]=t.newValue}}_onSharedModelChanged(e,t){super._onSharedModelChanged(e,t),this._modelDBMutex((()=>{var e;if(t.metadataChange){const s=null===(e=t.metadataChange)||void 0===e?void 0:e.newValue;s&&Object.keys(s).map((e=>{switch(e){case"collapsed":this.metadata.set("collapsed",s.jupyter);break;case"jupyter":this.metadata.set("jupyter",s.jupyter);break;case"name":this.metadata.set("name",s.name);break;case"scrolled":this.metadata.set("scrolled",s.scrolled);break;case"tags":this.metadata.set("tags",s.tags);break;case"trusted":this.metadata.set("trusted",s.trusted);break;default:this.metadata.set(e,s[e])}}))}}))}onGenericChange(){this.contentChanged.emit(void 0)}}class H extends P{constructor(e){super(e);const t=e.contentFactory||H.defaultContentFactory;let s;const a=e.cell;!a||"raw"!==a.cell_type&&"markdown"!==a.cell_type||(s=a.attachments),this._attachments=t.createAttachmentsModel({values:s,modelDB:this.modelDB}),this._attachments.stateChanged.connect(this.onGenericChange,this)}get attachments(){return this._attachments}toJSON(){const e=super.toJSON();return this.attachments.length&&(e.attachments=this.attachments.toJSON()),e}}!function(e){class t{createAttachmentsModel(e){return new j(e)}}e.ContentFactory=t,e.defaultContentFactory=new t}(H||(H={}));class A extends H{get type(){return"raw"}toJSON(){const e=super.toJSON();return e.id=this.id,e}}class W extends H{constructor(e){super(e),this.mimeType="text/x-ipythongfm"}get type(){return"markdown"}toJSON(){const e=super.toJSON();return e.id=this.id,e}}class B extends P{constructor(e){super(e);const t=e.contentFactory||B.defaultContentFactory,s=this.trusted,a=e.cell;let n=[];const i=this.modelDB.createValue("executionCount");if(i.get()||(a&&"code"===a.cell_type?(i.set(a.execution_count||null),n=a.outputs):i.set(null)),i.changed.connect(this._onExecutionCountChanged,this),this._modelDBMutex((()=>{this.sharedModel.setOutputs(null!=n?n:[])})),this._outputs=t.createOutputArea({trusted:s,values:n}),this._outputs.changed.connect(this.onGenericChange,this),this._outputs.changed.connect(this.onModelDBOutputsChange,this),this.metadata.changed.connect(D.collapseChanged,this),this.metadata.has("collapsed")){const e=this.metadata.get("collapsed");D.collapseChanged(this.metadata,{type:"change",key:"collapsed",oldValue:e,newValue:e})}else if(this.metadata.has("jupyter")){const e=this.metadata.get("jupyter");e.hasOwnProperty("outputs_hidden")&&D.collapseChanged(this.metadata,{type:"change",key:"jupyter",oldValue:e,newValue:e})}}switchSharedModel(e,t){t&&(this.clearExecution(),e.getOutputs().forEach((e=>this._outputs.add(e)))),super.switchSharedModel(e,t)}get type(){return"code"}get executionCount(){return this.modelDB.getValue("executionCount")}set executionCount(e){e!==this.executionCount&&this.modelDB.setValue("executionCount",e||null)}clearExecution(){this.outputs.clear(),this.executionCount=null,this.metadata.delete("execution")}get outputs(){return this._outputs}dispose(){this.isDisposed||(this._outputs.dispose(),this._outputs=null,super.dispose())}toJSON(){const e=super.toJSON();return e.execution_count=this.executionCount||null,e.outputs=this.outputs.toJSON(),e.id=this.id,e}onTrustedChanged(e,t){this._outputs&&(this._outputs.trusted=t.newValue),this.stateChanged.emit({name:"trusted",oldValue:t.oldValue,newValue:t.newValue})}onModelDBOutputsChange(e,t){const s=this.sharedModel;this._modelDBMutex((()=>{switch(t.type){case"add":{const e=t.newValues.map((e=>e.toJSON()));s.updateOutputs(t.newIndex,t.newIndex+e.length,e);break}case"set":{const e=t.newValues.map((e=>e.toJSON()));s.updateOutputs(t.oldIndex,t.oldValues.length,e);break}case"remove":s.updateOutputs(t.oldIndex,t.oldValues.length);break;default:throw new Error(`Invalid event type: ${t.type}`)}}))}_onSharedModelChanged(e,t){super._onSharedModelChanged(e,t),this._modelDBMutex((()=>{t.outputsChange&&(this.clearExecution(),e.getOutputs().forEach((e=>this._outputs.add(e)))),t.executionCountChange&&(this.executionCount=t.executionCountChange.newValue?t.executionCountChange.newValue:null)}))}_onExecutionCountChanged(e,t){const s=this.sharedModel;this._modelDBMutex((()=>{s.execution_count=t.newValue?t.newValue:null})),this.contentChanged.emit(void 0),this.stateChanged.emit({name:"executionCount",oldValue:t.oldValue,newValue:t.newValue})}}!function(e){class t{createOutputArea(e){return new M.n(e)}}e.ContentFactory=t,e.defaultContentFactory=new t}(B||(B={})),function(e){e.collapseChanged=function(e,t){if("collapsed"===t.key){const s=e.get("jupyter")||{},{outputs_hidden:a}=s,n=function(e,t){var s={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(s[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(s[a[n]]=e[a[n]])}return s}(s,["outputs_hidden"]);a!==t.newValue&&(void 0!==t.newValue&&(n.outputs_hidden=t.newValue),0===Object.keys(n).length?e.delete("jupyter"):e.set("jupyter",n))}else if("jupyter"===t.key){const s=t.newValue||{};s.hasOwnProperty("outputs_hidden")?e.set("collapsed",s.outputs_hidden):e.delete("collapsed")}}}(D||(D={}));var V=s(10189);const R="jp-Placeholder-content";class J extends h.ReactWidget{constructor(e){super(),this.addClass("jp-Placeholder"),this._callback=e}handleClick(e){(0,this._callback)(e)}}class U extends J{constructor(e){super(e),this.addClass("jp-InputPlaceholder")}render(){return[u.createElement("div",{className:"jp-Placeholder-prompt jp-InputPrompt",key:"input"}),u.createElement("div",{className:R,onClick:e=>this.handleClick(e),key:"content"},u.createElement(V.ellipsesIcon.react,{className:"jp-MoreHorizIcon",elementPosition:"center",height:"auto",width:"32px"}))]}}class L extends J{constructor(e){super(e),this.addClass("jp-OutputPlaceholder")}render(){return[u.createElement("div",{className:"jp-Placeholder-prompt jp-OutputPrompt",key:"output"}),u.createElement("div",{className:R,onClick:e=>this.handleClick(e),key:"content"},u.createElement(V.ellipsesIcon.react,{className:"jp-MoreHorizIcon",elementPosition:"center",height:"auto",width:"32px"}))]}}var T=s(13917),$=s.n(T),z=s(87939),G=s(67753);const q="jp-MarkdownHeadingCollapsed",Y="jp-collapseHeadingButton",X="jp-mod-rendered",K="jp-mod-noOutputs",Q="application/x-jupyter-icontentsrich";class Z extends g.Widget{constructor(e){super(),this._readOnly=!1,this._inputHidden=!1,this._syncCollapse=!1,this._syncEditable=!1,this.addClass("jp-Cell");const t=this._model=e.model,s=this.contentFactory=e.contentFactory||Z.defaultContentFactory;this.layout=new g.PanelLayout;const a=s.createCellHeader();a.addClass("jp-Cell-header"),this.layout.addWidget(a);const n=this._inputWrapper=new g.Panel;n.addClass("jp-Cell-inputWrapper");const i=new p;i.addClass("jp-Cell-inputCollapser");const o=this._input=new f({model:t,contentFactory:s,updateOnShow:e.updateEditorOnShow});o.addClass("jp-Cell-inputArea"),n.addWidget(i),n.addWidget(o),this.layout.addWidget(n),this._inputPlaceholder=new U((()=>{this.inputHidden=!this.inputHidden}));const r=this.contentFactory.createCellFooter();if(r.addClass("jp-Cell-footer"),this.layout.addWidget(r),e.editorConfig){let t={};Object.keys(e.editorConfig).forEach((s=>{var a,n;t[s]=null!==(n=null===(a=e.editorConfig)||void 0===a?void 0:a[s])&&void 0!==n?n:null})),this.editor.setOptions(t)}t.metadata.changed.connect(this.onMetadataChanged,this)}initializeState(){return this.loadCollapseState(),this.loadEditableState(),this}get promptNode(){return this._inputHidden?this._inputPlaceholder.node.firstElementChild:this._input.promptNode}get editorWidget(){return this._input.editorWidget}get editor(){return this._input.editor}get model(){return this._model}get inputArea(){return this._input}get readOnly(){return this._readOnly}set readOnly(e){e!==this._readOnly&&(this._readOnly=e,this.syncEditable&&this.saveEditableState(),this.update())}saveEditableState(){const{metadata:e}=this.model,t=e.get("editable");this.readOnly&&!1===t||!this.readOnly&&void 0===t||(this.readOnly?this.model.metadata.set("editable",!1):this.model.metadata.delete("editable"))}loadEditableState(){this.readOnly=!1===this.model.metadata.get("editable")}get ready(){return Promise.resolve(void 0)}setPrompt(e){this._input.setPrompt(e)}get inputHidden(){return this._inputHidden}set inputHidden(e){if(this._inputHidden===e)return;const t=this._inputWrapper.layout;e?(this._input.parent=null,t.addWidget(this._inputPlaceholder)):(this._inputPlaceholder.parent=null,t.addWidget(this._input)),this._inputHidden=e,this.syncCollapse&&this.saveCollapseState(),this.handleInputHidden(e)}saveCollapseState(){const e=Object.assign({},this.model.metadata.get("jupyter"));this.inputHidden&&!0===e.source_hidden||!this.inputHidden&&void 0===e.source_hidden||(this.inputHidden?e.source_hidden=!0:delete e.source_hidden,0===Object.keys(e).length?this.model.metadata.delete("jupyter"):this.model.metadata.set("jupyter",e))}loadCollapseState(){const e=this.model.metadata.get("jupyter")||{};this.inputHidden=!!e.source_hidden}handleInputHidden(e){}get syncCollapse(){return this._syncCollapse}set syncCollapse(e){this._syncCollapse!==e&&(this._syncCollapse=e,e&&this.loadCollapseState())}get syncEditable(){return this._syncEditable}set syncEditable(e){this._syncEditable!==e&&(this._syncEditable=e,e&&this.loadEditableState())}clone(){return new(0,this.constructor)({model:this.model,contentFactory:this.contentFactory})}dispose(){this.isDisposed||(this._input=null,this._model=null,this._inputWrapper=null,this._inputPlaceholder=null,super.dispose())}onAfterAttach(e){this.update()}onActivateRequest(e){this.editor.focus()}onFitRequest(e){this.editor.refresh()}onUpdateRequest(e){this._model&&this.editor.getOption("readOnly")!==this._readOnly&&(this.editor.setOption("readOnly",this._readOnly),this.toggleClass("jp-mod-readOnly",this._readOnly))}onMetadataChanged(e,t){switch(t.key){case"jupyter":this.syncCollapse&&this.loadCollapseState();break;case"editable":this.syncEditable&&this.loadEditableState()}}}!function(e){class t{constructor(e={}){this._editorFactory=e.editorFactory||f.defaultEditorFactory}get editorFactory(){return this._editorFactory}createCellHeader(){return new _}createCellFooter(){return new C}createInputPrompt(){return new w}createOutputPrompt(){return new G.ni}createStdin(e){return new G.yu(e)}}e.ContentFactory=t,e.defaultContentFactory=new t}(Z||(Z={}));class ee extends Z{constructor(e){super(e),this._outputHidden=!1,this._syncScrolled=!1,this._savingMetadata=!1,this.addClass("jp-CodeCell");const t=this._rendermime=e.rendermime,s=this.contentFactory,a=this.model,n=this._outputWrapper=new g.Panel;n.addClass("jp-Cell-outputWrapper");const i=new m;i.addClass("jp-Cell-outputCollapser");const o=this._output=new G.FJ({model:a.outputs,rendermime:t,contentFactory:s,maxNumberOutputs:e.maxNumberOutputs});o.addClass("jp-Cell-outputArea"),0===a.outputs.length&&this.addClass(K),o.outputLengthChanged.connect(this._outputLengthHandler,this),n.addWidget(i),n.addWidget(o),this.layout.insertWidget(2,n),this._outputPlaceholder=new L((()=>{this.outputHidden=!this.outputHidden})),a.stateChanged.connect(this.onStateChanged,this)}initializeState(){return super.initializeState(),this.loadScrolledState(),this.setPrompt(`${this.model.executionCount||""}`),this}get outputArea(){return this._output}get outputHidden(){return this._outputHidden}set outputHidden(e){if(this._outputHidden===e)return;const t=this._outputWrapper.layout;e?(t.removeWidget(this._output),t.addWidget(this._outputPlaceholder),this.inputHidden&&!this._outputWrapper.isHidden&&this._outputWrapper.hide()):(this._outputWrapper.isHidden&&this._outputWrapper.show(),t.removeWidget(this._outputPlaceholder),t.addWidget(this._output)),this._outputHidden=e,this.syncCollapse&&this.saveCollapseState()}saveCollapseState(){this._savingMetadata=!0;try{super.saveCollapseState();const e=this.model.metadata,t=this.model.metadata.get("collapsed");if(this.outputHidden&&!0===t||!this.outputHidden&&void 0===t)return;this.outputHidden?e.set("collapsed",!0):e.delete("collapsed")}finally{this._savingMetadata=!1}}loadCollapseState(){super.loadCollapseState(),this.outputHidden=!!this.model.metadata.get("collapsed")}get outputsScrolled(){return this._outputsScrolled}set outputsScrolled(e){this.toggleClass("jp-mod-outputsScrolled",e),this._outputsScrolled=e,this.syncScrolled&&this.saveScrolledState()}saveScrolledState(){const{metadata:e}=this.model,t=e.get("scrolled");this.outputsScrolled&&!0===t||!this.outputsScrolled&&void 0===t||(this.outputsScrolled?e.set("scrolled",!0):e.delete("scrolled"))}loadScrolledState(){const e=this.model.metadata;"auto"===e.get("scrolled")?this.outputsScrolled=!1:this.outputsScrolled=!!e.get("scrolled")}get syncScrolled(){return this._syncScrolled}set syncScrolled(e){this._syncScrolled!==e&&(this._syncScrolled=e,e&&this.loadScrolledState())}handleInputHidden(e){!e&&this._outputWrapper.isHidden?this._outputWrapper.show():e&&!this._outputWrapper.isHidden&&this._outputHidden&&this._outputWrapper.hide()}clone(){return new(0,this.constructor)({model:this.model,contentFactory:this.contentFactory,rendermime:this._rendermime})}cloneOutputArea(){return new G.AS({model:this.model.outputs,contentFactory:this.contentFactory,rendermime:this._rendermime})}dispose(){this.isDisposed||(this._output.outputLengthChanged.disconnect(this._outputLengthHandler,this),this._rendermime=null,this._output=null,this._outputWrapper=null,this._outputPlaceholder=null,super.dispose())}onStateChanged(e,t){switch(t.name){case"executionCount":this.setPrompt(`${e.executionCount||""}`)}}onMetadataChanged(e,t){if(!this._savingMetadata){switch(t.key){case"scrolled":this.syncScrolled&&this.loadScrolledState();break;case"collapsed":this.syncCollapse&&this.loadCollapseState()}super.onMetadataChanged(e,t)}}_outputLengthHandler(e,t){const s=0===t;this.toggleClass(K,s)}}!function(e){e.execute=async function(e,t,s){var a;const n=e.model,i=n.value.text;if(!i.trim()||!(null===(a=t.session)||void 0===a?void 0:a.kernel))return void n.clearExecution();const o={cellId:n.id};s=Object.assign(Object.assign(Object.assign({},n.metadata.toJSON()),s),o);const{recordTiming:r}=s;let d;n.clearExecution(),e.outputHidden=!1,e.setPrompt("*"),n.trusted=!0;try{const a=G.FJ.execute(i,e.outputArea,t,s);if(r){const t=e=>{let t;switch(e.header.msg_type){case"status":t=`status.${e.content.execution_state}`;break;case"execute_input":t="execute_input";break;default:return!0}const s=e.header.date||(new Date).toISOString(),a=Object.assign({},n.metadata.get("execution"));return a[`iopub.${t}`]=s,n.metadata.set("execution",a),!0};e.outputArea.future.registerMessageHook(t)}else n.metadata.delete("execution");d=e.outputArea.future;const o=await a;if(n.executionCount=o.content.execution_count,r){const e=Object.assign({},n.metadata.get("execution")),t=o.metadata.started;t&&(e["shell.execute_reply.started"]=t);const s=o.header.date;e["shell.execute_reply"]=s||(new Date).toISOString(),n.metadata.set("execution",e)}return o}catch(t){throw d&&!e.isDisposed&&e.outputArea.future===d&&e.setPrompt(""),t}}}(ee||(ee={}));class te extends Z{handleEvent(e){switch(e.type){case"paste":this._evtPaste(e);break;case"dragenter":case"dragover":e.preventDefault();break;case"drop":this._evtNativeDrop(e);break;case"lm-dragover":this._evtDragOver(e);break;case"lm-drop":this._evtDrop(e)}}onAfterAttach(e){super.onAfterAttach(e);const t=this.node;t.addEventListener("lm-dragover",this),t.addEventListener("lm-drop",this),t.addEventListener("dragenter",this),t.addEventListener("dragover",this),t.addEventListener("drop",this),t.addEventListener("paste",this)}onBeforeDetach(e){const t=this.node;t.removeEventListener("drop",this),t.removeEventListener("dragover",this),t.removeEventListener("dragenter",this),t.removeEventListener("paste",this),t.removeEventListener("lm-dragover",this),t.removeEventListener("lm-drop",this)}_evtDragOver(e){(0,a.some)(b.imageRendererFactory.mimeTypes,(t=>!!e.mimeData.hasData(Q)&&e.mimeData.getData(Q).model.mimetype===t))&&(e.preventDefault(),e.stopPropagation(),e.dropAction=e.proposedAction)}_evtPaste(e){if(e.clipboardData){const t=e.clipboardData.items;for(let s=0;s<t.length;s++){if("text/plain"===t[s].type){if(s<t.length-1&&"file"===t[s+1].kind)continue;t[s].getAsString((e=>{var t,s;null===(s=(t=this.editor).replaceSelection)||void 0===s||s.call(t,e)}))}this._attachFiles(e.clipboardData.items)}}e.preventDefault()}_evtNativeDrop(e){e.dataTransfer&&this._attachFiles(e.dataTransfer.items),e.preventDefault()}_evtDrop(e){const t=(0,a.toArray)((0,a.filter)(e.mimeData.types(),(t=>{if(t===Q){const t=e.mimeData.getData(Q);return-1!==b.imageRendererFactory.mimeTypes.indexOf(t.model.mimetype)}return-1!==b.imageRendererFactory.mimeTypes.indexOf(t)})));if(0!==t.length)if(e.preventDefault(),e.stopPropagation(),"none"!==e.proposedAction){e.dropAction="copy";for(const s of t)if(s===Q){const{model:t,withContent:s}=e.mimeData.getData(Q);if("file"===t.type){const e=this._generateURI(t.name);this.updateCellSourceWithAttachment(t.name,e),s().then((t=>{this.model.attachments.set(e,{[t.mimetype]:t.content})}))}}else{const t=this._generateURI();this.model.attachments.set(t,{[s]:e.mimeData.getData(s)}),this.updateCellSourceWithAttachment(t,t)}}else e.dropAction="none"}_attachFiles(e){for(let t=0;t<e.length;t++){const s=e[t];if("file"===s.kind){const e=s.getAsFile();e&&this._attachFile(e)}}}_attachFile(e){const t=new FileReader;t.onload=s=>{const{href:a,protocol:n}=z.URLExt.parse(t.result);if("data:"!==n)return;const i=/([\w+\/\+]+)?(?:;(charset=[\w\d-]*|base64))?,(.*)/.exec(a);if(!i||4!==i.length)return;const o=i[1],r={[o]:i[3]},d=this._generateURI(e.name);o.startsWith("image/")&&(this.model.attachments.set(d,r),this.updateCellSourceWithAttachment(e.name,d))},t.onerror=t=>{console.error(`Failed to attach ${e.name}`+t)},t.readAsDataURL(e)}_generateURI(e=""){const t=e.lastIndexOf(".");return-1!==t?x.UUID.uuid4().concat(e.substring(t)):x.UUID.uuid4()}}class se extends te{constructor(e){var t,s;super(e),this._toggleCollapsedSignal=new S.Signal(this),this._renderer=null,this._rendered=!0,this._prevText="",this._ready=new x.PromiseDelegate,this.addClass("jp-MarkdownCell"),this._rendermime=e.rendermime.clone({resolver:new k({parent:null!==(t=e.rendermime.resolver)&&void 0!==t?t:void 0,model:this.model.attachments})}),this.editor.setOption("handlePaste",!1),this._headingCollapsed=null!==(s=this.model.metadata.get(q))&&void 0!==s&&s,this._monitor=new z.ActivityMonitor({signal:this.model.contentChanged,timeout:1e3}),this._monitor.activityStopped.connect((()=>{this._rendered&&this.update()}),this),this._updateRenderedInput().then((()=>{this._ready.resolve(void 0)})),this.renderCollapseButtons(this._renderer),this.renderInput(this._renderer)}get ready(){return this._ready.promise}get headingInfo(){let e=this.model.value.text;const t=$().lexer(e);let s;for(s of t){if("heading"===s.type)return{text:s.text,level:s.depth};if("html"===s.type){let e=s.raw.match(/<h([1-6])(.*?)>(.*?)<\/h\1>/);return(null==e?void 0:e[3])?{text:e[3],level:parseInt(e[1])}:{text:"",level:-1}}}return{text:"",level:-1}}get headingCollapsed(){return this._headingCollapsed}set headingCollapsed(e){this._headingCollapsed=e,e?this.model.metadata.set(q,e):this.model.metadata.has(q)&&this.model.metadata.delete(q);const t=this.inputArea.promptNode.getElementsByClassName(Y)[0];t&&t.setAttribute("style",`background:\n      ${e?"var(--jp-icon-caret-right)":"var(--jp-icon-caret-down)"} no-repeat center`),this.renderCollapseButtons(this._renderer)}get numberChildNodes(){return this._numberChildNodes}set numberChildNodes(e){this._numberChildNodes=e,this.renderCollapseButtons(this._renderer)}get toggleCollapsedSignal(){return this._toggleCollapsedSignal}get rendered(){return this._rendered}set rendered(e){e!==this._rendered&&(this._rendered=e,this._handleRendered(),this._rendered||this.editor.refresh())}maybeCreateCollapseButton(){if(this.headingInfo.level>0&&0==this.inputArea.promptNode.getElementsByClassName(Y).length){let e=this.inputArea.promptNode.appendChild(document.createElement("button"));e.className="bp3-button bp3-minimal jp-Button minimal jp-collapseHeadingButton",e.style.background=(this._headingCollapsed?"var(--jp-icon-caret-right)":"var(--jp-icon-caret-down)")+" no-repeat center",e.onclick=e=>{this.headingCollapsed=!this.headingCollapsed,this._toggleCollapsedSignal.emit(this._headingCollapsed)}}}maybeCreateOrUpdateExpandButton(){var e,t;const s=this.node.getElementsByClassName("jp-showHiddenCellsButton");if(this.headingCollapsed&&0===s.length&&this._numberChildNodes>0){const e=document.createElement("button");e.className="bp3-button bp3-minimal jp-Button jp-showHiddenCellsButton",V.addIcon.render(e);const t=document.createElement("div");t.nodeValue=`${this._numberChildNodes} cell${this._numberChildNodes>1?"s":""} hidden`,e.appendChild(t),e.onclick=()=>{this.headingCollapsed=!1,this._toggleCollapsedSignal.emit(this._headingCollapsed)},this.node.appendChild(e)}else if((null===(t=null===(e=null==s?void 0:s[0])||void 0===e?void 0:e.childNodes)||void 0===t?void 0:t.length)>1)if(this._headingCollapsed)s[0].childNodes[1].textContent=`${this._numberChildNodes} cell${this._numberChildNodes>1?"s":""} hidden`;else for(const e of s)this.node.removeChild(e)}renderCollapseButtons(e){this.node.classList.toggle(q,this._headingCollapsed),this.maybeCreateCollapseButton(),this.maybeCreateOrUpdateExpandButton()}renderInput(e){this.addClass(X),this.renderCollapseButtons(e),this.inputArea.renderInput(e)}showEditor(){this.removeClass(X),this.inputArea.showEditor()}onUpdateRequest(e){this._handleRendered(),super.onUpdateRequest(e)}updateCellSourceWithAttachment(e,t){var s,a;const n=`![${e}](attachment:${null!=t?t:e})`;null===(a=(s=this.editor).replaceSelection)||void 0===a||a.call(s,n)}_handleRendered(){this._rendered?(this._updateRenderedInput(),this.renderInput(this._renderer)):this.showEditor()}_updateRenderedInput(){const e=this.model,t=e&&e.value.text||"Type Markdown and LaTeX: $ α^2 $";if(t!==this._prevText){const e=new b.MimeModel({data:{"text/markdown":t}});return this._renderer||(this._renderer=this._rendermime.createRenderer("text/markdown"),this._renderer.addClass("jp-MarkdownOutput")),this._prevText=t,this._renderer.renderModel(e)}return Promise.resolve(void 0)}clone(){return new(0,this.constructor)({model:this.model,contentFactory:this.contentFactory,rendermime:this._rendermime})}}class ae extends Z{constructor(e){super(e),this.addClass("jp-RawCell")}clone(){return new(0,this.constructor)({model:this.model,contentFactory:this.contentFactory})}}},49634:(e,t,s)=>{"use strict";s.d(t,{M:()=>a});const a=()=>{let e=!0;return t=>{if(e){e=!1;try{t()}finally{e=!0}}}}}}]);
//# sourceMappingURL=2609.bundle.js.map