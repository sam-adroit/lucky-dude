(this["webpackJsonplucky-dude"]=this["webpackJsonplucky-dude"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(5),o=a.n(l),r=(a(12),a(3)),i=a(6),u=[{id:1,item:"$2.00",bgColor:"item1-color"},{id:2,item:"Book",bgColor:"item2-color"},{id:3,item:"Cinema",bgColor:"item3-color"},{id:4,item:"$0.00",bgColor:"item4-color"},{id:5,item:"iPhone 13",bgColor:"item5-color"},{id:6,item:"ice-cream",bgColor:"item4-color"}],m=(a(13),function(e){var t=e.name,a=e.display;return c.a.createElement("button",{className:"btn",onClick:a},t)}),s=(a(14),function(e){var t=e.showLuckDisplay,a=Object(n.useState)(u),l=Object(r.a)(a,2),o=l[0],s=l[1];return Object(n.useEffect)((function(){var e=setInterval((function(){s(function(e){for(var t=Object(i.a)(e),a=e.length-1;a>0;a--){var n=Math.floor(Math.random()*(a+1)),c=[t[a],t[n]];t[n]=c[0],t[a]=c[1]}return t}(o))}),300);return function(){clearInterval(e)}})),c.a.createElement("div",{className:"container"},c.a.createElement("h1",null,"Try you Luck!"),c.a.createElement("div",{className:"luck-display"},o.map((function(e){return c.a.createElement("div",{key:e.id,className:"luck-item ".concat(e.bgColor)},c.a.createElement("h2",null,e.item))}))),c.a.createElement(m,{name:"Try your luck!",display:t}))}),d=(a(15),function(e){var t=e.showLuckDisplay,a=u[Math.floor(Math.random()*u.length)];return c.a.createElement("div",{className:"container"},c.a.createElement("h1",null,"Your luck got:"),c.a.createElement("div",{className:"result-display"},c.a.createElement("div",{className:"result-item ".concat(a.bgColor)},c.a.createElement("h2",null,a.item))),c.a.createElement(m,{name:"Try again!",display:t}))});a(16);var f=function(){var e=Object(n.useState)(!1),t=Object(r.a)(e,2),a=t[0],l=t[1],o=function(){console.log("clicking"),l(!a)};return c.a.createElement("div",{className:"App"},!a&&c.a.createElement(s,{showLuckDisplay:o}),a&&c.a.createElement(d,{showLuckDisplay:o}))};o.a.render(c.a.createElement(f,null),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.d2448d35.chunk.js.map