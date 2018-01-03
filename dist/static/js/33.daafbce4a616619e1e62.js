webpackJsonp([33],{422:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=i(702),e=i(703),o=i(11),a=o(s.a,e.a,null,null,null);n.default=a.exports},702:function(t,n,i){"use strict";n.a={name:"Login",data:function(){return{items:{loginId:"",password:""},findPwd:{loginId:"",email:""},isPwdMode:!1}},methods:{onLogin:function(){this.$https.post("/auth_check",this.items).then(function(t){}).catch(function(t){console.log(t)})},onFindPassword:function(){}}}},703:function(t,n,i){"use strict";var s=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"app login-page flex-row align-items-center justify-content-center"},[i("div",{staticClass:"login-box"},[i("h1",{staticClass:"sr-only"},[t._v("SK broadband V Project Pilot 플랫폼 Login")]),t._v(" "),t.isPwdMode?t._e():i("div",[i("div",{staticClass:"input-group"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.items.loginId,expression:"items.loginId"}],staticClass:"form-control",attrs:{type:"text",placeholder:"아이디"},domProps:{value:t.items.loginId},on:{input:function(n){n.target.composing||(t.items.loginId=n.target.value)}}})]),t._v(" "),i("div",{staticClass:"input-group"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.items.password,expression:"items.password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.items.password},on:{input:function(n){n.target.composing||(t.items.password=n.target.value)}}})]),t._v(" "),i("b-button",{staticClass:"btn btn-login",attrs:{type:"button",block:!0},on:{click:t.onLogin}},[t._v("로그인")]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-6"},[i("b-button",{staticClass:"btn btn-login-link",attrs:{type:"button",block:!0},on:{click:function(n){t.isPwdMode=!0}}},[t._v("비밀번호 찾기")])],1),t._v(" "),i("div",{staticClass:"col-6"},[i("b-button",{staticClass:"btn btn-login-link",attrs:{type:"button",block:!0,to:{name:"Register"}}},[t._v("운영자 가입")])],1)])],1),t._v(" "),t.isPwdMode?i("div",[t._m(0),t._v(" "),i("div",{staticClass:"input-group"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.findPwd.id,expression:"findPwd.id"}],staticClass:"form-control",attrs:{type:"text",placeholder:"아이디"},domProps:{value:t.findPwd.id},on:{input:function(n){n.target.composing||(t.findPwd.id=n.target.value)}}})]),t._v(" "),i("div",{staticClass:"input-group"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.findPwd.email,expression:"findPwd.email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"이메일"},domProps:{value:t.findPwd.email},on:{input:function(n){n.target.composing||(t.findPwd.email=n.target.value)}}})]),t._v(" "),i("b-button",{staticClass:"btn btn-login",attrs:{type:"button",block:!0},on:{click:t.onFindPassword}},[t._v("확인")]),t._v(" "),i("b-button",{staticClass:"btn btn-login-link",attrs:{type:"button",block:!0},on:{click:function(n){t.isPwdMode=!1}}},[t._v("로그인 화면으로")])],1):t._e(),t._v(" "),i("p",{staticClass:"warning"},[t._v("회원정보가 일치하지 않습니다.(오류 1회)")])])])},e=[function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("p",{staticClass:"text-muted"},[t._v("\n        ・ 회원정보에 등록된 아이디/이메일 정보를 입력해주세요."),i("br"),t._v("\n        ・ 정보 일치 시, 등록된 이메일 정보로 임시비밀번호 메일이 발송됩니다.\n      ")])}],o={render:s,staticRenderFns:e};n.a=o}});