(this["webpackJsonptyler-weather-app"]=this["webpackJsonptyler-weather-app"]||[]).push([[0],[,,,,,function(e,a,t){e.exports=t(13)},,,,,function(e,a,t){},,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(4),l=t.n(r),s=(t(10),t(1)),o=t.n(s),u=t(2),m=(t(12),{key:"374b6f66c149672621d9b35e6afec1f1",base:"https://api.openweathermap.org/data/2.5/"}),i=function(e){var a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],t=e.getDate(),n=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],c=e.getFullYear();return"".concat(a," ").concat(t," ").concat(n," ").concat(c)};var p=function(){var e=Object(n.useState)(""),a=Object(u.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)({}),s=Object(u.a)(l,2),p=s[0],d=s[1],y=Object(n.useState)(null),b=Object(u.a)(y,2),h=b[0],v=b[1];return c.a.createElement("div",{className:"undefined"!==typeof p.main&&p.main.temp>18?"app warm":"app"},c.a.createElement("main",null,c.a.createElement("div",{className:"search-box"},c.a.createElement("input",{type:"text",className:"search-bar",placeholder:"Search...",onChange:function(e){return r(e.target.value)},value:t,onKeyPress:function(e){var a,n;return o.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:if(c.prev=0,"Enter"!==e.key){c.next=12;break}return c.next=4,o.a.awrap(fetch("".concat(m.base,"weather?q=").concat(t,"&units=metric&APPID=").concat(m.key)));case 4:return a=c.sent,c.next=7,o.a.awrap(a.json());case 7:"404"===(n=c.sent).cod&&(v(n.message),setTimeout((function(){v(null)}),4e3)),d(n),r(""),console.log(n);case 12:c.next=17;break;case 14:c.prev=14,c.t0=c.catch(0),console.error(c.t0);case 17:case"end":return c.stop()}}),null,null,[[0,14]])}})),"undefined"!==typeof p.main?c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"location-box"},c.a.createElement("div",{className:"location"},p.name,", ",p.sys.country),c.a.createElement("div",{className:"date"},i(new Date))),c.a.createElement("div",{className:"weather-box"},c.a.createElement("div",{className:"temp"},Math.round(p.main.temp),"\xb0c"),c.a.createElement("div",{className:"weather"},p.weather[0].main))):c.a.createElement(n.Fragment,null,null!==h?c.a.createElement("div",{className:"location-box"},c.a.createElement("div",{className:"location"},h)):"",c.a.createElement("div",null,""))))};l.a.render(c.a.createElement(p,null),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.79e77a25.chunk.js.map