(window.webpackJsonp=window.webpackJsonp||[]).push([[48,44],{"2iEb":function(e,t,n){"use strict";n.r(t),t.default=()=>"text-black xt-links-default bg-gray-200"},"33yf":function(e,t,n){(function(e){function n(e,t){for(var n=0,i=e.length-1;i>=0;i--){var r=e[i];"."===r?e.splice(i,1):".."===r?(e.splice(i,1),n++):n&&(e.splice(i,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function i(e,t){if(e.filter)return e.filter(t);for(var n=[],i=0;i<e.length;i++)t(e[i],i,e)&&n.push(e[i]);return n}t.resolve=function(){for(var t="",r=!1,s=arguments.length-1;s>=-1&&!r;s--){var o=s>=0?arguments[s]:e.cwd();if("string"!=typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(t=o+"/"+t,r="/"===o.charAt(0))}return(r?"/":"")+(t=n(i(t.split("/"),(function(e){return!!e})),!r).join("/"))||"."},t.normalize=function(e){var s=t.isAbsolute(e),o="/"===r(e,-1);return(e=n(i(e.split("/"),(function(e){return!!e})),!s).join("/"))||s||(e="."),e&&o&&(e+="/"),(s?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(i(e,(function(e,t){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,n){function i(e){for(var t=0;t<e.length&&""===e[t];t++);for(var n=e.length-1;n>=0&&""===e[n];n--);return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var r=i(e.split("/")),s=i(n.split("/")),o=Math.min(r.length,s.length),a=o,l=0;l<o;l++)if(r[l]!==s[l]){a=l;break}var c=[];for(l=a;l<r.length;l++)c.push("..");return(c=c.concat(s.slice(a))).join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!=typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),n=47===t,i=-1,r=!0,s=e.length-1;s>=1;--s)if(47===(t=e.charCodeAt(s))){if(!r){i=s;break}}else r=!1;return-1===i?n?"/":".":n&&1===i?"/":e.slice(0,i)},t.basename=function(e,t){var n=function(e){"string"!=typeof e&&(e+="");var t,n=0,i=-1,r=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!r){n=t+1;break}}else-1===i&&(r=!1,i=t+1);return-1===i?"":e.slice(n,i)}(e);return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){"string"!=typeof e&&(e+="");for(var t=-1,n=0,i=-1,r=!0,s=0,o=e.length-1;o>=0;--o){var a=e.charCodeAt(o);if(47!==a)-1===i&&(r=!1,i=o+1),46===a?-1===t?t=o:1!==s&&(s=1):-1!==t&&(s=-1);else if(!r){n=o+1;break}}return-1===t||-1===i||0===s||1===s&&t===i-1&&t===n+1?"":e.slice(t,i)};var r="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(this,n("8oxB"))},IRUh:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var i=n("q1tI"),r=n.n(i),s=n("iyGq"),o=n("KQm4");n("yLb1");class a extends r.a.Component{render(){const{demo:e,children:t}=this.props;if("undefined"!=typeof window){var i;n("RoSU");const t=n("Zz1u").Xt;let r="gatsby_iframe-inside";e.container&&(r+=" gatsby_iframe-container"),(i=document.documentElement.classList).add.apply(i,Object(o.a)(r.split(" "))),document.documentElement.setAttribute("id","iframe--"+e.name);const s=()=>{window.self!==window.top&&window.parent.initIframe(window.name,e.htmlSource,e.jsxSource,e.cssSource,e.jsSource)};t.ready(s)}return r.a.createElement(r.a.Fragment,null,t)}}class l extends r.a.Component{render(){const{demo:e}=this.props,t={title:"Demo",description:"Demo"};return e.path=("/demos/"+e.dirs.join("/")+"/"+e.name).replace("/iframe","").replace("src/gatsby/code/",""),e.cssSource=e.path+".css",e.jsSource=e.path+".js",r.a.createElement(a,{demo:e},r.a.createElement(s.a,{title:t.title,description:t.description}),r.a.createElement("div",{id:"body-outer"},r.a.createElement("div",{id:"gatsby_body-inner",className:"gatsby_demo_source--from",dangerouslySetInnerHTML:{__html:e.htmlSource}})))}}},OtHy:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"demo",(function(){return h}));var i=n("q1tI"),r=n.n(i),s=n("33yf"),o=n.n(s),a=n("IRUh");const l=n("JNwN").default,c=n("2iEb").default,d=n("Yg7f").default,u=n("+8/F").default,g=n("TaEE").iconX,v=n("TaEE").iconChevronDown,p=e.replace(/\\/g,"/"),m=o.a.dirname(p).split("/"),h={container:!1,name:o.a.basename(p,".js"),dirs:m};h.htmlSource='\n\x3c!-- For seo purpose add product metadata https://developers.google.com/search/docs/data-types/product --\x3e\n\n<div class="site-wrapper">\n\n  <header class="site-header">\n    <div class="xt-card text-sm p-6 '+d()+'">\n      <div class="xt-h4 ">Header</div>\n    </div>\n  </header>\n\n  <main class="site-main">\n\n    <div class="container">\n      <div class="xt-row xt-row-8 lg:xt-row-12 items-stretch">\n\n        <div class="w-full md:w-5/12 lg:w-6/12 xl:w-7/12">\n          <div class="relative md:py-12">\n            <div class="product-gallery">\n\n              <div class="xt-list flex-col">\n\n                <a href="#product-image-overlay-1" class="product-image w-full" id="product-image-1" title="Expand image 1">\n                  <div class="xt-media-container bg-gray-700" data-xt-overlay="{ targets: \'#overlay-product-images\' }">\n                    <div class="xt-media-inner relative">\n                      <img class="xt-media" src="/img.svg" loading="eager" alt=""/>\n                    </div>\n                    <div class="xt-media-mask absolute inset-0 pointer-events-none bg-white transform -translate-y-full"></div>\n                  </div>\n                </a>\n\n                <a href="#product-image-overlay-2" class="product-image w-full" id="product-image-2" title="Expand image 2">\n                  <div class="xt-media-container bg-gray-700" data-xt-overlay="{ targets: \'#overlay-product-images\' }">\n                    <div class="xt-media-inner relative">\n                      <img class="xt-media" src="/img-alt.svg" loading="eager" alt=""/>\n                    </div>\n                    <div class="xt-media-mask absolute inset-0 pointer-events-none bg-white transform -translate-y-full"></div>\n                  </div>\n                </a>\n\n                <a href="#product-image-overlay-3" class="product-image w-full" id="product-image-3" title="Expand image 3">\n                  <div class="xt-media-container bg-gray-700" data-xt-overlay="{ targets: \'#overlay-product-images\' }">\n                    <div class="xt-media-inner relative">\n                      <img class="xt-media" src="/img.svg" loading="eager" alt=""/>\n                    </div>\n                    <div class="xt-media-mask absolute inset-0 pointer-events-none bg-white transform -translate-y-full"></div>\n                  </div>\n                </a>\n\n                <a href="#product-image-overlay-4" class="product-image w-full" id="product-image-4" title="Expand image 4">\n                  <div class="xt-media-container bg-gray-700" data-xt-overlay="{ targets: \'#overlay-product-images\' }">\n                    <div class="xt-media-inner relative">\n                      <img class="xt-media" src="/img-alt.svg" loading="eager" alt=""/>\n                    </div>\n                    <div class="xt-media-mask absolute inset-0 pointer-events-none bg-white transform -translate-y-full"></div>\n                  </div>\n                </a>\n\n                <a href="#product-image-overlay-5" class="product-image w-full" id="product-image-5" title="Expand image 5">\n                  <div class="xt-media-container bg-gray-700" data-xt-overlay="{ targets: \'#overlay-product-images\' }">\n                    <div class="xt-media-inner relative">\n                      <img class="xt-media"" src="/img.svg" loading="eager" alt=""/>\n                    </div>\n                    <div class="xt-media-mask absolute inset-0 pointer-events-none bg-white transform -translate-y-full"></div>\n                  </div>\n                </a>\n\n              </div>\n\n              <div class="absolute h-full bottom-0 left-0 right-0 md:hidden">\n                <div class="xt-list flex-col h-full justify-center">\n\n                  <a href="#product-image-1" class="product-dot group py-1.5 px-2 flex items-center justify-center" title="Go to image 1">\n                    <div class="bg-black rounded-full border-2 border-transparent group-active:bg-transparent group-active:border-black"></div>\n                  </a>\n\n                  <a href="#product-image-2" class="product-dot group py-1.5 px-2 flex items-center justify-center" title="Go to image 2">\n                    <div class="bg-black rounded-full border-2 border-transparent group-active:bg-transparent group-active:border-black"></div>\n                  </a>\n\n                  <a href="#product-image-3" class="product-dot group py-1.5 px-2 flex items-center justify-center" title="Go to image 3">\n                    <div class="bg-black rounded-full border-2 border-transparent group-active:bg-transparent group-active:border-black"></div>\n                  </a>\n\n                  <a href="#product-image-4" class="product-dot group py-1.5 px-2 flex items-center justify-center" title="Go to image 4">\n                    <div class="bg-black rounded-full border-2 border-transparent group-active:bg-transparent group-active:border-black"></div>\n                  </a>\n\n                  <a href="#product-image-5" class="product-dot group py-1.5 px-2 flex items-center justify-center" title="Go to image 5">\n                    <div class="bg-black rounded-full border-2 border-transparent group-active:bg-transparent group-active:border-black"></div>\n                  </a>\n\n                </div>\n              </div>\n\n              <div class="xt-overlay ease-in-out-quint duration-500 opacity-0 active:ease-out-quint active:opacity-100" id="overlay-product-images">\n                <div class="xt-overlay-container p-0">\n                  <button type="button" class="xt-button xt-dismiss fixed z-last mr-2 top-0 right-0 p-5 text-2xl" aria-label="Close">\n                    '+g()+'\n                  </button>\n                  <div class="xt-overlay-inner">\n\n                    <div class="xt-card items-center justify-center shadow-overlay '+u()+'">\n                      <div class="w-full">\n\n                        <div class="xt-media-container bg-gray-700">\n                          <div class="xt-media-inner relative">\n                            <img class="xt-media" id="product-image-overlay-1" src="/img.svg" loading="lazy" alt=""/>\n                          </div>\n                        </div>\n\n                        <div class="xt-media-container bg-gray-700">\n                          <div class="xt-media-inner relative">\n                            <img class="xt-media" id="product-image-overlay-2" src="/img-alt.svg" loading="lazy" alt=""/>\n                          </div>\n                        </div>\n\n                        <div class="xt-media-container bg-gray-700">\n                          <div class="xt-media-inner relative">\n                            <img class="xt-media" id="product-image-overlay-3" src="/img.svg" loading="lazy" alt=""/>\n                          </div>\n                        </div>\n\n                        <div class="xt-media-container bg-gray-700">\n                          <div class="xt-media-inner relative">\n                            <img class="xt-media" id="product-image-overlay-4" src="/img-alt.svg" loading="eagelazyr" alt=""/>\n                          </div>\n                        </div>\n\n                        <div class="xt-media-container bg-gray-700">\n                          <div class="xt-media-inner relative">\n                            <img class="xt-media" id="product-image-overlay-5" src="/img.svg" loading="lazy" alt=""/>\n                          </div>\n                        </div>\n\n                      </div>\n                    </div>\n                  </div>\n\n                </div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n\n        <div class="w-full md:w-7/12 lg:w-6/12 xl:w-5/12" id="product-continue-target" data-xt-stickyflow>\n          <div class="stickyflow-filler pointer-events-none absolute md:relative"></div>\n          <div class="pb-12 md:py-12 md:sticky stickyflow">\n\n            <h1 class="xt-h2 ">\n              Lorem ipsum dolor sit amet\n            </h1>\n\n            <div class="xt-h5  mb-6">\n              €&nbsp;229,00\n            </div>\n\n            <a href="#" class="xt-button text-base py-2.5 px-4 rounded-md mb-6 '+l()+'">\n              Add to cart\n            </a>\n\n            <div class="text-opacity-75">\n              <p><strong>(navigate on mobile for different behaviour)</strong></p>\n              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec mauris est. Etiam egestas efficitur semper. Donec imperdiet eget justo at pellentesque. Proin a ultricies orci. Vivamus ut scelerisque lorem. Suspendisse lobortis consequat magna ut ultricies. Duis consequat vitae justo nec commodo. Vestibulum id eros eu sapien aliquam feugiat. Aenean id accumsan orci, nec elementum ex. Fusce a dolor in lacus facilisis vulputate vitae vitae nunc. Phasellus odio quam, semper in finibus at, consequat quis lacus. Sed varius sem commodo tellus pretium, posuere pharetra mauris elementum. Nunc et aliquam velit, quis suscipit justo. Ut ac pretium massa. Aenean ullamcorper mollis urna eu pharetra.</p>\n              <p>Proin eget lectus pharetra, pretium nunc sed, pulvinar nibh. Quisque ac tellus ac mi posuere tristique. Ut dictum elit sed facilisis rutrum. In sagittis ac ante at blandit. Sed at felis fermentum, semper lorem sed, sagittis lacus. Cras justo massa, molestie sit amet lacinia a, luctus ac velit. Cras tristique, urna in hendrerit laoreet, nisi sem interdum urna, rutrum elementum nisl turpis id est.</p>\n              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec mauris est. Etiam egestas efficitur semper. Donec imperdiet eget justo at pellentesque. Proin a ultricies orci. Vivamus ut scelerisque lorem. Suspendisse lobortis consequat magna ut ultricies. Duis consequat vitae justo nec commodo. Vestibulum id eros eu sapien aliquam feugiat. Aenean id accumsan orci, nec elementum ex. Fusce a dolor in lacus facilisis vulputate vitae vitae nunc. Phasellus odio quam, semper in finibus at, consequat quis lacus. Sed varius sem commodo tellus pretium, posuere pharetra mauris elementum. Nunc et aliquam velit, quis suscipit justo. Ut ac pretium massa. Aenean ullamcorper mollis urna eu pharetra.</p>\n            </div>\n\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n    <a href="#product-continue-target" class="product-continue fixed md:hidden p-4 z-sticky bottom-0 inset-x-0 text-4xl text-center bg-gradient-to-b from-transparent to-white" title="Scroll to content">\n      '+v()+'\n    </a>\n\n  </main>\n\n  <footer class="site-footer">\n    <div class="xt-card text-sm p-6 '+c()+'">\n      <div class="xt-h4 ">Footer</div>\n    </div>\n  </footer>\n\n</div>\n';class f extends r.a.Component{render(){return r.a.createElement(a.a,{demo:h})}}t.default=f}.call(this,"src/gatsby/code/iframe/themes/gallery/products-gallery-v1.js")},TaEE:function(e,t,n){"use strict";n.r(t),n.d(t,"iconX",(function(){return i})),n.d(t,"iconSearch",(function(){return r})),n.d(t,"iconArrowLeft",(function(){return s})),n.d(t,"iconArrowRight",(function(){return o})),n.d(t,"iconArrowUp",(function(){return a})),n.d(t,"iconArrowDown",(function(){return l})),n.d(t,"iconChevronLeft",(function(){return c})),n.d(t,"iconChevronRight",(function(){return d})),n.d(t,"iconChevronUp",(function(){return u})),n.d(t,"iconChevronDown",(function(){return g})),n.d(t,"iconLocate",(function(){return v})),n.d(t,"iconTwitter",(function(){return p})),n.d(t,"iconPackage",(function(){return m})),n.d(t,"iconGithub",(function(){return h})),n.d(t,"iconLink",(function(){return f})),n.d(t,"iconCode",(function(){return w})),n.d(t,"iconMaximize",(function(){return x})),n.d(t,"iconExternal",(function(){return y})),n.d(t,"iconCopy",(function(){return b}));const i=({classes:e=null}={})=>'<svg xmlns="http://www.w3.org/2000/svg" class="xt-icon'+(e=e?" "+e:"")+'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',r=({classes:e=null}={})=>'<svg xmlns="http://www.w3.org/2000/svg" class="xt-icon'+(e=e?" "+e:"")+'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>',s=({classes:e=null}={})=>'<svg xmlns="http://www.w3.org/2000/svg" class="xt-icon'+(e=e?" "+e:"")+'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>',o=({classes:e=null}={})=>'<svg xmlns="http://www.w3.org/2000/svg" class="xt-icon'+(e=e?" "+e:"")+'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>',a=({classes:e=null}={})=>'<svg xmlns="http://www.w3.org/2000/svg" class="xt-icon'+(e=e?" "+e:"")+'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg>',l=({classes:e=null}={})=>'<svg xmlns="http://www.w3.org/2000/svg" class="xt-icon'+(e=e?" "+e:"")+'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>',c=({classes:e=null}={})=>'<svg xmlns="http://www.w3.org/2000/svg" class="xt-icon'+(e=e?" "+e:"")+'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>',d=({classes:e=null}={})=>'<svg xmlns="http://www.w3.org/2000/svg" class="xt-icon'+(e=e?" "+e:"")+'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>',u=({classes:e=null}={})=>'<svg xmlns="http://www.w3.org/2000/svg" class="xt-icon'+(e=e?" "+e:"")+'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>',g=({classes:e=null}={})=>'<svg xmlns="http://www.w3.org/2000/svg" class="xt-icon'+(e=e?" "+e:"")+'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>',v=({classes:e=null}={})=>'<svg xmlns="http://www.w3.org/2000/svg" class="xt-icon'+(e=e?" "+e:"")+'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>',p=({classes:e=null}={})=>'<svg xmlns="http://www.w3.org/2000/svg" class="xt-icon'+(e=e?" "+e:"")+'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>',m=({classes:e=null}={})=>'<svg xmlns="http://www.w3.org/2000/svg" class="xt-icon'+(e=e?" "+e:"")+'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>',h=({classes:e=null}={})=>'<svg xmlns="http://www.w3.org/2000/svg" class="xt-icon'+(e=e?" "+e:"")+'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>',f=({classes:e=null}={})=>'<svg xmlns="http://www.w3.org/2000/svg" class="xt-icon'+(e=e?" "+e:"")+'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>',w=({classes:e=null}={})=>'<svg xmlns="http://www.w3.org/2000/svg" class="xt-icon'+(e=e?" "+e:"")+'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',x=({classes:e=null}={})=>'<svg xmlns="http://www.w3.org/2000/svg" class="xt-icon'+(e=e?" "+e:"")+'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>',y=({classes:e=null}={})=>'<svg xmlns="http://www.w3.org/2000/svg" class="xt-icon'+(e=e?" "+e:"")+'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>',b=({classes:e=null}={})=>'<svg xmlns="http://www.w3.org/2000/svg" class="xt-icon'+(e=e?" "+e:"")+'" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>'},Yg7f:function(e,t,n){"use strict";n.r(t),t.default=()=>"text-white xt-links-inverse bg-primary-500"}}]);
//# sourceMappingURL=component---src-gatsby-code-iframe-themes-gallery-products-gallery-v-1-js-64f453210445a0951fb2.js.map