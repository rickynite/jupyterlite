(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[5415],{45415:(e,t,i)=>{"use strict";i.r(t),i.d(t,{ConnectionLost:()=>r,IConnectionLost:()=>z,ILabShell:()=>O,ILabStatus:()=>E,ILayoutRestorer:()=>y,IMimeDocumentTracker:()=>b,IRouter:()=>V,ITreePathUpdater:()=>U,JupyterFrontEnd:()=>g,JupyterFrontEndContextMenu:()=>o,JupyterLab:()=>F,LabShell:()=>j,LayoutRestorer:()=>w,Router:()=>N,createRendermimePlugin:()=>C,createRendermimePlugins:()=>P});var n=i(19573),s=i(17179);const r=async function(e,t,i){const r=(i=i||s.nullTranslator).load("jupyterlab"),a=r.__("Server Connection Error"),o=r.__("A connection to the Jupyter server could not be established.\nJupyterLab will continue trying to reconnect.\nCheck your network connection or Jupyter server configuration.\n");return(0,n.showErrorMessage)(a,{message:o})};var a,o,d=i(61421),l=i(86703),c=i(10189),h=i(19804),u=i(66065),p=i(58137);class g extends h.Application{constructor(e){super(e),this._formatChanged=new p.Signal(this),this.contextMenu=new c.ContextMenuSvg({commands:this.commands,renderer:e.contextMenuRenderer});const t=new Promise((e=>{requestAnimationFrame((()=>{e()}))}));this.commandLinker=e.commandLinker||new n.CommandLinker({commands:this.commands}),this.docRegistry=e.docRegistry||new d.DocumentRegistry,this.restored=e.restored||this.started.then((()=>t)).catch((()=>t)),this.serviceManager=e.serviceManager||new l.ServiceManager}get format(){return this._format}set format(e){this._format!==e&&(this._format=e,document.body.dataset.format=e,this._formatChanged.emit(e))}get formatChanged(){return this._formatChanged}contextMenuHitTest(e){if(!(this._contextMenuEvent&&this._contextMenuEvent.target instanceof Node))return;let t=this._contextMenuEvent.target;do{if(t instanceof HTMLElement&&e(t))return t;t=t.parentNode}while(t&&t.parentNode&&t!==t.parentNode)}evtContextMenu(e){if(this._contextMenuEvent=e,!e.shiftKey&&!a.suppressContextMenu(e.target)&&this.contextMenu.open(e)){const t=this.contextMenu.menu.items;if(1===t.length&&t[0].command===o.contextMenu)return void this.contextMenu.menu.close();e.preventDefault(),e.stopPropagation()}}}!function(e){e.inDocMode=function(e,t){const i=new RegExp(`^${t.urls.doc}`);return!!e.match(i)},e.IPaths=new u.Token("@jupyterlab/application:IPaths"),e.ITreeResolver=new u.Token("@jupyterlab/application:ITreeResolver")}(g||(g={})),function(e){e.suppressContextMenu=function(e){return null!==e.closest("[data-jp-suppress-context-menu]")}}(a||(a={})),function(e){e.contextMenu="__internal:context-menu-info"}(o||(o={}));var _=i(87939),m=i(85),f=i(20337);const y=new u.Token("@jupyterlab/application:ILayoutRestorer"),v="layout-restorer:data";class w{constructor(e){this._firstDone=!1,this._promisesDone=!1,this._promises=[],this._restored=new u.PromiseDelegate,this._trackers=new Set,this._widgets=new Map,this._connector=e.connector,this._first=e.first,this._registry=e.registry,this._first.then((()=>{this._firstDone=!0})).then((()=>Promise.all(this._promises))).then((()=>{this._promisesDone=!0,this._trackers.clear()})).then((()=>{this._restored.resolve(void 0)}))}get restored(){return this._restored.promise}add(e,t){k.nameProperty.set(e,t),this._widgets.set(t,e),e.disposed.connect(this._onWidgetDisposed,this)}async fetch(){const e={fresh:!0,mainArea:null,leftArea:null,rightArea:null,relativeSizes:null},t=this._connector.fetch(v);try{const[i]=await Promise.all([t,this.restored]);if(!i)return e;const{main:n,left:s,right:r,relativeSizes:a}=i,o=!1,d=this._rehydrateMainArea(n);return{fresh:o,mainArea:d,leftArea:this._rehydrateSideArea(s),rightArea:this._rehydrateSideArea(r),relativeSizes:a||null}}catch(t){return e}}restore(e,t){const i="restore() can only be called before `first` has resolved.";if(this._firstDone)return console.warn(i),Promise.reject(i);const{namespace:n}=e;if(this._trackers.has(n)){const e=`A tracker namespaced ${n} was already restored.`;return console.warn(e),Promise.reject(e)}const{args:s,command:r,name:a,when:o}=t;this._trackers.add(n),e.widgetAdded.connect(((e,t)=>{const i=a(t);i&&this.add(t,`${n}:${i}`)}),this),e.widgetUpdated.connect(((e,t)=>{const i=a(t);if(i){const e=`${n}:${i}`;k.nameProperty.set(t,e),this._widgets.set(e,t)}}));const d=this._first,l=e.restore({args:s||(()=>u.JSONExt.emptyObject),command:r,connector:this._connector,name:a,registry:this._registry,when:o?[d].concat(o):d}).catch((e=>{console.error(e)}));return this._promises.push(l),l}save(e){if(!this._promisesDone){const e="save() was called prematurely.";return console.warn(e),Promise.reject(e)}const t={};return t.main=this._dehydrateMainArea(e.mainArea),t.left=this._dehydrateSideArea(e.leftArea),t.right=this._dehydrateSideArea(e.rightArea),t.relativeSizes=e.relativeSizes,this._connector.save(v,t)}_dehydrateMainArea(e){return e?k.serializeMain(e):null}_rehydrateMainArea(e){return e?k.deserializeMain(e,this._widgets):null}_dehydrateSideArea(e){if(!e)return null;const t={collapsed:e.collapsed};if(e.currentWidget){const i=k.nameProperty.get(e.currentWidget);i&&(t.current=i)}return e.widgets&&(t.widgets=e.widgets.map((e=>k.nameProperty.get(e))).filter((e=>!!e))),t}_rehydrateSideArea(e){var t;if(!e)return{collapsed:!0,currentWidget:null,widgets:null};const i=this._widgets;return{collapsed:null!==(t=e.collapsed)&&void 0!==t&&t,currentWidget:e.current&&i.has(`${e.current}`)?i.get(`${e.current}`):null,widgets:Array.isArray(e.widgets)?e.widgets.map((e=>i.has(`${e}`)?i.get(`${e}`):null)).filter((e=>!!e)):null}}_onWidgetDisposed(e){const t=k.nameProperty.get(e);this._widgets.delete(t)}}var k;!function(e){function t(i){return i&&i.type?"tab-area"===i.type?{type:"tab-area",currentIndex:i.currentIndex,widgets:i.widgets.map((t=>e.nameProperty.get(t))).filter((e=>!!e))}:{type:"split-area",orientation:i.orientation,sizes:i.sizes,children:i.children.map(t).filter((e=>!!e))}:null}function i(e,t){if(!e)return null;const n=e.type||"unknown";if("unknown"===n||"tab-area"!==n&&"split-area"!==n)return console.warn(`Attempted to deserialize unknown type: ${n}`),null;if("tab-area"===n){const{currentIndex:i,widgets:n}=e,s={type:"tab-area",currentIndex:i||0,widgets:n&&n.map((e=>t.get(e))).filter((e=>!!e))||[]};return s.currentIndex>s.widgets.length-1&&(s.currentIndex=0),s}const{orientation:s,sizes:r,children:a}=e;return{type:"split-area",orientation:s,sizes:r||[],children:a&&a.map((e=>i(e,t))).filter((e=>!!e))||[]}}e.nameProperty=new f.AttachedProperty({name:"name",create:e=>""}),e.serializeMain=function(i){const n={dock:i&&i.dock&&t(i.dock.main)||null};if(i&&i.currentWidget){const t=e.nameProperty.get(i.currentWidget);t&&(n.current=t)}return n},e.deserializeMain=function(e,t){if(!e)return null;const n=e.current||null,s=e.dock||null;return{currentWidget:n&&t.has(n)&&t.get(n)||null,dock:s?{main:i(s,t)}:null}}}(k||(k={}));const b=new u.Token("@jupyterlab/application:IMimeDocumentTracker");function P(e){const t=[],i=new n.WidgetTracker({namespace:"application-mimedocuments"});return e.forEach((e=>{let n=e.default;e.hasOwnProperty("__esModule")||(n=e),Array.isArray(n)||(n=[n]),n.forEach((e=>{t.push(C(i,e))}))})),t.push({id:"@jupyterlab/application:mimedocument",optional:[y],provides:b,autoStart:!0,activate:(e,t)=>(t&&t.restore(i,{command:"docmanager:open",args:e=>({path:e.context.path,factory:W.factoryNameProperty.get(e)}),name:e=>`${e.context.path}:${W.factoryNameProperty.get(e)}`}),i)}),t}function C(e,t){return{id:t.id,requires:[m.IRenderMimeRegistry,s.ITranslator],autoStart:!0,activate:(i,n,s)=>{if(void 0!==t.rank?n.addFactory(t.rendererFactory,t.rank):n.addFactory(t.rendererFactory),!t.documentWidgetFactoryOptions)return;const r=i.docRegistry;let a=[];a=Array.isArray(t.documentWidgetFactoryOptions)?t.documentWidgetFactoryOptions:[t.documentWidgetFactoryOptions],t.fileTypes&&t.fileTypes.forEach((e=>{e.icon&&(e=Object.assign(Object.assign({},e),{icon:c.LabIcon.resolve({icon:e.icon})})),i.docRegistry.addFileType(e)})),a.forEach((i=>{const a=i.toolbarFactory?e=>i.toolbarFactory(e.content.renderer):void 0,o=new d.MimeDocumentFactory({renderTimeout:t.renderTimeout,dataType:t.dataType,rendermime:n,modelName:i.modelName,name:i.name,primaryFileType:r.getFileType(i.primaryFileType),fileTypes:i.fileTypes,defaultFor:i.defaultFor,defaultRendered:i.defaultRendered,toolbarFactory:a,translator:s,factory:t.rendererFactory});r.addWidgetFactory(o),o.widgetCreated.connect(((t,i)=>{W.factoryNameProperty.set(i,o.name),i.context.pathChanged.connect((()=>{e.save(i)})),e.add(i)}))}))}}}var W;!function(e){e.factoryNameProperty=new f.AttachedProperty({name:"factoryName",create:()=>{}})}(W||(W={}));var T=i(79028),A=i(91884),x=i(33498),B=i(77031),L=i(70381);const M="jp-SideBar",S=900,H="jp-Activity",O=new u.Token("@jupyterlab/application:ILabShell");class j extends B.Widget{constructor(e){super(),this._dockChildHook=(e,t)=>{switch(t.type){case"child-added":t.child.addClass(H),this._tracker.add(t.child);break;case"child-removed":t.child.removeClass(H),this._tracker.remove(t.child)}return!0},this._activeChanged=new p.Signal(this),this._cachedLayout=null,this._currentChanged=new p.Signal(this),this._currentPath="",this._currentPathChanged=new p.Signal(this),this._modeChanged=new p.Signal(this),this._isRestored=!1,this._layoutModified=new p.Signal(this),this._layoutDebouncer=new x.Debouncer((()=>{this._layoutModified.emit(void 0)}),0),this._restored=new u.PromiseDelegate,this._tracker=new B.FocusTracker,this._mainOptionsCache=new Map,this._sideOptionsCache=new Map,this.addClass("jp-LabShell"),this.id="main";const t=(e&&e.translator||s.nullTranslator).load("jupyterlab"),i=this._headerPanel=new B.BoxPanel,n=this._menuHandler=new D.PanelHandler;n.panel.node.setAttribute("role","navigation"),n.panel.node.setAttribute("aria-label",t.__("main"));const r=this._topHandler=new D.PanelHandler;r.panel.node.setAttribute("role","banner");const a=this._bottomPanel=new B.BoxPanel;a.node.setAttribute("role","contentinfo");const o=new B.BoxPanel,l=this._dockPanel=new c.DockPanelSvg;A.MessageLoop.installMessageHook(l,this._dockChildHook);const h=this._hsplitPanel=new D.RestorableSplitPanel,g=this._leftHandler=new D.SideBarHandler,_=this._rightHandler=new D.SideBarHandler,m=new B.BoxLayout;i.id="jp-header-panel",n.panel.id="jp-menu-panel",r.panel.id="jp-top-panel",a.id="jp-bottom-panel",o.id="jp-main-content-panel",l.id="jp-main-dock-panel",h.id="jp-main-split-panel",g.sideBar.addClass(M),g.sideBar.addClass("jp-mod-left"),g.sideBar.node.setAttribute("aria-label",t.__("main sidebar")),g.sideBar.contentNode.setAttribute("aria-label",t.__("main sidebar")),g.sideBar.node.setAttribute("role","complementary"),g.stackedPanel.id="jp-left-stack",_.sideBar.addClass(M),_.sideBar.addClass("jp-mod-right"),_.sideBar.node.setAttribute("aria-label",t.__("alternate sidebar")),_.sideBar.contentNode.setAttribute("aria-label",t.__("alternate sidebar")),_.sideBar.node.setAttribute("role","complementary"),_.stackedPanel.id="jp-right-stack",l.node.setAttribute("role","main"),o.spacing=0,l.spacing=5,h.spacing=1,i.direction="top-to-bottom",o.direction="left-to-right",h.orientation="horizontal",a.direction="bottom-to-top",B.SplitPanel.setStretch(g.stackedPanel,0),B.SplitPanel.setStretch(l,1),B.SplitPanel.setStretch(_.stackedPanel,0),B.BoxPanel.setStretch(g.sideBar,0),B.BoxPanel.setStretch(h,1),B.BoxPanel.setStretch(_.sideBar,0),h.addWidget(g.stackedPanel),h.addWidget(l),h.addWidget(_.stackedPanel),o.addWidget(g.sideBar),o.addWidget(h),o.addWidget(_.sideBar),m.direction="top-to-bottom",m.spacing=0,h.setRelativeSizes([1,2.5,1]),B.BoxLayout.setStretch(i,0),B.BoxLayout.setStretch(n.panel,0),B.BoxLayout.setStretch(r.panel,0),B.BoxLayout.setStretch(o,1),B.BoxLayout.setStretch(a,0),m.addWidget(i),m.addWidget(r.panel),m.addWidget(o),m.addWidget(a),this._headerPanel.hide(),this._bottomPanel.hide(),this.layout=m,this._tracker.currentChanged.connect(this._onCurrentChanged,this),this._tracker.activeChanged.connect(this._onActiveChanged,this),this._dockPanel.layoutModified.connect(this._onLayoutModified,this),this._leftHandler.sideBar.currentChanged.connect(this._onLayoutModified,this),this._rightHandler.sideBar.currentChanged.connect(this._onLayoutModified,this),this._hsplitPanel.updated.connect(this._onLayoutModified,this);const f=this._titleWidgetHandler=new D.TitleWidgetHandler(this);this.add(f.titleWidget,"top",{rank:100}),"multiple-document"===this._dockPanel.mode?(this._topHandler.addWidget(this._menuHandler.panel,100),f.hide()):m.insertWidget(2,this._menuHandler.panel);const y=this._skipLinkWidgetHandler=new D.SkipLinkWidgetHandler(this);this.add(y.skipLinkWidget,"top",{rank:0}),this._skipLinkWidgetHandler.show(),this.currentChanged.connect(((e,t)=>{let i=t.newValue,n=t.oldValue;n&&n.title.changed.disconnect(this._updateTitlePanelTitle,this),i&&(i.title.changed.connect(this._updateTitlePanelTitle,this),this._updateTitlePanelTitle()),i&&i instanceof d.DocumentWidget&&i.context.pathChanged.connect(this._updateCurrentPath,this),this._updateCurrentPath()}))}get activeChanged(){return this._activeChanged}get activeWidget(){return this._tracker.activeWidget}get currentChanged(){return this._currentChanged}get modeChanged(){return this._modeChanged}get currentPathChanged(){return this._currentPathChanged}get currentWidget(){return this._tracker.currentWidget}get layoutModified(){return this._layoutModified}get leftCollapsed(){return!this._leftHandler.sideBar.currentTitle}get rightCollapsed(){return!this._rightHandler.sideBar.currentTitle}get presentationMode(){return this.hasClass("jp-mod-presentationMode")}set presentationMode(e){this.toggleClass("jp-mod-presentationMode",e)}get mode(){return this._dockPanel.mode}set mode(e){const t=this._dockPanel;if(e===t.mode)return;const i=this.currentWidget;if("single-document"===e)return this._cachedLayout=t.saveLayout(),t.mode=e,this.currentWidget&&t.activateWidget(this.currentWidget),this.node.dataset.shellMode=e,this.layout.insertWidget(2,this._menuHandler.panel),this._titleWidgetHandler.show(),this._updateTitlePanelTitle(),void this._modeChanged.emit(e);const n=(0,T.toArray)(t.widgets());t.mode=e,this._cachedLayout&&(D.normalizeAreaConfig(t,this._cachedLayout.main),t.restoreLayout(this._cachedLayout),this._cachedLayout=null),n.forEach((e=>{e.parent||this._addToMainArea(e,Object.assign(Object.assign({},this._mainOptionsCache.get(e)),{activate:!1}))})),this._mainOptionsCache.clear(),i&&t.activateWidget(i),this.node.dataset.shellMode=e,this.add(this._menuHandler.panel,"top",{rank:100}),this._titleWidgetHandler.hide(),this._modeChanged.emit(e)}get restored(){return this._restored.promise}activateById(e){if(this._leftHandler.has(e))return void this._leftHandler.activate(e);if(this._rightHandler.has(e))return void this._rightHandler.activate(e);const t=this._dockPanel,i=(0,T.find)(t.widgets(),(t=>t.id===e));i&&t.activateWidget(i)}activateNextTab(){const e=this._currentTabBar();if(!e)return;const t=e.currentIndex;if(-1!==t){if(t<e.titles.length-1)return e.currentIndex+=1,void(e.currentTitle&&e.currentTitle.owner.activate());if(t===e.titles.length-1){const e=this._adjacentBar("next");e&&(e.currentIndex=0,e.currentTitle&&e.currentTitle.owner.activate())}}}activatePreviousTab(){const e=this._currentTabBar();if(!e)return;const t=e.currentIndex;if(-1!==t){if(t>0)return e.currentIndex-=1,void(e.currentTitle&&e.currentTitle.owner.activate());if(0===t){const e=this._adjacentBar("previous");if(e){const t=e.titles.length;e.currentIndex=t-1,e.currentTitle&&e.currentTitle.owner.activate()}}}}activateNextTabBar(){const e=this._adjacentBar("next");e&&e.currentTitle&&e.currentTitle.owner.activate()}activatePreviousTabBar(){const e=this._adjacentBar("previous");e&&e.currentTitle&&e.currentTitle.owner.activate()}add(e,t="main",i){switch(t||"main"){case"main":return this._addToMainArea(e,i);case"left":return this._addToLeftArea(e,i);case"right":return this._addToRightArea(e,i);case"header":return this._addToHeaderArea(e,i);case"top":return this._addToTopArea(e,i);case"menu":return this._addToMenuArea(e,i);case"bottom":return this._addToBottomArea(e,i);default:throw new Error(`Invalid area: ${t}`)}}collapseLeft(){this._leftHandler.collapse(),this._onLayoutModified()}collapseRight(){this._rightHandler.collapse(),this._onLayoutModified()}dispose(){this.isDisposed||(this._layoutDebouncer.dispose(),this._titleWidgetHandler.dispose(),super.dispose())}expandLeft(){this._leftHandler.expand(),this._onLayoutModified()}expandRight(){this._rightHandler.expand(),this._onLayoutModified()}closeAll(){(0,T.toArray)(this._dockPanel.widgets()).forEach((e=>e.close()))}isEmpty(e){switch(e){case"left":return 0===this._leftHandler.stackedPanel.widgets.length;case"main":return this._dockPanel.isEmpty;case"header":return 0===this._headerPanel.widgets.length;case"top":return 0===this._topHandler.panel.widgets.length;case"menu":return 0===this._menuHandler.panel.widgets.length;case"bottom":return 0===this._bottomPanel.widgets.length;case"right":return 0===this._rightHandler.stackedPanel.widgets.length;default:return!0}}restoreLayout(e,t){const{mainArea:i,leftArea:n,rightArea:s,relativeSizes:r}=t;if(i){const{currentWidget:t,dock:n}=i;n&&this._dockPanel.restoreLayout(n),e&&(this.mode=e),t&&this.activateById(t.id)}else e&&(this.mode=e);n?this._leftHandler.rehydrate(n):"single-document"===e&&this.collapseLeft(),s?this._rightHandler.rehydrate(s):"single-document"===e&&this.collapseRight(),r&&this._hsplitPanel.setRelativeSizes(r),this._isRestored||(A.MessageLoop.flush(),this._restored.resolve(t))}saveLayout(){return{mainArea:{currentWidget:this._tracker.currentWidget,dock:"single-document"===this.mode&&this._cachedLayout||this._dockPanel.saveLayout()},leftArea:this._leftHandler.dehydrate(),rightArea:this._rightHandler.dehydrate(),relativeSizes:this._hsplitPanel.relativeSizes()}}widgets(e){switch(null!=e?e:"main"){case"main":return this._dockPanel.widgets();case"left":return(0,T.iter)(this._leftHandler.sideBar.titles.map((e=>e.owner)));case"right":return(0,T.iter)(this._rightHandler.sideBar.titles.map((e=>e.owner)));case"header":return this._headerPanel.children();case"top":return this._topHandler.panel.children();case"menu":return this._menuHandler.panel.children();case"bottom":return this._bottomPanel.children();default:throw new Error(`Invalid area: ${e}`)}}onAfterAttach(e){this.node.dataset.shellMode=this.mode}_updateTitlePanelTitle(){let e=this.currentWidget;const t=this._titleWidgetHandler.titleWidget.node.children[0];t.value=e?e.title.label:"",t.title=e?e.title.caption:""}_updateCurrentPath(){let e=this.currentWidget,t="";e&&e instanceof d.DocumentWidget&&(t=e.context.path),this._currentPathChanged.emit({newValue:t,oldValue:this._currentPath}),this._currentPath=t}_addToLeftArea(e,t){if(!e.id)return void console.error("Widgets added to app shell must have unique id property.");t=t||this._sideOptionsCache.get(e)||{},this._sideOptionsCache.set(e,t);const i="rank"in t?t.rank:S;this._leftHandler.addWidget(e,i),this._onLayoutModified()}_addToMainArea(e,t){if(!e.id)return void console.error("Widgets added to app shell must have unique id property.");t=t||{};const i=this._dockPanel,n=t.mode||"tab-after";let s=this.currentWidget;t.ref&&(s=(0,T.find)(i.widgets(),(e=>e.id===t.ref))||null);const{title:r}=e;r.dataset=Object.assign(Object.assign({},r.dataset),{id:e.id}),r.icon instanceof c.LabIcon?r.icon=r.icon.bindprops({stylesheet:"mainAreaTab"}):"string"!=typeof r.icon&&r.icon||(r.iconClass=(0,c.classes)(r.iconClass,"jp-Icon")),i.addWidget(e,{mode:n,ref:s}),"single-document"===i.mode&&this._mainOptionsCache.set(e,t),!1!==t.activate&&i.activateWidget(e)}_addToRightArea(e,t){if(!e.id)return void console.error("Widgets added to app shell must have unique id property.");const i="rank"in(t=t||this._sideOptionsCache.get(e)||{})?t.rank:S;this._sideOptionsCache.set(e,t),this._rightHandler.addWidget(e,i),this._onLayoutModified()}_addToTopArea(e,t){var i;if(!e.id)return void console.error("Widgets added to app shell must have unique id property.");const n=null!==(i=(t=t||{}).rank)&&void 0!==i?i:S;this._topHandler.addWidget(e,n),this._onLayoutModified(),this._topHandler.panel.isHidden&&this._topHandler.panel.show()}_addToMenuArea(e,t){var i;if(!e.id)return void console.error("Widgets added to app shell must have unique id property.");const n=null!==(i=(t=t||{}).rank)&&void 0!==i?i:S;this._menuHandler.addWidget(e,n),this._onLayoutModified(),this._menuHandler.panel.isHidden&&this._menuHandler.panel.show()}_addToHeaderArea(e,t){e.id?(this._headerPanel.addWidget(e),this._onLayoutModified(),this._headerPanel.isHidden&&this._headerPanel.show()):console.error("Widgets added to app shell must have unique id property.")}_addToBottomArea(e,t){e.id?(this._bottomPanel.addWidget(e),this._onLayoutModified(),this._bottomPanel.isHidden&&this._bottomPanel.show()):console.error("Widgets added to app shell must have unique id property.")}_adjacentBar(e){const t=this._currentTabBar();if(!t)return null;const i=(0,T.toArray)(this._dockPanel.tabBars()),n=i.length,s=i.indexOf(t);return"previous"===e?s>0?i[s-1]:0===s?i[n-1]:null:s<n-1?i[s+1]:s===n-1?i[0]:null}_currentTabBar(){const e=this._tracker.currentWidget;if(!e)return null;const t=e.title,i=this._dockPanel.tabBars();return(0,T.find)(i,(e=>e.titles.indexOf(t)>-1))||null}_onActiveChanged(e,t){t.newValue&&(t.newValue.title.className+=" jp-mod-active"),t.oldValue&&(t.oldValue.title.className=t.oldValue.title.className.replace("jp-mod-active","")),this._activeChanged.emit(t)}_onCurrentChanged(e,t){t.newValue&&(t.newValue.title.className+=" jp-mod-current"),t.oldValue&&(t.oldValue.title.className=t.oldValue.title.className.replace("jp-mod-current","")),this._currentChanged.emit(t),this._onLayoutModified()}_onLayoutModified(){this._layoutDebouncer.invoke()}}var D;!function(e){e.itemCmp=function(e,t){return e.rank-t.rank},e.normalizeAreaConfig=function e(t,i){i&&("tab-area"!==i.type?i.children.forEach((i=>{e(t,i)})):i.widgets=i.widgets.filter((e=>!e.isDisposed&&e.parent===t)))},e.PanelHandler=class{constructor(){this._panelChildHook=(e,t)=>{switch(t.type){case"child-added":{const e=t.child;if(this._items.find((t=>t.widget===e)))break;const i=this._items[this._items.length-1].rank;this._items.push({widget:e,rank:i})}break;case"child-removed":{const e=t.child;T.ArrayExt.removeFirstWhere(this._items,(t=>t.widget===e))}}return!0},this._items=new Array,this._panel=new B.Panel,A.MessageLoop.installMessageHook(this._panel,this._panelChildHook)}get panel(){return this._panel}addWidget(t,i){t.parent=null;const n={widget:t,rank:i},s=T.ArrayExt.upperBound(this._items,n,e.itemCmp);T.ArrayExt.insert(this._items,s,n),this._panel.insertWidget(s,t)}},e.SideBarHandler=class{constructor(){this._items=new Array,this._sideBar=new B.TabBar({insertBehavior:"none",removeBehavior:"none",allowDeselect:!0,orientation:"vertical"}),this._stackedPanel=new B.StackedPanel,this._sideBar.hide(),this._stackedPanel.hide(),this._lastCurrent=null,this._sideBar.currentChanged.connect(this._onCurrentChanged,this),this._sideBar.tabActivateRequested.connect(this._onTabActivateRequested,this),this._stackedPanel.widgetRemoved.connect(this._onWidgetRemoved,this)}get sideBar(){return this._sideBar}get stackedPanel(){return this._stackedPanel}expand(){const e=this._lastCurrent||this._items.length>0&&this._items[0].widget;e&&this.activate(e.id)}activate(e){const t=this._findWidgetByID(e);t&&(this._sideBar.currentTitle=t.title,t.activate())}has(e){return null!==this._findWidgetByID(e)}collapse(){this._sideBar.currentTitle=null}addWidget(e,t){e.parent=null,e.hide();const i={widget:e,rank:t},n=this._findInsertIndex(i);T.ArrayExt.insert(this._items,n,i),this._stackedPanel.insertWidget(n,e);const s=this._sideBar.insertTab(n,e.title);s.dataset={id:e.id},s.icon instanceof c.LabIcon?s.icon=s.icon.bindprops({stylesheet:"sideBar"}):"string"!=typeof s.icon&&s.icon||(s.iconClass=(0,c.classes)(s.iconClass,"jp-Icon","jp-Icon-20")),this._refreshVisibility()}dehydrate(){const e=null===this._sideBar.currentTitle,t=(0,T.toArray)(this._stackedPanel.widgets);return{collapsed:e,currentWidget:t[this._sideBar.currentIndex],widgets:t}}rehydrate(e){e.currentWidget&&this.activate(e.currentWidget.id),e.collapsed&&this.collapse()}_findInsertIndex(t){return T.ArrayExt.upperBound(this._items,t,e.itemCmp)}_findWidgetIndex(e){return T.ArrayExt.findFirstIndex(this._items,(t=>t.widget===e))}_findWidgetByTitle(e){const t=(0,T.find)(this._items,(t=>t.widget.title===e));return t?t.widget:null}_findWidgetByID(e){const t=(0,T.find)(this._items,(t=>t.widget.id===e));return t?t.widget:null}_refreshVisibility(){this._sideBar.setHidden(0===this._sideBar.titles.length),this._stackedPanel.setHidden(null===this._sideBar.currentTitle)}_onCurrentChanged(e,t){const i=t.previousTitle?this._findWidgetByTitle(t.previousTitle):null,n=t.currentTitle?this._findWidgetByTitle(t.currentTitle):null;i&&i.hide(),n&&n.show(),this._lastCurrent=n||i,this._refreshVisibility()}_onTabActivateRequested(e,t){t.title.owner.activate()}_onWidgetRemoved(e,t){t===this._lastCurrent&&(this._lastCurrent=null),T.ArrayExt.removeAt(this._items,this._findWidgetIndex(t)),this._sideBar.removeTab(t.title),this._refreshVisibility()}},e.SkipLinkWidgetHandler=class{constructor(e){this._isDisposed=!1;const t=this._skipLinkWidget=new B.Widget,i=document.createElement("a");i.href="#",i.tabIndex=1,i.text="Skip to Filter Files",i.className="skip-link",i.addEventListener("click",this),t.addClass("jp-skiplink"),t.id="jp-skiplink",t.node.appendChild(i)}handleEvent(e){switch(e.type){case"click":this._focusFileSearch()}}_focusFileSearch(){document.querySelector("#filename-searcher .bp3-input").focus()}get skipLinkWidget(){return this._skipLinkWidget}dispose(){this.isDisposed||(this._isDisposed=!0,this._skipLinkWidget.node.removeEventListener("click",this),this._skipLinkWidget.dispose())}hide(){this._skipLinkWidget.hide()}show(){this._skipLinkWidget.show()}get isDisposed(){return this._isDisposed}},e.TitleWidgetHandler=class{constructor(e){this._isDisposed=!1,this._selected=!1,this._shell=e;const t=this._titleWidget=new B.Widget;t.id="jp-title-panel-title";const i=document.createElement("input");i.type="text",i.addEventListener("keyup",this),i.addEventListener("click",this),i.addEventListener("blur",this),t.node.appendChild(i)}handleEvent(e){switch(e.type){case"keyup":this._evtKeyUp(e);break;case"click":this._evtClick(e);break;case"blur":this._selected=!1}}async _evtKeyUp(e){if("Enter"==e.key){const e=this._shell.currentWidget;if(e instanceof d.DocumentWidget){const t=e.context.path.split("/").pop(),i=this.titleWidget.node.children[0],n=i.value;i.blur(),n!==t&&(0,L.isValidFileName)(n)?await e.context.rename(n):i.value=t}}}_evtClick(e){if(0!==e.button||this._selected)return;const t=this._shell.currentWidget,i=this.titleWidget.node.children[0];if(!(null!=t&&t instanceof d.DocumentWidget))return void(i.readOnly=!0);i.removeAttribute("readOnly"),e.preventDefault(),e.stopPropagation(),this._selected=!0;const n=i.value.indexOf(".");-1===n?i.select():i.setSelectionRange(0,n)}get titleWidget(){return this._titleWidget}dispose(){this.isDisposed||(this._isDisposed=!0,this._titleWidget.node.removeEventListener("keyup",this),this._titleWidget.node.removeEventListener("click",this),this._titleWidget.node.removeEventListener("blur",this),this._titleWidget.dispose())}hide(){this._titleWidget.hide()}show(){this._titleWidget.show()}get isDisposed(){return this._isDisposed}};class t extends B.SplitPanel{constructor(e={}){super(e),this.updated=new p.Signal(this)}onUpdateRequest(e){super.onUpdateRequest(e),this.updated.emit()}}e.RestorableSplitPanel=t}(D||(D={}));var I=i(98669);const E=new u.Token("@jupyterlab/application:ILabStatus");class R{constructor(e){this._busyCount=0,this._dirtyCount=0,this._busySignal=new p.Signal(e),this._dirtySignal=new p.Signal(e)}get busySignal(){return this._busySignal}get dirtySignal(){return this._dirtySignal}get isBusy(){return this._busyCount>0}get isDirty(){return this._dirtyCount>0}setDirty(){const e=this.isDirty;return this._dirtyCount++,this.isDirty!==e&&this._dirtySignal.emit(this.isDirty),new I.DisposableDelegate((()=>{const e=this.isDirty;this._dirtyCount=Math.max(0,this._dirtyCount-1),this.isDirty!==e&&this._dirtySignal.emit(this.isDirty)}))}setBusy(){const e=this.isBusy;return this._busyCount++,this.isBusy!==e&&this._busySignal.emit(this.isBusy),new I.DisposableDelegate((()=>{const e=this.isBusy;this._busyCount--,this.isBusy!==e&&this._busySignal.emit(this.isBusy)}))}}class F extends g{constructor(e={shell:new j}){super(Object.assign(Object.assign({},e),{shell:e.shell||new j})),this.name=_.PageConfig.getOption("appName")||"JupyterLab",this.namespace=_.PageConfig.getOption("appNamespace")||this.name,this.registerPluginErrors=[],this.status=new R(this),this.version=_.PageConfig.getOption("appVersion")||"unknown",this.restored=this.shell.restored.then((()=>{})).catch((()=>{}));const t=Object.keys(F.defaultInfo).reduce(((t,i)=>(i in e&&(t[i]=JSON.parse(JSON.stringify(e[i]))),t)),{});this._info=Object.assign(Object.assign({},F.defaultInfo),t);const i=F.defaultPaths.urls,n=F.defaultPaths.directories,s=e.paths&&e.paths.urls||{},r=e.paths&&e.paths.directories||{};if(this._paths={urls:Object.keys(i).reduce(((e,t)=>{if(t in s){const i=s[t];e[t]=i}else e[t]=i[t];return e}),{}),directories:Object.keys(F.defaultPaths.directories).reduce(((e,t)=>{if(t in r){const i=r[t];e[t]=i}else e[t]=n[t];return e}),{})},this._info.devMode&&this.shell.addClass("jp-mod-devMode"),this.docRegistry.addModelFactory(new d.Base64ModelFactory),e.mimeExtensions)for(const t of P(e.mimeExtensions))this.registerPlugin(t)}get info(){return this._info}get paths(){return this._paths}registerPluginModule(e){let t=e.default;e.hasOwnProperty("__esModule")||(t=e),Array.isArray(t)||(t=[t]),t.forEach((e=>{try{this.registerPlugin(e)}catch(e){this.registerPluginErrors.push(e)}}))}registerPluginModules(e){e.forEach((e=>{this.registerPluginModule(e)}))}}!function(e){e.IInfo=new u.Token("@jupyterlab/application:IInfo"),e.defaultInfo={devMode:"true"===_.PageConfig.getOption("devMode").toLowerCase(),deferred:{patterns:[],matches:[]},disabled:{patterns:[],matches:[]},mimeExtensions:[],filesCached:"true"===_.PageConfig.getOption("cacheFiles").toLowerCase()},e.defaultPaths={urls:{base:_.PageConfig.getOption("baseUrl"),notFound:_.PageConfig.getOption("notFoundUrl"),app:_.PageConfig.getOption("appUrl"),doc:_.PageConfig.getOption("docUrl"),static:_.PageConfig.getOption("staticUrl"),settings:_.PageConfig.getOption("settingsUrl"),themes:_.PageConfig.getOption("themesUrl"),translations:_.PageConfig.getOption("translationsApiUrl"),hubHost:_.PageConfig.getOption("hubHost")||void 0,hubPrefix:_.PageConfig.getOption("hubPrefix")||void 0,hubUser:_.PageConfig.getOption("hubUser")||void 0,hubServerName:_.PageConfig.getOption("hubServerName")||void 0},directories:{appSettings:_.PageConfig.getOption("appSettingsDir"),schemas:_.PageConfig.getOption("schemasDir"),static:_.PageConfig.getOption("staticDir"),templates:_.PageConfig.getOption("templatesDir"),themes:_.PageConfig.getOption("themesDir"),userSettings:_.PageConfig.getOption("userSettingsDir"),serverRoot:_.PageConfig.getOption("serverRoot"),workspaces:_.PageConfig.getOption("workspacesDir")}}}(F||(F={}));class N{constructor(e){this.stop=new u.Token("@jupyterlab/application:Router#stop"),this._routed=new p.Signal(this),this._rules=new Map,this.base=e.base,this.commands=e.commands}get current(){var e,t;const{base:i}=this,n=_.URLExt.parse(window.location.href),{search:s,hash:r}=n,a=null!==(t=null===(e=n.pathname)||void 0===e?void 0:e.replace(i,"/"))&&void 0!==t?t:"";return{hash:r,path:a,request:a+s+r,search:s}}get routed(){return this._routed}navigate(e,t={}){const{base:i}=this,{history:n}=window,{hard:s}=t,r=document.location.href,a=e&&0===e.indexOf(i)?e:_.URLExt.join(i,e);return a===r?s?this.reload():void 0:(n.pushState({},"",a),s?this.reload():void(t.skipRouting||requestAnimationFrame((()=>{this.route()}))))}register(e){var t;const{command:i,pattern:n}=e,s=null!==(t=e.rank)&&void 0!==t?t:100,r=this._rules;return r.set(n,{command:i,rank:s}),new I.DisposableDelegate((()=>{r.delete(n)}))}reload(){window.location.reload()}route(){const{commands:e,current:t,stop:i}=this,{request:n}=t,s=this._routed,r=this._rules,a=[];r.forEach(((e,t)=>{(null==n?void 0:n.match(t))&&a.push(e)}));const o=a.sort(((e,t)=>t.rank-e.rank)),d=new u.PromiseDelegate,l=async()=>{if(!o.length)return s.emit(t),void d.resolve(void 0);const{command:r}=o.pop();try{const n=this.current.request;await e.execute(r,t)===i&&(o.length=0,console.debug(`Routing ${n} was short-circuited by ${r}`))}catch(e){console.warn(`Routing ${n} to ${r} failed`,e)}l()};return l(),d.promise}}const U=new u.Token("@jupyterlab/application:ITreePathUpdater"),z=new u.Token("@jupyterlab/apputils:IConnectionLost"),V=new u.Token("@jupyterlab/application:IRouter")}}]);
//# sourceMappingURL=5415.bundle.js.map