(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6614],{72046:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/spaces/[spaceSlug]",function(){return n(95158)}])},90638:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(96856).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=a.default,u={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};r(e,Promise)?u.loader=function(){return e}:"function"===typeof e?u.loader=e:"object"===typeof e&&(u=o({},u,e));!1;(u=o({},u,t)).loadableGenerated&&delete(u=o({},u,u.loadableGenerated)).loadableGenerated;if("boolean"===typeof u.ssr&&!u.suspense){if(!u.ssr)return delete u.ssr,i(n,u);delete u.ssr}return n(u)},t.noSSR=i;u(n(67294));var a=u(n(14302));function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function u(e){return e&&e.__esModule?e:{default:e}}function i(e,t){return delete t.webpack,delete t.modules,e(t)}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},16319:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var a=((r=n(67294))&&r.__esModule?r:{default:r}).default.createContext(null);t.LoadableContext=a},14302:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(79658).Z,a=n(7222).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,u=(o=n(67294))&&o.__esModule?o:{default:o},i=n(16319);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}var s=n(67294).useSyncExternalStore,d=[],c=[],f=!1;function p(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var _=function(){function e(t,n){r(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return a(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=l({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function m(e){return function(e,t){var n=function(){if(!o){var t=new _(e,a);o={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return o.promise()},r=function(){n();var e=u.default.useContext(i.LoadableContext);e&&Array.isArray(a.modules)&&a.modules.forEach((function(t){e(t)}))},a=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);a.suspense&&(a.lazy=u.default.lazy(a.loader));var o=null;if(!f){var d=a.webpack?a.webpack():a.modules;d&&c.push((function(e){var t=!0,r=!1,a=void 0;try{for(var o,u=d[Symbol.iterator]();!(t=(o=u.next()).done);t=!0){var i=o.value;if(-1!==e.indexOf(i))return n()}}catch(l){r=!0,a=l}finally{try{t||null==u.return||u.return()}finally{if(r)throw a}}}))}var p=a.suspense?function(e,t){return r(),u.default.createElement(a.lazy,l({},e,{ref:t}))}:function(e,t){r();var n=s(o.subscribe,o.getCurrentValue,o.getCurrentValue);return u.default.useImperativeHandle(t,(function(){return{retry:o.retry}}),[]),u.default.useMemo((function(){return n.loading||n.error?u.default.createElement(a.loading,{isLoading:n.loading,pastDelay:n.pastDelay,timedOut:n.timedOut,error:n.error,retry:o.retry}):n.loaded?u.default.createElement(function(e){return e&&e.__esModule?e.default:e}(n.loaded),e):null}),[e,n])};return p.preload=function(){return n()},p.displayName="LoadableComponent",u.default.forwardRef(p)}(p,e)}function h(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return h(e,t)}))}m.preloadAll=function(){return new Promise((function(e,t){h(d).then(e,t)}))},m.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return f=!0,t()};h(c,e).then(n,n)}))},window.__NEXT_PRELOADREADY=m.preloadReady;var y=m;t.default=y},95158:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return d}});var r=n(85893),a=(n(67294),n(5152)),o=n.n(a),u=n(9008),i=n.n(u),l=n(89281),s=o()((function(){return Promise.all([n.e(6259),n.e(6724),n.e(806),n.e(834),n.e(8717),n.e(3737),n.e(4027),n.e(3662),n.e(6925),n.e(728),n.e(1228),n.e(231),n.e(5897),n.e(1963),n.e(8284),n.e(3634),n.e(8208),n.e(4756),n.e(7887),n.e(3665),n.e(9766),n.e(5083),n.e(9268),n.e(7521),n.e(6770),n.e(1049),n.e(4890),n.e(6089),n.e(6682),n.e(7126),n.e(4194),n.e(3775),n.e(971)]).then(n.bind(n,80749))}),{loadableGenerated:{webpack:function(){return[80749]}},loading:function(){return(0,r.jsx)(l.K,{hint:"Loading space..."})},ssr:!1}),d=!0;t.default=function(e){var t=e.spaceId;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i(),{children:[(0,r.jsx)("title",{children:e.title},"title"),(0,r.jsx)("meta",{property:"og:title",content:e.title},"og:title"),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, user-scalable=no"}),e.metaDescription&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("meta",{name:"description",content:e.metaDescription},"description"),(0,r.jsx)("meta",{property:"og:description",content:e.metaDescription},"og:description")]}),e.metaImage&&(0,r.jsx)("meta",{property:"og:image",content:e.metaImage},"og:image")]}),(0,r.jsx)(s,{spaceId:t,requirePassword:e.requirePassword,spaceMetadata:e,spaceSlug:e.spaceSlug})]})}},5152:function(e,t,n){e.exports=n(90638)}},function(e){e.O(0,[8860,4956,9281,9774,2888,179],(function(){return t=72046,e(e.s=t);var t}));var t=e.O();_N_E=t}]);