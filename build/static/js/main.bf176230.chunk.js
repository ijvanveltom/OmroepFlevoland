(this["webpackJsonptask-manager"]=this["webpackJsonptask-manager"]||[]).push([[0],{37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var c=n(12),a=n.n(c),r=n(31),s=n.n(r),o=(n(37),n(38),n(10)),i=(n(39),n(24)),l=n(0),u=n.n(l),j=n(3),d=(n(41),n(42),n(5));var b=function(e){var t=e.open,n=e.modalLable,c=e.children,a=e.custom_modal,r=e.onClose;return t?Object(d.jsx)("div",{className:"modalContainer",onClick:function(e){return"modalContainer"===e.target.className&&r(),null},children:Object(d.jsxs)("div",{className:"modal ".concat(a),children:[Object(d.jsxs)("div",{className:"modal__head",children:[Object(d.jsx)("h2",{children:n}),Object(d.jsx)("span",{className:"modal__close",onClick:r,children:"x"})]}),c]})}):null};n(44);var O=function(e){var t=e.onClose,n=e.open,c=e.title,a=e.text;return Object(d.jsx)(b,{modalLable:"Task Item",onClose:t,open:n,children:Object(d.jsxs)("div",{className:"taskItem",children:[Object(d.jsx)("h2",{children:c}),Object(d.jsx)("p",{children:a})]})})},p=(n(45),n(11)),x=n(32),h=Object(x.a)({apiKey:"AIzaSyBmbSkqd4JLcXvL0AuNS75IeAVtCwsNH0U",authDomain:"task-manager-68c54.firebaseapp.com",projectId:"task-manager-68c54",storageBucket:"task-manager-68c54.appspot.com",messagingSenderId:"979144228712",appId:"1:979144228712:web:5748b4ef3eb9567e8fe0dd"}),m=Object(p.f)(h);var v=function(e){var t=e.open,n=e.onClose,a=e.toEditTitle,r=e.toEditText,s=e.id,i=Object(c.useState)(a),l=Object(o.a)(i,2),O=l[0],x=l[1],h=Object(c.useState)(r),v=Object(o.a)(h,2),f=v[0],k=v[1],C=function(){var e=Object(j.a)(u.a.mark((function e(t){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c=Object(p.e)(m,"tasks",s),e.prev=2,e.next=5,Object(p.j)(c,{title:O,text:f});case 5:n(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsx)(b,{modalLable:"Edit Task",onClose:n,open:t,children:Object(d.jsxs)("form",{onSubmit:C,className:"editTask",children:[Object(d.jsx)("input",{type:"text",name:"title",onChange:function(e){return x(e.target.value.toUpperCase())},value:O}),Object(d.jsx)("textarea",{onChange:function(e){return k(e.target.value)},value:f}),Object(d.jsx)("button",{type:"submit",children:"Edit"})]})})};var f=function(e){var t=e.id,n=e.title,a=e.text,r=e.completed,s=Object(c.useState)(r),l=Object(o.a)(s,2),b=l[0],x=l[1],h=Object(c.useState)({edit:!1,view:!1}),f=Object(o.a)(h,2),k=f[0],C=f[1],g=function(){C({edit:!1,view:!1})},N=function(){var e=Object(j.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(p.e)(m,"tasks",t),e.prev=1,e.next=4,Object(p.j)(n,{completed:b});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),alert(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(j.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(p.e)(m,"tasks",t),e.prev=1,e.next=4,Object(p.d)(n);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),alert(e.t0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"task ".concat(b&&"task--borderColor"),children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{id:"checkbox-".concat(t),className:"checkbox-custom",name:"checkbox",checked:b,onChange:N,type:"checkbox"}),Object(d.jsx)("label",{htmlFor:"checkbox-".concat(t),className:"checkbox-custom-label",onClick:function(){return x(!b)}})]}),Object(d.jsxs)("div",{className:"task__body",children:[Object(d.jsx)("h2",{children:n}),Object(d.jsx)("p",{children:a}),Object(d.jsxs)("div",{className:"task__buttons",children:[Object(d.jsxs)("div",{className:"task__deleteNedit",children:[Object(d.jsx)("button",{className:"task__editButton",onClick:function(){return C(Object(i.a)(Object(i.a)({},k),{},{edit:!0}))},children:"Edit"}),Object(d.jsx)("button",{className:"task__deleteButton",onClick:w,children:"Delete"})]}),Object(d.jsx)("button",{onClick:function(){return C(Object(i.a)(Object(i.a)({},k),{},{view:!0}))},children:"View"})]})]}),k.view&&Object(d.jsx)(O,{onClose:g,title:n,text:a,open:k.view}),k.edit&&Object(d.jsx)(v,{onClose:g,toEditTitle:n,toEditText:a,open:k.edit,id:t})]})};n(47);var k=function(e){var t=e.onClose,n=e.open,a=Object(c.useState)(""),r=Object(o.a)(a,2),s=r[0],i=r[1],l=Object(c.useState)(""),O=Object(o.a)(l,2),x=O[0],h=O[1],v=function(){var e=Object(j.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,Object(p.b)(Object(p.c)(m,"tasks"),{title:s,text:x,completed:!1,created:p.a.now()});case 4:t(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),alert(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsx)(b,{modalLable:"Add Task",onClose:t,open:n,children:Object(d.jsxs)("form",{onSubmit:v,className:"addTask",name:"addTask",children:[Object(d.jsx)("input",{type:"text",name:"title",onChange:function(e){return i(e.target.value.toUpperCase())},value:s,placeholder:"Enter title"}),Object(d.jsx)("textarea",{onChange:function(e){return h(e.target.value)},placeholder:"Enter story text",value:x}),Object(d.jsx)("button",{type:"submit",children:"Done"})]})})};var C=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)([]),s=Object(o.a)(r,2),i=s[0],l=s[1];return Object(c.useEffect)((function(){var e=Object(p.i)(Object(p.c)(m,"tasks"),Object(p.h)("created","desc"));Object(p.g)(e,(function(e){l(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[]),Object(d.jsxs)("div",{className:"taskManager",children:[Object(d.jsx)("header",{children:"Omroep Flevoland"}),Object(d.jsxs)("div",{className:"taskManager__container",children:[Object(d.jsx)("button",{onClick:function(){return a(!0)},children:"Add story +"}),Object(d.jsx)("div",{className:"taskManager__tasks",children:i.map((function(e){return Object(d.jsx)(f,{id:e.id,completed:e.data.completed,title:e.data.title,text:e.data.text},e.id)}))})]}),n&&Object(d.jsx)(k,{onClose:function(){return a(!1)},open:n})]})};var g=function(){return Object(d.jsx)("div",{className:"app",children:Object(d.jsx)(C,{})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),N()}},[[48,1,2]]]);
//# sourceMappingURL=main.bf176230.chunk.js.map