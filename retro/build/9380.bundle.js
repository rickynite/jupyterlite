(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[9380,6238],{89380:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>h});var l,n=s(19573),a=s(87939),r=s(44588);class o extends n.ThemeManager{constructor(e){super(e),this._link=void 0,this._themesUrl="",this._themesUrl=e.url}loadCSS(e){const t=a.URLExt.join(this._themesUrl,e);return new Promise(((e,s)=>{const l=document.createElement("link");l.setAttribute("rel","stylesheet"),l.setAttribute("type","text/css"),l.setAttribute("href",t),l.addEventListener("load",(()=>{e(void 0)})),l.addEventListener("error",(()=>{s(`Stylesheet failed to load: ${t}`)})),this._link=l,this._unloadCSS(),document.body.appendChild(l)}))}_unloadCSS(){var e,t;null===(t=null===(e=this._link)||void 0===e?void 0:e.parentElement)||void 0===t||t.removeChild(this._link)}}!function(e){e.changeTheme="apputils:change-theme",e.themeScrollbars="apputils:theme-scrollbars"}(l||(l={}));const i={id:"@jupyterlite/apputils-extension:themes",autoStart:!0,provides:n.IThemeManager,requires:[r.ISettingRegistry],optional:[n.ISplashScreen],activate:(e,t,s)=>{const n=e.shell,r=e.commands,h=i.id,d=a.PageConfig.getOption("themesUrl"),m=new o({key:h,host:n,settings:t,splash:null!=s?s:void 0,url:d});return m.themeChanged.connect(((e,t)=>{const s=t.newValue;document.body.dataset.jpThemeLight=String(m.isLight(s)),document.body.dataset.jpThemeName=s,document.body.dataset.jpThemeScrollbars!==String(m.themeScrollbars(s))&&(document.body.dataset.jpThemeScrollbars=String(m.themeScrollbars(s))),m.loadCSSOverrides(),r.notifyCommandChanged(l.changeTheme)})),r.addCommand(l.changeTheme,{label:e=>{const t=e.theme,s=m.getDisplayName(t);return e.isPalette?`Use Theme: ${s}`:s},isToggled:e=>void 0===e.theme,execute:e=>{const t=e.theme;if(t!==m.theme)return m.setTheme(t)}}),r.addCommand(l.themeScrollbars,{label:"Theme Scrollbars",isToggled:()=>m.isToggledThemeScrollbars(),execute:()=>m.toggleThemeScrollbars()}),m}},h=[i]}}]);
//# sourceMappingURL=9380.bundle.js.map