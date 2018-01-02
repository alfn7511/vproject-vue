webpackJsonp([24],{430:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(716),i=s(717),r=s(11),l=r(a.a,i.a,null,null,null);t.default=l.exports},716:function(e,t,s){"use strict";var a=s(140);t.a={name:"pops",props:["id"],components:{ContentHeader:a.a},data:function(){return{name:"Pop 상세",fields:{lowReferrerList:{rowReferrerId:{label:"ID"},referrerIp:{label:"IP",class:"text-left"},referrerHostName:{label:"Host Name",class:"text-left"},referrerUseYn:{label:"상태"}},edgeList:{edgeId:{label:"ID"},edgeIp:{label:"IP",class:"text-left"},edgeHostName:{label:"Host Name",class:"text-left"},edgeDomainName:{label:"Domain",class:"text-left"},edgeRelayYn:{label:"Type"},edgeUseYn:{label:"상태"}}},items:{popName:"",lowReferrerList:[],edgeList:[]},code:{serviceList:[{serviceId:1,serviceName:"oksusu"},{serviceId:2,serviceName:"btv"}]},isLoad:{serviceList:!0}}},created:function(){var e=this;this.$https.get("/pops/"+this.id).then(function(t){e.items.popName=t.data.items.popName,e.items.lowReferrerList=t.data.items.lowReferrerList,e.items.edgeList=t.data.items.edgeList}),this.isLoad.serviceList=!1},methods:{onServiceSelect:function(e){console.log(e.serviceId)}}}},717:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"animated fadeIn"},[s("content-header",{attrs:{title:e.items.popName,name:e.name}}),e._v(" "),s("div",{staticClass:"collapse-title"},[s("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.lowReferrer",modifiers:{lowReferrer:!0}}],attrs:{variant:"secondary",block:!0}},[e._v("\n      Low Referrer\n      "),s("i",{staticClass:"fa fa-angle-down"})])],1),e._v(" "),s("b-collapse",{attrs:{id:"lowReferrer",visible:""}},[s("section",{staticClass:"board"},[s("b-table",{attrs:{striped:"",bordered:"",hover:"","show-empty":"",items:e.items.lowReferrerList,fields:e.fields.lowReferrerList},scopedSlots:e._u([{key:"referrerUseYn",fn:function(t){return[e._v(e._s(t.value?"사용":"미사용"))]}}])})],1)]),e._v(" "),s("div",{staticClass:"collapse-title mt-5"},[s("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.edge",modifiers:{edge:!0}}],attrs:{variant:"secondary",block:!0}},[e._v("\n      Edge\n      "),s("i",{staticClass:"fa fa-angle-down"})])],1),e._v(" "),s("b-collapse",{attrs:{id:"edge",visible:""}},[s("div",{staticClass:"board-btn"},[s("multiselect",{staticClass:"inline",staticStyle:{"min-width":"130px"},attrs:{showLabels:!1,searchable:!1,options:e.code.serviceList,loading:e.isLoad.serviceList,label:"serviceName",placeholder:"전체"},on:{input:e.onServiceSelect}})],1),e._v(" "),s("section",{staticClass:"board"},[s("b-table",{attrs:{striped:"",bordered:"",hover:"","show-empty":"",items:e.items.edgeList,fields:e.fields.edgeList},scopedSlots:e._u([{key:"edgeRelayYn",fn:function(t){return[e._v(e._s(t.value?"Relay":"Edge"))]}},{key:"edgeUseYn",fn:function(t){return[e._v(e._s(t.value?"사용":"미사용"))]}}])})],1)]),e._v(" "),s("div",{staticClass:"page-btn"},[s("b-button",{attrs:{type:"button",size:"sm",variant:"secondary",to:{name:"Pop 관리"}}},[s("i",{staticClass:"fa fa-list"}),e._v(" 목록")])],1)],1)},i=[],r={render:a,staticRenderFns:i};t.a=r}});