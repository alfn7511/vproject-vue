webpackJsonp([32],{636:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(875),o=s(876),a=s(15),n=a(i.a,o.a,null,null,null);t.default=n.exports},875:function(e,t,s){"use strict";var i=s(179),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i])}return e};t.a={name:"services",components:{cSwitch:i.a},data:function(){return{items:{companyCode:null,serviceName:"",serviceTypeCode:[],serviceDomainList:[],cnameUseYn:!0,cnameDomainName:"",sslCertUseYn:!0,sslCert:"",sslCertKey:"",sslCertExpireDate:"",serviceUseYn:!0},code:{companyCode:[],serviceTypeCode:[],serviceTypeCodeAll:[],domainProtocolCode:[],domainHashingTypeCode:[]},isLoad:{companyCode:!0,serviceTypeCode:!0,domainProtocolCode:!0,domainHashingTypeCode:!0},serviceNameExists:null,inValidForm:!1}},computed:{companyCode:{get:function(){var e=this;return this.code.companyCode.find(function(t){return t.code===e.items.companyCode})||null},set:function(e){this.items.companyCode=null!==e?e.code:""}},serviceTypeCode:{get:function(){var e=this;return this.items.serviceTypeCode.length>0?this.items.serviceTypeCode.map(function(t){return e.code.serviceTypeCode.find(function(e){return e.code===t})}):[]},set:function(e){this.items.serviceTypeCode=e.length>0?e.map(function(e){return e.code}):[]}},valid:function(){return{serviceName:null===this.serviceNameExists&&0===this.items.serviceName.length?this.serviceNameExists:this.items.serviceName.length>0&&/^[A-Za-z0-9]*$/.test(this.items.serviceName)&&"success"===this.serviceNameExists,companyCode:null===this.items.companyCode?this.items.companyCode:this.items.companyCode.length>0,serviceTypeCode:this.items.serviceTypeCode.length}},feedback:function(){return{serviceName:!/^[A-Za-z0-9]*$/.test(this.items.serviceName)&&this.items.serviceName.length>0?"영문, 숫자만 입력하십시오.":null===this.serviceNameExists&&this.items.serviceName.length>0?"중복확인은 필수입니다.":"not"===this.serviceNameExists?"입력된 항목이 없습니다.":"fail"===this.serviceNameExists?"이미 등록된 Service Name이 있습니다.":0===this.items.serviceName.length?this.$valid.msg.require:""}}},created:function(){var e=this;this.$https.get("/system/commonCode",{q:{groupCode:"COMPANY"}}).then(function(t){e.isLoad.companyCode=!1,e.code.companyCode=t.data.items}),this.$https.get("/system/commonCode",{q:{groupCode:"SERVICE_TYPE"}}).then(function(t){e.isLoad.serviceTypeCode=!1,e.code.serviceTypeCodeAll=t.data.items,e.code.serviceTypeCode=t.data.items.filter(function(e){return 4===e.code.split("_")[2].length})}),this.$https.get("/system/commonCode",{q:{groupCode:"DOMAIN_PROTOCOL"}}).then(function(t){e.isLoad.domainProtocolCode=!1,e.code.domainProtocolCode=t.data.items}),this.$https.get("/system/commonCode",{q:{groupCode:"HASHING_TYPE"}}).then(function(t){e.isLoad.domainHashingTypeCode=!1,e.code.domainHashingTypeCode=t.data.items})},methods:{onSubmit:function(){var e=this,t=o({},this.items,{serviceDomainList:this.items.serviceDomainList.length?this.items.serviceDomainList.map(function(e){var t=e.serviceTypeCode,s=e.domainProtocolCode,i=e.domainHashingTypeCode,o=t.code;return{serviceTypeCode:4===t.code.split("_")[2].length?o.slice(0,o.length-2):o,domainProtocolCode:s.code,domainHashingTypeCode:i.code}}):[]});this.items.modifyHistReason="등록",this.validate(t)&&this.$https.post("/services",t).then(function(t){e.$router.push({name:"Service 상세",params:{id:t.data.items}})}).catch(function(e){console.log(e)})},fetchNameExists:function(){var e=this;if(!this.items.serviceName)return void(this.serviceNameExists="not");this.$https.get("/services/name",{serviceName:this.items.serviceName}).then(function(t){e.serviceNameExists="Success"===t.data.result?"success":"fail"})},validate:function(e){var t=e.companyCode,s=e.serviceName,i=e.serviceTypeCode,a=e.cnameDomainName,n=e.sslCert,r=e.sslCertKey,c=e.sslCertExpireDate,l=o({companyCode:t,serviceName:s},i);this.items.cnameUseYn&&(l=o({},l,{cnameDomainName:a})),this.items.sslCertUseYn&&(l=o({},l,{sslCert:n,sslCertKey:r,sslCertExpireDate:c}));var m=this.$valid.all(l)&&"success"===this.serviceNameExists;return this.inValidForm=!m,m},onSelectType:function(e){var t=this.getServiceDomain(e);!!this.items.serviceDomainList.length&&this.items.serviceDomainList.find(function(e){return e.serviceTypeCode.code===t.code})||this.items.serviceDomainList.push({serviceTypeCode:t,domainProtocolCode:this.code.domainProtocolCode[0],domainHashingTypeCode:this.code.domainHashingTypeCode[0]})},onRemoveType:function(e){var t=this.getServiceDomain(e);this.items.serviceTypeCode.filter(function(e){return t.code===e.slice(0,e.length-2)}).length>0||(this.items.serviceDomainList=this.items.serviceDomainList.filter(function(e){return e.serviceTypeCode.code!==t.code}))},lowerFomatter:function(e){return e.toLowerCase()},getServiceDomain:function(e){return 4===e.code.split("_")[2].length?this.code.serviceTypeCodeAll.find(function(t){var s=t.code;return e.code.slice(0,e.code.length-2)===s}):code}}}},876:function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"animated fadeIn"},[s("b-form",{staticClass:"formView",attrs:{validated:e.inValidForm,novalidate:""}},[s("b-form-fieldset",{attrs:{"invalid-feedback":e.$valid.msg.select,horizontal:!0}},[s("template",{slot:"label"},[e._v("\n        Company"),s("i",{staticClass:"require"},[e._v("*")])]),e._v(" "),s("multiselect",{class:{invalid:!e.valid.companyCode},attrs:{"track-by":"code",label:"codeName",options:e.code.companyCode,showLabels:!1,loading:e.isLoad.companyCode,placeholder:"Select company"},model:{value:e.companyCode,callback:function(t){e.companyCode=t},expression:"companyCode"}})],2),e._v(" "),s("b-form-fieldset",{attrs:{description:"※ Service Name은 도메인에 포함되기 때문에 영문, 숫자만 입력 가능합니다.","invalid-feedback":e.feedback.serviceName,horizontal:!0}},[s("template",{slot:"label"},[e._v("\n        Service Name"),s("i",{staticClass:"require"},[e._v("*")])]),e._v(" "),s("b-form-input",{attrs:{type:"text",placeholder:"Enter service name",state:e.valid.serviceName,formatter:e.lowerFomatter,required:""},on:{input:function(t){e.serviceNameExists=null}},model:{value:e.items.serviceName,callback:function(t){e.$set(e.items,"serviceName",t)},expression:"items.serviceName"}}),e._v(" "),s("b-button",{attrs:{variant:"in-table"},on:{click:e.fetchNameExists}},[e._v("중복확인")]),e._v(" "),null!==e.serviceNameExists?s("span",{staticClass:"ico ml-2 mid"},["success"===e.serviceNameExists?s("i",{staticClass:"fa fa-check-circle"}):e._e(),e._v(" "),"fail"===e.serviceNameExists?s("i",{staticClass:"fa fa-times-circle"}):e._e()]):e._e()],2),e._v(" "),s("b-form-fieldset",{attrs:{"invalid-feedback":e.$valid.msg.select,horizontal:!0}},[s("template",{slot:"label"},[e._v("\n        Service Type"),s("i",{staticClass:"require"},[e._v("*")])]),e._v(" "),s("multiselect",{staticClass:"multiple",class:{invalid:!e.valid.serviceTypeCode},attrs:{"track-by":"code",label:"codeName",multiple:!0,showLabels:!1,options:e.code.serviceTypeCode,loading:e.isLoad.serviceTypeCode,placeholder:"Select service type"},on:{select:e.onSelectType,remove:e.onRemoveType},model:{value:e.serviceTypeCode,callback:function(t){e.serviceTypeCode=t},expression:"serviceTypeCode"}})],2),e._v(" "),s("b-form-fieldset",{attrs:{label:"Domain",horizontal:!0}},[e.items.serviceDomainList.length?e._e():s("small",{staticClass:"form-text-alone text-muted"},[e._v("※ Service Name, Service Type 선택 시, 자동 생성")]),e._v(" "),e.items.serviceDomainList.length?s("b-table",{staticClass:"sub",attrs:{"show-empty":"",items:e.items.serviceDomainList,fields:{serviceTypeCode:{label:"&nbsp;",class:"index"},domainProtocolCode:{label:"Domain<i class='require'>*</i>",class:"text-left"},domainHashingTypeCode:{label:"Hasing type<i class='require'>*</i>",class:"w-25"}}},scopedSlots:e._u([{key:"serviceTypeCode",fn:function(t){return[e._v("\n          "+e._s(t.value.codeValChar1)+"\n        ")]}},{key:"domainProtocolCode",fn:function(t){return[s("multiselect",{staticClass:"protocol noEmpty",attrs:{label:"codeName",allowEmpty:!1,showLabels:!1,searchable:!1,options:e.code.domainProtocolCode,loading:e.isLoad.domainProtocolCode,placeholder:"://"},model:{value:t.item.domainProtocolCode,callback:function(s){e.$set(t.item,"domainProtocolCode",s)},expression:"row.item.domainProtocolCode"}}),e._v(" "),s("span",{staticClass:"font-text-alone"},[s("strong",{staticClass:"text-primary"},[e._v(e._s(e._f("lowercase")(t.item.serviceTypeCode.codeValChar1))+"."+e._s(e.items.serviceName))]),e._v(".vessels.com\n          ")])]}},{key:"domainHashingTypeCode",fn:function(t){return[s("multiselect",{staticClass:"noEmpty",attrs:{label:"codeName",allowEmpty:!1,showLabels:!1,searchable:!1,options:e.code.domainHashingTypeCode,loading:e.isLoad.domainHashingTypeCode},model:{value:t.item.domainHashingTypeCode,callback:function(s){e.$set(t.item,"domainHashingTypeCode",s)},expression:"row.item.domainHashingTypeCode"}})]}}])}):e._e()],1),e._v(" "),s("b-form-fieldset",{attrs:{label:"CNAME 사용여부",horizontal:!0}},[s("c-switch",{staticClass:"v-switch",attrs:{type:"text",on:"사용",off:"미사용"},model:{value:e.items.cnameUseYn,callback:function(t){e.$set(e.items,"cnameUseYn",t)},expression:"items.cnameUseYn"}})],1),e._v(" "),e.items.cnameUseYn?s("b-form-fieldset",{attrs:{label:"CNAME 도메인<i class='require'>*</i>","invalid-feedback":e.$valid.msg.require,horizontal:!0}},[s("b-form-input",{attrs:{type:"text",required:""},model:{value:e.items.cnameDomainName,callback:function(t){e.$set(e.items,"cnameDomainName",t)},expression:"items.cnameDomainName"}})],1):e._e(),e._v(" "),s("b-form-fieldset",{attrs:{label:"SSL 인증서",horizontal:!0}},[s("c-switch",{staticClass:"v-switch",attrs:{type:"text",on:"사용",off:"미사용"},model:{value:e.items.sslCertUseYn,callback:function(t){e.$set(e.items,"sslCertUseYn",t)},expression:"items.sslCertUseYn"}})],1),e._v(" "),e.items.sslCertUseYn?s("b-form-fieldset",{attrs:{label:"SSL 인증서<i class='require'>*</i>",horizontal:!0}},[s("div",{staticClass:"form-in-view"},[s("b-form-fieldset",{attrs:{label:"Cert<i class='require'>*</i>","invalid-feedback":e.$valid.msg.require,horizontal:!0}},[s("b-form-textarea",{attrs:{rows:2,required:""},model:{value:e.items.sslCert,callback:function(t){e.$set(e.items,"sslCert",t)},expression:"items.sslCert"}})],1),e._v(" "),s("b-form-fieldset",{attrs:{label:"Key<i class='require'>*</i>","invalid-feedback":e.$valid.msg.require,horizontal:!0}},[s("b-form-textarea",{attrs:{rows:2,required:""},model:{value:e.items.sslCertKey,callback:function(t){e.$set(e.items,"sslCertKey",t)},expression:"items.sslCertKey"}})],1),e._v(" "),s("b-form-fieldset",{attrs:{label:"만료일","invalid-feedback":e.$valid.msg.require,horizontal:!0}},[s("b-form-input",{attrs:{type:"date",required:""},model:{value:e.items.sslCertExpireDate,callback:function(t){e.$set(e.items,"sslCertExpireDate",t)},expression:"items.sslCertExpireDate"}})],1)],1)]):e._e(),e._v(" "),s("b-form-fieldset",{attrs:{label:"사용여부",horizontal:!0}},[s("c-switch",{staticClass:"v-switch",attrs:{type:"text",on:"사용",off:"미사용"},model:{value:e.items.serviceUseYn,callback:function(t){e.$set(e.items,"serviceUseYn",t)},expression:"items.serviceUseYn"}})],1)],1),e._v(" "),s("div",{staticClass:"page-btn"},[s("b-button",{attrs:{type:"button",variant:"outline-secondary",to:{name:"Service 관리"}}},[e._v("취소")]),e._v(" "),s("b-button",{attrs:{type:"button",variant:"primary"},on:{click:e.onSubmit}},[e._v("저장")])],1)],1)},o=[],a={render:i,staticRenderFns:o};t.a=a}});