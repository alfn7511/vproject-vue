webpackJsonp([44],Array(66).concat([function(e,t,n){"use strict";t.a={getToken:function(){return localStorage.token},getUserInfo:function(e){return localStorage.getItem(e)},logout:function(e){delete localStorage.token,e&&e()},loggedIn:function(){return!!localStorage.token},onChange:function(){}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";function a(e){n(177)}Object.defineProperty(t,"__esModule",{value:!0});var r=n(178),i=n(179),o=n(11),s=a,c=o(r.a,i.a,s,null,null);t.default=c.exports},function(e,t,n){"use strict";function a(e){n(180)}Object.defineProperty(t,"__esModule",{value:!0});var r=n(181),i=n(182),o=n(11),s=a,c=o(r.a,i.a,s,null,null);t.default=c.exports},function(e,t,n){"use strict";function a(e){n(183)}Object.defineProperty(t,"__esModule",{value:!0});var r=n(184),i=n(185),o=n(11),s=a,c=o(r.a,i.a,s,null,null);t.default=c.exports},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";var a=n(175),r=n(176),i=n(11),o=i(a.a,r.a,null,null,null);t.a=o.exports},function(e,t,n){"use strict";var a=n(186),r=n(187),i=n(11),o=i(a.a,r.a,null,null,null);t.a=o.exports},,,function(e,t){},,function(e,t,n){e.exports=n(147)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(67),r=n(148),i=n(149),o=n(95),s=n.n(o),c=n(172),u=n(212),l=n.n(u),d=n(213),p=n(217),v=n.n(p),f=n(66);a.default.component("multiselect",l.a),a.default.use(r.a),a.default.use(d.a),a.default.use(v.a);var m=s.a.create({baseURL:"/api",transformResponse:[function(e){var t=JSON.parse(e);return{result:t.result,items:t.resultData?t.resultData.data:[],pageInfo:t.resultData?t.resultData.pageInfo:{},error:t.error}}]}),g=s.a.create({baseURL:"/api",headers:{"x-vessel-appKey":"0fc75651-8fa5-4d13-a376-69384eacb315"}}),h=!1,b=function(e){return 403===e.response.status&&(h||(h=!0,alert(e.response.data.error.message),f.a.logout(function(){window.location="/#/login"}))),Promise.reject(e)};m.interceptors.response.use(function(e){return e},b),g.interceptors.response.use(function(e){return e},b),a.default.prototype.$https={get:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return m.get(e,{params:t})},post:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return m.post(e,t)},put:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return m.put(e,t)},delete:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return m.delete(e)},getChart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return g.get(e,{params:t})}},a.default.filter("capitalize",function(e){return e?(e=e.toString(),e.charAt(0).toUpperCase()+e.slice(1)):""}),a.default.filter("lowercase",function(e){return e?(e=e.toString(),e.toLowerCase()):""}),new a.default({el:"#app",router:c.a,template:"<App/>",components:{App:i.a}})},,function(e,t,n){"use strict";function a(e){n(150)}var r=n(152),i=n(153),o=n(11),s=a,c=o(r.a,i.a,s,null,null);t.a=c.exports},function(e,t){},,function(e,t,n){"use strict";t.a={name:"app"}},function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;return(e._self._c||t)("router-view")},r=[],i={render:a,staticRenderFns:r};t.a=i},,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";var a=n(67),r=n(101),i=n(66),o=n(173),s=n(188),c=n(104),u=n(103),l=n(102);a.default.use(r.default);var d=function(e,t,n){i.a.loggedIn()?n():n({path:"/login",query:{redirect:e.fullPath}})};t.a=new r.default({mode:"hash",linkActiveClass:"open active",scrollBehavior:function(){return{y:0}},routes:[{path:"/",redirect:"/dashboard",name:"Home",component:s.a,beforeEnter:d,children:[{path:"dashboard",name:"Dashboard",component:Object(o.a)("Dashboard")},{path:"service",redirect:"/service/service",name:"Service",component:{render:function(e){return e("router-view")}},children:[{path:"service",name:"Service 관리",component:Object(o.a)("services/service",!0)},{path:"service/create",name:"Service 등록",component:Object(o.a)("services/service/ServiceCreate")},{path:"service/:id",name:"Service 상세",redirect:"/service/service/:id/default",component:{render:function(e){return e("router-view")}},children:[{path:"default",title:"기본정보",props:!0,component:Object(o.a)("services/service/ServiceDefault")},{path:"origin",title:"Origin",props:!0,component:Object(o.a)("services/service/ServiceOrigin")},{path:"pop",title:"PoP",props:!0,component:Object(o.a)("services/service/ServicePop")},{path:"ip",title:"IP Restriction",props:!0,component:Object(o.a)("services/service/ServiceIp")}]},{path:"bucket",name:"Bucket 관리",component:Object(o.a)("services/bucket",!0)},{path:"bucket/:id",name:"Bucket 상세",props:!0,component:Object(o.a)("services/bucket/Detail")}]},{path:"configuration",redirect:"/configuration/edge",name:"Configuration",component:{render:function(e){return e("router-view")}},children:[{path:"edge",name:"Edge 관리",component:Object(o.a)("configuration/edge",!0)},{path:"edge/create",name:"Edge 등록",component:Object(o.a)("configuration/edge/Create")},{path:"edge/:id",redirect:"/configuration/edge/:id/default",name:"Edge 상세",component:{render:function(e){return e("router-view")}},children:[{path:"default",title:"기본정보",props:!0,component:Object(o.a)("configuration/edge/EdgeDefault")},{path:"core",title:"Core Config",props:!0,component:Object(o.a)("configuration/edge/EdgeCore")},{path:"service",title:"Service",props:!0,component:Object(o.a)("configuration/edge/EdgeService")}]},{path:"cache",name:"Cache Throttling 관리",component:Object(o.a)("configuration/cache",!0)},{path:"cache/create",name:"Cache Throttling 등록",component:Object(o.a)("configuration/cache/Create")},{path:"cache/:id",name:"Cache Throttling 상세",props:!0,component:Object(o.a)("configuration/cache/Detail")},{path:"referrer",name:"Referrer 관리",component:Object(o.a)("configuration/referrer",!0)},{path:"referrer/create",name:"Referrer 등록",component:Object(o.a)("configuration/referrer/Create")},{path:"referrer/:id",name:"Referrer 상세",props:!0,component:Object(o.a)("configuration/referrer/Detail")},{path:"pop",name:"Pop 관리",component:Object(o.a)("configuration/pop",!0)},{path:"pop/create",name:"Pop 등록",component:Object(o.a)("configuration/pop/PopCreate")},{path:"pop/:id",redirect:"/configuration/pop/:id/default",name:"Pop 상세",component:{render:function(e){return e("router-view")}},children:[{path:"default",title:"기본정보",props:!0,component:Object(o.a)("configuration/pop/PopDetail")},{path:"edge",title:"L/R, Edge",props:!0,component:Object(o.a)("configuration/pop/PopEdge")}]}]},{path:"policy",redirect:"/policy/onetime",name:"Policy",component:{render:function(e){return e("router-view")}},children:[{path:"onetime",name:"One-Time URL",component:Object(o.a)("policy/Onetime")},{path:"popPreference",name:"PoP Preference",component:Object(o.a)("policy/PopPreference")},{path:"gtmConfig",name:"GTM Config",component:Object(o.a)("policy/GTMconfig")},{path:"geoIp",name:"GEO IP",component:Object(o.a)("policy/GEOip")},{path:"ipRestriction",name:"IP Restriction",component:Object(o.a)("policy/IPRestriction")}]},{path:"workflow",redirect:"/workflow/service",name:"Workflow",component:{render:function(e){return e("router-view")}},children:[{path:"service",name:"Service Processing 관리",component:Object(o.a)("workflow/service",!0)},{path:"service/:id",name:"Service Processing 상세",props:!0,component:Object(o.a)("workflow/service/Detail")},{path:"domain",name:"Domain Processing 관리",component:Object(o.a)("workflow/domain",!0)},{path:"contPreload",name:"Preload",component:Object(o.a)("workflow/content/Preload")},{path:"contPreload/:id",name:"Preload 상세",props:!0,component:Object(o.a)("workflow/content/PreloadDetail")},{path:"contPurge",name:"Purge",component:Object(o.a)("workflow/content/Purge")},{path:"contPurge/:id",name:"Purge 상세",props:!0,component:Object(o.a)("workflow/content/PurgeDetail")}]},{path:"process",name:"Process",component:c.default},{path:"map",name:"Map",component:u.default},{path:"gridUI",name:"Grid UI",component:l.default}]},{path:"/login",name:"Login",component:Object(o.a)("Login")},{path:"/register",name:"Register",component:Object(o.a)("Register")},{path:"/404",name:"Page404",component:Object(o.a)("Page404")},{path:"*",redirect:"/404"}]})},function(e,t,n){"use strict";t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(){return n(174)("./"+e+(t?"/index":"")+".vue")}}},function(e,t,n){function a(e){var t=r[e];return t?Promise.all(t.slice(1).map(n.e)).then(function(){return n(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}var r={"./Dashboard.vue":[424,10],"./GridUI.vue":[102],"./Login.vue":[425,14],"./Map.vue":[103],"./Page404.vue":[426,42],"./Process.vue":[104],"./Register.vue":[427,13],"./configuration/cache/Create.vue":[428,41],"./configuration/cache/Detail.vue":[429,40],"./configuration/cache/index.vue":[430,8],"./configuration/edge/Create.vue":[431,39],"./configuration/edge/Detail.vue":[432,38],"./configuration/edge/EdgeCore.vue":[433,37],"./configuration/edge/EdgeDefault.vue":[434,36],"./configuration/edge/EdgeService.vue":[435,35],"./configuration/edge/index.vue":[436,7],"./configuration/pop/PopCreate.vue":[437,34],"./configuration/pop/PopDetail.vue":[438,33],"./configuration/pop/PopEdge.vue":[439,32],"./configuration/pop/index.vue":[440,6],"./configuration/referrer/Create.vue":[441,31],"./configuration/referrer/Detail.vue":[442,30],"./configuration/referrer/index.vue":[443,5],"./policy/GEOip.vue":[444,29],"./policy/GTMconfig.vue":[445,28],"./policy/IPRestriction.vue":[446,27],"./policy/Onetime.vue":[447,26],"./policy/PopPreference.vue":[448,9],"./services/Bucket.vue":[449,25],"./services/bucket/Detail.vue":[450,12],"./services/bucket/index.vue":[451,4],"./services/service/ServiceCreate.vue":[452,24],"./services/service/ServiceDefault.vue":[453,23],"./services/service/ServiceDetail.vue":[454,22],"./services/service/ServiceIp.vue":[455,21],"./services/service/ServiceOrigin.vue":[456,20],"./services/service/ServicePop.vue":[457,19],"./services/service/index.vue":[458,0],"./workflow/content/Preload.vue":[459,3],"./workflow/content/PreloadDetail.vue":[460,18],"./workflow/content/Purge.vue":[461,2],"./workflow/content/PurgeDetail.vue":[462,17],"./workflow/domain/index.vue":[463,16],"./workflow/service/Create.vue":[464,15],"./workflow/service/Detail.vue":[465,11],"./workflow/service/index.vue":[466,1]};a.keys=function(){return Object.keys(r)},a.id=174,e.exports=a},function(e,t,n){"use strict";t.a={model:{prop:"checked",event:"change"},props:{value:{default:!0},uncheckedValue:{default:!1},checked:{default:!1},type:{type:String,default:"default"},variant:{type:String,default:""},pill:{type:Boolean,default:!1},on:{type:String,default:null},off:{type:String,default:null},size:{type:String,default:null}},computed:{classList:function(){return["switch",this.switchType,this.switchVariant,this.switchPill,this.switchSize]},switchType:function(){return this.type?"switch-"+this.type:"switch-default"},switchVariant:function(){return this.variant?"switch-"+this.variant:"switch-secondary"},switchPill:function(){return this.pill?"switch-pill":null},switchSize:function(){return this.size?"switch-"+this.size:""},isChecked:function(){return this.checked===this.value},isOn:function(){return!!this.on||null}},methods:{handleChange:function(e){var t=e.target.checked;this.$emit("change",t?this.value:this.uncheckedValue)}}}},function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{class:e.classList},[n("input",{staticClass:"switch-input",attrs:{type:"checkbox"},domProps:{value:e.value,checked:e.isChecked},on:{change:e.handleChange}}),e._v(" "),e.isOn?[n("span",{staticClass:"switch-label",attrs:{"data-on":e.on,"data-off":e.off}})]:[n("span",{staticClass:"switch-label"})],e._v(" "),n("span",{staticClass:"switch-handle"})],2)},r=[],i={render:a,staticRenderFns:r};t.a=i},function(e,t){},function(e,t,n){"use strict";var a=n(143),r=(n.n(a),n(144));n.n(r);t.a={name:"GridUI",components:{DndGridContainer:a.Container,DndGridBox:a.Box},data:function(){return{gridSize:{w:100,h:100},bubbleUp:!1,margin:5,boxCount:4,layout:[{id:"settings",hidden:!1,pinned:!1,position:{x:0,y:0,w:4,h:3}},{id:1,hidden:!1,pinned:!1,position:{x:4,y:0,w:2,h:1}},{id:2,hidden:!1,pinned:!1,position:{x:6,y:0,w:1,h:2}},{id:3,hidden:!1,pinned:!1,position:{x:4,y:1,w:2,h:3}},{id:4,hidden:!1,pinned:!1,position:{x:6,y:2,w:3,h:1}}]}},computed:{layoutWithoutSettings:function(){return this.layout.filter(function(e){return"settings"!==e.id})}},methods:{onLayoutUpdate:function(e){this.layout=e.layout}}}},function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"animated fadeIn"},[n("div",{staticClass:"col-12"},[n("dnd-grid-container",{attrs:{layout:e.layout,gridSize:e.gridSize,margin:e.margin,bubbleUp:e.bubbleUp},on:{"update:layout":function(t){e.layout=t}}},[n("dnd-grid-box",{attrs:{boxId:"settings",dragSelector:"div.card-header"}},[n("div",{staticClass:"card demo-box"},[n("div",{staticClass:"card-header"},[e._v("\n            Settings\n          ")]),e._v(" "),n("div",{staticClass:"card-body"},[n("div",{staticClass:"form-group row"},[n("label",{staticClass:"col-sm-4 col-form-label",attrs:{for:"settings-margin-input"}},[e._v("Margin")]),e._v(" "),n("div",{staticClass:"col-sm-8"},[n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.margin,expression:"margin",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number",id:"settings-margin-input"},domProps:{value:e.margin},on:{input:function(t){t.target.composing||(e.margin=e._n(t.target.value))},blur:function(t){e.$forceUpdate()}}})])]),e._v(" "),n("div",{staticClass:"form-group row"},[n("label",{staticClass:"col-sm-4 col-form-label",attrs:{for:"settings-grid-size-w-input"}},[e._v("Grid Size")]),e._v(" "),n("div",{staticClass:"col-sm-4"},[n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.gridSize.w,expression:"gridSize.w",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number",id:"settings-grid-size-w-input"},domProps:{value:e.gridSize.w},on:{input:function(t){t.target.composing||(e.gridSize.w=e._n(t.target.value))},blur:function(t){e.$forceUpdate()}}})]),e._v(" "),n("div",{staticClass:"col-sm-4"},[n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.gridSize.h,expression:"gridSize.h",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:e.gridSize.h},on:{input:function(t){t.target.composing||(e.gridSize.h=e._n(t.target.value))},blur:function(t){e.$forceUpdate()}}})])]),e._v(" "),n("div",{staticClass:"form-group row"},[n("label",{staticClass:"col-sm-4 col-form-label",attrs:{for:"settings-bubble-up-input"}},[e._v("Bubble Up")]),e._v(" "),n("div",{staticClass:"col-sm-8"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.bubbleUp,expression:"bubbleUp"}],attrs:{type:"checkbox",id:"settings-bubble-up-input"},domProps:{checked:Array.isArray(e.bubbleUp)?e._i(e.bubbleUp,null)>-1:e.bubbleUp},on:{__c:function(t){var n=e.bubbleUp,a=t.target,r=!!a.checked;if(Array.isArray(n)){var i=e._i(n,null);a.checked?i<0&&(e.bubbleUp=n.concat(null)):i>-1&&(e.bubbleUp=n.slice(0,i).concat(n.slice(i+1)))}else e.bubbleUp=r}}})])]),e._v(" "),n("button",{staticClass:"btn btn-success",on:{click:function(t){e.boxCount++}}},[e._v("Add Box")]),e._v(" "),n("button",{staticClass:"btn btn-danger",on:{click:function(t){e.boxCount=Math.max(0,e.boxCount-1)}}},[e._v("Remove Box")])])])]),e._v(" "),e._l(e.boxCount,function(t){return n("dnd-grid-box",{key:t,attrs:{boxId:t,dragSelector:"div.card-header"}},[n("div",{staticClass:"card demo-box"},[n("div",{staticClass:"card-header"},[e._v("\n            Box "+e._s(t)+"\n          ")])])])})],2)],1)])},r=[],i={render:a,staticRenderFns:r};t.a=i},function(e,t){},function(e,t,n){"use strict";var a=n(145),r=n.n(a),i=n(95),o=n.n(i);t.a={name:"map",components:{},data:function(){return{show:!0,geojson:{},options:{zoomControl:!1,dragging:!1,scrollWheelZoom:!1,doubleClickZoom:!1,boxZoom:!1,tap:!1,zoomSnap:.25,zoomDelta:.25,attributionControl:!1},style:function(){return{weight:2,color:"#ECEFF1",opacity:1,dashArray:"3",fillColor:"#feb24c",fillOpacity:.6}},circle:{center:r.a.latLng(36,127),radius:4500},url:"http://api.tiles.mapbox.com/v4/mapbox.light/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",attribution:'&copy; <a href="http://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'}},created:function(){var e=this;o.a.get("/static/geo/ctprvn.json").then(function(t){e.geojson.map=t.data,e.setMap()}),o.a.get("/static/geo/sig/11.json").then(function(t){e.geojson.seoul=t.data,e.setMapSeoul()})},methods:{setMap:function(){var e=r.a.map("map",this.options);e.setView([36,127.5],6.75);var t=r.a.geoJSON(null,{style:this.style,onEachFeature:function(e,n){n.on({mouseover:function(e){var t=e.target;t.setStyle({color:"#666",dashArray:"",fillOpacity:1}),r.a.Browser.ie||r.a.Browser.opera||r.a.Browser.edge||t.bringToFront()},mouseout:function(e){t.resetStyle(e.target)}})}});t.addData(this.geojson.map),e.addLayer(t)},setMapSeoul:function(){var e=r.a.map("seoul",this.options);e.setView([37.55,126.98],10.75);var t=r.a.geoJSON(null,{style:this.style,onEachFeature:function(e,n){n.on({mouseover:function(e){var t=e.target;t.setStyle({color:"#666",dashArray:"",fillOpacity:1}),r.a.Browser.ie||r.a.Browser.opera||r.a.Browser.edge||t.bringToFront()},mouseout:function(e){t.resetStyle(e.target)}})}});t.addData(this.geojson.seoul),e.addLayer(t)}}}},function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"animated fadeIn"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-6"},[n("div",{staticClass:"map",attrs:{id:"map"}})]),e._v(" "),n("div",{staticClass:"col-6"},[n("div",{staticClass:"map",attrs:{id:"seoul"}})])])])}],i={render:a,staticRenderFns:r};t.a=i},function(e,t){},function(e,t,n){"use strict";t.a={name:"process"}},function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"animated fadeIn"},[n("div",{staticClass:"row"},[n("b-embed",{attrs:{type:"iframe",src:"//jsfiddle.net/younyang80/qbtqqxqo/25/embedded/result/",allowfullscreen:""}})],1)])},r=[],i={render:a,staticRenderFns:r};t.a=i},function(e,t,n){"use strict";t.a={props:{title:{type:String},name:{type:String},small:{type:String,default:""}},computed:{navList:function(){var e=this.getRoutes||{};return{isNav:void 0!==e.children,list:e.children}},getRoutes:function(){var e=this,t=[];return function n(a){for(var r in a)a.hasOwnProperty(r)&&(a[r].name===e.name?t.push(a[r]):a[r].hasOwnProperty("children")&&n(a[r].children))}(this.$router.options.routes),t[0]}}}},function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-sub-title"},[n("h2",[n("i",{staticClass:"fa fa-circle-o"}),e._v(" "+e._s(e.title)+" "),""!==e.small?n("small",[e._v(e._s(e.small))]):e._e()]),e._v(" "),e.navList.isNav?n("b-nav",{staticClass:"sub-navs",attrs:{pills:""}},e._l(e.navList.list,function(t){return n("b-nav-item",{key:t.path,attrs:{to:t.path}},[e._v("\n        "+e._s(t.title)+"\n    ")])})):e._e()],1)},r=[],i={render:a,staticRenderFns:r};t.a=i},function(e,t,n){"use strict";var a=n(189),r=n(211),i=n(11),o=i(a.a,r.a,null,null,null);t.a=o.exports},function(e,t,n){"use strict";var a=n(190),r=n(191);t.a={name:"full",components:{AppHeader:r.b,Sidebar:r.c,Breadcrumb:r.a},data:function(){return{nav:a.a.items}},computed:{name:function(){return this.$route.name||this.$route.matched[2].name},list:function(){return this.$route.matched.slice(0,3)}}}},function(e,t,n){"use strict";t.a={items:[{name:"Dashboard",url:"/dashboard",icon:"icon-grid"},{name:"Service",url:"/service",icon:"icon-support",children:[{name:"Service 관리",url:"/service/service"},{name:"Bucket 관리",url:"/service/bucket"}]},{name:"Configuration",url:"/configuration",icon:"icon-puzzle",children:[{name:"Edge 관리",url:"/configuration/edge"},{name:"Cache Throttling 관리",url:"/configuration/cache"},{name:"Referrer 관리",url:"/configuration/referrer"},{name:"Pop 관리",url:"/configuration/pop"}]},{name:"Policy",url:"/policy",icon:"icon-equalizer",children:[{name:"One-Time URL",url:"/policy/onetime"},{name:"PoP Preference",url:"/policy/popPreference"},{name:"GTM Config",url:"/policy/gtmConfig"},{name:"GEO IP",url:"/policy/geoIp"},{name:"IP Restriction",url:"/policy/ipRestriction"}]},{name:"Workflow",url:"/workflow",icon:"icon-share",children:[{name:"Service Processing 관리",url:"/workflow/service"},{name:"Domain Processing 관리",url:"/workflow/domain"},{name:"Preload",url:"/workflow/contPreload"},{name:"Purge",url:"/workflow/contPurge"}]},{title:!0,name:"UI Component Sample",class:"",wrapper:{element:"",attributes:{}}},{name:"Process(drag&drop)",url:"/process",icon:"icon-chart"},{name:"Map",url:"/map",icon:"icon-map"},{name:"Grid UI",url:"/gridUI",icon:"icon-grid"}]}},function(e,t,n){"use strict";var a=n(192),r=(n(141),n(195)),i=n(198);n(140);n.d(t,"a",function(){return a.a}),n.d(t,"b",function(){return r.a}),n.d(t,"c",function(){return i.a})},function(e,t,n){"use strict";var a=n(193),r=n(194),i=n(11),o=i(a.a,r.a,null,null,null);t.a=o.exports},function(e,t,n){"use strict";t.a={props:{list:{type:Array,required:!0,default:function(){return[]}}},methods:{isLast:function(e){return e===this.list.length-1},getPath:function(e){return""===e?"/":e},showName:function(e){return e.meta&&e.meta.label&&(e=e.meta&&e.meta.label),e.name&&(e=e.name),e}}}},function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ol",{staticClass:"breadcrumb"},e._l(e.list,function(t,a){return n("li",{staticClass:"breadcrumb-item"},[e.isLast(a)?n("span",{staticClass:"active"},[e._v(e._s(e.showName(t)))]):n("router-link",{attrs:{to:e.getPath(t.path)}},[e._v(e._s(e.showName(t)))])],1)}))},r=[],i={render:a,staticRenderFns:r};t.a=i},function(e,t,n){"use strict";var a=n(196),r=n(197),i=n(11),o=i(a.a,r.a,null,null,null);t.a=o.exports},function(e,t,n){"use strict";var a=n(66);t.a={name:"header",data:function(){return{userName:null}},mounted:function(){this.userName=a.a.getUserInfo("operatorName")},methods:{logout:function(){var e=this;this.$https.put("/logout").then(function(){a.a.logout(function(){e.$router.push({name:"Login"})})})},sidebarToggle:function(e){e.preventDefault(),document.body.classList.toggle("sidebar-hidden")},sidebarMinimize:function(e){e.preventDefault(),document.body.classList.toggle("sidebar-minimized")},mobileSidebarToggle:function(e){e.preventDefault(),document.body.classList.toggle("sidebar-mobile-show")}}}},function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"app-header navbar"},[n("button",{staticClass:"navbar-toggler mobile-sidebar-toggler d-lg-none",attrs:{type:"button"},on:{click:e.mobileSidebarToggle}},[e._v("☰")]),e._v(" "),n("b-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[n("span",{staticClass:"sr-only"},[e._v("SK V Project")])]),e._v(" "),n("button",{staticClass:"navbar-toggler sidebar-toggler d-md-down-none",attrs:{type:"button"},on:{click:e.sidebarMinimize}},[e._v("☰")]),e._v(" "),n("b-nav",{staticClass:"ml-auto",attrs:{"is-nav-bar":""}},[n("b-nav-item-dropdown",{staticClass:"d-md-down-none",attrs:{right:"","no-caret":""}},[n("template",{slot:"button-content"},[n("i",{staticClass:"icon-bell"}),n("span",{staticClass:"badge badge-pill badge-danger"},[e._v("3")])]),e._v(" "),n("b-dropdown-item",[e._v("알림 메세지 1")]),e._v(" "),n("b-dropdown-item",[e._v("알림 메세지 2222")]),e._v(" "),n("b-dropdown-item",[e._v("알림 메세지 33")])],2),e._v(" "),n("b-nav-item-dropdown",{attrs:{right:""}},[n("template",{slot:"button-content"},[n("span",{staticClass:"d-md-down-none"},[e._v(e._s(e.userName))])]),e._v(" "),n("b-dropdown-item",[n("i",{staticClass:"fa fa-user"}),e._v(" 회원정보 수정")]),e._v(" "),n("b-dropdown-item",{on:{click:e.logout}},[n("i",{staticClass:"fa fa-lock"}),e._v(" Logout")])],2)],1)],1)},r=[],i={render:a,staticRenderFns:r};t.a=i},function(e,t,n){"use strict";function a(e){n(199)}var r=n(200),i=n(210),o=n(11),s=a,c=o(r.a,i.a,s,null,null);t.a=c.exports},function(e,t){},function(e,t,n){"use strict";var a=n(201),r=n(204),i=n(207);t.a={name:"sidebar",props:{navItems:{type:Array,required:!0,default:function(){return[]}}},components:{SidebarNavDropdown:a.a,SidebarNavLink:r.a,SidebarNavTitle:i.a},methods:{handleClick:function(e){e.preventDefault(),e.target.parentElement.classList.toggle("open")}}}},function(e,t,n){"use strict";var a=n(202),r=n(203),i=n(11),o=i(a.a,r.a,null,null,null);t.a=o.exports},function(e,t,n){"use strict";t.a={props:{name:{type:String,default:""},url:{type:String,default:""},icon:{type:String,default:""}},methods:{handleClick:function(e){e.preventDefault(),e.target.parentElement.classList.toggle("open")}}}},function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-link",{staticClass:"nav-item nav-dropdown",attrs:{tag:"li",to:e.url,disabled:""}},[n("div",{staticClass:"nav-link nav-dropdown-toggle",on:{click:e.handleClick}},[n("i",{class:e.icon}),e._v(" "+e._s(e.name))]),e._v(" "),n("ul",{staticClass:"nav-dropdown-items"},[e._t("default")],2)])},r=[],i={render:a,staticRenderFns:r};t.a=i},function(e,t,n){"use strict";var a=n(205),r=n(206),i=n(11),o=i(a.a,r.a,null,null,null);t.a=o.exports},function(e,t,n){"use strict";t.a={name:"sidebar-nav-link",props:{name:{type:String,default:""},url:{type:String,default:""},icon:{type:String,default:""},badge:{default:""}}}},function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-link",{staticClass:"nav-link",attrs:{to:e.url}},[n("i",{class:e.icon}),e._v(" "+e._s(e.name)+"\n  "),n("b-badge",{attrs:{variant:e.badge.variant}},[e._v(e._s(e.badge.text))])],1)},r=[],i={render:a,staticRenderFns:r};t.a=i},function(e,t,n){"use strict";var a=n(208),r=n(209),i=n(11),o=i(a.a,r.a,null,null,null);t.a=o.exports},function(e,t,n){"use strict";t.a={props:{name:{type:String,default:""},classes:{type:String,default:""},wrapper:{type:Object,default:function(){}}}}},function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"nav-title",class:e.classes},[e.wrapper&&e.wrapper.element?[n(e.wrapper.element,e._b({tag:"component"},"component",e.wrapper.attributes,!1),[e._v("\n      "+e._s(e.name)+"\n    ")])]:[e._v("\n    "+e._s(e.name)+"\n  ")]],2)},r=[],i={render:a,staticRenderFns:r};t.a=i},function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sidebar"},[n("nav",{staticClass:"sidebar-nav"},[n("ul",{staticClass:"nav"},e._l(e.navItems,function(t,a){return n("li",{staticClass:"nav-item"},[t.title?[n("SidebarNavTitle",{attrs:{name:t.name,classes:t.class,wrapper:t.wrapper}})]:t.divider?[n("li",{staticClass:"divider"})]:[t.children?[n("SidebarNavDropdown",{attrs:{name:t.name,url:t.url,icon:t.icon}},[e._l(t.children,function(a,r){return[a.children?[n("SidebarNavDropdown",{attrs:{name:a.name,url:a.url,icon:a.icon}},e._l(t.children,function(e,t){return n("li",{staticClass:"nav-item"},[n("SidebarNavLink",{attrs:{name:e.name,url:e.url,icon:e.icon,badge:e.badge}})],1)}))]:[n("li",{staticClass:"nav-item"},[n("SidebarNavLink",{attrs:{name:a.name,url:a.url,icon:a.icon,badge:a.badge}})],1)]]})],2)]:[n("SidebarNavLink",{attrs:{name:t.name,url:t.url,icon:t.icon,badge:t.badge}})]]],2)})),e._v(" "),e._t("default"),e._v(" "),n("div",{slot:"footer"})],2)])},r=[],i={render:a,staticRenderFns:r};t.a=i},function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app"},[n("AppHeader"),e._v(" "),n("div",{staticClass:"app-body"},[n("Sidebar",{attrs:{navItems:e.nav}}),e._v(" "),n("main",{staticClass:"main"},[n("div",{staticClass:"page-title"},[n("h1",[e._v(e._s(e.name))]),e._v(" "),n("breadcrumb",{attrs:{list:e.list}})],1),e._v(" "),n("div",{staticClass:"container-fluid"},[n("router-view")],1)])],1)],1)},r=[],i={render:a,staticRenderFns:r};t.a=i}]),[146]);