(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[4577,3139],{33139:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>u});var o,s=t(93226),c=t(80430),r=t(35984),i=t(91970),d=t(49174),a=t(97688),l=t(86082),p=t(4324);!function(e){e.open="inspector:open"}(o||(o={}));const u=[{id:"@jupyterlab/inspector-extension:inspector",requires:[l.ITranslator],optional:[c.ICommandPalette,d.ILauncher,s.ILayoutRestorer],provides:i.IInspector,autoStart:!0,activate:(e,n,t,s,r)=>{const d=n.load("jupyterlab"),{commands:a,shell:l}=e,u=o.open,m=d.__("Show Contextual Help"),C=new c.WidgetTracker({namespace:"inspector"});let I,h=null;return a.addCommand(u,{caption:d.__("Live updating code documentation from the active kernel"),isEnabled:()=>!I||I.isDisposed||!I.isAttached||!I.isVisible,label:m,icon:e=>e.isLauncher?p.inspectorIcon:void 0,execute:()=>(I&&!I.isDisposed||(I=new c.MainAreaWidget({content:new i.InspectorPanel({translator:n})}),I.id="jp-inspector",I.title.label=m,I.title.icon=p.inspectorIcon,C.add(I),h=h&&!h.isDisposed?h:null,I.content.source=h),I.isAttached||l.add(I,"main",{activate:!1}),l.activateById(I.id),I)}),t&&t.addItem({command:u,category:m}),s&&s.add({command:u,args:{isLauncher:!0}}),r&&r.restore(C,{command:u,name:()=>"inspector"}),Object.defineProperty({},"source",{get:()=>!I||I.isDisposed?null:I.content.source,set:e=>{h=e&&!e.isDisposed?e:null,I&&!I.isDisposed&&(I.content.source=h)}})}},{id:"@jupyterlab/inspector-extension:consoles",requires:[i.IInspector,r.IConsoleTracker,s.ILabShell],autoStart:!0,activate:(e,n,t,s,c)=>{const r={};t.widgetAdded.connect(((e,n)=>{const t=n.console.sessionContext,o=n.console.rendermime,s=new i.KernelConnector({sessionContext:t}),c=new i.InspectionHandler({connector:s,rendermime:o});r[n.id]=c;const d=n.console.promptCell;c.editor=d&&d.editor,n.console.promptCellCreated.connect(((e,n)=>{c.editor=n&&n.editor})),n.disposed.connect((()=>{delete r[n.id],c.dispose()}))})),s.currentChanged.connect(((e,o)=>{const s=o.newValue;if(!s||!t.has(s))return;const c=r[s.id];c&&(n.source=c)})),e.contextMenu.addItem({command:o.open,selector:".jp-CodeConsole-promptCell"})}},{id:"@jupyterlab/inspector-extension:notebooks",requires:[i.IInspector,a.INotebookTracker,s.ILabShell],autoStart:!0,activate:(e,n,t,s)=>{const c={};t.widgetAdded.connect(((e,n)=>{const t=n.sessionContext,o=n.content.rendermime,s=new i.KernelConnector({sessionContext:t}),r=new i.InspectionHandler({connector:s,rendermime:o});c[n.id]=r;const d=n.content.activeCell;r.editor=d&&d.editor,n.content.activeCellChanged.connect(((e,n)=>{r.editor=n&&n.editor})),n.disposed.connect((()=>{delete c[n.id],r.dispose()}))})),s.currentChanged.connect(((e,o)=>{const s=o.newValue;if(!s||!t.has(s))return;const r=c[s.id];r&&(n.source=r)})),e.contextMenu.addItem({command:o.open,selector:".jp-Notebook"})}}]}}]);
//# sourceMappingURL=4577.bundle.js.map