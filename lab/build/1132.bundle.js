(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[1132,6796],{56796:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>T});var n=r(93226),a=r(58611),o=r(12852),c=r(95251),d=r(97688),i=r(71187),s=r(36760),l=r(86082),u=r(4324);const T={id:"@jupyterlab/toc:plugin",autoStart:!0,provides:s.ITableOfContentsRegistry,requires:[a.IDocumentManager,o.IEditorTracker,n.ILabShell,n.ILayoutRestorer,c.IMarkdownViewerTracker,d.INotebookTracker,i.IRenderMimeRegistry,l.ITranslator],activate:async function(e,t,r,n,a,o,c,d,i){const l=i.load("jupyterlab"),T=new s.TableOfContents({docmanager:t,rendermime:d,translator:i}),b=new s.TableOfContentsRegistry;T.title.icon=u.tocIcon,T.title.caption=l.__("Table of Contents"),T.id="table-of-contents",n.add(T,"left",{rank:400}),a.add(T,"@jupyterlab/toc:plugin");const f=(0,s.createNotebookGenerator)(c,T,d.sanitizer,i);b.add(f);const k=(0,s.createMarkdownGenerator)(r,T,d.sanitizer,i);b.add(k);const g=(0,s.createRenderedMarkdownGenerator)(o,T,d.sanitizer,i);b.add(g);const p=(0,s.createLatexGenerator)(r);b.add(p);const w=(0,s.createPythonGenerator)(r);return b.add(w),n.currentChanged.connect((function(){let t=e.shell.currentWidget;if(!t)return;let r=b.find(t);r?T.current={widget:t,generator:r}:T.current&&T.current.widget.isDisposed&&(T.current=null)})),b}}}}]);
//# sourceMappingURL=1132.bundle.js.map