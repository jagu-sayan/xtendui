import {TweenMax} from 'gsap/TweenMax'
import {Xt} from 'xtend-library'

/**
 * .demo--loader--js-spinner
 */

Xt.mount.push({
  matches: '.demo--loader--js-spinner',
  fnc: function mount(object) {

    let time = 2000;
    let easeLinear = Power0.easeNone;

    // timeout

    function loaderTimeout() {
      let spinner = object.querySelectorAll('.spinner svg:nth-child(1) circle');
      object.dataset.loaderActive = object.dataset.loaderActive === 'true' ? 'false' : 'true';
      if (object.dataset.loaderActive === 'true') {
        object.classList.add('active');
        object.classList.remove('out');
        TweenMax.set(spinner, {strokeDashoffset: 628});
        TweenMax.to(spinner, time / 1000, {strokeDashoffset: 0, ease: easeLinear, autoRound: false});
        setTimeout(loaderTimeout, time);
      } else {
        object.classList.remove('active');
        object.classList.add('out');
        Xt.animTimeout(object, loaderTimeout);
      }
    }

    loaderTimeout();

  }
});
