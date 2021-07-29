(this.webpackJsonpcst=this.webpackJsonpcst||[]).push([[0],{10:function(e,t,n){e.exports={row:"Counter_row__1C_4f",column:"Counter_column__ROwHq",value:"Counter_value__1d0te",textbox:"Counter_textbox__3ODaX",button:"Counter_button__1xpSV",asyncButton:"Counter_asyncButton__2UAr3 Counter_button__1xpSV"}},14:function(e,t,n){e.exports={Stopwatch:"Stopwatch_Stopwatch__1_I4G",Clock:"Stopwatch_Clock__3f9yy",row:"Stopwatch_row__1z5lR",button:"Stopwatch_button__24UmG"}},29:function(e,t,n){},37:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(19),s=n.n(a),i=(n(29),n(18)),o=n(3),u=n(17),l=n(16),d=function(){return Object(l.b)()},m=l.c,b=n(11),j=n.n(b),h=n(13),f=n(8);function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(t){return setTimeout((function(){return t({data:e})}),500)}))}var x=Object(f.b)("counter/fetchCount",function(){var e=Object(h.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),v=Object(f.c)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}},extraReducers:function(e){e.addCase(x.pending,(function(e){e.status="loading"})).addCase(x.fulfilled,(function(e,t){e.status="idle",e.value+=t.payload}))}}),O=v.actions,_=O.increment,g=O.decrement,w=O.incrementByAmount,C=function(e){return e.counter.value},S=v.reducer,N=n(10),T=n.n(N),k=n(1);function y(){var e=m(C),t=d(),n=Object(r.useState)("1"),c=Object(u.a)(n,2),a=c[0],s=c[1],i=Number(a)||0;return Object(k.jsxs)("div",{children:[Object(k.jsxs)("div",{className:T.a.row,children:[Object(k.jsx)("button",{className:T.a.button,"aria-label":"Decrement value",onClick:function(){return t(g())},children:"-"}),Object(k.jsx)("span",{className:T.a.value,children:e}),Object(k.jsx)("button",{className:T.a.button,"aria-label":"Increment value",onClick:function(){return t(_())},children:"+"})]}),Object(k.jsxs)("div",{className:T.a.column,children:[Object(k.jsx)("input",{className:T.a.textbox,"aria-label":"Set increment amount",value:a,onChange:function(e){return s(e.target.value)}}),Object(k.jsx)("button",{className:T.a.button,onClick:function(){return t(w(i))},children:"Add Amount"}),Object(k.jsx)("button",{className:T.a.asyncButton,onClick:function(){return t(x(i))},children:"Add Async"}),Object(k.jsx)("button",{className:T.a.button,onClick:function(){return t((e=i,function(t,n){Math.abs(C(n()))%2===1&&t(w(e))}));var e},children:"Add If Odd"})]})]})}var R=Object(f.b)("stopwatch/delaySecond",Object(h.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout((function(){return e({})}),1e3)}));case 2:return e.abrupt("return");case 3:case"end":return e.stop()}}),e)})))),A=Object(f.c)({name:"stopwatch",initialState:{minutes:0,seconds:0,running:!1},reducers:{startStop:function(e){e.running=!e.running},reset:function(e){e.running=!1,e.minutes=0,e.seconds=0}},extraReducers:function(e){e.addCase(R.fulfilled,(function(e){e.running&&(e.seconds+=1,60===e.seconds&&(e.seconds=0,e.minutes+=1))}))}}),B=A.actions,I=B.startStop,V=B.reset,L=A.reducer,D=n(14),M=n.n(D);var G=function(){var e=m((function(e){return e.stopwatch.minutes})),t=m((function(e){return e.stopwatch.seconds})),n=m((function(e){return e.stopwatch.running})),r=d();return n&&r(R()),Object(k.jsxs)("div",{className:M.a.Stopwatch,children:[Object(k.jsx)("div",{className:M.a.Clock,children:Object(k.jsxs)("div",{children:[e<10&&"0",e,":",t<10&&"0",t]})}),Object(k.jsxs)("div",{className:M.a.row,children:[Object(k.jsx)("button",{className:M.a.button,"aria-label":"Reset Stopwatch",onClick:function(){return r(V())},children:"Reset"}),Object(k.jsx)("button",{className:M.a.button,"aria-label":"Start/Stop Stopwatch",onClick:function(){return r(I())},children:n?"Stop":"Start"})]})]})};var P=Object(f.b)("timer/delaySecond",Object(h.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout((function(){return e({})}),1e3)}));case 2:return e.abrupt("return");case 3:case"end":return e.stop()}}),e)})))),H=Object(f.c)({name:"timer",initialState:{curTime:{hours:0,minutes:0,seconds:0},setting:!0,running:!1,ringing:!1},reducers:{setTimer:function(e,t){e.setting=!1,e.running=!0,e.curTime={hours:t.payload.hours,minutes:t.payload.minutes,seconds:t.payload.seconds}},stopResume:function(e){e.running=!e.running},deleteTimer:function(e){e.setting=!0,e.running=!1,e.ringing=!1,e.curTime={hours:0,minutes:0,seconds:0}},reset:function(e,t){e.running=!1,e.ringing=!1,e.curTime={hours:t.payload.hours,minutes:t.payload.minutes,seconds:t.payload.seconds}}},extraReducers:function(e){e.addCase(P.fulfilled,(function(e){if(e.running){var t=Object.assign({},e.curTime);0===e.curTime.seconds?0===e.curTime.minutes?0!==e.curTime.hours&&(t.hours-=1,t.minutes=59,t.seconds=59):(t.minutes-=1,t.seconds=59):t.seconds-=1,1===e.curTime.seconds&&0===e.curTime.minutes&&0===e.curTime.hours&&(t.seconds=0,e.running=!1,e.ringing=!0),e.curTime=t}}))}}),J=H.actions,U=J.setTimer,W=J.stopResume,X=J.deleteTimer,q=J.reset,z=H.reducer,E=n(9),F=n.n(E);var $=function(){var e=m((function(e){return e.timer.curTime})),t=m((function(e){return e.timer.setting})),n=m((function(e){return e.timer.running})),c=m((function(e){return e.timer.ringing})),a=Object(r.useState)(""),s=Object(u.a)(a,2),i=s[0],o=s[1],l=Object(r.useState)(""),b=Object(u.a)(l,2),j=b[0],h=b[1],f=d(),p=new Audio("https://assets.coderrocketfuel.com/pomodoro-times-up.mp3");function x(e){var t=parseInt(i),n=parseInt(j);if(isNaN(t)&&(t=0),t>=0&&n>=0&&(t>0||n>0)&&t<=99&&n<=99){var r=60*t+n,c={hours:Math.floor(r/3600),minutes:Math.floor(r/60)%60,seconds:r%60};"Start"===e?f(U(c)):"Reset"===e&&(p.pause(),f(q(c)))}else alert("Valid values for timer: 0 <= m <= 99 and 0 < s <= 99")}function v(){p.pause(),f(X()),o(""),h("")}return p.loop=!0,c&&(p.loop=!0,p.play()),n&&f(P()),Object(k.jsxs)("div",{className:"Timer",children:[t&&Object(k.jsxs)("div",{className:F.a.row,children:[Object(k.jsx)("input",{className:F.a.textbox,id:"minutes",maxLength:2,"aria-label":"Set minutes",value:i,autoComplete:"off",onChange:function(e){return o(e.target.value)}})," m",Object(k.jsx)("input",{className:F.a.textbox,id:"seconds",maxLength:2,"aria-label":"Set seconds",value:j,autoComplete:"off",onChange:function(e){return h(e.target.value)}})," s"]}),!t&&Object(k.jsx)("div",{className:F.a.Clock,children:Object(k.jsxs)("div",{className:c?F.a.Ring:"",children:[e.hours,":",e.minutes<10&&"0",e.minutes,":",e.seconds<10&&"0",e.seconds]})}),Object(k.jsxs)("div",{className:F.a.row,children:[!t&&Object(k.jsx)("button",{className:F.a.button,"aria-label":"Delete Timer",onClick:function(){return v()},children:"Delete"}),t&&Object(k.jsx)("button",{className:F.a.button,"aria-label":"Start Timer",onClick:function(){return x("Start")},children:"Start"}),!t&&!c&&Object(k.jsx)("button",{className:F.a.button,"aria-label":"Stop/Resume Timer",onClick:function(){return f(W())},children:n?"Stop":"Resume"}),!t&&Object(k.jsx)("button",{className:F.a.button,"aria-label":"Reset Timer",onClick:function(){return x("Reset")},children:"Reset"})]})]})};n(37);var K=function(){return Object(k.jsx)(i.a,{children:Object(k.jsxs)("div",{className:"App",children:[Object(k.jsxs)("div",{id:"Navbar",children:[Object(k.jsx)("div",{children:Object(k.jsx)(i.b,{className:"navlink",activeClassName:"selectedLink",exact:!0,to:"/",children:"Counter"})}),Object(k.jsx)("div",{children:Object(k.jsx)(i.b,{className:"navlink",activeClassName:"selectedLink",to:"/Stopwatch",children:"Stopwatch"})}),Object(k.jsx)("div",{children:Object(k.jsx)(i.b,{className:"navlink",activeClassName:"selectedLink",to:"/Timer",children:"Timer"})})]}),Object(k.jsxs)("div",{id:"Container",children:[Object(k.jsx)(o.a,{exact:!0,path:"/",component:y}),Object(k.jsx)(o.a,{exact:!0,path:"/Stopwatch",component:G}),Object(k.jsx)(o.a,{exact:!0,path:"/Timer",component:$})]})]})})},Q=Object(f.a)({reducer:{counter:S,stopwatch:L,timer:z}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(k.jsx)(c.a.StrictMode,{children:Object(k.jsx)(l.a,{store:Q,children:Object(k.jsx)(K,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports={Timer:"Timer_Timer__1SGCF",row:"Timer_row__1-N5i",textbox:"Timer_textbox__1gabg",button:"Timer_button__1TcV9",Clock:"Timer_Clock__1bda8",Ring:"Timer_Ring__3HeV3",blinker:"Timer_blinker__dXlVN"}}},[[42,1,2]]]);
//# sourceMappingURL=main.95a79c0d.chunk.js.map