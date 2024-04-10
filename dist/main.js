(()=>{"use strict";var t={639:(t,e,n)=>{n.d(e,{A:()=>s});var r=n(601),a=n.n(r),o=n(314),i=n.n(o)()(a());i.push([t.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]),i.push([t.id,'body{\n    display: grid;\n    grid-template-columns: 1fr 6fr;\n    height: 100vh;\n    margin: 0;\n    font-family: "Roboto", sans-serif;;\n}\n\nh1,p,h2{\n    margin: 0;\n}\n\naside{\n    background-color: rgb(233, 233, 233);\n    display: flex;\n    flex-direction: column;\n}\n\nimg[src = "https://www.svgrepo.com/show/251946/plus.svg"]{\n    height: 30px;\n    width: 30px;\n    cursor: pointer;\n}\n\nimg[src ="https://www.svgrepo.com/show/384669/account-avatar-profile-user-13.svg"]{\n    height: 45px;\n    width: auto;\n    align-self: center;\n}\n\n.user{\n    display: flex;\n    padding: 20px;\n    border-bottom: 2px black solid;\n    margin-bottom: 20px;\n}\n\n.user > h2{\n    font-size: 2rem;\n    margin-right: auto;\n    align-self: center;\n}\n\n.addTask{\n    display: flex;\n    justify-content: center;\n    gap: 20px;\n    padding-top: 20px;\n}\n\n.addTask > p{\n    align-self: center;\n    font-size: 1.5rem;\n}\n\n.addProject{\n    display: flex;\n    padding: 10px 20px 20px 10px;\n    gap: 10px;\n    margin-bottom: 10px;\n}\n\n.addProject > p{\n    align-self: center;\n}\n\n.projects{\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap: 30px;\n}\n\n.projectList{\n    list-style: none;\n    margin: 0;\n    padding: 0;\n}\n\n.projectList li{\n    display: flex;\n    justify-content: center;\n    font-size: 1.2rem;\n}\n\n.projectList li img{\n    align-self: center;\n    width: 25px;\n    height: auto;\n}\n\n.taskGrid{\n    padding: 50px;\n    display: grid;\n    grid-template-columns: repeat(auto-fit,minmax(75px,10%));\n    gap: 15px;\n}\n\n\n\n\n\n',""]);const s=i},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,a,o){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var u=0;u<t.length;u++){var d=[].concat(t[u]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},601:t=>{t.exports=function(t){return t[1]}},72:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var o={},i=[],s=0;s<t.length;s++){var c=t[s],u=r.base?c[0]+r.base:c[0],d=o[u]||0,l="".concat(u," ").concat(d);o[u]=d+1;var h=n(l),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)e[h].references++,e[h].updater(m);else{var f=a(m,r);r.byIndex=s,e.splice(s,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function a(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,a){var o=r(t=t||[],a=a||{});return function(t){t=t||[];for(var i=0;i<o.length;i++){var s=n(o[i]);e[s].references--}for(var c=r(t,a),u=0;u<o.length;u++){var d=n(o[u]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=c}}},659:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return t[r](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{var t=n(72),e=n.n(t),r=n(825),a=n.n(r),o=n(659),i=n.n(o),s=n(56),c=n.n(s),u=n(540),d=n.n(u),l=n(113),h=n.n(l),m=n(639),f={};function g(t,e=""){const n=document.createElement("p");return n.textContent=`${t}`,n.className=`${e}`,n}f.styleTagTransform=h(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=d(),e()(m.A,f),m.A&&m.A.locals&&m.A.locals;const p={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function w(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const y={date:w({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:w({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:w({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},b={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function v(t){return(e,n)=>{let r;if("formatting"===(n?.context?String(n.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,a=n?.width?String(n.width):e;r=t.formattingValues[a]||t.formattingValues[e]}else{const e=t.defaultWidth,a=n?.width?String(n.width):t.defaultWidth;r=t.values[a]||t.values[e]}return r[t.argumentCallback?t.argumentCallback(e):e]}}const M={ordinalNumber:(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:v({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:v({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:v({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:v({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:v({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function x(t){return(e,n={})=>{const r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;const i=o[0],s=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(s)?function(t,e){for(let e=0;e<t.length;e++)if(t[e].test(i))return e}(s):function(t,e){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&t[e].test(i))return e}(s);let u;return u=t.valueCallback?t.valueCallback(c):c,u=n.valueCallback?n.valueCallback(u):u,{value:u,rest:e.slice(i.length)}}}const k={ordinalNumber:(S={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)},(t,e={})=>{const n=t.match(S.matchPattern);if(!n)return null;const r=n[0],a=t.match(S.parsePattern);if(!a)return null;let o=S.valueCallback?S.valueCallback(a[0]):a[0];return o=e.valueCallback?e.valueCallback(o):o,{value:o,rest:t.slice(r.length)}}),era:x({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:x({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:x({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:x({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:x({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};var S;const D={code:"en-US",formatDistance:(t,e,n)=>{let r;const a=p[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:y,formatRelative:(t,e,n,r)=>b[t],localize:M,match:k,options:{weekStartsOn:0,firstWeekContainsDate:1}};let P={};function j(){return P}Math.pow(10,8);const T=6048e5,C=864e5,N=43200;function W(t){const e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new t.constructor(+t):"number"==typeof t||"[object Number]"===e||"string"==typeof t||"[object String]"===e?new Date(t):new Date(NaN)}function q(t){const e=W(t);return e.setHours(0,0,0,0),e}function E(t){const e=W(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function Y(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}function F(t){const e=W(t);return function(t,e){const n=q(t),r=q(e),a=+n-E(n),o=+r-E(r);return Math.round((a-o)/C)}(e,function(t){const e=W(t),n=Y(t,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}(e))+1}function O(t,e){const n=j(),r=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,a=W(t),o=a.getDay(),i=(o<r?7:0)+o-r;return a.setDate(a.getDate()-i),a.setHours(0,0,0,0),a}function L(t){return O(t,{weekStartsOn:1})}function H(t){const e=W(t),n=e.getFullYear(),r=Y(t,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const a=L(r),o=Y(t,0);o.setFullYear(n,0,4),o.setHours(0,0,0,0);const i=L(o);return e.getTime()>=a.getTime()?n+1:e.getTime()>=i.getTime()?n:n-1}function A(t){const e=W(t),n=+L(e)-+function(t){const e=H(t),n=Y(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),L(n)}(e);return Math.round(n/T)+1}function X(t,e){const n=W(t),r=n.getFullYear(),a=j(),o=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,i=Y(t,0);i.setFullYear(r+1,0,o),i.setHours(0,0,0,0);const s=O(i,e),c=Y(t,0);c.setFullYear(r,0,o),c.setHours(0,0,0,0);const u=O(c,e);return n.getTime()>=s.getTime()?r+1:n.getTime()>=u.getTime()?r:r-1}function z(t,e){const n=W(t),r=+O(n,e)-+function(t,e){const n=j(),r=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,a=X(t,e),o=Y(t,0);return o.setFullYear(a,0,r),o.setHours(0,0,0,0),O(o,e)}(n,e);return Math.round(r/T)+1}function G(t,e){return(t<0?"-":"")+Math.abs(t).toString().padStart(e,"0")}const $={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return G("yy"===e?r%100:r,e.length)},M(t,e){const n=t.getMonth();return"M"===e?String(n+1):G(n+1,2)},d:(t,e)=>G(t.getDate(),e.length),a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:(t,e)=>G(t.getHours()%12||12,e.length),H:(t,e)=>G(t.getHours(),e.length),m:(t,e)=>G(t.getMinutes(),e.length),s:(t,e)=>G(t.getSeconds(),e.length),S(t,e){const n=e.length,r=t.getMilliseconds();return G(Math.trunc(r*Math.pow(10,n-3)),e.length)}},I={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){const e=t.getFullYear(),r=e>0?e:1-e;return n.ordinalNumber(r,{unit:"year"})}return $.y(t,e)},Y:function(t,e,n,r){const a=X(t,r),o=a>0?a:1-a;return"YY"===e?G(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):G(o,e.length)},R:function(t,e){return G(H(t),e.length)},u:function(t,e){return G(t.getFullYear(),e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return G(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return G(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return $.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return G(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const a=z(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):G(a,e.length)},I:function(t,e,n){const r=A(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):G(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getDate(),{unit:"date"}):$.d(t,e)},D:function(t,e,n){const r=F(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):G(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return G(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return G(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return G(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let a;switch(a=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let a;switch(a=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){let e=t.getHours()%12;return 0===e&&(e=12),n.ordinalNumber(e,{unit:"hour"})}return $.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getHours(),{unit:"hour"}):$.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):G(r,e.length)},k:function(t,e,n){let r=t.getHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):G(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):$.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getSeconds(),{unit:"second"}):$.s(t,e)},S:function(t,e){return $.S(t,e)},X:function(t,e,n){const r=t.getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return B(r);case"XXXX":case"XX":return J(r);default:return J(r,":")}},x:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"x":return B(r);case"xxxx":case"xx":return J(r);default:return J(r,":")}},O:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Q(r,":");default:return"GMT"+J(r,":")}},z:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Q(r,":");default:return"GMT"+J(r,":")}},t:function(t,e,n){return G(Math.trunc(t.getTime()/1e3),e.length)},T:function(t,e,n){return G(t.getTime(),e.length)}};function Q(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),a=Math.trunc(r/60),o=r%60;return 0===o?n+String(a):n+String(a)+e+G(o,2)}function B(t,e){return t%60==0?(t>0?"-":"+")+G(Math.abs(t)/60,2):J(t,e)}function J(t,e=""){const n=t>0?"-":"+",r=Math.abs(t);return n+G(Math.trunc(r/60),2)+e+G(r%60,2)}const R=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},U=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},V={p:U,P:(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return R(t,e);let o;switch(r){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;default:o=e.dateTime({width:"full"})}return o.replace("{{date}}",R(r,e)).replace("{{time}}",U(a,e))}},K=/^D+$/,Z=/^Y+$/,_=["D","DD","YY","YYYY"];function tt(t){if(!(e=t,e instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e)||"number"==typeof t))return!1;var e;const n=W(t);return!isNaN(Number(n))}const et=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,nt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,rt=/^'([^]*?)'?$/,at=/''/g,ot=/[a-zA-Z]/;function it(t,e,n){const r=j(),a=n?.locale??r.locale??D,o=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,i=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,s=W(t);if(!tt(s))throw new RangeError("Invalid time value");let c=e.match(nt).map((t=>{const e=t[0];return"p"===e||"P"===e?(0,V[e])(t,a.formatLong):t})).join("").match(et).map((t=>{if("''"===t)return{isToken:!1,value:"'"};const e=t[0];if("'"===e)return{isToken:!1,value:st(t)};if(I[e])return{isToken:!0,value:t};if(e.match(ot))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return{isToken:!1,value:t}}));a.localize.preprocessor&&(c=a.localize.preprocessor(s,c));const u={firstWeekContainsDate:o,weekStartsOn:i,locale:a};return c.map((r=>{if(!r.isToken)return r.value;const o=r.value;return(!n?.useAdditionalWeekYearTokens&&function(t){return Z.test(t)}(o)||!n?.useAdditionalDayOfYearTokens&&function(t){return K.test(t)}(o))&&function(t,e,n){const r=function(t,e,n){const r="Y"===t[0]?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(t,e,n);if(console.warn(r),_.includes(t))throw new RangeError(r)}(o,e,String(t)),(0,I[o[0]])(s,o,a.localize,u)})).join("")}function st(t){const e=t.match(rt);return e?e[1].replace(at,"'"):t}function ct(t,e){const n=W(t),r=W(e),a=n.getTime()-r.getTime();return a<0?-1:a>0?1:a}function ut(t){const e=W(t);return+function(t){const e=W(t);return e.setHours(23,59,59,999),e}(e)==+function(t){const e=W(t),n=e.getMonth();return e.setFullYear(e.getFullYear(),n+1,0),e.setHours(23,59,59,999),e}(e)}function dt(t,e){const n=W(t),r=W(e),a=ct(n,r),o=Math.abs(function(t,e){const n=W(t),r=W(e);return 12*(n.getFullYear()-r.getFullYear())+(n.getMonth()-r.getMonth())}(n,r));let i;if(o<1)i=0;else{1===n.getMonth()&&n.getDate()>27&&n.setDate(30),n.setMonth(n.getMonth()-a*o);let e=ct(n,r)===-a;ut(W(t))&&1===o&&1===ct(t,r)&&(e=!1),i=a*(o-Number(e))}return 0===i?0:i}function lt(t,e,n){const r=function(t,e){return+W(t)-+W(e)}(t,e)/1e3;return(a=n?.roundingMethod,t=>{const e=(a?Math[a]:Math.trunc)(t);return 0===e?0:e})(r);var a}const ht=[];class mt{constructor(t,e,n,r){this.title=t,this.description=e,this.dueDate=n,this.priority=r}createTask(){const t=document.querySelector(".taskGrid"),e=document.createElement("div"),n=it(this.dueDate,"yyyy/MM/dd"),r=it(new Date,"yyyy/MM/dd"),a=document.createElement("input");a.type="checkbox",e.append(function(t,e,n=""){switch(t){case 1:const t=document.createElement("h1");return t.textContent=`${e}`,t.className=`${n}`,t;case 2:const r=document.createElement("h2");return r.textContent=`${e}`,r.className=`${n}`,r;case 3:const a=document.createElement("h3");return a.textContent=`${e}`,a.className=`${n}`,a}}(2,this.title),g(this.description),g(function(t,e,n){const r=j(),a=n?.locale??r.locale??D,o=ct(t,e);if(isNaN(o))throw new RangeError("Invalid time value");const i=Object.assign({},n,{addSuffix:n?.addSuffix,comparison:o});let s,c;o>0?(s=W(e),c=W(t)):(s=W(t),c=W(e));const u=lt(c,s),d=(E(c)-E(s))/1e3,l=Math.round((u-d)/60);let h;if(l<2)return n?.includeSeconds?u<5?a.formatDistance("lessThanXSeconds",5,i):u<10?a.formatDistance("lessThanXSeconds",10,i):u<20?a.formatDistance("lessThanXSeconds",20,i):u<40?a.formatDistance("halfAMinute",0,i):u<60?a.formatDistance("lessThanXMinutes",1,i):a.formatDistance("xMinutes",1,i):0===l?a.formatDistance("lessThanXMinutes",1,i):a.formatDistance("xMinutes",l,i);if(l<45)return a.formatDistance("xMinutes",l,i);if(l<90)return a.formatDistance("aboutXHours",1,i);if(l<1440){const t=Math.round(l/60);return a.formatDistance("aboutXHours",t,i)}if(l<2520)return a.formatDistance("xDays",1,i);if(l<N){const t=Math.round(l/1440);return a.formatDistance("xDays",t,i)}if(l<86400)return h=Math.round(l/N),a.formatDistance("aboutXMonths",h,i);if(h=dt(c,s),h<12){const t=Math.round(l/N);return a.formatDistance("xMonths",t,i)}{const t=h%12,e=Math.trunc(h/12);return t<3?a.formatDistance("aboutXYears",e,i):t<9?a.formatDistance("overXYears",e,i):a.formatDistance("almostXYears",e+1,i)}}(n,r)),g(this.priority),a);let o=pt();ht[o].push(e),console.log(ht),t.append(e),function(t,e){e.style.borderTop="Low"===t?"2px solid green":"Medium"===t?"2px solid yellow":"2px solid red"}(this.priority,e)}}function ft(t){!function(t){gt.currentProject=t}(t);const e=document.querySelector(".taskGrid");e.textContent="",e.append(...ht[t])}class gt{static projects=[];static projectCounter=-1;static currentProject=0;constructor(t){this.projectName=t}static counterIncrement(){return this.projectCounter++,this.projectCounter}static projectCreate(t){const e=document.querySelector(".projectList"),n=document.createElement("li");n.className=`p${gt.counterIncrement()}`,n.append(g(t),function(t){const e=new Image;return e.src="https://www.svgrepo.com/show/463489/delete-alt.svg",e}()),e.append(n),gt.projects.push(n),console.log(gt.projects),this.currentProject=this.projectCounter,ht.push([]),ft(this.currentProject)}}function pt(){return gt.currentProject}function wt(t){var e;gt.projects.splice(t,1),e=t,ht.splice(e,1),gt.projects.forEach(((t,e)=>{t.className=`p${e}`})),gt.projectCounter=gt.projects.length-1,gt.projects.length>0&&ft(0)}document.querySelector(".addProject img").addEventListener("click",(()=>{!function(){const t=document.querySelector(".projectDialog");t.showModal();const e=document.querySelector(".projectForm button"),n=document.querySelector("#projectName");e.addEventListener("click",(e=>{e.preventDefault(),document.querySelector(".projectForm").checkValidity(),document.querySelector(".projectForm").reportValidity()&&(gt.projectCreate(n.value),n.value="",t.close())}),{once:!0})}()})),document.querySelector(".addTask img").addEventListener("click",(()=>{0!=gt.projects.length?function(){const t=document.querySelector(".taskDialog");t.showModal(),document.querySelector(".taskSubmit").addEventListener("click",(e=>{if(e.preventDefault(),document.querySelector(".taskForm").checkValidity(),document.querySelector(".taskForm").reportValidity()){const e=[];document.querySelectorAll(".taskDialog input").forEach((t=>{e.push(t.value)})),new mt(...e).createTask(),t.close()}}),{once:!0})}():alert("Please add a project first")}));const yt=function(){const t=document.querySelector(".projectList");return{projectListener:function(){t.addEventListener("click",(t=>{let e=t.target;const n=e.parentNode.className;"P"===e.tagName?ft(parseInt(n.substring(1))):"IMG"===e.tagName&&(wt(parseInt(n.substring(1))),document.querySelector(`.p${n.substring(1)}`).remove())}))}}}(),bt=function(){const t=document.querySelector(".taskGrid");return{taskCompletion:function(){t.addEventListener("click",(t=>{"INPUT"===t.target.tagName&&function(t){let e=pt();ht[e].forEach(((n,r)=>{t==n&&(ht[e].splice(r,1),t.remove())}))}(t.target.parentNode)}))}}}();bt.taskCompletion(),yt.projectListener()})()})();