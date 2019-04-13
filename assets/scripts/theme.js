//////////////////////
// import
//////////////////////

import ClipboardJS from 'clipboard';

//////////////////////
// vars
//////////////////////

window.easeIn = new Ease(BezierEasing(.36, 0, 0, 1));
window.easeOut = new Ease(BezierEasing(1, 0, .64, 1));
window.easeInOut = new Ease(BezierEasing(.68, .13, .25, 1));

//////////////////////
// anchors and sidebar
//////////////////////

// .make-line

for (let el of document.querySelectorAll('.site-article > h2, .site-article > h3')) {
  el.classList.add('make-line');
}
for (let el of document.querySelectorAll('.make-line')) {
  el.innerHTML = '<span class="line">' + el.innerHTML + '</span>';
  el.innerHTML = '<span class="line-container">' + el.innerHTML + '</span>';
}

// .make-anchor

for (let el of document.querySelectorAll('.site-article > h2, .site-article > h3')) {
  el.classList.add('make-line');
  // previous h2 if h3
  let prevElement;
  if (el.tagName === 'H3') {
    prevElement = el;
    while (prevElement.previousElementSibling) {
      if (prevElement.tagName === 'H2') {
        break;
      }
      prevElement = prevElement.previousElementSibling;
    }
  }
  // id
  let id = '';
  if (prevElement) {
    id += prevElement.textContent.replace(/\s+/g, '-').toLowerCase() + '-';
  }
  id += el.textContent.replace(/\s+/g, '-').toLowerCase();
  // make-anchor
  el.setAttribute('id', id);
  el.innerHTML = '<a href="#' + id + '" aria-label="Anchor to ' + el.textContent + '" tabindex="-1">' + el.innerHTML + '</a>';
  el.classList.add('make-anchor');
  el.append(Xt.createElement('<span class="site-article-anchor"><span class="btn"><span class="icon-link" aria-hidden="true"></span></span></span>'));
}

// .site-aside-text

for (let el of document.querySelectorAll('.site-aside-text > .btn:not(.different)')) {
  let container = Xt.parents(el, '.site-aside-text')[0];
  for (let element of document.querySelectorAll('.site-article > h2, .site-article > h3')) {
    if (element.tagName === 'H2') {
      let appendItem = Xt.createElement('<div class="site-aside-sub-container"></div>');
      container.append(appendItem);
      appendItem.append(Xt.createElement('<a href="#' + element.getAttribute('id') + '" class="btn btn--nodesign btn--site-aside-sub" aria-label="Anchor to ' + element.textContent + '"><span>' + element.textContent + '</span></a>'));
      appendItem.append(Xt.createElement('<div class="site-aside-subsub collapse--height"></div>'));
    } else if (element.tagName === 'H3') {
      let subs = container.querySelectorAll('.site-aside-subsub');
      subs[subs.length - 1].append(Xt.createElement('<a href="#' + element.getAttribute('id') + '" class="btn btn--nodesign btn--site-aside-subsub" aria-label="Anchor to ' + element.textContent + '"><span>' + element.textContent + '</span></a>'));
    }
  }
}

for (let el of document.querySelectorAll('.site-aside-text')) {
  Xt.init('xt-toggle', el, {
    "elements": ".site-aside-sub-container",
    "targets": ".site-aside-subsub",
    "on": "mouseenter",
    "off": "mouseleave",
    "instant": true,
    "min": 0,
    "max": "Infinity"
  });
}

// activateAsideScroll

const activateAsideScroll = function (els, scrollTop) {
  const dist = Xt.windowHeight / 5;
  for (let el of els) {
    let href = el.getAttribute('href');
    if (href) {
      let target = document.querySelectorAll(href);
      if (target.length) {
        let rect = target[0].getBoundingClientRect();
        let top = rect.top + scrollTop;
        let bottom = Infinity;
        if (scrollTop >= top - dist && scrollTop < bottom - dist) {
          if (!el.classList.contains('active')) {
            for (let element of els) {
              if (element === el) {
                element.classList.add('active', 'open');
              } else {
                element.classList.remove('active', 'open');
              }
            }
          }
        }
      }
    }
  }
};

