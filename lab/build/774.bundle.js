(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[774],{90774:(e,t,o)=>{"use strict";o.r(t),o.d(t,{FileEditor:()=>C,FileEditorCodeWrapper:()=>g,FileEditorFactory:()=>y,IEditorTracker:()=>i,TabSpaceStatus:()=>h});var s=o(66065);const i=new s.Token("@jupyterlab/fileeditor:IEditorTracker");var n=o(96927),r=o.n(n),a=o(19573),c=o(34016),d=o(17179);function l(e){const t=(e.translator||d.nullTranslator).load("jupyterlab"),o=e.isSpaces?t.__("Spaces"):t.__("Tab Size");return r().createElement(c.TextItem,{onClick:e.handleClick,source:`${o}: ${e.tabSpace}`,title:t.__("Change Tab indentation…")})}class h extends a.VDomRenderer{constructor(e){super(new h.Model),this._popup=null,this._menu=e.menu,this.translator=e.translator||d.nullTranslator,this.addClass(c.interactiveItem)}render(){return this.model&&this.model.config?r().createElement(l,{isSpaces:this.model.config.insertSpaces,tabSpace:this.model.config.tabSize,handleClick:()=>this._handleClick(),translator:this.translator}):null}_handleClick(){const e=this._menu;this._popup&&this._popup.dispose(),e.aboutToClose.connect(this._menuClosed,this),this._popup=(0,c.showPopup)({body:e,anchor:this,align:"right"})}_menuClosed(){this.removeClass(c.clickedItem)}}!function(e){class t extends a.VDomModel{constructor(){super(...arguments),this._config=null}get config(){return this._config}set config(e){const t=this._config;this._config=e,this._triggerChange(t,this._config)}_triggerChange(e,t){const o=e&&e.insertSpaces,s=e&&e.tabSize,i=t&&t.insertSpaces,n=t&&t.tabSize;o===i&&s===n||this.stateChanged.emit(void 0)}}e.Model=t}(h||(h={}));var u=o(64662),m=o(23986),p=o(10189),_=o(77031);class g extends u.CodeEditorWrapper{constructor(e){super({factory:e.factory,model:e.context.model}),this._ready=new s.PromiseDelegate;const t=this._context=e.context,o=this.editor;if(this.addClass("jp-FileEditorCodeWrapper"),this.node.dataset.jpCodeRunner="true",this.node.dataset.jpUndoer="true",o.model.value.text=t.model.toString(),t.ready.then((()=>{this._onContextReady()})),t.model.modelDB.isCollaborative){const e=t.model.modelDB;e.connected.then((()=>{const t=e.collaborators;if(!t)return;const o=t.localCollaborator;this.editor.uuid=o.sessionId,this.editor.selectionStyle=Object.assign(Object.assign({},u.CodeEditor.defaultSelectionStyle),{color:o.color}),t.changed.connect(this._onCollaboratorsChanged,this),this._onCollaboratorsChanged()}))}}get context(){return this._context}get ready(){return this._ready.promise}_onContextReady(){if(this.isDisposed)return;const e=this._context.model,t=this.editor;t.model.value.text=e.toString(),t.clearHistory(),e.contentChanged.connect(this._onContentChanged,this),this._ready.resolve(void 0)}_onContentChanged(){const e=this.editor.model,t=e.value.text,o=this._context.model.toString();t!==o&&(e.value.text=o)}_onCollaboratorsChanged(){const e=this._context.model.modelDB.collaborators;if(e)for(const t of this.editor.model.selections.keys())e.has(t)||this.editor.model.selections.delete(t)}}class C extends _.Widget{constructor(e){super(),this.addClass("jp-FileEditor");const t=this._context=e.context;this._mimeTypeService=e.mimeTypeService;const o=this.editorWidget=new g(e);this.editor=o.editor,this.model=o.model,t.pathChanged.connect(this._onPathChanged,this),this._onPathChanged(),(this.layout=new _.StackedLayout).addWidget(o)}get context(){return this.editorWidget.context}get ready(){return this.editorWidget.ready}handleEvent(e){if(this.model)switch(e.type){case"mousedown":this._ensureFocus()}}onAfterAttach(e){super.onAfterAttach(e),this.node.addEventListener("mousedown",this)}onBeforeDetach(e){this.node.removeEventListener("mousedown",this)}onActivateRequest(e){this._ensureFocus()}_ensureFocus(){this.editor.hasFocus()||this.editor.focus()}_onPathChanged(){const e=this.editor,t=this._context.localPath;e.model.mimeType=this._mimeTypeService.getMimeTypeByFilePath(t)}}class y extends m.ABCWidgetFactory{constructor(e){super(e.factoryOptions),this._services=e.editorServices}createNewWidget(e){const t=this._services.factoryService.newDocumentEditor,o=new C({factory:e=>t(e),context:e,mimeTypeService:this._services.mimeTypeService});o.title.icon=p.textEditorIcon;const s=new m.DocumentWidget({content:o,context:e});return s.context.saveState.connect(((e,t)=>{const o=e.contentsModel;"completed-manual"===t&&o&&1==!o.renamed&&o.name.startsWith("untitled")&&s.shouldNameFile.emit(void 0)})),s}}}}]);
//# sourceMappingURL=774.bundle.js.map