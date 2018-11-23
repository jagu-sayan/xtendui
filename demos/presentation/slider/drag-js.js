let time = .6;
let animSize = 15;

let timecontent = .6;
let delaycontent = .15;
let delaycontentMax = delaycontent * 2;
let durationcontent = timecontent + delaycontentMax;

CustomEase.create('easeIn', '.41, .1, .175, 1');
CustomEase.create('easeOut', '.77, 0, .175, 1');

for (let [i, el] of document.querySelectorAll('.slider').entries()) {

  // slider
  new Xt.Slider(el, {
    "auto": 6000,
    "autoPause": 6000,
    "drag": true,
    "durationOn": time * 1000,
    "durationOff": time * 1000
  });

  // slider items
  for (let [i, tr] of el.querySelectorAll('.slide').entries()) {

    // on event
    tr.addEventListener('on.xt', function (e) {
      let target = this;
      let xMax = target.clientWidth;
      // content
      let contents = target.querySelectorAll(':scope > * > .slide_content > .card > .card_content > *');
      for (let [z, content] of contents.entries()) {
        content.dataset.tlDelay = Math.min(delaycontent * z, delaycontentMax).toString();
      }
      // setup drag position
      TweenMax.set(target, {opacity: 0});
      if (!target.classList.contains('xt-inverse')) {
        // mask
        TweenMax.set(target, {x: xMax});
        TweenMax.set(target.children[0], {x: -xMax});
        TweenMax.set(target.children[0].children[0], {x: animSize});
        TweenMax.to(target.children[0].children[0], time, {x: 0, ease: 'easeIn'});
        // content
        for (let [z, content] of target.querySelectorAll(':scope > * > .slide_content > .card > .card_content > *').entries()) {
          TweenMax.set(content, {x: animSize, opacity: 0});
          setTimeout(function () {
            TweenMax.to(content, timecontent, {x: 0, opacity: 1, ease: 'easeIn'});
          }, parseFloat(content.dataset.tlDelay) * 1000);
        }
      } else {
        // mask
        TweenMax.set(target, {x: -xMax});
        TweenMax.set(target.children[0], {x: xMax});
        TweenMax.set(target.children[0].children[0], {x: -animSize});
        TweenMax.to(target.children[0].children[0], time, {x: 0, ease: 'easeIn'});
        // content
        for (let [z, content] of target.querySelectorAll(':scope > * > .slide_content > .card > .card_contentcontent > *').entries()) {
          TweenMax.set(content, {x: -animSize, opacity: 0});
          setTimeout(function () {
            TweenMax.to(content, timecontent, {x: 0, opacity: 1, ease: 'easeIn'});
          }, parseFloat(content.dataset.tlDelay) * 1000);
        }
      }
      // drag position
      TweenMax.to(target, time, {x: 0, opacity: 1, ease: 'easeIn'});
      TweenMax.to(target.children[0], time, {x: 0, ease: 'easeIn'});
    });

    // off event
    tr.addEventListener('off.xt', function (e) {
      let target = this;
      let xMax = target.clientWidth;
      // complete drag
      if (!target.classList.contains('xt-inverse')) {
        // mask
        TweenMax.to(target, time, {x: -xMax, opacity: 0, ease: 'easeOut'});
        TweenMax.to(target.children[0], time, {x: xMax, ease: 'easeOut'});
        // content
        for (let [z, content] of target.querySelectorAll(':scope > * > .slide_content > .card > .card_content > *').entries()) {
          setTimeout(function () {
            TweenMax.to(content, timecontent, {x: -animSize, opacity: 1, ease: 'easeOut'});
          }, parseFloat(content.dataset.tlDelay) * 1000);
        }
      } else {
        // mask
        TweenMax.to(target, time, {x: xMax, opacity: 0, ease: 'easeOut'});
        TweenMax.to(target.children[0], time, {x: -xMax, ease: 'easeOut'});
        // content
        for (let [z, content] of target.querySelectorAll(':scope > * > .slide_content > .card > .card_content > *').entries()) {
          setTimeout(function () {
            TweenMax.to(content, timecontent, {x: animSize, opacity: 1, ease: 'easeOut'});
          }, parseFloat(content.dataset.tlDelay) * 1000);
        }
      }
    });

    // drag event
    tr.addEventListener('drag.xt.slider', function (e) {
      let target = this;
      let self = e.detail.object;
      let eInit = self.detail.eInit;
      let eCurrent = self.detail.eCurrent;
      let xStart = eInit.clientX;
      let xCurrent = eCurrent.clientX;
      let xDist = xCurrent - xStart;
      let xMax = target.clientWidth;
      let ratio = Math.abs(xStart - xCurrent) / xMax;
      // mask
      TweenMax.set(target, {x: xDist + 'px', opacity: 1 - ratio});
      TweenMax.set(target.children[0], {x: -xDist});
      // content
      if (xStart - xCurrent > 0) {
        for (let [z, content] of target.querySelectorAll(':scope > * > .slide_content > .card > .card_content > *').entries()) {
          let ratioWithDelay = (durationcontent - parseFloat(content.dataset.tlDelay)) * ratio / timecontent;
          TweenMax.set(content, {x: -animSize * ratioWithDelay, opacity: 1 - ratioWithDelay});
        }
      } else {
        for (let [z, content] of target.querySelectorAll(':scope > * > .slide_content > .card > .card_content > *').entries()) {
          let ratioWithDelay = (durationcontent - parseFloat(content.dataset.tlDelay)) * ratio / timecontent;
          TweenMax.set(content, {x: animSize * ratioWithDelay, opacity: 1 - ratioWithDelay});
        }
      }
    });

    // dragend event
    tr.addEventListener('dragend.xt.slider', function (e) {
      let target = this;
      let self = e.detail.object;
      let eInit = self.detail.eInit;
      let eCurrent = self.detail.eCurrent;
      let xStart = eInit.clientX;
      let xCurrent = eCurrent.clientX;
      let xDist = xCurrent - xStart;
      // activate or reset
      if (Math.abs(xDist) > self.options.dragThreshold) {
        // direction
        if (Math.sign(xDist) < 0) {
          self.goToNext();
        } else {
          self.goToPrev();
        }
      } else {
        // mask
        TweenMax.to(target, time, {x: 0, opacity: 1, ease: 'easeOut'});
        TweenMax.to(target.children[0], time, {x: 0, ease: 'easeOut'});
        // content
        for (let [z, content] of target.querySelectorAll(':scope > * > .slide_content > .card > .card_content > *').entries()) {
          TweenMax.to(content, timecontent, {x: 0, opacity: 1, ease: 'easeOut'});
        }
      }
    });

  }

}