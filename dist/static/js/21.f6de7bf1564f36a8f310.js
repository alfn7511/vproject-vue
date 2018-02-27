webpackJsonp([21],{625:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(837),a=i(838),o=i(15),r=o(s.a,a.a,null,null,null);e.default=r.exports},837:function(t,e,i){"use strict";var s=i(180),a=i(179);e.a={name:"service",props:["id"],components:{ContentHeader:s.a,cSwitch:a.a},data:function(){return{name:"Service 상세",originItems:{},submitItems:{},serviceName:"",items:{ipRestrictUseYn:!1,ipRestrictServiceList:[{ip:""}],modifyHistReason:"등록",processStateCodeName:null,processStateCode:null,processId:null},code:{ipRestriction:[]},history:{fields:{createId:{label:"등록/수정자",class:"text-left"},histBeginDateTime:{label:"등록/수정일시"},modifyHistReason:{label:"변경이력",class:"text-left"},histMgmtId:{label:"보기"}},items:[],pageInfo:{page:1,size:10,totalCount:1}},isCreate:!1,isEdit:!1,isModalHistory:!1,inValidForm:!1}},computed:{isProcessComplete:function(){return null!==this.items.processStateCode&&""!==this.items.processStateCode&&"PROCESS_STATE_02"===this.items.processStateCode}},created:function(){var t=this,e=this.$route.query.histories,i=void 0!==e?"/services/"+this.id+"/restriction/histories/"+e:"/services/"+this.id+"/restriction";e&&document.querySelector("body.app").classList.add("history-mode"),this.$https.get("/services/"+this.id).then(function(e){t.serviceName=e.data.items.serviceName}),this.$https.get("/policy/ipRestriction").then(function(e){t.code.ipRestriction=e.data.items.ipRestrictGlobal}),this.$https.get(i).then(function(e){null===e.data.items?(t.isCreate=!0,t.isEdit=!0):(t.items=e.data.items,t.originItems=JSON.parse(JSON.stringify(t.items)))}).catch(function(t){console.log(t)})},methods:{onEdit:function(){this.isEdit=!0},onView:function(){this.isEdit=!1,this.items=JSON.parse(JSON.stringify(this.originItems))},onAddRow:function(){this.items.ipRestrictServiceList.push({ip:""})},onDelRow:function(t){this.items.ipRestrictServiceList.splice(t,1)},onSubmit:function(){var t=this,e=this.items,i=e.ipRestrictUseYn,s=e.ipRestrictServiceList,a=e.modifyHistReason,o={ipRestrictUseYn:i,ipRestrictServiceList:s,modifyHistReason:a},r=this.$valid.all(o),n=this.isCreate?function(){return t.$https.post("/services/"+t.id+"/restriction",o)}:function(){return t.$https.put("/services/"+t.id+"/restriction",o)};this.inValidForm=!r,r&&n().then(function(){t.$router.go(t.$router.currentRoute)}).catch(function(t){console.log(t)})},getHistoryLink:function(t){return"#/service/service/"+this.id+"/ip?histories="+t},showHistory:function(){var t=this;this.isModalHistory=!this.isModalHistory,this.$https.get("/services/"+this.id+"/restriction/histories").then(function(e){t.history.items=e.data.items})}}}},838:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"animated fadeIn"},[i("content-header",{attrs:{title:t.serviceName,name:t.name}}),t._v(" "),i("div",{staticClass:"collapse-title"},[i("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.formDefault",modifiers:{formDefault:!0}}],staticClass:"btn-collapse"},[i("i",{staticClass:"fa"}),t._v("\n      기본정보\n    ")])],1),t._v(" "),i("b-collapse",{attrs:{id:"formDefault",visible:""}},[i("b-form",{staticClass:"formView",attrs:{validated:t.inValidForm,novalidate:""}},[i("b-form-fieldset",{attrs:{label:"사용여부",horizontal:!0}},[t.isEdit?i("c-switch",{staticClass:"v-switch",attrs:{type:"text",on:"사용",off:"미사용"},model:{value:t.items.ipRestrictUseYn,callback:function(e){t.$set(t.items,"ipRestrictUseYn",e)},expression:"items.ipRestrictUseYn"}}):i("span",{staticClass:"badge",class:{primary:t.items.ipRestrictUseYn}},[t._v(t._s(t.items.ipRestrictUseYn?"사용":"미사용")+"\n        ")])],1),t._v(" "),t.items.ipRestrictUseYn?i("b-form-fieldset",{attrs:{label:"제한 IP(공통)",horizontal:!0}},[i("b-table",{staticClass:"sub",attrs:{"show-empty":"",items:t.code.ipRestriction,fields:{index:{label:"번호",class:"index"},ip:{label:"서버 IP 주소",class:"text-left"}}},scopedSlots:t._u([{key:"index",fn:function(e){return[t._v("\n            "+t._s(e.index+1)+"\n          ")]}}])})],1):t._e(),t._v(" "),t.items.ipRestrictUseYn?i("b-form-fieldset",{attrs:{description:"※ 공통으로 제한되는 IP 주소는 Policy 메뉴에서 수정할 수 있습니다.<br>\n        ※ 사용여부를 ‘미사용’으로 설정하시더라도 공통으로 설정된 IP주소는 제한됩니다.",horizontal:!0}},[i("template",{slot:"label"},[t._v("\n          제한 IP"),t.isEdit?i("i",{staticClass:"require"},[t._v("*")]):t._e(),i("br"),t._v(" "),i("small",{staticClass:"form-text"},[t._v("("+t._s(t.serviceName)+")")])]),t._v(" "),i("b-table",{staticClass:"sub",attrs:{"show-empty":"",items:t.items.ipRestrictServiceList,fields:{index:{label:"번호",class:"index"},ip:{label:"서버 IP 주소",class:"text-left"}}},scopedSlots:t._u([{key:"index",fn:function(e){return[t._v("\n            "+t._s(e.index+1)+"\n          ")]}},{key:"ip",fn:function(e){return[t.isEdit?i("span",[i("b-form-input",{attrs:{type:"text",required:""},model:{value:e.item.ip,callback:function(i){t.$set(e.item,"ip",i)},expression:"row.item.ip"}}),t._v(" "),i("span",{staticClass:"ico"},[0===e.index?i("button",{attrs:{type:"button"},on:{click:t.onAddRow}},[i("i",{staticClass:"fa fa-plus-circle"})]):t._e(),t._v(" "),e.index>0?i("button",{attrs:{type:"button"},on:{click:function(i){t.onDelRow(e.index)}}},[i("i",{staticClass:"fa fa-times-circle"})]):t._e()]),t._v(" "),i("div",{staticClass:"invalid-tooltip"},[t._v(t._s(t.$valid.msg.require))])],1):i("span",[t._v(t._s(e.value))])]}}])})],2):t._e(),t._v(" "),t.isEdit?i("b-form-fieldset",{attrs:{label:"변경이력<i class='require'>*</i>","invalid-feedback":t.$valid.msg.require,horizontal:!0}},[i("b-form-textarea",{attrs:{rows:6,required:""},model:{value:t.items.modifyHistReason,callback:function(e){t.$set(t.items,"modifyHistReason",e)},expression:"items.modifyHistReason"}})],1):t._e()],1)],1),t._v(" "),t.isEdit?t._e():i("div",{staticClass:"collapse-title"},[i("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.formHistory",modifiers:{formHistory:!0}}],staticClass:"btn-collapse"},[i("i",{staticClass:"fa"}),t._v("\n      처리이력\n    ")])],1),t._v(" "),t.isEdit?t._e():i("b-collapse",{attrs:{id:"formHistory",visible:""}},[i("b-form",{staticClass:"formView"},[i("div",{staticClass:"form-row"},[i("b-form-fieldset",{attrs:{label:"등록일시",horizontal:!0}},[i("b-form-input",{attrs:{value:t.items.createDateTime,plaintext:"",type:"text"}})],1),t._v(" "),i("b-form-fieldset",{attrs:{label:"등록자",horizontal:!0}},[i("b-form-input",{attrs:{value:t.items.createId,plaintext:"",type:"text"}})],1)],1),t._v(" "),i("div",{staticClass:"form-row"},[i("b-form-fieldset",{attrs:{label:"수정일시",horizontal:!0}},[i("b-form-input",{attrs:{value:t.items.modifyDateTime,plaintext:"",type:"text"}})],1),t._v(" "),i("b-form-fieldset",{attrs:{label:"수정자",horizontal:!0}},[i("b-form-input",{attrs:{value:t.items.modifyId,plaintext:"",type:"text"}})],1)],1),t._v(" "),i("b-form-fieldset",{attrs:{label:"배포상태",horizontal:!0}},[i("input",{staticClass:"form-control-plaintext",staticStyle:{width:"50px"},attrs:{type:"text",readonly:"readonly"},domProps:{value:t.items.processStateCodeName}}),t._v(" "),i("a",{staticClass:"btn btn-in-table",attrs:{href:"#/workflow/service/"+t.items.processId,target:"_blank"}},[t._v(t._s(t.items.processId))])])],1)],1),t._v(" "),t.isEdit?i("div",{staticClass:"page-btn"},[t.isCreate?t._e():i("b-button",{attrs:{type:"button",variant:"outline-secondary"},on:{click:t.onView}},[t._v("취소")]),t._v(" "),i("b-button",{attrs:{type:"button",variant:"primary"},on:{click:t.onSubmit}},[t._v("저장")])],1):i("div",{staticClass:"page-btn"},[i("b-button",{attrs:{type:"button",variant:"outline-secondary"},on:{click:t.showHistory}},[t._v("이력관리")]),t._v(" "),t.isProcessComplete?i("b-button",{attrs:{type:"button",variant:"primary"},on:{click:t.onEdit}},[t._v("수정")]):t._e()],1),t._v(" "),i("b-modal",{attrs:{size:"lg",title:"이력관리"},model:{value:t.isModalHistory,callback:function(e){t.isModalHistory=e},expression:"isModalHistory"}},[i("section",{staticClass:"board"},[i("b-table",{attrs:{hover:"","show-empty":"",items:t.history.items,fields:t.history.fields,"current-page":t.history.pageInfo.page,"per-page":t.history.pageInfo.size},scopedSlots:t._u([{key:"histMgmtId",fn:function(e){return[i("a",{attrs:{href:t.getHistoryLink(e.value),target:"_blank"}},[t._v("보기")])]}}])})],1),t._v(" "),i("b-pagination",{staticClass:"mt-2",attrs:{"total-rows":t.history.pageInfo.totalCount,"per-page":t.history.pageInfo.size},model:{value:t.history.pageInfo.page,callback:function(e){t.$set(t.history.pageInfo,"page",e)},expression:"history.pageInfo.page"}}),t._v(" "),i("div",{attrs:{slot:"modal-footer"},slot:"modal-footer"},[i("b-button",{attrs:{type:"button",variant:"primary"},on:{click:function(e){t.isModalHistory=!1}}},[t._v("확인")])],1)],1)],1)},a=[],o={render:s,staticRenderFns:a};e.a=o}});