/*! For license information please see 929.39e864b6.chunk.js.LICENSE.txt */
(self.webpackChunkreact_the_complete_guide=self.webpackChunkreact_the_complete_guide||[]).push([[929],{5399:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(3360),a=n(3855),o=n(2791),s=n(7022),i=n(9743),c=n(2677),u=n(9434),l=n(4165),f=n(5861),d=n(1308),p=n(484),v=n(184),m=function(){var e=(0,u.I0)(),t=(0,u.v9)((function(e){return e.uiauth.islogin})),n=o.createRef(null),m=o.createRef(null),b=o.createRef(null);return(0,v.jsx)(s.Z,{className:"pt-5",children:(0,v.jsx)(i.Z,{className:"justify-content-md-center",children:(0,v.jsx)(c.Z,{xs:12,md:4,children:(0,v.jsxs)(a.Z,{className:"shadow p-3 mt-5 bg-white rounded",onSubmit:function(r){r.preventDefault();var a={email:n.current.value,password:m.current.value,returnSecureToken:!0};""===a.email&&""===a.password||(t&&e(function(e){return function(){var t=(0,f.Z)((0,l.Z)().mark((function t(n){var r,a,o;return(0,l.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=function(){var t=(0,f.Z)((0,l.Z)().mark((function t(){var n,r;return(0,l.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDzqOjnqj2hMatX74dHiuLatBgFBBTPXDc",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});case 2:return n=t.sent,t.next=5,n.json();case 5:if(!(r=t.sent).error){t.next=9;break}throw alert(r.error.message),new Error(r.error.message);case 9:return t.abrupt("return",r);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),t.prev=1,t.next=4,r();case 4:return a=t.sent,t.next=7,a.idToken;case 7:o=t.sent,localStorage.setItem("id",a.idToken),localStorage.setItem("islogin","true"),localStorage.setItem("mailid",e.email),n(d.C.Login(o)),t.next=16;break;case 14:t.prev=14,t.t0=t.catch(1);case 16:case"end":return t.stop()}}),t,null,[[1,14]])})));return function(e){return t.apply(this,arguments)}}()}(a)),t||a.password!==b.current.value||e(function(e){return function(){var t=(0,f.Z)((0,l.Z)().mark((function t(n){var r,a;return(0,l.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=function(){var t=(0,f.Z)((0,l.Z)().mark((function t(){var n,r;return(0,l.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDzqOjnqj2hMatX74dHiuLatBgFBBTPXDc",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});case 2:return n=t.sent,t.next=5,n.json();case 5:if(!(r=t.sent).error){t.next=9;break}throw alert(r.error.message),new Error(r.error.message);case 9:return t.abrupt("return",r);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),t.prev=1,t.next=4,r();case 4:a=t.sent,n(d.C.Login(a)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()}(a)))},children:[(0,v.jsx)("h3",{children:t?"Login":"SignUp"}),(0,v.jsxs)(a.Z.Group,{controlId:"email",children:[(0,v.jsx)(a.Z.Label,{children:"Email Address"}),(0,v.jsx)(a.Z.Control,{type:"email",placeholder:"Enter email",ref:n})]}),(0,v.jsxs)(a.Z.Group,{controlId:"password",children:[(0,v.jsx)(a.Z.Label,{children:"Password"}),(0,v.jsx)(a.Z.Control,{type:"password",placeholder:"Enter password",autoComplete:"off",ref:m})]}),!t&&(0,v.jsxs)(a.Z.Group,{controlId:"Confirm Password",children:[(0,v.jsx)(a.Z.Label,{children:"Confirm Password"}),(0,v.jsx)(a.Z.Control,{type:"password",placeholder:"Enter password",ref:b})]}),(0,v.jsx)(r.Z,{type:"submit",variant:"primary",className:"btn btn-primary btn-lg btn-block mb-2",children:t?"Login":"SignUp"}),(0,v.jsx)(a.Z.Group,{controlId:"btn-secondary",children:(0,v.jsx)(r.Z,{className:"btn btn-secondary btn-lg btn-block",onClick:function(){e(p.H.setisLogin())},children:t?"SignUp":"Login existing account"})})]})})})})}},5341:function(e,t,n){"use strict";n.d(t,{FT:function(){return i}});var r=n(9439),a=n(2791),o=n(184),s=["as","disabled"];function i(e){var t=e.tagName,n=e.disabled,r=e.href,a=e.target,o=e.rel,s=e.role,i=e.onClick,c=e.tabIndex,u=void 0===c?0:c,l=e.type;t||(t=null!=r||null!=a||null!=o?"a":"button");var f={tagName:t};if("button"===t)return[{type:l||"button",disabled:n},f];var d=function(e){(n||"a"===t&&function(e){return!e||"#"===e.trim()}(r))&&e.preventDefault(),n?e.stopPropagation():null==i||i(e)};return"a"===t&&(r||(r="#"),n&&(r=void 0)),[{role:null!=s?s:"button",disabled:void 0,tabIndex:n?void 0:u,href:r,target:"a"===t?a:void 0,"aria-disabled":n||void 0,rel:"a"===t?o:void 0,onClick:d,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),d(e))}},f]}var c=a.forwardRef((function(e,t){var n=e.as,a=e.disabled,c=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,s),u=i(Object.assign({tagName:n,disabled:a},c)),l=(0,r.Z)(u,2),f=l[0],d=l[1].tagName;return(0,o.jsx)(d,Object.assign({},c,f,{ref:t}))}));c.displayName="Button",t.ZP=c},1694:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var s=a.apply(null,n);s&&e.push(s)}}else if("object"===o){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var i in n)r.call(n,i)&&n[i]&&e.push(i)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},3360:function(e,t,n){"use strict";var r=n(1413),a=n(9439),o=n(5987),s=n(1694),i=n.n(s),c=n(2791),u=n(5341),l=n(162),f=n(184),d=["as","bsPrefix","variant","size","active","disabled","className"],p=c.forwardRef((function(e,t){var n=e.as,s=e.bsPrefix,c=e.variant,p=void 0===c?"primary":c,v=e.size,m=e.active,b=void 0!==m&&m,h=e.disabled,x=void 0!==h&&h,g=e.className,y=(0,o.Z)(e,d),Z=(0,l.vE)(s,"btn"),j=(0,u.FT)((0,r.Z)({tagName:n,disabled:x},y)),w=(0,a.Z)(j,2),k=w[0],N=w[1].tagName;return(0,f.jsx)(N,(0,r.Z)((0,r.Z)((0,r.Z)({},k),y),{},{ref:t,disabled:x,className:i()(g,Z,b&&"active",p&&"".concat(Z,"-").concat(p),v&&"".concat(Z,"-").concat(v),y.href&&x&&"disabled")}))}));p.displayName="Button",t.Z=p},2677:function(e,t,n){"use strict";var r=n(9439),a=n(1413),o=n(5987),s=n(1694),i=n.n(s),c=n(2791),u=n(162),l=n(184),f=["as","bsPrefix","className"],d=["className"];var p=c.forwardRef((function(e,t){var n=function(e){var t=e.as,n=e.bsPrefix,r=e.className,s=(0,o.Z)(e,f);n=(0,u.vE)(n,"col");var c=(0,u.pi)(),l=(0,u.zG)(),d=[],p=[];return c.forEach((function(e){var t,r,a,o=s[e];delete s[e],"object"===typeof o&&null!=o?(t=o.span,r=o.offset,a=o.order):t=o;var i=e!==l?"-".concat(e):"";t&&d.push(!0===t?"".concat(n).concat(i):"".concat(n).concat(i,"-").concat(t)),null!=a&&p.push("order".concat(i,"-").concat(a)),null!=r&&p.push("offset".concat(i,"-").concat(r))})),[(0,a.Z)((0,a.Z)({},s),{},{className:i().apply(void 0,[r].concat(d,p))}),{as:t,bsPrefix:n,spans:d}]}(e),s=(0,r.Z)(n,2),c=s[0],p=c.className,v=(0,o.Z)(c,d),m=s[1],b=m.as,h=void 0===b?"div":b,x=m.bsPrefix,g=m.spans;return(0,l.jsx)(h,(0,a.Z)((0,a.Z)({},v),{},{ref:t,className:i()(p,!g.length&&x)}))}));p.displayName="Col",t.Z=p},9743:function(e,t,n){"use strict";var r=n(1413),a=n(5987),o=n(1694),s=n.n(o),i=n(2791),c=n(162),u=n(184),l=["bsPrefix","className","as"],f=i.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,i=e.as,f=void 0===i?"div":i,d=(0,a.Z)(e,l),p=(0,c.vE)(n,"row"),v=(0,c.pi)(),m=(0,c.zG)(),b="".concat(p,"-cols"),h=[];return v.forEach((function(e){var t,n=d[e];delete d[e],t=null!=n&&"object"===typeof n?n.cols:n;var r=e!==m?"-".concat(e):"";null!=t&&h.push("".concat(b).concat(r,"-").concat(t))})),(0,u.jsx)(f,(0,r.Z)((0,r.Z)({ref:t},d),{},{className:s().apply(void 0,[o,p].concat(h))}))}));f.displayName="Row",t.Z=f},162:function(e,t,n){"use strict";n.d(t,{pi:function(){return i},vE:function(){return s},zG:function(){return c}});var r=n(2791),a=(n(184),["xxl","xl","lg","md","sm","xs"]),o=r.createContext({prefixes:{},breakpoints:a,minBreakpoint:"xs"});o.Consumer,o.Provider;function s(e,t){var n=(0,r.useContext)(o).prefixes;return e||n[t]||t}function i(){return(0,r.useContext)(o).breakpoints}function c(){return(0,r.useContext)(o).minBreakpoint}},2391:function(e){"use strict";var t=function(){};e.exports=t},5987:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(3366);function a(e,t){if(null==e)return{};var n,a,o=(0,r.Z)(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}},3366:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=929.39e864b6.chunk.js.map