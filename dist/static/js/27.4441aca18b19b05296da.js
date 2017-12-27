webpackJsonp([27],{425:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(698),a=s(699),o=s(11),n=o(i.a,a.a,null,null,null);t.default=n.exports},698:function(e,t,s){"use strict";function i(e){if(Array.isArray(e)){for(var t=0,s=Array(e.length);t<e.length;t++)s[t]=e[t];return s}return Array.from(e)}var a=s(139),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i])}return e};t.a={name:"referrers",components:{cSwitch:a.a},data:function(){return{items:{edgeId:null,popId:null,edgeDomainName:null,edgeRelayYn:!1,edgeUseYn:!0,serviceTypeCode:[]},code:{popId:[],serviceTypeCode:[]},isLoad:{popId:!0,serviceTypeCode:!0}}},computed:{popId:{get:function(){var e=this;return this.code.popId.find(function(t){return t.popId===e.items.popId})||null},set:function(e){this.items.popId=null!==e?e.popId:null}},serviceTypeCode:{get:function(){var e=this;return this.items.serviceTypeCode.length>0?this.items.serviceTypeCode.map(function(t){return e.code.serviceTypeCode.find(function(e){return e.code===t})}):[]},set:function(e){this.items.serviceTypeCode=e.length>0?e.map(function(e){return e.code}):[]}},serviceDomainList:function(){var e=this.serviceTypeCode.map(function(e){return e.codeValChar1});return[].concat(i(new Set(e)))}},created:function(){var e=this;void 0===this.$route.query.q&&(alert("잘못된 접근입니다"),this.$router.push({name:"Edge 관리"}));var t=JSON.parse(this.$route.query.q).id;this.$https.get("/edges/"+t).then(function(t){var s=null!==t.data.items.serviceTypeCode?t.data.items.serviceTypeCode:[];e.items=o({},t.data.items,{serviceTypeCode:s})}),this.$https.get("/system/commonCode",{q:{groupCode:"SERVICE_TYPE"}}).then(function(t){e.isLoad.serviceTypeCode=!1,e.code.serviceTypeCode=t.data.items.filter(function(e){var t=e.code,s=e.codeName,i=e.codeValChar1;return!(4===t.split("_")[2].length&&s===i)})}),this.$https.get("/pops").then(function(t){e.isLoad.popId=!1,e.code.popId=t.data.items})},methods:{onSubmit:function(){var e=this;this.items.edgeRelayYn="Relay"===this.items.edgeRelayName;var t=this.items,s=t.edgeId,i=t.popId,a=t.edgeDomainName,o=t.edgeRelayYn,n=t.edgeUseYn,r=t.serviceTypeCode;this.$https.post("/edges",{edgeId:s,popId:i,edgeDomainName:a,edgeRelayYn:o,edgeUseYn:n,serviceTypeCode:r}).then(function(){e.$router.push({name:"Edge 상세",params:{id:e.items.edgeId}})}).catch(function(e){console.log(e)})},fetchDomain:function(){var e=this;this.$https.get("/edges/domain").then(function(t){e.items.edgeDomainName=t.data.items.domain})}}}},699:function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"animated fadeIn"},[s("b-form",[s("b-card",[s("b-form-fieldset",{attrs:{label:"IP","label-cols":3,horizontal:!0}},[s("b-form-input",{attrs:{type:"text",plaintext:""},model:{value:e.items.ip,callback:function(t){e.items.ip=t},expression:"items.ip"}})],1),e._v(" "),s("b-form-fieldset",{attrs:{label:"Host Name","label-cols":3,horizontal:!0}},[s("b-form-input",{attrs:{value:e.items.hostName,type:"text",plaintext:""}})],1),e._v(" "),s("b-form-fieldset",{attrs:{label:"PoP 선택 *","label-cols":3,horizontal:!0}},[s("multiselect",{attrs:{allowEmpty:!1,showLabels:!1,searchable:!1,options:e.code.popId,loading:e.isLoad.popId,label:"popName",placeholder:"선택"},model:{value:e.popId,callback:function(t){e.popId=t},expression:"popId"}})],1),e._v(" "),s("b-form-fieldset",{attrs:{label:"구분 *","label-cols":3,horizontal:!0}},[s("b-form-radio-group",{attrs:{options:[{text:"Edge",value:"Edge"},{text:"Relay",value:"Relay"}]},model:{value:e.items.edgeRelayName,callback:function(t){e.items.edgeRelayName=t},expression:"items.edgeRelayName"}})],1),e._v(" "),s("b-form-fieldset",{attrs:{label:"Service Type *","label-cols":3,horizontal:!0}},[s("multiselect",{attrs:{multiple:!0,showLabels:!1,options:e.code.serviceTypeCode,label:"codeName",loading:e.isLoad.serviceTypeCode,"track-by":"code",placeholder:"Select service type"},model:{value:e.serviceTypeCode,callback:function(t){e.serviceTypeCode=t},expression:"serviceTypeCode"}})],1),e._v(" "),s("b-form-fieldset",{attrs:{label:"Domain","label-cols":3,horizontal:!0}},[s("b-button",{attrs:{variant:"outline-secondary",size:"sm"},on:{click:e.fetchDomain}},[e._v("생성")]),e._v(" "),s("strong",{staticClass:"text-danger ml-1"},[e._v(e._s(e.items.edgeDomainName))]),e._v(" "),s("ul",{staticClass:"icons-list edge mt-2"},e._l(e.serviceDomainList,function(t,i){return s("li",[s("i",{staticClass:"bg-primary"},[e._v(e._s(t))]),e._v(" "),s("div",{staticClass:"desc"},[s("div",{staticClass:"title"},[e._v("\n                http(s)://"),s("strong",{staticClass:"text-danger"},[e._v(e._s(e.items.edgeDomainName))]),e._v(".[city].[country].[service type].[service name].vessels.com\n              ")])])])}))],1),e._v(" "),s("b-form-fieldset",{attrs:{label:"사용여부","label-cols":3,description:"※ 미사용 선택 시, DNS(GTM) 설정 정보가 삭제됩니다.",horizontal:!0}},[s("c-switch",e._b({attrs:{type:"icon",variant:"success",pill:!0},model:{value:e.items.edgeUseYn,callback:function(t){e.items.edgeUseYn=t},expression:"items.edgeUseYn"}},"c-switch",{on:"",off:""},!1))],1),e._v(" "),s("div",{staticClass:"form-btn",slot:"footer"},[s("b-button",{attrs:{type:"button",size:"sm",variant:"primary"},on:{click:e.onSubmit}},[s("i",{staticClass:"fa fa-dot-circle-o"}),e._v(" 저장")]),e._v(" "),s("b-button",{attrs:{type:"button",size:"sm",variant:"secondary",to:{name:"Edge 관리"}}},[s("i",{staticClass:"fa fa-ban"}),e._v(" 취소")])],1)],1)],1)],1)},a=[],o={render:i,staticRenderFns:a};t.a=o}});