!function(){return function t(e,i,n){function r(o,l){if(!i[o]){if(!e[o]){var s="function"==typeof require&&require;if(!l&&s)return s(o,!0);if(a)return a(o,!0);var c=new Error("Cannot find module '"+o+"'");throw c.code="MODULE_NOT_FOUND",c}var u=i[o]={exports:{}};e[o][0].call(u.exports,function(t){return r(e[o][1][t]||t)},u,u.exports,t,e,i,n)}return i[o].exports}for(var a="function"==typeof require&&require,o=0;o<n.length;o++)r(n[o]);return r}}()({1:[function(t,e,i){
/*! xtend v0.4.26 (https://getxtend.com/)
@copyright (c) 2017 - 2018 Riccardo Caroli
@license MIT (https://github.com/minimit/xtend-library/blob/master/LICENSE) */
"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.XtUtil=void 0;var n=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var i=[],n=!0,r=!1,a=void 0;try{for(var o,l=t[Symbol.iterator]();!(n=(o=l.next()).done)&&(i.push(o.value),!e||i.length!==e);n=!0);}catch(t){r=!0,a=t}finally{try{!n&&l.return&&l.return()}finally{if(r)throw a}}return i}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),r=t("./xtend"),a={currents:{},initAll:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,e=!0,i=!1,n=void 0;try{for(var a,o=t.querySelectorAll("[data-xt-toggle]")[Symbol.iterator]();!(e=(a=o.next()).done);e=!0){var l=a.value;new r.XtToggle(l)}}catch(t){i=!0,n=t}finally{try{!e&&o.return&&o.return()}finally{if(i)throw n}}var s=!0,c=!1,u=void 0;try{for(var d,f=t.querySelectorAll("[data-xt-drop]")[Symbol.iterator]();!(s=(d=f.next()).done);s=!0){var h=d.value;new r.XtDrop(h)}}catch(t){c=!0,u=t}finally{try{!s&&f.return&&f.return()}finally{if(c)throw u}}var v=!0,y=!1,p=void 0;try{for(var m,g=t.querySelectorAll("[data-xt-overlay]")[Symbol.iterator]();!(v=(m=g.next()).done);v=!0){var w=m.value;new r.XtOverlay(w)}}catch(t){y=!0,p=t}finally{try{!v&&g.return&&g.return()}finally{if(y)throw p}}var b=!0,x=!1,O=void 0;try{for(var S,A=t.querySelectorAll("[data-xt-sticky]")[Symbol.iterator]();!(b=(S=A.next()).done);b=!0){var k=S.value;new r.XtSticky(k)}}catch(t){x=!0,O=t}finally{try{!b&&A.return&&A.return()}finally{if(x)throw O}}}};a.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)},a.cancelAnimationFrame=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||function(t){window.clearTimeout(id)},a.checkInside=function(t,e){var i=!1,n=!0,r=!1,a=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done);n=!0){var s=o.value;(t.target===s||s.contains(t.target))&&(i=!0)}}catch(t){r=!0,a=t}finally{try{!n&&l.return&&l.return()}finally{if(r)throw a}}return i},a.checkOutside=function(t,e){var i=!1,n=!0,r=!1,a=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done);n=!0){var s=o.value;t.target===s||s.contains(t.target)||(i=!0)}}catch(t){r=!0,a=t}finally{try{!n&&l.return&&l.return()}finally{if(r)throw a}}return i},a.scrollbarWidth=function(){var t=document.createElement("div");t.style.visibility="hidden",t.style.width="100px",t.style.msOverflowStyle="scrollbar",document.body.appendChild(t);var e=t.offsetWidth;t.style.overflow="scroll";var i=document.createElement("div");i.style.width="100%",t.appendChild(i);var n=i.offsetWidth;return t.parentNode.removeChild(t),e-n},a.getUniqueID=function(){return a.uid=void 0!==a.uid?a.uid:0,"unique-id-"+a.uid++},a.merge=function(t){var e={},i=!0,r=!1,a=void 0;try{for(var o,l=t[Symbol.iterator]();!(i=(o=l.next()).done);i=!0){var s=o.value,c=!0,u=!1,d=void 0;try{for(var f,h=Object.entries(s)[Symbol.iterator]();!(c=(f=h.next()).done);c=!0){var v=n(f.value,2),y=v[0],p=v[1];e[y]=p}}catch(t){u=!0,d=t}finally{try{!c&&h.return&&h.return()}finally{if(u)throw d}}}}catch(t){r=!0,a=t}finally{try{!i&&l.return&&l.return()}finally{if(r)throw a}}return e},a.arrSingle=function(t){if(void 0===t.length){var e=new Array(1);return e[0]=t,e}return t},a.createElement=function(t){var e=document.createElement("div");return e.innerHTML=t.trim(),e.firstChild},a.parents=function(t,e){for(var i=[];t=t.parentElement.closest(e);)i.push(t);return i},a.xtUtilOn=function(t,e,i){this.namespaces||(this.namespaces={}),this.namespaces[t]=e;var n=i||!1;return this.addEventListener(t.split(".")[0],e,n),this},a.xtUtilOff=function(t){return this.namespaces&&(this.removeEventListener(t.split(".")[0],this.namespaces[t]),delete this.namespaces[t]),this},window.xtUtilOn=Element.prototype.xtUtilOn=a.xtUtilOn,window.xtUtilOff=Element.prototype.xtUtilOff=a.xtUtilOff,window.XtUtil=a,i.XtUtil=a,function(t,e){try{t.querySelector(":scope body")}catch(a){for(var i=["querySelector","querySelectorAll"],n=function(){var n=i[r],a=e[n];e[n]=function(e){if(/(^|,)\s*:scope/.test(e)){var i=this.id;this.id="ID_"+Date.now(),e=e.replace(/((^|,)\s*):scope/g,"$1#"+this.id);var r=t[n](e);return this.id=i,r}return a.call(this,e)}},r=0;r<i.length;r++)n()}}(window.document,Element.prototype)},{"./xtend":2}],2:[function(t,e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.XtSticky=i.XtOverlay=i.XtDrop=i.XtToggle=i.Xt=void 0;var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),r=t("./xtend-utils");function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function l(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var c=function(){function t(e,i,n){s(this,t),this.object=e,this.defaults=this.constructor.defaults,this.options=r.XtUtil.merge([this.defaults,i||{}]);var a=this.object.getAttribute(n);this.options=r.XtUtil.merge([this.options,a?JSON.parse(a):{}]),this.options.class&&(this.options.classes=[].concat(l(this.options.class.split(" ")))),this.initSetup(),this.initScope()}return n(t,[{key:"initSetup",value:function(){var t=this.options;t.targets&&-1!==t.targets.indexOf("#")?(this.mode="all",this.container=document,t.max=1/0,this.namespace=t.targets.toString()+"-"+t.classes.toString()):(this.mode="unique",this.container=this.object,this.namespace=r.XtUtil.getUniqueID()),this.namespace=this.namespace.replace(/\W+/g,""),this.getCurrents()||this.setCurrents([])}},{key:"initScope",value:function(){var t=this,e=t.options;if(this.elements=[],e.elements&&(this.elements=r.XtUtil.arrSingle(this.container.querySelectorAll(e.elements))),this.elements.length||(this.elements=r.XtUtil.arrSingle(this.object),r.XtUtil.requestAnimationFrame.call(window,function(){t.elements=r.XtUtil.arrSingle(document.querySelectorAll("[data-xt-namespace="+t.namespace+"]"))})),e.targets){var i=Array.from(this.container.querySelectorAll(e.targets));i=i.filter(function(t){return!r.XtUtil.parents(t,e.targets).length}),this.targets=r.XtUtil.arrSingle(i)}if(e.appendTo){var n=document.querySelectorAll(e.appendTo);n.length&&this.targets.forEach(function(t){n[0].appendChild(t)})}var a=!0,o=!1,s=void 0;try{for(var c,u=this.elements[Symbol.iterator]();!(a=(c=u.next()).done);a=!0){c.value.setAttribute("data-xt-namespace",t.namespace)}}catch(t){o=!0,s=t}finally{try{!a&&u.return&&u.return()}finally{if(o)throw s}}r.XtUtil.requestAnimationFrame.call(window,function(){if(t.elements.length){var i=t.options.classes,n=!0,r=!1,a=void 0;try{for(var o,s=t.elements[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var c,u=o.value;(c=u.classList).contains.apply(c,l(i))&&t.eventOn(u)}}catch(t){r=!0,a=t}finally{try{!n&&s.return&&s.return()}finally{if(r)throw a}}var d=e.min-t.getCurrents().length;if(d)for(var f=0;f<d;f++)t.eventOn(t.elements[f])}})}},{key:"initEvents",value:function(){var t=this,e=t.options,i=!0,n=!1,a=void 0;try{for(var o,s=this.elements[Symbol.iterator]();!(i=(o=s.next()).done);i=!0){var c=o.value;if(e.on){var u=[].concat(l(e.on.split(" "))),d=!0,f=!1,h=void 0;try{for(var v,y=u[Symbol.iterator]();!(d=(v=y.next()).done);d=!0){var p=v.value;c.xtUtilOff(p+".xtend"),c.xtUtilOn(p+".xtend",function(i){e.onOutside?r.XtUtil.checkOutside(i,t.container.querySelectorAll(e.targets))&&t.eventOn(this):t.eventOn(this)})}}catch(t){f=!0,h=t}finally{try{!d&&y.return&&y.return()}finally{if(f)throw h}}}if(e.off){var m=[].concat(l(e.off.split(" "))),g=!0,w=!1,b=void 0;try{for(var x,O=m[Symbol.iterator]();!(g=(x=O.next()).done);g=!0){var S=x.value;c.xtUtilOff(S+".xtend"),c.xtUtilOn(S+".xtend",function(i){e.offOutside?r.XtUtil.checkOutside(i,t.container.querySelectorAll(e.targets))&&t.eventOff(this):t.eventOff(this)})}}catch(t){w=!0,b=t}finally{try{!g&&O.return&&O.return()}finally{if(w)throw b}}}}}catch(t){n=!0,a=t}finally{try{!i&&s.return&&s.return()}finally{if(n)throw a}}}},{key:"getElements",value:function(t){if(!this.elements||!this.elements.length)return{all:[],single:null};if("all"===this.mode)return{all:this.elements,single:this.elements[0]};if("unique"===this.mode){var e=t.getAttribute("data-group");if(e){var i=Array.from(this.elements).filter(function(t){return t.getAttribute("data-group")===e}),n=r.XtUtil.arrSingle(i);return{all:n,single:n[0]}}var a=t;return{all:r.XtUtil.arrSingle(a),single:a}}}},{key:"getTargets",value:function(t){if(!this.targets||!this.targets.length)return[];if("all"===this.mode)return this.targets;if("unique"===this.mode){var e=t.getAttribute("data-group"),i=Array.from(this.elements).filter(function(t){return t.getAttribute("data-group")===e}),n=Array.from(this.targets).filter(function(t){return t.getAttribute("data-group")===e});if(e){var a=n;return r.XtUtil.arrSingle(a)}var o=n[i.findIndex(function(e){return e===t})];return r.XtUtil.arrSingle(o)}}},{key:"getAdditional",value:function(){var t=this.options;return this.object.querySelectorAll(t.additional)}},{key:"getCurrents",value:function(){return r.XtUtil.currents[this.namespace]}},{key:"setCurrents",value:function(t){r.XtUtil.currents[this.namespace]=t}},{key:"addCurrent",value:function(t){r.XtUtil.currents[this.namespace].push(t)}},{key:"removeCurrent",value:function(t){r.XtUtil.currents[this.namespace]=r.XtUtil.currents[this.namespace].filter(function(e){return e!==t})}},{key:"eventOn",value:function(t){var e,i=this,n=i.options;if((e=t.classList).contains.apply(e,l(this.options.classes)))this.eventOff(t);else{var r=this.getElements(t);this.addCurrent(r.single);var a=this.getTargets(t),o=this.getAdditional(r.single),s={elements:function(){i.activationOn(r.all,r,"elements")},targets:function(){i.activationOn(a,r,"targets")},additional:function(){i.activationOn(o,r,"additional")}},c=this.getCurrents();c.length>n.max?this.eventOff(c[0],s):(s.elements(),s.targets(),s.additional())}}},{key:"eventOff",value:function(t,e){var i;if(this.options.min-this.getCurrents().length&&(i=t.classList).contains.apply(i,l(this.options.classes))){var n=this.getElements(t);this.removeCurrent(n.single),this.activationOff(n.all,n,"elements",e);var r=this.getTargets(t);this.activationOff(r,n,"targets",e);var a=this.getAdditional(n.all);this.activationOff(a,n,"additional",e)}}},{key:"activationOn",value:function(t,e,i){var n=this.options,r=!0,a=!1,o=void 0;try{for(var s,c=t[Symbol.iterator]();!(r=(s=c.next()).done);r=!0){var u,d=s.value;(u=d.classList).add.apply(u,l(n.classes)),d.classList.remove("out"),this.activationOnAnimate(d,i),"targets"===i&&(this.specialClassHtmlOn(),this.specialBackdrop(d),this.specialCenterOn(d),this.specialMiddleOn(d),this.specialCollapseOn(d),this.specialCloseOn(d,e.single),this.specialScrollbarOn()),d.dispatchEvent(new Event("on"))}}catch(t){a=!0,o=t}finally{try{!r&&c.return&&c.return()}finally{if(a)throw o}}}},{key:"activationOnAnimate",value:function(t,e){var i=function(t,e){t.classList.contains("collapse-height")&&(t.style.height="auto"),t.classList.contains("collapse-width")&&(t.style.width="auto")},n=this.activationTiming(t);if(clearTimeout(parseFloat(t.getAttribute("xt-activation-animation-timeout"))),n){var r=setTimeout(function(t,e){i(t)},n,t,e);t.setAttribute("xt-activation-animation-timeout",r)}else i(t)}},{key:"activationOff",value:function(t,e,i,n){var r=this.options,a=!0,o=!1,s=void 0;try{for(var c,u=t[Symbol.iterator]();!(a=(c=u.next()).done);a=!0){var d,f=c.value;(d=f.classList).remove.apply(d,l(r.classes)),f.classList.add("out"),this.activationOffAnimate(f,i,n),n&&n[i]&&r.instant&&r.instant[i]&&n[i](),"targets"===i&&(this.specialClassHtmlOff(),this.specialCollapseOff(f),this.specialCloseOff(f)),f.dispatchEvent(new Event("off"))}}catch(t){o=!0,s=t}finally{try{!a&&u.return&&u.return()}finally{if(o)throw s}}}},{key:"activationOffAnimate",value:function(t,e,i){var n=this,r=n.options,a=function(t,e){t.classList.remove("out"),"targets"===e&&n.specialScrollbarOff(),i&&i[e]&&(r.instant&&r.instant[e]||i[e]())},o=this.activationTiming(t);if(clearTimeout(parseFloat(t.getAttribute("xt-activation-animation-timeout"))),o){var l=setTimeout(function(t,e){a(t,e)},o,t,e);t.setAttribute("xt-activation-animation-timeout",l)}else a(t,e)}},{key:"activationTiming",value:function(t){var e=this.options.timing,i=getComputedStyle(t),n=parseFloat(i.transitionDuration)+parseFloat(i.transitionDelay),r=parseFloat(i.animationDuration)+parseFloat(i.animationDelay);return(n||r)&&(e=Math.max(n,r)),1e3*e}},{key:"specialClassHtmlOn",value:function(){var t,e=this.options;e.classHtml&&(t=document.documentElement.classList).add.apply(t,l(e.classHtml.split(" ")))}},{key:"specialClassHtmlOff",value:function(){var t,e=this.options;e.classHtml&&(t=document.documentElement.classList).remove.apply(t,l(e.classHtml.split(" ")))}},{key:"specialBackdrop",value:function(t){var e=this.options;if(e.backdrop){var i=void 0;"object"===e.backdrop?i=r.XtUtil.arrSingle(this.object):"targets"===e.backdrop?i=r.XtUtil.arrSingle(t):(i=t.querySelectorAll(e.backdrop)).length||(i=this.object.querySelectorAll(e.backdrop));var n=!0,a=!1,o=void 0;try{for(var l,s=i[Symbol.iterator]();!(n=(l=s.next()).done);n=!0){var c=l.value,u=c.querySelectorAll(".xt-backdrop");u.length||(u=r.XtUtil.createElement('<div class="xt-backdrop"></div>'),c.append(u))}}catch(t){a=!0,o=t}finally{try{!n&&s.return&&s.return()}finally{if(a)throw o}}}}},{key:"specialCenterOn",value:function(t){if(t.classList.contains("drop-center")){var e=this.object.clientWidth,i=t.clientWidth;t.style.left=(e-i)/2+"px"}}},{key:"specialMiddleOn",value:function(t){if(t.classList.contains("drop-middle")){var e=this.object.clientHeight,i=t.clientHeight;t.style.top=(e-i)/2+"px"}}},{key:"specialCollapseOn",value:function(t){if(t.classList.contains("collapse-height")){t.classList.add("no-transition"),t.style.height="auto",t.style.paddingTop="",t.style.paddingBottom="";var e=t.clientHeight+"px",i=t.style.paddingTop,n=t.style.paddingBottom;r.XtUtil.requestAnimationFrame.call(window,function(){t.style.height="0",t.style.paddingTop="0",t.style.paddingBottom="0",r.XtUtil.requestAnimationFrame.call(window,function(){t.classList.remove("no-transition"),t.style.height=e,t.style.paddingTop=i,t.style.paddingBottom=n})})}if(t.classList.contains("collapse-width")){t.style.width="auto",t.style.paddingLeft="",t.style.paddingRight="";var a=t.clientHeight+"px",o=t.style.paddingLeft,l=t.style.paddingRight;r.XtUtil.requestAnimationFrame.call(window,function(){t.style.width="0",t.style.paddingLeft="0",t.style.paddingRight="0",r.XtUtil.requestAnimationFrame.call(window,function(){t.classList.remove("no-transition"),t.style.width=a,t.style.paddingLeft=o,t.style.paddingRight=l})})}}},{key:"specialCollapseOff",value:function(t){if(t.classList.contains("collapse-height")){var e=t.clientHeight+"px",i=t.style.paddingTop,n=t.style.paddingBottom;r.XtUtil.requestAnimationFrame.call(window,function(){t.style.height=e,t.style.paddingTop=i,t.style.paddingBottom=n,r.XtUtil.requestAnimationFrame.call(window,function(){t.style.height="0",t.style.paddingTop="0",t.style.paddingBottom="0"})})}if(t.classList.contains("collapse-width")){var a=t.clientWidth+"px",o=t.style.paddingLeft,l=t.style.paddingRight;r.XtUtil.requestAnimationFrame.call(window,function(){t.style.width=a,t.style.paddingLeft=o,t.style.paddingRight=l,r.XtUtil.requestAnimationFrame.call(window,function(){t.style.width="0",t.style.paddingLeft="0",t.style.paddingRight="0"})})}}},{key:"specialCloseOn",value:function(t,e){var i=this,n=i.options;if(n.closeInside){var a=t.querySelectorAll(n.closeInside);r.XtUtil.requestAnimationFrame.call(window,function(){var t=!0,n=!1,o=void 0;try{for(var l,s=a[Symbol.iterator]();!(t=(l=s.next()).done);t=!0){var c=l.value;c.xtUtilOff("click.xtend."+i.namespace),c.xtUtilOn("click.xtend."+i.namespace,function(t){r.XtUtil.checkInside(t,r.XtUtil.arrSingle(this))&&i.eventOff(e)})}}catch(t){n=!0,o=t}finally{try{!t&&s.return&&s.return()}finally{if(n)throw o}}})}if(n.closeOutside){var o=document.documentElement.querySelectorAll(n.closeOutside);r.XtUtil.requestAnimationFrame.call(window,function(){var n=!0,a=!1,l=void 0;try{for(var s,c=o[Symbol.iterator]();!(n=(s=c.next()).done);n=!0){var u=s.value;u.xtUtilOff("click.xtend."+i.namespace),u.xtUtilOn("click.xtend."+i.namespace,function(n){r.XtUtil.checkOutside(n,r.XtUtil.arrSingle(t))&&i.eventOff(e)})}}catch(t){a=!0,l=t}finally{try{!n&&c.return&&c.return()}finally{if(a)throw l}}})}}},{key:"specialCloseOff",value:function(t){var e=this.options;if(e.closeInside){var i=t.querySelectorAll(e.closeInside),n=!0,r=!1,a=void 0;try{for(var o,l=i[Symbol.iterator]();!(n=(o=l.next()).done);n=!0){o.value.xtUtilOff("click.xtend."+this.namespace)}}catch(t){r=!0,a=t}finally{try{!n&&l.return&&l.return()}finally{if(r)throw a}}}if(e.closeOutside){var s=document.documentElement.querySelectorAll(e.closeOutside),c=!0,u=!1,d=void 0;try{for(var f,h=s[Symbol.iterator]();!(c=(f=h.next()).done);c=!0){f.value.xtUtilOff("click.xtend."+this.namespace)}}catch(t){u=!0,d=t}finally{try{!c&&h.return&&h.return()}finally{if(u)throw d}}}}},{key:"specialScrollbarOn",value:function(){var t=this;if(t.options.scrollbar){var e=r.XtUtil.scrollbarWidth(),i=document.documentElement.querySelectorAll(".xt-check-fixed > *"),n=!0,a=!1,o=void 0;try{for(var l,s=i[Symbol.iterator]();!(n=(l=s.next()).done);n=!0){var c=l.value;"fixed"===getComputedStyle(c).position?c.classList.add("xt-fixed"):c.classList.remove("xt-fixed")}}catch(t){a=!0,o=t}finally{try{!n&&s.return&&s.return()}finally{if(a)throw o}}i=document.documentElement.querySelectorAll(".xt-fixed");var u=!0,d=!1,f=void 0;try{for(var h,v=function(){var i=h.value;if(i.style.paddingRight="",""===t.normalizeWidth(i.clientWidth)){var n="calc("+getComputedStyle(i).paddingRight+" + "+e+"px)";i.classList.add("no-transition"),r.XtUtil.requestAnimationFrame.call(window,function(){i.style.paddingRight=n,r.XtUtil.requestAnimationFrame.call(window,function(){i.classList.remove("no-transition")})})}},y=i[Symbol.iterator]();!(u=(h=y.next()).done);u=!0)v()}catch(t){d=!0,f=t}finally{try{!u&&y.return&&y.return()}finally{if(d)throw f}}i=document.documentElement.querySelectorAll(".xt-backdrop");var p=!0,m=!1,g=void 0;try{for(var w,b=i[Symbol.iterator]();!(p=(w=b.next()).done);p=!0){w.value.style.right=e+"px"}}catch(t){m=!0,g=t}finally{try{!p&&b.return&&b.return()}finally{if(m)throw g}}var x=document.documentElement;x.style.paddingRight=e+"px",x.classList.add("xt-scrollbar")}}},{key:"specialScrollbarOff",value:function(){if(this.options.scrollbar){var t=document.documentElement;t.style.paddingRight="",t.classList.remove("xt-scrollbar");var e=document.documentElement.querySelectorAll(".xt-fixed"),i=!0,n=!1,a=void 0;try{for(var o,l=function(){var t=o.value;t.classList.add("no-transition"),r.XtUtil.requestAnimationFrame.call(window,function(){t.style.paddingRight="",r.XtUtil.requestAnimationFrame.call(window,function(){t.classList.remove("no-transition")})})},s=e[Symbol.iterator]();!(i=(o=s.next()).done);i=!0)l()}catch(t){n=!0,a=t}finally{try{!i&&s.return&&s.return()}finally{if(n)throw a}}e=document.documentElement.querySelectorAll(".xt-backdrop");var c=!0,u=!1,d=void 0;try{for(var f,h=e[Symbol.iterator]();!(c=(f=h.next()).done);c=!0){f.value.style.right=""}}catch(t){u=!0,d=t}finally{try{!c&&h.return&&h.return()}finally{if(u)throw d}}}}},{key:"normalizeWidth",value:function(t){return t+r.XtUtil.scrollbarWidth()===window.innerWidth?t="":t+="px",t}}]),t}();c.defaults={class:"active"},window.Xt=c,i.Xt=c;var u=function(t){function e(t,i){s(this,e);var n=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,"data-xt-toggle"));return n.initEvents(),n}return o(e,c),e}();u.defaults={elements:":scope > a, :scope > button",targets:':scope > [class^="toggle-"], :scope > [class*=" toggle-"]',class:"active",instant:{elements:!0},on:"click",min:0,max:1},window.XtToggle=u,i.XtToggle=u;var d=function(t){function e(t,i){s(this,e);var n=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,"data-xt-drop"));return n.initEvents(),n}return o(e,c),e}();d.defaults={elements:":scope",targets:":scope > .drop",additional:":scope > a, :scope > button",class:"active",instant:{elements:!0},on:"click",onOutside:!0,offOutside:!0,min:0,max:1,closeOutside:"body"},window.XtDrop=d,i.XtDrop=d;var f=function(t){function e(t,i){s(this,e);var n=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,"data-xt-overlay"));return n.initEvents(),n}return o(e,c),e}();f.defaults={elements:":scope > a, :scope > button",targets:":scope > .overlay-outer",class:"active",instant:{elements:!0},on:"click",min:0,max:1,appendTo:"body",backdrop:"targets",closeInside:".overlay-dismiss, :scope > .xt-backdrop, :scope .overlay-inner > .btn-close",scrollbar:!0},window.XtOverlay=f,i.XtOverlay=f;var h=function(t){function e(t,i){s(this,e);var n=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,"data-xt-sticky"));return n.initEvents(),n}return o(e,c),n(e,[{key:"initScope",value:function(){(function t(e,i,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,i);if(void 0===r){var a=Object.getPrototypeOf(e);return null===a?void 0:t(a,i,n)}if("value"in r)return r.value;var o=r.get;return void 0!==o?o.call(n):void 0})(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"initScope",this).call(this),this.mode="all",this.container=r.XtUtil.parents(this.object,".xt-container"),this.container.length||(this.container=r.XtUtil.createElement('<div class="xt-container xt-check-fixed"></div>'),this.object.before(this.container),this.container.append(this.object),this.container=r.XtUtil.parents(this.object,".xt-container")),this.targets=this.container[0].querySelectorAll(".xt-clone"),this.targets.length||(this.targets=this.object.cloneNode(!0),this.targets.classList.add("xt-clone"),this.container[0].append(this.targets)),this.targets=r.XtUtil.arrSingle(this.targets),this.object.classList.add("xt-fixed")}},{key:"initEvents",value:function(){var t=this,e=t.options,i=[].concat(l(e.on.split(" "))),n=!0,r=!1,a=void 0;try{for(var o,s=i[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var c=o.value;window.xtUtilOff(c+".xtend"+this.namespace),window.xtUtilOn(c+".xtend"+this.namespace,function(e){t.eventScroll(t.object,!0)})}}catch(t){r=!0,a=t}finally{try{!n&&s.return&&s.return()}finally{if(r)throw a}}t.eventScroll(t.object),t.object.addEventListener("refresh",function(e){t.eventScroll(t.object,!1,e.scrollTop,e.scrollTopOld)})}},{key:"eventScroll",value:function(t,e,i,n){var a=this.options,o=0;i=i||document.documentElement.scrollTop,n=n||this.scrollTopOld;var s,c=window.innerHeight,u=this.object,d=u.getBoundingClientRect(),f=u.clientHeight,h=this.container[0].getBoundingClientRect();i>n?(u.classList.remove("sticky-up"),u.classList.add("sticky-down"),s=!1):(u.classList.remove("sticky-down"),u.classList.add("sticky-up"),s=!0);var v=void 0;"down"===a.hide&&(u.classList.add("sticky-hide-down","sticky-anim"),s||(v=-f)),"up"===a.hide&&(u.classList.add("sticky-hide-up","sticky-anim"),s&&(v=-f));var y=this.eventScrollPos(a.limit.top||this.targets,i,h.top,!1),p=this.eventScrollPos(a.limit.bottom,i,1/0,!1)-f;"bottom"===a.position&&(y+=f-c,p+=f-c);var m=0,g=0;a.contain&&(a.contain.top&&(m=this.eventScrollHeight(a.contain.top,s))>0&&(o=m),a.contain.bottom&&m>(g=this.eventScrollPos(a.contain.bottom)-f)&&(o=g,this.options.contain.bottom));var w,b,x=i>=y-o,O=i<p+o;x&&O?((w=t.classList).contains.apply(w,l(this.options.classes))||this.eventOn(t),o=v||o):(b=t.classList).contains.apply(b,l(this.options.classes))&&this.eventOff(t);u.classList.remove("sticky-top","sticky-bottom"),x||u.classList.add("sticky-top"),O||u.classList.add("sticky-bottom"),o!==this.addOld&&(u.classList.add("no-transition"),u.style[a.position]=d.top+"px","#sticky-contain-top"===a.contain.top&&console.log(o),r.XtUtil.cancelAnimationFrame.call(window,this.scrollFrame),this.scrollFrame=r.XtUtil.requestAnimationFrame.call(window,function(){u.classList.remove("no-transition"),u.style[a.position]=o+"px"}));var S=this.normalizeWidth(this.container[0].clientWidth);u.style.width=S,this.addOld=o,this.scrollTopOld=i}},{key:"eventScrollPos",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];this.options;if(isNaN(parseFloat(t))){var a=Array.isArray(t)?t:document.querySelectorAll(t);if(a.length){n&&(a=Array.from(a).filter(function(t){return!t.classList.contains("xt-clone")})),i=e;var o=!0,l=!1,s=void 0;try{for(var c,u=a[Symbol.iterator]();!(o=(c=u.next()).done);o=!0){var d=c.value,f=r.XtUtil.parents(d,".xt-container");if(f.length){var h=parseFloat(d.style[this.options.position])||0,v=Math.floor(f[0].getBoundingClientRect().top)+h;i+=v>h?v:h,this.object.getAttribute("id")}}}catch(t){l=!0,s=t}finally{try{!o&&u.return&&u.return()}finally{if(l)throw s}}}}else i=t;return i}},{key:"eventScrollHeight",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],r=this.options;if(isNaN(parseFloat(t))){var a=Array.isArray(t)?t:document.querySelectorAll(t);if(a.length){n&&(a=Array.from(a).filter(function(t){return!t.classList.contains("xt-clone")}));var o=!1,l=!0,s=!1,c=void 0;try{for(var u,d=a[Symbol.iterator]();!(l=(u=d.next()).done);l=!0){var f=u.value;f.classList.contains("sticky-hide-down")?e&&(i+=f.clientHeight,o=!0,r.contain.top):f.classList.contains("sticky-hide-up")?e||(i+=f.clientHeight,o=!0,r.contain.top):(i+=f.clientHeight,r.contain.top)}}catch(t){s=!0,c=t}finally{try{!l&&d.return&&d.return()}finally{if(s)throw c}}o&&this.object.classList.add("sticky-anim")}}else i=t;return i}}]),e}();h.defaults={class:"active",on:"scroll resize",min:0,max:1/0,position:"top",limit:{bottom:1/0},contain:!1,hide:!1},window.XtSticky=h,i.XtSticky=h},{"./xtend-utils":1}]},{},[2]);
//# sourceMappingURL=xtend.js.map
