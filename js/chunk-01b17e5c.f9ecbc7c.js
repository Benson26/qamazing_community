(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-01b17e5c"],{"0084":function(t,e,a){"use strict";function i(){var t=JSON.parse(localStorage.getItem("URL")),e="127.0.0.1",a="127.0.0.1",i="127.0.0.1",r="127.0.0.1",n="127.0.0.1",c=t&&t.accURL?t.accURL:"http://".concat(e,":10115"),o=t&&t.pnlURL?t.pnlURL:"http://".concat(e,":8028"),s=t&&t.listURL?t.listURL:"http://".concat(i,":8020"),h=t&&t.wsURL?t.wsURL:"ws://".concat(e,":10115/ws/"),l=t&&t.selectedURL?t.selectedURL:"http://".concat(a,":8022"),L=t&&t.indicatorURL?t.indicatorURL:"http://".concat(e,":8030"),d=t&&t.backtestURL?t.backtestURL:"http://127.0.0.1:8010",R=t&&t.innerURL?t.innerURL:"http://".concat(r,":8028"),U=t&&t.financialURL?t.financialURL:"http://".concat(n,":8018"),p=t&&t.groupURL?t.groupURL:"http://".concat(n,":8018"),u=t&&t.orderURL?t.orderURL:"http://".concat(n,":8018"),b=t&&t.klineURL?t.klineURL:"http://".concat(e,":8029"),f=t&&t.cashURL?t.cashURL:"http://".concat(n,":8020"),m=t&&t.backtestqifiURL?t.backtestqifiURL:"http://".concat(r,":8019"),v=t&&t.varietiesURL?t.varietiesURL:"http://".concat(n,":8018");return{accURL:c,pnlURL:o,listURL:s,wsURL:h,selectedURL:l,indicatorURL:L,backtestURL:d,innerURL:R,financialURL:U,groupURL:p,orderURL:u,klineURL:b,cashURL:f,backtestqifiURL:m,varietiesURL:v}}a.d(e,"a",(function(){return i}))},"4b61":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("d2-container",[a("div",{staticClass:"chart"},[a("div",{staticStyle:{width:"100%",height:"100%"},attrs:{id:"treeChart"}})])])},r=[],n=(a("a15b"),a("b0c0"),a("d3b7"),a("96cf"),a("0084")),c={name:"demo-trade-treeChart",data:function(){return{myChart:null,varietiesURL:""}},mounted:function(){this.varietiesURL=Object(n["a"])().varietiesURL,this.myChart=this.$echarts.init(document.getElementById("treeChart")),this.myChart.showLoading(),this.initChart()},methods:{initChart:function(){var t=this.$echarts.format,e={title:{text:"基于风险平价的品种可视化",left:"center"},tooltip:{formatter:function(e){for(var a=e.value,i=e.treePathInfo,r=[],n=1;n<i.length;n++)r.push(i[n].name);return["<div>"+t.encodeHTML(r.join("/"))+"</div>","比重: "+t.addCommas(a)].join("")}},series:[{name:"基于风险平价的品种可视化",type:"treemap",visibleMin:300,label:{show:!0,formatter:"{b}"},upperLabel:{show:!0,height:30},itemStyle:{borderColor:"#fff"},levels:this.getLevelOption(),data:[]}]};this.getChartData(e)},getLevelOption:function(){return[{itemStyle:{borderColor:"#777",borderWidth:0,gapWidth:1},upperLabel:{show:!1}},{itemStyle:{borderColor:"#555",borderWidth:5,gapWidth:1},emphasis:{itemStyle:{borderColor:"#ddd"}}},{colorSaturation:[.35,.5],itemStyle:{borderWidth:5,gapWidth:1,borderColorSaturation:.6}}]},getChartData:function(t){var e,a;return regeneratorRuntime.async((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,regeneratorRuntime.awrap(this.$http.get(this.varietiesURL+"/block"));case 2:e=i.sent,a=e.res,console.log(a),t.series[0].data=a,this.myChart.setOption(t),this.myChart.hideLoading();case 8:case"end":return i.stop()}}),null,this)}}},o=c,s=a("2877"),h=Object(s["a"])(o,i,r,!1,null,"73ee6b3c",null);e["default"]=h.exports}}]);