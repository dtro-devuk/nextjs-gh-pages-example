(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=s,t.useAmp=function(){return s(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function s({ampFirst:e=!1,hybrid:t=!1,hasQuery:n=!1}={}){return e||t&&n}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=u,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},s=n("lwAK"),i=n("FYa8"),c=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function u(e=!1){const t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce(((e,t)=>"string"===typeof t||"number"===typeof t?e:e.concat(t)),[])):e.concat(t)}const d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce(((e,t)=>{const n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(u(t.inAmpMode)).filter(function(){const e=new Set,t=new Set,n=new Set,r={};return o=>{let a=!0,s=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){s=!0;const t=o.key.slice(o.key.indexOf("$")+1);e.has(t)?a=!1:e.add(t)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(let e=0,t=d.length;e<t;e++){const t=d[e];if(o.props.hasOwnProperty(t))if("charSet"===t)n.has(t)?a=!1:n.add(t);else{const e=o.props[t],n=r[t]||new Set;"name"===t&&s||!n.has(e)?(n.add(e),r[t]=n):a=!1}}}return a}}()).reverse().map(((e,t)=>{const n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function b({children:e}){const t=(0,o.useContext)(s.AmpStateContext),n=(0,o.useContext)(i.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:p,headManager:n,inAmpMode:(0,c.isInAmpMode)(t)},e)}b.rewind=()=>{};var m=b;t.default=m},Xuae:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=n("q1tI");class o extends r.Component{constructor(e){super(e),this._hasHeadManager=void 0,this.emitChange=()=>{this._hasHeadManager&&this.props.headManager.updateHead(this.props.reduceComponentsToState([...this.props.headManager.mountedInstances],this.props))},this._hasHeadManager=this.props.headManager&&this.props.headManager.mountedInstances}componentDidMount(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}componentDidUpdate(){this.emitChange()}componentWillUnmount(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}render(){return null}}t.default=o},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("284h");t.__esModule=!0,t.default=void 0;var o=r(n("q1tI")),a=n("elyg"),s=n("nOHt"),i=n("vNVm");const c={};function l(e,t,n,r){if(!e)return;if(!(0,a.isLocalURL)(t))return;e.prefetch(t,n,r).catch((e=>{0}));const o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;c[t+"%"+n+(o?"%"+o:"")]=!0}var u=function(e){const t=!1!==e.prefetch,n=(0,s.useRouter)(),r=n&&n.pathname||"/",{href:u,as:f}=o.default.useMemo((()=>{const[t,n]=(0,a.resolveHref)(r,e.href,!0);return{href:t,as:e.as?(0,a.resolveHref)(r,e.as):n||t}}),[r,e.href,e.as]);let{children:d,replace:p,shallow:b,scroll:m,locale:h}=e;"string"===typeof d&&(d=o.default.createElement("a",null,d));const y=o.Children.only(d),x=y&&"object"===typeof y&&y.ref,[g,j]=(0,i.useIntersection)({rootMargin:"200px"}),O=o.default.useCallback((e=>{g(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,g]);(0,o.useEffect)((()=>{const e=j&&t&&(0,a.isLocalURL)(u),r="undefined"!==typeof h?h:n&&n.locale,o=c[u+"%"+f+(r?"%"+r:"")];e&&!o&&l(n,u,f,{locale:r})}),[f,u,j,h,t,n]);const v={ref:O,onClick:e=>{y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,s,i,c){const{nodeName:l}=e.currentTarget;("A"!==l||!function(e){const{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:s,locale:c,scroll:i}).then((e=>{e&&i&&document.body.focus()})))}(e,n,u,f,p,b,m,h)},onMouseEnter:e=>{(0,a.isLocalURL)(u)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),l(n,u,f,{priority:!0}))}};if(e.passHref||"a"===y.type&&!("href"in y.props)){const e="undefined"!==typeof h?h:n&&n.locale,t=(0,a.getDomainLocale)(f,e,n&&n.locales,n&&n.domainLocales);v.href=t||(0,a.addBasePath)((0,a.addLocale)(f,e,n&&n.defaultLocale))}return o.default.cloneElement(y,v)};t.default=u},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;const o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},rQ2n:function(e,t,n){"use strict";var r=n("nKUr"),o=n("q1tI"),a=n.n(o),s=n("g4pe"),i=n.n(s);var c=({title:e,description:t})=>Object(r.jsxs)(i.a,{children:[Object(r.jsx)("meta",{charSet:"UTF-8"}),Object(r.jsx)("title",{children:e||""}),Object(r.jsx)("meta",{name:"description",content:t||""}),Object(r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1 shrink-to-fit=no, user-scalable=0"})]}),l=n("YFqc"),u=n.n(l);var f=n("wtrr"),d=n("rePB");function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=e=>{let{open:t,setOpen:n}=e,o=p(e,["open","setOpen"]);const a=!!t;return Object(r.jsx)("button",m(m({className:"hamburger--spring-r ".concat(t?"is-active":"","\n            fill-current\n            md:p-3 ml-3 mr-4 \n            lg:hidden lg:ml-0 lg:w-0 \n            text-gray-300 hover:text-yellow-500             \n            rounded\n            transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-500\n            focus:text-white\n            focus:outline-none"),id:"hamburger-btn","aria-label":"Hamburger Menu Toggle Button","aria-expanded":a,"aria-controls":"{menuId}",type:"button",tabIndex:"0",onClick:e=>((e,t)=>{e.ctrlKey||e.metaKey||e.shiftKey||(e.preventDefault(),n(t))})(e,!t)},o),{},{children:Object(r.jsx)("span",{className:"hamburger-box",children:Object(r.jsx)("span",{className:"hamburger-inner rounded"})})}))},y=n("7O5W"),x=n("17x9"),g=n.n(x);function j(e){return(j="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){O(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function N(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function M(e){return t=e,(t-=0)===t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function P(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var n,r=t.indexOf(":"),o=M(t.slice(0,r)),a=t.slice(r+1).trim();return o.startsWith("webkit")?e[(n=o,n.charAt(0).toUpperCase()+n.slice(1))]=a:e[o]=a,e}),{})}var S=!1;try{S=!0}catch(R){}function _(e){return y.c.icon?y.c.icon(e):null===e?null:"object"===j(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"===typeof e?{prefix:"fas",iconName:e}:void 0}function A(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?O({},e,t):{}}function C(e){var t=e.forwardedRef,n=k(e,["forwardedRef"]),r=n.icon,o=n.mask,a=n.symbol,s=n.className,i=n.title,c=n.titleId,l=_(r),u=A("classes",[].concat(N(function(e){var t,n=e.spin,r=e.pulse,o=e.fixedWidth,a=e.inverse,s=e.border,i=e.listItem,c=e.flip,l=e.size,u=e.rotation,f=e.pull,d=(O(t={"fa-spin":n,"fa-pulse":r,"fa-fw":o,"fa-inverse":a,"fa-border":s,"fa-li":i,"fa-flip-horizontal":"horizontal"===c||"both"===c,"fa-flip-vertical":"vertical"===c||"both"===c},"fa-".concat(l),"undefined"!==typeof l&&null!==l),O(t,"fa-rotate-".concat(u),"undefined"!==typeof u&&null!==u&&0!==u),O(t,"fa-pull-".concat(f),"undefined"!==typeof f&&null!==f),O(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(d).map((function(e){return d[e]?e:null})).filter((function(e){return e}))}(n)),N(s.split(" ")))),f=A("transform","string"===typeof n.transform?y.c.transform(n.transform):n.transform),d=A("mask",_(o)),p=Object(y.a)(l,w({},u,{},f,{},d,{symbol:a,title:i,titleId:c}));if(!p)return function(){var e;!S&&console&&"function"===typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",l),null;var b=p.abstract,m={ref:t};return Object.keys(n).forEach((function(e){C.defaultProps.hasOwnProperty(e)||(m[e]=n[e])})),I(b[0],m)}C.displayName="FontAwesomeIcon",C.propTypes={border:g.a.bool,className:g.a.string,mask:g.a.oneOfType([g.a.object,g.a.array,g.a.string]),fixedWidth:g.a.bool,inverse:g.a.bool,flip:g.a.oneOf(["horizontal","vertical","both"]),icon:g.a.oneOfType([g.a.object,g.a.array,g.a.string]),listItem:g.a.bool,pull:g.a.oneOf(["right","left"]),pulse:g.a.bool,rotation:g.a.oneOf([0,90,180,270]),size:g.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:g.a.bool,symbol:g.a.oneOfType([g.a.bool,g.a.string]),title:g.a.string,transform:g.a.oneOfType([g.a.string,g.a.object]),swapOpacity:g.a.bool},C.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var I=function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof n)return n;var o=(n.children||[]).map((function(n){return e(t,n)})),a=Object.keys(n.attributes||{}).reduce((function(e,t){var r=n.attributes[t];switch(t){case"class":e.attrs.className=r,delete n.attributes.class;break;case"style":e.attrs.style=P(r);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=r:e.attrs[M(t)]=r}return e}),{attrs:{}}),s=r.style,i=void 0===s?{}:s,c=k(r,["style"]);return a.attrs.style=w({},a.attrs.style,{},i),t.apply(void 0,[n.tag,w({},a.attrs,{},c)].concat(N(o)))}.bind(null,a.a.createElement);var E=e=>{let{open:t}=e;p(e,["open"]);const n=!!t,o=t;return Object(r.jsx)("div",{"aria-hidden":!n,className:"block mt-2 w-full lg:inline-flex lg:flex-grow lg:w-auto \n    ".concat(n?"":"hidden"),children:Object(r.jsxs)("div",{className:"lg:translate-y-0\n            lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full \n            lg:items-center items-start flex flex-col lg:h-auto\n            transition ".concat(o?"translate-y-0 ease-out duration-1000 transform ":"-translate-y-full ease-in duration-1000 transform "),children:[Object(r.jsx)(u.a,{href:"/blog",children:Object(r.jsx)("a",{className:"block w-full py-1\n             md:px-3 md:py-2 rounded md:text-lg\n            text-yellow-500 \n            hover:text-white hover:bg-gray-500\n            lg:hover:bg-yellow-500 \n            active:text-white focus:outline-none\n            transform ".concat("hover:scale-x-90 transition ease-in-out duration-500"),children:"Blog"})}),Object(r.jsx)(u.a,{href:"/about",children:Object(r.jsx)("a",{className:"block mt-1 w-full py-2\n                md:px-3 md:py-2 rounded md:text-lg\n                text-yellow-400 \n                hover:text-white hover:bg-gray-500\n                lg:hover:bg-yellow-500 \n                active:text-white focus:outline-none \n                transform ".concat("hover:scale-x-90 transition ease-in-out duration-500"),children:"About"})}),Object(r.jsx)(u.a,{href:"https://www.github.com/dtro-devuk",children:Object(r.jsx)("a",{className:'block mt-1 w-full py-2\n                md:px-3 md:py-2 rounded md:text-lg\n                text-yellow-500 \n                hover:text-white hover:bg-gray-500\n                lg:hover:bg-yellow-500 \n                active:text-white focus:outline-none"\n                transform '.concat("hover:scale-x-90 transition ease-in-out duration-500"),target:"_blank",rel:"noopener noreferrer",children:Object(r.jsx)(C,{icon:["fab","github"],size:"lg",className:"text-white text-center"})})})]})})};var H=({author:e})=>{const{0:t,1:n}=Object(o.useState)(!1),a=Object(o.useRef)(null),s="mobile-menu";var i,c;return i=a,c=()=>n(!1),Object(o.useEffect)((()=>{const e=e=>{i.current&&!i.current.contains(e.target)&&c(e)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[i,c]),Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{ref:a,className:"",children:Object(r.jsxs)("nav",{id:"navbar",role:"navigation",className:"mx-auto \r px-4 py-3\r flex items-center justify-between\r bg-gray-800 flex-wrap \r md:py-2",children:[Object(r.jsx)("div",{className:"md:p-2",children:Object(r.jsx)(u.a,{href:"/",children:Object(r.jsxs)("a",{className:"inline-flex items-center w-auto cursor-pointer focus:outline-none",children:[Object(r.jsx)(f.a,{className:"h-12 w-12 rounded-full md:mr-2 md:h-20 md:w-20\r border-4 border-white-200 \r transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-500"}),Object(r.jsx)("span",{className:"p-3 font-bold italic\r text-xl md:text-3xl lg:text-4xl\r text-blue-400",children:e||""})]})})}),Object(r.jsx)("div",{className:"block md:my-2 ml-auto md:w-auto",children:Object(r.jsx)(h,{open:t,setOpen:n,"aria-controls":s})}),Object(r.jsx)(E,{open:t,setOpen:n,id:s})]})})})};var T=({caption:e,author:t,description:n})=>Object(r.jsxs)("header",{id:"header",role:"banner",className:"sticky-header \r bg-gray-800\r text-center",children:[Object(r.jsx)(H,{author:t}),Object(r.jsx)("div",{className:"px-4 pb-5 font-extrabold md:font-black\r text-lg md:text-3xl lg:text-4xl\r text-white ",children:e||""}),Object(r.jsx)("div",{className:"bg-gray-300 w-full",children:Object(r.jsx)("section",{"aria-label":"Demo description",children:Object(r.jsx)("h1",{className:"md:pt-5 font-bold text-gray-700 italic \r font-sans text-sm md:text-xl text-center",children:n})})})]});var L=({caption:e,author:t})=>Object(r.jsx)("footer",{id:"main-footer",role:"contentinfo","aria-label":"main footer content info",className:"w-full p-3\r flex flex-col items-center text-center \r bg-gray-800 ",children:Object(r.jsxs)("div",{className:"text-white text-sm md:text-1xl lg:text-2xl p-3",children:[Object(r.jsx)("p",{children:e||""}),Object(r.jsxs)("p",{children:["Copyright ",Object(r.jsx)("span",{dangerouslySetInnerHTML:{__html:"&copy;"}})," ",Object(r.jsx)("a",{href:"https://www.github.com/dtro-devuk",className:" font-semibold\r text-yellow-600 dark:text-indigo-400 \r hover:text-yellow-200 dark:hover:text-pink-400",target:"_blank",rel:"noopener noreferrer",children:t})," ","2021"]})]})});const D="A simple Next 10, Tailwind CSS app deployed to GitHub Project pages",K="dtro-devuk",q="This demo shows a simple Next 10 app with routing deployed as static html to GitHub Pages.";t.a=({children:e})=>Object(r.jsxs)("div",{id:"container",className:"bg-gray-300",children:[Object(r.jsx)(c,{title:D,description:q}),Object(r.jsx)(T,{caption:D,author:K,description:q}),Object(r.jsx)("main",{id:"main-content",role:"main","aria-label":"main content area for the page",className:"flex-1 p-3 overflow-y-hidden justify-center \r mx-2 sm:my-12 sm:text-sm\r md:mx-8 \r leading-relaxed\r bg-white text-gray-700",children:e}),Object(r.jsx)(L,{caption:D,author:K})]})},vNVm:function(e,t,n){"use strict";var r=n("TqRt");t.__esModule=!0,t.useIntersection=function({rootMargin:e,disabled:t}){const n=t||!s,r=(0,o.useRef)(),[c,l]=(0,o.useState)(!1),u=(0,o.useCallback)((t=>{r.current&&(r.current(),r.current=void 0),n||c||t&&t.tagName&&(r.current=function(e,t,n){const{id:r,observer:o,elements:a}=function(e){const t=e.rootMargin||"";let n=i.get(t);if(n)return n;const r=new Map,o=new IntersectionObserver((e=>{e.forEach((e=>{const t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:o,elements:r}),n}(n);return a.set(e,t),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),i.delete(r))}}(t,(e=>e&&l(e)),{rootMargin:e}))}),[n,e,c]);return(0,o.useEffect)((()=>{s||c||(0,a.default)((()=>l(!0)))}),[c]),[u,c]};var o=n("q1tI"),a=r(n("0G5g"));const s="undefined"!==typeof IntersectionObserver;const i=new Map}}]);