(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[6707],{76707:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>w});var o=t(84571),r=t(67906),a=t(8608),s=t(60528),l=t(98838),c=t(26030),i=t(11178),d=t(4341),u=t(46287),m=t(80669),p=t(67070),C=t(30742),g=t(79028),h=t(66065),b=t(98669),v=t(77031),f=t(20337);const y={id:"@jupyterlab/console-extension:foreign",requires:[s.IConsoleTracker,m.ISettingRegistry,p.ITranslator],optional:[r.ICommandPalette],activate:function(e,n,t,o,r){const a=o.load("jupyterlab"),{shell:l}=e;n.widgetAdded.connect(((e,n)=>{const o=n.console,r=new s.ForeignHandler({sessionContext:o.sessionContext,parent:o});_.foreignHandlerProperty.set(o,r),t.get("@jupyterlab/console-extension:tracker","showAllKernelActivity").then((({composite:e})=>{const n=e;r.enabled=n})),o.disposed.connect((()=>{r.dispose()}))}));const{commands:c}=e,i=a.__("Console"),d="console:toggle-show-all-kernel-activity";c.addCommand(d,{label:e=>a.__("Show All Kernel Activity"),execute:e=>{const t=function(e){const t=n.currentWidget;return!1!==e.activate&&t&&l.activateById(t.id),t}(e);if(!t)return;const o=_.foreignHandlerProperty.get(t.console);o&&(o.enabled=!o.enabled)},isToggled:()=>{var e;return null!==n.currentWidget&&!!(null===(e=_.foreignHandlerProperty.get(n.currentWidget.console))||void 0===e?void 0:e.enabled)},isEnabled:()=>null!==n.currentWidget&&n.currentWidget===l.currentWidget}),r&&r.addItem({command:d,category:i,args:{isPalette:!0}}),e.contextMenu.addItem({command:d,selector:".jp-CodeConsole"})},autoStart:!0};var _,x;!function(e){e.foreignHandlerProperty=new f.AttachedProperty({name:"foreignHandler",create:()=>{}})}(_||(_={})),function(e){e.create="console:create",e.clear="console:clear",e.runUnforced="console:run-unforced",e.runForced="console:run-forced",e.linebreak="console:linebreak",e.interrupt="console:interrupt-kernel",e.restart="console:restart-kernel",e.closeAndShutdown="console:close-and-shutdown",e.open="console:open",e.inject="console:inject",e.changeKernel="console:change-kernel",e.enterToExecute="console:enter-to-execute",e.shiftEnterToExecute="console:shift-enter-to-execute",e.interactionMode="console:interaction-mode",e.replaceSelection="console:replace-selection"}(x||(x={}));const k={id:"@jupyterlab/console-extension:tracker",provides:s.IConsoleTracker,requires:[s.ConsolePanel.IContentFactory,a.IEditorServices,u.IRenderMimeRegistry,m.ISettingRegistry,p.ITranslator],optional:[o.ILayoutRestorer,c.IFileBrowserFactory,d.IMainMenu,r.ICommandPalette,i.ILauncher,o.ILabStatus,r.ISessionContextDialogs],activate:async function(e,n,t,o,a,c,i,d,u,m,p,f,y){const _=c.load("jupyterlab"),k=e.serviceManager,{commands:w,shell:I}=e,E=_.__("Console");y=null!=y?y:r.sessionContextDialogs;const M=new r.WidgetTracker({namespace:"console"});async function P(e){var r;await k.ready;const l=new s.ConsolePanel(Object.assign({manager:k,contentFactory:n,mimeTypeService:t.mimeTypeService,rendermime:o,translator:c,setBusy:null!==(r=f&&(()=>f.setBusy()))&&void 0!==r?r:void 0},e)),i=(await a.get("@jupyterlab/console-extension:tracker","interactionMode")).composite;return l.console.node.dataset.jpInteractionMode=i,await M.add(l),l.sessionContext.propertyChanged.connect((()=>{M.save(l)})),I.add(l,"main",{ref:e.ref,mode:e.insertMode,activate:!1!==e.activate}),l}i&&i.restore(M,{command:x.create,args:e=>{const{path:n,name:t,kernelPreference:o}=e.console.sessionContext;return{path:n,name:t,kernelPreference:Object.assign({},o)}},name:e=>{var n;return null!==(n=e.console.sessionContext.path)&&void 0!==n?n:h.UUID.uuid4()},when:k.ready}),p&&k.ready.then((()=>{let e=null;const n=()=>{e&&(e.dispose(),e=null);const n=k.kernelspecs.specs;if(!n)return;e=new b.DisposableSet;const t=l.PageConfig.getBaseUrl();for(const o in n.kernelspecs){const r=o===n.default?0:1/0,a=n.kernelspecs[o];let s=a.resources["logo-64x64"];if(s){const e=s.indexOf("kernelspecs");s=l.URLExt.join(t,s.slice(e))}e.add(p.add({command:x.create,args:{isLauncher:!0,kernelPreference:{name:o}},category:_.__("Console"),rank:r,kernelIconUrl:s,metadata:{kernel:h.JSONExt.deepCopy(a.metadata||{})}}))}};n(),k.kernelspecs.specsChanged.connect(n)}));const S="@jupyterlab/console-extension:tracker";let j;async function K(){j=(await a.get(S,"interactionMode")).composite,M.forEach((e=>{e.console.node.dataset.jpInteractionMode=j}))}function A(){return null!==M.currentWidget&&M.currentWidget===I.currentWidget}a.pluginChanged.connect(((e,n)=>{n===S&&K()})),await K();let R=x.open;function T(e){const n=M.currentWidget;return!1!==e.activate&&n&&I.activateById(n.id),null!=n?n:null}w.addCommand(R,{execute:e=>{const n=e.path,t=M.find((e=>{var t;return(null===(t=e.console.sessionContext.session)||void 0===t?void 0:t.path)===n}));return t?(!1!==e.activate&&I.activateById(t.id),t):k.ready.then((()=>(0,g.find)(k.sessions.running(),(e=>e.path===n))?P(e):Promise.reject(`No running kernel session for path: ${n}`)))}}),R=x.create,w.addCommand(R,{label:e=>{var n,t,o,r;if(e.isPalette)return _.__("New Console");if(e.isLauncher&&e.kernelPreference){const a=e.kernelPreference;return null!==(r=null===(o=null===(t=null===(n=k.kernelspecs)||void 0===n?void 0:n.specs)||void 0===t?void 0:t.kernelspecs[a.name||""])||void 0===o?void 0:o.display_name)&&void 0!==r?r:""}return _.__("Console")},icon:e=>e.isPalette?void 0:C.consoleIcon,execute:e=>{var n;const t=null!==(n=e.basePath||e.cwd||(null==d?void 0:d.defaultBrowser.model.path))&&void 0!==n?n:"";return P(Object.assign({basePath:t},e))}}),w.addCommand(x.clear,{label:_.__("Clear Console Cells"),execute:e=>{const n=T(e);n&&n.console.clear()},isEnabled:A}),w.addCommand(x.runUnforced,{label:_.__("Run Cell (unforced)"),execute:e=>{const n=T(e);if(n)return n.console.execute()},isEnabled:A}),w.addCommand(x.runForced,{label:_.__("Run Cell (forced)"),execute:e=>{const n=T(e);if(n)return n.console.execute(!0)},isEnabled:A}),w.addCommand(x.linebreak,{label:_.__("Insert Line Break"),execute:e=>{const n=T(e);n&&n.console.insertLinebreak()},isEnabled:A}),w.addCommand(x.replaceSelection,{label:_.__("Replace Selection in Console"),execute:e=>{const n=T(e);if(!n)return;const t=e.text||"";n.console.replaceSelection(t)},isEnabled:A}),w.addCommand(x.interrupt,{label:_.__("Interrupt Kernel"),execute:e=>{var n;const t=T(e);if(!t)return;const o=null===(n=t.console.sessionContext.session)||void 0===n?void 0:n.kernel;return o?o.interrupt():void 0},isEnabled:A}),w.addCommand(x.restart,{label:_.__("Restart Kernel…"),execute:e=>{const n=T(e);if(n)return y.restart(n.console.sessionContext,c)},isEnabled:A}),w.addCommand(x.closeAndShutdown,{label:_.__("Close and Shut Down…"),execute:e=>{const n=T(e);if(n)return(0,r.showDialog)({title:_.__("Shut down the console?"),body:_.__('Are you sure you want to close "%1"?',n.title.label),buttons:[r.Dialog.cancelButton(),r.Dialog.warnButton()]}).then((e=>!!e.button.accept&&n.console.sessionContext.shutdown().then((()=>(n.dispose(),!0)))))},isEnabled:A}),w.addCommand(x.inject,{execute:e=>{const n=e.path;M.find((t=>{var o;return(null===(o=t.console.sessionContext.session)||void 0===o?void 0:o.path)===n&&(!1!==e.activate&&I.activateById(t.id),t.console.inject(e.code,e.metadata),!0)}))},isEnabled:A}),w.addCommand(x.changeKernel,{label:_.__("Change Kernel…"),execute:e=>{const n=T(e);if(n)return y.selectKernel(n.console.sessionContext,c)},isEnabled:A}),m&&[x.create,x.linebreak,x.clear,x.runUnforced,x.runForced,x.restart,x.interrupt,x.changeKernel,x.closeAndShutdown].forEach((e=>{m.addItem({command:e,category:E,args:{isPalette:!0}})})),u&&(u.fileMenu.newMenu.addGroup([{command:x.create}],0),u.fileMenu.closeAndCleaners.add({tracker:M,closeAndCleanupLabel:e=>_.__("Shutdown Console"),closeAndCleanup:e=>(0,r.showDialog)({title:_.__("Shut down the Console?"),body:_.__('Are you sure you want to close "%1"?',e.title.label),buttons:[r.Dialog.cancelButton(),r.Dialog.warnButton()]}).then((n=>n.button.accept?e.console.sessionContext.shutdown().then((()=>{e.dispose()})):void 0))}),u.kernelMenu.kernelUsers.add({tracker:M,restartKernelAndClearLabel:e=>_.__("Restart Kernel and Clear Console"),interruptKernel:e=>{var n;const t=null===(n=e.console.sessionContext.session)||void 0===n?void 0:n.kernel;return t?t.interrupt():Promise.resolve(void 0)},restartKernel:e=>y.restart(e.console.sessionContext,c),restartKernelAndClear:e=>y.restart(e.console.sessionContext).then((n=>(n&&e.console.clear(),n))),changeKernel:e=>y.selectKernel(e.console.sessionContext,c),shutdownKernel:e=>e.console.sessionContext.shutdown()}),u.runMenu.codeRunners.add({tracker:M,runLabel:e=>_.__("Run Cell"),run:e=>e.console.execute(!0)}),u.editMenu.clearers.add({tracker:M,clearCurrentLabel:e=>_.__("Clear Console Cell"),clearCurrent:e=>e.console.clear()}));const B={notebook:_.__("Execute with Shift+Enter"),terminal:_.__("Execute with Enter")};w.addCommand(x.interactionMode,{label:e=>B[e.interactionMode]||"",execute:async e=>{try{await a.set(S,"interactionMode",e.interactionMode)}catch(e){console.error(`Failed to set ${S}:keyMap - ${e.message}`)}},isToggled:e=>e.interactionMode===j});const U=new v.Menu({commands:w});return U.title.label=_.__("Console Run Keystroke"),["terminal","notebook"].forEach((e=>U.addItem({command:x.interactionMode,args:{interactionMode:e}}))),u&&(u.settingsMenu.addGroup([{type:"submenu",submenu:U}],10),u.helpMenu.kernelUsers.add({tracker:M,getKernel:e=>{var n;return null===(n=e.sessionContext.session)||void 0===n?void 0:n.kernel}})),e.contextMenu.addItem({command:x.clear,selector:".jp-CodeConsole-content"}),e.contextMenu.addItem({command:x.restart,selector:".jp-CodeConsole"}),M},autoStart:!0},w=[{id:"@jupyterlab/console-extension:factory",provides:s.ConsolePanel.IContentFactory,requires:[a.IEditorServices],autoStart:!0,activate:(e,n)=>{const t=n.factoryService.newInlineEditor;return new s.ConsolePanel.ContentFactory({editorFactory:t})}},k,y]}}]);
//# sourceMappingURL=6707.bundle.js.map