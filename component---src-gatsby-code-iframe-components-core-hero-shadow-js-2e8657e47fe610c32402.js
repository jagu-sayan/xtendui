(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"33yf":function(e,t,n){(function(e){function n(e,t){for(var n=0,i=e.length-1;i>=0;i--){var r=e[i];"."===r?e.splice(i,1):".."===r?(e.splice(i,1),n++):n&&(e.splice(i,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function i(e,t){if(e.filter)return e.filter(t);for(var n=[],i=0;i<e.length;i++)t(e[i],i,e)&&n.push(e[i]);return n}t.resolve=function(){for(var t="",r=!1,s=arguments.length-1;s>=-1&&!r;s--){var a=s>=0?arguments[s]:e.cwd();if("string"!=typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(t=a+"/"+t,r="/"===a.charAt(0))}return(r?"/":"")+(t=n(i(t.split("/"),(function(e){return!!e})),!r).join("/"))||"."},t.normalize=function(e){var s=t.isAbsolute(e),a="/"===r(e,-1);return(e=n(i(e.split("/"),(function(e){return!!e})),!s).join("/"))||s||(e="."),e&&a&&(e+="/"),(s?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(i(e,(function(e,t){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,n){function i(e){for(var t=0;t<e.length&&""===e[t];t++);for(var n=e.length-1;n>=0&&""===e[n];n--);return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var r=i(e.split("/")),s=i(n.split("/")),a=Math.min(r.length,s.length),o=a,c=0;c<a;c++)if(r[c]!==s[c]){o=c;break}var l=[];for(c=o;c<r.length;c++)l.push("..");return(l=l.concat(s.slice(o))).join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!=typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,i=-1,r=!0,s=e.length-1;s>=1;--s)if(47===(t=e.charCodeAt(s))){if(!r){i=s;break}}else r=!1;return-1===i?n?"/":".":n&&1===i?"/":e.slice(0,i)},t.basename=function(e,t){var n=function(e){"string"!=typeof e&&(e+="");var t,n=0,i=-1,r=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!r){n=t+1;break}}else-1===i&&(r=!1,i=t+1);return-1===i?"":e.slice(n,i)}(e);return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){"string"!=typeof e&&(e+="");for(var t=-1,n=0,i=-1,r=!0,s=0,a=e.length-1;a>=0;--a){var o=e.charCodeAt(a);if(47!==o)-1===i&&(r=!1,i=a+1),46===o?-1===t?t=a:1!==s&&(s=1):-1!==t&&(s=-1);else if(!r){n=a+1;break}}return-1===t||-1===i||0===s||1===s&&t===i-1&&t===n+1?"":e.slice(t,i)};var r="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n("8oxB"))},IRUh:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var i=n("dI71"),r=n("q1tI"),s=n.n(r),a=n("iyGq"),o=n("KQm4"),c=(n("yLb1"),function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.demo,i=e.children;if("undefined"!=typeof window){var r;n("RoSU");var a=n("Zz1u").Xt,c="gatsby_iframe-inside";t.container&&(c+=" gatsby_iframe-container"),(r=document.documentElement.classList).add.apply(r,Object(o.a)(c.split(" "))),document.documentElement.setAttribute("id","iframe--"+t.name);a.ready((function(){window.self!==window.top&&window.parent.initIframe(window.name,t.htmlSource,t.jsxSource,t.cssSource,t.jsSource)}))}return s.a.createElement(s.a.Fragment,null,i)},t}(s.a.Component)),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){var e=this.props.demo,t={title:"Demo",description:"Demo"};return e.path=("/demos/"+e.dirs.join("/")+"/"+e.name).replace("/iframe","").replace("src/gatsby/code/",""),e.cssSource=e.path+".css",e.jsSource=e.path+".js",s.a.createElement(c,{demo:e},s.a.createElement(a.a,{title:t.title,description:t.description}),s.a.createElement("div",{id:"body-outer"},s.a.createElement("div",{id:"gatsby_body-inner",className:"gatsby_demo_source--from",dangerouslySetInnerHTML:{__html:e.htmlSource}})))},t}(s.a.Component)},ggMg:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"demo",(function(){return m}));var i=n("dI71"),r=n("q1tI"),s=n.n(r),a=n("33yf"),o=n.n(a),c=n("IRUh"),l=n("sf5o").default,d=e.replace(/\\/g,"/"),u=o.a.dirname(d).split("/"),m={container:!1,name:o.a.basename(d,".js"),dirs:u};m.htmlSource='\n<div class="relative block overflow-hidden w-full">\n  <div class="media-container h-screen">\n    <div class="media-inner">\n      <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">\n    </div>\n    <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>\n  </div>\n  <div class="container-fluid absolute inset-0 flex items-end justify-center text-center justify-start text-left">\n    <div class="block w-full max-w-xl container-y text-white links-inverse">\n      <div class="h1">\n        Lorem ipsum dolor sit amet\n      </div>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.</p>\n      <div class="list list-2 justify-center justify-start">\n        <a href="#" class="btn btn-md rounded-md '+l()+'">\n          Lorem ipsum\n        </a>\n        <a href="#" class="btn btn-md rounded-md '+l()+'">\n          Dolor sit amet\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class="relative block overflow-hidden w-full">\n  <div class="media-container h-screen">\n    <div class="media-inner">\n      <img class="media object-cover object-center" src="/img-alt.svg" loading="lazy" alt="">\n    </div>\n    <div class="absolute inset-0 bg-gradient-to-b bg-gradient-to-l from-transparent to-black opacity-50"></div>\n  </div>\n  <div class="container-fluid absolute inset-0 flex items-end justify-center text-center items-center justify-start text-left">\n    <div class="block w-full max-w-xl container-y text-white links-inverse">\n      <div class="h1">\n        Lorem ipsum dolor sit amet\n      </div>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.</p>\n      <div class="list list-2 justify-center justify-start">\n        <a href="#" class="btn btn-md rounded-md '+l()+'">\n          Lorem ipsum\n        </a>\n        <a href="#" class="btn btn-md rounded-md '+l()+'">\n          Dolor sit amet\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class="relative block overflow-hidden w-full">\n  <div class="media-container h-screen">\n    <div class="media-inner">\n      <img class="media object-cover object-center" src="/img.svg" loading="lazy" alt="">\n    </div>\n    <div class="absolute inset-0 bg-gradient-to-b bg-gradient-to-r from-transparent to-black opacity-50"></div>\n  </div>\n  <div class="container-fluid absolute inset-0 flex items-end justify-center text-center items-center justify-end text-right">\n    <div class="block w-full max-w-xl container-y text-white links-inverse">\n      <div class="h1">\n        Lorem ipsum dolor sit amet\n      </div>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.</p>\n      <div class="list list-2 justify-center justify-end">\n        <a href="#" class="btn btn-md rounded-md '+l()+'">\n          Lorem ipsum\n        </a>\n        <a href="#" class="btn btn-md rounded-md '+l()+'">\n          Dolor sit amet\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n';var f=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){return s.a.createElement(c.a,{demo:m})},t}(s.a.Component);t.default=f}.call(this,"src/gatsby/code/iframe/components/core/hero/shadow.js")}}]);
//# sourceMappingURL=component---src-gatsby-code-iframe-components-core-hero-shadow-js-2e8657e47fe610c32402.js.map