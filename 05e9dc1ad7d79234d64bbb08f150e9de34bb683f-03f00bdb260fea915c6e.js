(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"7oMN":function(n,t,a){"use strict";a.r(t),function(n){a.d(t,"demo",(function(){return C}));var e=a("q1tI"),i=a.n(e),d=a("33yf"),s=a.n(d),l=a("IRUh");const o="overflow-hidden transform ease-in-out-quint duration-700 delay-300 opacity-0 translate-y-full group-active:ease-out-quint group-active:delay-0 group-active:opacity-100 group-active:translate-y-0",r="transform ease-in-out-quint duration-700 opacity-0 translate-y-1/2 group-active:ease-out-quint group-active:delay-300 group-active:opacity-100 group-active:translate-y-0",c="transform ease-in-out-quint duration-700 opacity-0 -translate-x-1/2 group-active:ease-out-quint group-active:delay-300 group-active:opacity-100 group-active:translate-x-0",u=a("Ybrd").default,m=a("sf5o").default,v=a("imjJ").default,b=a("+8/F").default,p=a("laZN").default,f=a("qk+w").default,g=a("Cl35").default,y=a("+jkl").default,x=a("Xu6d").default,h=a("PJgn").default,w=a("Sl05").default,k=a("TaEE").iconX,q=a("TaEE").iconSearch,S=n.replace(/\\/g,"/"),j=s.a.dirname(S).split("/"),C={container:!0,name:s.a.basename(S,".js"),dirs:j};C.htmlSource='\n<div class="h5 h-block rounded-md text-black links-default bg-gray-200 text-center">\n  Button\n</div>\n\n<div class="list list-2 items-center">\n\n  <button type="button" class="btn btn-md rounded-md">\n    btn\n  </button>\n\n  <button type="button" class="btn btn-md rounded-md '+u()+'">\n    default\n  </button>\n\n  <button type="button" class="btn btn-md rounded-md '+m()+'">\n    primary\n  </button>\n\n  <button type="button" class="btn btn-md rounded-md link">\n    link\n  </button>\n\n  <button type="button" class="btn btn-md rounded-md text-reset">\n    text\n  </button>\n\n</div>\n\n<div class="h5 h-block rounded-md text-black links-default bg-gray-200 text-center">\n  Drop\n</div>\n\n<div class="list list-2 items-center">\n\n  <div data-xt-drop>\n\n    <button type="button" class="btn btn-md rounded-md '+m()+'">\n      list\n    </button>\n\n    <div class="drop group" data-xt-duration="700">\n      <div class="card w-64 py-3 rounded-md shadow-drop '+b()+" "+o+'">\n        <nav class="list flex-col rounded-md '+r+'">\n          <a href="#" class="btn btn-sm '+v()+'">\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit\n          </a>\n          <button type="button" class="btn btn-sm '+v()+'">\n            Dolor sit\n          </button>\n          <button type="button" class="btn btn-sm '+v()+'">\n            Amet\n          </button>\n        </nav>\n      </div>\n      <div class="drop-arrow '+r+' group-active:delay-300" data-arrow></div>\n    </div>\n\n  </div>\n\n  <div data-xt-drop>\n\n    <button type="button" class="btn btn-md rounded-md '+m()+'">\n      card\n    </button>\n\n    <div class="drop group" data-xt-duration="700">\n      <div class="card w-80 rounded-md shadow-drop '+b()+" "+o+'">\n        <div class="btn btn-close p-5 text-xl" aria-label="Close">\n          '+k()+'\n        </div>\n        <div class="card-md rounded-md '+r+'">\n          <div class="h4">Lorem ipsum</div>\n          <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>\n        </div>\n      </div>\n      <div class="drop-arrow '+r+' group-active:delay-300" data-arrow></div>\n    </div>\n\n  </div>\n\n</div>\n\n<div class="h5 h-block rounded-md text-black links-default bg-gray-200 text-center">\n  Tooltip\n</div>\n\n<div class="list list-2 items-center">\n\n  <div data-xt-tooltip="{ elements: false, elementsInner: \':scope > a, :scope > button\' }">\n\n    <button type="button" class="btn btn-md rounded-md '+m()+'">\n      tooltip\n    </button>\n\n    <div class="tooltip group" data-xt-duration="700">\n      <div class="tooltip-md rounded shadow-tooltip '+p()+" "+o+'">\n        <div class="'+r+'">\n          Lorem ipsum dolor sit amet\n        </div>\n      </div>\n      <div class="tooltip-arrow '+r+' group-active:delay-300" data-arrow></div>\n    </div>\n\n  </div>\n\n  <div data-xt-tooltip="{ elements: false, elementsInner: \':scope > a, :scope > button\' }">\n\n    <button type="button" class="btn btn-md rounded-md '+m()+'">\n      list group\n    </button>\n\n    <div class="tooltip group" data-xt-duration="700">\n      <div class="rounded-md shadow-tooltip '+b()+" "+o+'">\n        <form>\n\n          <div class="list flex-nowrap max-w-sm '+r+'">\n\n            <div class="list-inner flex-auto">\n              <button type="button" class="btn btn-md rounded-l-md '+u()+'">\n                '+q({classes:"icon-lg"})+'\n              </button>\n              <input type="text" class="form-item '+x()+'" aria-label="Search" placeholder="Seach Catalog" />\n            </div>\n\n            <button type="button" class="btn btn-md rounded-r-md '+m()+'">\n              Search\n            </button>\n\n          </div>\n\n        </form>\n      </div>\n      <div class="tooltip-arrow '+r+' group-active:delay-300" data-arrow></div>\n    </div>\n\n  </div>\n\n</div>\n\n<div class="h5 h-block rounded-md text-black links-default bg-gray-200 text-center">\n  Overlay\n</div>\n\n<div class="list list-2 items-center">\n\n  <div data-xt-overlay>\n    <button type="button" class="btn btn-md rounded-md '+m()+'">\n      screen full\n    </button>\n    <div class="overlay group" data-xt-duration="1000">\n      <div class="overlay-container p-0">\n        <div class="btn btn-close p-5 text-2xl fixed z-last mr-2 '+r+'" aria-label="Close">\n          '+k()+'\n        </div>\n        <div class="overlay-inner">\n\n          <div class="card min-h-screen items-center justify-center '+b()+" "+o+'">\n            <div class="media-container '+r+' ratio-100">\n              <div class="media-inner">\n                <img class="media object-cover object-center" src="/img.svg" loading="eager" alt="">\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div data-xt-overlay>\n\n    <button type="button" class="btn btn-md rounded-md '+m()+'">\n      left blocks\n    </button>\n\n    <div class="overlay group" data-xt-duration="1000">\n      <div class="overlay-container p-0 max-w-md ml-0 mr-auto">\n        <div class="overlay-inner">\n\n          <div class="card min-h-screen '+b()+' overflow-hidden transform ease-in-out-quint duration-700 delay-300 opacity-0 -translate-x-full group-active:ease-out-quint group-active:delay-0 group-active:opacity-100 group-active:translate-x-0">\n            <div class="btn btn-close p-5 text-2xl" aria-label="Close">\n              '+k()+'\n            </div>\n            <div class="list bg-accent-500 '+c+'">\n              <button type="button" class="btn btn-md '+m()+'">\n                Menu\n              </button>\n              <button type="button" class="btn btn-md '+m()+'">\n                Info\n              </button>\n              <button type="button" class="btn btn-md '+m()+'">\n                Account\n              </button>\n            </div>\n            <div class="media-container h-48 '+c+'">\n              <div class="media-inner">\n                <img class="media object-cover object-center" src="/img.svg" loading="eager" alt="">\n              </div>\n            </div>\n            <div class="card-md '+c+'">\n              <div class="h4">Lorem ipsum</div>\n              <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>\n            </div>\n            <div class="card-sm bg-gray-500 mt-auto '+c+'">\n              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.</p>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n  <div data-xt-overlay>\n\n    <button type="button" class="btn btn-md rounded-md '+m()+'">\n      contact\n    </button>\n\n    <div class="overlay group" data-xt-duration="1000">\n      <div class="overlay-container max-w-5xl">\n        <div class="overlay-inner">\n\n          <div class="card rounded-md shadow-overlay '+b()+" "+o+'">\n            <div class="btn btn-close p-5 text-2xl" aria-label="Close">\n              '+k()+'\n            </div>\n\n            <div class="md:card-group rounded-md '+r+'">\n\n              <div class="card-md md:card-lg md:w-7/12">\n                <div class="h4">\n                  Contact us\n                </div>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec mauris est.</p>\n                <form class="text-lg">\n                  <div class="row row-x-3 row-y-2">\n\n                    <div class="w-full md:w-6/12">\n                      <label class="form-label mb-3 '+y()+'">\n                        Name\n                      </label>\n                      <input type="text" class="form-item rounded-md '+x()+'" aria-label="Name">\n                    </div>\n\n                    <div class="w-full md:w-6/12">\n                      <label class="form-label mb-3 '+y()+'">\n                        Surname\n                      </label>\n                      <input type="text" class="form-item rounded-md '+x()+'" aria-label="Surname">\n                    </div>\n\n                    <div class="w-full md:w-6/12">\n                      <label class="form-label mb-3 '+y()+'">\n                        Email\n                      </label>\n                      <input type="text" class="form-item rounded-md '+x()+'" aria-label="Email">\n                    </div>\n\n                    <div class="w-full md:w-6/12">\n                      <label class="form-label mb-3 '+y()+'">\n                        Telephone\n                      </label>\n                      <input type="text" class="form-item rounded-md '+x()+'" aria-label="Telephone">\n                    </div>\n\n                    <div class="w-full">\n                      <label class="form-label mb-3 '+y()+'">\n                        Subject\n                      </label>\n                      <select class="form-item form-select rounded-md '+x()+'" aria-label="Subject">\n                        <option selected value="">Select an option</option>\n                        <option>Test</option>\n                        <option>Test</option>\n                        <option>Test</option>\n                      </select>\n                    </div>\n\n                    <div class="w-full">\n                      <label class="form-label mb-3 '+y()+'">\n                        Message\n                      </label>\n                      <textarea class="form-item rounded-md '+x()+' h-24 resize-vertical" aria-label="Message"></textarea>\n                    </div>\n\n                    <div class="w-full">\n                      <label class="form-label-check">\n                        <input type="checkbox" class="form-check form-checkbox rounded-md '+h()+'">\n                        <span class="ml-3">\n                          I <strong>read and accept</strong> the <a href="#" target="_blank" rel="noopener">sales conditions</a> and the <a href="#" target="_blank" rel="noopener">privacy policy</a>.\n                        </span>\n                      </label>\n                    </div>\n\n                    <div class="w-full">\n                      <button type="submit" class="btn btn-md rounded-md '+m()+'">\n                        Send\n                      </button>\n                    </div>\n\n                  </div>\n                </form>\n              </div>\n\n              <div class="md:w-5/12 flex flex-col '+r+'">\n                <div class="media-container rounded-b-md md:rounded-bl-none md:rounded-br-md h-48 md:ratio-100">\n                  <div class="media-inner">\n                    <img class="media object-cover object-center" src="/img.svg" loading="eager" alt="">\n                  </div>\n                </div>\n                <div class="card-md bg-gray-300 flex-full text-sm">\n                  <p class="h5">\n                    Didn\'t find what you was looking for?\n                  </p>\n                  <p>\n                      Contact our customer service at <a href="tel:+39333010101">+39 333 010101</a> or email us at <a href="mailto:info@info.com">info@info.com</a>.\n                  </p>\n                </div>\n              </div>\n\n            </div>\n\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n  <div data-xt-overlay>\n\n    <button type="button" class="btn btn-md rounded-md '+m()+'">\n      newsletter\n    </button>\n\n    <div class="overlay group" data-xt-duration="1000">\n      <div class="overlay-container max-w-5xl">\n        <div class="overlay-inner">\n\n          <div class="card rounded-md shadow-overlay '+b()+" "+o+'">\n            <div class="btn btn-close p-5 text-2xl" aria-label="Close">\n              '+k()+'\n            </div>\n\n            <div class="md:card-group rounded-md '+r+'">\n\n              <div class="md:w-5/12 flex flex-col">\n                <div class="media-container rounded-t-md md:rounded-tr-none h-48 lg:ratio-100 md:flex-full">\n                  <div class="media-inner">\n                    <img class="media object-cover object-center" src="/img.svg" loading="eager" alt="">\n                  </div>\n                </div>\n              </div>\n\n              <div class="card-md md:card-lg md:w-7/12">\n                <div class="h4">\n                  Subscribe to our newsletter\n                </div>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec mauris est.</p>\n                <form class="text-lg">\n                  <div class="row row-x-3 row-y-2">\n\n                    <div class="w-full">\n                      <label class="form-label mb-3 '+y()+'">\n                        Email\n                      </label>\n                      <input type="text" class="form-item rounded-md '+x()+'" aria-label="Email">\n                    </div>\n\n                    <div class="w-full">\n\n                      <label class="form-label mb-3 '+y()+'">\n                        Subject\n                      </label>\n\n                      <div class="row row-x-4 row-y-1">\n\n                        <div class="w-full sm:w-auto">\n                          <label class="form-label-check">\n                            <input type="radio" class="form-check form-radio rounded-full '+w()+'" name="radio-usage" checked>\n                            <span class="ml-3">\n                              Option 1\n                            </span>\n                          </label>\n                        </div>\n\n                        <div class="w-full sm:w-auto">\n                          <label class="form-label-check">\n                            <input type="radio" class="form-check form-radio rounded-full '+w()+'" name="radio-usage">\n                            <span class="ml-3">\n                              Option 2\n                            </span>\n                          </label>\n                        </div>\n\n                        <div class="w-full sm:w-auto">\n                          <label class="form-label-check">\n                            <input type="radio" class="form-check form-radio rounded-full '+w()+'" name="radio-usage">\n                            <span class="ml-3">\n                              Option 3\n                            </span>\n                          </label>\n                        </div>\n\n                      </div>\n\n                    </div>\n\n                    <div class="w-full">\n                      <label class="form-label-check">\n                        <input type="checkbox" class="form-check form-checkbox rounded-md '+h()+'">\n                        <span class="ml-3">\n                          I <strong>read and accept</strong> the <a href="#" target="_blank" rel="noopener">sales conditions</a> and the <a href="#" target="_blank" rel="noopener">privacy policy</a>.\n                        </span>\n                      </label>\n                    </div>\n\n                    <div class="w-full">\n                      <button type="submit" class="btn btn-md rounded-md '+m()+'">\n                        Subscribe\n                      </button>\n                    </div>\n\n                  </div>\n                </form>\n              </div>\n\n            </div>\n\n            <div class="card-sm rounded-b-md bg-gray-300 text-xs '+r+'">\n              <p>\n                Receive <strong>free discount</strong> periodically on all our products.\n              </p>\n            </div>\n\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n</div>\n\n<div class="h5 h-block rounded-md text-black links-default bg-gray-200 text-center">\n  Card\n</div>\n\n<div class="row row-3">\n\n  <div class="w-full md:w-6/12">\n    <a role="button" class="card rounded-md '+f()+'">\n      <div class="card-md">\n        <div class="h4">Default</div>\n        <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>\n      </div>\n    </a>\n  </div>\n\n  <div class="w-full md:w-6/12">\n    <a role="button" class="card rounded-md '+g()+'">\n      <div class="card-md">\n        <div class="h4">Primary</div>\n        <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>\n      </div>\n    </a>\n  </div>\n\n</div>\n';class L extends i.a.Component{render(){return i.a.createElement(l.a,{demo:C})}}t.default=L}.call(this,"src/gatsby/code/iframe/themes/animation/slide-animation-v1.js")},Cl35:function(n,t,a){"use strict";a.r(t),t.default=()=>"text-white links-inverse transform transition bg-accent-500 hover:bg-accent-600 active:bg-accent-700"},"qk+w":function(n,t,a){"use strict";a.r(t),t.default=()=>"text-black links-default transform transition bg-gray-200 hover:bg-gray-300 active:bg-gray-400"}}]);
//# sourceMappingURL=05e9dc1ad7d79234d64bbb08f150e9de34bb683f-03f00bdb260fea915c6e.js.map