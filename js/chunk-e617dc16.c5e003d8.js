(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e617dc16","chunk-1011ab15"],{"2cdc":function(e,t,r){"use strict";r.r(t);r("b0c0"),r("d3b7");var a=r("cfab");t["default"]={props:{id:{type:String,required:!0}},data:function(){return{form:{name:"",address:""}}},methods:{resetFormData:function(){this.form={name:"",address:""}},getFormData:function(e){var t=this;return new Promise((function(r,n){t.resetFormData(),Object(a["a"])(e).then((function(e){var a=e.name,n=e.address;t.form={name:a,address:n},t.$message.success("getFormData"),r()})).catch((function(e){console.log("err",e),n(e)}))}))},handleSubmit:function(){this.$notify({title:"Submit",message:"提交了表单",type:"info"})}}}},"33a8":function(e,t,r){"use strict";var a=r("430d"),n=r.n(a);n.a},"430d":function(e,t,r){},cfab:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return s}));var a=r("9bd2d");function n(){return Object(a["a"])({url:"/demo/business/issues/142/fetch",method:"get"})}function s(e){return Object(a["a"])({url:"/demo/business/issues/142/detail",method:"get",params:{id:e}})}},e2b9:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("d2-container",{staticClass:"page",attrs:{type:"card"}},[r("el-form",{ref:"form",staticClass:"page--form",attrs:{model:e.form,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"姓名"}},[r("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),r("el-form-item",{attrs:{label:"地址"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.handleSubmit}},[e._v("修改")])],1)],1)],1)},n=[],s=r("2cdc"),o={mixins:[s["default"]],beforeRouteEnter:function(e,t,r){var a=e.params.id;r(a?function(e){e.resetFormData(),e.getFormData(a)}:new Error("未指定ID"))},beforeRouteUpdate:function(e,t,r){var a=e.params.id;a?(this.resetFormData(),this.getFormData(a),r()):r(new Error("未指定ID"))}},i=o,c=(r("33a8"),r("2877")),u=Object(c["a"])(i,a,n,!1,null,null,null);t["default"]=u.exports}}]);