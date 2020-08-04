(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d00ad840"],{1198:function(e,i,t){"use strict";t.r(i);var n=function(){var e=this,i=e.$createElement,n=e._self._c||i;return n("d2-container",{attrs:{type:"full"}},[n("div",{ref:"boxSize",staticClass:"kline-experiment"},[n("div",{ref:"klineCard",staticClass:"kline-chart card"},[e.watermark?n("div",{staticClass:"watermark"},[n("img",{attrs:{src:t("2f98"),alt:"",width:"300",height:"300"}})]):e._e(),e.klineFlag?n("kline",{ref:"kline",attrs:{chartSize:e.chartSize}}):e._e()],1),n("div",{staticClass:"config card"},[n("p",[e._v("配置")]),n("el-form",[n("el-input",{attrs:{placeholder:"请输入ip地址"},model:{value:e.formLabelAlign.ip,callback:function(i){e.$set(e.formLabelAlign,"ip","string"===typeof i?i.trim():i)},expression:"formLabelAlign.ip"}}),n("el-input",{attrs:{placeholder:"请输入端口"},model:{value:e.formLabelAlign.port,callback:function(i){e.$set(e.formLabelAlign,"port","string"===typeof i?i.trim():i)},expression:"formLabelAlign.port"}}),n("el-input",{attrs:{placeholder:"请输入股票代码"},model:{value:e.formLabelAlign.code,callback:function(i){e.$set(e.formLabelAlign,"code","string"===typeof i?i.trim():i)},expression:"formLabelAlign.code"}}),n("el-select",{attrs:{placeholder:"请选择频率"},model:{value:e.formLabelAlign.frequence,callback:function(i){e.$set(e.formLabelAlign,"frequence","string"===typeof i?i.trim():i)},expression:"formLabelAlign.frequence"}},e._l(e.frequenceOptions,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),n("el-date-picker",{attrs:{type:"date",placeholder:"请输入开始时间"},model:{value:e.formLabelAlign.start,callback:function(i){e.$set(e.formLabelAlign,"start",i)},expression:"formLabelAlign.start"}}),n("el-date-picker",{attrs:{type:"date",placeholder:"请输入结束时间"},model:{value:e.formLabelAlign.end,callback:function(i){e.$set(e.formLabelAlign,"end",i)},expression:"formLabelAlign.end"}}),n("el-select",{attrs:{placeholder:"请选择market"},model:{value:e.formLabelAlign.market,callback:function(i){e.$set(e.formLabelAlign,"market","string"===typeof i?i.trim():i)},expression:"formLabelAlign.market"}},e._l(e.options,(function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),n("el-input",{attrs:{placeholder:"请输入QAindex"},model:{value:e.QAindex,callback:function(i){e.QAindex="string"===typeof i?i.trim():i},expression:"QAindex"}}),n("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.formLabelAlign.raw,callback:function(i){e.$set(e.formLabelAlign,"raw",i)},expression:"formLabelAlign.raw"}})],1),n("el-button",{staticStyle:{"margin-top":"20px"},attrs:{type:"danger"},on:{click:e.confirm}},[e._v("确认")]),n("br"),n("el-input",{staticStyle:{"margin-top":"20px"},attrs:{placeholder:"请输入需要跳转的日期"},model:{value:e.jumpTime,callback:function(i){e.jumpTime="string"===typeof i?i.trim():i},expression:"jumpTime"}}),n("el-button",{staticStyle:{"margin-top":"5px"},attrs:{type:"success"},on:{click:e.jump}},[e._v("跳转日期")])],1)])])},l=[],a=(t("a15b"),t("1276"),t("42e4")),r=t("6e85"),o=t.n(r),s={data:function(){return{klineFlag:!1,watermark:!1,chartSize:{},QAindex:"",jumpTime:20200325,formLabelAlign:{ip:"http://127.0.0.1",port:"8029/testk",code:"000001",frequence:"day",start:"2020-03-01",end:new Date,market:"stock_cn",raw:!0},options:[{value:"stock_cn",label:"股票"},{value:"index_cn",label:"指数"},{value:"future_cn",label:"期货"},{value:"option_cn",label:"期权"},{value:"self",label:"自定义"}],frequenceOptions:[{value:"1min",label:"1min"},{value:"5min",label:"5min"},{value:"15min",label:"15min"},{value:"30min",label:"30min"},{value:"60min",label:"60min"},{value:"day",label:"day"}]}},computed:{QAindexBefore:function(){var e=o()(this.formLabelAlign.start).format("YYYY-MM-DD").split("-"),i=o()(this.formLabelAlign.end).format("YYYY-MM-DD").split("-");return this.formLabelAlign.code+"_"+e.join("")+"_"+i.join("")+"_"}},components:{kline:a["default"]},mounted:function(){this.setKlineChartSize(),this.monitor()},methods:{monitor:function(){var e=this;this.$erd.listenTo(this.$refs.boxSize,(function(i){var t=i.offsetWidth-375,n=i.offsetHeight-10;e.$refs.kline.OnSize(t,n)}))},setKlineChartSize:function(){var e=this;this.$nextTick((function(){e.chartSize.width=e.$refs.klineCard.offsetWidth-10,e.chartSize.height=e.$refs.klineCard.offsetHeight-10,e.klineFlag=!0}))},confirm:function(){var e=this.formLabelAlign.ip+":"+this.formLabelAlign.port+"?code="+this.formLabelAlign.code;if(""!==this.formLabelAlign.frequence&&(e=e+"&frequence="+this.formLabelAlign.frequence),""!==this.formLabelAlign.start&&(e=e+"&start="+o()(this.formLabelAlign.start).format("YYYY-MM-DD")),""!==this.formLabelAlign.end&&(e=e+"&end="+o()(this.formLabelAlign.end).format("YYYY-MM-DD")),""!==this.formLabelAlign.market&&(e=e+"&market="+this.formLabelAlign.market),""!==this.formLabelAlign.raw&&(e=e+"&raw="+this.formLabelAlign.raw),!1===this.formLabelAlign.raw)switch(this.formLabelAlign.frequence){case"day":this.$refs.kline.KLine.Option.KLine.Period=0;break;case"60min":this.$refs.kline.KLine.Option.KLine.Period=8;break;case"30min":this.$refs.kline.KLine.Option.KLine.Period=7;break;case"15min":this.$refs.kline.KLine.Option.KLine.Period=6;break;case"5min":this.$refs.kline.KLine.Option.KLine.Period=5;break;case"1min":this.$refs.kline.KLine.Option.KLine.Period=4;break}else"day"===this.formLabelAlign.frequence?this.$refs.kline.KLine.Option.KLine.Period=0:this.$refs.kline.KLine.Option.KLine.Period=4;this.watermark=!0,this.$refs.kline.raw=this.formLabelAlign.raw,this.$refs.kline.QAindex=this.QAindexBefore+this.QAindex,this.$refs.kline.indicatorURL=this.indicatorURL,this.$refs.kline.URL=e,this.$refs.kline.isRequest=!0,this.$refs.kline.recreate()},jump:function(){this.$refs.kline.changeFirstShowDate(this.jumpTime)}}},f=s,c=(t("c8ab"),t("e90f"),t("2877")),m=Object(c["a"])(f,n,l,!1,null,"390ddc7f",null);i["default"]=m.exports},"27e4":function(e,i,t){},"2f98":function(e,i,t){e.exports=t.p+"img/QUANTAXIS_LOGO.37038f88.png"},7813:function(e,i,t){},c8ab:function(e,i,t){"use strict";var n=t("7813"),l=t.n(n);l.a},e90f:function(e,i,t){"use strict";var n=t("27e4"),l=t.n(n);l.a}}]);