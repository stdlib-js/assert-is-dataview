// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var o=Object.prototype.toString;var e=Object.prototype.hasOwnProperty;var n="function"==typeof Symbol?Symbol.toStringTag:"";var r=t&&"symbol"==typeof Symbol.toStringTag?function(t){var r,a,l,c,y;if(null==t)return o.call(t);a=t[n],y=n,r=null!=(c=t)&&e.call(c,y);try{t[n]=void 0}catch(e){return o.call(t)}return l=o.call(t),r?t[n]=a:delete t[n],l}:function(t){return o.call(t)},a="function"==typeof DataView;function l(t){return a&&t instanceof DataView||"[object DataView]"===r(t)}export{l as default};
//# sourceMappingURL=mod.js.map
