(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"6w1q":function(t,n,e){"use strict";e.r(n),n.default=()=>"font-sans font-semibold leading-snug tracking-wider uppercase hover:text-opacity-50 active:text-opacity-75 transition"},"7oMN":function(t,n,e){"use strict";e.r(n),function(t){e.d(n,"demo",(function(){return L}));var a=e("q1tI"),s=e.n(a),i=e("33yf"),l=e.n(i),o=e("IRUh");const d="overflow-hidden transform ease-in-out-quint duration-700 delay-300 opacity-0 translate-y-full group-active:ease-out-quint group-active:delay-0 group-active:opacity-100 group-active:translate-y-0",r="transform ease-in-out-quint duration-700 opacity-0 translate-y-1/2 group-active:ease-out-quint group-active:delay-300 group-active:opacity-100 group-active:translate-y-0",c="transform ease-in-out-quint duration-700 opacity-0 -translate-x-1/2 group-active:ease-out-quint group-active:delay-300 group-active:opacity-100 group-active:translate-x-0",u=e("NBb6").default,x=e("JNwN").default,p=e("6w1q").default,v=e("C6C/").default,m=e("+8/F").default,b=e("laZN").default,y=e("qk+w").default,g=e("Cl35").default,f=e("+jkl").default,h=e("Xu6d").default,w=e("PJgn").default,k=e("Sl05").default,q=e("TaEE").iconX,S=e("TaEE").iconSearch,j=t.replace(/\\/g,"/"),C=l.a.dirname(j).split("/"),L={container:!0,name:l.a.basename(j,".js"),dirs:C};L.htmlSource='\n<div class="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">\n  Button\n</div>\n\n<div class="xt-list xt-list-3 items-center">\n\n  <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md '+u()+'">\n    Gray\n  </button>\n\n  <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md '+x()+'">\n    Primary\n  </button>\n\n  <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md '+p()+'">\n    Text\n  </button>\n\n  <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md xt-link">\n    Link\n  </button>\n\n</div>\n\n<div class="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">\n  Drop\n</div>\n\n<div class="xt-list xt-list-3 items-center">\n\n  <div data-xt-drop>\n\n    <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md '+x()+'">\n      list\n    </button>\n\n    <div class="xt-drop group" data-xt-duration="700">\n      <div class="xt-card w-64 py-3 rounded-md shadow-drop '+m()+" "+d+'">\n        <nav class="xt-list flex-col rounded-md '+r+'">\n          <a href="#" class="xt-button text-2xs py-1.5 px-6 '+v()+'">\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit\n          </a>\n          <button type="button" class="xt-button text-2xs py-1.5 px-6 '+v()+'">\n            Dolor sit\n          </button>\n          <button type="button" class="xt-button text-2xs py-1.5 px-6 '+v()+'">\n            Amet\n          </button>\n        </nav>\n      </div>\n      <div class="xt-drop-arrow '+r+' group-active:delay-300" data-arrow></div>\n    </div>\n\n  </div>\n\n  <div data-xt-drop>\n\n    <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md '+x()+'">\n      card\n    </button>\n\n    <div class="xt-drop group" data-xt-duration="700">\n      <div class="xt-card w-80 rounded-md shadow-drop '+m()+" "+d+'">\n        <button type="button" class="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-xl" aria-label="Close">\n          '+q()+'\n        </button>\n        <div class="text-base p-8 rounded-md '+r+'">\n          <div class="xt-h4 ">Lorem ipsum</div>\n          <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>\n        </div>\n      </div>\n      <div class="xt-drop-arrow '+r+' group-active:delay-300" data-arrow></div>\n    </div>\n\n  </div>\n\n</div>\n\n<div class="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">\n  Tooltip\n</div>\n\n<div class="xt-list xt-list-3 items-center">\n\n  <div data-xt-tooltip="{ elements: false, elementsInner: \':scope > a, :scope > button\' }">\n\n    <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md '+x()+'">\n      tooltip\n    </button>\n\n    <div class="xt-tooltip group" data-xt-duration="700">\n      <div class="text-xs py-2 px-3.5 rounded shadow-tooltip '+b()+" "+d+'">\n        <div class="'+r+'">\n          Lorem ipsum dolor sit amet\n        </div>\n      </div>\n      <div class="xt-tooltip-arrow '+r+' group-active:delay-300" data-arrow></div>\n    </div>\n\n  </div>\n\n  <div data-xt-tooltip="{ elements: false, elementsInner: \':scope > a, :scope > button\' }">\n\n    <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md '+x()+'">\n      list group\n    </button>\n\n    <div class="xt-tooltip group" data-xt-duration="700">\n      <div class="rounded-md shadow-tooltip '+m()+" "+d+'">\n        <form class="text-sm">\n\n          <div class="xt-list flex-nowrap max-w-sm '+r+'">\n\n            <div class="xt-list-inner flex-auto">\n              <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-l-md '+u()+'">\n                '+S({classes:"text-xl -my-1"})+'\n              </button>\n              <input type="text" class="xt-input '+h()+'" aria-label="Search" placeholder="Seach Catalog" />\n            </div>\n\n            <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-r-md '+x()+'">\n              Search\n            </button>\n\n          </div>\n\n        </form>\n      </div>\n      <div class="xt-tooltip-arrow '+r+' group-active:delay-300" data-arrow></div>\n    </div>\n\n  </div>\n\n</div>\n\n<div class="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">\n  Overlay\n</div>\n\n<div class="xt-list xt-list-3 items-center">\n\n  <div data-xt-overlay>\n    <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md '+x()+'">\n      screen full\n    </button>\n    <div class="xt-overlay group" data-xt-duration="1000">\n      <div class="xt-overlay-container p-0">\n        <button type="button" class="xt-button xt-dismiss fixed z-last mr-2 top-0 right-0 p-5 text-2xl '+r+'" aria-label="Close">\n          '+q()+'\n        </button>\n        <div class="xt-overlay-inner">\n\n          <div class="xt-card xt-min-h-screen items-center justify-center '+m()+" "+d+'">\n            <div class="xt-media-container bg-gray-700 '+r+' xt-ratio-100">\n              <div class="xt-media-inner">\n                <img class="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="">\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div data-xt-overlay>\n\n    <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md '+x()+'">\n      left blocks\n    </button>\n\n    <div class="xt-overlay group" data-xt-duration="1000">\n      <div class="xt-overlay-container p-0 w-screen max-w-md ml-0 mr-auto">\n        <div class="xt-overlay-inner">\n\n          <div class="xt-card xt-min-h-screen '+m()+' overflow-hidden transform ease-in-out-quint duration-700 delay-300 opacity-0 -translate-x-full group-active:ease-out-quint group-active:delay-0 group-active:opacity-100 group-active:translate-x-0">\n            <button type="button" class="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-2xl" aria-label="Close">\n              '+q()+'\n            </button>\n            <div class="xt-list bg-primary-500 '+c+'">\n              <button type="button" class="xt-button text-xs py-2 px-3.5 '+x()+'">\n                Menu\n              </button>\n              <button type="button" class="xt-button text-xs py-2 px-3.5 '+x()+'">\n                Info\n              </button>\n              <button type="button" class="xt-button text-xs py-2 px-3.5 '+x()+'">\n                Account\n              </button>\n            </div>\n            <div class="xt-media-container bg-gray-700 h-48 '+c+'">\n              <div class="xt-media-inner">\n                <img class="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="">\n              </div>\n            </div>\n            <div class="text-base p-8 '+c+'">\n              <div class="xt-h4 ">Lorem ipsum</div>\n              <p><strong>Lorem ipsum</strong> dolor sit amet, <a href="#">consectetur adipiscing</a> elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>\n            </div>\n            <div class="text-sm p-6 bg-gray-500 mt-auto '+c+'">\n              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non feugiat lorem, nec volutpat turpis.</p>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n  <div data-xt-overlay>\n\n    <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md '+x()+'">\n      contact\n    </button>\n\n    <div class="xt-overlay group" data-xt-duration="1000">\n      <div class="xt-overlay-container max-w-5xl">\n        <div class="xt-overlay-inner">\n\n          <div class="xt-card rounded-md shadow-overlay '+m()+" "+d+'">\n            <button type="button" class="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-2xl" aria-label="Close">\n              '+q()+'\n            </button>\n\n            <div class="md:xt-card-group rounded-md '+r+'">\n\n              <div class="text-base p-8 md:w-7/12">\n                <div class="xt-h4 ">\n                  Contact us\n                </div>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec mauris est.</p>\n                <form class="text-sm">\n                  <div class="xt-row xt-row-x-6 xt-row-y-4">\n\n                    <div class="w-full md:w-6/12">\n                      <label class="xt-label mb-3 '+f()+'">\n                        Name\n                      </label>\n                      <input type="text" class="xt-input rounded-md '+h()+'" aria-label="Name">\n                    </div>\n\n                    <div class="w-full md:w-6/12">\n                      <label class="xt-label mb-3 '+f()+'">\n                        Surname\n                      </label>\n                      <input type="text" class="xt-input rounded-md '+h()+'" aria-label="Surname">\n                    </div>\n\n                    <div class="w-full md:w-6/12">\n                      <label class="xt-label mb-3 '+f()+'">\n                        Email\n                      </label>\n                      <input type="text" class="xt-input rounded-md '+h()+'" aria-label="Email">\n                    </div>\n\n                    <div class="w-full md:w-6/12">\n                      <label class="xt-label mb-3 '+f()+'">\n                        Telephone\n                      </label>\n                      <input type="text" class="xt-input rounded-md '+h()+'" aria-label="Telephone">\n                    </div>\n\n                    <div class="w-full">\n                      <label class="xt-label mb-3 '+f()+'">\n                        Subject\n                      </label>\n                      <select class="xt-input xt-select rounded-md '+h()+'" aria-label="Subject">\n                        <option selected value="">Select an option</option>\n                        <option>Test</option>\n                        <option>Test</option>\n                        <option>Test</option>\n                      </select>\n                    </div>\n\n                    <div class="w-full">\n                      <label class="xt-label mb-3 '+f()+'">\n                        Message\n                      </label>\n                      <textarea class="xt-input xt-textarea rounded-md '+h()+' h-24 resize-vertical" aria-label="Message"></textarea>\n                    </div>\n\n                    <div class="w-full">\n                      <label class="xt-label-check">\n                        <input type="checkbox" class="xt-check xt-checkbox rounded-md '+w()+'">\n                        <span class="xt-check-content">\n                          I <strong>read and accept</strong> the <a href="#" target="_blank" rel="noopener">sales conditions</a> and the <a href="#" target="_blank" rel="noopener">privacy policy</a>.\n                        </span>\n                      </label>\n                    </div>\n\n                    <div class="w-full">\n                      <button type="submit" class="xt-button text-xs py-2 px-3.5 rounded-md '+x()+'">\n                        Send\n                      </button>\n                    </div>\n\n                  </div>\n                </form>\n              </div>\n\n              <div class="md:w-5/12 flex flex-col '+r+'">\n                <div class="xt-media-container bg-gray-700 h-48 md:xt-ratio-100">\n                  <div class="xt-media-inner">\n                    <img class="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="">\n                  </div>\n                </div>\n                <div class="text-base p-8 bg-gray-300 rounded-b-md md:rounded-bl-none flex-full">\n                  <p class="xt-h5 ">\n                    Didn\'t find what you was looking for?\n                  </p>\n                  <p>\n                      Contact our customer service at <a href="tel:+39333010101">+39 333 010101</a> or email us at <a href="mailto:info@info.com">info@info.com</a>.\n                  </p>\n                </div>\n              </div>\n\n            </div>\n\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n  <div data-xt-overlay>\n\n    <button type="button" class="xt-button text-xs py-2 px-3.5 rounded-md '+x()+'">\n      newsletter\n    </button>\n\n    <div class="xt-overlay group" data-xt-duration="1000">\n      <div class="xt-overlay-container max-w-5xl">\n        <div class="xt-overlay-inner">\n\n          <div class="xt-card rounded-md shadow-overlay '+m()+" "+d+'">\n            <button type="button" class="xt-button xt-dismiss absolute z-last top-0 right-0 p-5 text-2xl" aria-label="Close">\n              '+q()+'\n            </button>\n\n            <div class="md:xt-card-group rounded-md '+r+'">\n\n              <div class="md:w-5/12 flex flex-col">\n                <div class="xt-media-container bg-gray-700 rounded-t-md md:rounded-tr-none h-48 lg:xt-ratio-100 md:flex-full">\n                  <div class="xt-media-inner">\n                    <img class="xt-media object-cover object-center" src="/img.svg" loading="eager" alt="">\n                  </div>\n                </div>\n              </div>\n\n              <div class="text-base p-8 md:w-7/12">\n                <div class="xt-h4 ">\n                  Subscribe to our newsletter\n                </div>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec mauris est.</p>\n                <form class="text-sm">\n                  <div class="xt-row xt-row-x-6 xt-row-y-4">\n\n                    <div class="w-full">\n                      <label class="xt-label mb-3 '+f()+'">\n                        Email\n                      </label>\n                      <input type="text" class="xt-input rounded-md '+h()+'" aria-label="Email">\n                    </div>\n\n                    <div class="w-full">\n\n                      <label class="xt-label mb-3 '+f()+'">\n                        Subject\n                      </label>\n\n                      <div class="xt-row xt-row-x-8 xt-row-y-2">\n\n                        <div class="w-full sm:w-auto">\n                          <label class="xt-label-check">\n                            <input type="radio" class="xt-check xt-radio rounded-full '+k()+'" name="radio-usage" checked>\n                            <span class="xt-check-content">\n                              Option 1\n                            </span>\n                          </label>\n                        </div>\n\n                        <div class="w-full sm:w-auto">\n                          <label class="xt-label-check">\n                            <input type="radio" class="xt-check xt-radio rounded-full '+k()+'" name="radio-usage">\n                            <span class="xt-check-content">\n                              Option 2\n                            </span>\n                          </label>\n                        </div>\n\n                        <div class="w-full sm:w-auto">\n                          <label class="xt-label-check">\n                            <input type="radio" class="xt-check xt-radio rounded-full '+k()+'" name="radio-usage">\n                            <span class="xt-check-content">\n                              Option 3\n                            </span>\n                          </label>\n                        </div>\n\n                      </div>\n\n                    </div>\n\n                    <div class="w-full">\n                      <label class="xt-label-check">\n                        <input type="checkbox" class="xt-check xt-checkbox rounded-md '+w()+'">\n                        <span class="xt-check-content">\n                          I <strong>read and accept</strong> the <a href="#" target="_blank" rel="noopener">sales conditions</a> and the <a href="#" target="_blank" rel="noopener">privacy policy</a>.\n                        </span>\n                      </label>\n                    </div>\n\n                    <div class="w-full">\n                      <button type="submit" class="xt-button text-xs py-2 px-3.5 rounded-md '+x()+'">\n                        Subscribe\n                      </button>\n                    </div>\n\n                  </div>\n                </form>\n              </div>\n\n            </div>\n\n            <div class="text-sm p-6 rounded-b-md bg-gray-300 '+r+'">\n              <p>\n                Receive <strong>free discount</strong> periodically on all our products.\n              </p>\n            </div>\n\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n</div>\n\n<div class="xt-h6 my-6 xt-my-auto py-4 px-6 rounded-md text-black bg-gray-200 text-center">\n  Card\n</div>\n\n<div class="xt-row xt-row-6">\n\n  <div class="w-full md:w-6/12">\n    <a role="button" class="xt-card rounded-md '+y()+'">\n      <div class="text-base p-8">\n        <div class="xt-h4 ">Default</div>\n        <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>\n      </div>\n    </a>\n  </div>\n\n  <div class="w-full md:w-6/12">\n    <a role="button" class="xt-card rounded-md '+g()+'">\n      <div class="text-base p-8">\n        <div class="xt-h4 ">Primary</div>\n        <p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Nullam suscipit, velit eu tristique mollis, dui felis dictum turpis, a auctor est odio ac diam. Sed mauris augue, sagittis vitae magna eget, vehicula scelerisque elit.</p>\n      </div>\n    </a>\n  </div>\n\n</div>\n';class N extends s.a.Component{render(){return s.a.createElement(o.a,{demo:L})}}n.default=N}.call(this,"src/gatsby/code/iframe/themes/animation/slide-animation-v1.js")},Cl35:function(t,n,e){"use strict";e.r(n),n.default=()=>"text-white xt-links-inverse transform transition bg-primary-500 hover:bg-primary-600 active:bg-primary-700"},"qk+w":function(t,n,e){"use strict";e.r(n),n.default=()=>"text-black xt-links-default transform transition bg-gray-200 hover:bg-gray-300 active:bg-gray-400"}}]);
//# sourceMappingURL=05e9dc1ad7d79234d64bbb08f150e9de34bb683f-7182d3ae5d97fca6080a.js.map