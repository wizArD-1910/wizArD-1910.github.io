(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{165:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return h});n(66);var i=n(0),o=n.n(i),a=n(176),r=n(180),s=(n(164),n(181)),l=(n(196),n(185)),c=n.n(l);t.default=function(e){var t=e.data.markdownRemark,i=t.frontmatter,l=t.html;function h(e){e.preventDefault(),window.location.replace("/blogs")}return o.a.createElement(s.ThemeToggler,null,function(e){var t,s=e.theme,u=e.toggleTheme;return o.a.createElement(r.a,null,o.a.createElement("div",{className:"blogHeader",style:{verticalAlign:"middle",height:"100px",width:"100vw",display:"table-cell"}},o.a.createElement("span",{style:{fontSize:"0.8em"},onClick:h},"Aman Dave's Blog"),o.a.createElement("label",{style:{float:"right"}},o.a.createElement(c.a,((t={checked:"dark"===s,className:"dark-theme",onChange:function(e){return u(e?"dark":"light")},value:"dark"===s,onColor:"#ffc663",onHandleColor:"#eb8621",handleDiameter:33,uncheckedIcon:o.a.createElement("img",{src:n(187),height:"20px",style:{marginTop:"-58px",marginLeft:"7px"}}),checkedIcon:o.a.createElement("img",{src:n(188),height:"20px",style:{marginTop:"-58px",marginLeft:"5px"}}),boxShadow:"0px 1px 5px rgba(0, 0, 0, 0.6)",activeBoxShadow:"0px 0px 1px 10px rgba(0, 0, 0, 0.2)",height:26,width:60}).className="react-switch",t.id="material-switch",t)))),o.a.createElement("section",null,o.a.createElement("div",{className:"blogTitle",style:{marginTop:"50px"}},o.a.createElement("h1",null,i.title,"Resume"===i.title?o.a.createElement("span",null,o.a.createElement("a",{style:{float:"right",fontSize:"17px"},href:Object(a.b)("resume.pdf"),target:"_blank",download:"Aman_Dave_Resume"},"Download in PDF format")):null),o.a.createElement("span",null,i.date)),o.a.createElement("br",null),o.a.createElement("hr",null),o.a.createElement("br",null),o.a.createElement("div",{className:"blogText",dangerouslySetInnerHTML:{__html:l}})))})};var h="3889866507"},176:function(e,t,n){"use strict";var i=n(0),o=n.n(i),a=n(5),r=n.n(a),s=n(41),l=n.n(s);n.d(t,"a",function(){return l.a}),n.d(t,"b",function(){return s.withPrefix});n(177),o.a.createContext({});r.a.object,r.a.string.isRequired,r.a.func,r.a.func},177:function(e,t,n){var i;e.exports=(i=n(178))&&i.default||i},178:function(e,t,n){"use strict";n.r(t);n(43);var i=n(0),o=n.n(i),a=n(5),r=n.n(a),s=n(65),l=function(e){var t=e.location,n=e.pageResources;return n?o.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json)):null};l.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=l},179:function(e){e.exports={data:{site:{siteMetadata:{title:"Aman Dave"}}}}},180:function(e,t,n){"use strict";var i=n(179),o=n(0),a=n.n(o),r=n(5),s=n.n(r),l=n(176),c=function(e){var t=e.siteTitle;return a.a.createElement("header",{style:{background:"#007bff",marginBottom:"1.45rem"}},a.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},a.a.createElement("h1",{style:{margin:0}},a.a.createElement(l.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};c.propTypes={siteTitle:s.a.string},c.defaultProps={siteTitle:""};n(163);var h=function(e){var t=e.children;i.data;return a.a.createElement("div",{style:{backgroundColor:"var(--bg)",color:"var(--textNormal)",transition:"color 0.2s ease-out, background 0.2s ease-out"}},a.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},a.a.createElement("main",null,t),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("footer",{style:{textAlign:"center"}},"© ",(new Date).getFullYear(),", Built with ❤ By"," ",a.a.createElement("a",{href:"https://www.linkedin.com/in/aman-dave/"},"Aman"))))};h.propTypes={children:s.a.node.isRequired};t.a=h},181:function(e,t,n){"use strict";var i=n(10);t.__esModule=!0;var o=i(n(182));t.ThemeToggler=o.default},182:function(e,t,n){"use strict";var i=n(10);t.__esModule=!0,t.default=void 0;var o=i(n(42)),a=i(n(8)),r=i(n(44)),s=i(n(0)),l=i(n(5)),c=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return t=e.call.apply(e,[this].concat(i))||this,(0,r.default)((0,o.default)(t),"state",{theme:null}),t}(0,a.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;this.setState({theme:window.__theme}),window.__onThemeChange=function(){e.setState({theme:window.__theme})}},n.toggleTheme=function(e){window.__setPreferredTheme(e)},n.render=function(){return s.default.createElement(this.props.children,{theme:this.state.theme,toggleTheme:this.toggleTheme})},t}(s.default.Component);c.propTypes={children:l.default.func.isRequired};var h=c;t.default=h},184:function(e,t,n){var i;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var a=typeof i;if("string"===a||"number"===a)e.push(i);else if(Array.isArray(i)&&i.length){var r=o.apply(null,i);r&&e.push(r)}else if("object"===a)for(var s in i)n.call(i,s)&&i[s]&&e.push(s)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(i=function(){return o}.apply(t,[]))||(e.exports=i)}()},185:function(e,t,n){e.exports=n(186)},186:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var i=n(0);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var a=i.createElement("svg",{viewBox:"-2 -5 14 20",height:"100%",width:"100%",style:{position:"absolute",top:0}},i.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"})),r=i.createElement("svg",{height:"100%",width:"100%",viewBox:"-2 -5 17 21",style:{position:"absolute",top:0}},i.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}));function s(e){if(7===e.length)return e;for(var t="#",n=1;n<4;n+=1)t+=e[n]+e[n];return t}function l(e,t,n,i,o){return function(e,t,n,i,o){var a=(e-n)/(t-n);if(0===a)return i;if(1===a)return o;for(var r="#",s=1;s<6;s+=2){var l=parseInt(i.substr(s,2),16),c=parseInt(o.substr(s,2),16),h=Math.round((1-a)*l+a*c).toString(16);1===h.length&&(h="0"+h),r+=h}return r}(e,t,n,s(i),s(o))}var c=function(e){function t(t){e.call(this,t);var n=t.height,i=t.width,o=t.checked;this.t=t.handleDiameter||n-2,this.i=Math.max(i-n,i-(n+this.t)/2),this.o=Math.max(0,(n-this.t)/2),this.state={s:o?this.i:this.o},this.n=0,this.e=0,this.h=this.h.bind(this),this.r=this.r.bind(this),this.a=this.a.bind(this),this.c=this.c.bind(this),this.l=this.l.bind(this),this.u=this.u.bind(this),this.f=this.f.bind(this),this.p=this.p.bind(this),this.b=this.b.bind(this),this.g=this.g.bind(this),this.v=this.v.bind(this),this.w=this.w.bind(this)}return e&&(t.__proto__=e),((t.prototype=Object.create(e&&e.prototype)).constructor=t).prototype.componentDidUpdate=function(e){e.checked!==this.props.checked&&this.setState({s:this.props.checked?this.i:this.o})},t.prototype.k=function(e){this.y.focus(),this.setState({C:e,M:!0,m:Date.now()})},t.prototype.x=function(e){var t=this.state,n=t.C,i=t.s,o=(this.props.checked?this.i:this.o)+e-n;t.R||e===n||this.setState({R:!0});var a=Math.min(this.i,Math.max(this.o,o));a!==i&&this.setState({s:a})},t.prototype.S=function(e){var t=this.state,n=t.s,i=t.R,o=t.m,a=this.props.checked,r=(this.i+this.o)/2,s=Date.now()-o;!i||s<250?this.T(e):a?r<n?this.setState({s:this.i}):this.T(e):n<r?this.setState({s:this.o}):this.T(e),this.setState({R:!1,M:!1}),this.n=Date.now()},t.prototype.h=function(e){e.preventDefault(),"number"==typeof e.button&&0!==e.button||(this.k(e.clientX),window.addEventListener("mousemove",this.r),window.addEventListener("mouseup",this.a))},t.prototype.r=function(e){e.preventDefault(),this.x(e.clientX)},t.prototype.a=function(e){this.S(e),window.removeEventListener("mousemove",this.r),window.removeEventListener("mouseup",this.a)},t.prototype.c=function(e){this.$=null,this.k(e.touches[0].clientX)},t.prototype.l=function(e){this.x(e.touches[0].clientX)},t.prototype.u=function(e){e.preventDefault(),this.S(e)},t.prototype.p=function(e){50<Date.now()-this.n&&(this.T(e),50<Date.now()-this.e&&this.setState({M:!1}))},t.prototype.b=function(){this.e=Date.now()},t.prototype.g=function(){this.setState({M:!0})},t.prototype.v=function(){this.setState({M:!1})},t.prototype.w=function(e){this.y=e},t.prototype.f=function(e){e.preventDefault(),this.y.focus(),this.T(e),this.setState({M:!1})},t.prototype.T=function(e){var t=this.props;(0,t.onChange)(!t.checked,e,t.id)},t.prototype.render=function(){var e=this.props,t=e.disabled,n=e.className,a=e.offColor,r=e.onColor,s=e.offHandleColor,c=e.onHandleColor,h=e.checkedIcon,u=e.uncheckedIcon,d=e.boxShadow,f=e.activeBoxShadow,p=e.height,v=e.width,m=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&-1===t.indexOf(i)&&(n[i]=e[i]);return n}(e,["disabled","className","offColor","onColor","offHandleColor","onHandleColor","checkedIcon","uncheckedIcon","boxShadow","activeBoxShadow","height","width","handleDiameter"]),g=this.state,b=g.s,y=g.R,k=g.M,w={position:"relative",display:"inline-block",textAlign:"left",opacity:t?.5:1,direction:"ltr",borderRadius:p/2,WebkitTransition:"opacity 0.25s",MozTransition:"opacity 0.25s",transition:"opacity 0.25s",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none"},x={height:p,width:v,margin:Math.max(0,(this.t-p)/2),position:"relative",background:l(b,this.i,this.o,a,r),borderRadius:p/2,cursor:t?"default":"pointer",WebkitTransition:y?null:"background 0.25s",MozTransition:y?null:"background 0.25s",transition:y?null:"background 0.25s"},E={height:p,width:Math.min(1.5*p,v-(this.t+p)/2+1),position:"relative",opacity:(b-this.o)/(this.i-this.o),pointerEvents:"none",WebkitTransition:y?null:"opacity 0.25s",MozTransition:y?null:"opacity 0.25s",transition:y?null:"opacity 0.25s"},T={height:p,width:Math.min(1.5*p,v-(this.t+p)/2+1),position:"absolute",opacity:1-(b-this.o)/(this.i-this.o),right:0,top:0,pointerEvents:"none",WebkitTransition:y?null:"opacity 0.25s",MozTransition:y?null:"opacity 0.25s",transition:y?null:"opacity 0.25s"},C={height:this.t,width:this.t,background:l(b,this.i,this.o,s,c),display:"inline-block",cursor:t?"default":"pointer",borderRadius:"50%",position:"absolute",transform:"translateX("+b+"px)",top:Math.max(0,(p-this.t)/2),outline:0,boxShadow:k?f:d,border:0,WebkitTransition:y?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",MozTransition:y?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",transition:y?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s"};return i.createElement("div",{className:n,style:w},i.createElement("div",{className:"react-switch-bg",style:x,onClick:t?null:this.f,onMouseDown:function(e){return e.preventDefault()}},h&&i.createElement("div",{style:E},h),u&&i.createElement("div",{style:T},u)),i.createElement("div",{className:"react-switch-handle",style:C,onClick:function(e){return e.preventDefault()},onMouseDown:t?null:this.h,onTouchStart:t?null:this.c,onTouchMove:t?null:this.l,onTouchEnd:t?null:this.u,onTouchCancel:t?null:this.v}),i.createElement("input",o({},{type:"checkbox",role:"switch",disabled:t,style:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",width:1}},m,{ref:this.w,onFocus:this.g,onBlur:this.v,onKeyUp:this.b,onChange:this.p})))},t}(i.Component);c.defaultProps={disabled:!1,offColor:"#888",onColor:"#080",offHandleColor:"#fff",onHandleColor:"#fff",uncheckedIcon:a,checkedIcon:r,boxShadow:null,activeBoxShadow:"0 0 2px 3px #3bf",height:28,width:56},t.default=c},187:function(e,t,n){e.exports=n.p+"static/moon-aa4c148b755cef9618c91d49cd4a72e8.png"},188:function(e,t,n){e.exports=n.p+"static/sun-636b3a1eef4b1172bab054bd83b14e36.png"},196:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=n(0),r=d(a),s=d(n(184)),l=d(n(5)),c=d(n(197)),h=d(n(198)),u=n(199);function d(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleClick=n.handleClick.bind(n),n.handleTouchStart=n.handleTouchStart.bind(n),n.handleTouchMove=n.handleTouchMove.bind(n),n.handleTouchEnd=n.handleTouchEnd.bind(n),n.handleFocus=n.handleFocus.bind(n),n.handleBlur=n.handleBlur.bind(n),n.previouslyChecked=!(!e.checked&&!e.defaultChecked),n.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.PureComponent),o(t,[{key:"componentWillReceiveProps",value:function(e){"checked"in e&&this.setState({checked:!!e.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var n=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:n})}},{key:"handleTouchStart",value:function(e){this.startX=(0,u.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,u.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var n=(0,u.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>n?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<n&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var n=this.props.icons;return n?void 0===n[e]?t.defaultProps.icons[e]:n[e]:null}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,o=(t.icons,function(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}(t,["className","icons"])),a=(0,s.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},n);return r.default.createElement("div",{className:a,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},r.default.createElement("div",{className:"react-toggle-track"},r.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),r.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),r.default.createElement("div",{className:"react-toggle-thumb"}),r.default.createElement("input",i({},o,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}();t.default=f,f.displayName="Toggle",f.defaultProps={icons:{checked:r.default.createElement(c.default,null),unchecked:r.default.createElement(h.default,null)}},f.propTypes={checked:l.default.bool,disabled:l.default.bool,defaultChecked:l.default.bool,onChange:l.default.func,onFocus:l.default.func,onBlur:l.default.func,className:l.default.string,name:l.default.string,value:l.default.string,id:l.default.string,"aria-labelledby":l.default.string,"aria-label":l.default.string,icons:l.default.oneOfType([l.default.bool,l.default.shape({checked:l.default.node,unchecked:l.default.node})])}},197:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,o=n(0),a=(i=o)&&i.__esModule?i:{default:i};t.default=function(){return a.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},a.default.createElement("title",null,"switch-check"),a.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},198:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,o=n(0),a=(i=o)&&i.__esModule?i:{default:i};t.default=function(){return a.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},a.default.createElement("title",null,"switch-x"),a.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},199:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var n=t[0];return{x:n.clientX,y:n.clientY}}var i=e.pageX;if(void 0!==i)return{x:i,y:e.pageY}}return{x:0,y:0}}}}]);
//# sourceMappingURL=component---src-templates-blog-template-js-8ddc184a54a2d04e6208.js.map