!function(){return function t(e,i,n){function a(o,l){if(!i[o]){if(!e[o]){var s="function"==typeof require&&require;if(!l&&s)return s(o,!0);if(r)return r(o,!0);var c=new Error("Cannot find module '"+o+"'");throw c.code="MODULE_NOT_FOUND",c}var u=i[o]={exports:{}};e[o][0].call(u.exports,function(t){return a(e[o][1][t]||t)},u,u.exports,t,e,i,n)}return i[o].exports}for(var r="function"==typeof require&&require,o=0;o<n.length;o++)a(n[o]);return a}}()({1:[function(t,e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=function t(e,i,n){null===e&&(e=Function.prototype);var a=Object.getOwnPropertyDescriptor(e,i);if(void 0===a){var r=Object.getPrototypeOf(e);return null===r?void 0:t(r,i,n)}if("value"in a)return a.value;var o=a.get;return void 0!==o?o.call(n):void 0},a=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var i=[],n=!0,a=!1,r=void 0;try{for(var o,l=t[Symbol.iterator]();!(n=(o=l.next()).done)&&(i.push(o.value),!e||i.length!==e);n=!0);}catch(t){a=!0,r=t}finally{try{!n&&l.return&&l.return()}finally{if(a)throw r}}return i}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function s(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var u=function(){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments[2];if(c(this,t),this.object=e,this.object){this.defaults=this.constructor.defaults,this.options=XtUtil.merge([this.defaults,i]);var a=this.object.getAttribute(n);this.options=XtUtil.merge([this.options,a?JSON.parse(a):{}]),this.options.class&&(this.options.classes=[].concat(s(this.options.class.split(" ")))),this.initSetup(),this.initScope(),this.initEvents(),this.initAria()}}return r(t,[{key:"initSetup",value:function(){var t=this.options;t.targets&&-1!==t.targets.indexOf("#")?(this.mode="unique",this.container=document.documentElement,t.max=1/0,this.namespace=t.targets.toString()+"-"+t.classes.toString()):(this.mode="multiple",this.container=this.object,this.namespace=XtUtil.getUniqueID()),this.namespace=this.namespace.replace(/^[^a-z]+|[^\w:.-]+/gi,""),this.getCurrents()||this.setCurrents([])}},{key:"initScope",value:function(){var t=this,e=t.options;if(this.elements=[],e.elements&&(this.elements=XtUtil.arrSingle(this.container.querySelectorAll(e.elements))),this.elements.length||(this.elements=XtUtil.arrSingle(this.object),XtUtil.requestAnimationFrame.call(window,function(){var e="[data-xt-namespace="+t.namespace+"]";t.elements=XtUtil.arrSingle(document.querySelectorAll(e))})),this.targets=[],e.targets){var i=Array.from(this.container.querySelectorAll(e.targets));i=i.filter(function(t){return!XtUtil.parents(t,e.targets).length}),this.targets=i}if(e.appendTo){var n=document.querySelectorAll(e.appendTo);if(n.length){var a=!0,r=!1,o=void 0;try{for(var l,c=this.targets[Symbol.iterator]();!(a=(l=c.next()).done);a=!0){var u=l.value;n[0].appendChild(u)}}catch(t){r=!0,o=t}finally{try{!a&&c.return&&c.return()}finally{if(r)throw o}}}}var d=!0,f=!1,v=void 0;try{for(var h,y=this.elements[Symbol.iterator]();!(d=(h=y.next()).done);d=!0){h.value.setAttribute("data-xt-namespace",t.namespace)}}catch(t){f=!0,v=t}finally{try{!d&&y.return&&y.return()}finally{if(f)throw v}}XtUtil.requestAnimationFrame.call(window,function(){if(t.elements.length){var i=!0,n=!1,a=void 0;try{for(var r,o=t.elements[Symbol.iterator]();!(i=(r=o.next()).done);i=!0){var l,c,u=r.value;if((l=u.classList).contains.apply(l,s(e.classes)))(c=u.classList).remove.apply(c,s(e.classes)),t.eventOn(u)}}catch(t){n=!0,a=t}finally{try{!i&&o.return&&o.return()}finally{if(n)throw a}}var d=e.min-t.getCurrents().length;if(d)for(var f=0;f<d;f++)t.eventOn(t.elements[f])}})}},{key:"initAria",value:function(){var t=this.options;if(t.aria&&this.targets.length){var e=!0,i=!1,n=void 0;try{for(var a,r=this.elements[Symbol.iterator]();!(e=(a=r.next()).done);e=!0){var o=a.value,l=this.getInside(o,t.controls),s=l.length?l[0]:o,c=s.getAttribute("id");o.dataset.namespace=XtUtil.getUniqueID(),c||s.setAttribute("id",o.dataset.namespace+"-element"),s.setAttribute("aria-selected","false")}}catch(t){i=!0,n=t}finally{try{!e&&r.return&&r.return()}finally{if(i)throw n}}var u=!0,d=!1,f=void 0;try{for(var v,h=this.targets[Symbol.iterator]();!(u=(v=h.next()).done);u=!0){var y=v.value,p=this.getElementsFromTarget(y)[0],m=y.getAttribute("id");y.dataset.namespace=p.dataset.namespace,m||(m=y.dataset.namespace+"-target",y.setAttribute("id",m)),y.setAttribute("tabindex","-1");var g=y.getAttribute("role");"tabpanel"!==g&&"listbox"!==g&&"dialog"!==g||y.setAttribute("aria-expanded","false");var b=this.getInside(p,t.controls),w=b.length?b[0]:p;w.setAttribute("aria-controls",m),y.setAttribute("aria-labelledby",w.getAttribute("id"))}}catch(t){d=!0,f=t}finally{try{!u&&h.return&&h.return()}finally{if(d)throw f}}}}},{key:"initEvents",value:function(){var t=this,e=t.options,i=!0,n=!1,a=void 0;try{for(var r,o=this.elements[Symbol.iterator]();!(i=(r=o.next()).done);i=!0){var l=r.value;if(e.on){var c=XtUtil.dataStorage.put(l,"onHandler",t.eventOnHandler.bind(t).bind(t,l)),u=[].concat(s(e.on.split(" "))),d=!0,f=!1,v=void 0;try{for(var h,y=u[Symbol.iterator]();!(d=(h=y.next()).done);d=!0){var p=h.value;l.removeEventListener(p,c),l.addEventListener(p,c)}}catch(t){f=!0,v=t}finally{try{!d&&y.return&&y.return()}finally{if(f)throw v}}l.addEventListener("on",c)}if(e.off){var m=XtUtil.dataStorage.put(l,"offHandler",t.eventOffHandler.bind(t).bind(t,l)),g=[].concat(s(e.off.split(" "))),b=!0,w=!1,k=void 0;try{for(var O,S=g[Symbol.iterator]();!(b=(O=S.next()).done);b=!0){var A=O.value;l.removeEventListener(A,m),l.addEventListener(A,m)}}catch(t){w=!0,k=t}finally{try{!b&&S.return&&S.return()}finally{if(w)throw k}}l.addEventListener("off",m)}}}catch(t){n=!0,a=t}finally{try{!i&&o.return&&o.return()}finally{if(n)throw a}}var x=!0,L=!1,X=void 0;try{for(var U,C=this.targets[Symbol.iterator]();!(x=(U=C.next()).done);x=!0){var E=U.value,q=this.getElementsFromTarget(E)[0];if(q){var T=XtUtil.dataStorage.put(q,"onHandler",t.eventOnHandler.bind(t).bind(t,q)),F=XtUtil.dataStorage.put(q,"offHandler",t.eventOffHandler.bind(t).bind(t,q));E.addEventListener("on",T),E.addEventListener("off",F)}}}catch(t){L=!0,X=t}finally{try{!x&&C.return&&C.return()}finally{if(L)throw X}}e.auto&&(this.auto(),window.addEventListener("focus",function(){t.auto()}),window.addEventListener("blur",function(){t.autoStop()}))}},{key:"eventOnHandler",value:function(t,e){if(!e.detail||!e.detail.skip){var i=this.container.querySelectorAll(".event-limit");i.length?XtUtil.checkOutside(e,i)&&this.eventOn(t):this.eventOn(t),this.options.autoPause?this.autoPause():this.options.auto&&this.auto()}}},{key:"eventOffHandler",value:function(t,e){if(!e.detail||!e.detail.skip){var i=this.container.querySelectorAll(".event-limit");i.length?XtUtil.checkOutside(e,i)&&this.eventOff(t):this.eventOff(t)}}},{key:"auto",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this,i=e.options;this.autoStop();var n=t?0:i.auto;e.autoInterval=setInterval(function(){if(!i.autoAlways&&null===e.object.offsetParent)return!1;e.autoCurrent=void 0!==e.autoCurrent?e.autoCurrent+1:0,e.autoCurrent=e.autoCurrent>=e.elements.length?0:e.autoCurrent,e.eventOn(e.elements[e.autoCurrent])},n)}},{key:"autoPause",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this,i=e.options;this.autoStop();var n=t?0:i.autoPause;"stop"!==n&&(e.autoPauseTimeout=setTimeout(function(){e.auto(!0),e.auto()},n))}},{key:"autoStop",value:function(){clearInterval(this.autoInterval),clearTimeout(this.autoPauseTimeout)}},{key:"getElements",value:function(t){if(!this.elements||!this.elements.length)return{all:[],single:null};if("unique"===this.mode)return{all:this.elements,single:this.elements[0]};if("multiple"===this.mode){var e=t.getAttribute("data-group");if(e){var i=Array.from(this.elements).filter(function(t){return t.getAttribute("data-group")===e}),n=XtUtil.arrSingle(i);return{all:n,single:n[0]}}var a=t;return{all:XtUtil.arrSingle(a),single:a}}}},{key:"getTargets",value:function(t){if(!this.targets||!this.targets.length)return[];if("unique"===this.mode)return this.targets;if("multiple"===this.mode){var e=t.getAttribute("data-group"),i=Array.from(this.elements).filter(function(t){return t.getAttribute("data-group")===e}),n=Array.from(this.targets).filter(function(t){return t.getAttribute("data-group")===e}),a=void 0;return e?(a=n,XtUtil.arrSingle(a)):(a=n[i.findIndex(function(e){return e===t})],XtUtil.arrSingle(a))}}},{key:"getInside",value:function(t,e){return e?XtUtil.arrSingle(t.querySelectorAll(e)):[]}},{key:"getElementsFromTarget",value:function(t){if(!this.elements||!this.elements.length)return[];var e=t.getAttribute("data-group"),i=Array.from(this.elements).filter(function(t){return t.getAttribute("data-group")===e}),n=Array.from(this.targets).filter(function(t){return t.getAttribute("data-group")===e}),a=void 0;return e?(a=i,XtUtil.arrSingle(a)):(a=i[n.findIndex(function(e){return e===t})],XtUtil.arrSingle(a))}},{key:"getCurrents",value:function(){return XtUtil.currents[this.namespace]}},{key:"setCurrents",value:function(t){XtUtil.currents[this.namespace]=t}},{key:"addCurrent",value:function(t){XtUtil.currents[this.namespace].push(t)}},{key:"removeCurrent",value:function(t){XtUtil.currents[this.namespace]=XtUtil.currents[this.namespace].filter(function(e){return e!==t})}},{key:"checkOn",value:function(t){var e;return(!(e=t.classList).contains.apply(e,s(this.options.classes))||t.classList.contains("off-block"))&&!t.classList.contains("on-block")}},{key:"checkOff",value:function(t){var e;return!!(this.options.min-this.getCurrents().length)&&(((e=t.classList).contains.apply(e,s(this.options.classes))||t.classList.contains("on-block"))&&!t.classList.contains("off-block"))}},{key:"eventOn",value:function(t){var e=this,i=e.options;if(this.checkOn(t)){var n=this.getElements(t);this.addCurrent(n.single);var r=this.getTargets(t),o=this.getInside(t,this.options.controls);if(this.activationDelay={},n.all.length&&(this.activationDelay.elements=function(){e.activationOn(n.all,n,"elements")}),r.length&&(this.activationDelay.targets=function(){e.activationOn(r,n,"targets")}),o.length&&(this.activationDelay.controls=function(){e.activationOn(o,n,"controls")}),i.auto){var l=0,s=!0,c=!1,u=void 0;try{for(var d,f=this.elements.entries()[Symbol.iterator]();!(s=(d=f.next()).done);s=!0){var v=a(d.value,2),h=v[0];if(v[1]===t){l=h;break}}}catch(t){c=!0,u=t}finally{try{!s&&f.return&&f.return()}finally{if(c)throw u}}this.autoCurrent=l}var y=this.getCurrents();if(y.length>i.max)this.eventOff(y[0]);else if(this.activationDelay){for(var p in this.activationDelay)e.activationDelayRun(p,!0);this.activationDelayCheckAndReset()}}else i.toggle&&this.eventOff(t)}},{key:"eventOff",value:function(t){if(this.checkOff(t)){var e=this.getElements(t);this.removeCurrent(e.single);var i=this.getTargets(t),n=this.getInside(t,this.options.controls);this.activationOff(e.all,e,"elements"),this.activationOff(i,e,"targets"),this.activationOff(n,e,"controls")}}},{key:"activationOn",value:function(t,e,i){var n=this,a=!0,r=!1,o=void 0;try{for(var l,c=t[Symbol.iterator]();!(a=(l=c.next()).done);a=!0){var u,d=l.value;if(!(u=d.classList).contains.apply(u,s(this.options.classes))){d.classList.remove("on-block","off-block"),clearTimeout(d.dataset.xtDelayTimeout),clearTimeout(d.dataset.xtAnimTimeout);var f=d.dataset.xtOnDelay;f?(d.classList.add("on-block"),d.dataset.xtDelayTimeout=setTimeout(function(t,e,i){t.classList.remove("on-block"),n.activationOnActivate(t,e,i)},parseFloat(f),d,e,i).toString()):n.activationOnActivate(d,e,i)}}}catch(t){r=!0,o=t}finally{try{!a&&c.return&&c.return()}finally{if(r)throw o}}}},{key:"activationOff",value:function(t,e,i){var n=this,a=!0,r=!1,o=void 0;try{for(var l,c=t[Symbol.iterator]();!(a=(l=c.next()).done);a=!0){var u,d=l.value;if((u=d.classList).contains.apply(u,s(this.options.classes))){d.classList.remove("on-block","off-block"),clearTimeout(d.dataset.xtDelayTimeout),clearTimeout(d.dataset.xtAnimTimeout);var f=d.dataset.xtOffDelay;f?(d.classList.add("off-block"),d.dataset.xtDelayTimeout=setTimeout(function(t,e,i){t.classList.remove("off-block"),n.activationOffDeactivate(t,e,i)},parseFloat(f),d,e,i).toString()):n.activationOffDeactivate(d,e,i)}}}catch(t){r=!0,o=t}finally{try{!a&&c.return&&c.return()}finally{if(r)throw o}}}},{key:"activationOnActivate",value:function(t,e,i){var n,a=this.options;if((n=t.classList).add.apply(n,s(a.classes)),t.classList.remove("out"),this.activationOnAnimate(t,i),"elements"===i&&a.aria){var r=this.getInside(t,a.controls);(r.length?r[0]:t).setAttribute("aria-selected","true")}if("targets"===i){if(this.specialClassHtmlOn(),this.specialBackdrop(t),this.specialCenterOn(t),this.specialMiddleOn(t),this.specialCollapseOn(t),this.specialCloseOn(t,e.single),this.specialScrollbarOn(),a.aria){var o=t.getAttribute("role");"tabpanel"!==o&&"listbox"!==o&&"dialog"!==o||t.setAttribute("aria-expanded","true")}a.aria&&a.scrollbar&&(XtUtil.focusBlock=!0,t.focus(),XtUtil.focusLimitOn(t))}t.dispatchEvent(new CustomEvent("on",{detail:{skip:!0}}))}},{key:"activationOffDeactivate",value:function(t,e,i){var n,a=this.options;(n=t.classList).remove.apply(n,s(a.classes)),t.classList.add("out"),this.activationOffAnimate(t,i),this.activationDelay&&(this.activationDelayRun(i,a.instant&&a.instant[i]),this.activationDelayCheckAndReset()),"targets"===i&&(this.specialClassHtmlOff(),this.specialCollapseOff(t),this.specialCloseOff(t)),t.dispatchEvent(new CustomEvent("off",{detail:{skip:!0}}))}},{key:"activationOnAnimate",value:function(t,e){var i=function(t,e){t.classList.contains("collapse-height")&&(t.style.height="auto"),t.classList.contains("collapse-width")&&(t.style.width="auto")},n=this.activationTiming(t);clearTimeout(t.dataset.xtAnimTimeout),n?t.dataset.xtAnimTimeout=setTimeout(function(t,e){i(t)},n,t,e).toString():i(t)}},{key:"activationOffAnimate",value:function(t,e){var i=this,n=i.options,a=function(t,e){if(t.classList.remove("out"),"elements"===e&&n.aria){var a=i.getInside(t,n.controls);(a.length?a[0]:t).setAttribute("aria-selected","false")}if("targets"===e){if(i.specialScrollbarOff(),n.aria){var r=t.getAttribute("role");"tabpanel"!==r&&"listbox"!==r&&"dialog"!==r||t.setAttribute("aria-expanded","false")}if(n.aria&&n.scrollbar){var o=XtUtil.focus;o&&o.focus(),XtUtil.focusBlock=!1,XtUtil.focusLimitOff()}}i.activationDelay&&(i.activationDelayRun(e,!n.instant||!n.instant[e]),i.activationDelayCheckAndReset())},r=this.activationTiming(t);clearTimeout(t.dataset.xtAnimTimeout),r?t.dataset.xtAnimTimeout=setTimeout(function(t,e){a(t,e)},r,t,e).toString():a(t,e)}},{key:"activationTiming",value:function(t){var e=this.options.timing;if(void 0!==e)return e;var i=getComputedStyle(t),n=parseFloat(i.transitionDuration)+parseFloat(i.transitionDelay),a=parseFloat(i.animationDuration)+parseFloat(i.animationDelay);return(n||a)&&(e=Math.max(n,a)),1e3*e}},{key:"activationDelayRun",value:function(t,e){var i=this.activationDelay[t];i&&!i.done&&e&&(i(),i.done=!0)}},{key:"activationDelayCheckAndReset",value:function(){var t=0;for(var e in this.activationDelay){this.activationDelay[e].done&&t++}t===this.activationDelay.length&&(this.activationDelay={})}},{key:"specialClassHtmlOn",value:function(){var t,e=this.options;e.classHtml&&(t=document.documentElement.classList).add.apply(t,s(e.classHtml.split(" ")))}},{key:"specialClassHtmlOff",value:function(){var t,e=this.options;e.classHtml&&(t=document.documentElement.classList).remove.apply(t,s(e.classHtml.split(" ")))}},{key:"specialBackdrop",value:function(t){var e=this.options;if(e.backdrop){var i=void 0;"object"===e.backdrop?i=XtUtil.arrSingle(this.object):"targets"===e.backdrop?i=XtUtil.arrSingle(t):(i=t.querySelectorAll(e.backdrop)).length||(i=this.object.querySelectorAll(e.backdrop));var n=!0,a=!1,r=void 0;try{for(var o,l=i[Symbol.iterator]();!(n=(o=l.next()).done);n=!0){var s=o.value,c=s.querySelectorAll(".xt-backdrop");c.length||(c=XtUtil.createElement('<div class="xt-backdrop"></div>'),s.append(c))}}catch(t){a=!0,r=t}finally{try{!n&&l.return&&l.return()}finally{if(a)throw r}}}}},{key:"specialCenterOn",value:function(t){if("true"===getComputedStyle(t).getPropertyValue("--center")){var e=this.object.clientWidth,i=t.clientWidth;t.style.left=(e-i)/2+"px"}}},{key:"specialMiddleOn",value:function(t){if("true"===getComputedStyle(t).getPropertyValue("--middle")){var e=this.object.clientHeight,i=t.clientHeight;t.style.top=(e-i)/2+"px"}}},{key:"specialCollapseOn",value:function(t){if(t.classList.contains("collapse-height")){t.classList.add("no-transition"),t.style.height="auto",t.style.paddingTop="",t.style.paddingBottom="";var e=t.clientHeight+"px",i=t.style.paddingTop,n=t.style.paddingBottom;XtUtil.requestAnimationFrame.call(window,function(){t.style.height="0",t.style.paddingTop="0",t.style.paddingBottom="0",XtUtil.requestAnimationFrame.call(window,function(){t.classList.remove("no-transition"),t.style.height=e,t.style.paddingTop=i,t.style.paddingBottom=n})})}if(t.classList.contains("collapse-width")){t.style.width="auto",t.style.paddingLeft="",t.style.paddingRight="";var a=t.clientHeight+"px",r=t.style.paddingLeft,o=t.style.paddingRight;XtUtil.requestAnimationFrame.call(window,function(){t.style.width="0",t.style.paddingLeft="0",t.style.paddingRight="0",XtUtil.requestAnimationFrame.call(window,function(){t.classList.remove("no-transition"),t.style.width=a,t.style.paddingLeft=r,t.style.paddingRight=o})})}}},{key:"specialCollapseOff",value:function(t){if(t.classList.contains("collapse-height")){var e=t.clientHeight+"px",i=t.style.paddingTop,n=t.style.paddingBottom;XtUtil.requestAnimationFrame.call(window,function(){t.style.height=e,t.style.paddingTop=i,t.style.paddingBottom=n,XtUtil.requestAnimationFrame.call(window,function(){t.style.height="0",t.style.paddingTop="0",t.style.paddingBottom="0"})})}if(t.classList.contains("collapse-width")){var a=t.clientWidth+"px",r=t.style.paddingLeft,o=t.style.paddingRight;XtUtil.requestAnimationFrame.call(window,function(){t.style.width=a,t.style.paddingLeft=r,t.style.paddingRight=o,XtUtil.requestAnimationFrame.call(window,function(){t.style.width="0",t.style.paddingLeft="0",t.style.paddingRight="0"})})}}},{key:"specialCloseOn",value:function(t,e){var i=this,n=i.options;if(n.closeInside){var a=t.querySelectorAll(n.closeInside);XtUtil.requestAnimationFrame.call(window,function(){var n=!0,r=!1,o=void 0;try{for(var l,s=a[Symbol.iterator]();!(n=(l=s.next()).done);n=!0){var c=l.value,u=XtUtil.dataStorage.put(t,"specialCloseOnHandler",i.specialCloseOnHandler.bind(i).bind(i,c,e));c.removeEventListener("click",u),c.addEventListener("click",u)}}catch(t){r=!0,o=t}finally{try{!n&&s.return&&s.return()}finally{if(r)throw o}}})}if(n.closeOutside){var r=document.querySelectorAll(n.closeOutside);XtUtil.requestAnimationFrame.call(window,function(){var n=!0,a=!1,o=void 0;try{for(var l,s=r[Symbol.iterator]();!(n=(l=s.next()).done);n=!0){var c=l.value,u=XtUtil.dataStorage.put(t,"specialCloseOffHandler",i.specialCloseOffHandler.bind(i).bind(i,t,e));c.removeEventListener("click",u),c.addEventListener("click",u)}}catch(t){a=!0,o=t}finally{try{!n&&s.return&&s.return()}finally{if(a)throw o}}})}}},{key:"specialCloseOff",value:function(t){var e=this.options;if(e.closeInside){var i=t.querySelectorAll(e.closeInside),n=!0,a=!1,r=void 0;try{for(var o,l=i[Symbol.iterator]();!(n=(o=l.next()).done);n=!0){var s=o.value,c=XtUtil.dataStorage.get(t,"specialCloseOnHandler");s.removeEventListener("click",c)}}catch(t){a=!0,r=t}finally{try{!n&&l.return&&l.return()}finally{if(a)throw r}}}if(e.closeOutside){var u=document.querySelectorAll(e.closeOutside),d=!0,f=!1,v=void 0;try{for(var h,y=u[Symbol.iterator]();!(d=(h=y.next()).done);d=!0){var p=h.value,m=XtUtil.dataStorage.get(t,"specialCloseOffHandler");p.removeEventListener("click",m)}}catch(t){f=!0,v=t}finally{try{!d&&y.return&&y.return()}finally{if(f)throw v}}}}},{key:"specialCloseOnHandler",value:function(t,e,i){XtUtil.checkInside(i,XtUtil.arrSingle(t))&&this.eventOff(e)}},{key:"specialCloseOffHandler",value:function(t,e,i){XtUtil.checkOutside(i,XtUtil.arrSingle(t))&&this.eventOff(e)}},{key:"specialScrollbarOn",value:function(){var t=this;if(t.options.scrollbar){var e=void 0,i=XtUtil.scrollbarWidth();e=document.querySelectorAll(".xt-check-fixed > *");var n=!0,a=!1,r=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done);n=!0){var s=o.value;"fixed"===getComputedStyle(s).position?s.classList.add("xt-fixed"):s.classList.remove("xt-fixed")}}catch(t){a=!0,r=t}finally{try{!n&&l.return&&l.return()}finally{if(a)throw r}}e=document.querySelectorAll(".xt-fixed");var c=!0,u=!1,d=void 0;try{for(var f,v=function(){var e=f.value;if(e.style.paddingRight="",""===t.normalizeWidth(e.clientWidth)){var n="calc("+getComputedStyle(e).paddingRight+" + "+i+"px)";e.classList.add("no-transition"),XtUtil.requestAnimationFrame.call(window,function(){e.style.paddingRight=n,XtUtil.requestAnimationFrame.call(window,function(){e.classList.remove("no-transition")})})}},h=e[Symbol.iterator]();!(c=(f=h.next()).done);c=!0)v()}catch(t){u=!0,d=t}finally{try{!c&&h.return&&h.return()}finally{if(u)throw d}}e=document.querySelectorAll(".xt-backdrop");var y=!0,p=!1,m=void 0;try{for(var g,b=e[Symbol.iterator]();!(y=(g=b.next()).done);y=!0){g.value.style.right=i+"px"}}catch(t){p=!0,m=t}finally{try{!y&&b.return&&b.return()}finally{if(p)throw m}}var w=document.documentElement;w.style.paddingRight=i+"px",w.classList.add("xt-scrollbar")}}},{key:"specialScrollbarOff",value:function(){if(this.options.scrollbar){var t=void 0;t=document.querySelectorAll(".xt-fixed");var e=!0,i=!1,n=void 0;try{for(var a,r=function(){var t=a.value;t.classList.add("no-transition"),XtUtil.requestAnimationFrame.call(window,function(){t.style.paddingRight="",XtUtil.requestAnimationFrame.call(window,function(){t.classList.remove("no-transition")})})},o=t[Symbol.iterator]();!(e=(a=o.next()).done);e=!0)r()}catch(t){i=!0,n=t}finally{try{!e&&o.return&&o.return()}finally{if(i)throw n}}t=document.querySelectorAll(".xt-backdrop");var l=!0,s=!1,c=void 0;try{for(var u,d=t[Symbol.iterator]();!(l=(u=d.next()).done);l=!0){u.value.style.right=""}}catch(t){s=!0,c=t}finally{try{!l&&d.return&&d.return()}finally{if(s)throw c}}var f=document.documentElement;f.style.paddingRight="",f.classList.remove("xt-scrollbar")}}},{key:"normalizeWidth",value:function(t){return(t=parseFloat(t))+XtUtil.scrollbarWidth()>=window.innerWidth?t="":t+="px",t}}]),t}();u.defaults={auto:!1,autoPause:!1,autoAlways:!1},window.Xt=u,i.Xt=u;var d=function(t){function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return c(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,"data-xt-toggle"))}return l(e,u),r(e,[{key:"initAria",value:function(){n(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"initAria",this).call(this);var t=this.options;if(t.aria&&this.targets.length&&"multiple"===this.mode){this.object.setAttribute("role","tablist"),t.max>1&&this.object.setAttribute("aria-multiselectable","true");var i=!0,a=!1,r=void 0;try{for(var o,l=this.elements[Symbol.iterator]();!(i=(o=l.next()).done);i=!0){var s=o.value,c=this.getInside(s,t.controls);(c.length?c[0]:s).setAttribute("role","tab")}}catch(t){a=!0,r=t}finally{try{!i&&l.return&&l.return()}finally{if(a)throw r}}var u=!0,d=!1,f=void 0;try{for(var v,h=this.targets[Symbol.iterator]();!(u=(v=h.next()).done);u=!0){v.value.setAttribute("role","tabpanel")}}catch(t){d=!0,f=t}finally{try{!u&&h.return&&h.return()}finally{if(d)throw f}}}}}]),e}();d.defaults={elements:":scope > a, :scope > button",targets:':scope > [class^="toggle-"], :scope > [class*=" toggle-"]',class:"active",instant:{elements:!0},on:"click",toggle:!0,min:0,max:1,aria:!0},window.XtToggle=d,i.XtToggle=d;var f=function(t){function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return c(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,"data-xt-drop"))}return l(e,u),r(e,[{key:"initAria",value:function(){n(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"initAria",this).call(this);var t=this.options;if(t.aria&&this.targets.length){var i=!0,a=!1,r=void 0;try{for(var o,l=this.elements[Symbol.iterator]();!(i=(o=l.next()).done);i=!0){var s=o.value,c=this.getInside(s,t.controls);(c.length?c[0]:s).setAttribute("aria-haspopup","listbox")}}catch(t){a=!0,r=t}finally{try{!i&&l.return&&l.return()}finally{if(a)throw r}}var u=!0,d=!1,f=void 0;try{for(var v,h=this.targets[Symbol.iterator]();!(u=(v=h.next()).done);u=!0){v.value.setAttribute("role","listbox")}}catch(t){d=!0,f=t}finally{try{!u&&h.return&&h.return()}finally{if(d)throw f}}}}}]),e}();f.defaults={targets:":scope > .drop",controls:":scope > a, :scope > button",class:"active",instant:{elements:!0},on:"click",toggle:!0,min:0,max:1,closeOutside:"body",aria:!0},window.XtDrop=f,i.XtDrop=f;var v=function(t){function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return c(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,"data-xt-overlay"))}return l(e,u),r(e,[{key:"initAria",value:function(){n(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"initAria",this).call(this);var t=this.options;if(t.aria&&this.targets.length){var i=!0,a=!1,r=void 0;try{for(var o,l=this.elements[Symbol.iterator]();!(i=(o=l.next()).done);i=!0){var s=o.value,c=this.getInside(s,t.controls);(c.length?c[0]:s).setAttribute("aria-haspopup","dialog")}}catch(t){a=!0,r=t}finally{try{!i&&l.return&&l.return()}finally{if(a)throw r}}var u=!0,d=!1,f=void 0;try{for(var v,h=this.targets[Symbol.iterator]();!(u=(v=h.next()).done);u=!0){var y=v.value;y.setAttribute("role","dialog"),y.setAttribute("aria-modal","true")}}catch(t){d=!0,f=t}finally{try{!u&&h.return&&h.return()}finally{if(d)throw f}}}}}]),e}();v.defaults={elements:":scope > a, :scope > button",targets:":scope > .overlay-outer",class:"active",instant:{elements:!0},on:"click",toggle:!0,min:0,max:1,appendTo:"body",backdrop:"targets",classHtml:"xt-overlay",closeInside:".overlay-dismiss, :scope > .xt-backdrop, :scope .overlay-inner > .btn-close",scrollbar:!0,aria:!0},window.XtOverlay=v,i.XtOverlay=v;var h=function(t){function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return c(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,"data-xt-sticky"))}return l(e,u),r(e,[{key:"initScope",value:function(){if(n(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"initScope",this).call(this),this.mode="unique",this.container=XtUtil.parents(this.object,".xt-container"),this.container.length||(this.container=XtUtil.createElement('<div class="xt-container xt-check-fixed"></div>'),this.object.before(this.container),this.container.append(this.object),this.container=XtUtil.parents(this.object,".xt-container")),this.targets=this.container[0].querySelectorAll(".xt-clone"),!this.targets.length){this.targets=this.object.cloneNode(!0),this.targets.classList.add("xt-clone");var t=!0,i=!1,a=void 0;try{for(var r,o=this.targets.querySelectorAll("[id]")[Symbol.iterator]();!(t=(r=o.next()).done);t=!0){var l=r.value;l.setAttribute("id",l.getAttribute("id")+"-clone")}}catch(t){i=!0,a=t}finally{try{!t&&o.return&&o.return()}finally{if(i)throw a}}var s=!0,c=!1,u=void 0;try{for(var d,f=this.targets.querySelectorAll("[name]")[Symbol.iterator]();!(s=(d=f.next()).done);s=!0){var v=d.value;v.setAttribute("name",v.getAttribute("name")+"-clone")}}catch(t){c=!0,u=t}finally{try{!s&&f.return&&f.return()}finally{if(c)throw u}}this.container[0].append(this.targets)}this.targets=XtUtil.arrSingle(this.targets),this.object.classList.add("xt-fixed"),"down"===this.options.hide?this.object.classList.add("sticky-hide-down"):this.object.classList.remove("sticky-hide-down"),"up"===this.options.hide?this.object.classList.add("sticky-hide-up"):this.object.classList.remove("sticky-hide-up"),this.unique=XtUtil.getUniqueNum(),this.object.style.zIndex=""+(100-this.unique)}},{key:"initEvents",value:function(){var t=this.options;if(t.on){var e=XtUtil.dataStorage.put(window,"stickyHandler",this.eventOnHandler.bind(this)),i=[].concat(s(t.on.split(" "))),n=!0,a=!1,r=void 0;try{for(var o,l=i[Symbol.iterator]();!(n=(o=l.next()).done);n=!0){var c=o.value;window.removeEventListener(c,e),window.addEventListener(c,e)}}catch(t){a=!0,r=t}finally{try{!n&&l.return&&l.return()}finally{if(a)throw r}}window.addEventListener("scroll.sticky",e)}window.dispatchEvent(new CustomEvent("scroll.sticky"))}},{key:"eventOnHandler",value:function(t){t.detail&&t.detail.skip||this.eventScroll(this.object)}},{key:"eventScroll",value:function(t){var e=this.options,i=!0,n=!1,a=!1,r=0,o=0,l=window.innerHeight,s=this.object,c=s.getBoundingClientRect().top,u=parseFloat(getComputedStyle(s).height),d=parseFloat(getComputedStyle(this.targets[0]).height),f=this.container[0].getBoundingClientRect().top,v=document.scrollingElement,h=v.scrollHeight,y=v.scrollTop,p=this.scrollTopOld;y<p?(s.classList.remove("sticky-down"),s.classList.add("sticky-up"),a=!0):(s.classList.add("sticky-down"),s.classList.remove("sticky-up")),"down"===e.hide&&(a||(o=d)),"up"===e.hide&&a&&(o=d);var m=this.eventScrollPos(e.limit.top||this.targets,y,f),g=this.eventScrollPos(e.limit.bottom,y,1/0);"top"===e.position&&(g-=d),"bottom"===e.position&&(m-=l-d,g=Math.abs(h-l-g));var b=0,w=0;if(e.contain){if(e.contain.top){var k=this.eventScrollHeight(e.contain.top,a);null!==(b=k.val)&&b>f?(r=b,k.foundHide||(i=!1)):b=null}e.contain.bottom&&(null!==(w=this.eventScrollPos(e.contain.bottom))&&w<u+b?(r=w-u,i=!1):w=null)}s.dataset.xtAddSticky=r.toString();var O=y>=m-r+o,S=y<g+r-o;O&&S?(this.eventOn(t),o&&(n=!0)):this.eventOff(t),s.classList.contains("active")?n?(r=-u,s.classList.contains("sticky-hide")||(s.classList.add("sticky-hide"),s.dispatchEvent(new CustomEvent("hide.sticky",{detail:{skip:!0}})))):s.classList.contains("sticky-hide")&&(s.classList.remove("sticky-hide"),s.dispatchEvent(new CustomEvent("show.sticky",{detail:{skip:!0}}))):(r=0,i=!1),i&&void 0!==p?s.classList.contains("sticky-anim")||s.classList.add("sticky-anim"):s.classList.contains("sticky-anim")&&s.classList.remove("sticky-anim"),O?s.classList.contains("sticky-top")&&s.classList.remove("sticky-top"):s.classList.contains("sticky-top")||s.classList.add("sticky-top"),S?s.classList.contains("sticky-bottom")&&s.classList.remove("sticky-bottom"):s.classList.contains("sticky-bottom")||s.classList.add("sticky-bottom"),r!==this.addOld&&(s.classList.add("no-transition"),void 0!==this.addOld&&(s.style[e.position]=c+"px"),XtUtil.cancelAnimationFrame.call(window,s.dataset.eventFrame),s.dataset.eventFrame=XtUtil.requestAnimationFrame.call(window,function(){s.classList.remove("no-transition"),s.style[e.position]=r+"px"}));var A=this.normalizeWidth(this.container[0].clientWidth);s.style.width!==A&&(s.style.width=A),this.addOld=r,this.scrollTopOld=y}},{key:"eventScrollPos",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(isNaN(parseFloat(t))){var n=Array.isArray(t)?t:document.querySelectorAll(t);if(n.length){var a=!1;i=0;var r=!0,o=!1,l=void 0;try{for(var s,c=n[Symbol.iterator]();!(r=(s=c.next()).done);r=!0){var u=s.value,d=parseFloat(u.dataset.xtAddSticky);if(d)"none"!==getComputedStyle(u).display&&(i+=d,a=!0);else i+=u.getBoundingClientRect().top,a=!0}}catch(t){o=!0,l=t}finally{try{!r&&c.return&&c.return()}finally{if(o)throw l}}a?i+=e:i=null}}else i=t;return i}},{key:"eventScrollHeight",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=!1;if(isNaN(parseFloat(t))){var a=Array.isArray(t)?t:document.querySelectorAll(t);if(a.length){var r=!0,o=!1,l=void 0;try{for(var s,c=a[Symbol.iterator]();!(r=(s=c.next()).done);r=!0){var u=s.value;u.classList.contains("sticky-hide-down")&&u.classList.contains("active")?e&&(i+=u.clientHeight,n=!0):u.classList.contains("sticky-hide-up")&&u.classList.contains("active")?e||(i+=u.clientHeight,n=!0):i+=u.clientHeight}}catch(t){o=!0,l=t}finally{try{!r&&c.return&&c.return()}finally{if(o)throw l}}}}else i=t;return{val:i,foundHide:n}}}]),e}();h.defaults={class:"active",on:"scroll resize",min:0,max:1/0,position:"top",limit:{bottom:1/0},contain:!1,hide:!1,aria:!1},window.XtSticky=h,i.XtSticky=h;var y=function(t){function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return c(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,"data-xt-fade"))}return l(e,u),r(e,[{key:"initEvents",value:function(){var t=this.options;if(t.on){var e=XtUtil.dataStorage.put(window,"fadeHandler",this.eventOnHandler.bind(this)),i=[].concat(s(t.on.split(" "))),n=!0,a=!1,r=void 0;try{for(var o,l=i[Symbol.iterator]();!(n=(o=l.next()).done);n=!0){var c=o.value;window.removeEventListener(c,e),window.addEventListener(c,e)}}catch(t){a=!0,r=t}finally{try{!n&&l.return&&l.return()}finally{if(a)throw r}}window.addEventListener("scroll.fade",e)}window.dispatchEvent(new CustomEvent("scroll.fade"))}},{key:"eventOnHandler",value:function(t){t.detail&&t.detail.skip||this.eventScroll(this.object)}},{key:"eventScroll",value:function(){var t=this,e=t.options,i=0,n=[],a=!1,r=window.innerHeight,o=document.scrollingElement.scrollTop,l=t.scrollTopOld;o<l&&(a=!0);var s=!0,c=!1,u=void 0;try{for(var d,f=function(){var l=d.value;if(l.offsetParent&&!l.classList.contains("fade-block")){var s=l.offsetParent.getBoundingClientRect().top+l.offsetTop,c=parseFloat(getComputedStyle(l).height),u=!1,f=s+o,v=f+c,h=r*e.distance;o+r>=f+h&&o<v-h?(u=t.checkOn(l))&&(n.push(l),XtUtil.cancelAnimationFrame.call(window,l.dataset.eventFrame),l.dataset.eventFrame=XtUtil.requestAnimationFrame.call(window,function(){if(e.delayOn){var a=new Function("current","total",e.delayOn);l.dataset.xtOnDelay=a(i,n.length).toString(),i++}t.eventOn(l)})):(u=t.checkOff(l),l.classList.add("fade-visible"),u&&(l.classList.add("fade-scroll"),n.push(l),XtUtil.cancelAnimationFrame.call(window,l.dataset.eventFrame),l.dataset.eventFrame=XtUtil.requestAnimationFrame.call(window,function(){if(e.delayOff){var a=new Function("current","total",e.delayOff);l.dataset.xtOffDelay=a(i,n.length).toString(),i++}u=t.eventOff(l)}))),u&&(a?(l.classList.remove("fade-down"),l.classList.add("fade-up")):(l.classList.add("fade-down"),l.classList.remove("fade-up")))}},v=t.elements[Symbol.iterator]();!(s=(d=v.next()).done);s=!0)f()}catch(t){c=!0,u=t}finally{try{!s&&v.return&&v.return()}finally{if(c)throw u}}t.scrollTopOld=o}}]),e}();y.defaults={elements:".fade",class:"in",on:"scroll resize",min:0,max:1/0,distance:.2,delayOn:!1,delayOff:!1,aria:!1},window.XtFade=y,i.XtFade=y},{}]},{},[1]);
//# sourceMappingURL=xtend.js.map
