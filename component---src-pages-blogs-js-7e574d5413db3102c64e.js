(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{168:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return y});a(203);var r=a(42),n=a.n(r),i=a(8),s=a.n(i),l=a(0),o=a.n(l),d=a(174),c=a(177),u=a(189),f=a.n(u),m=a(191),g=a(192),p=a.n(g),h=a(184),b=a(197),v=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={theme:"dark",checked:!1},a.handleTheme=a.handleTheme.bind(n()(a)),a.handleChange=a.handleChange.bind(n()(a)),a}s()(t,e);var a=t.prototype;return a.handleTheme=function(e){console.log(e)},a.handleChange=function(e){this.setState({checked:e})},a.render=function(){var e=this.props.data.allMarkdownRemark.edges;return o.a.createElement(h.ThemeToggler,null,function(t){var a=t.theme,r=t.toggleTheme;return o.a.createElement(c.a,null,o.a.createElement("h1",{style:{paddingTop:"50px",fontFamily:"Blippo"}},"Aman Dave",o.a.createElement("div",{style:{float:"right",fontSize:"20px"}},o.a.createElement(b.a,{onChange:function(e){return r(e.target.checked?"dark":"light")},checked:"dark"===a,type:"switch",id:"exampleCustomSwitch",name:"customSwitch",label:"Dark Mode"}))),o.a.createElement("br",null),o.a.createElement(p.a,{right:!0},o.a.createElement("div",{style:{backgroundColor:"var(--bg)",color:"var(--textNormal)",transition:"color 0.2s ease-out, background 0.2s ease-out"},className:"post-list"},e.map(function(e){return o.a.createElement("div",{key:e.node.id,className:"post-list__item",style:{border:"1px solid #393e46",marginBottom:"50px"}},o.a.createElement("div",{className:"post-list__thumbnail"},o.a.createElement(d.a,{to:e.node.fields.slug},o.a.createElement(f.a,{fixed:e.node.frontmatter.thumbnail.childImageSharp.fixed}))),o.a.createElement("div",{className:"post-list__content"},o.a.createElement(d.a,{to:e.node.fields.slug},o.a.createElement("h2",null,e.node.frontmatter.title)),e.node.frontmatter.tags?o.a.createElement("div",{className:"tags-container"},o.a.createElement("ul",{className:"taglist"},e.node.frontmatter.tags.map(function(e){return o.a.createElement("li",{key:e+"tag"},o.a.createElement(d.a,{to:"/tags/"+Object(m.kebabCase)(e)+"/"},e))}))):null,o.a.createElement("p",null,e.node.frontmatter.date),o.a.createElement("div",{className:"post-list__excerpt"},e.node.excerpt)))}))))})},t}(o.a.Component);t.default=v;var y="816308439"},173:function(e,t,a){var r;e.exports=(r=a(176))&&r.default||r},174:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(5),s=a.n(i),l=a(41),o=a.n(l);a.d(t,"a",function(){return o.a});a(173),n.a.createContext({});s.a.object,s.a.string.isRequired,s.a.func,s.a.func},175:function(e){e.exports={data:{site:{siteMetadata:{title:"Welcome to a not so cool website"}}}}},176:function(e,t,a){"use strict";a.r(t);a(43);var r=a(0),n=a.n(r),i=a(5),s=a.n(i),l=a(65),o=function(e){var t=e.location,a=e.pageResources;return a?n.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};o.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=o},177:function(e,t,a){"use strict";var r=a(175),n=a(0),i=a.n(n),s=a(5),l=a.n(s),o=a(174),d=function(e){var t=e.siteTitle;return i.a.createElement("header",{style:{background:"#007bff",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(o.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};d.propTypes={siteTitle:l.a.string},d.defaultProps={siteTitle:""};a(163);var c=function(e){var t=e.children;r.data;return i.a.createElement("div",{style:{backgroundColor:"var(--bg)",color:"var(--textNormal)",transition:"color 0.2s ease-out, background 0.2s ease-out"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("footer",{style:{textAlign:"center"}},"© ",(new Date).getFullYear(),", Built with ❤ By"," ",i.a.createElement("a",{href:"https://www.linkedin.com/in/aman-dave/"},"Aman"))))};c.propTypes={children:l.a.node.isRequired};t.a=c},189:function(e,t,a){"use strict";var r=a(10);t.__esModule=!0,t.default=void 0;var n,i=r(a(8)),s=r(a(42)),l=r(a(99)),o=r(a(98)),d=r(a(0)),c=r(a(5)),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},m=Object.create({}),g=function(e){var t=u(e),a=f(t);return m[a]||!1},p="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,v=new WeakMap;function y(e){return e.map(function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),d.default.createElement("source",{media:n,srcSet:a,sizes:i}))})}function E(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),t.concat(a)}function S(e){return e.map(function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function w(e){return e.map(function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function O(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var L=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),v.delete(e.target),t())}})},{rootMargin:"200px"})),n);return a&&(a.observe(e),v.set(e,t)),function(){a.unobserve(e),v.delete(e)}},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?O(e,!0):"")+O(e)}).join("")+"<img "+d+s+l+a+r+t+i+n+o+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},k=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,n=e.spreadProps,i=d.default.createElement(x,(0,o.default)({src:t},n));return a.length>1?d.default.createElement("picture",null,r(a),i):i},x=d.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,m=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return d.default.createElement("img",(0,o.default)({sizes:a,srcSet:r,src:n},m,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});x.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var N=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&g(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!p&&b&&!t.critical&&!a.seenBefore;var r=t.critical||h&&(p||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),m[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,s=e.imgStyle,l=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,g=e.fluid,p=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,E=e.itemProp,O=e.loading,L=e.draggable,N=!1===this.state.fadeIn||this.state.imgLoaded,T=!0===this.state.fadeIn&&!this.state.imgCached,j=(0,o.default)({opacity:N?1:0,transition:T?"opacity "+b+"ms":"none"},l),I="boolean"==typeof h?"lightgray":h,z={transitionDelay:b+"ms"},C=(0,o.default)({opacity:this.state.imgLoaded?0:1},T&&z,l,f),V={title:t,alt:this.state.isVisible?"":a,style:C,className:m};if(g){var q=g,M=q[0];return d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(M.srcSet)},d.default.createElement(v,{style:{width:"100%",paddingBottom:100/M.aspectRatio+"%"}}),I&&d.default.createElement(v,{title:t,style:(0,o.default)({backgroundColor:I,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},T&&z)}),M.base64&&d.default.createElement(k,{src:M.base64,spreadProps:V,imageVariants:q,generateSources:w}),M.tracedSVG&&d.default.createElement(k,{src:M.tracedSVG,spreadProps:V,imageVariants:q,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,y(q),d.default.createElement(x,{alt:a,title:t,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:j,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:O,draggable:L})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,o.default)({alt:a,title:t,loading:O},M,{imageVariants:q}))}}))}if(p){var _=p,F=_[0],P=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:F.width,height:F.height},i);return"inherit"===i.display&&delete P.display,d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:P,ref:this.handleRef,key:"fixed-"+JSON.stringify(F.srcSet)},I&&d.default.createElement(v,{title:t,style:(0,o.default)({backgroundColor:I,width:F.width,opacity:this.state.imgLoaded?0:1,height:F.height},T&&z)}),F.base64&&d.default.createElement(k,{src:F.base64,spreadProps:V,imageVariants:_,generateSources:w}),F.tracedSVG&&d.default.createElement(k,{src:F.tracedSVG,spreadProps:V,imageVariants:_,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,y(_),d.default.createElement(x,{alt:a,title:t,width:F.width,height:F.height,sizes:F.sizes,src:F.src,crossOrigin:this.props.crossOrigin,srcSet:F.srcSet,style:j,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:O,draggable:L})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,o.default)({alt:a,title:t,loading:O},F,{imageVariants:_}))}}))}return null},t}(d.default.Component);N.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var T=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),j=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});N.propTypes={resolutions:T,sizes:j,fixed:c.default.oneOfType([T,c.default.arrayOf(T)]),fluid:c.default.oneOfType([j,c.default.arrayOf(j)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var I=N;t.default=I},197:function(e,t,a){"use strict";var r=a(178),n=a(181),i=a(0),s=a.n(i),l=a(5),o=a.n(l),d=a(179),c=a.n(d),u=a(180),f={className:o.a.string,id:o.a.oneOfType([o.a.string,o.a.number]).isRequired,type:o.a.string.isRequired,label:o.a.node,inline:o.a.bool,valid:o.a.bool,invalid:o.a.bool,bsSize:o.a.string,htmlFor:o.a.string,cssModule:o.a.object,children:o.a.oneOfType([o.a.node,o.a.array,o.a.func]),innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])};function m(e){var t=e.className,a=e.label,i=e.inline,l=e.valid,o=e.invalid,d=e.cssModule,f=e.children,m=e.bsSize,g=e.innerRef,p=e.htmlFor,h=Object(n.a)(e,["className","label","inline","valid","invalid","cssModule","children","bsSize","innerRef","htmlFor"]),b=h.type,v=Object(u.f)(c()(t,"custom-"+b,!!m&&"custom-"+b+"-"+m),d),y=Object(u.f)(c()(o&&"is-invalid",l&&"is-valid"),d),E=p||h.id;if("select"===b)return s.a.createElement("select",Object(r.a)({},h,{ref:g,className:c()(y,v)}),f);if("file"===b)return s.a.createElement("div",{className:v},s.a.createElement("input",Object(r.a)({},h,{ref:g,className:c()(y,Object(u.f)("custom-file-input",d))})),s.a.createElement("label",{className:Object(u.f)("custom-file-label",d),htmlFor:E},a||"Choose file"));if("checkbox"!==b&&"radio"!==b&&"switch"!==b)return s.a.createElement("input",Object(r.a)({},h,{ref:g,className:c()(y,v)}));var S=c()(v,Object(u.f)(c()("custom-control",{"custom-control-inline":i}),d));return s.a.createElement("div",{className:S},s.a.createElement("input",Object(r.a)({},h,{type:"switch"===b?"checkbox":b,ref:g,className:c()(y,Object(u.f)("custom-control-input",d))})),s.a.createElement("label",{className:Object(u.f)("custom-control-label",d),htmlFor:E},a),f)}m.propTypes=f,t.a=m},203:function(e,t,a){"use strict";a(204)("fixed",function(e){return function(){return e(this,"tt","","")}})},204:function(e,t,a){var r=a(9),n=a(13),i=a(25),s=/"/g,l=function(e,t,a,r){var n=String(i(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),l+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(l),r(r.P+r.F*n(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}}}]);
//# sourceMappingURL=component---src-pages-blogs-js-7e574d5413db3102c64e.js.map