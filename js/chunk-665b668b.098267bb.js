(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-665b668b","chunk-2d0aa1f6","chunk-2d0dd10e","chunk-2d0b9fd5"],{1056:function(n,e,t){"use strict";t.r(e),e["default"]="<template>\n  <div>\n    <d2-crud\n      :columns=\"columns\"\n      :data=\"data\"\n      :options=\"options\"\n      index-row\n      @current-change=\"handleCurrentChange\"/>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      columns: [\n        {\n          title: '日期',\n          key: 'date'\n        },\n        {\n          title: '姓名',\n          key: 'name'\n        },\n        {\n          title: '地址',\n          key: 'address'\n        }\n      ],\n      data: [\n        {\n          date: '2016-05-02',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1518 弄'\n        },\n        {\n          date: '2016-05-04',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1517 弄'\n        },\n        {\n          date: '2016-05-01',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1519 弄'\n        },\n        {\n          date: '2016-05-03',\n          name: '王小虎',\n          address: '上海市普陀区金沙江路 1516 弄'\n        }\n      ],\n      options: {\n        highlightCurrentRow: true\n      }\n    }\n  },\n  methods: {\n    handleCurrentChange (currentRow, oldCurrentRow) {\n      console.log(currentRow)\n      console.log(oldCurrentRow)\n    }\n  }\n}\n<\/script>"},"34fd":function(n,e){n.exports="`D2 Crud` 组件提供了单选的支持，只需要在 `options` 对象中将 `highlightCurrentRow` 属性设为 `true` 即可实现单选。之后由 `current-change` 事件来管理选中时触发的事件，它会传入 `currentRow` 和 `oldCurrentRow`。如果需要显示索引，需要配置 `index-row` 属性。代码如下：\r\n"},8099:function(n,e,t){"use strict";t.r(e);var a=t("8bbf"),d=t.n(a),r=t("d075"),o=t.n(r);d.a.use(o.a)},c6a3:function(n,e,t){"use strict";t.r(e);var a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("d2-container",[t("template",{slot:"header"},[n._v("单选")]),t("d2-crud",{attrs:{columns:n.columns,data:n.data,options:n.options,"index-row":""},on:{"current-change":n.handleCurrentChange}}),t("el-card",{staticClass:"d2-mb",attrs:{shadow:"never"}},[t("d2-markdown",{attrs:{source:n.doc}})],1),t("el-card",{staticClass:"d2-mb",attrs:{shadow:"never"}},[t("d2-highlight",{attrs:{code:n.code}})],1),t("d2-link-btn",{attrs:{slot:"footer",title:"文档",link:"https://d2.pub/zh/doc/d2-crud-v2"},slot:"footer"})],2)},d=[],r=(t("8099"),t("34fd")),o=t.n(r),s=t("1056"),c={data:function(){return{doc:o.a,code:s["default"],columns:[{title:"日期",key:"date"},{title:"姓名",key:"name"},{title:"地址",key:"address"}],data:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}],options:{highlightCurrentRow:!0}}},methods:{handleCurrentChange:function(n,e){console.log(n),console.log(e)}}},l=c,u=t("2877"),i=Object(u["a"])(l,a,d,!1,null,null,null);e["default"]=i.exports}}]);