addEventListener('scroll', function (e) {
  let scrollTop = document.documentElement.scrollTop;
  let sub = document.querySelectorAll('.btn--site-aside-sub');
  sub = Array.from(sub).filter(x => !Xt.parents(x, '.xt-clone').length); // filter out parent
  activateAsideScroll(sub, scrollTop);
  let subsub = document.querySelectorAll('.btn--site-aside-sub + .site-aside-subsub .btn--site-aside-subsub');
  subsub = Array.from(subsub).filter(x => !Xt.parents(x, '.xt-clone').length); // filter out parent
  activateAsideScroll(subsub, scrollTop);
});

//////////////////////
// demos
//////////////////////

// formatCode

const formatCode = function (source, lang) {
  let inner = source.querySelectorAll('.demo-source-from');
  inner = Array.from(inner).filter(x => !x.querySelectorAll('.demo-source-from').length); // filter out nested
  if (inner.length) {
    source = inner[0];
  }
  let text = source.innerHTML;
  if (lang === 'css' || lang === 'js') {
    // remove <style> or <script> tag
    if (text.search(/<[^>]*>/g) !== -1) {
      text = text.replace(/<[^>]*>/g, '');
      text = text.substring(1);
    }
    // replace entities
    text = text.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
  } else if (lang === 'html') {
    if (text.match(/[&<>]/g)) {
      // replace quote entities
      text = text.replace(/&quot;/g, '"');
      // replace entities
      text = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      // replace json quotes
      text = text.replace(/("{)/g, '\'{').replace(/(}")/g, '}\'');
      // replace empty quotes
      text = text.replace(/=""/g, '');
    }
  }
  // remove tabs
  let arr = text.split('\n');
  let toRemove = arr[1].search(/\S/g);
  for (let i of arr.keys()) {
    arr[i] = arr[i].substring(toRemove);
  }
  text = arr.join('\n');
  // remove newline at start and end
  text = text.replace(/^\s+|\s+$/g, '');
  // return
  return text;
};

// highlight

for (let el of document.querySelectorAll('pre code')) {
  let lang = el.className;
  // set text
  el.innerHTML = formatCode(el, lang);
  window.hljs.highlightBlock(el);
}

// populateDemo

