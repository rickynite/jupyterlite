(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[934],{40934:(e,t,i)=>{"use strict";i.r(t),i.d(t,{CSVDelimiter:()=>g,CSVDocumentWidget:()=>b,CSVViewer:()=>x,CSVViewerFactory:()=>v,DSVModel:()=>d,GridSearchService:()=>D,TSVViewerFactory:()=>R,TextRenderConfig:()=>O,parseDSV:()=>a,parseDSVNoQuotes:()=>h});var s,r,o=i(51068),n=i(9727);function a(e){const{data:t,columnOffsets:i,delimiter:o=",",startIndex:n=0,maxRows:a=4294967295,rowDelimiter:h="\r\n",quote:l='"'}=e;let d=e.ncols,c=0;const u=[],_=o.charCodeAt(0),f=l.charCodeAt(0),w=10,m=t.length,{QUOTED_FIELD:g,QUOTED_FIELD_QUOTE:p,UNQUOTED_FIELD:C,NEW_FIELD:y,NEW_ROW:O}=s,{CR:D,LF:x,CRLF:b}=r,[v,R]="\r\n"===h?[b,2]:"\r"===h?[D,1]:[x,1];let E,S=O,P=n,q=0;for(;P<m;){switch(S===O&&(u.push(P),q=1),E=t.charCodeAt(P),S){case O:case y:switch(E){case f:S=g;break;case _:S=y;break;case 13:if(v===D)S=O;else{if(v!==b||t.charCodeAt(P+1)!==w)throw`string index ${P} (in row ${c}, column ${q}): carriage return found, but not as part of a row delimiter C ${t.charCodeAt(P+1)}`;P++,S=O}break;case w:if(v!==x)throw`string index ${P} (in row ${c}, column ${q}): line feed found, but row delimiter starts with a carriage return`;S=O;break;default:S=C}break;case g:if(P=t.indexOf(l,P),P<0)throw`string index ${P} (in row ${c}, column ${q}): mismatched quote`;S=p;break;case p:switch(E){case f:S=g;break;case _:S=y;break;case 13:if(v===D)S=O;else{if(v!==b||t.charCodeAt(P+1)!==w)throw`string index ${P} (in row ${c}, column ${q}): carriage return found, but not as part of a row delimiter C ${t.charCodeAt(P+1)}`;P++,S=O}break;case w:if(v!==x)throw`string index ${P} (in row ${c}, column ${q}): line feed found, but row delimiter starts with a carriage return`;S=O;break;default:throw`string index ${P} (in row ${c}, column ${q}): quote in escaped field not followed by quote, delimiter, or row delimiter`}break;case C:for(;P<m&&(E=t.charCodeAt(P),E!==_&&E!==w&&13!==E);)P++;switch(E){case _:S=y;break;case 13:if(v===D)S=O;else{if(v!==b||t.charCodeAt(P+1)!==w)throw`string index ${P} (in row ${c}, column ${q}): carriage return found, but not as part of a row delimiter C ${t.charCodeAt(P+1)}`;P++,S=O}break;case w:if(v!==x)throw`string index ${P} (in row ${c}, column ${q}): line feed found, but row delimiter starts with a carriage return`;S=O;break;default:continue}break;default:throw`string index ${P} (in row ${c}, column ${q}): state not recognized`}switch(P++,S){case O:if(c++,void 0===d){if(1!==c)throw new Error("Error parsing default number of columns");d=q}if(!0===i)if(q<d)for(;q<d;q++)u.push(P-R);else q>d&&(u.length=u.length-(q-d));if(c===a)return{nrows:c,ncols:i?d:0,offsets:u};break;case y:!0===i&&u.push(P),q++}}if(S!==O&&(c++,!0===i))if(void 0===d&&(d=q),q<d)for(;q<d;q++)u.push(P-(R-1));else q>d&&(u.length=u.length-(q-d));return{nrows:c,ncols:i&&null!=d?d:0,offsets:u}}function h(e){const{data:t,columnOffsets:i,delimiter:s=",",rowDelimiter:r="\r\n",startIndex:o=0,maxRows:n=4294967295}=e;let a=e.ncols;const h=[];let l=0;const d=r.length;let c=o;const u=t.length;let _,f,w,m,g;for(_=o;-1!==_&&l<n&&c<u;){if(h.push(c),l++,_=t.indexOf(r,c),g=-1===_?u:_,!0===i)if(f=1,w=t.slice(c,g),m=w.indexOf(s),void 0===a){for(;-1!==m;)h.push(c+m+1),f++,m=w.indexOf(s,m+1);a=f}else{for(;-1!==m&&f<a;)h.push(c+m+1),f++,m=w.indexOf(s,m+1);for(;f<a;)h.push(g),f++}c=g+d}return{nrows:l,ncols:i&&null!=a?a:0,offsets:h}}!function(e){e[e.QUOTED_FIELD=0]="QUOTED_FIELD",e[e.QUOTED_FIELD_QUOTE=1]="QUOTED_FIELD_QUOTE",e[e.UNQUOTED_FIELD=2]="UNQUOTED_FIELD",e[e.NEW_FIELD=3]="NEW_FIELD",e[e.NEW_ROW=4]="NEW_ROW"}(s||(s={})),function(e){e[e.CR=0]="CR",e[e.CRLF=1]="CRLF",e[e.LF=2]="LF"}(r||(r={}));const l={quotes:a,noquotes:h};class d extends o.DataModel{constructor(e){super(),this._rowCount=0,this._header=[],this._columnOffsets=new Uint32Array(0),this._columnOffsetsStartingRow=0,this._maxCacheGet=1e3,this._rowOffsets=new Uint32Array(0),this._delayedParse=null,this._startedParsing=!1,this._doneParsing=!1,this._isDisposed=!1,this._ready=new n.PromiseDelegate;let{data:t,delimiter:i=",",rowDelimiter:s,quote:r='"',quoteParser:o,header:a=!0,initialRows:h=500}=e;if(this._rawData=t,this._delimiter=i,this._quote=r,this._quoteEscaped=new RegExp(r+r,"g"),this._initialRows=h,void 0===s){const e=t.slice(0,5e3).indexOf("\r");s=-1===e?"\n":"\n"===t[e+1]?"\r\n":"\r"}if(this._rowDelimiter=s,void 0===o&&(o=t.indexOf(r)>=0),this._parser=o?"quotes":"noquotes",this.parseAsync(),!0===a&&this._columnCount>0){const e=[];for(let t=0;t<this._columnCount;t++)e.push(this._getField(0,t));this._header=e}}get isDisposed(){return this._isDisposed}get ready(){return this._ready.promise}get rawData(){return this._rawData}set rawData(e){this._rawData=e}get initialRows(){return this._initialRows}set initialRows(e){this._initialRows=e}get header(){return this._header}set header(e){this._header=e}get delimiter(){return this._delimiter}get rowDelimiter(){return this._rowDelimiter}get doneParsing(){return this._doneParsing}rowCount(e){return"body"===e?0===this._header.length?this._rowCount:this._rowCount-1:1}columnCount(e){return"body"===e?this._columnCount:1}data(e,t,i){let s;switch(e){case"body":s=0===this._header.length?this._getField(t,i):this._getField(t+1,i);break;case"column-header":s=0===this._header.length?(i+1).toString():this._header[i];break;case"row-header":s=(t+1).toString();break;case"corner-header":s="";break;default:throw"unreachable"}return s}dispose(){this._isDisposed||(this._isDisposed=!0,this._columnCount=void 0,this._rowCount=void 0,this._rowOffsets=null,this._columnOffsets=null,this._rawData=null,!1===this._doneParsing&&(this.ready.catch((()=>{})),this._ready.reject(void 0)),null!==this._delayedParse&&window.clearTimeout(this._delayedParse))}getOffsetIndex(e,t){const i=this._columnCount;let s=(e-this._columnOffsetsStartingRow)*i;if((s<0||s>this._columnOffsets.length)&&(this._columnOffsets.fill(4294967295),this._columnOffsetsStartingRow=e,s=0),4294967295===this._columnOffsets[s]){let t=1;for(;t<=this._maxCacheGet&&16777215===this._columnOffsets[s+t*i];)t++;const{offsets:r}=l[this._parser]({data:this._rawData,delimiter:this._delimiter,rowDelimiter:this._rowDelimiter,quote:this._quote,columnOffsets:!0,maxRows:t,ncols:i,startIndex:this._rowOffsets[e]});for(let e=0;e<r.length;e++)this._columnOffsets[s+e]=r[e]}return this._columnOffsets[s+t]}parseAsync(){let e=this._initialRows,t=Math.pow(2,32)-1;const i=e=>{try{this._computeRowOffsets(e)}catch(t){if("quotes"!==this._parser)throw t;console.warn(t),this._parser="noquotes",this._resetParser(),this._computeRowOffsets(e)}return this._doneParsing};if(this._resetParser(),i(e))return;const s=()=>{const r=i(e+t);e+=t,t<1e6&&(t*=2),this._delayedParse=r?null:window.setTimeout(s,30)};this._delayedParse=window.setTimeout(s,30)}_computeRowOffsets(e=4294967295){var t;if(this._rowCount>=e||!0===this._doneParsing)return;void 0===this._columnCount&&(this._columnCount=l[this._parser]({data:this._rawData,delimiter:this._delimiter,rowDelimiter:this._rowDelimiter,quote:this._quote,columnOffsets:!0,maxRows:1}).ncols);const i=this._rowCount>0?1:0,{nrows:s,offsets:r}=l[this._parser]({data:this._rawData,startIndex:null!==(t=this._rowOffsets[this._rowCount-i])&&void 0!==t?t:0,delimiter:this._delimiter,rowDelimiter:this._rowDelimiter,quote:this._quote,columnOffsets:!1,maxRows:e-this._rowCount+i});if(this._startedParsing&&s<=i)return this._doneParsing=!0,void this._ready.resolve(void 0);this._startedParsing=!0;const o=this._rowCount,n=Math.min(s,i);if(this._rowCount=o+s-n,this._rowCount<e&&(this._doneParsing=!0,this._ready.resolve(void 0)),this._rowCount>o){const e=this._rowOffsets;this._rowOffsets=new Uint32Array(this._rowCount),this._rowOffsets.set(e),this._rowOffsets.set(r,o-n)}const a=Math.floor(33554432/this._columnCount);if(o<=a)if(this._rowCount<=a){const e=this._columnOffsets;this._columnOffsets=new Uint32Array(this._rowCount*this._columnCount),this._columnOffsets.set(e),this._columnOffsets.fill(4294967295,e.length)}else{const e=this._columnOffsets;this._columnOffsets=new Uint32Array(Math.min(this._maxCacheGet,a)*this._columnCount),this._columnOffsets.set(e.subarray(0,this._columnOffsets.length)),this._columnOffsets.fill(4294967295,e.length),this._columnOffsetsStartingRow=0}let h=o;this._header.length>0&&(h-=1),this.emitChanged({type:"rows-inserted",region:"body",index:h,span:this._rowCount-o})}_getField(e,t){let i,s;const r=this.getOffsetIndex(e,t);let o=0,n=0;return t===this._columnCount-1?e<this._rowCount-1?(s=this.getOffsetIndex(e+1,0),o+=this._rowDelimiter.length):(s=this._rawData.length,this._rawData[s-1]===this._rowDelimiter[this._rowDelimiter.length-1]&&(o+=this._rowDelimiter.length)):(s=this.getOffsetIndex(e,t+1),r<s&&this._rawData[s-1]===this._delimiter&&(o+=1)),this._rawData[r]===this._quote&&(n+=1,o+=1),i=this._rawData.slice(r+n,s-o),1===n&&-1!==i.indexOf(this._quote)&&(i=i.replace(this._quoteEscaped,this._quote)),i}_resetParser(){this._columnCount=void 0,this._rowOffsets=new Uint32Array(0),this._rowCount=0,this._startedParsing=!1,this._columnOffsets=new Uint32Array(0),!1===this._doneParsing&&(this.ready.catch((()=>{})),this._ready.reject(void 0)),this._doneParsing=!1,this._ready=new n.PromiseDelegate,null!==this._delayedParse&&(window.clearTimeout(this._delayedParse),this._delayedParse=null),this.emitChanged({type:"model-reset"})}}var c,u=i(62867),_=i(75138),f=i(27529),w=i(80430),m=i(86082);class g extends f.Widget{constructor(e){super({node:c.createNode(e.selected,e.translator)}),this._delimiterChanged=new _.Signal(this),this.addClass("jp-CSVDelimiter")}get delimiterChanged(){return this._delimiterChanged}get selectNode(){return this.node.getElementsByTagName("select")[0]}handleEvent(e){switch(e.type){case"change":this._delimiterChanged.emit(this.selectNode.value)}}onAfterAttach(e){this.selectNode.addEventListener("change",this)}onBeforeDetach(e){this.selectNode.removeEventListener("change",this)}}!function(e){e.createNode=function(e,t){const i=null==(t=t||m.nullTranslator)?void 0:t.load("jupyterlab"),s=[[",",","],[";",";"],["\t",i.__("tab")],["|",i.__("pipe")],["#",i.__("hash")]],r=document.createElement("div"),o=document.createElement("span"),n=document.createElement("select");o.textContent=i.__("Delimiter: "),o.className="jp-CSVDelimiter-label",(0,u.each)(s,(([t,i])=>{const s=document.createElement("option");s.value=t,s.textContent=i,t===e&&(s.selected=!0),n.appendChild(s)})),r.appendChild(o);const a=w.Styling.wrapSelect(n);return a.classList.add("jp-CSVDelimiter-dropdown"),r.appendChild(a),r}}(c||(c={}));var p,C=i(82090),y=i(22982);class O{}class D{constructor(e){this._looping=!0,this._changed=new _.Signal(this),this._grid=e,this._query=null,this._row=0,this._column=-1}get changed(){return this._changed}cellBackgroundColorRendererFunc(e){return({value:t,row:i,column:s})=>this._query&&t.match(this._query)?this._row===i&&this._column===s?e.currentMatchBackgroundColor:e.matchBackgroundColor:""}clear(){this._query=null,this._row=0,this._column=-1,this._changed.emit(void 0)}find(e,t=!1){const i=this._grid.dataModel,s=i.rowCount("body"),r=i.columnCount("body");this._query!==e&&(this._row=0,this._column=-1),this._query=e;const o=this._grid.scrollY/this._grid.defaultSizes.rowHeight,n=(this._grid.scrollY+this._grid.pageHeight)/this._grid.defaultSizes.rowHeight,a=this._grid.scrollX/this._grid.defaultSizes.columnHeaderHeight,h=(this._grid.scrollX+this._grid.pageWidth)/this._grid.defaultSizes.columnHeaderHeight,l=(e,t)=>e>=o&&e<=n&&t>=a&&t<=h,d=t?-1:1;this._column+=d;for(let o=this._row;t?o>=0:o<s;o+=d){for(let s=this._column;t?s>=0:s<r;s+=d)if(i.data("body",o,s).match(e))return this._changed.emit(void 0),l(o,s)||this._grid.scrollToRow(o),this._row=o,this._column=s,!0;this._column=t?r-1:0}if(this._looping){this._looping=!1,this._row=t?0:s-1,this._wrapRows(t);try{return this.find(e,t)}finally{this._looping=!0}}return!1}_wrapRows(e=!1){const t=this._grid.dataModel,i=t.rowCount("body"),s=t.columnCount("body");e&&this._row<=0?(this._row=i-1,this._column=s):!e&&this._row>=i-1&&(this._row=0,this._column=-1)}get query(){return this._query}}class x extends f.Widget{constructor(e){super(),this._monitor=null,this._delimiter=",",this._revealed=new n.PromiseDelegate,this._baseRenderer=null;const t=this._context=e.context,i=this.layout=new f.PanelLayout;this.addClass("jp-CSVViewer"),this._grid=new o.DataGrid({defaultSizes:{rowHeight:24,columnWidth:144,rowHeaderWidth:64,columnHeaderHeight:36}}),this._grid.addClass("jp-CSVViewer-grid"),this._grid.headerVisibility="all",this._grid.keyHandler=new o.BasicKeyHandler,this._grid.mouseHandler=new o.BasicMouseHandler,this._grid.copyConfig={separator:"\t",format:o.DataGrid.copyFormatGeneric,headers:"all",warningThreshold:1e6},i.addWidget(this._grid),this._searchService=new D(this._grid),this._searchService.changed.connect(this._updateRenderer,this),this._context.ready.then((()=>{this._updateGrid(),this._revealed.resolve(void 0),this._monitor=new C.ActivityMonitor({signal:t.model.contentChanged,timeout:1e3}),this._monitor.activityStopped.connect(this._updateGrid,this)}))}get context(){return this._context}get revealed(){return this._revealed.promise}get delimiter(){return this._delimiter}set delimiter(e){e!==this._delimiter&&(this._delimiter=e,this._updateGrid())}get style(){return this._grid.style}set style(e){this._grid.style=e}set rendererConfig(e){this._baseRenderer=e,this._updateRenderer()}get searchService(){return this._searchService}dispose(){this._monitor&&this._monitor.dispose(),super.dispose()}goToLine(e){this._grid.scrollToRow(e)}onActivateRequest(e){this.node.tabIndex=-1,this.node.focus()}_updateGrid(){const e=this._context.model.toString(),t=this._delimiter,i=this._grid.dataModel,s=this._grid.dataModel=new d({data:e,delimiter:t});this._grid.selectionModel=new o.BasicSelectionModel({dataModel:s}),i&&i.dispose()}_updateRenderer(){if(null===this._baseRenderer)return;const e=this._baseRenderer,t=new o.TextRenderer({textColor:e.textColor,horizontalAlignment:e.horizontalAlignment,backgroundColor:this._searchService.cellBackgroundColorRendererFunc(e)});this._grid.cellRenderers.update({body:t,"column-header":t,"corner-header":t,"row-header":t})}}class b extends y.DocumentWidget{constructor(e){let{content:t,context:i,delimiter:s,reveal:r}=e,o=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(s=Object.getOwnPropertySymbols(e);r<s.length;r++)t.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(e,s[r])&&(i[s[r]]=e[s[r]])}return i}(e,["content","context","delimiter","reveal"]);t=t||p.createContent(i),r=Promise.all([r,t.revealed]),super(Object.assign({content:t,context:i,reveal:r},o)),s&&(t.delimiter=s);const n=new g({selected:t.delimiter});this.toolbar.addItem("delimiter",n),n.delimiterChanged.connect(((e,i)=>{t.delimiter=i}))}setFragment(e){const t=e.split("=");if("#row"!==t[0])return;let i=t[1].split(";")[0];i=i.split("-")[0],this.context.ready.then((()=>{this.content.goToLine(Number(i))}))}}!function(e){e.createContent=function(e){return new x({context:e})}}(p||(p={}));class v extends y.ABCWidgetFactory{createNewWidget(e){const t=this.translator;return new b({context:e,translator:t})}}class R extends y.ABCWidgetFactory{createNewWidget(e){return new b({context:e,delimiter:"\t",translator:this.translator})}}}}]);
//# sourceMappingURL=934.bundle.js.map