(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f6fba0b8"],{"0084":function(t,e,i){"use strict";function a(){var t=JSON.parse(localStorage.getItem("URL")),e="127.0.0.1",i="127.0.0.1",a="127.0.0.1",r="127.0.0.1",s="127.0.0.1",n=t&&t.accURL?t.accURL:"http://".concat(e,":10115"),o=t&&t.pnlURL?t.pnlURL:"http://".concat(e,":8028"),c=t&&t.listURL?t.listURL:"http://".concat(a,":8020"),l=t&&t.wsURL?t.wsURL:"ws://".concat(e,":10115/ws/"),h=t&&t.selectedURL?t.selectedURL:"http://".concat(i,":8022"),d=t&&t.indicatorURL?t.indicatorURL:"http://".concat(e,":8030"),u=t&&t.backtestURL?t.backtestURL:"http://127.0.0.1:8010",g=t&&t.innerURL?t.innerURL:"http://".concat(r,":8028"),f=t&&t.financialURL?t.financialURL:"http://".concat(s,":8018"),p=t&&t.groupURL?t.groupURL:"http://".concat(s,":8018"),b=t&&t.orderURL?t.orderURL:"http://".concat(s,":8018"),w=t&&t.klineURL?t.klineURL:"http://".concat(e,":8029"),v=t&&t.cashURL?t.cashURL:"http://".concat(s,":8020"),R=t&&t.backtestqifiURL?t.backtestqifiURL:"http://".concat(r,":8019"),x=t&&t.varietiesURL?t.varietiesURL:"http://".concat(s,":8018");return{accURL:n,pnlURL:o,listURL:c,wsURL:l,selectedURL:h,indicatorURL:d,backtestURL:u,innerURL:g,financialURL:f,groupURL:p,orderURL:b,klineURL:w,cashURL:v,backtestqifiURL:R,varietiesURL:x}}i.d(e,"a",(function(){return a}))},1148:function(t,e,i){"use strict";var a=i("a691"),r=i("1d80");t.exports="".repeat||function(t){var e=String(r(this)),i="",s=a(t);if(s<0||s==1/0)throw RangeError("Wrong number of repetitions");for(;s>0;(s>>>=1)&&(e+=e))1&s&&(i+=e);return i}},"408a":function(t,e,i){var a=i("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=a(t))throw TypeError("Incorrect invocation");return+t}},"4e82":function(t,e,i){"use strict";var a=i("23e7"),r=i("1c0b"),s=i("7b0b"),n=i("d039"),o=i("b301"),c=[],l=c.sort,h=n((function(){c.sort(void 0)})),d=n((function(){c.sort(null)})),u=o("sort"),g=h||!d||u;a({target:"Array",proto:!0,forced:g},{sort:function(t){return void 0===t?l.call(s(this)):l.call(s(this),r(t))}})},"958b":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("d2-container",{attrs:{type:"full"}},[i("div",{ref:"group",staticClass:"group"},[i("div",{staticClass:"list-side card"}),i("div",{staticClass:"strategy-chart"},[i("div",{staticClass:"lineChart card"},[i("ve-line",{attrs:{"legend-visible":!1,width:t.lineChartSize.width,height:t.lineChartSize.height,data:t.lineChartData,settings:t.lineChartSettings,extend:t.lineExtend,colors:t.colors}}),i("div",{staticClass:"option"},[i("div",{staticClass:"switch"},[i("el-switch",{attrs:{"active-color":"#409EFF","inactive-color":"#ccc"},on:{change:t.switchStrategy},model:{value:t.switchValue,callback:function(e){t.switchValue=e},expression:"switchValue"}})],1),i("div",{staticClass:"slider"},[i("el-slider",{attrs:{max:t.sliderMax,"show-input":""},on:{change:t.changePNum},model:{value:t.sliderValue,callback:function(e){t.sliderValue=e},expression:"sliderValue"}})],1)])],1),i("div",{staticClass:"bottom card"},[i("el-radio-group",{on:{change:t.getData},model:{value:t.weight_model,callback:function(e){t.weight_model=e},expression:"weight_model"}},[i("el-radio-button",{attrs:{label:"QAW"}},[t._v("QAW")]),i("el-radio-button",{attrs:{label:"ERC"}},[t._v("风险平价组合")]),i("el-radio-button",{attrs:{label:"HRP"}},[t._v("分层风险平价")]),i("el-radio-button",{attrs:{label:"IVP"}},[t._v("逆方差加权")])],1)],1)]),i("div",{staticClass:"right card"},[i("vue-scroll",{staticClass:"tab1",attrs:{ops:t.ops}},[i("ve-bar",{attrs:{data:t.chartData,settings:t.chartSettings,extend:t.barExtend,height:t.barHeight,events:t.barEvents()}})],1)],1)])])},r=[],s=(i("99af"),i("fb6a"),i("4e82"),i("b0c0"),i("b680"),i("b64b"),i("d3b7"),i("96cf"),i("0084")),n={data:function(){return{groupURL:"",barHeight:"100%",switchValue:!1,weight_model:"QAW",sliderValue:0,sliderMax:0,curLi:0,portfolioSelectedObj:{},allSelectedObj:{},listData:[1,2,3],lineChartData:{columns:[],rows:[]},strategyArr:[],portfolioArr:[],strategy_data:[],portfolio_data:[],colors:["#c23531","#2f4554","#61a0a8","#d48265","#91c7ae","#749f83","#ca8622","#bda29a","#6e7074","#546570","#c4ccd3","#4BABDE","#FFDE76","#E43C59","#37A2DA"],lineChartSettings:{selectedMode:"single",hoverAnimation:!1,scale:[!0,!0]},lineExtend:{title:{text:"",x:"center",y:"top",textAlign:"left",textStyle:{color:"#666",fontSize:14,fontWeight:100}},legend:{show:!1,selected:[]},yAxis:{type:"value"},grid:{top:30,bottom:10}},lineChartSize:{},barExtend:{grid:{top:30,bottom:10,right:20},tooltip:{formatter:function(t){for(var e=t[0].name+"<br/>",i=0;i<t.length;i++){var a=t[i].value.toFixed(4);e+='<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:'+t[i].color+';"></span>'+t[i].seriesName+"："+a+"<br/>"}return e}},series:{type:"bar",itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0},normal:{barBorderRadius:[0,3,3,0],color:function(){var t=Math.floor(256*Math.random()),e=Math.floor(256*Math.random()),i=Math.floor(256*Math.random()),a="rgba(".concat(t,",").concat(e,",").concat(i,",1)");return a}}}}},chartSettings:{dimension:["index"],metrics:[],scale:[!0,!0]},chartData:{columns:[],rows:[]},ops:{vuescroll:{mode:"native"},scrollPanel:{},rail:{background:"#01a99a",opacity:0,size:"10px",specifyBorderRadius:!1,gutterOfEnds:null,gutterOfSide:"0px",keepShow:!0,border:"none"},bar:{keepShow:!0,hoverStyle:!0,onlyShowBarOnScroll:!0,background:"#ccc"}}}},mounted:function(){this.groupURL=Object(s["a"])().groupURL,this.monitor(),this.getData()},methods:{monitor:function(){var t=this;this.$erd.listenTo(this.$refs.group,(function(e){var i=e.offsetWidth,a=e.offsetHeight;t.lineChartSize={width:.6*(i-300)+"px",height:a*(2/3)-60+"px"}}))},getData:function(){var t,e,i;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return t=this.$loading({lock:!0,text:"正在加载中",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),a.next=3,regeneratorRuntime.awrap(this.$http.get(this.groupURL+"/portfolioplus?weight="+this.weight_model));case 3:e=a.sent,i=e.res,t.close(),this.dealData(i),this.sliderValue=this.strategyArr.length-2,this.sliderMax=this.strategyArr.length-2;case 9:case"end":return a.stop()}}),null,this)},selectLi:function(t){this.curLi=t},changePNum:function(){var t,e;return regeneratorRuntime.async((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,regeneratorRuntime.awrap(this.$http.post(this.groupURL+"/portfolioplus?n="+this.sliderValue+"&weight="+this.weight_model));case 2:t=i.sent,e=t.res,this.dealData(e);case 5:case"end":return i.stop()}}),null,this)},dealData:function(t){this.strategy_data=t.strategy_data,this.portfolio_data=t.portfolio_data,this.strategyArr=Object.keys(this.strategy_data[0]),this.portfolioArr=Object.keys(this.portfolio_data[0]);var e=t.weights,i=Object.keys(e[0]);this.chartSettings.metrics=[i[1]],this.chartData.columns=i,e.sort((function(t,e){return t[i[1]]-e[i[1]]})),this.chartData.rows=e;var a=this.strategyArr.slice(1);for(var r in this.selectObj={},a)this.selectObj[a[r]]=!0;this.lineExtend.legend.selected=this.selectObj,this.setBarHeight(),this.switchStrategy()},switchStrategy:function(){if(!0===this.switchValue){for(var t in this.lineChartData.columns=this.strategyArr,this.lineChartData.rows=this.strategy_data,this.selectObj)this.selectObj[t]=!0;this.lineExtend.legend.selected=this.selectObj,this.lineExtend.title.text=""}else{for(var e in this.lineChartData.columns=this.portfolioArr,this.lineChartData.rows=this.portfolio_data,this.selectObj)this.selectObj[e]=!1,this.selectObj["portfolio"]=!0;this.lineExtend.legend.selected=this.selectObj,this.lineExtend.title.text="portfolio"}},setBarHeight:function(){this.chartData.rows.length<=10&&this.chartData.rows.length>4?this.barHeight=40*this.chartData.rows.length+"px":this.chartData.rows.length<=4&&this.chartData.rows.length>1?this.barHeight=60*this.chartData.rows.length+"px":1===this.chartData.rows.length?this.barHeight="100px":this.barHeight=35*this.chartData.rows.length+"px"},barEvents:function(){var t=this;return{click:function(e){t.switchValue=!0,t.switchStrategy();var i=e.name;for(var a in t.lineExtend.title.text=i,t.selectObj)t.selectObj[a]=!1,t.selectObj[i]=!0;t.lineExtend.legend.selected=t.selectObj}}}}},o=n,c=(i("c35d"),i("2877")),l=Object(c["a"])(o,a,r,!1,null,"272ca576",null);e["default"]=l.exports},b680:function(t,e,i){"use strict";var a=i("23e7"),r=i("a691"),s=i("408a"),n=i("1148"),o=i("d039"),c=1..toFixed,l=Math.floor,h=function(t,e,i){return 0===e?i:e%2===1?h(t,e-1,i*t):h(t*t,e/2,i)},d=function(t){var e=0,i=t;while(i>=4096)e+=12,i/=4096;while(i>=2)e+=1,i/=2;return e},u=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!o((function(){c.call({})}));a({target:"Number",proto:!0,forced:u},{toFixed:function(t){var e,i,a,o,c=s(this),u=r(t),g=[0,0,0,0,0,0],f="",p="0",b=function(t,e){var i=-1,a=e;while(++i<6)a+=t*g[i],g[i]=a%1e7,a=l(a/1e7)},w=function(t){var e=6,i=0;while(--e>=0)i+=g[e],g[e]=l(i/t),i=i%t*1e7},v=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==g[t]){var i=String(g[t]);e=""===e?i:e+n.call("0",7-i.length)+i}return e};if(u<0||u>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(f="-",c=-c),c>1e-21)if(e=d(c*h(2,69,1))-69,i=e<0?c*h(2,-e,1):c/h(2,e,1),i*=4503599627370496,e=52-e,e>0){b(0,i),a=u;while(a>=7)b(1e7,0),a-=7;b(h(10,a,1),0),a=e-1;while(a>=23)w(1<<23),a-=23;w(1<<a),b(1,1),w(2),p=v()}else b(0,i),b(1<<-e,0),p=v()+n.call("0",u);return u>0?(o=p.length,p=f+(o<=u?"0."+n.call("0",u-o)+p:p.slice(0,o-u)+"."+p.slice(o-u))):p=f+p,p}})},c35d:function(t,e,i){"use strict";var a=i("ed39"),r=i.n(a);r.a},ed39:function(t,e,i){}}]);