// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var o=Object.prototype.toString;var n=Object.prototype.hasOwnProperty;var e="function"==typeof Symbol?Symbol:void 0,r="function"==typeof e?e.toStringTag:"";var a=t&&"symbol"==typeof Symbol.toStringTag?function(t){var e,a,l,c,f;if(null==t)return o.call(t);a=t[r],f=r,e=null!=(c=t)&&n.call(c,f);try{t[r]=void 0}catch(n){return o.call(t)}return l=o.call(t),e?t[r]=a:delete t[r],l}:function(t){return o.call(t)},l="function"==typeof DataView;function c(t){return l&&t instanceof DataView||"[object DataView]"===a(t)}export{c as default};
//# sourceMappingURL=mod.js.map
