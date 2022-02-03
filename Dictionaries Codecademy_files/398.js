(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[398],{RoNi:function(e,t,n){"use strict";n.d(t,"a",(function(){return TerminalHeader}));var r=n("4xyh"),s=n("1Wj3"),i=n("q1tI"),o=n.n(i),a=n("KKCq"),l=n("qqJs"),c=n("ev85");const TerminalHeader=e=>{const t=[];if(e.isLoading)t.push(renderEmptyTab());else for(let n=0;n<e.sessions.length;n+=1)t.push(renderTerminalTab(e,n));return o.a.createElement(c.a,{theme:"terminal"},renderControlButton(e),t,renderFullscreenTab(e))},renderControlButton=e=>e.isBusy?o.a.createElement("div",{style:{width:48},className:"fcn-control"},o.a.createElement(a.a,null)):o.a.createElement(l.a,{key:"terminalTabNew",theme:"terminal",clickHandler:e.createNewTerminal,isDisabled:!e.canCreateSession,isControl:!0},o.a.createElement(r.a,null)),renderEmptyTab=()=>o.a.createElement(l.a,{isActive:!0,canClose:!1,theme:"terminal",key:"terminalTab-empty"}),renderFullscreenTab=e=>o.a.createElement(l.a,{key:"terminalTabFullscreen",clickHandler:e.toggleFullscreen,align:"right",theme:"terminal",isControl:!0},o.a.createElement(s.a,null)),renderTerminalTab=(e,t)=>{const n=e.sessions[t];return o.a.createElement(l.a,{key:`terminalTab${n.id}`,theme:"terminal",tabId:n.id,title:n.title,clickHandler:()=>{e.selectTerminalSession(t)},canClose:!0,closeHandler:()=>{e.closeTerminalSession(n.id)},isActive:e.currentSessionIndex===t})}},T7JW:function(e,t,n){"use strict";n.d(t,"a",(function(){return CheckWorkFooter}));var r=n("rePB"),s=n("yrBZ"),i=n("QqFe"),o=n("q1tI"),a=n.n(o),l=n("/MKj"),c=n("swBZ"),u=n("2oex"),h=n("CWAm"),d=n("jY6L");function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const CheckWorkFooter=({checkpointRun:e})=>{const t=Object(l.useDispatch)(),n=Object(l.useSelector)(d.d),r=Object(l.useSelector)(u.q),o=Object(l.useSelector)(u.p),m="project"===r.type?c.components.terminal.refresh_browser:c.components.terminal.run_checkpoints;return o?a.a.createElement(s.b,{height:48,bg:"shadow-solid",borderWidthTop:1,borderStyleTop:"solid",borderColorTop:"background-disabled",alignContent:"center",flexGrow:0,flexShrink:0,justifyContent:"flex-end"},a.a.createElement(i.b,{height:1,minWidth:"120px",borderRadius:"0","aria-label":m,onClick:()=>{e(),t(Object(h.h)({data:_objectSpread(_objectSpread({},n),{},{target:`${n.page_name}_check_answer`})}))}},m)):null}},WFFW:function(e,t,n){"use strict";n.d(t,"a",(function(){return TerminalPlaceholder}));var r=n("yrBZ"),s=n("uQrA"),i=n("QqFe"),o=n("q1tI"),a=n.n(o);const TerminalPlaceholder=({busy:e,hasCreatedSessionBefore:t,onClick:n})=>a.a.createElement(r.b,{center:!0,column:!0,background:"black",height:"100%"},a.a.createElement(s.a,{textColor:"gray-600"},"Terminal"),t&&!e?a.a.createElement(r.a,null,a.a.createElement(i.d,{mt:24,onClick:n,variant:"secondary"},"New session")):null)},nYFV:function(e,t,n){"use strict";n.d(t,"a",(function(){return Terminal}));var r=n("rePB"),s=n("E+oP"),i=n.n(s),o=n("MKeS"),a=n("TSYQ"),l=n.n(a),c=n("q1tI"),u=n.n(c),h=n("T7JW");const d=Object(o.a)({resolved:{},chunkName:()=>"private-FakeTerminal",isReady(e){const t=this.resolve(e);return!0===this.resolved[t]&&!!n.m[t]},importAsync:()=>Promise.all([n.e(518),n.e(491)]).then(n.bind(null,"B5px")),requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((e=>(this.resolved[t]=!0,e)))},requireSync(e){const t=this.resolve(e);return n(t)},resolve(){return"B5px"}}),m=Object(o.a)({resolved:{},chunkName:()=>"private-RealTerminal",isReady(e){const t=this.resolve(e);return!0===this.resolved[t]&&!!n.m[t]},importAsync:()=>Promise.all([n.e(450),n.e(447)]).then(n.bind(null,"hfsY")),requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((e=>(this.resolved[t]=!0,e)))},requireSync(e){const t=this.resolve(e);return n(t)},resolve(){return"hfsY"}},{ssr:!1});class Terminal extends u.a.Component{constructor(...e){super(...e),Object(r.a)(this,"state",{fake:!i()(this.props.fakeResponses),history:[]})}realTerminalText(){var e;return null===(e=this.refRealTerminal)||void 0===e?void 0:e.text()}realTerminalOutputsByCommands(){var e;return null===(e=this.refRealTerminal)||void 0===e?void 0:e.outputsByCommands()}resize(e){var t;null===(t=this.refRealTerminal)||void 0===t||t.resize(e)}render(){let e;const t=l()({"fcn-terminal":!0,"fcn-terminal--active":this.props.isActive});if(this.props.workspaceReady)if(this.state.fake)e=u.a.createElement(d,{history:this.state.history,fakeResponses:this.props.fakeResponses,handleRealResponse:this.props.handleRealResponse,checkpointRun:()=>this.props.checkpointRun(this.didRunCommand.bind(this))});else{const t=this.props,n=t.session,r=t.stream;e=u.a.createElement(m,{id:this.props.terminalId,session:n,stream:r,onFocus:this.props.onFocus,onBlur:this.props.onBlur,hasCheckWork:this.props.hasCheckWork,shouldPreventCheckpointsOnTerminalCommand:this.props.shouldPreventCheckpointsOnTerminalCommand,checkpointRun:()=>this.props.checkpointRun(this.didRunCommand.bind(this)),closeSession:this.props.closeSession,hasFocus:this.props.hasFocus,fontSize:this.props.fontSize,setFontSize:this.props.setFontSize,ref:e=>this.refRealTerminal=e,workspaceReady:this.props.workspaceReady})}else e=null;return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:t},e),u.a.createElement(h.a,{checkpointRun:()=>this.props.checkpointRun(this.didRunCommand.bind(this))}))}didRunOneOf(e,t,n){for(const r of e)if(this.didRunCommand(r,t,n))return!0;return!1}didRunCommand(e,t,n){if(this.state.fake)return this.state.history.some((r=>{const s=e instanceof RegExp?e.test(r.input):e===r.input,i=!t||r.exitCode===t;let o=!0;return"string"==typeof n&&(o=r.output.search(n)>=0),s&&i&&o}));if(n){const t=this.realTerminalOutputsByCommands();return Object.keys(t).some((r=>{if(r.search(e)>=0){return t[r].join("\n").search(n)>=0}return!1}))}return this.realTerminalText().search(e)>=0}ranWithExitCode(e,t){return this.didRunCommand(e,t)}ranOneOfWithExitCode(e,t){return this.didRunOneOf(e,t)}ranWithOutput(e,t){return this.didRunCommand(e,void 0,t)}ranOneOfWithOutput(e,t){return this.didRunOneOf(e,void 0,t)}ranWithExitCodeAndOutput(e,t,n){return this.didRunCommand(e,t,n)}ranOneOfWithExitCodeAndOutput(e,t,n){return this.didRunOneOf(e,t,n)}}Object(r.a)(Terminal,"defaultProps",{isActive:!1})}}]);
//# sourceMappingURL=398.14b68ca9be725135fd3c.chunk.js.map