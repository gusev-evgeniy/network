(this["webpackJsonptype-network"]=this["webpackJsonptype-network"]||[]).push([[0],{47:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var r,a=n(1),c=n(0),s=n.n(c),u=n(23),i=n.n(u),o=(n(47),n(14)),l=n(8),d=function(e){return e.myData},j=function(e){return e.profile},f=function(e){return e.initialize.isInitial},b=function(e){return e.myData.isAuth},p=function(e){return e.users.items},O=function(e){return e.users.totalCount},h=function(e){return e.users.usersOnPage},m=function(e){return e.initialize.defaultImage},x=function(e){return e.profile.photos},v=function(e){return e.users.disableButtons},w=function(e){return e.posts},g=function(e){return e.users.currentPage},y=function(e){return e.users.filter},A=n(5),N=n(2),k=n.n(N),S=n(4),E=n(3),C="initializeReducer/COMPLETE",M={isInitial:!1,defaultImage:"data:image/png;base64,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"},D=function(){return{type:C}},T=n(40),P=n.n(T).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0",withCredentials:!0,headers:{"API-KEY":"31685092-a073-4e46-aa92-2ebd0b3db0bd"}});!function(e){e[e.success=0]="success",e[e.error=1]="error",e[e.captcha=10]="captcha"}(r||(r={}));var F={getMyData:function(){var e=Object(S.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.get("/auth/me").then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),delete:function(){var e=Object(S.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.delete("/auth/login").then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),signIn:function(){var e=Object(S.a)(k.a.mark((function e(t,n){var r,a,c=arguments;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=c.length>2&&void 0!==c[2]&&c[2],a=c.length>3&&void 0!==c[3]?c[3]:null,e.next=4,P.post("/auth/login",{email:t,password:n,rememberMe:r,captcha:a}).then((function(e){return e.data}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),getCaptcha:function(){var e=Object(S.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.get("/security/get-captcha-url").then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},R="myDataReducer/SET_MY_DATA",I="myDataReducer/DELETE_MY_DATA",B="myDataReducer/SET_CAPTCHA",U="myDataReducer/SET_ERROR",L={id:null,email:null,login:null,isAuth:!1,captcha:"",error:""},z=function(e){return{type:R,payload:e}},J=function(e){return{type:U,payload:e}},H=function(){return{type:I}},K=function(e){return{type:B,payload:e}},G=function(){return function(){var e=Object(S.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.getMyData();case 2:n=e.sent,t(function(){var e=Object(S.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(D());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),0===n.resultCode&&t(z(n.data));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Q=function(){return function(){var e=Object(S.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.getCaptcha();case 2:n=e.sent,t(K(n.url));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},V=function(){var e=Object(A.c)(d),t=Object(A.b)(),n=function(){return t(function(){var e=Object(S.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.delete();case 2:0===e.sent.resultCode&&t(H());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Object(a.jsx)(l.a,{to:"/users"})};return Object(a.jsx)("nav",{className:"teal lighten-1",children:Object(a.jsx)("div",{className:"nav-wrapper container",children:Object(a.jsxs)("ul",{className:"right",children:[Object(a.jsx)("li",{children:Object(a.jsx)(o.b,{to:"/users",children:"Users"})}),e.id?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("li",{children:Object(a.jsx)(o.b,{to:"/profile",children:e.login})}),Object(a.jsx)("li",{children:Object(a.jsx)(o.b,{to:"/users",onClick:n,children:"Sign Out"})})]}):Object(a.jsx)("li",{children:Object(a.jsx)(o.b,{to:"/auth",children:"Login"})})]})})})},W=n(17),q=function(){var e=Object(A.c)(d),t=Object(A.b)(),n=Object(W.a)(),r=n.handleSubmit,c=n.register,s=r((function(e){var n=e.email,r=e.password,a=e.rememberMe,c=e.captcha;t(function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return function(){var a=Object(S.a)(k.a.mark((function a(c){var s;return k.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,F.signIn(e,t,n,r);case 2:0===(s=a.sent).resultCode&&c(G()),10===s.resultCode?c(Q()):c(J(s.messages));case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(n,r,a,c))}));return e.isAuth?Object(a.jsx)(l.a,{to:"/users"}):Object(a.jsxs)("form",{onSubmit:s,className:"loginForm",children:[Object(a.jsx)("div",{className:"input-field",children:Object(a.jsx)("input",{type:"email",name:"email",className:e.error?"invalid":"",ref:c({required:!0}),autoFocus:!0,placeholder:"Email",defaultValue:"free@samuraijs.com"})}),Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("input",{type:"password",className:e.error?"invalid":"",name:"password",ref:c({required:!0}),placeholder:"Password",autoComplete:"off",defaultValue:"free"}),Object(a.jsx)("span",{className:"helper-text","data-error":e.error})]}),Object(a.jsx)("div",{children:Object(a.jsxs)("label",{children:[Object(a.jsx)("input",{type:"checkbox",className:"filled-in",name:"rememberMe",ref:c}),Object(a.jsx)("span",{children:"Remember Me"})]})}),e.captcha&&Object(a.jsxs)("div",{children:[Object(a.jsx)("img",{src:e.captcha,alt:"captcha"}),Object(a.jsx)("input",{type:"text",name:"captcha",ref:c})]}),Object(a.jsx)("button",{className:"btn",children:"Submit"})]})},Y=n(9),X={getStatus:function(){var e=Object(S.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.get("/profile/status/".concat(t)).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),getData:function(){var e=Object(S.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.get("/profile/".concat(t)).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),sendStatus:function(){var e=Object(S.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.put("/profile/status",{status:t}).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),sendData:function(){var e=Object(S.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.put("/profile",Object(E.a)({},t)).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),loadPhoto:function(){var e=Object(S.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("image",t),e.next=4,P.put("/profile/photo",n,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},_="ProfileReducer/SET_PROFILE_DATA",Z="ProfileReducer/SET_PROFILE_PROFILE",$="ProfileReducer/UPDATE_PHOTO",ee={userId:0,lookingForAJob:!1,lookingForAJobDescription:"",fullName:"",aboutMe:"",status:"",photos:{large:null,small:null}},te=function(e){return{type:_,payload:e}},ne=function(e){return{type:Z,payload:e}},re=function(e){return{type:$,payload:e}},ae=function(e){return function(){var t=Object(S.a)(k.a.mark((function t(n){var r;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,X.getStatus(e);case 2:r=t.sent,n(ne(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},ce=function(e){return function(){var t=Object(S.a)(k.a.mark((function t(n){var r;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,X.getData(e);case 2:r=t.sent,n(te(r)),n(ae(e));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},se=function(e){var t=e.sendStatus,n=e.userId,r=e.setUserStatus,c=e.value,s=Object(W.a)(),u=s.handleSubmit,i=s.register,o=u((function(e){r(e.status),t(e.status,n)}));return Object(a.jsx)("input",{type:"text",name:"status",ref:i,onBlur:o,autoFocus:!0,placeholder:"Change Status",defaultValue:c})},ue=function(e){var t=e.profileData,n=e.owner,r=e.sendStatus,s=Object(c.useState)(!1),u=Object(Y.a)(s,2),i=u[0],o=u[1],l=Object(c.useState)(t.status),d=Object(Y.a)(l,2),j=d[0],f=d[1];return Object(c.useEffect)((function(){f(t.status)}),[t.status]),n?i?Object(a.jsx)("form",{onBlur:function(){return o(!1)},children:Object(a.jsx)(se,{sendStatus:r,userId:t.userId,setUserStatus:f,value:j})}):Object(a.jsx)("p",{className:"status",onClick:function(){return o(!0)},children:j||"Change status"}):Object(a.jsx)("p",{className:"status",children:j||"This user doesn't have status"})},ie=function(e){var t=e.sendProfileData,n=e.userId,r=e.setEditMode,c=Object(W.a)(),s=c.handleSubmit,u=c.register,i=s((function(e){r(!1),t(Object(E.a)(Object(E.a)({},e),{},{userId:n}))}));return Object(a.jsxs)("form",{onSubmit:i,className:"dataEditor",children:[Object(a.jsx)("div",{children:Object(a.jsx)("input",{type:"text",name:"fullName",ref:u,autoFocus:!0,placeholder:"Full Name"})}),Object(a.jsx)("div",{children:Object(a.jsx)("input",{type:"text",name:"aboutMe",ref:u,placeholder:"About Me"})}),Object(a.jsx)("div",{children:Object(a.jsx)("input",{type:"text",name:"lookingForAJobDescription",ref:u,placeholder:"My skills"})}),Object(a.jsx)("div",{children:Object(a.jsxs)("label",{htmlFor:"lookingForAJob",children:[Object(a.jsx)("input",{id:"lookingForAJob",className:"filled-in",type:"checkbox",name:"lookingForAJob",ref:u}),Object(a.jsx)("span",{children:"Looking for a job"})]})}),Object(a.jsx)("input",{className:"btn",type:"submit"})]})},oe=s.a.memo((function(e){var t=e.owner,n=Object(A.c)(j),r=Object(A.b)(),s=Object(c.useState)(!1),u=Object(Y.a)(s,2),i=u[0],o=u[1],l=function(e){r(function(e){return function(){var t=Object(S.a)(k.a.mark((function t(n){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,X.sendData(e);case 2:0===t.sent.resultCode&&n(ce(e.userId.toString()));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))};return Object(a.jsxs)("div",{className:"card-stacked",children:[Object(a.jsxs)("div",{className:"card-content",children:[Object(a.jsx)("h5",{className:"card-title",children:n.fullName}),Object(a.jsx)(ue,{profileData:n,sendStatus:function(e,t){r(function(e,t){return function(){var n=Object(S.a)(k.a.mark((function n(r){return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,X.sendStatus(e);case 2:0===n.sent.resultCode&&r(ce(String(t)));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}(e,t))},owner:t})]}),i?Object(a.jsx)(ie,{sendProfileData:l,userId:n.userId,setEditMode:o}):Object(a.jsxs)("div",{className:"card-content",children:[Object(a.jsxs)("div",{children:["About Me: ",n.aboutMe||"..."]}),Object(a.jsxs)("div",{children:["My skills: ",n.lookingForAJobDescription||"..."]}),n.lookingForAJob&&Object(a.jsx)("div",{children:"Looking for a job"})]}),t&&Object(a.jsx)("div",{className:"card-action",children:Object(a.jsx)("a",{className:"modal-trigger",onClick:function(){return o(!0)},children:"Edit Data"})})]})})),le=function(e){var t=e.addNewPost,n=Object(W.a)(),r=n.register,c=n.handleSubmit,s=n.reset,u=c((function(e){var n=e.newPost;t(n),s()}));return Object(a.jsx)("form",{onSubmit:u,children:Object(a.jsx)("input",{name:"newPost",ref:r,placeholder:"Add new post"})})},de=n(7),je="postsReducer/ADD_NEW_POST",fe=function(e){return{type:je,payload:e}},be=s.a.memo((function(e){var t=e.owner,n=Object(A.c)(w),r=Object(A.b)();if(!t)return Object(a.jsx)("ul",{className:"collection",children:Object(a.jsx)("li",{className:"collection-item",children:" this user doesn't have post"})});return Object(a.jsxs)("div",{className:"submitPost",children:[Object(a.jsx)(le,{addNewPost:function(e){r(fe(e))}}),Object(a.jsx)("ul",{className:"collection",children:0===n.length?Object(a.jsx)("li",{className:"collection-item",children:" this user doesn't have post"}):n.map((function(e){return Object(a.jsx)("li",{className:"collection-item",children:e.text},e.id)}))})]})})),pe=s.a.memo((function(e){var t=e.match,n=Object(A.c)(d),r=Object(A.c)(m),s=Object(A.c)(x),u=Object(A.b)(),i=Object(c.useState)(!1),o=Object(Y.a)(i,2),l=o[0],j=o[1],f=s.large||r;Object(c.useEffect)((function(){var e=t.params.userId||n.id;e&&u(ce(e)),e===n.id&&j(!0)}),[u,n.id,t.params.userId]);var b=function(e){var t;e.target&&u((t=e.target.files[0],function(){var e=Object(S.a)(k.a.mark((function e(n){var r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X.loadPhoto(t);case 2:0===(r=e.sent).resultCode&&n(re(r.data));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))};return Object(a.jsxs)("div",{className:"profile",children:[Object(a.jsx)("div",{className:"col s12 m5",children:Object(a.jsxs)("div",{className:"card horizontal profileData",children:[Object(a.jsxs)("div",{className:"card-image",children:[Object(a.jsx)("img",{alt:"ava",src:f}),Object(a.jsx)("form",{children:l&&Object(a.jsx)("div",{className:"file-field input-field photoButton",children:Object(a.jsxs)("div",{className:"btn-floating halfway-fab waves-effect waves-light red",children:[Object(a.jsx)("i",{className:"material-icons",children:"add_a_photo"}),Object(a.jsx)("input",{type:"file",onChange:b})]})})})]}),Object(a.jsx)(oe,{owner:l})]})}),Object(a.jsx)(be,{owner:l})]})})),Oe=Object(l.f)(pe),he={getUsers:function(){var e=Object(S.a)(k.a.mark((function e(t,n,r,a){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.get("/users/?page=".concat(t,"&count=").concat(n,"&term=").concat(r)+(null==a?"":"&friend=".concat(a))).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),followUser:function(){var e=Object(S.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.post("/follow/".concat(t)).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),unfollowUser:function(){var e=Object(S.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.delete("/follow/".concat(t)).then((function(e){return e.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},me="usersReducer/LOAD_USERS",xe="usersReducer/UNFOLLOW",ve="usersReducer/FOLLOW",we="usersReducer/DISABLE",ge="usersReducer/ENABLE",ye="usersReducer/UPDATE_PAGE",Ae="usersReducer/SET_TERM",Ne="usersReducer/SET_TOTAL_COUNT",ke={items:[],totalCount:0,usersOnPage:30,disableButtons:[],currentPage:1,filter:{term:"",friend:null}},Se=function(e){return{type:me,payload:e}},Ee=function(e){return{type:Ne,payload:e}},Ce=function(e){return{type:ve,payload:e}},Me=function(e){return{type:xe,payload:e}},De=function(e){return{type:we,payload:e}},Te=function(e){return{type:ge,payload:e}},Pe=function(e){return{type:ye,payload:e}},Fe=function(e,t){return{type:Ae,payload:{term:e,friend:t}}},Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ke.usersOnPage,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return function(){var a=Object(S.a)(k.a.mark((function a(c){var s;return k.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,he.getUsers(e,t,n,r);case 2:s=a.sent,c(Fe(n,r)),c(Pe(e)),c(Se(s.items)),c(Ee(s.totalCount));case 7:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},Ie=function(e,t,n){return function(){var r=Object(S.a)(k.a.mark((function r(a){var c;return k.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a(De(t)),r.next=3,e(t);case 3:c=r.sent,a(Te(t)),0===c.resultCode&&a(n(t));case 6:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},Be=s.a.memo((function(e){var t=e.currentPage,n=e.usersOnPage,r=Object(A.c)(O),s=Object(A.c)(y),u=Object(A.b)(),i=Object(c.useState)(1),o=Object(Y.a)(i,2),l=o[0],d=o[1];Object(c.useEffect)((function(){1===t&&d(1)}),[t]);var j=Math.ceil(r/n),f=Math.min(j,10),b=function(e){u(Re(e,n,s.term,s.friend))},p=Object(de.a)(Array(f).keys()).map((function(e,t){return t+l})).map((function(e){return Object(a.jsx)("li",{className:t===e?"waves-effect active":"waves-effect",children:Object(a.jsx)("a",{onClick:function(){return b(e)},className:"pageSelector",children:e})},e)}));return Object(a.jsxs)("ul",{className:"pagination",children:[t>f&&Object(a.jsx)("li",{className:"waves-effect",children:Object(a.jsx)("i",{className:"material-icons",onClick:function(){var e=Math.max(l-f,1);d(e),b(e)},children:"chevron_left"})}),p,t<j-f&&Object(a.jsx)("li",{className:"waves-effect",children:Object(a.jsx)("i",{className:"material-icons",onClick:function(){var e=Math.min(l+f,j);d(e),b(e)},children:"chevron_right"})})]})})),Ue=function(e){var t=e.userData,n=e.followUser,r=e.unfollowUser,c=e.defaultImage,s=e.isAuth,u=e.disableButtons,i=function(){return!s||u.includes(t.id)?"btn disabled":"btn"};return Object(a.jsx)("div",{className:"col s12",children:Object(a.jsxs)("div",{className:"card horizontal userCard",children:[Object(a.jsx)("div",{className:"card-image listPhotos",children:Object(a.jsx)(o.c,{to:"/profile/".concat(t.id),children:Object(a.jsx)("img",{src:t.photos.small||c,alt:"ava"})})}),Object(a.jsxs)("div",{className:"card-stacked",children:[Object(a.jsxs)("div",{className:"card-content",children:[Object(a.jsx)(o.c,{to:"/profile/".concat(t.id),children:Object(a.jsx)("h5",{className:"card-title flow-text",children:t.name})}),Object(a.jsx)("span",{className:"flow-text",children:t.status||"..."})]}),Object(a.jsx)("div",{className:"card-action",children:t.followed?Object(a.jsx)("div",{className:i(),onClick:function(){return r(t.id)},children:"Unfollow"}):Object(a.jsx)("div",{className:i(),onClick:function(){return n(t.id)},children:"Follow"})})]})]})})},Le=function(e){var t=e.requestUsers,n=Object(W.a)(),r=n.handleSubmit,c=n.register,s=r((function(e){var n=e.term,r=e.friend;t(1,n,30,r)}));return Object(a.jsxs)("form",{onSubmit:s,children:[Object(a.jsxs)("div",{className:"input-field userFillter",children:[Object(a.jsx)("input",{type:"text",name:"term",ref:c(),placeholder:"search"}),Object(a.jsxs)("select",{name:"friend",className:"col s12 m4",ref:c,children:[Object(a.jsx)("option",{value:"null",children:"All"}),Object(a.jsx)("option",{value:"true",children:"Followed "}),Object(a.jsx)("option",{value:"false",children:"Not Followed "})]})]}),Object(a.jsx)("button",{className:"btn",children:"Submit"})]})},ze=function(){var e=Object(A.c)(p),t=Object(A.c)(m),n=Object(A.c)(b),r=Object(A.c)(v),s=Object(A.c)(g),u=Object(A.c)(h),i=Object(A.b)(),o=function(e){i(function(e){return Ie(he.followUser,e,Ce)}(e))},l=function(e){i(function(e){return Ie(he.unfollowUser,e,Me)}(e))},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0;i(Re(e,n,t,r))};Object(c.useEffect)((function(){d(1,"",u,"null")}),[]);return Object(a.jsxs)("div",{className:"row usersList",children:[Object(a.jsx)(Le,{requestUsers:d}),0===e.length?Object(a.jsx)("div",{children:"The list is empty"}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(Be,{currentPage:s,usersOnPage:u}),Object(a.jsx)("ul",{children:e.map((function(e){return Object(a.jsx)(Ue,{isAuth:n,disableButtons:r,userData:e,followUser:o,defaultImage:t,unfollowUser:l},e.id)}))})]})]})},Je=function(){var e=Object(A.c)(f),t=Object(A.b)();return Object(c.useEffect)((function(){t(G())}),[t]),e?Object(a.jsxs)(o.a,{children:[Object(a.jsx)(V,{}),Object(a.jsxs)("div",{className:"container center-align content",children:[Object(a.jsx)(l.b,{path:"/auth",children:Object(a.jsx)(q,{})}),Object(a.jsx)(l.b,{path:"/users",children:Object(a.jsx)(ze,{})}),Object(a.jsx)(l.b,{path:"/profile/:userId?",children:Object(a.jsx)(Oe,{})})]})]}):Object(a.jsx)("div",{className:"container center-align content",children:"loading..."})},He=n(18),Ke=Object(He.c)({myData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return Object(E.a)(Object(E.a)(Object(E.a)({},e),t.payload),{},{isAuth:!0});case I:return L;case B:return Object(E.a)(Object(E.a)({},e),{},{captcha:t.payload});case U:return Object(E.a)(Object(E.a)({},e),{},{error:t.payload});default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(E.a)(Object(E.a)({},e),t.payload);case Z:return Object(E.a)(Object(E.a)({},e),{},{status:t.payload});case $:return Object(E.a)(Object(E.a)({},e),{},{photos:t.payload.photos});default:return e}},initialize:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(E.a)(Object(E.a)({},e),{},{isInitial:!0});default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case me:return Object(E.a)(Object(E.a)({},e),{},{items:t.payload});case Ne:return Object(E.a)(Object(E.a)({},e),{},{totalCount:t.payload});case ve:return Object(E.a)(Object(E.a)({},e),{},{items:e.items.map((function(e){return e.id!==t.payload?e:Object(E.a)(Object(E.a)({},e),{},{followed:!0})}))});case xe:return Object(E.a)(Object(E.a)({},e),{},{items:e.items.map((function(e){return e.id!==t.payload?e:Object(E.a)(Object(E.a)({},e),{},{followed:!1})}))});case we:return Object(E.a)(Object(E.a)({},e),{},{disableButtons:[].concat(Object(de.a)(e.disableButtons),[t.payload])});case ye:return Object(E.a)(Object(E.a)({},e),{},{currentPage:t.payload});case Ae:return Object(E.a)(Object(E.a)({},e),{},{filter:t.payload});case ge:return Object(E.a)(Object(E.a)({},e),{},{disableButtons:e.disableButtons.filter((function(e){return e!==t.payload}))});default:return e}},posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case je:return[].concat(Object(de.a)(e),[{id:e.length+1,text:t.payload}]);default:return e}}}),Ge=n(41);i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(A.a,{store:Object(He.d)(Ke,Object(He.a)(Ge.a)),children:Object(a.jsx)(Je,{})})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.54034f33.chunk.js.map