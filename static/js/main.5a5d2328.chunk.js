(this.webpackJsonpbells=this.webpackJsonpbells||[]).push([[0],{11:function(e,a,t){},12:function(e,a,t){},13:function(e,a,t){"use strict";t.r(a);var i=t(0),s=t(1),n=t.n(s),l=t(4),r=t.n(l),c=(t(11),function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,14)).then((function(a){var t=a.getCLS,i=a.getFID,s=a.getFCP,n=a.getLCP,l=a.getTTFB;t(e),i(e),s(e),n(e),l(e)}))}),m=t(3),d=t(5),o=t.n(d),f=(t(12),function(){var e=Object(s.useState)(0),a=Object(m.a)(e,2),t=a[0],n=a[1],l=Object(s.useState)(),r=Object(m.a)(l,2),c=r[0],d=r[1];Object(s.useEffect)((function(){var e=new o.a({threshold:5,timeout:0});return e.start(),window.addEventListener("shake",p,!1),function(){window.removeEventListener("shake",p,!1),e.stop()}}),[]);var f=u.map((function(e){return new Audio("".concat("/bells","/sounds/").concat(e.fileName))})),p=function(e){var a=e||c;if(a){var i=f[a].cloneNode();i.currentTime=u[a].startTime,i.play(),n(t+1)}};return Object(i.jsxs)("div",{className:"BellPage",children:[Object(i.jsxs)("div",{children:["ring count: ",t]}),u.map((function(e,a){return Object(i.jsxs)("div",{className:"BellPage-bell",children:[Object(i.jsx)("div",{className:"BellPage-bell-note"+(e.sharp?" sharp":""),onClick:function(){return p(a)},children:e.displayName}),Object(i.jsx)("div",{className:"BellPage-bell-lock"+(c===a?" locked":""),onClick:function(){return function(e){d(c===e?void 0:e)}(a)},children:"\ud83d\udd12"})]})}))]})}),u=[{displayName:"C",fileName:"low-c.wav",startTime:.1},{displayName:"C\u266f/D\u266d",fileName:"c-sharp-d-flat.wav",startTime:.35,sharp:!0},{displayName:"D",fileName:"d.wav",startTime:.25},{displayName:"D\u266f/E\u266d",fileName:"d-sharp-e-flat.wav",startTime:.3,sharp:!0},{displayName:"E",fileName:"e.wav",startTime:.3},{displayName:"F",fileName:"f.wav",startTime:.35},{displayName:"G",fileName:"g.wav",startTime:.4},{displayName:"G\u266f/A\u266d",fileName:"g-sharp-a-flat.wav",startTime:.3,sharp:!0},{displayName:"A",fileName:"a.wav",startTime:.3},{displayName:"A\u266f/B\u266d",fileName:"a-sharp-b-flat.wav",startTime:.3,sharp:!0},{displayName:"B",fileName:"b.wav",startTime:.25},{displayName:"C",fileName:"high-c.wav",startTime:.25}];r.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(f,{})}),document.getElementById("root")),c()}},[[13,1,2]]]);
//# sourceMappingURL=main.5a5d2328.chunk.js.map