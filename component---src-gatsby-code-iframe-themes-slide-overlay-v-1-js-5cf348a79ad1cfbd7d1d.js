(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{"1P8c":function(n,e,a){"use strict";a.r(e),a.d(e,"alt",(function(){return i})),a.d(e,"ratio",(function(){return l})),e.default=function(n){var e=n.classes,a=void 0===e?null:e,i=n.ratio,l=void 0===i?null:i,t=n.height,s=void 0===t?null:t,r=n.style,d=void 0===r?null:r,o=n.loading;return'<div class="media-container"'+(l||s||d?' style="':"")+(l?"padding-bottom:"+l+";":"")+(s?"height:"+s+";":"")+(d?" "+d+";":"")+(l||s||d?'"':"")+'><div class="media-inner"><img class="media'+(a?" "+a:"")+'" src="/img.svg" loading="'+(void 0===o?"lazy":o)+'" alt=""/></div></div>'};var i=function(n){var e=n.classes,a=void 0===e?null:e,i=n.ratio,l=void 0===i?null:i,t=n.height,s=void 0===t?null:t,r=n.style,d=void 0===r?null:r,o=n.loading;return'<div class="media-container"'+(l||s||d?' style="':"")+(l?"padding-bottom:"+l+";":"")+(s?"height:"+s+";":"")+(d?" "+d+";":"")+(l||s||d?'"':"")+'><div class="media-inner"><img class="media'+(a?" "+a:"")+'" src="/img-alt.svg" loading="'+(void 0===o?"lazy":o)+'" alt=""/></div></div>'},l=function(n){var e=n.classes,a=void 0===e?null:e,i=n.ratio,l=void 0===i?null:i,t=n.height,s=void 0===t?null:t,r=n.style,d=void 0===r?null:r,o=n.loading;return'<div class="media-container"'+(l||s||d?' style="':"")+(l?"padding-bottom:"+l+";":"")+(s?"height:"+s+";":"")+(d?" "+d+";":"")+(l||s||d?'"':"")+'><div class="media-inner"><img class="media'+(a?" "+a:"")+'" src="/img-ratio.svg" loading="'+(void 0===o?"lazy":o)+'" alt=""/></div></div>'}},"2srA":function(n,e,a){"use strict";a.r(e),function(n){a.d(e,"demo",(function(){return u}));var i=a("dI71"),l=a("q1tI"),t=a.n(l),s=a("33yf"),r=a.n(s),d=a("IRUh"),o=a("JrsZ").default,c=n.replace(/\\/g,"/"),v=r.a.dirname(c).split("/"),u={container:!0,full:!1,name:r.a.basename(c,".js"),dirs:v};u.htmlSource="\n"+o()+"\n";var m=function(n){function e(){return n.apply(this,arguments)||this}return Object(i.a)(e,n),e.prototype.render=function(){return t.a.createElement(d.a,{demo:u})},e}(t.a.Component);e.default=m}.call(this,"src/gatsby/code/iframe/themes/slide-overlay-v1.js")},JrsZ:function(n,e,a){"use strict";a.r(e);var i=a("1P8c").default,l=a("TaEE").iconX;e.default=function(){return'\n<div class="list list-2 items-center">\n\n  <div data-xt-overlay>\n    <button type="button" class="btn btn-primary">\n      overlay full\n    </button>\n    <div class="overlay overlay-default overlay-screen overlay-size-full">\n      <div class="overlay-container max-w-4xl">\n        <div class="overlay-inner">\n          <div class="overlay-design"></div>\n\n            <div class="card card-overlay">\n              <div class="card-design"></div>\n              <div class="btn btn-close" aria-label="Close">\n                '+l()+'\n              </div>\n              <div class="card-inner">\n                <div class="card-content">\n                  <div class="card-asset">\n                    '+i({classes:"object-cover object-center",ratio:"100%"})+'\n                  </div>\n                </div>\n              </div>\n            </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div data-xt-overlay>\n    <button type="button" class="btn btn-primary">\n      overlay menu left\n    </button>\n    <div class="overlay overlay-default overlay-position-left overlay-close-outside">\n      <div class="overlay-container max-w-4xl">\n        <div class="overlay-inner">\n          <div class="overlay-design"></div>\n\n          <div class="card card-overlay"\n            style="align-items: stretch;">\n            <div class="card-design"></div>\n            <div class="btn btn-close" aria-label="Close">\n              '+l()+'\n            </div>\n            <div class="card-inner">\n              <div class="card-content">\n                <div class="card-item card-item--menu">\n                  <div class="list">\n                    <button type="button" class="btn btn-primary btn-tall btn-squared">\n                      Menu\n                    </button>\n                    <button type="button" class="btn btn-primary btn-tall btn-squared">\n                      Info\n                    </button>\n                    <button type="button" class="btn btn-primary btn-tall btn-squared">\n                      Account\n                    </button>\n                  </div>\n                </div>\n                <div class="card-asset">\n                  '+i({classes:"object-cover object-center",ratio:"37.5%"})+'\n                </div>\n                <div class="card-block card-item">\n                  <div class="h4">Lorem ipsum</div>\n                  <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>\n                </div>\n                <div class="card-block card-item card-block-side"\n                  style="margin-top: auto">\n                  <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit.</p>\n                </div>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div data-xt-overlay>\n    <button type="button" class="btn btn-primary">\n      overlay contact\n    </button>\n    <div class="overlay overlay-default overlay-close-outside">\n      <div class="overlay-container max-w-4xl">\n        <div class="overlay-inner">\n          <div class="overlay-design"></div>\n\n          <div class="card card-overlay"\n            style="align-items: stretch;">\n            <div class="card-design"></div>\n            <div class="btn btn-close" aria-label="Close">\n              '+l()+'\n            </div>\n            <div class="card-inner">\n              <div class="card-content">\n\n                <div class="card-item-nested card-item card-group-sm card-item--order">\n\n                  <div class="card-block card-item">\n\n                    <div class="h4">\n                      Contact us\n                    </div>\n\n                    <form>\n\n                      <div class="row row-form">\n                        <div class="col-form-double">\n                          <div class="form-group">\n                            <label class="form-label">\n                              Name\n                            </label>\n                            <input type="text" class="form-item" placeholder="Name" required>\n                          </div>\n                        </div>\n                        <div class="col-form-double">\n                          <div class="form-group">\n                            <label class="form-label">\n                              Surname\n                            </label>\n                            <input type="text" class="form-item" placeholder="Surname" required>\n                          </div>\n                        </div>\n                      </div>\n\n                      <div class="row row-form">\n                        <div class="col-form-double">\n                          <div class="form-group">\n                            <label class="form-label">\n                              Email\n                            </label>\n                            <input type="email" class="form-item" placeholder="Email" required>\n                          </div>\n                        </div>\n                        <div class="col-form-double">\n                          <div class="form-group">\n                            <label class="form-label">\n                              Telephone\n                            </label>\n                            <input type="text" class="form-item" placeholder="Telephone" required>\n                          </div>\n                        </div>\n                      </div>\n\n                      <div class="form-group">\n                        <label class="form-label">\n                          Select an option\n                        </label>\n                        <select class="form-item" required>\n                          <option selected value="">Select an option</option>\n                          <option>Option 1</option>\n                          <option>Option 2</option>\n                          <option>Option 3</option>\n                        </select>\n                      </div>\n\n                      <div class="form-group">\n                        <label class="form-label">\n                          Textarea\n                        </label>\n                        <textarea class="form-item h-24 resize-vertical duration-150" placeholder="Textarea" required></textarea>\n                      </div>\n\n                      <div class="form-group">\n                        <input type="checkbox" id="check-contact" name="check-contact" required>\n                        <label class="form-label" for="check-contact">\n                        <span>\n                          I <strong>read and accept</strong> the <a href="#" target="_blank">sales conditions</a> and the <a href="#" target="_blank">privacy policy</a>.\n                        </label>\n                      </div>\n\n                      <button type="submit" class="btn btn-primary btn-wide">\n                        Send\n                      </button>\n\n                    </form>\n\n                  </div>\n\n                  <div class="card-item card-block-side sm:w-5/12"\n                    style="display: flex; flex-direction: column">\n                    <div class="card-block card-item">\n                      <p class="h5">\n                        Didn\'t find what you was looking for?\n                      </p>\n                      <p>\n                         Contact our customer service at <a href="tel:+39333010101">+39 333 010101</a> or email us at <a href="mailto:info@info.com">info@info.com</a>.\n                      </p>\n                    </div>\n                    <div class="card-asset"\n                      style="margin-top: auto">\n                      '+i({classes:"object-cover object-center",ratio:"100%",loading:"eager"})+'\n                    </div>\n                  </div>\n\n                </div>\n\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div data-xt-overlay>\n    <button type="button" class="btn btn-primary">\n      overlay newsletter\n    </button>\n    <div class="overlay overlay-default overlay-size-sm overlay-close-outside">\n      <div class="overlay-container max-w-4xl">\n        <div class="overlay-inner">\n          <div class="overlay-design"></div>\n\n          <div class="card card-overlay"\n            style="align-items: stretch;">\n            <div class="card-design"></div>\n            <div class="btn btn-close" aria-label="Close">\n              '+l()+'\n            </div>\n            <div class="card-inner">\n              <div class="card-content">\n\n                <div class="card-item-nested card-item card-group-sm">\n\n                  <div class="card-item sm:w-5/12">\n                    <div class="card-asset full-y">\n                      '+i({classes:"object-cover object-center",ratio:"37.5%",loading:"eager"})+'\n                    </div>\n                  </div>\n\n                  <div class="card-block card-item">\n\n                    <div class="h4">\n                      Subscribe to our newsletter\n                    </div>\n\n                    <form>\n\n                      <div class="form-group">\n                        <label class="form-label">\n                          Email\n                        </label>\n                        <input type="email" class="form-item" placeholder="Email" required>\n                      </div>\n\n                      <div class="form-group-inline">\n\n                        <label class="form-label">\n                          Select an option\n                        </label>\n\n                        <div class="form-group">\n                          <input type="radio" id="radio-newsletter-0" name="radio-newsletter" required>\n                          <label class="form-label" for="radio-newsletter-0">\n                            Option 1\n                          </label>\n                        </div>\n\n                        <div class="form-group">\n                          <input type="radio" id="radio-newsletter-1" name="radio-newsletter" required>\n                          <label class="form-label" for="radio-valinewsletterdation-1">\n                            Option 2\n                          </label>\n                        </div>\n\n                      </div>\n\n                      <div class="form-group">\n                        <input type="checkbox" id="check-newsletter" name="check-newsletter" required>\n                        <label class="form-label" for="check-newsletter">\n                        <span>\n                          I <strong>read and accept</strong> the <a href="#" target="_blank">sales conditions</a> and the <a href="#" target="_blank">privacy policy</a>.\n                        </label>\n                      </div>\n\n                      <button type="submit" class="btn btn-primary btn-wide">\n                        Subscribe\n                      </button>\n\n                    </form>\n\n                  </div>\n\n                </div>\n\n                <div class="card-block card-item card-block-side card-block-sm text-sm">\n                  <p>Receive <strong>free discount</strong> periodically on all our products.</p>\n                </div>\n\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n'}}}]);
//# sourceMappingURL=component---src-gatsby-code-iframe-themes-slide-overlay-v-1-js-5cf348a79ad1cfbd7d1d.js.map