const populateDemo = function (container, i) {
  let items = container.querySelectorAll('.demo-item');
  // multiple elements
  container.prepend(Xt.createElement('<div class="demo-tabs"><div class="demo-tabs-left"></div><div class="demo-tabs-right"></div></div>'));
  container.querySelectorAll('.demo-tabs-right')[0].append(Xt.createElement('<button type="button" class="btn btn--secondary-empty btn--tiny btn--narrow btn--show-code" data-toggle="tooltip" data-placement="top" aria-label="Show code"><span class="icon-code icon--big"></span></button>'));
  container.querySelectorAll('.demo-tabs-right')[0].append(Xt.createElement('<button type="button" class="btn btn--secondary-empty btn--tiny btn--narrow btn--open-full" data-toggle="tooltip" data-placement="top" aria-label="Open full"><span class="icon-maximize icon--big"></span></button>'));
  // don't show tabs on single
  /*
  if (items.length === 1) {
    container.querySelectorAll('.demo-tabs')[0].style.display = 'none';
  }
  */
  // loop items
  for (let [k, item] of items.entries()) {
    // populate tabs
    let name = item.getAttribute('data-name');
    if (items.length === 1) {
      if (!item.getAttribute('data-name')) {
        name = 'demo';
      }
    } else {
      if (!item.getAttribute('data-name')) {
        name = 'demo #' + k;
      }
    }
    let btn = container.querySelectorAll('.demo-tabs-left')[0].append(Xt.createElement('<button type="button" class="btn btn--secondary-empty btn--tiny"><span>' + name + '</span></button>'));
    btn = container.querySelectorAll('.demo-tabs-left .btn')[k];
    /* DOES NOT EXECUTE JAVASCRIPT INSIDE
    // demo shadow
    let shadowSrc = item.getAttribute('data-shadow');
    if (shadowSrc) {
      let request = new XMLHttpRequest();
      let populateShadow = function() {
        let source = Xt.createElement('<div class="demo-shadow xt-ignore" data-lang="html">');
        item.classList.add('demo-iframe');
        item.append(source);
        let shadowRoot = source.attachShadow({mode: 'closed'});
        let template = document.createElement('html');
        template.innerHTML = request.responseText.trim();
        //shadowRoot.appendChild(html);
        let templateNew = document.adoptNode(template);
        // script
        let bodyNew = templateNew.querySelector('body');
        for (let script of template.querySelectorAll('script')) {
          let scriptNew = document.createElement('script');
          scriptNew.textContent = script.innerHTML;
          let scriptSrc = script.getAttribute('src');
          if (scriptSrc) {
            scriptNew.src = scriptSrc;
            script.defer = true;
          }
          bodyNew.appendChild(scriptNew);
          script.remove();
        }
        // @TODO REFACTOR
        console.log(templateNew);
        Xt.initElement(templateNew);
        Xt.initObserve(templateNew);
        Xt.observer.observe(templateNew, {
          characterData: false,
          attributes: false,
          childList: true,
          subtree: true
        });
        // append
        shadowRoot.appendChild(templateNew);
        item.classList.add('populated');
      };
      request.open('GET', shadowSrc, true);
      request.onload = populateShadow;
      request.onerror = populateShadow;
      request.send();
    }
    */
    // iframe append
    let src = item.getAttribute('data-iframe');
    let id = 'iframe' + i + k;
    if (src) {
      item.append(Xt.createElement('<iframe data-src="' + src + '" frameborder="0" name="' + id + '"></iframe>'));
    }
    // tabs
    item.prepend(Xt.createElement('<div class="demo-code collapse--height"><div class="demo-code-tabs"><div class="demo-code-tabs-left"></div><div class="demo-code-tabs-right"><button type="button" class="btn btn--secondary-empty btn--tiny btn--clipboard" data-toggle="tooltip" data-placement="top" title="Copy to clipboard"><span>copy</span></button></div></div><div class="demo-code-body"></div></div>'));
    // https://github.com/zenorocha/clipboard.js/
    let clipboard = new ClipboardJS('.btn--clipboard', {
      target: function (trigger) {
        return Xt.parents(trigger, '.demo')[0].querySelectorAll('.demo-item.active .demo-code-body-item.active .hljs')[0];
      }
    });
    clipboard.on('success', function (e) {
      e.clearSelection();
      //$(e.trigger).attr('data-original-title', 'Done').tooltip('show');
    });
    clipboard.on('error', function (e) {
      //$(e.trigger).attr('data-original-title', 'Error: copy manually').tooltip('show');
    });
    // inject iframe
    if (item.getAttribute('data-iframe')) {
      let iframe = item.querySelectorAll('iframe')[0];
      let initIframe = function () {
        if (!iframe.getAttribute('src')) {
          item.classList.add('demo-iframe');
          iframe.setAttribute('src', iframe.getAttribute('data-src'));
        }
      };
      if (k === 0) {
        initIframe();
      }
      // listener
      iframe.parentElement.addEventListener('on.xt', function (e) {
        if (!item.classList.contains('populated')) {
          initIframe();
        } else {
          iframe.contentDocument.location.reload(true);
        }
      });
      iframe.parentElement.addEventListener('off.xt', function (e) {
        iframe.classList.remove('show');
      });
    } else {
      populateInline(item, id);
      // .populated fix scroll
      item.classList.add('populated');
    }
  }
  // demo tabs
  Xt.init('xt-toggle', container, {
    "elements": ".demo-tabs-left .btn",
    "targets": ".demo-item",
    "min": 1
  });
  // loop items
  for (let [k, item] of items.entries()) {
    // collapse code
    let demoId = 'demo-' + i + k;
    container.setAttribute('id', demoId);
    Xt.init('xt-toggle', container.querySelectorAll('.btn--show-code')[0], {
      "targets": "#" + demoId,
      "targetsInner": ".demo-code",
      "aria": false
    });
  }
  // enable fullscreen
  /*
  element.find('.demo-tabs-left .button').on('on', function(e, obj) {
    let $fullscreen = $(this).parents('.demo').find('.button__fullscreen');
    let iframe = $(this).parents('.demo').find('.demo-item.active').attr('data-iframe');
    if (iframe) {
      $fullscreen.css('display', 'block');
      $fullscreen.off('click');
      $fullscreen.on('click', function() {
        window.open(iframe, '_blank');
      });
    }
  });
  */
};

// populateInline

