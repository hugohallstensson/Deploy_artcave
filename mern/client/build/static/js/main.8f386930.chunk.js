(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{143:function(e,t,n){},184:function(e,t,n){},197:function(e,t,n){},218:function(e,t,n){},222:function(e,t,n){},224:function(e,t,n){},226:function(e,t,n){},250:function(e,t,n){},253:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(19),s=n.n(a),i=n(4),o=n.n(i),l=n(10),u=n(9),j=n(11),d=(n(105),n(17)),b=(n(183),n(184),n(2));function h(){var e=Object(c.useState)(0),t=Object(j.a)(e,2),n=t[0],r=t[1];Object(c.useEffect)(Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/shoppingcart/",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(d.a.tokens.accessToken)}});case 2:if((t=e.sent).ok){e.next=6;break}return"An error occured: ".concat(t.statusText),e.abrupt("return");case 6:return e.next=8,t.json();case 8:n=e.sent,r(n.length),console.log("l\xe4ngd: "+n.length);case 11:case"end":return e.stop()}}),e)})))),d.a.init("xbpg9gdn");var a=d.a.build({toolId:"oralnob"});function s(){return 0==!n?Object(b.jsxs)("span",{class:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger",children:[n,Object(b.jsx)("span",{class:"visually-hidden",children:"unread messages"})]}):null}function i(){return console.log(d.a.user),d.a.user.userId?Object(b.jsxs)("div",{class:"big",children:[Object(b.jsx)("a",{id:"sc",href:"/shoppingcart",class:"nav-link",children:Object(b.jsxs)("button",{type:"button",class:"btn btn-primary position-relative",children:[Object(b.jsx)("i",{class:"bi bi-cart-fill"}),Object(b.jsx)(s,{})]})}),Object(b.jsx)("div",{id:"logout",children:Object(b.jsx)(a,{})})]}):null}function u(){return console.log(d.a.user),d.a.user.userId?null:Object(b.jsx)("div",{children:Object(b.jsx)("div",{class:"navbar-collapse collapse",id:"navbar",children:Object(b.jsxs)("ul",{class:"navbar-nav",children:[Object(b.jsx)("li",{class:"nav-item",children:Object(b.jsx)("a",{href:"/Login",class:"nav-link",children:"Login"})}),Object(b.jsx)("li",{class:"nav-item",children:Object(b.jsx)("a",{href:"/Register",class:"nav-link",children:"Register"})})]})})})}return Object(b.jsx)("div",{children:Object(b.jsxs)("nav",{class:"navbar navbar-light bg-light navbar-expand-md navbar-fixed-top",children:[Object(b.jsx)("a",{id:"logo",href:"/",class:"navbar-brand",children:Object(b.jsx)("img",{src:"/Logonav-removebg-preview (2).png",width:150})}),Object(b.jsx)("button",{class:"navbar-toggler","data-bs-toggle":"collapse","data-bs-target":"#navbar",children:Object(b.jsx)("span",{class:"navbar-toggler-icon"})}),Object(b.jsx)("div",{class:"navbar-collapse collapse",id:"navbar",children:Object(b.jsxs)("ul",{class:"navbar-nav",children:[Object(b.jsx)("li",{id:"hehe",class:"nav-item",children:Object(b.jsx)("a",{href:"/Image",class:"nav-link",children:"Create"})}),Object(b.jsx)("li",{id:"hehe",class:"nav-item",children:Object(b.jsx)("a",{href:"/Retrive",class:"nav-link",children:"Collection"})})]})}),Object(b.jsxs)("div",{id:"logoutbutton",children:[Object(b.jsx)(u,{}),Object(b.jsx)(i,{})]})]})})}n(130),n(107),n(108),n(196),n(197),n(252);n(218);function p(){return Object(b.jsxs)("div",{id:"mainbig",children:[Object(b.jsxs)("div",{class:"testMain",children:[Object(b.jsx)("div",{class:"test1",children:Object(b.jsxs)("div",{class:"green",children:[Object(b.jsx)("h1",{class:"title",children:"Welcome to Artcave"}),Object(b.jsx)("h5",{class:"breading",children:"Experience the art of tomorrow, today"})]})}),Object(b.jsx)("div",{class:"test2",children:Object(b.jsx)("div",{class:"blue",children:Object(b.jsx)("img",{src:"./Logo-removebg-preview.png",width:250})})})]}),Object(b.jsx)("div",{}),Object(b.jsx)("img",{class:"mainBild",src:"./welcome24.png"}),Object(b.jsx)("div",{class:"center",children:Object(b.jsx)("a",{id:"btn24",href:"/Image",class:"btn btn-primary btn-lg",role:"button",children:"Create a painting"})})]})}var O=n(5);function x(){var e=Object(c.useState)({name:"",position:"",level:"",records:[]}),t=Object(j.a)(e,2),n=t[0],r=t[1],a=Object(u.q)(),s=Object(u.o)();function i(e){return r((function(t){return Object(O.a)(Object(O.a)({},t),e)}))}function d(){return(d=Object(l.a)(o.a.mark((function e(t){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c={name:n.name,position:n.position,level:n.level},e.next=4,fetch("http://localhost:5000/update/".concat(a.id),{method:"POST",body:JSON.stringify(c),headers:{"Content-Type":"application/json"}});case 4:s("/");case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){var t,n,c,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.id.toString(),e.next=3,fetch("http://localhost:5000/record/".concat(a.id.toString()));case 3:if((n=e.sent).ok){e.next=8;break}return c="An error has occured: ".concat(n.statusText),window.alert(c),e.abrupt("return");case 8:return e.next=10,n.json();case 10:if(i=e.sent){e.next=15;break}return window.alert("Record with id ".concat(t," not found")),s("/"),e.abrupt("return");case 15:r(i);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a.id,s]),Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:"Update Record"}),Object(b.jsxs)("form",{onSubmit:function(e){return d.apply(this,arguments)},children:[Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"name",children:"Name: "}),Object(b.jsx)("input",{type:"text",className:"form-control",id:"name",value:n.name,onChange:function(e){return i({name:e.target.value})}})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"position",children:"Position: "}),Object(b.jsx)("input",{type:"text",className:"form-control",id:"position",value:n.position,onChange:function(e){return i({position:e.target.value})}})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsxs)("div",{className:"form-check form-check-inline",children:[Object(b.jsx)("input",{className:"form-check-input",type:"radio",name:"positionOptions",id:"positionIntern",value:"Intern",checked:"Intern"===n.level,onChange:function(e){return i({level:e.target.value})}}),Object(b.jsx)("label",{htmlFor:"positionIntern",className:"form-check-label",children:"Intern"})]}),Object(b.jsxs)("div",{className:"form-check form-check-inline",children:[Object(b.jsx)("input",{className:"form-check-input",type:"radio",name:"positionOptions",id:"positionJunior",value:"Junior",checked:"Junior"===n.level,onChange:function(e){return i({level:e.target.value})}}),Object(b.jsx)("label",{htmlFor:"positionJunior",className:"form-check-label",children:"Junior"})]}),Object(b.jsxs)("div",{className:"form-check form-check-inline",children:[Object(b.jsx)("input",{className:"form-check-input",type:"radio",name:"positionOptions",id:"positionSenior",value:"Senior",checked:"Senior"===n.level,onChange:function(e){return i({level:e.target.value})}}),Object(b.jsx)("label",{htmlFor:"positionSenior",className:"form-check-label",children:"Senior"})]})]}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("input",{type:"submit",value:"Update Record",className:"btn btn-primary"})})]})]})}function m(){var e=Object(c.useState)({name:"",position:"",level:""}),t=Object(j.a)(e,2),n=t[0],r=t[1],a=Object(u.o)();function s(e){return r((function(t){return Object(O.a)(Object(O.a)({},t),e)}))}function i(){return(i=Object(l.a)(o.a.mark((function e(t){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c=Object(O.a)({},n),e.next=4,fetch("http://localhost:5000/record/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}).catch((function(e){return console.error(e)}));case 4:r({name:"",position:"",level:""}),a("/");case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){var t=e.children,n=Object(u.m)();return d.a.tokens.accessToken?t:Object(b.jsx)(u.a,{to:"/login",state:{from:n},replace:!0})}return Object(b.jsx)("div",{children:Object(b.jsxs)(h,{children:[Object(b.jsx)("h3",{children:"Create New Record"}),Object(b.jsxs)("form",{onSubmit:function(e){return i.apply(this,arguments)},children:[Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"name",children:"Name"}),Object(b.jsx)("input",{type:"text",className:"form-control",id:"name",value:n.name,onChange:function(e){return s({name:e.target.value})}})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsx)("label",{htmlFor:"position",children:"Position"}),Object(b.jsx)("input",{type:"text",className:"form-control",id:"position",value:n.position,onChange:function(e){return s({position:e.target.value})}})]}),Object(b.jsxs)("div",{className:"form-group",children:[Object(b.jsxs)("div",{className:"form-check form-check-inline",children:[Object(b.jsx)("input",{className:"form-check-input",type:"radio",name:"positionOptions",id:"positionIntern",value:"Intern",checked:"Intern"===n.level,onChange:function(e){return s({level:e.target.value})}}),Object(b.jsx)("label",{htmlFor:"positionIntern",className:"form-check-label",children:"Intern"})]}),Object(b.jsxs)("div",{className:"form-check form-check-inline",children:[Object(b.jsx)("input",{className:"form-check-input",type:"radio",name:"positionOptions",id:"positionJunior",value:"Junior",checked:"Junior"===n.level,onChange:function(e){return s({level:e.target.value})}}),Object(b.jsx)("label",{htmlFor:"positionJunior",className:"form-check-label",children:"Junior"})]}),Object(b.jsxs)("div",{className:"form-check form-check-inline",children:[Object(b.jsx)("input",{className:"form-check-input",type:"radio",name:"positionOptions",id:"positionSenior",value:"Senior",checked:"Senior"===n.level,onChange:function(e){return s({level:e.target.value})}}),Object(b.jsx)("label",{htmlFor:"positionSenior",className:"form-check-label",children:"Senior"})]})]}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("input",{type:"submit",value:"Create person",className:"btn btn-primary"})})]})]})})}var f=n(44),v=(n(85),n(35));n(222);function g(){var e=Object(c.useState)({prompt:""}),t=Object(j.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)({url:"",prompt:""}),s=Object(j.a)(a,2),i=s[0],h=s[1],p=Object(c.useState)(""),x=Object(j.a)(p,2),m=x[0],g=x[1],k=Object(c.useState)(!1),y=Object(j.a)(k,2),w=y[0],S=y[1],N=Object(u.o)(),T=Object(f.a)().handleSubmit;function C(e){return h((function(t){return Object(O.a)(Object(O.a)({},t),e)}))}function I(){return(I=Object(l.a)(o.a.mark((function e(t){var c,a,s,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return document.getElementById("scroll").scrollIntoView(),S(!0),t.preventDefault(),document.querySelector("#image").src="",c=Object(O.a)({},n),r({prompt:""}),e.next=9,fetch("http://localhost:5000/image/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}).catch((function(e){return console.error("errrrrrrrrrrror")}));case 9:return a=e.sent,e.next=12,a.json();case 12:s=e.sent,i=s.data,console.log(i),C({url:i,prompt:c}),document.querySelector("#image").src=i,setTimeout((function(){g(i)}),1e3),S(!1);case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(){return E.apply(this,arguments)}function E(){return(E=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(d.a.tokens.accessToken),console.log(i.url),t={imageUrl:i.url,prompt:i.prompt},e.next=5,fetch("http://localhost:5000/image/save",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(d.a.tokens.accessToken)},body:JSON.stringify(t)}).catch((function(e){}));case 5:console.log("saved"),v.NotificationManager.success("Added to collection!","Saved",3e3);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(){return B.apply(this,arguments)}function B(){return(B=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.scrollTo(0,0),N("/specificImage",{state:{url:i.url}});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(e){var t=e.children,n=Object(u.m)();return d.a.tokens.accessToken?t:Object(b.jsx)(u.a,{to:"/login",state:{from:n},replace:!0})}function P(){return""!=i.url?Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{id:"button20",type:"button",class:"btn btn-primary",onClick:T(J),children:"Open"}),Object(b.jsx)("button",{id:"button10",type:"button",class:"btn btn-primary",onClick:T(A),children:"Save"})]}):null}function q(){return w?Object(b.jsx)("div",{class:"loader",children:Object(b.jsx)("div",{id:"loader",class:"spinner-border",role:"status",children:Object(b.jsx)("span",{class:"sr-only",children:"Loading..."})})}):null}return Object(c.useEffect)((function(){console.log("scroll"),document.getElementById("scroll").scrollIntoView()}),[m]),Object(b.jsxs)("div",{id:"mainbig",children:[Object(b.jsx)(z,{children:Object(b.jsx)("div",{class:"test",children:Object(b.jsxs)("div",{id:"carouselExampleAutoplaying",class:"carousel slide","data-bs-ride":"carousel",children:[Object(b.jsxs)("div",{class:"carousel-inner",children:[Object(b.jsxs)("div",{class:"carousel-item active",children:[Object(b.jsx)("img",{src:"./banner11.png",class:"d-block w-100",alt:"..."}),Object(b.jsx)("div",{class:"carousel-caption d-none d-md-block"})]}),Object(b.jsxs)("div",{class:"carousel-item",children:[Object(b.jsx)("img",{src:"./banner22.png",class:"d-block w-100",alt:"..."}),Object(b.jsx)("div",{class:"carousel-caption d-none d-md-block"})]})]}),Object(b.jsxs)("button",{class:"carousel-control-prev",type:"button","data-bs-target":"#carouselExampleAutoplaying","data-bs-slide":"prev",children:[Object(b.jsx)("span",{class:"carousel-control-prev-icon","aria-hidden":"true"}),Object(b.jsx)("span",{class:"visually-hidden",children:"Previous"})]}),Object(b.jsxs)("button",{class:"carousel-control-next",type:"button","data-bs-target":"#carouselExampleAutoplaying","data-bs-slide":"next",children:[Object(b.jsx)("span",{class:"carousel-control-next-icon","aria-hidden":"true"}),Object(b.jsx)("span",{class:"visually-hidden",children:"Next"})]})]})})}),Object(b.jsx)("h3",{class:"titel",children:"Create a painting with AI"}),Object(b.jsx)("p",{class:"smallTitel",children:"Enter a text describing how you want it to look"}),Object(b.jsxs)("form",{onSubmit:function(e){return I.apply(this,arguments)},children:[Object(b.jsx)("div",{className:"form-group",children:Object(b.jsx)("input",{type:"text",className:"form-control",id:"prompt",value:n.prompt,onChange:function(e){return t={prompt:e.target.value},r((function(e){return Object(O.a)(Object(O.a)({},e),t)}));var t}})}),Object(b.jsx)("div",{className:"form-group2",children:Object(b.jsx)("input",{id:"btn",type:"submit",value:"Generate image",className:"btn btn-primary btn-lg"})})]}),Object(b.jsx)(q,{}),Object(b.jsxs)("section",{id:"bilden",class:"image",children:[Object(b.jsx)("div",{class:"image-container",children:Object(b.jsx)("img",{class:"yesimage",src:"",alt:"",id:"image",width:500})}),Object(b.jsx)(P,{})]}),Object(b.jsx)(v.NotificationContainer,{}),Object(b.jsx)("div",{id:"scroll"})]})}n(223),n(224),n(225);var k=n(69),y=n.n(k);function w(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],r=t[1],a=(Object(f.a)().handleSubmit,Object(u.o)()),s=function(e){window.scrollTo(0,0),console.log(e.currentTarget.getAttribute("data-value")),a("/specificImage",{state:{url:e.currentTarget.getAttribute("data-value")}})},i=function(){var e=Object(l.a)(o.a.mark((function e(t){var c,a,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={imageUrl:t.currentTarget.getAttribute("data-value")},e.next=3,fetch("http://localhost:5000/retrive/delete",{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(d.a.tokens.accessToken)},body:JSON.stringify(c)}).catch((function(e){window.alert(e)}));case 3:-1!==(s=(a=n).map((function(e){return e.url})).indexOf(c.imageUrl))&&(a.splice(s,1),console.log("inne i funktion")),r([a]),v.NotificationManager.error("Image removed","Deleted",3e3);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=Object(c.useState)([]),p=Object(j.a)(h,2),O=p[0],x=p[1];function m(e){var t=e.children,n=Object(u.m)();return d.a.tokens.accessToken?t:Object(b.jsx)(u.a,{to:"/login",state:{from:n},replace:!0})}function g(){if(console.log("testtttt"),0===n.length){return Object(b.jsx)("div",{id:"message",children:Object(b.jsx)("h3",{children:"No saved images to display"})})}return null}return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){var t,n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/retrive/",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(d.a.tokens.accessToken)}});case 2:if((t=e.sent).ok){e.next=7;break}return n="An error occured: ".concat(t.statusText),window.alert(n),e.abrupt("return");case 7:return e.next=9,t.json();case 9:c=e.sent,x(c),r(c),console.log(c);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[O.length]),Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{id:"text",children:[Object(b.jsx)("h1",{children:"Saved images"}),Object(b.jsx)("h5",{children:"Open images to inspect and buy them"})]}),Object(b.jsxs)(m,{children:[Object(b.jsx)("div",{class:"container",children:Object(b.jsx)("div",{class:"row",children:n.map((function(e,t){return Object(b.jsx)("div",{class:"col-sm",children:Object(b.jsxs)("div",{id:"card",class:"card",style:{width:"18rem"},children:[Object(b.jsx)("img",{class:"card-img-top",src:e.url,alt:"Card image cap"}),Object(b.jsxs)("div",{class:"card-body",children:[Object(b.jsx)("h5",{class:"card-title",children:e.date}),Object(b.jsxs)("p",{class:"card-text",children:["Prompt: ",e.prompt]}),Object(b.jsx)("a",{id:"cardbutton",class:"btn btn-primary","data-value":e.url,onClick:s,children:"Open"}),Object(b.jsx)("a",{class:"btn btn-danger","data-value":e.url,onClick:i,children:"Delete"})]})]},t)})}))})}),Object(b.jsx)("div",{children:Object(b.jsx)(g,{})})]}),Object(b.jsx)(v.NotificationContainer,{}),Object(b.jsx)("script",{src:"bootstrap.js"})]})}y()("#myList a").on("click",(function(e){e.preventDefault(),y()(this).tab("show")}));var S=n(155),N=n(120);n(226);function T(){var e=Object(u.m)(),t=Object(f.a)().handleSubmit,n=Object(c.useState)(0),r=Object(j.a)(n,2),a=r[0],s=r[1],i=Object(c.useState)({label:"Black",value:"Black"}),h=Object(j.a)(i,2),p=h[0],O=h[1],x=Object(c.useState)({value:"50x50",label:"50x50"}),m=Object(j.a)(x,2),g=m[0],k=m[1],y=Object(c.useState)(100),w=Object(j.a)(y,2),T=w[0],C=w[1],I=Object(c.useState)(!0),A=Object(j.a)(I,2),E=(A[0],A[1],Object(c.useState)(100)),J=Object(j.a)(E,2),B=J[0],z=J[1],P=Object(c.useState)(100),q=Object(j.a)(P,2),D=q[0],L=q[1];function F(){return(F=Object(l.a)(o.a.mark((function t(){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={imageUrl:e.state.url,quant:a,col:p.value,size:g.value,price:T,priceId:B},t.next=3,fetch("http://localhost:5000/shoppingcart/save",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(d.a.tokens.accessToken)},body:JSON.stringify(n)}).catch((function(e){return console.error(e)}));case 3:v.NotificationManager.success("Added to cart!","Added",3e3),console.log("saved");case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function U(){return(U=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=document.getElementById("section-1"))&&t.scrollIntoView({behavior:"smooth"});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(){return(R=Object(l.a)(o.a.mark((function t(){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={imageUrl:e.state.url},t.next=3,fetch("http://localhost:5000/image/save",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(d.a.tokens.accessToken)},body:JSON.stringify(n)}).catch((function(e){return console.error(e)}));case 3:console.log("saved"),v.NotificationManager.success("Added to collection!","Saved",3e3);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(c.useEffect)((function(){console.log(g.value),"20x20"===g.value?(C(599*a),z("price_1N1z5lCnJhjWx3styOcjT7G6")):"30x30"===g.value?(C(699*a),z("price_1N1z68CnJhjWx3st7G3ZH9bv")):"40x40"==g.value?(C(999*a),z("price_1N1z6VCnJhjWx3stMOZXOaUy")):"50x50"==g.value?(C(1299*a),z("price_1N1z6mCnJhjWx3stDKdp4ASr")):C(0)}),[a,g]),Object(c.useEffect)((function(){"20x20"===g.value?L(200):"30x30"===g.value?L(250):"40x40"==g.value?L(300):"50x50"==g.value?L(350):L(200)}),[g]),console.log("test"),console.log(e.state.url),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{class:"container",children:Object(b.jsxs)("div",{id:"top",class:"row",children:[Object(b.jsx)("div",{id:"top2",class:"col-auto",children:Object(b.jsx)("img",{id:"imagemain",src:e.state.url,class:"img-fluid",alt:"Responsive image"})}),Object(b.jsx)("div",{class:"col-auto",children:Object(b.jsxs)("div",{id:"textt",children:[Object(b.jsx)("h1",{class:"liltitel",children:"A masterpiece was created!"}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{id:"button1",type:"button",class:"btn btn-primary btn-lg",onClick:t((function(){return U.apply(this,arguments)})),children:"Buy"})}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{id:"button2",type:"button",class:"btn btn-primary btn-lg",onClick:t((function(){return R.apply(this,arguments)})),children:"Save to collection"})})]})})]})}),Object(b.jsx)("div",{children:Object(b.jsx)("div",{class:"container",id:"kollum",children:Object(b.jsxs)("div",{class:"row",id:"kolol",children:[Object(b.jsxs)("div",{id:"testtt",class:"col-auto",children:[Object(b.jsx)("img",{class:"image3",src:"backgr.png",width:400}),Object(b.jsx)("img",{class:"image1",src:"./".concat(p.value,".png"),width:.7*D}),Object(b.jsx)("img",{class:"image2",src:e.state.url,width:.49*D})]}),Object(b.jsxs)("div",{id:"testt",class:"col",children:[Object(b.jsx)("h2",{children:"Purchase framed image"}),Object(b.jsx)(N.a,{id:"color",options:[{value:"White",label:"White"},{value:"Black",label:"Black"}],defaultValue:{label:"Black",value:"Black"},onChange:function(e){return t=e,console.log(t),void O(t);var t}}),Object(b.jsx)(N.a,{id:"size",options:[{value:"20x20",label:"20x20"},{value:"30x30",label:"30x30"},{value:"40x40",label:"40x40"},{value:"50x50",label:"50x50"}],onChange:function(e){return t=e,console.log(t),void k(t);var t}}),Object(b.jsx)("div",{class:"quant",children:Object(b.jsx)(S.a,{id:"quant",min:1,onChange:function(e){console.log(e),s(e)},smooth:!0})}),Object(b.jsx)("div",{id:"section-1"}),Object(b.jsx)("div",{class:"price",children:Object(b.jsxs)("h3",{children:[T," Sek"]})}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{id:"chbutton",type:"button",class:"btn btn-primary btn-lg",onClick:t((function(){return F.apply(this,arguments)})),children:"Add to shoppingcart"})}),Object(b.jsx)(v.NotificationContainer,{})]})]})})})]})}n(143);var C=function(){d.a.init("xbpg9gdn"),d.a.build({toolId:"oralnob"});var e=d.a.build({toolId:"dkrabmb"});return Object(b.jsx)("div",{class:"login",children:Object(b.jsx)(e,{})})};var I=function(){d.a.init("xbpg9gdn");var e=d.a.build({toolId:"alabnkm"});return Object(b.jsx)("div",{class:"register",children:Object(b.jsx)(e,{})})};n(156),n(250);function A(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],r=t[1],a=(Object(f.a)().handleSubmit,Object(u.o)(),Object(c.useState)([])),s=Object(j.a)(a,2),i=s[0],h=s[1],p=Object(c.useState)(0),O=Object(j.a)(p,2),x=O[0],m=O[1],g=function(){var e=Object(l.a)(o.a.mark((function e(t){var c,a,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={imageUrl:t.currentTarget.getAttribute("data-value")},e.next=3,fetch("http://localhost:5000/shoppingcart/delete",{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(d.a.tokens.accessToken)},body:JSON.stringify(c)}).catch((function(e){return console.error(e)}));case 3:console.log("!"),console.log(n),-1!==(s=(a=i).map((function(e){return e.url})).indexOf(c.imageUrl))&&(a.splice(s,1),console.log("inne i funktion")),r([a]),console.log("Bytt array"),console.log(n),v.NotificationManager.error("Image removed","Deleted",3e3);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){console.log(i);var e=0;i.map((function(t){e+=t.price})),m(e)}),[i]),Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){var t,n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/shoppingcart/",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(d.a.tokens.accessToken)}}).catch((function(e){return console.error(e)}));case 2:if((t=e.sent).ok){e.next=7;break}return n="An error occured: ".concat(t.statusText),window.alert(n),e.abrupt("return");case 7:return e.next=9,t.json();case 9:c=e.sent,h(c),console.log(c);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[i.length]);var k=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("item2"+C),e.next=3,fetch("http://localhost:5000/checkout",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(C)}).catch((function(e){return console.error(e)}));case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,window.location.href=n.url;case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=Object(c.useState)(null),w=Object(j.a)(y,2),S=w[0],N=(w[1],Object(c.useState)(!1)),T=Object(j.a)(N,2),C=(T[0],T[1],[]);i.map((function(e){if(C.some((function(t){return t.price===e.priceId}))){var t=C.findIndex((function(t){return t.price==e.priceId}));C[t].quantity+=e.quantity}else C.push({price:e.priceId,quantity:e.quantity})}));var I={price:100,quantity:i.length};console.log(I),console.log(C);"".concat(window.location.origin,"/success"),"".concat(window.location.origin,"/shoppingcart");var A=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:k();case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function E(e){var t=e.children,n=Object(u.m)();return d.a.tokens.accessToken?t:Object(b.jsx)(u.a,{to:"/login",state:{from:n},replace:!0})}function J(){if(console.log(i),0===i.length){return Object(b.jsx)("div",{id:"message",children:Object(b.jsx)("h3",{children:"no saved images to display"})})}return null}return S&&alert(S),Object(b.jsxs)("div",{id:"mainbig",children:[Object(b.jsxs)(E,{children:[Object(b.jsx)(J,{}),Object(b.jsx)("ul",{class:"list-group",children:i.map((function(e){return Object(b.jsx)("li",{class:"list-group-item",children:Object(b.jsx)("div",{class:"container",children:Object(b.jsxs)("div",{class:"row",children:[Object(b.jsx)("div",{id:"biild",class:"col-auto",children:Object(b.jsx)("img",{src:e.url,width:250})}),Object(b.jsxs)("div",{id:"info",class:"col-sm",children:[Object(b.jsx)("b",{children:"Color:"})," ",e.col,Object(b.jsx)("br",{}),Object(b.jsx)("b",{children:"Size:"})," ",e.size,Object(b.jsx)("br",{}),Object(b.jsx)("b",{children:"quantity:"})," ",e.quantity,Object(b.jsx)("br",{}),Object(b.jsx)("b",{children:"price:"})," ",e.price,Object(b.jsx)("div",{children:Object(b.jsx)("a",{id:"delbtn",class:"btn btn-danger","data-value":e.url,onClick:g,children:"Delete"})})]})]})})})}))})]}),Object(b.jsxs)("div",{id:"prissam",children:[Object(b.jsx)("h3",{children:"total price:"}),Object(b.jsxs)("h1",{children:[x," Sek"]}),Object(b.jsx)("a",{id:"chckbtn",class:"btn btn-primary btn-lg",onClick:A,children:"Checkout"})]}),Object(b.jsx)(v.NotificationContainer,{})]})}function E(){function e(){return(e=Object(l.a)(o.a.mark((function e(){var n,c,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/shoppingcart/",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(d.a.tokens.accessToken)}}).catch((function(e){return console.error(e)}));case 2:if((n=e.sent).ok){e.next=7;break}return c="An error occured: ".concat(n.statusText),window.alert(c),e.abrupt("return");case 7:return e.next=9,n.json();case 9:if(r=e.sent,console.log("l\xe4ngd: "+r.length),0===r.length){e.next=16;break}return e.next=14,fetch("http://localhost:5000/purchase/save",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(d.a.tokens.accessToken)},body:JSON.stringify(r)}).catch((function(e){}));case 14:e.next=17;break;case 16:return e.abrupt("return",null);case 17:t();case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function t(){return n.apply(this,arguments)}function n(){return(n=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/shoppingcart/empty",{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(d.a.tokens.accessToken)}}).catch((function(e){return console.error(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return function(){e.apply(this,arguments)}(),Object(b.jsxs)("div",{id:"success",children:[Object(b.jsx)("h1",{children:"K\xf6p Lyckades!"}),Object(b.jsx)("h4",{children:"Leverans kommer ske inom 3-5 dagar"}),Object(b.jsx)("img",{id:"logosuc",src:"./Logo-removebg-preview.png"})]})}n(251),n(254);d.a.init("xbpg9gdn");var J=d.a.build({toolId:"ramndbl"});d.a.build({toolId:"oralnob"});function B(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"Password Reset"}),Object(b.jsx)(J,{})]})}var z=function(){return Object(c.useEffect)(Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("hahahahaah"),e.abrupt("return",Object(b.jsx)(h,{}));case 2:case"end":return e.stop()}}),e)})))),Object(b.jsxs)("div",{children:[Object(b.jsx)(h,{}),Object(b.jsx)("div",{children:Object(b.jsxs)(u.d,{children:[Object(b.jsx)(u.b,{exact:!0,path:"/",element:Object(b.jsx)(p,{})}),Object(b.jsx)(u.b,{path:"/edit/:id",element:Object(b.jsx)(x,{})}),Object(b.jsx)(u.b,{path:"/create",element:Object(b.jsx)(m,{})}),Object(b.jsx)(u.b,{path:"/Image",element:Object(b.jsx)(g,{})}),Object(b.jsx)(u.b,{path:"/retrive",element:Object(b.jsx)(w,{})}),Object(b.jsx)(u.b,{path:"/success",element:Object(b.jsx)(E,{})}),Object(b.jsx)(u.b,{path:"/shoppingcart",element:Object(b.jsx)(A,{})}),Object(b.jsx)(u.b,{path:"/specificImage",element:Object(b.jsx)(T,{})}),Object(b.jsx)(u.b,{path:"/register",element:Object(b.jsx)(I,{})}),Object(b.jsx)(u.b,{path:"/login",element:Object(b.jsx)(C,{})}),Object(b.jsx)(u.b,{path:"/reset",element:Object(b.jsx)(B,{})})]})})]})},P=n(26);s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(P.a,{children:Object(b.jsx)(z,{})})}),document.getElementById("root"))}},[[253,1,2]]]);
//# sourceMappingURL=main.8f386930.chunk.js.map