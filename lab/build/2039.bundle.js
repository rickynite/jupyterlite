(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[2039],{12039:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GroupItem:()=>C,IStatusBar:()=>ie,KernelStatus:()=>Q,LineCol:()=>V,Popup:()=>P,ProgressBar:()=>l,RunningSessions:()=>Z,StatusBar:()=>ne,TextItem:()=>p,clickedItem:()=>R,interactiveItem:()=>j,item:()=>N,leftSide:()=>E,rightSide:()=>I,showPopup:()=>O,side:()=>w,statusBar:()=>S});var n=s(96927),i=s.n(n),a=s(66770);const o=(0,a.oB)({background:"black",height:"10px",width:"100px",border:"1px solid black",borderRadius:"3px",marginLeft:"4px",overflow:"hidden"}),r=(0,a.oB)({background:"var(--jp-brand-color2)",height:"10px"});function l(e){return n.createElement("div",{className:o},n.createElement(h,{percentage:e.percentage}))}function h(e){return n.createElement("div",{className:r,style:{width:`${e.percentage}px`}})}const d="var(--jp-statusbar-height)",c="var(--jp-ui-font-color1)",u="10px",m=(0,a.oB)({fontSize:"var(--jp-ui-font-size1)",fontFamily:"var(--jp-ui-font-family)"},{lineHeight:"24px",color:c});function p(e){const{title:t,source:s,className:i}=e,o=function(e,t){var s={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(s[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(s[n[i]]=e[n[i]])}return s}(e,["title","source","className"]);return n.createElement("span",Object.assign({className:(0,a.Sh)(m,i),title:t},o),s)}const g={display:"flex",alignItems:"center"},_={flexDirection:"row"};const v=(0,a.oB)(g,_);function C(e){const{spacing:t,children:s,className:i}=e,o=function(e,t){var s={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(s[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(s[n[i]]=e[n[i]])}return s}(e,["spacing","children","className"]),r=n.Children.count(s);return n.createElement("div",Object.assign({className:(0,a.Sh)(v,i)},o),n.Children.map(s,((e,s)=>0===s?n.createElement("div",{style:{marginRight:`${t}px`}},e):s===r-1?n.createElement("div",{style:{marginLeft:`${t}px`}},e):n.createElement("div",{style:{margin:`0px ${t}px`}},e))))}var b=s(19573),x=s(77031);const f={paddingLeft:"6px",paddingRight:"6px"},k={$nest:{"&:hover":{backgroundColor:"var(--jp-layout-color3)"}}},y={backgroundColor:"var(--jp-brand-color1)",$nest:{["."+m]:{color:"white"}}},S=(0,a.oB)({background:"var(--jp-layout-color2)",minHeight:d,justifyContent:"space-between",paddingLeft:u,paddingRight:u},g),w=(0,a.oB)(g),E=(0,a.oB)(_),I=(0,a.oB)({flexDirection:"row-reverse"}),N=(0,a.oB)({maxHeight:d,marginLeft:"2px",marginRight:"2px",height:d,whiteSpace:"nowrap",textOverflow:"ellipsis",color:c},f),R=(0,a.oB)(y),j=(0,a.oB)(k),B=(0,a.oB)({boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)"});function O(e){const t=new P(e);return t.launch(),t}class P extends x.Widget{constructor(e){super(),this._body=e.body,this._body.addClass(B),this._anchor=e.anchor,this._align=e.align,(this.layout=new x.PanelLayout).addWidget(e.body),this._body.node.addEventListener("resize",(()=>{this.update()}))}launch(){this._setGeometry(),x.Widget.attach(this,document.body),this.update(),this._anchor.addClass(R),this._anchor.removeClass(j)}onUpdateRequest(e){this._setGeometry(),super.onUpdateRequest(e)}onAfterAttach(e){document.addEventListener("click",this,!1),this.node.addEventListener("keydown",this,!1),window.addEventListener("resize",this,!1)}onAfterDetach(e){document.removeEventListener("click",this,!1),this.node.removeEventListener("keydown",this,!1),window.removeEventListener("resize",this,!1)}onResize(){this.update()}dispose(){super.dispose(),this._anchor.removeClass(R),this._anchor.addClass(j)}handleEvent(e){switch(e.type){case"keydown":this._evtKeydown(e);break;case"click":this._evtClick(e);break;case"resize":this.onResize()}}_evtClick(e){!e.target||this._body.node.contains(e.target)||this._anchor.node.contains(e.target)||this.dispose()}_evtKeydown(e){switch(e.keyCode){case 27:e.stopPropagation(),e.preventDefault(),this.dispose()}}_setGeometry(){let e=0;const t=this._anchor.node.getBoundingClientRect(),s=this._body.node.getBoundingClientRect();"right"===this._align&&(e=-(s.width-t.width));const n=window.getComputedStyle(this._body.node);b.HoverBox.setGeometry({anchor:t,host:document.body,maxHeight:500,minHeight:20,node:this._body.node,offset:{horizontal:e},privilege:"forceAbove",style:n})}}var A=s(17179),D=s(10189);(0,a.oB)({boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)"});const L=(0,a.oB)({padding:"4px 12px",backgroundColor:"var(--jp-layout-color2)",boxShadow:"var(--jp-toolbar-box-shadow)",zIndex:2,fontSize:"var(--jp-ui-font-size1)"}),T=(0,a.oB)({fontSize:"var(--jp-ui-font-size0)",lineHeight:"var(--jp-ui-font-size1)",marginTop:"4px",color:"var(--jp-ui-font-color0)"}),z={border:"none",borderRadius:"0px",position:"absolute",backgroundSize:"16px",backgroundRepeat:"no-repeat",backgroundPosition:"center",outline:"none",top:"0px",right:"0px"},M=(0,a.oB)(z,{top:"4px",right:"8px",height:"24px",padding:"0px 12px",width:"12px"}),F=(0,a.oB)(z,{backgroundColor:"var(--jp-brand-color1)",height:"100%",width:"100%",boxSizing:"border-box",padding:"4px 6px"}),K=(0,a.oB)(z,{backgroundColor:"transparent",height:"100%",width:"100%",boxSizing:"border-box"}),W=(0,a.oB)({overflow:"hidden",padding:"0px 8px",border:"1px solid var(--jp-border-color0)",backgroundColor:"var(--jp-input-active-background)",height:"22px"}),U=(0,a.oB)({border:"var(--jp-border-width) solid var(--md-blue-500)",boxShadow:"inset 0 0 4px var(--md-blue-300)"}),$=(0,a.oB)({background:"transparent",width:"200px",height:"100%",border:"none",outline:"none",color:"var(--jp-ui-font-color0)",lineHeight:"28px"});class H extends i().Component{constructor(e){super(e),this._handleChange=e=>{this.setState({value:e.currentTarget.value})},this._handleSubmit=e=>{e.preventDefault();const t=parseInt(this._textInput.value,10);return!isNaN(t)&&isFinite(t)&&1<=t&&t<=this.props.maxLine&&this.props.handleSubmit(t),!1},this._handleFocus=()=>{this.setState({hasFocus:!0})},this._handleBlur=()=>{this.setState({hasFocus:!1})},this._textInput=null,this.translator=e.translator||A.nullTranslator,this._trans=this.translator.load("jupyterlab"),this.state={value:"",hasFocus:!1}}componentDidMount(){this._textInput.focus()}render(){return i().createElement("div",{className:L},i().createElement("form",{name:"lineColumnForm",onSubmit:this._handleSubmit,noValidate:!0},i().createElement("div",{className:(0,a.Sh)(W,"lm-lineForm-wrapper",this.state.hasFocus?U:void 0)},i().createElement("input",{type:"text",className:$,onChange:this._handleChange,onFocus:this._handleFocus,onBlur:this._handleBlur,value:this.state.value,ref:e=>{this._textInput=e}}),i().createElement("div",{className:M},i().createElement(D.lineFormIcon.react,{className:F,elementPosition:"center"}),i().createElement("input",{type:"submit",className:K,value:""}))),i().createElement("label",{className:T},this._trans.__("Go to line number between 1 and %1",this.props.maxLine))))}}function G(e){const t=(e.translator||A.nullTranslator).load("jupyterlab");return i().createElement(p,{onClick:e.handleClick,source:t.__("Ln %1, Col %2",e.line,e.column),title:t.__("Go to line number…")})}class V extends b.VDomRenderer{constructor(e){super(new V.Model),this._popup=null,this.addClass(j),this.translator=e||A.nullTranslator}render(){return null===this.model?null:i().createElement(G,{line:this.model.line,column:this.model.column,translator:this.translator,handleClick:()=>this._handleClick()})}_handleClick(){this._popup&&this._popup.dispose();const e=b.ReactWidget.create(i().createElement(H,{handleSubmit:e=>this._handleSubmit(e),currentLine:this.model.line,maxLine:this.model.editor.lineCount,translator:this.translator}));this._popup=O({body:e,anchor:this,align:"right"})}_handleSubmit(e){this.model.editor.setCursorPosition({line:e-1,column:0}),this._popup.dispose(),this.model.editor.focus()}}!function(e){class t extends b.VDomModel{constructor(){super(...arguments),this._onSelectionChanged=()=>{const e=this._getAllState(),t=this.editor.getCursorPosition();this._line=t.line+1,this._column=t.column+1,this._triggerChange(e,this._getAllState())},this._line=1,this._column=1,this._editor=null}get editor(){return this._editor}set editor(e){const t=this._editor;t&&t.model.selections.changed.disconnect(this._onSelectionChanged);const s=this._getAllState();if(this._editor=e,this._editor){this._editor.model.selections.changed.connect(this._onSelectionChanged);const e=this._editor.getCursorPosition();this._column=e.column+1,this._line=e.line+1}else this._column=1,this._line=1;this._triggerChange(s,this._getAllState())}get line(){return this._line}get column(){return this._column}_getAllState(){return[this._line,this._column]}_triggerChange(e,t){e[0]===t[0]&&e[1]===t[1]||this.stateChanged.emit(void 0)}}e.Model=t}(V||(V={}));var q=s(87939),J=s(66065);function Y(e){const t=(e.translator||A.nullTranslator).load("jupyterlab");let s="";return e.status&&(s=` | ${q.Text.titleCase(t.__(e.status))}`),i().createElement(p,{onClick:e.handleClick,source:`${e.kernelName}${s}`,title:t.__("Change kernel for %1",e.activityName)})}class Q extends b.VDomRenderer{constructor(e,t){super(new Q.Model(t)),this.translator=t||A.nullTranslator,this._handleClick=e.onClick,this.addClass(j)}render(){return null===this.model?null:i().createElement(Y,{status:this.model.status,kernelName:this.model.kernelName,activityName:this.model.activityName,handleClick:this._handleClick,translator:this.translator})}}function X(e){return i().createElement(C,{spacing:4,onClick:e.handleClick},i().createElement(C,{spacing:4},i().createElement(p,{source:e.terminals}),i().createElement(D.terminalIcon.react,{left:"1px",top:"3px",stylesheet:"statusBar"})),i().createElement(C,{spacing:4},i().createElement(p,{source:e.sessions}),i().createElement(D.kernelIcon.react,{top:"2px",stylesheet:"statusBar"})))}!function(e){class t extends b.VDomModel{constructor(e){super(),this._onKernelStatusChanged=()=>{var e;this._kernelStatus=null===(e=this._sessionContext)||void 0===e?void 0:e.kernelDisplayStatus,this.stateChanged.emit(void 0)},this._onKernelChanged=(e,t)=>{var s;const n=this._getAllState();this._kernelStatus=null===(s=this._sessionContext)||void 0===s?void 0:s.kernelDisplayStatus,this._kernelName=e.kernelDisplayName,this._triggerChange(n,this._getAllState())},this._activityName="activity",this._kernelStatus="",this._sessionContext=null,e=e||A.nullTranslator,this._trans=e.load("jupyterlab"),this._kernelName=this._trans.__("No Kernel!")}get kernelName(){return this._kernelName}get status(){return this._kernelStatus}get activityName(){return this._activityName}set activityName(e){this._activityName!==e&&(this._activityName=e,this.stateChanged.emit(void 0))}get sessionContext(){return this._sessionContext}set sessionContext(e){var t,s,n;null===(t=this._sessionContext)||void 0===t||t.statusChanged.disconnect(this._onKernelStatusChanged),null===(s=this._sessionContext)||void 0===s||s.kernelChanged.disconnect(this._onKernelChanged);const i=this._getAllState();this._sessionContext=e,this._kernelStatus=null==e?void 0:e.kernelDisplayStatus,this._kernelName=null!==(n=null==e?void 0:e.kernelDisplayName)&&void 0!==n?n:"No Kernel",null==e||e.statusChanged.connect(this._onKernelStatusChanged,this),null==e||e.connectionStatusChanged.connect(this._onKernelStatusChanged,this),null==e||e.kernelChanged.connect(this._onKernelChanged,this),this._triggerChange(i,this._getAllState())}_getAllState(){return[this._kernelName,this._kernelStatus,this._activityName]}_triggerChange(e,t){J.JSONExt.deepEqual(e,t)&&this.stateChanged.emit(void 0)}}e.Model=t}(Q||(Q={}));class Z extends b.VDomRenderer{constructor(e){super(new Z.Model),this._serviceManager=e.serviceManager,this._handleClick=e.onClick,this.translator=e.translator||A.nullTranslator,this._trans=this.translator.load("jupyterload"),this._serviceManager.sessions.runningChanged.connect(this._onSessionsRunningChanged,this),this._serviceManager.terminals.runningChanged.connect(this._onTerminalsRunningChanged,this),this.addClass(j)}render(){return this.model?(this.title.caption=this._trans.__("%1 Terminals, %2 Kernel sessions",this.model.terminals,this.model.sessions),i().createElement(X,{sessions:this.model.sessions,terminals:this.model.terminals,handleClick:this._handleClick})):null}dispose(){super.dispose(),this._serviceManager.sessions.runningChanged.disconnect(this._onSessionsRunningChanged,this),this._serviceManager.terminals.runningChanged.disconnect(this._onTerminalsRunningChanged,this)}_onSessionsRunningChanged(e,t){this.model.sessions=t.length}_onTerminalsRunningChanged(e,t){this.model.terminals=t.length}}!function(e){class t extends b.VDomModel{constructor(){super(...arguments),this._terminals=0,this._sessions=0}get sessions(){return this._sessions}set sessions(e){const t=this._sessions;this._sessions=e,t!==this._sessions&&this.stateChanged.emit(void 0)}get terminals(){return this._terminals}set terminals(e){const t=this._terminals;this._terminals=e,t!==this._terminals&&this.stateChanged.emit(void 0)}}e.Model=t}(Z||(Z={}));var ee,te=s(79028),se=s(98669);class ne extends x.Widget{constructor(){super(),this._leftRankItems=[],this._rightRankItems=[],this._statusItems={},this._disposables=new se.DisposableSet,this.addClass(S);const e=this.layout=new x.PanelLayout,t=this._leftSide=new x.Panel,s=this._middlePanel=new x.Panel,n=this._rightSide=new x.Panel;t.addClass(w),t.addClass(E),s.addClass(w),n.addClass(w),n.addClass(I),e.addWidget(t),e.addWidget(s),e.addWidget(n)}registerStatusItem(e,t){if(e in this._statusItems)throw new Error(`Status item ${e} already registered.`);const s=Object.assign(Object.assign({},ee.statusItemDefaults),t),{align:n,item:i,rank:a}=s,o=()=>{this._refreshItem(e)};s.activeStateChanged&&s.activeStateChanged.connect(o);const r={id:e,rank:a};if(s.item.addClass(N),this._statusItems[e]=s,"left"===n){const e=this._findInsertIndex(this._leftRankItems,r);-1===e?(this._leftSide.addWidget(i),this._leftRankItems.push(r)):(te.ArrayExt.insert(this._leftRankItems,e,r),this._leftSide.insertWidget(e,i))}else if("right"===n){const e=this._findInsertIndex(this._rightRankItems,r);-1===e?(this._rightSide.addWidget(i),this._rightRankItems.push(r)):(te.ArrayExt.insert(this._rightRankItems,e,r),this._rightSide.insertWidget(e,i))}else this._middlePanel.addWidget(i);this._refreshItem(e);const l=new se.DisposableDelegate((()=>{delete this._statusItems[e],s.activeStateChanged&&s.activeStateChanged.disconnect(o),i.parent=null,i.dispose()}));return this._disposables.add(l),l}dispose(){this._leftRankItems.length=0,this._rightRankItems.length=0,this._disposables.dispose(),super.dispose()}onUpdateRequest(e){this._refreshAll(),super.onUpdateRequest(e)}_findInsertIndex(e,t){return te.ArrayExt.findFirstIndex(e,(e=>e.rank>t.rank))}_refreshItem(e){const t=this._statusItems[e];t.isActive()?(t.item.show(),t.item.update()):t.item.hide()}_refreshAll(){Object.keys(this._statusItems).forEach((e=>{this._refreshItem(e)}))}}!function(e){e.statusItemDefaults={align:"left",rank:0,isActive:()=>!0,activeStateChanged:void 0}}(ee||(ee={}));const ie=new J.Token("@jupyterlab/statusbar:IStatusBar")}}]);
//# sourceMappingURL=2039.bundle.js.map