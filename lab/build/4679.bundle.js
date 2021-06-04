(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[4679],{34679:(e,t,o)=>{"use strict";o.r(t),o.d(t,{fileUploadStatus:()=>F,launcherToolbarButton:()=>T,default:()=>D});var r,n,a=o(88647),s=o(19573),c=o(87939),i=o(70381),d=o(80498),l=o(94257),m=o(44588),u=o(49713),p=o(34016),w=o(17179),h=o(10189),g=o(79028),y=o(81443),f=o(77031);!function(e){e.copy="filebrowser:copy",e.copyDownloadLink="filebrowser:copy-download-link",e.createLauncher="filebrowser:create-main-launcher",e.cut="filebrowser:cut",e.del="filebrowser:delete",e.download="filebrowser:download",e.duplicate="filebrowser:duplicate",e.hideBrowser="filebrowser:hide-main",e.goToPath="filebrowser:go-to-path",e.goUp="filebrowser:go-up",e.openPath="filebrowser:open-path",e.open="filebrowser:open",e.openBrowserTab="filebrowser:open-browser-tab",e.paste="filebrowser:paste",e.createNewDirectory="filebrowser:create-new-directory",e.createNewFile="filebrowser:create-new-file",e.createNewMarkdownFile="filebrowser:create-new-markdown-file",e.rename="filebrowser:rename",e.copyShareableLink="filebrowser:share-main",e.copyPath="filebrowser:copy-path",e.showBrowser="filebrowser:activate",e.shutdown="filebrowser:shutdown",e.toggleBrowser="filebrowser:toggle-main",e.toggleNavigateToCurrentDirectory="filebrowser:toggle-navigate-to-current-directory",e.toggleLastModified="filebrowser:toggle-last-modified",e.search="filebrowser:search"}(r||(r={})),function(e){e.selectorBrowser=".jp-DirListing-content .jp-DirListing-itemText",e.selectorContent=".jp-DirListing-content",e.selectorItem=".jp-DirListing-item[data-isdir]",e.selectorNotDir='.jp-DirListing-item[data-isdir="false"]',e.selectorHeader=".jp-DirListing-header"}(n||(n={}));const b="filebrowser",I={id:"@jupyterlab/filebrowser-extension:browser",requires:[d.IFileBrowserFactory,w.ITranslator],optional:[a.ILayoutRestorer,m.ISettingRegistry,a.ITreePathUpdater,s.ICommandPalette,l.IMainMenu],autoStart:!0,activate:(e,t,o,a,c,i,d,l)=>{const m=o.load("jupyterlab"),u=t.defaultBrowser;u.node.setAttribute("role","region"),u.node.setAttribute("aria-label",m.__("File Browser Section")),a&&a.add(u,b),function(e,t,o,a,c,i){const d=o.load("jupyterlab"),{docRegistry:l,commands:m}=e,{defaultBrowser:u,tracker:p}=t;m.addCommand(r.del,{execute:()=>{const e=p.currentWidget;if(e)return e.delete()},icon:h.closeIcon.bindprops({stylesheet:"menuItem"}),label:d.__("Delete"),mnemonic:0}),m.addCommand(r.copy,{execute:()=>{const e=p.currentWidget;if(e)return e.copy()},icon:h.copyIcon.bindprops({stylesheet:"menuItem"}),label:d.__("Copy"),mnemonic:0}),m.addCommand(r.cut,{execute:()=>{const e=p.currentWidget;if(e)return e.cut()},icon:h.cutIcon.bindprops({stylesheet:"menuItem"}),label:d.__("Cut")}),m.addCommand(r.duplicate,{execute:()=>{const e=p.currentWidget;if(e)return e.duplicate()},icon:h.copyIcon.bindprops({stylesheet:"menuItem"}),label:d.__("Duplicate")}),m.addCommand(r.goToPath,{execute:async e=>{var n;const a=e.path||"",s=!(null!==(n=null==e?void 0:e.dontShowBrowser)&&void 0!==n&&n);try{if("directory"!==(await M.navigateToPath(a,t,o)).type&&s){const e=M.getBrowserForPath(a,t);if(e){e.clearSelectedItems();const t=a.split("/"),o=t[t.length-1];o&&await e.selectItemByName(o)}}}catch(e){console.warn(`${r.goToPath} failed to go to: ${a}`,e)}if(s)return m.execute(r.showBrowser,{path:a})}}),m.addCommand(r.goUp,{label:"go up",execute:async()=>{const e=M.getBrowserForPath("",t);if(!e)return;const{model:o}=e;if(await o.restored,o.path!==o.rootPath)try{await o.cd("..")}catch(e){console.warn(`${r.goUp} failed to go to parent directory of ${o.path}`,e)}}}),m.addCommand(r.openPath,{label:e=>e.path?d.__("Open %1",e.path):d.__("Open from Path…"),caption:e=>e.path?d.__("Open %1",e.path):d.__("Open from path"),execute:async e=>{var o;let n;if(n=(null==e?void 0:e.path)?e.path:null!==(o=(await s.InputDialog.getText({label:d.__("Path"),placeholder:"/path/relative/to/jlab/root",title:d.__("Open Path"),okLabel:d.__("Open")})).value)&&void 0!==o?o:void 0,n)try{const o="/"!==n&&n.endsWith("/");o&&(n=n.slice(0,n.length-1));const a=M.getBrowserForPath(n,t),{services:s}=a.model.manager,c=await s.contents.get(n,{content:!1});if(o&&"directory"!==c.type)throw new Error(`Path ${n}/ is not a directory`);if(await m.execute(r.goToPath,{path:n,dontShowBrowser:e.dontShowBrowser}),"directory"===c.type)return;return m.execute("docmanager:open",{path:n})}catch(e){return e.response&&404===e.response.status&&(e.message=d.__("Could not find path: %1",n)),(0,s.showErrorMessage)(d.__("Cannot open"),e)}}}),c&&c.addItem({command:r.openPath,category:d.__("File Operations")}),m.addCommand(r.open,{execute:e=>{const t=e.factory||void 0,o=p.currentWidget;if(!o)return;const{contents:r}=o.model.manager.services;return Promise.all((0,g.toArray)((0,g.map)(o.selectedItems(),(e=>{if("directory"===e.type){const t=r.localPath(e.path);return o.model.cd(`/${t}`)}return m.execute("docmanager:open",{factory:t,path:e.path})}))))},icon:e=>{var t;const o=e.factory||void 0;if(o){const e=l.getFileType(o);return null===(t=null==e?void 0:e.icon)||void 0===t?void 0:t.bindprops({stylesheet:"menuItem"})}return h.folderIcon.bindprops({stylesheet:"menuItem"})},label:e=>e.label||e.factory||d.__("Open"),mnemonic:0}),m.addCommand(r.paste,{execute:()=>{const e=p.currentWidget;if(e)return e.paste()},icon:h.pasteIcon.bindprops({stylesheet:"menuItem"}),label:d.__("Paste"),mnemonic:0}),m.addCommand(r.createNewDirectory,{execute:()=>{const e=p.currentWidget;if(e)return e.createNewDirectory()},icon:h.newFolderIcon.bindprops({stylesheet:"menuItem"}),label:d.__("New Folder")}),m.addCommand(r.createNewFile,{execute:()=>{const e=p.currentWidget;if(e)return e.createNewFile({ext:"txt"})},icon:h.textEditorIcon.bindprops({stylesheet:"menuItem"}),label:d.__("New File")}),m.addCommand(r.createNewMarkdownFile,{execute:()=>{const e=p.currentWidget;if(e)return e.createNewFile({ext:"md"})},icon:h.markdownIcon.bindprops({stylesheet:"menuItem"}),label:d.__("New Markdown File")}),m.addCommand(r.rename,{execute:e=>{const t=p.currentWidget;if(t)return t.rename()},icon:h.editIcon.bindprops({stylesheet:"menuItem"}),label:d.__("Rename"),mnemonic:0}),m.addCommand(r.copyPath,{execute:()=>{const e=p.currentWidget;if(!e)return;const t=e.selectedItems().next();t&&s.Clipboard.copyToSystem(t.path)},isVisible:()=>!!p.currentWidget&&void 0!==p.currentWidget.selectedItems().next,icon:h.fileIcon.bindprops({stylesheet:"menuItem"}),label:d.__("Copy Path")}),m.addCommand(r.shutdown,{execute:()=>{const e=p.currentWidget;if(e)return e.shutdownKernels()},icon:h.stopIcon.bindprops({stylesheet:"menuItem"}),label:d.__("Shut Down Kernel")}),m.addCommand(r.toggleBrowser,{execute:()=>u.isHidden?m.execute(r.showBrowser,void 0):m.execute(r.hideBrowser,void 0)}),m.addCommand(r.createLauncher,{label:d.__("New Launcher"),execute:()=>M.createLauncher(m,u)}),a&&m.addCommand(r.toggleNavigateToCurrentDirectory,{label:d.__("Show Active File in File Browser"),isToggled:()=>u.navigateToCurrentDirectory,execute:()=>{const e=!u.navigateToCurrentDirectory;return a.set("@jupyterlab/filebrowser-extension:browser","navigateToCurrentDirectory",e).catch((e=>{console.error("Failed to set navigateToCurrentDirectory setting")}))}}),m.addCommand(r.toggleLastModified,{label:d.__("Show Last Modified Column"),isToggled:()=>u.showLastModifiedColumn,execute:()=>{const e=!u.showLastModifiedColumn;if(a)return a.set("@jupyterlab/filebrowser-extension:browser","showLastModifiedColumn",e).catch((e=>{console.error("Failed to set showLastModifiedColumn setting")}))}}),m.addCommand(r.search,{label:d.__("Search on File Names"),execute:()=>alert("search")}),i&&i.settingsMenu.addGroup([{command:r.toggleNavigateToCurrentDirectory}],5),c&&c.addItem({command:r.toggleNavigateToCurrentDirectory,category:d.__("File Operations")}),e.contextMenu.addItem({type:"separator",selector:n.selectorContent,rank:0}),e.contextMenu.addItem({command:r.createNewDirectory,selector:n.selectorContent,rank:1}),e.contextMenu.addItem({command:r.createNewFile,selector:n.selectorContent,rank:2}),e.contextMenu.addItem({command:r.createNewMarkdownFile,selector:n.selectorContent,rank:3}),e.contextMenu.addItem({command:r.paste,selector:n.selectorContent,rank:4}),e.contextMenu.addItem({command:r.open,selector:n.selectorItem,rank:1}),e.contextMenu.addItem({type:"separator",selector:n.selectorItem,rank:4}),e.contextMenu.addItem({command:r.rename,selector:n.selectorItem,rank:5}),e.contextMenu.addItem({command:r.del,selector:n.selectorItem,rank:6}),e.contextMenu.addItem({command:r.cut,selector:n.selectorItem,rank:7}),e.contextMenu.addItem({command:r.copy,selector:n.selectorNotDir,rank:8}),e.contextMenu.addItem({command:r.duplicate,selector:n.selectorNotDir,rank:9}),e.contextMenu.addItem({type:"separator",selector:n.selectorItem,rank:10}),e.contextMenu.addItem({command:r.shutdown,selector:n.selectorNotDir,rank:11}),e.contextMenu.addItem({type:"separator",selector:n.selectorItem,rank:12}),e.contextMenu.addItem({command:r.copyShareableLink,selector:n.selectorItem,rank:15}),e.contextMenu.addItem({command:r.copyPath,selector:n.selectorItem,rank:14}),e.contextMenu.addItem({command:r.toggleLastModified,selector:n.selectorHeader,rank:14}),e.commands.addKeyBinding({command:r.del,selector:n.selectorBrowser,keys:["Delete"]}),e.commands.addKeyBinding({command:r.cut,selector:n.selectorBrowser,keys:["Ctrl X"]}),e.commands.addKeyBinding({command:r.copy,selector:n.selectorBrowser,keys:["Ctrl C"]}),e.commands.addKeyBinding({command:r.paste,selector:n.selectorBrowser,keys:["Ctrl V"]}),e.commands.addKeyBinding({command:r.rename,selector:n.selectorBrowser,keys:["F2"]}),e.commands.addKeyBinding({command:r.duplicate,selector:n.selectorBrowser,keys:["Ctrl D"]})}(e,t,o,c,d,l),u.title.icon=h.folderIcon;const p=()=>{const t=(0,g.find)(e.commands.keyBindings,(e=>e.command===r.toggleBrowser));if(t){const e=y.CommandRegistry.formatKeystroke(t.keys.join(" "));u.title.caption=m.__("File Browser (%1)",e)}else u.title.caption=m.__("File Browser")};p(),e.commands.keyBindingChanged.connect((()=>{p()})),Promise.all([e.restored,u.model.restored]).then((()=>{i&&u.model.pathChanged.connect(((e,t)=>{i(t.newValue)}));let e=!1,t=!0,o=!0;c&&c.load("@jupyterlab/filebrowser-extension:browser").then((r=>{r.changed.connect((t=>{e=t.get("navigateToCurrentDirectory").composite,u.navigateToCurrentDirectory=e})),e=r.get("navigateToCurrentDirectory").composite,u.navigateToCurrentDirectory=e,r.changed.connect((e=>{t=e.get("showLastModifiedColumn").composite,u.showLastModifiedColumn=t})),t=r.get("showLastModifiedColumn").composite,u.showLastModifiedColumn=t,r.changed.connect((e=>{o=e.get("useFuzzyFilter").composite,u.useFuzzyFilter=o})),o=r.get("useFuzzyFilter").composite,u.useFuzzyFilter=o}))}))}},x={id:"@jupyterlab/filebrowser-extension:factory",provides:d.IFileBrowserFactory,requires:[i.IDocumentManager,w.ITranslator],optional:[u.IStateDB,a.IRouter,a.JupyterFrontEnd.ITreeResolver],activate:async(e,t,o,r,n,a)=>{const{commands:c}=e,i=new s.WidgetTracker({namespace:b}),l=(e,n={})=>{var a;const s=new d.FilterFileBrowserModel({translator:o,auto:null===(a=n.auto)||void 0===a||a,manager:t,driveName:n.driveName||"",refreshInterval:n.refreshInterval,state:null===n.state?void 0:n.state||r||void 0}),c=n.restore,l=new d.FileBrowser({id:e,model:s,restore:c,translator:o});return i.add(l),l},m=l("filebrowser",{auto:!1,restore:!1});return M.restoreBrowser(m,c,n,a),{createFileBrowser:l,defaultBrowser:m,tracker:i}}},C={id:"@jupyterlab/filebrowser-extension:download",requires:[d.IFileBrowserFactory,w.ITranslator],autoStart:!0,activate:(e,t,o)=>{const a=o.load("jupyterlab"),{commands:c}=e,{tracker:i}=t;c.addCommand(r.download,{execute:()=>{const e=i.currentWidget;if(e)return e.download()},icon:h.downloadIcon.bindprops({stylesheet:"menuItem"}),label:a.__("Download")}),c.addCommand(r.copyDownloadLink,{execute:()=>{const e=i.currentWidget;if(e)return e.model.manager.services.contents.getDownloadUrl(e.selectedItems().next().path).then((e=>{s.Clipboard.copyToSystem(e)}))},icon:h.copyIcon.bindprops({stylesheet:"menuItem"}),label:a.__("Copy Download Link"),mnemonic:0}),e.contextMenu.addItem({command:r.download,selector:n.selectorNotDir,rank:9}),e.contextMenu.addItem({command:r.copyDownloadLink,selector:n.selectorNotDir,rank:13})}},_={id:"@jupyterlab/filebrowser-extension:widget",requires:[i.IDocumentManager,d.IFileBrowserFactory,w.ITranslator,a.ILabShell],autoStart:!0,activate:(e,t,o,n,a)=>{const{commands:s}=e,{defaultBrowser:c,tracker:i}=o;a.add(c,"left",{rank:100}),s.addCommand(r.showBrowser,{execute:e=>{const t=e.path||"",r=M.getBrowserForPath(t,o);if(r)if(c!==r){const e=["left","right"];for(const t of e){const e=a.widgets(t);let o=e.next();for(;o;){if(o.contains(r))return void a.activateById(o.id);o=e.next()}}}else a.activateById(c.id)}}),s.addCommand(r.hideBrowser,{execute:()=>{const e=i.currentWidget;e&&!e.isHidden&&a.collapseLeft()}}),a.restored.then((e=>{e.fresh&&"single-document"!==a.mode&&s.execute(r.showBrowser,void 0)})),Promise.all([e.restored,c.model.restored]).then((()=>{function e(){a.isEmpty("main")&&s.hasCommand("launcher:create")&&M.createLauncher(s,c)}a.layoutModified.connect((()=>{e()})),a.currentChanged.connect((async(e,a)=>{if(c.navigateToCurrentDirectory&&a.newValue){const{newValue:e}=a,s=t.contextForWidget(e);if(s){const{path:e}=s;try{await M.navigateToPath(e,o,n)}catch(t){console.warn(`${r.goToPath} failed to open: ${e}`,t)}}}})),e()}))}},v={id:"@jupyterlab/filebrowser-extension:share-file",requires:[d.IFileBrowserFactory,w.ITranslator],autoStart:!0,activate:(e,t,o)=>{const n=o.load("jupyterlab"),{commands:a}=e,{tracker:i}=t;a.addCommand(r.copyShareableLink,{execute:()=>{const e=i.currentWidget,t=null==e?void 0:e.selectedItems().next();t&&s.Clipboard.copyToSystem(c.URLExt.normalize(c.PageConfig.getUrl({mode:"single-document",workspace:c.PageConfig.defaultWorkspace,treePath:t.path})))},isVisible:()=>!!i.currentWidget&&1===(0,g.toArray)(i.currentWidget.selectedItems()).length,icon:h.linkIcon.bindprops({stylesheet:"menuItem"}),label:n.__("Copy Shareable Link")})}},B={id:"@jupyterlab/filebrowser-extension:open-with",requires:[d.IFileBrowserFactory,w.ITranslator],autoStart:!0,activate:(e,t,o)=>{const{docRegistry:a,commands:s}=e,c=o.load("jupyterlab"),{tracker:i}=t;class d extends f.Menu{onBeforeAttach(e){this.clearItems();const t=i.currentWidget?d._intersection((0,g.map)(i.currentWidget.selectedItems(),(e=>d._getFactories(e)))):void 0;t&&t.forEach((e=>{this.addItem({args:{factory:e},command:r.open})})),super.onBeforeAttach(e)}static _getFactories(e){var t;const o=a.preferredWidgetFactories(e.path).map((e=>e.name)),r=null===(t=a.getWidgetFactory("notebook"))||void 0===t?void 0:t.name;return r&&"notebook"===e.type&&-1===o.indexOf(r)&&o.unshift(r),o}static _intersection(e){const t=e.next();if(!t)return;const o=new Set(t);return(0,g.reduce)(e,((e,t)=>new Set(t.filter((t=>e.has(t))))),o)}}const l=new d({commands:s});l.title.label=c.__("Open With"),e.contextMenu.addItem({type:"submenu",submenu:l,selector:n.selectorNotDir,rank:2})}},k={id:"@jupyterlab/filebrowser-extension:open-browser-tab",requires:[d.IFileBrowserFactory,w.ITranslator],autoStart:!0,activate:(e,t,o)=>{const{commands:a}=e,s=o.load("jupyterlab"),{tracker:c}=t;a.addCommand(r.openBrowserTab,{execute:()=>{const e=c.currentWidget;if(e)return Promise.all((0,g.toArray)((0,g.map)(e.selectedItems(),(e=>a.execute("docmanager:open-browser-tab",{path:e.path})))))},icon:h.addIcon.bindprops({stylesheet:"menuItem"}),label:s.__("Open in New Browser Tab"),mnemonic:0}),e.contextMenu.addItem({command:r.openBrowserTab,selector:n.selectorNotDir,rank:3})}},F={id:"@jupyterlab/filebrowser-extension:file-upload-status",autoStart:!0,requires:[d.IFileBrowserFactory,w.ITranslator],optional:[p.IStatusBar],activate:(e,t,o,r)=>{if(!r)return;const n=new d.FileUploadStatus({tracker:t.tracker,translator:o});r.registerStatusItem("@jupyterlab/filebrowser-extension:file-upload-status",{item:n,align:"middle",isActive:()=>!!n.model&&n.model.items.length>0,activeStateChanged:n.model.stateChanged})}},T={id:"@jupyterlab/filebrowser-extension:launcher-toolbar-button",autoStart:!0,requires:[d.IFileBrowserFactory,w.ITranslator],activate:(e,t,o)=>{const{commands:r}=e,n=o.load("jupyterlab"),{defaultBrowser:a}=t,c=new s.ToolbarButton({icon:h.addIcon,onClick:()=>{if(r.hasCommand("launcher:create"))return M.createLauncher(r,a)},tooltip:n.__("New Launcher"),actualOnClick:!0});a.toolbar.insertItem(0,"launch",c)}};var M;!function(e){e.createLauncher=function(e,t){const{model:o}=t;return e.execute("launcher:create",{cwd:o.path}).then((e=>(o.pathChanged.connect((()=>{e.content&&(e.content.cwd=o.path)}),e),e)))},e.getBrowserForPath=function(e,t){const{defaultBrowser:o,tracker:n}=t,a=o.model.manager.services.contents.driveName(e);if(a){return n.find((e=>e.model.driveName===a))||void console.warn(`${r.goToPath} failed to find filebrowser for path: ${e}`)}return o},e.navigateToPath=async function(t,o,r){const n=r.load("jupyterlab"),a=e.getBrowserForPath(t,o);if(!a)throw new Error(n.__("No browser for path"));const{services:s}=a.model.manager,i=s.contents.localPath(t);await s.ready;const d=await s.contents.get(t,{content:!1}),{model:l}=a;return await l.restored,"directory"===d.type?await l.cd(`/${i}`):await l.cd(`/${c.PathExt.dirname(i)}`),d},e.restoreBrowser=async function(e,t,o,n){const a="jp-mod-restoring";if(e.addClass(a),!o)return await e.model.restore(e.id),await e.model.refresh(),void e.removeClass(a);const s=async()=>{o.routed.disconnect(s);const c=await(null==n?void 0:n.paths);(null==c?void 0:c.file)||(null==c?void 0:c.browser)?(await e.model.restore(e.id,!1),c.file&&await t.execute(r.openPath,{path:c.file,dontShowBrowser:!0}),c.browser&&await t.execute(r.openPath,{path:c.browser,dontShowBrowser:!0})):(await e.model.restore(e.id),await e.model.refresh()),e.removeClass(a)};o.routed.connect(s)}}(M||(M={}));const D=[x,I,v,F,C,_,T,B,k]}}]);
//# sourceMappingURL=4679.bundle.js.map