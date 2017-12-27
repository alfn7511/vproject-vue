webpackJsonp([4],{424:function(t,e,a){"use strict";function s(t){a(694)}Object.defineProperty(e,"__esModule",{value:!0});var i=a(696),n=a(697),r=a(11),o=s,c=r(i.a,n.a,o,null,null);e.default=c.exports},694:function(t,e,a){var s=a(695);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a(423)("0c5fd8c7",s,!0)},695:function(t,e,a){e=t.exports=a(422)(!0),e.push([t.i,".dash-box{width:100%;height:100%}","",{version:3,sources:["/Users/younjinkim/WebstormProjects/vueproject/src/views/Dashboard.vue"],names:[],mappings:"AACA,UACE,WAAY,AACZ,WAAa,CACd",file:"Dashboard.vue",sourcesContent:["\n.dash-box {\n  width: 100%;\n  height: 100%;\n}\n"],sourceRoot:""}])},696:function(t,e,a){"use strict";var s=a(142),i=(a.n(s),a(143));a.n(i);e.a={name:"dashboard",components:{DndGridContainer:s.Container,DndGridBox:s.Box},data:function(){return{gridSize:{w:100,h:100},bubbleUp:!1,margin:7,boxCount:4,layout:[{id:"edge-box",hidden:!1,pinned:!1,position:{x:0,y:0,w:7.5,h:2.5}},{id:"map-box",hidden:!1,pinned:!1,position:{x:7.5,y:0,w:3.5,h:5}},{id:"cache-box",hidden:!1,pinned:!1,position:{x:0,y:2.5,w:3.75,h:2.5}},{id:"service-box",hidden:!1,pinned:!1,position:{x:3.75,y:2.5,w:3.75,h:2.5}},{id:"request-box",hidden:!1,pinned:!1,position:{x:0,y:5,w:11,h:2.5}}],chart:{edge:{chart:{type:"areaspline"},title:!1,xAxis:{categories:["16:05","16:10","16:15","16:20","16:25","16:30","16:35","16:40"]},yAxis:{title:!1},legend:{layout:"horizontal",align:"left",verticalAlign:"top",x:50,y:10,floating:!0,borderWidth:1},plotOptions:{areaspline:{fillOpacity:.5}},series:[{name:"A",data:[3,4,3,5,4,10,12,18]},{name:"B",data:[1,3,4,3,3,5,4,2]}]},cache:{chart:{type:"pie",margin:[0,0,0,0]},title:!1,tooltip:{pointFormat:"{series.name}: <b>{point.percentage:.1f}%</b>"},plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",dataLabels:{enabled:!0,format:"<b>{point.name}</b><br>{point.percentage:.1f} %",distance:-10,filter:{property:"percentage",operator:">",value:9}}}},series:[{name:"Brands",colorByPoint:!0,data:[{name:"Hit",y:70,sliced:!0,selected:!0},{name:"Expire",y:15},{name:"Miss",y:10},{name:"Stale",y:5}]}]},service:{chart:{type:"column"},title:!1,xAxis:{categories:["DASH","ADV","IMG","FILE","PATCH"]},yAxis:{title:!1},legend:!1,series:[{data:[120,85,60,55,40]}]},request:{title:!1,xAxis:{categories:["16:05","16:10","16:15","16:20","16:25","16:30","16:35","16:40"]},yAxis:{title:!1},legend:{layout:"horizontal",align:"left",verticalAlign:"bottom",borderWidth:0},series:[{name:"목동",data:[9.5,14.5,18.2,21.5,25.2,26.5,23.3,18.3]},{name:"성수",data:[5.7,11.3,17,22,24.8,24.1,20.1,14.1]},{name:"잠실",data:[3.5,8.4,13.5,17,18.6,17.9,14.3,9]}]}}}},computed:{layoutWithoutSettings:function(){return this.layout.filter(function(t){return"settings"!==t.id})}},created:function(){this.$https.getChart("/monitoring/v1.0/statistics/chart",{fromDate:"2017-12-20T00:00",toDate:"2017-12-20T23:59",q:{serviceIdList:["ALL"],serviceTypeList:["ALL"],typeField:"",metricType:"sum",dataType:"httpTraffic",intervalType:"H",intervalValue:"1",targetType:"TOTAL_EDGE",chartType:"BAR",peakYn:!1,mainMode:"TIME",subMode:"",targetList:["",""]}}).then(function(t){return console.log(t)})},methods:{onResizeBox:function(t){var e=this.$refs[t].chart,a=document.querySelector(".placeholder.dnd-grid-box"),s=Number(a.style.width.split("px")[0]),i=Number(a.style.height.split("px")[0]);e.setSize(s-30,i-71)},onUpdateLayout:function(){}}}},697:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"animated fadeIn"},[a("dnd-grid-container",{attrs:{layout:t.layout,gridSize:t.gridSize,margin:t.margin,bubbleUp:t.bubbleUp},on:{"update:layout":function(e){t.layout=e}}},[a("dnd-grid-box",{attrs:{boxId:"edge-box",dragSelector:".card-header"},on:{resizeUpdate:function(e){t.onResizeBox("edgeChart")}}},[a("div",{staticClass:"card dash-box"},[a("div",{staticClass:"card-header"},[t._v("\n          Edge Data Transfer\n          "),a("div",{staticClass:"card-actions"},[a("b-button",{staticClass:"btn-minimize",attrs:{size:"sm"}},[a("i",{staticClass:"fa fa-pencil"}),t._v(" "),a("span",{staticClass:"sr-only"},[t._v("Edit")])]),t._v(" "),a("b-button",{staticClass:"btn-minimize",attrs:{size:"sm"}},[a("i",{staticClass:"fa fa-close"}),t._v(" "),a("span",{staticClass:"sr-only"},[t._v("Delete")])])],1)]),t._v(" "),a("div",{staticClass:"card-body"},[a("highcharts",{ref:"edgeChart",staticStyle:{height:"190px"},attrs:{options:t.chart.edge}})],1)])]),t._v(" "),a("dnd-grid-box",{attrs:{boxId:"map-box",dragSelector:".card-header"}},[a("div",{staticClass:"card dash-box"},[a("div",{staticClass:"card-header"},[t._v("\n          지역별 Data Transfer 현황\n        ")])])]),t._v(" "),a("dnd-grid-box",{attrs:{boxId:"cache-box",dragSelector:".card-header"},on:{resizeUpdate:function(e){t.onResizeBox("cacheChart")}}},[a("div",{staticClass:"card dash-box"},[a("div",{staticClass:"card-header"},[t._v("\n          Cache Status\n          "),a("div",{staticClass:"card-actions"},[a("b-button",{staticClass:"btn-minimize",attrs:{size:"sm"}},[a("i",{staticClass:"fa fa-pencil"}),t._v(" "),a("span",{staticClass:"sr-only"},[t._v("Edit")])]),t._v(" "),a("b-button",{staticClass:"btn-minimize",attrs:{size:"sm"}},[a("i",{staticClass:"fa fa-close"}),t._v(" "),a("span",{staticClass:"sr-only"},[t._v("Delete")])])],1)]),t._v(" "),a("div",{staticClass:"card-body"},[a("highcharts",{ref:"cacheChart",staticStyle:{height:"190px"},attrs:{options:t.chart.cache}})],1)])]),t._v(" "),a("dnd-grid-box",{attrs:{boxId:"service-box",dragSelector:".card-header"},on:{resizeUpdate:function(e){t.onResizeBox("serviceChart")}}},[a("div",{staticClass:"card dash-box"},[a("div",{staticClass:"card-header"},[t._v("\n          Service Type 별 Request\n          "),a("div",{staticClass:"card-actions"},[a("b-button",{staticClass:"btn-minimize",attrs:{size:"sm"}},[a("i",{staticClass:"fa fa-pencil"}),t._v(" "),a("span",{staticClass:"sr-only"},[t._v("Edit")])]),t._v(" "),a("b-button",{staticClass:"btn-minimize",attrs:{size:"sm"}},[a("i",{staticClass:"fa fa-close"}),t._v(" "),a("span",{staticClass:"sr-only"},[t._v("Delete")])])],1)]),t._v(" "),a("div",{staticClass:"card-body"},[a("highcharts",{ref:"serviceChart",staticStyle:{height:"190px"},attrs:{options:t.chart.service}})],1)])]),t._v(" "),a("dnd-grid-box",{attrs:{boxId:"request-box",dragSelector:".card-header"},on:{resizeUpdate:function(e){t.onResizeBox("requestChart")}}},[a("div",{staticClass:"card dash-box"},[a("div",{staticClass:"card-header"},[t._v("\n          Request Count\n          "),a("div",{staticClass:"card-actions"},[a("b-button",{staticClass:"btn-minimize",attrs:{size:"sm"}},[a("i",{staticClass:"fa fa-pencil"}),t._v(" "),a("span",{staticClass:"sr-only"},[t._v("Edit")])]),t._v(" "),a("b-button",{staticClass:"btn-minimize",attrs:{size:"sm"}},[a("i",{staticClass:"fa fa-close"}),t._v(" "),a("span",{staticClass:"sr-only"},[t._v("Delete")])])],1)]),t._v(" "),a("div",{staticClass:"card-body"},[a("highcharts",{ref:"requestChart",staticStyle:{height:"190px"},attrs:{options:t.chart.request}})],1)])])],1)],1)},i=[],n={render:s,staticRenderFns:i};e.a=n}});