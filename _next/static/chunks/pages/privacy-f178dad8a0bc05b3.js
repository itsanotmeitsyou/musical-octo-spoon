(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8915],{93027:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/privacy",function(){return r(74559)}])},90638:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(96856).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=a.default,o={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};n(e,Promise)?o.loader=function(){return e}:"function"===typeof e?o.loader=e:"object"===typeof e&&(o=u({},o,e));!1;(o=u({},o,t)).loadableGenerated&&delete(o=u({},o,o.loadableGenerated)).loadableGenerated;if("boolean"===typeof o.ssr&&!o.suspense){if(!o.ssr)return delete o.ssr,l(r,o);delete o.ssr}return r(o)},t.noSSR=l;o(r(67294));var a=o(r(14302));function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u.apply(this,arguments)}function o(e){return e&&e.__esModule?e:{default:e}}function l(e,t){return delete t.webpack,delete t.modules,e(t)}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},16319:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var a=((n=r(67294))&&n.__esModule?n:{default:n}).default.createContext(null);t.LoadableContext=a},14302:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(79658).Z,a=r(7222).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,o=(u=r(67294))&&u.__esModule?u:{default:u},l=r(16319);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}var s=r(67294).useSyncExternalStore,d=[],c=[],f=!1;function p(e){var t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then((function(e){return r.loading=!1,r.loaded=e,e})).catch((function(e){throw r.loading=!1,r.error=e,e})),r}var _=function(){function e(t,r){n(this,e),this._loadFn=t,this._opts=r,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return a(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,r=this._opts;t.loading&&("number"===typeof r.delay&&(0===r.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),r.delay)),"number"===typeof r.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),r.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=i({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function y(e){return function(e,t){var r=function(){if(!u){var t=new _(e,a);u={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return u.promise()},n=function(){r();var e=o.default.useContext(l.LoadableContext);e&&Array.isArray(a.modules)&&a.modules.forEach((function(t){e(t)}))},a=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);a.suspense&&(a.lazy=o.default.lazy(a.loader));var u=null;if(!f){var d=a.webpack?a.webpack():a.modules;d&&c.push((function(e){var t=!0,n=!1,a=void 0;try{for(var u,o=d[Symbol.iterator]();!(t=(u=o.next()).done);t=!0){var l=u.value;if(-1!==e.indexOf(l))return r()}}catch(i){n=!0,a=i}finally{try{t||null==o.return||o.return()}finally{if(n)throw a}}}))}var p=a.suspense?function(e,t){return n(),o.default.createElement(a.lazy,i({},e,{ref:t}))}:function(e,t){n();var r=s(u.subscribe,u.getCurrentValue,u.getCurrentValue);return o.default.useImperativeHandle(t,(function(){return{retry:u.retry}}),[]),o.default.useMemo((function(){return r.loading||r.error?o.default.createElement(a.loading,{isLoading:r.loading,pastDelay:r.pastDelay,timedOut:r.timedOut,error:r.error,retry:u.retry}):r.loaded?o.default.createElement(function(e){return e&&e.__esModule?e.default:e}(r.loaded),e):null}),[e,r])};return p.preload=function(){return r()},p.displayName="LoadableComponent",o.default.forwardRef(p)}(p,e)}function h(e,t){for(var r=[];e.length;){var n=e.pop();r.push(n(t))}return Promise.all(r).then((function(){if(e.length)return h(e,t)}))}y.preloadAll=function(){return new Promise((function(e,t){h(d).then(e,t)}))},y.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var r=function(){return f=!0,t()};h(c,e).then(r,r)}))},window.__NEXT_PRELOADREADY=y.preloadReady;var v=y;t.default=v},74559:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var n=r(85893),a=r(5152),u=r.n(a)()((function(){return r.e(3499).then(r.bind(r,3499))}),{loadableGenerated:{webpack:function(){return[3499]}},ssr:!1}),o=function(e){var t=e.termlyId;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{name:"termly-embed","data-id":t,"data-type":"iframe"}),(0,n.jsx)(u,{})]})},l=function(){return(0,n.jsx)("div",{style:{backgroundColor:"white"},children:(0,n.jsx)(o,{termlyId:"ccbd5a38-ad80-4bd6-8a18-3307b21982eb"})})}},5152:function(e,t,r){e.exports=r(90638)}},function(e){e.O(0,[9774,2888,179],(function(){return t=93027,e(e.s=t);var t}));var t=e.O();_N_E=t}]);