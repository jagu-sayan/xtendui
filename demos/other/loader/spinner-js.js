Xt.init.push({ // on DOM ready and on content added to DOM
  matches: '.loader',
  fnc: loaderInit
});

function loaderInit(main, index) {

  let loader = main;

  // vars

  let time = 2000;
  CustomEase.create('easeIn', '.41,.1,.175,1');
  CustomEase.create('easeOut', '.77,0,.175,1');
  CustomEase.create('easeInOut', '.77,.0,.17,1');

  // loader

  function loaderTimeout() {
    let progress = main.querySelectorAll('.spinner circle:nth-child(2)');
    loader.dataset.loaderActive = loader.dataset.loaderActive === 'true' ? 'false' : 'true';
    if (loader.dataset.loaderActive === 'true') {
      loader.classList.add('active');
      loader.classList.remove('out');
      TweenMax.set(progress, {strokeDashoffset: 1});
      TweenMax.to(progress, time / 1000, {strokeDashoffset: 0, ease: 'easeInOut', autoRound:false});
      setTimeout(loaderTimeout, time);
    } else {
      loader.classList.remove('active');
      loader.classList.add('out');
      Xt.animTimeout(loader, loaderTimeout);
    }
  }
  loaderTimeout();

}