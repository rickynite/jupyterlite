(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[3283,486],{90486:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>c});var n=o(88647),r=o(87939),a=o(70381),i=o(92691),d=o(77031);const p=new RegExp("/(notebooks|edit)\\/?\\?path=(.*)"),c=[{id:"@jupyterlite/retro-application-extension:docmanager",requires:[a.IDocumentManager],autoStart:!0,activate:(e,t)=>{const o=r.PageConfig.getBaseUrl(),n=t.open;t.open=(e,a="default",i,d)=>{if("_noref"===(null==d?void 0:d.ref))return void n.call(t,e,a,i,d);const p=".ipynb"===r.PathExt.extname(e)?"notebooks":"edit";window.open(`${o}retro/${p}?path=${e}`)}}},{id:"@jupyterlite/retro-application-extension:logo",autoStart:!0,activate:e=>{const t=r.PageConfig.getBaseUrl(),o=document.createElement("a");o.href=`${t}retro/tree`,o.target="_blank",o.rel="noopener noreferrer";const n=new d.Widget({node:o});i.liteWordmark.element({container:o,elementPosition:"center",padding:"2px 2px 2px 8px",height:"28px",width:"auto"}),n.id="jp-RetroLogo",e.shell.add(n,"top",{rank:0})}},{id:"@jupyterlite/retro-application-extension:opener",autoStart:!0,requires:[n.IRouter,a.IDocumentManager],activate:(e,t,o)=>{const{commands:n}=e,a="router:tree";n.addCommand(a,{execute:t=>{var n;const a=null!==(n=t.request.match(p))&&void 0!==n?n:[],[,,i]=a;if(!i)return;const d=decodeURIComponent(i),c=r.PathExt.extname(d);e.restored.then((()=>{".ipynb"===c?o.open(d,"Notebook",void 0,{ref:"_noref"}):o.open(d,"Editor",void 0,{ref:"_noref"})}))}}),t.register({command:a,pattern:p})}}]}}]);
//# sourceMappingURL=3283.bundle.js.map