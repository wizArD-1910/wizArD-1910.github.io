(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{171:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return d});a(66),a(100);var n=a(0),r=a.n(n),l=a(176),o=a(180),i=(a(191),a(195)),c=(a(192),a(181)),s=a(185),u=a.n(s),m=a(233);a(172);t.default=function(e){var t=e.data.allMarkdownRemark,n=i.chain(t.edges).groupBy(function(e){return e.node.fields.slug.split("/")[2]}).map(function(e){return e}).value();return r.a.createElement(c.ThemeToggler,null,function(e){var t,i=e.theme,c=e.toggleTheme;return r.a.createElement(o.a,null,r.a.createElement("h1",{className:"blogHeader"},r.a.createElement("span",{onClick:function(e){return window.location.replace("/")}},"Aman Dave's Notes"),r.a.createElement("div",{style:{float:"right",fontSize:"20px",paddingTop:"10px"}},r.a.createElement("label",null,r.a.createElement(u.a,((t={checked:"dark"===i,className:"dark-theme",onChange:function(e){return c(e?"dark":"light")},value:"dark"===i,onColor:"#ffc663",onHandleColor:"#eb8621",handleDiameter:33,uncheckedIcon:r.a.createElement("img",{src:a(187),height:"20px",style:{marginLeft:"7px"}}),checkedIcon:r.a.createElement("img",{src:a(188),height:"20px",style:{marginLeft:"5px"}}),boxShadow:"0px 1px 5px rgba(0, 0, 0, 0.6)",activeBoxShadow:"0px 0px 1px 10px rgba(0, 0, 0, 0.2)",height:26,width:60}).className="react-switch",t.id="material-switch",t))))),r.a.createElement("br",null),r.a.createElement("div",{style:{backgroundColor:"var(--bg)",minHeight:"95vh",color:"var(--textNormal)",transition:"color 0.2s ease-out, background 0.2s ease-out"},className:"post-list"},r.a.createElement(m.a,null,n.map(function(e,t){return r.a.createElement(m.b,{key:e[0].node.fields.slug.split("/")[1]},r.a.createElement(m.d,null,r.a.createElement(m.c,null,e[0].node.fields.slug.split("/")[2].toUpperCase()))," ",e.map(function(e,t){var a=e.node;return r.a.createElement(m.e,{key:a.frontmatter.title},r.a.createElement(l.a,{to:a.fields.slug,className:"link"},r.a.createElement("div",{className:"post-list",style:{fontSize:"20px"}},a.frontmatter.title)))}))}))),r.a.createElement("br",null))})};var d="275017638"},176:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(5),o=a.n(l),i=a(41),c=a.n(i);a.d(t,"a",function(){return c.a}),a.d(t,"b",function(){return i.withPrefix});a(177),r.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},177:function(e,t,a){var n;e.exports=(n=a(178))&&n.default||n},178:function(e,t,a){"use strict";a.r(t);a(43);var n=a(0),r=a.n(n),l=a(5),o=a.n(l),i=a(65),c=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},179:function(e){e.exports={data:{site:{siteMetadata:{title:"Aman Dave"}}}}},180:function(e,t,a){"use strict";var n=a(179),r=a(0),l=a.n(r),o=a(5),i=a.n(o),c=a(176),s=function(e){var t=e.siteTitle;return l.a.createElement("header",{style:{background:"#007bff",marginBottom:"1.45rem"}},l.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},l.a.createElement("h1",{style:{margin:0}},l.a.createElement(c.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};s.propTypes={siteTitle:i.a.string},s.defaultProps={siteTitle:""};a(163);var u=function(e){var t=e.children;n.data;return l.a.createElement("div",{style:{backgroundColor:"var(--bg)",color:"var(--textNormal)",transition:"color 0.2s ease-out, background 0.2s ease-out"}},l.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},l.a.createElement("main",null,t),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("footer",{style:{textAlign:"center"}},"© ",(new Date).getFullYear(),", Built with ❤ By"," ",l.a.createElement("a",{href:"https://www.linkedin.com/in/aman-dave/"},"Aman"))))};u.propTypes={children:i.a.node.isRequired};t.a=u},187:function(e,t,a){e.exports=a.p+"static/moon-aa4c148b755cef9618c91d49cd4a72e8.png"},188:function(e,t,a){e.exports=a.p+"static/sun-636b3a1eef4b1172bab054bd83b14e36.png"}}]);
//# sourceMappingURL=component---src-pages-notes-js-fe1955ed9cb05b4cd217.js.map