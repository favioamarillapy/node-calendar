(this["webpackJsonpreact-06-calendar"]=this["webpackJsonpreact-06-calendar"]||[]).push([[0],{120:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(8),c=a.n(r),s=(a(71),a(11)),o=a(33),i=a(9),l=a(13),u=a.n(l),j=a(21),d="MODAL_OPEN",b="CALENDAR_LOAD",p="CALENDAR_LIST",f="CALENDAR_ACTIVE",O="CALENDAR_ADD",m="CALENDAR_UPDATE",h="CALENDAR_DELETE",v="AUTH_CHECKING_FINISH",x="AUTH_SIGNIN",g="AUTH_LOGOUT",N="".concat("https://react-06-calendar.herokuapp.com/api"),y=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",n="".concat(N,"/").concat(e);return"GET"===a?fetch(n):fetch(n,{method:a,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},w=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",n="".concat(N,"/").concat(e),r=localStorage.getItem("react-06-calendar-token")||"";return"GET"===a?fetch(n,{method:"get",headers:{Authorization:r}}):fetch(n,{method:a,headers:{"Content-type":"application/json",Authorization:r},body:JSON.stringify(t)})},k=a(12),E=a.n(k),S=function(){return{type:v}},T=function(){return{type:g}},C=function(e,t){return{type:e,payload:t}},D=a(19),A=a(35),_=a(5),I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(n.useState)(e),a=Object(D.a)(t,2),r=a[0],c=a[1],s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;c(t)},o=function(e){var t=e.target;c(Object(_.a)(Object(_.a)({},r),{},Object(A.a)({},t.name,t.value)))};return[r,o,s]},L=(a(86),a(2)),P=function(){var e=Object(s.b)(),t=I({lemail:"",lpassword:""}),a=Object(D.a)(t,2),n=a[0],r=a[1],c=n.lemail,o=n.lpassword,i=I({rname:"",remail:"",rpassword:"",rpassword2:""}),l=Object(D.a)(i,2),d=l[0],b=l[1],p=d.rname,f=d.remail,O=d.rpassword,m=d.rpassword2;return Object(L.jsx)("div",{className:"container login-container",children:Object(L.jsxs)("div",{className:"row login-form-container",children:[Object(L.jsxs)("div",{className:"col-md-6 login-form-1",children:[Object(L.jsx)("h3",{children:"Sign In"}),Object(L.jsxs)("form",{onSubmit:function(t){var a;(t.preventDefault(),""!=c)?""!=o?e((a={email:c,password:o},function(){var e=Object(j.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y("auth/signin",a,"POST");case 2:return n=e.sent,e.next=5,n.json();case 5:(r=e.sent).ok?(localStorage.setItem("react-06-calendar-token",r.data.token),localStorage.setItem("react-06-calendar-init-date-token",(new Date).getTime()),t(C(x,r.data))):E.a.fire(r.message);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())):E.a.fire("The fiel password is required"):E.a.fire("The fiel email is required")},children:[Object(L.jsx)("div",{className:"form-group",children:Object(L.jsx)("input",{type:"email",className:"form-control",placeholder:"Email",name:"lemail",value:c,onChange:r})}),Object(L.jsx)("div",{className:"form-group",children:Object(L.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",name:"lpassword",value:o,onChange:r})}),Object(L.jsx)("div",{className:"form-group",children:Object(L.jsx)("input",{type:"submit",className:"btnSubmit",value:"Login"})})]})]}),Object(L.jsxs)("div",{className:"col-md-6 login-form-2",children:[Object(L.jsx)("h3",{children:"Sign Up"}),Object(L.jsxs)("form",{onSubmit:function(t){var a;(t.preventDefault(),""!=p)?""!=f?""!=O?O==m?e((a={name:p,email:f,password:O},function(){var e=Object(j.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y("auth/signup",a,"POST");case 2:return n=e.sent,e.next=5,n.json();case 5:(r=e.sent).ok?(localStorage.setItem("react-06-calendar-token",r.data.token),localStorage.setItem("react-06-calendar-init-date-token",(new Date).getTime()),t(C(x,r.data))):E.a.fire(r.message);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())):E.a.fire("Passwords must match"):E.a.fire("The fiel password is required"):E.a.fire("The fiel email is required"):E.a.fire("The fiel name is required")},children:[Object(L.jsx)("div",{className:"form-group",children:Object(L.jsx)("input",{type:"text",className:"form-control",placeholder:"Name",name:"rname",value:p,onChange:b})}),Object(L.jsx)("div",{className:"form-group",children:Object(L.jsx)("input",{type:"email",className:"form-control",placeholder:"Email",name:"remail",value:f,onChange:b})}),Object(L.jsx)("div",{className:"form-group",children:Object(L.jsx)("input",{type:"password",className:"form-control",placeholder:"Password",name:"rpassword",value:O,onChange:b})}),Object(L.jsx)("div",{className:"form-group",children:Object(L.jsx)("input",{type:"password",className:"form-control",placeholder:"Repeate Password",name:"rpassword2",value:m,onChange:b})}),Object(L.jsx)("div",{className:"form-group",children:Object(L.jsx)("input",{type:"submit",className:"btnSubmit",value:"Register"})})]})]})]})})},R=a(51),G=a(17),U=a.n(G),q=(a(89),function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.auth})).name;return Object(L.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:[Object(L.jsx)("a",{className:"navbar-brand",href:"#",children:"Calendar"}),Object(L.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(L.jsx)("span",{className:"navbar-toggler-icon"})}),Object(L.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(L.jsx)("ul",{className:"navbar-nav mr-auto"}),Object(L.jsxs)("form",{className:"form-inline my-2 my-lg-0",children:[Object(L.jsxs)("strong",{className:"mr-3 text-white",children:[" ",t," "]}),Object(L.jsxs)("button",{type:"button",className:"btn btn-outline-danger",onClick:function(t){t.preventDefault(),e((function(e){localStorage.clear(),e(T())}))},children:[Object(L.jsx)("i",{className:"fas fa-sign-out-alt"})," \xa0 Logout"]})]})]})]})}),H=function(e){var t=e.event.title;return Object(L.jsx)("div",{children:Object(L.jsx)("span",{children:t})})},J=a(47),z=a.n(J),M=a(48),V=a.n(M),X=function(e){return{type:d,payload:e}},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(_.a)(Object(_.a)({},e),{},{start:U()(e.start).toDate(),end:U()(e.end).toDate()})}))},F=function(e){return{type:f,payload:e}},K=function(e){return{type:O,payload:e}},Q=function(e){return{type:m,payload:e}},W=function(){return{type:h}},Y=function(e){return{type:p,payload:e}},Z=function(e){return{type:b,payload:e}},$={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};z.a.setAppElement("#root");var ee=U()().minutes(0).seconds(0).add(1,"hours"),te=ee.clone().add(1,"hours"),ae={start:ee.toDate(),end:te.toDate(),title:"",description:""},ne=function(){var e=Object(s.c)((function(e){return e.auth})),t=e._id,a=e.name,r=Object(s.c)((function(e){return e.modal})).isOpen,c=Object(s.c)((function(e){return e.calendar})).active,o=c._id,i=Object(s.b)(),l=function(){i(F({})),i(X(!1))},d=I(ae),b=Object(D.a)(d,3),p=b[0],f=b[1],O=b[2],m=p.start,h=p.end,v=p.title,x=p.description;Object(n.useEffect)((function(){O(o?Object(_.a)(Object(_.a)({},c),{},{start:U()(c.start).toDate(),end:U()(c.end).toDate()}):ae)}),[c]);return Object(L.jsx)("div",{children:Object(L.jsxs)(z.a,{isOpen:r,onRequestClose:l,closeTimeoutMS:200,style:$,className:"modal",overlayClassName:"modal-overlay",children:[o?Object(L.jsx)("h3",{children:" Update Event "}):Object(L.jsx)("h3",{children:" New Event "}),Object(L.jsx)("hr",{}),Object(L.jsxs)("form",{className:"container",children:[Object(L.jsxs)("div",{className:"form-group",children:[Object(L.jsx)("label",{children:"  Start date"}),Object(L.jsx)(V.a,{onChange:function(e){O(Object(_.a)(Object(_.a)({},p),{},{start:e}))},value:m,className:"form-control"})]}),Object(L.jsxs)("div",{className:"form-group",children:[Object(L.jsx)("label",{children:"End date"}),Object(L.jsx)(V.a,{onChange:function(e){O(Object(_.a)(Object(_.a)({},p),{},{end:e}))},value:h,minDate:m,className:"form-control"})]}),Object(L.jsx)("hr",{}),Object(L.jsxs)("div",{className:"form-group",children:[Object(L.jsx)("label",{children:"Title"}),Object(L.jsx)("input",{type:"text",className:"form-control",placeholder:"Title",name:"title",value:v,onChange:f})]}),Object(L.jsxs)("div",{className:"form-group",children:[Object(L.jsx)("label",{children:"Description"}),Object(L.jsx)("textarea",{type:"text",className:"form-control",placeholder:"Description",rows:"5",name:"description",value:x,onChange:f})]}),Object(L.jsxs)("button",{type:"button",className:"btn btn-outline-primary btn-block",onClick:function(e){e.preventDefault();var n,r=U()(m),c=U()(h);r.isSameOrAfter(c)?E.a.fire("The end date must be greater than the start date"):""!=v.trim()?""!=x.trim()?(i(o?function(e,t){return function(){var a=Object(j.a)(u.a.mark((function a(n){var r,c;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,w("event/"+t,e,"PUT");case 2:return r=a.sent,a.next=5,r.json();case 5:(c=a.sent).ok?(n(Q(Object(_.a)(Object(_.a)({},c.data),{},{user:e.user}))),n(Y(Object(_.a)(Object(_.a)({},c.data),{},{user:e.user})))):E.a.fire(c.message);case 7:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(Object(_.a)(Object(_.a)({},p),{},{user:{id:t,name:a}}),o):(n=Object(_.a)(Object(_.a)({},p),{},{user:{id:t,name:a}}),function(){var e=Object(j.a)(u.a.mark((function e(t){var a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w("event",n,"POST");case 2:return a=e.sent,e.next=5,a.json();case 5:(r=e.sent).ok?(t(K(Object(_.a)(Object(_.a)({},r.data),{},{user:n.user}))),t(Y(Object(_.a)(Object(_.a)({},r.data),{},{user:n.user})))):E.a.fire(r.message);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),l()):E.a.fire("The field description is required"):E.a.fire("The field title is required")},children:[Object(L.jsx)("i",{className:"far fa-save"}),Object(L.jsx)("span",{children:" Save"})]}),o&&Object(L.jsxs)("button",{type:"button",className:"btn btn-outline-danger btn-block",onClick:function(e){e.preventDefault(),i(function(e){return function(){var t=Object(j.a)(u.a.mark((function t(a){var n,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w("event/"+e,{},"DELETE");case 2:return n=t.sent,t.next=5,n.json();case 5:(r=t.sent).ok?a(W()):E.a.fire(r.message);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(o)),l()},children:[Object(L.jsx)("i",{className:"far fa-trash"}),Object(L.jsx)("span",{children:" Delete"})]})]})]})})},re=function(){var e=Object(s.b)();return Object(L.jsx)("div",{children:Object(L.jsx)("button",{className:"btn btn-primary btn-fab",onClick:function(){e(X(!0))},children:Object(L.jsx)("i",{className:"fas fa-plus"})})})},ce=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.calendar})).events,a=Object(R.b)(U.a);Object(n.useEffect)((function(){var t;e(function(){var e=Object(j.a)(u.a.mark((function e(a){var n,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w("event",t,"GET");case 2:return n=e.sent,e.next=5,n.json();case 5:(r=e.sent).ok?(c=B(r.data),a(Z(c))):E.a.fire(r.message);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]);var r=Object(n.useState)(localStorage.getItem("calendar-last-view")||"month"),c=Object(D.a)(r,2),o=c[0],i=c[1];return Object(L.jsxs)("div",{className:"calendar-screen",children:[Object(L.jsx)(q,{}),Object(L.jsx)(R.a,{localizer:a,events:t,startAccessor:"start",endAccessor:"end",view:o,components:{event:H},onDoubleClickEvent:function(t){e(F(t)),e(X(!0))},onView:function(e){localStorage.setItem("calendar-last-view",e),i(e)},eventPropGetter:function(e){return{style:{backgroundColor:"#007bff"}}}}),Object(L.jsx)(re,{}),Object(L.jsx)(ne,{})]})},se=a(37),oe=["isAuthenticated","component"],ie=function(e){var t=e.isAuthenticated,a=e.component,n=Object(se.a)(e,oe);return Object(L.jsx)(i.b,Object(_.a)(Object(_.a)({},n),{},{component:function(e){return t?Object(L.jsx)(a,Object(_.a)({},e)):Object(L.jsx)(i.a,{to:"/login"})}}))},le=["isAuthenticated","component"],ue=function(e){var t=e.isAuthenticated,a=e.component,n=Object(se.a)(e,le);return Object(L.jsx)(i.b,Object(_.a)(Object(_.a)({},n),{},{component:function(e){return t?Object(L.jsx)(i.a,{to:"/"}):Object(L.jsx)(a,Object(_.a)({},e))}}))},je=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.auth})),a=t.checking,r=t._id;return Object(n.useEffect)((function(){e(function(){var e=Object(j.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w("auth/renew",{},"GET");case 2:return a=e.sent,e.next=5,a.json();case 5:(n=e.sent).ok?(localStorage.setItem("react-06-calendar-token",n.data.token),localStorage.setItem("react-06-calendar-init-date-token",(new Date).getTime()),t(C(x,n.data))):(localStorage.clear(),t(S()));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),a?Object(L.jsx)("h5",{children:"Loading..."}):Object(L.jsx)(o.a,{children:Object(L.jsxs)(i.d,{children:[Object(L.jsx)(ue,{exact:!0,path:"/login",component:P,isAuthenticated:!!r}),Object(L.jsx)(ie,{exact:!0,path:"/",component:ce,isAuthenticated:!!r}),Object(L.jsx)(i.a,{to:"/login"})]})})},de=a(29),be=a(66),pe=a(52),fe={events:[],active:{}},Oe={isOpen:!1},me={checking:!0},he="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||de.c,ve=Object(de.b)({modal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;return t.type===d?Object(_.a)(Object(_.a)({},e),{},{isOpen:t.payload}):e},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(_.a)(Object(_.a)({},e),{},{events:Object(pe.a)(t.payload)});case p:return Object(_.a)({},e);case f:return Object(_.a)(Object(_.a)({},e),{},{active:t.payload});case O:return Object(_.a)(Object(_.a)({},e),{},{events:[].concat(Object(pe.a)(e.events),[t.payload])});case m:return Object(_.a)(Object(_.a)({},e),{},{events:e.events.map((function(e){return e._id===t.payload._id?t.payload:e}))});case h:return Object(_.a)(Object(_.a)({},e),{},{events:e.events.filter((function(t){return t._id!==e.active._id})),active:{}});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:case v:return Object(_.a)(Object(_.a)(Object(_.a)({},e),t.payload),{},{checking:!1});case g:return{checking:!1};default:return e}}}),xe=Object(de.d)(ve,he(Object(de.a)(be.a))),ge=function(){return Object(L.jsx)(s.a,{store:xe,children:Object(L.jsx)(je,{})})};c.a.render(Object(L.jsx)(ge,{}),document.getElementById("root"))},71:function(e,t,a){},86:function(e,t,a){}},[[120,1,2]]]);
//# sourceMappingURL=main.9f2d2bac.chunk.js.map