const populateInline = function (item, id) {
  let els = item.querySelectorAll('.demo-source');
  for (let [z, el] of els.entries()) {
    populateSources(item, el, z);
    if (!item.classList.contains('demo-preview')) {
      el.style.display = 'none';
    }
    /*
    // don't show tabs on single
    if (els.length === 1) {
      item.querySelectorAll('.demo-code-tabs')[0].style.display = 'none';
    }
    */
  }
  Xt.init('xt-toggle', item, {
    "elements": ".demo-code-tabs-left .btn",
    "targets": ".demo-code-body-item",
    "min": 1
  });
};

// populateIframe

window.initIframe = function (name) {
  let src = 'iframe[name="' + name + '"]';
  let iframe = document.querySelectorAll(src)[0];
  iframe.classList.add('show');
  let item = Xt.parents(iframe, '.demo-item')[0];
  if (!item.classList.contains('populated')) {
    populateIframe(item, iframe);
    window.resizeIframe(name);
    item.classList.add('populated');
  }
};

window.resizeIframe = function (name) {
  let src = 'iframe[name="' + name + '"]';
  let iframe = document.querySelectorAll(src)[0];
  if (iframe) {
    if (!iframe.contentWindow.document.body.classList.contains('full')) {
      let target = iframe.contentWindow.document.body.querySelectorAll('#body-outer')[0];
      let h = target.offsetHeight;
      if (h !== iframe.getAttribute('iframeHeight')) {
        iframe.style.height = h + 'px';
        iframe.setAttribute('iframeHeight', h);
      }
    }
  }
};

function populateIframe(item, iframe) {
  let html = iframe.contentWindow.document.body.querySelectorAll('#body-outer')[0];
  let less = iframe.contentWindow.document.body.querySelectorAll('less-style')[0];
  //let css = iframe.contentWindow.document.body.querySelectorAll('style[scoped]')[0];
  let js = iframe.contentWindow.document.body.querySelectorAll('js-script')[0];
  // inject code
  if (html) {
    iframe.append(Xt.createElement('<div class="demo-source xt-ignore" data-lang="html">' + html.innerHTML + '</div>'));
  }
  if (less) {
    iframe.append(Xt.createElement('<div class="demo-source xt-ignore" data-lang="less">' + less.innerHTML + '</div>'));
  }
  if (js) {
    iframe.append(Xt.createElement('<div class="demo-source xt-ignore" data-lang="js">' + js.innerHTML + '</div>'));
  }
  // populate
  for (let [z, source] of item.querySelectorAll('.demo-source').entries()) {
    populateSources(item, source, z);
    source.parentNode.removeChild(source);
  }
  Xt.init('xt-toggle', item, {
    "elements": ".demo-code-tabs-left .btn",
    "targets": ".demo-code-body-item",
    "min": 1
  });
}

// populateSources

const populateSources = function (item, element, z) {
  let lang = element.getAttribute('data-lang');
  // populate tabs
  item.querySelectorAll('.demo-code-body')[0].append(Xt.createElement('<div class="demo-code-body-item"><pre><code></code></pre></div>'));
  item.querySelectorAll('.demo-code-tabs-left')[0].append(Xt.createElement('<button type="button" class="btn btn--secondary-empty btn--tiny"><span>' + lang + '</span></button>'));
  // format code
  let codeInside = item.querySelectorAll('.demo-code-body .demo-code-body-item')[z].querySelectorAll('pre code')[0];
  if (!codeInside.classList.contains('hljs')) {
    let text = formatCode(element, lang);
    // set text
    codeInside.innerHTML = text;
    codeInside.classList.add(lang);
    window.hljs.highlightBlock(codeInside);
  }
};

// init demos

for (let [i, el] of document.querySelectorAll('.demo').entries()) {
  populateDemo(el, i);
}

//////////////////////
// others
//////////////////////

// .demo-cols

for (let element of document.querySelectorAll('.demo-cols')) {
  for (let [i, el] of element.querySelectorAll('[class^=\'col--\'], [class*=\' col--\']').entries()) {
    el.setAttribute('data-index', i);
  }
}

// .demo-cols-nested

for (let element of document.querySelectorAll('.demo-cols-nested [class^=\'col--\'], .demo-cols-nested [class*=\' col--\']')) {
  for (let [i, el] of element.querySelectorAll('[class^=\'col--\'], [class*=\' col--\']').entries()) {
    el.setAttribute('data-index', i);
  }
}
