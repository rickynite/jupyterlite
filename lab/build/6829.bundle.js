(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[6829],{56829:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>q,toggleHeader:()=>M});var n,o,s=a(88647),r=a(19573),i=a(87939),l=a(49713),c=a(17179),d=a(10189),u=a(66065),m=a(98669),p=a(87598),g=a(79028),h=a(81443),y=a(77031);!function(e){e.activate="apputils:activate-command-palette"}(n||(n={}));class b{constructor(e,t){this.translator=t||c.nullTranslator;const a=this.translator.load("jupyterlab");this._palette=e,this._palette.title.label="",this._palette.title.caption=a.__("Command Palette")}set placeholder(e){this._palette.inputNode.placeholder=e}get placeholder(){return this._palette.inputNode.placeholder}activate(){this._palette.activate()}addItem(e){const t=this._palette.addItem(e);return new m.DisposableDelegate((()=>{this._palette.removeItem(t)}))}}!function(e){e.activate=function(t,a,s){const{commands:i,shell:l}=t,c=a.load("jupyterlab"),d=o.createPalette(t,a),u=new r.ModalCommandPalette({commandPalette:d});let m=!1;if(d.node.setAttribute("role","region"),d.node.setAttribute("aria-label",c.__("Command Palette Section")),l.add(d,"left",{rank:300}),s){const e=s.load("@jupyterlab/apputils-extension:palette"),a=e=>{const t=e.get("modal").composite;m&&!t?(d.parent=null,u.detach(),l.add(d,"left",{rank:300})):!m&&t&&(d.parent=null,u.palette=d,d.show(),u.attach()),m=t};Promise.all([e,t.restored]).then((([e])=>{a(e),e.changed.connect((e=>{a(e)}))})).catch((e=>{console.error(e.message)}))}const p=()=>{const e=(0,g.find)(t.commands.keyBindings,(e=>e.command===n.activate));if(e){const t=h.CommandRegistry.formatKeystroke(e.keys.join(" "));d.title.caption=c.__("Commands (%1)",t)}else d.title.caption=c.__("Commands")};return p(),t.commands.keyBindingChanged.connect((()=>{p()})),i.addCommand(n.activate,{execute:()=>{m?u.activate():l.activateById(d.id)},label:c.__("Activate Command Palette")}),d.inputNode.placeholder=c.__("SEARCH"),new e(d,a)},e.restore=function(e,t,a){const n=o.createPalette(e,a);t.add(n,"command-palette")}}(b||(b={})),function(e){let t;e.createPalette=function(e,a){if(!t){t=new y.CommandPalette({commands:e.commands,renderer:d.CommandPaletteSvg.defaultRenderer}),t.id="command-palette",t.title.icon=d.paletteIcon;const n=a.load("jupyterlab");t.title.label=n.__("Commands")}return t}}(o||(o={}));var v=a(44588);class f extends l.DataConnector{constructor(e){super(),this._throttlers=Object.create(null),this._connector=e}fetch(e){const t=this._throttlers;return e in t||(t[e]=new p.Throttler((()=>this._connector.fetch(e)),100)),t[e].invoke()}async list(e="all"){const{isDeferred:t,isDisabled:a}=i.PageConfig.Extension,{ids:n,values:o}=await this._connector.list();return"all"===e?{ids:n,values:o}:{ids:n.filter((e=>!t(e)&&!a(e))),values:o.filter((({id:e})=>!t(e)&&!a(e)))}}async save(e,t){await this._connector.save(e,t)}}const S={id:"@jupyterlab/apputils-extension:settings",activate:async e=>{const{isDisabled:t}=i.PageConfig.Extension,a=new f(e.serviceManager.settings),n=new v.SettingRegistry({connector:a,plugins:(await a.list("active")).values});return e.restored.then((async()=>{const e=await a.list("all");e.ids.forEach((async(a,o)=>{if(!t(a)&&!(a in n.plugins))try{await n.load(a)}catch(t){console.warn(`Settings failed to load for (${a})`,t),e.values[o].schema["jupyter.lab.transform"]&&console.warn(`This may happen if {autoStart: false} in (${a}) or if it is one of the deferredExtensions in page config.`)}}))})),n},autoStart:!0,provides:v.ISettingRegistry};var _,w=a(94257);!function(e){e.changeTheme="apputils:change-theme",e.themeScrollbars="apputils:theme-scrollbars",e.changeFont="apputils:change-font",e.incrFontSize="apputils:incr-font-size",e.decrFontSize="apputils:decr-font-size"}(_||(_={}));const k={id:"@jupyterlab/apputils-extension:themes",requires:[v.ISettingRegistry,s.JupyterFrontEnd.IPaths,c.ITranslator],optional:[r.ISplashScreen],activate:(e,t,a,n,o)=>{const s=n.load("jupyterlab"),l=e.shell,c=e.commands,d=i.URLExt.join(i.PageConfig.getBaseUrl(),a.urls.themes),u=k.id,m=new r.ThemeManager({key:u,host:l,settings:t,splash:null!=o?o:void 0,url:d});let p;return m.themeChanged.connect(((e,t)=>{p=t.newValue,document.body.dataset.jpThemeLight=String(m.isLight(p)),document.body.dataset.jpThemeName=p,document.body.dataset.jpThemeScrollbars!==String(m.themeScrollbars(p))&&(document.body.dataset.jpThemeScrollbars=String(m.themeScrollbars(p))),c.notifyCommandChanged(_.changeTheme)})),c.addCommand(_.changeTheme,{label:e=>{const t=e.theme,a=m.getDisplayName(t);return e.isPalette?s.__("Use Theme: %1",a):a},isToggled:e=>e.theme===p,execute:e=>{const t=e.theme;if(t!==m.theme)return m.setTheme(t)}}),c.addCommand(_.themeScrollbars,{label:s.__("Theme Scrollbars"),isToggled:()=>m.isToggledThemeScrollbars(),execute:()=>m.toggleThemeScrollbars()}),c.addCommand(_.changeFont,{label:e=>e.enabled?`${e.font}`:s.__("waiting for fonts"),isEnabled:e=>e.enabled,isToggled:e=>m.getCSS(e.key)===e.font,execute:e=>m.setCSSOverride(e.key,e.font)}),c.addCommand(_.incrFontSize,{label:e=>`${e.label}`,execute:e=>m.incrFontSize(e.key)}),c.addCommand(_.decrFontSize,{label:e=>`${e.label}`,execute:e=>m.decrFontSize(e.key)}),m},autoStart:!0,provides:r.IThemeManager},I={id:"@jupyterlab/apputils-extension:themes-palette-menu",requires:[r.IThemeManager,c.ITranslator],optional:[r.ICommandPalette,w.IMainMenu],activate:(e,t,a,n,o)=>{const s=a.load("jupyterlab"),r=e.commands;if(o){const a=new y.Menu({commands:r});a.title.label=s.__("JupyterLab Theme"),e.restored.then((()=>{t.themes.forEach((e=>{a.addItem({command:_.changeTheme,args:{isPalette:!1,theme:e}})})),a.addItem({type:"separator"}),a.addItem({command:_.themeScrollbars}),a.addItem({type:"separator"}),a.addItem({command:_.incrFontSize,args:{label:s.__("Increase Code Font Size"),key:"code-font-size"}}),a.addItem({command:_.decrFontSize,args:{label:s.__("Decrease Code Font Size"),key:"code-font-size"}}),a.addItem({type:"separator"}),a.addItem({command:_.incrFontSize,args:{label:s.__("Increase Content Font Size"),key:"content-font-size1"}}),a.addItem({command:_.decrFontSize,args:{label:s.__("Decrease Content Font Size"),key:"content-font-size1"}}),a.addItem({type:"separator"}),a.addItem({command:_.incrFontSize,args:{label:s.__("Increase UI Font Size"),key:"ui-font-size1"}}),a.addItem({command:_.decrFontSize,args:{label:s.__("Decrease UI Font Size"),key:"ui-font-size1"}})})),o.settingsMenu.addGroup([{type:"submenu",submenu:a}],0)}n&&e.restored.then((()=>{const e=s.__("Theme"),a=_.changeTheme;t.themes.forEach((t=>{n.addItem({command:a,args:{isPalette:!0,theme:t},category:e})})),n.addItem({command:_.themeScrollbars,category:e}),n.addItem({command:_.incrFontSize,args:{label:s.__("Increase Code Font Size"),key:"code-font-size"},category:e}),n.addItem({command:_.decrFontSize,args:{label:s.__("Decrease Code Font Size"),key:"code-font-size"},category:e}),n.addItem({command:_.incrFontSize,args:{label:s.__("Increase Content Font Size"),key:"content-font-size1"},category:e}),n.addItem({command:_.decrFontSize,args:{label:s.__("Decrease Content Font Size"),key:"content-font-size1"},category:e}),n.addItem({command:_.incrFontSize,args:{label:s.__("Increase UI Font Size"),key:"ui-font-size1"},category:e}),n.addItem({command:_.decrFontSize,args:{label:s.__("Decrease UI Font Size"),key:"ui-font-size1"},category:e})}))},autoStart:!0};var C,T=a(23986),x=a(80498);!function(e){e.saveWorkspace="workspace-ui:save",e.saveWorkspaceAs="workspace-ui:save-as"}(C||(C={}));const j="jupyterlab-workspace",F="."+j,z="workspace-ui:lastSave",E={id:"@jupyterlab/apputils-extension:workspaces",autoStart:!0,requires:[w.IMainMenu,x.IFileBrowserFactory,r.IWindowResolver,l.IStateDB,c.ITranslator],optional:[s.IRouter],activate:(e,t,a,n,o,s,r)=>{const i=s.load("jupyterlab"),l={name:j,contentType:"file",fileFormat:"text",displayName:i.__("JupyterLab workspace File"),extensions:[F],mimeTypes:["text/json"],iconClass:"jp-JupyterIcon"};e.docRegistry.addFileType(l);const c=new P.WorkspaceFactory(e.serviceManager.workspaces,r,o,s);e.docRegistry.addWidgetFactory(c),e.commands.addCommand(C.saveWorkspaceAs,{label:i.__("Save Current Workspace As…"),execute:async()=>{const t=e.serviceManager.workspaces.fetch(n.name);await P.saveAs(a.defaultBrowser,e.serviceManager.contents,t,o,s)}}),e.commands.addCommand(C.saveWorkspace,{label:i.__("Save Current Workspace"),execute:async()=>{const{contents:t}=e.serviceManager,r=e.serviceManager.workspaces.fetch(n.name),i=await o.fetch(z);void 0===i?await P.saveAs(a.defaultBrowser,t,r,o,s):await P.save(i,t,r,o)}}),t.fileMenu.addGroup([{command:C.saveWorkspaceAs},{command:C.saveWorkspace}],40)}};var P,W;!function(e){async function t(e,t,a,n){let o=e.split("/").pop();void 0!==o&&o.includes(".")?o=o.split(".")[0]:e+=F,await n.save(z,e);const s=await a;s.metadata.id=`/lab/workspaces/${o}`,await t.save(e,{type:"file",format:"text",content:JSON.stringify(s)})}e.save=t,e.saveAs=async function(e,a,o,s,i){var l;i=i||c.nullTranslator;const d=await s.fetch(z);let u;u=void 0===d?"new-workspace":null===(l=d.split("/").pop())||void 0===l?void 0:l.split(".")[0];const m=e.model.path+"/"+u+F,p=await async function(e,t){const a=(t=t||c.nullTranslator).load("jupyterlab"),o=r.Dialog.okButton({label:a.__("Save")}),s=await(0,r.showDialog)({title:a.__("Save Current Workspace As..."),body:new n(e),buttons:[r.Dialog.cancelButton({label:a.__("Cancel")}),o]});return s.button.label===a.__("Save")?s.value:null}(m,i);p&&await t(p,a,o,s)};class a extends T.ABCWidgetFactory{constructor(e,t,a,n){super({name:(n=n||c.nullTranslator).load("jupyterlab").__("Workspace loader"),fileTypes:[j],defaultFor:[j],readOnly:!0}),this.workspaces=e,this.router=t,this.state=a}createNewWidget(e){return e.ready.then((async()=>{const t=e.model.toJSON(),a=e.path,n=t.metadata.id;await this.workspaces.save(n,t),await this.state.save(z,a),this.router?this.router.navigate(n,{hard:!0}):document.location.href=n})),function(e){const t=new T.DocumentWidget({content:new y.Widget,context:e});return t.content.dispose(),t}(e)}}e.WorkspaceFactory=a;class n extends y.Widget{constructor(e){super({node:o(e)})}getValue(){return this.node.value}}function o(e){const t=document.createElement("input");return t.value=e,t}}(P||(P={})),function(e){e.loadState="apputils:load-statedb",e.print="apputils:print",e.reset="apputils:reset",e.resetOnLoad="apputils:reset-on-load",e.runFirstEnabled="apputils:run-first-enabled",e.toggleHeader="apputils:toggle-header"}(W||(W={}));const R={id:"@jupyterlab/apputils-extension:palette",autoStart:!0,requires:[c.ITranslator],provides:r.ICommandPalette,optional:[v.ISettingRegistry],activate:(e,t,a)=>b.activate(e,t,a)},D={id:"@jupyterlab/apputils-extension:palette-restorer",autoStart:!0,requires:[s.ILayoutRestorer,c.ITranslator],activate:(e,t,a)=>{b.restore(e,t,a)}},L={id:"@jupyterlab/apputils-extension:resolver",autoStart:!0,provides:r.IWindowResolver,requires:[s.JupyterFrontEnd.IPaths,s.IRouter],activate:async(e,t,a)=>{const{hash:n,search:o}=a.current,s=i.URLExt.queryStringToObject(o||""),l=new r.WindowResolver,c=i.PageConfig.getOption("workspace"),d=i.PageConfig.getOption("treePath"),u="multiple-document"===i.PageConfig.getOption("mode")?"lab":"doc",m=c||i.PageConfig.defaultWorkspace,p=d?i.URLExt.join("tree",d):"";try{return await l.resolve(m),l}catch(e){return new Promise((()=>{const{base:e}=t.urls,o="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",r=o[Math.floor(Math.random()*o.length)];let l=i.URLExt.join(e,u,"workspaces",`auto-${r}`);l=p?i.URLExt.join(l,i.URLExt.encodeParts(p)):l,s.reset="";const c=l+i.URLExt.objectToQueryString(s)+(n||"");a.navigate(c,{hard:!0})}))}}},U={id:"@jupyterlab/apputils-extension:splash",autoStart:!0,requires:[c.ITranslator],provides:r.ISplashScreen,activate:(e,t)=>{const a=t.load("jupyterlab"),{commands:n,restored:o}=e,s=document.createElement("div"),i=document.createElement("div"),l=document.createElement("div");let c;s.id="jupyterlab-splash",i.id="galaxy",l.id="main-logo",d.jupyterFaviconIcon.element({container:l,stylesheet:"splash"}),i.appendChild(l),["1","2","3"].forEach((e=>{const t=document.createElement("div"),a=document.createElement("div");t.id=`moon${e}`,t.className="moon orbit",a.id=`planet${e}`,a.className="planet",t.appendChild(a),i.appendChild(t)})),s.appendChild(i);const u=new p.Throttler((async()=>{if(!c){c=new r.Dialog({title:a.__("Loading..."),body:a.__("The loading screen is taking a long time.\nWould you like to clear the workspace or keep waiting?"),buttons:[r.Dialog.cancelButton({label:a.__("Keep Waiting")}),r.Dialog.warnButton({label:a.__("Clear Workspace")})]});try{const e=await c.launch();if(c.dispose(),c=null,e.button.accept&&n.hasCommand(W.reset))return n.execute(W.reset);requestAnimationFrame((()=>{u.invoke().catch((e=>{}))}))}catch(e){}}}),{limit:12e3,edge:"trailing"});let g=0;return{show:(e=!0)=>(s.classList.remove("splash-fade"),s.classList.toggle("light",e),s.classList.toggle("dark",!e),g++,document.body.appendChild(s),u.invoke().catch((e=>{})),new m.DisposableDelegate((async()=>{await o,0==--g&&(u.stop(),c&&(c.dispose(),c=null),s.classList.add("splash-fade"),window.setTimeout((()=>{document.body.removeChild(s)}),200))})))}}},A={id:"@jupyterlab/apputils-extension:print",autoStart:!0,requires:[c.ITranslator],activate:(e,t)=>{const a=t.load("jupyterlab");e.commands.addCommand(W.print,{label:a.__("Print…"),isEnabled:()=>{const t=e.shell.currentWidget;return null!==r.Printing.getPrintFunction(t)},execute:async()=>{const t=e.shell.currentWidget,a=r.Printing.getPrintFunction(t);a&&await a()}})}},M={id:"@jupyterlab/apputils-extension:toggle-header",autoStart:!0,requires:[c.ITranslator],optional:[r.ICommandPalette],activate:(e,t,a)=>{const n=t.load("jupyterlab"),o=n.__("Main Area");e.commands.addCommand(W.toggleHeader,{label:n.__("Show Header Above Content"),isEnabled:()=>e.shell.currentWidget instanceof r.MainAreaWidget&&e.shell.currentWidget.contentHeader.widgets.length>0,isToggled:()=>{const t=e.shell.currentWidget;return t instanceof r.MainAreaWidget&&!t.contentHeader.isHidden},execute:async()=>{const t=e.shell.currentWidget;t instanceof r.MainAreaWidget&&t.contentHeader.setHidden(!t.contentHeader.isHidden)}}),a&&a.addItem({command:W.toggleHeader,category:o})}},O={id:"@jupyterlab/apputils-extension:state",autoStart:!0,provides:l.IStateDB,requires:[s.JupyterFrontEnd.IPaths,s.IRouter,c.ITranslator],optional:[r.IWindowResolver],activate:(e,t,a,n,o)=>{const s=n.load("jupyterlab");if(null===o)return new l.StateDB;let r=!1;const{commands:c,name:d,serviceManager:m}=e,{workspaces:g}=m,h=o.name,y=new u.PromiseDelegate,b=new l.StateDB({transform:y.promise}),v=new p.Debouncer((async()=>{const e=h,t={id:e},a=await b.toJSON();await g.save(e,{data:a,metadata:t})}));return b.changed.connect((()=>{v.invoke()}),b),b.changed.connect((()=>async function(e,t,a){var n,o;const s=await t.toJSON();let r=null===(o=null===(n=s["layout-restorer:data"])||void 0===n?void 0:n.main)||void 0===o?void 0:o.current;if(void 0===r)document.title="JupyterLab"+(e.startsWith("auto-")?` (${e})`:"");else{r=r.split(":")[1].slice(0,15);const t=Object.keys(s).filter((e=>e.startsWith("notebook")||e.startsWith("editor"))).length;e.startsWith("auto-")?document.title=`${r} (${e}${t>1?` : ${t}`:""}) - ${a}`:document.title=`${r}${t>1?` (${t})`:""} - ${a}`}}(h,b,d))),c.addCommand(W.loadState,{execute:async e=>{if(r)return;const{hash:n,path:o,search:s}=e,{urls:l}=t,c=i.URLExt.queryStringToObject(s||""),d="string"==typeof c.clone?""===c.clone?i.URLExt.join(l.base,l.app):i.URLExt.join(l.base,l.app,"workspaces",c.clone):null,u=d||h||null;if(null!==u){try{const e=await g.fetch(u);r||(r=!0,y.resolve({type:"overwrite",contents:e.data}))}catch({message:e}){console.warn(`Fetching workspace "${h}" failed.`,e),r||(r=!0,y.resolve({type:"cancel",contents:null}))}if(u===d){delete c.clone;const e=o+i.URLExt.objectToQueryString(c)+n,t=v.invoke().then((()=>a.stop));return t.then((()=>{a.navigate(e)})),t}await v.invoke()}else console.error(`${W.loadState} cannot load null workspace.`)}}),c.addCommand(W.reset,{label:s.__("Reset Application State"),execute:async({reload:e})=>{await b.clear(),await v.invoke(),e&&a.reload()}}),c.addCommand(W.resetOnLoad,{execute:e=>{const{hash:t,path:n,search:o}=e,s=i.URLExt.queryStringToObject(o||""),l="clone"in s;if(!("reset"in s))return;if(r)return a.reload();r=!0,y.resolve({type:"clear",contents:null}),delete s.reset;const c=n+i.URLExt.objectToQueryString(s)+t,d=b.clear().then((()=>v.invoke()));return l?d.then((()=>{a.navigate(c,{hard:!0})})):d.then((()=>{a.navigate(c)})),d}}),a.register({command:W.loadState,pattern:/.?/,rank:30}),a.register({command:W.resetOnLoad,pattern:/(\?reset|\&reset)($|&)/,rank:20}),b}},$={id:"@jupyterlab/apputils-extension:sessionDialogs",provides:r.ISessionContextDialogs,autoStart:!0,activate:()=>r.sessionContextDialogs},B={id:"@jupyterlab/apputils-extension:utilityCommands",requires:[c.ITranslator],autoStart:!0,activate:(e,t)=>{const a=t.load("jupyterlab"),{commands:n}=e;n.addCommand(W.runFirstEnabled,{label:a.__("Run First Enabled Command"),execute:t=>{const a=t.commands,n=t.args,o=Array.isArray(t);for(let t=0;t<a.length;t++){const s=a[t],r=o?n[t]:n;if(e.commands.isEnabled(s,r))return e.commands.execute(s,r)}}})}},q=[R,D,A,L,{id:"@jupyter/apputils-extension:sanitizer",autoStart:!0,provides:r.ISanitizer,activate:()=>r.defaultSanitizer},S,O,U,$,k,I,M,B,E]}}]);
//# sourceMappingURL=6829.bundle.js.map