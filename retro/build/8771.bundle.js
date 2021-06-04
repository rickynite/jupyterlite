(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[8771],{8771:(e,n,a)=>{"use strict";a.r(n),a.d(n,{CommandIDs:()=>t,createEditMenu:()=>m,createFileMenu:()=>g,createKernelMenu:()=>b,createViewMenu:()=>p,createRunMenu:()=>_,createSettingsMenu:()=>h,createTabsMenu:()=>C,createHelpMenu:()=>w,default:()=>E});var t,l=a(79028),r=a(77031),d=a(88647),o=a(19573),u=a(87939),c=a(94257),s=a(86703),i=a(17179);function m(e,n,a){const l=n.menu.commands;n.menu.title.label=a.__("Edit"),l.addCommand(t.undo,{label:a.__("Undo"),isEnabled:A.delegateEnabled(e,n.undoers,"undo"),execute:A.delegateExecute(e,n.undoers,"undo")}),l.addCommand(t.redo,{label:a.__("Redo"),isEnabled:A.delegateEnabled(e,n.undoers,"redo"),execute:A.delegateExecute(e,n.undoers,"redo")}),n.addGroup([{command:t.undo},{command:t.redo}],0),l.addCommand(t.clearCurrent,{label:()=>{const t=A.delegateEnabled(e,n.clearers,"clearCurrent")();let l=a.__("Clear");return t&&(l=A.delegateLabel(e,n.clearers,"clearCurrentLabel")),l},isEnabled:A.delegateEnabled(e,n.clearers,"clearCurrent"),execute:A.delegateExecute(e,n.clearers,"clearCurrent")}),l.addCommand(t.clearAll,{label:()=>{const t=A.delegateEnabled(e,n.clearers,"clearAll")();let l=a.__("Clear All");return t&&(l=A.delegateLabel(e,n.clearers,"clearAllLabel")),l},isEnabled:A.delegateEnabled(e,n.clearers,"clearAll"),execute:A.delegateExecute(e,n.clearers,"clearAll")}),n.addGroup([{command:t.clearCurrent},{command:t.clearAll}],10),l.addCommand(t.goToLine,{label:a.__("Go to Line…"),isEnabled:A.delegateEnabled(e,n.goToLiners,"goToLine"),execute:A.delegateExecute(e,n.goToLiners,"goToLine")}),n.addGroup([{command:t.goToLine}],200)}function g(e,n,a,l){const d=n.menu.commands;n.menu.title.label=l.__("File"),n.newMenu.menu.title.label=l.__("New"),d.addCommand(t.closeAndCleanup,{label:()=>A.delegateLabel(e,n.closeAndCleaners,"closeAndCleanupLabel")||l.__("Close and Shutdown"),isEnabled:()=>!!e.shell.currentWidget&&!!e.shell.currentWidget.title.closable,execute:()=>A.delegateEnabled(e,n.closeAndCleaners,"closeAndCleanup")()?A.delegateExecute(e,n.closeAndCleaners,"closeAndCleanup")():e.commands.execute("application:close")}),d.addCommand(t.createConsole,{label:()=>A.delegateLabel(e,n.consoleCreators,"createConsoleLabel")||l.__("New Console for Activity"),isEnabled:A.delegateEnabled(e,n.consoleCreators,"createConsole"),execute:A.delegateExecute(e,n.consoleCreators,"createConsole")}),d.addCommand(t.shutdown,{label:l.__("Shut Down"),caption:l.__("Shut down JupyterLab"),execute:()=>(0,o.showDialog)({title:l.__("Shutdown confirmation"),body:l.__("Please confirm you want to shut down JupyterLab."),buttons:[o.Dialog.cancelButton(),o.Dialog.warnButton({label:l.__("Shut Down")})]}).then((e=>{if(e.button.accept){const e=s.ServerConnection.makeSettings(),n=u.URLExt.join(e.baseUrl,"api/shutdown");return s.ServerConnection.makeRequest(n,{method:"POST"},e).then((e=>{if(!e.ok)throw new s.ServerConnection.ResponseError(e);{const e=document.createElement("div"),n=document.createElement("p");n.textContent=l.__("You have shut down the Jupyter server. You can now close this tab.");const a=document.createElement("p");a.textContent=l.__("To use JupyterLab again, you will need to relaunch it."),e.appendChild(n),e.appendChild(a),(0,o.showDialog)({title:l.__("Server stopped"),body:new r.Widget({node:e}),buttons:[]}),window.close()}})).catch((e=>{throw new s.ServerConnection.NetworkError(e)}))}}))}),d.addCommand(t.logout,{label:l.__("Log Out"),caption:l.__("Log out of JupyterLab"),execute:()=>{a.navigate("/logout",{hard:!0})}});const c=[{type:"submenu",submenu:n.newMenu.menu},{command:"filebrowser:create-main-launcher"}],i=[{command:"docmanager:clone"},{command:t.createConsole}].filter((e=>!!e)),m=["application:close","filemenu:close-and-cleanup","application:close-all"].map((e=>({command:e}))),g=["docmanager:save","docmanager:save-as","docmanager:save-all"].map((e=>({command:e}))),b=["docmanager:reload","docmanager:restore-checkpoint","docmanager:rename"].map((e=>({command:e})));n.addGroup(c,0),n.addGroup([{command:"filebrowser:open-path"}],1),n.addGroup(i,2),n.addGroup(m,3),n.addGroup(g,4),n.addGroup(b,5),n.addGroup([{command:"apputils:print"}],98),n.quitEntry&&n.addGroup([{command:"filemenu:logout"},{command:"filemenu:shutdown"}],99)}function b(e,n,a){const l=n.menu.commands;n.menu.title.label=a.__("Kernel"),l.addCommand(t.interruptKernel,{label:a.__("Interrupt Kernel"),isEnabled:A.delegateEnabled(e,n.kernelUsers,"interruptKernel"),execute:A.delegateExecute(e,n.kernelUsers,"interruptKernel")}),l.addCommand(t.reconnectToKernel,{label:a.__("Reconnect to Kernel"),isEnabled:A.delegateEnabled(e,n.kernelUsers,"reconnectToKernel"),execute:A.delegateExecute(e,n.kernelUsers,"reconnectToKernel")}),l.addCommand(t.restartKernel,{label:a.__("Restart Kernel…"),isEnabled:A.delegateEnabled(e,n.kernelUsers,"restartKernel"),execute:A.delegateExecute(e,n.kernelUsers,"restartKernel")}),l.addCommand(t.restartKernelAndClear,{label:()=>{const t=A.delegateEnabled(e,n.kernelUsers,"restartKernelAndClear")();let l=a.__("Restart Kernel and Clear…");return t&&(l=A.delegateLabel(e,n.kernelUsers,"restartKernelAndClearLabel")),l},isEnabled:A.delegateEnabled(e,n.kernelUsers,"restartKernelAndClear"),execute:A.delegateExecute(e,n.kernelUsers,"restartKernelAndClear")}),l.addCommand(t.changeKernel,{label:a.__("Change Kernel…"),isEnabled:A.delegateEnabled(e,n.kernelUsers,"changeKernel"),execute:A.delegateExecute(e,n.kernelUsers,"changeKernel")}),l.addCommand(t.shutdownKernel,{label:a.__("Shut Down Kernel"),isEnabled:A.delegateEnabled(e,n.kernelUsers,"shutdownKernel"),execute:A.delegateExecute(e,n.kernelUsers,"shutdownKernel")}),l.addCommand(t.shutdownAllKernels,{label:a.__("Shut Down All Kernels…"),isEnabled:()=>void 0!==e.serviceManager.sessions.running().next(),execute:()=>(0,o.showDialog)({title:a.__("Shut Down All?"),body:a.__("Shut down all kernels?"),buttons:[o.Dialog.cancelButton({label:a.__("Dismiss")}),o.Dialog.warnButton({label:a.__("Shut Down All")})]}).then((n=>{if(n.button.accept)return e.serviceManager.sessions.shutdownAll()}))});const r=[t.restartKernel,t.restartKernelAndClear,t.restartAndRunToSelected,t.restartAndRunAll].map((e=>({command:e})));n.addGroup([{command:t.interruptKernel}],0),n.addGroup(r,1),n.addGroup([{command:t.reconnectToKernel}],1.5),n.addGroup([{command:t.shutdownKernel},{command:t.shutdownAllKernels}],2),n.addGroup([{command:t.changeKernel}],3)}function p(e,n,a){const l=n.menu.commands;n.menu.title.label=a.__("View"),l.addCommand(t.lineNumbering,{label:a.__("Show Line Numbers"),isEnabled:A.delegateEnabled(e,n.editorViewers,"toggleLineNumbers"),isToggled:A.delegateToggled(e,n.editorViewers,"lineNumbersToggled"),execute:A.delegateExecute(e,n.editorViewers,"toggleLineNumbers")}),l.addCommand(t.matchBrackets,{label:a.__("Match Brackets"),isEnabled:A.delegateEnabled(e,n.editorViewers,"toggleMatchBrackets"),isToggled:A.delegateToggled(e,n.editorViewers,"matchBracketsToggled"),execute:A.delegateExecute(e,n.editorViewers,"toggleMatchBrackets")}),l.addCommand(t.wordWrap,{label:a.__("Wrap Words"),isEnabled:A.delegateEnabled(e,n.editorViewers,"toggleWordWrap"),isToggled:A.delegateToggled(e,n.editorViewers,"wordWrapToggled"),execute:A.delegateExecute(e,n.editorViewers,"toggleWordWrap")}),n.addGroup([{command:"apputils:activate-command-palette"}],0),n.addGroup([{command:"application:toggle-mode"},{command:"application:toggle-presentation-mode"}],1),n.addGroup([{command:"application:toggle-left-area"},{command:"application:toggle-right-area"}],2);const r=[t.lineNumbering,t.matchBrackets,t.wordWrap].map((e=>({command:e})));n.addGroup(r,10)}function _(e,n,a){const l=n.menu.commands;n.menu.title.label=a.__("Run"),l.addCommand(t.run,{label:()=>{const t=A.delegateLabel(e,n.codeRunners,"runLabel");return A.delegateEnabled(e,n.codeRunners,"run")()?t:a.__("Run Selected")},isEnabled:A.delegateEnabled(e,n.codeRunners,"run"),execute:A.delegateExecute(e,n.codeRunners,"run")}),l.addCommand(t.runAll,{label:()=>{let t=a.__("Run All");return A.delegateEnabled(e,n.codeRunners,"runAll")()&&(t=A.delegateLabel(e,n.codeRunners,"runAllLabel")),t},isEnabled:A.delegateEnabled(e,n.codeRunners,"runAll"),execute:A.delegateExecute(e,n.codeRunners,"runAll")}),l.addCommand(t.restartAndRunAll,{label:()=>{let t=a.__("Restart Kernel and Run All");return A.delegateEnabled(e,n.codeRunners,"restartAndRunAll")()&&(t=A.delegateLabel(e,n.codeRunners,"restartAndRunAllLabel")),t},isEnabled:A.delegateEnabled(e,n.codeRunners,"restartAndRunAll"),execute:A.delegateExecute(e,n.codeRunners,"restartAndRunAll")});const r=[t.runAll,t.restartAndRunAll].map((e=>({command:e})));n.addGroup([{command:t.run}],0),n.addGroup(r,999)}function h(e,n,a){n.menu.title.label=a.__("Settings"),n.addGroup([{command:"settingeditor:open"}],1e3)}function C(e,n,a,r){const d=e.commands;n.addGroup([{command:"application:activate-next-tab"},{command:"application:activate-previous-tab"},{command:"application:activate-next-tab-bar"},{command:"application:activate-previous-tab-bar"},{command:t.activatePreviouslyUsedTab}],0);const o=[];let u;d.addCommand(t.activateById,{label:n=>{const a=n.id||"",t=(0,l.find)(e.shell.widgets("main"),(e=>e.id===a));return t&&t.title.label||""},isToggled:n=>{const a=n.id||"";return!!e.shell.currentWidget&&e.shell.currentWidget.id===a},execute:n=>e.shell.activateById(n.id||"")});let c="";d.addCommand(t.activatePreviouslyUsedTab,{label:r.__("Activate Previously Used Tab"),isEnabled:()=>!!c,execute:()=>d.execute(t.activateById,{id:c})}),a&&e.restored.then((()=>{const r=()=>{u&&!u.isDisposed&&u.dispose(),o.length=0;let a=!1;(0,l.each)(e.shell.widgets("main"),(e=>{e.id===c&&(a=!0),o.push({command:t.activateById,args:{id:e.id}})})),u=n.addGroup(o,1),c=a?c:""};r(),a.layoutModified.connect((()=>{r()})),a.currentChanged.connect(((e,n)=>{const a=n.oldValue;a&&(c=a.id)}))}))}function w(e,n,a){n.menu.title.label=a.__("Help")}!function(e){e.openEdit="editmenu:open",e.undo="editmenu:undo",e.redo="editmenu:redo",e.clearCurrent="editmenu:clear-current",e.clearAll="editmenu:clear-all",e.find="editmenu:find",e.goToLine="editmenu:go-to-line",e.openFile="filemenu:open",e.closeAndCleanup="filemenu:close-and-cleanup",e.createConsole="filemenu:create-console",e.shutdown="filemenu:shutdown",e.logout="filemenu:logout",e.openKernel="kernelmenu:open",e.interruptKernel="kernelmenu:interrupt",e.reconnectToKernel="kernelmenu:reconnect-to-kernel",e.restartKernel="kernelmenu:restart",e.restartKernelAndClear="kernelmenu:restart-and-clear",e.restartAndRunToSelected="notebook:restart-and-run-to-selected",e.changeKernel="kernelmenu:change",e.shutdownKernel="kernelmenu:shutdown",e.shutdownAllKernels="kernelmenu:shutdownAll",e.openView="viewmenu:open",e.wordWrap="viewmenu:word-wrap",e.lineNumbering="viewmenu:line-numbering",e.matchBrackets="viewmenu:match-brackets",e.openRun="runmenu:open",e.run="runmenu:run",e.runAll="runmenu:run-all",e.restartAndRunAll="runmenu:restart-and-run-all",e.runAbove="runmenu:run-above",e.runBelow="runmenu:run-below",e.openTabs="tabsmenu:open",e.activateById="tabsmenu:activate-by-id",e.activatePreviouslyUsedTab="tabsmenu:activate-previously-used-tab",e.openSettings="settingsmenu:open",e.openHelp="helpmenu:open",e.openFirst="mainmenu:open-first"}(t||(t={}));const E={id:"@jupyterlab/mainmenu-extension:plugin",requires:[d.IRouter,i.ITranslator],optional:[o.ICommandPalette,d.ILabShell],provides:c.IMainMenu,activate:(e,n,a,l,r)=>{const{commands:d}=e,o=a.load("jupyterlab"),s=new c.MainMenu(d);s.id="jp-MainMenu",s.addClass("jp-scrollbar-tiny");const i=u.PageConfig.getOption("quitButton").toLowerCase();s.fileMenu.quitEntry="true"===i,m(e,s.editMenu,o),g(e,s.fileMenu,n,o),b(e,s.kernelMenu,o),_(e,s.runMenu,o),h(0,s.settingsMenu,o),p(e,s.viewMenu,o),w(0,s.helpMenu,o);const E=s.tabsMenu;E.menu.title.label=o.__("Tabs"),r&&C(e,E,r,o);const A=e=>{s.activeMenu=e,s.openActiveMenu()};return d.addCommand(t.openEdit,{label:o.__("Open Edit Menu"),execute:()=>A(s.editMenu.menu)}),d.addCommand(t.openFile,{label:o.__("Open File Menu"),execute:()=>A(s.fileMenu.menu)}),d.addCommand(t.openKernel,{label:o.__("Open Kernel Menu"),execute:()=>A(s.kernelMenu.menu)}),d.addCommand(t.openRun,{label:o.__("Open Run Menu"),execute:()=>A(s.runMenu.menu)}),d.addCommand(t.openView,{label:o.__("Open View Menu"),execute:()=>A(s.viewMenu.menu)}),d.addCommand(t.openSettings,{label:o.__("Open Settings Menu"),execute:()=>A(s.settingsMenu.menu)}),d.addCommand(t.openTabs,{label:o.__("Open Tabs Menu"),execute:()=>A(s.tabsMenu.menu)}),d.addCommand(t.openHelp,{label:o.__("Open Help Menu"),execute:()=>A(s.helpMenu.menu)}),d.addCommand(t.openFirst,{label:o.__("Open First Menu"),execute:()=>{s.activeIndex=0,s.openActiveMenu()}}),l&&(s.fileMenu.quitEntry&&(l.addItem({command:t.shutdown,category:o.__("Main Area")}),l.addItem({command:t.logout,category:o.__("Main Area")})),l.addItem({command:t.shutdownAllKernels,category:o.__("Kernel Operations")}),l.addItem({command:t.activatePreviouslyUsedTab,category:o.__("Main Area")})),e.shell.add(s,"menu",{rank:100}),s}};var A;!function(e){function n(e,n){for(const a of e)if(n(a))return a}e.delegateLabel=function(e,a,t){const l=e.shell.currentWidget,r=l?n(a,(e=>e.tracker.has(l))):void 0;if(r){const e=r.tracker.size;return r[t](e)}return""},e.delegateExecute=function(e,a,t){return()=>{const l=e.shell.currentWidget,r=l?n(a,(e=>e.tracker.has(l))):void 0;return r?(0,r[t])(l):Promise.resolve(void 0)}},e.delegateEnabled=function(e,a,t){return()=>{const l=e.shell.currentWidget,r=l?n(a,(e=>e.tracker.has(l))):void 0;return!!r&&!!r[t]&&(!r.isEnabled||!l||r.isEnabled(l))}},e.delegateToggled=function(e,a,t){return()=>{const l=e.shell.currentWidget,r=l?n(a,(e=>e.tracker.has(l))):void 0;return!!(r&&r[t]&&l&&r[t](l))}}}(A||(A={}))}}]);
//# sourceMappingURL=8771.bundle.js.map