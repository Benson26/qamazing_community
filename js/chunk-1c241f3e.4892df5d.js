(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c241f3e"],{1093:function(n,e,o){"use strict";o.r(e);var t=function(){var n=this,e=n.$createElement,o=n._self._c||e;return o("d2-container",{staticClass:"page",attrs:{type:"full"}},[o("d2-grid-layout",n._b({on:{"layout-updated":n.layoutUpdatedHandler}},"d2-grid-layout",n.layout,!1),n._l(n.layout.layout,(function(e,t){return o("d2-grid-item",n._b({key:t,on:{resize:n.resizeHandler,move:n.moveHandler,resized:n.resizedHandler,moved:n.movedHandler}},"d2-grid-item",e,!1),[o("el-card",{staticClass:"page_card",attrs:{shadow:"never"}},[o("el-tag",{attrs:{slot:"header",size:"mini",type:"info"},slot:"header"},[n._v("Card "+n._s(e.i))]),"0"===e.i?[o("div",{staticClass:"d2-mb"},[n._v("拖拽卡片调整位置")]),o("div",{staticClass:"d2-mb"},[n._v("拖拽卡片右下角的手柄调整卡片大小")]),o("div",{staticClass:"d2-mb"},[n._v("在控制台打印出数据变化")])]:n._e()],2)],1)})),1)],1)},a=[],c=(o("99af"),o("159b"),o("8bbf")),i=o.n(c),r=o("4fb3");i.a.component("d2-grid-layout",r["GridLayout"]),i.a.component("d2-grid-item",r["GridItem"]);var l={data:function(){return{layout:{layout:[{x:0,y:0,w:4,h:10,i:"0"},{x:4,y:0,w:2,h:5,i:"1"},{x:6,y:0,w:4,h:5,i:"2"},{x:10,y:0,w:2,h:10,i:"3"},{x:4,y:5,w:4,h:5,i:"4"},{x:8,y:5,w:2,h:5,i:"5"},{x:0,y:10,w:8,h:5,i:"6"},{x:8,y:10,w:4,h:5,i:"7"}],colNum:12,rowHeight:30,isDraggable:!0,isResizable:!0,isMirrored:!1,verticalCompact:!0,margin:[10,10],useCssTransforms:!0}}},mounted:function(){this.showInfo()},methods:{log:function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"log",e=arguments.length,o=new Array(e>1?e-1:0),t=1;t<e;t++)o[t-1]=arguments[t];0===o.length?console.log(n):(console.group(n),o.forEach((function(n){console.log(n)})),console.groupEnd())},showInfo:function(){this.$notify({title:"提示",message:"你可以按住卡片拖拽改变位置；或者在每个卡片的右下角拖动，调整卡片大小"})},layoutUpdatedHandler:function(n){console.group("layoutUpdatedHandler"),n.forEach((function(n){console.log("{'x': ".concat(n.x,", 'y': ").concat(n.y,", 'w': ").concat(n.w,", 'h': ").concat(n.h,", 'i': '").concat(n.i,"'},"))})),console.groupEnd()},resizeHandler:function(n,e,o){this.log("resizeHandler","i: ".concat(n,", newH: ").concat(e,", newW: ").concat(o))},moveHandler:function(n,e,o){this.log("moveHandler","i: ".concat(n,", newX: ").concat(e,", newY: ").concat(o))},resizedHandler:function(n,e,o,t,a){this.log("resizedHandler","i: ".concat(n,", newH: ").concat(e,", newW: ").concat(o,", newHPx: ").concat(t,", newWPx: ").concat(a))},movedHandler:function(n,e,o){this.log("movedHandler","i: ".concat(n,", newX: ").concat(e,", newY: ").concat(o))}}},d=l,s=(o("f2e8"),o("2877")),u=Object(s["a"])(d,t,a,!1,null,"25a767c4",null);e["default"]=u.exports},eb3c:function(n,e,o){},f2e8:function(n,e,o){"use strict";var t=o("eb3c"),a=o.n(t);a.a}}]);