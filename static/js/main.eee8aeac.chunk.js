(this["webpackJsonpmatch-game"]=this["webpackJsonpmatch-game"]||[]).push([[0],{16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var r=c(1),a=c.n(r),n=c(7),o=c.n(n),i=(c(16),c(10)),s=c(6),l=c(11),d=c(8),h=c.n(d),u=(c(5),c(0));function j(e){var t=e.cardNum,c=e.cards,r=e.setMyCards;console.log("in Card");var a,n=function(){console.log(c.map((function(e){return e.cardPic})));var e=Object(l.a)(c);e[t-1]=Object(s.a)(Object(s.a)({},e[t-1]),{},{isFlipped:!e[t-1].isFlipped}),console.log(e.map((function(e){return e.cardPic}))),r(e)};return Object(u.jsx)("td",{children:Object(u.jsxs)(h.a,{isFlipped:!c[t-1].isFlipped,flipDirection:"vertical",children:[(a=c[t-1].cardNum,Object(u.jsx)("img",{className:"Game-Card",src:"/react-match-game/images/Card"+a+".png",onClick:n,alt:a.toString()})),function(e){try{return console.log("trying"),Object(u.jsx)("img",{className:"Game-Card",src:"/react-match-game/images/sports/"+e+".png",onClick:n,alt:e})}catch(t){return console.log(t,"found error"),Object(u.jsx)("img",{className:"Game-Card",src:"/react-match-game/images/notfound.png",onClick:n,alt:e})}}(c[t-1].cardPic)]})})}var m=c(9),g=function e(t,c){Object(m.a)(this,e),this.cardNum=void 0,this.cardPic=void 0,this.isFlipped=void 0,this.foundMatch=void 0,this.cardNum=t,this.cardPic=c,this.isFlipped=!0,this.foundMatch=!1};var b=function(){var e=["baseball","basketball","tennis","hockey"],t=function(e){console.log("selecting order");for(var t=new Array(e),c=0;c<e;c++)t[c]=-1;for(var r=0;r<e/2-1;r++)for(var a=0;a<2;){var n=Math.floor(Math.random()*e);-1===t[n]&&(t[n]=r,a++)}for(var o=0,i=0;o<2&&i<e;)-1===t[i]&&(t[i]=e/2-1,o++),i++;return t}(2*e.length);console.log("Picture Order: ",t);for(var c=[],r=0;r<t.length;r++)c.push(new g(r+1,e[t[r]]));var n=a.a.useState(c),o=Object(i.a)(n,2),s=o[0],l=o[1];console.log(s.map((function(e){return e.cardPic})));var d=function(){for(var e=0;e<t.length;e++){console.log("Hellow World");for(var c=e+1;c<t.length;c++)t[e]}},h=s.slice(0,e.length);return s.slice(-e.length),Object(u.jsxs)("div",{className:"Game-Board",children:[Object(u.jsx)("h2",{children:"Match Game!"}),Object(u.jsx)("table",{children:Object(u.jsx)("tbody",{children:Object(u.jsx)("tr",{children:h.map((function(e){return Object(u.jsx)("td",{onClick:d,children:Object(u.jsx)(j,{cardNum:e.cardNum,cards:s,setMyCards:l})})}))})})})]})};var f=function(e){return Object(u.jsx)("div",{children:Object(u.jsxs)("p",{className:"ScoreCard",children:["Score 0/",e.totalScore]})})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,19)).then((function(t){var c=t.getCLS,r=t.getFID,a=t.getFCP,n=t.getLCP,o=t.getTTFB;c(e),r(e),a(e),n(e),o(e)}))};o.a.render(Object(u.jsxs)(a.a.StrictMode,{children:[Object(u.jsx)(b,{}),Object(u.jsx)(f,{totalScore:6})]}),document.getElementById("root")),p()},5:function(e,t,c){}},[[18,1,2]]]);
//# sourceMappingURL=main.eee8aeac.chunk.js.map