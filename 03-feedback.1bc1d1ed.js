!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n=function(e,t){try{var n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}},r=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},o=function(e){try{localStorage.getItem(e)?localStorage.removeItem(e):console.log("Key not Found")}catch(e){console.error("Get state error: ",e.message)}},i={},a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var u="Expected a function",f=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,s=/^0o[0-7]+$/i,d=parseInt,v="object"==typeof e&&e&&e.Object===Object&&e,m="object"==typeof self&&self&&self.Object===Object&&self,g=v||m||Function("return this")(),p=Object.prototype.toString,y=Math.max,b=Math.min,h=function(){return g.Date.now()};function j(e,t,n){var r,o,i,a,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(u);function m(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function g(e){return c=e,f=setTimeout(j,t),s?m(e):a}function p(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=i}function j(){var e=h();if(p(e))return w(e);f=setTimeout(j,function(e){var n=t-(e-l);return d?b(n,i-(e-c)):n}(e))}function w(e){return f=void 0,v&&r?m(e):(r=o=void 0,a)}function I(){var e=h(),n=p(e);if(r=arguments,o=this,l=e,n){if(void 0===f)return g(l);if(d)return f=setTimeout(j,t),m(l)}return void 0===f&&(f=setTimeout(j,t)),a}return t=O(t)||0,S(n)&&(s=!!n.leading,i=(d="maxWait"in n)?y(O(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),I.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=o=f=void 0},I.flush=function(){return void 0===f?a:w(h())},I}function S(e){var n=void 0===e?"undefined":t(a)(e);return!!e&&("object"==n||"function"==n)}function O(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(a)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==p.call(e)}(e))return NaN;if(S(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=S(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(f,"");var r=c.test(e);return r||s.test(e)?d(e.slice(2),r?2:8):l.test(e)?NaN:+e}i=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(u);return S(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),j(e,t,{leading:r,maxWait:t,trailing:o})};var w=document.querySelector(".feedback-form"),I="feedback-form-state",T="",x="";!function(){if(savedInput=r(I),!savedInput)return;T=w.elements.email.value=savedInput.email,x=w.elements.message.value=savedInput.message}(),w.addEventListener("input",i((function(e){"email"===e.target.name&&(T=e.target.value);"message"===e.target.name&&(x=e.target.value);n(I,{email:T,message:x})}),500)),w.addEventListener("submit",(function(e){e.preventDefault(),console.log(r(I)),e.target.reset(),o(I),T=x=""}))}();
//# sourceMappingURL=03-feedback.1bc1d1ed.js.map
