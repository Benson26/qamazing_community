(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ce422ccc","chunk-2d208fb9"],{"0084":function(e,t,s){"use strict";function r(){var e=JSON.parse(localStorage.getItem("URL")),t="127.0.0.1",s="127.0.0.1",r="127.0.0.1",a="127.0.0.1",n="127.0.0.1",o=e&&e.accURL?e.accURL:"http://".concat(t,":10115"),i=e&&e.pnlURL?e.pnlURL:"http://".concat(t,":8028"),c=e&&e.listURL?e.listURL:"http://".concat(r,":8020"),l=e&&e.wsURL?e.wsURL:"ws://".concat(t,":10115/ws/"),d=e&&e.selectedURL?e.selectedURL:"http://".concat(s,":8022"),p=e&&e.indicatorURL?e.indicatorURL:"http://".concat(t,":8030"),u=e&&e.backtestURL?e.backtestURL:"http://127.0.0.1:8010",m=e&&e.innerURL?e.innerURL:"http://".concat(a,":8028"),f=e&&e.financialURL?e.financialURL:"http://".concat(n,":8018"),g=e&&e.groupURL?e.groupURL:"http://".concat(n,":8018"),L=e&&e.orderURL?e.orderURL:"http://".concat(n,":8018"),U=e&&e.klineURL?e.klineURL:"http://".concat(t,":8029"),h=e&&e.cashURL?e.cashURL:"http://".concat(n,":8020"),R=e&&e.backtestqifiURL?e.backtestqifiURL:"http://".concat(a,":8019"),b=e&&e.varietiesURL?e.varietiesURL:"http://".concat(n,":8018");return{accURL:o,pnlURL:i,listURL:c,wsURL:l,selectedURL:d,indicatorURL:p,backtestURL:u,innerURL:m,financialURL:f,groupURL:g,orderURL:L,klineURL:U,cashURL:h,backtestqifiURL:R,varietiesURL:b}}s.d(t,"a",(function(){return r}))},2973:function(e,t,s){},3547:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page-login"},[r("div",{staticClass:"page-login--layer page-login--layer-area"},[r("ul",{staticClass:"circles"},e._l(10,(function(e){return r("li",{key:e})})),0)]),r("div",{staticClass:"page-login--layer page-login--layer-time",attrs:{flex:"main:center cross:center"}},[e._v(e._s(e.time))]),r("div",{staticClass:"page-login--layer"},[r("div",{staticClass:"page-login--content",attrs:{flex:"dir:top main:justify cross:stretch box:justify"}},[r("div",{staticClass:"page-login--content-header"}),r("div",{staticClass:"page-login--content-main",attrs:{flex:"dir:top main:center cross:center"}},[r("img",{staticClass:"page-login--logo",attrs:{src:s("a6b0")}}),r("div",{staticClass:"page-login--form"},[r("el-card",{attrs:{shadow:"never"}},[r("el-form",{ref:"loginForm",attrs:{"label-position":"top",rules:e.rules,model:e.formLogin,size:"default"}},[r("el-form-item",{attrs:{prop:"username"}},[r("el-input",{attrs:{type:"text",placeholder:"用户名"},model:{value:e.formLogin.username,callback:function(t){e.$set(e.formLogin,"username",t)},expression:"formLogin.username"}})],1),r("el-form-item",{attrs:{prop:"password"}},[r("el-input",{attrs:{type:"password",placeholder:"密码"},model:{value:e.formLogin.password,callback:function(t){e.$set(e.formLogin,"password",t)},expression:"formLogin.password"}})],1),r("el-form-item",{attrs:{prop:"address"}},[r("el-input",{attrs:{type:"text",placeholder:"回测地址"},model:{value:e.formLogin.address,callback:function(t){e.$set(e.formLogin,"address",t)},expression:"formLogin.address"}})],1),r("el-button",{staticClass:"button-login",attrs:{size:"default",type:"primary"},on:{click:e.submit}},[e._v("登录")])],1)],1)],1)]),e._m(0)])])])},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"page-login--content-footer"},[s("p",{staticClass:"page-login--content-footer-copyright"},[e._v("QUANTAXIS Trade Admin")]),s("p",{staticClass:"page-login--content-footer-options"})])}],n=(s("a4d3"),s("4de4"),s("e439"),s("dbb4"),s("b64b"),s("5319"),s("159b"),s("ade3")),o=s("6e85"),i=s.n(o),c=s("5880"),l=s("1353"),d=s("0084"),p=s("c276");function u(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function m(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?u(Object(s),!0).forEach((function(t){Object(n["a"])(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):u(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var f={mixins:[l["a"]],data:function(){return{backtestURL:"",allURL:"",timeInterval:null,time:i()().format("HH:mm:ss"),dialogVisible:!1,users:[{name:"Admin",username:"admin",password:"admin"},{name:"Editor",username:"editor",password:"editor"},{name:"User1",username:"user1",password:"user1"}],formLogin:{username:"admin",password:"admin",address:""},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],address:[{required:!0,message:"请输入地址",trigger:"blur"}]}}},mounted:function(){var e=this,t=Object(d["a"])();this.backtestURL=t.backtestURL,this.allURL=t,this.formLogin.address=this.backtestURL,this.timeInterval=setInterval((function(){e.refreshTime()}),1e3)},beforeDestroy:function(){clearInterval(this.timeInterval)},methods:m({},Object(c["mapActions"])("d2admin/account",["login"]),{refreshTime:function(){this.time=i()().format("HH:mm:ss")},handleUserBtnClick:function(e){this.formLogin.username=e.username,this.formLogin.password=e.password,this.submit()},submit:function(){var e=this,t=this.formLogin.address;this.$refs.loginForm.validate((function(s){s?e.$http.get(t+"/user",{params:{username:e.formLogin.username,password:e.formLogin.password,model:"password"}}).then((function(t){var s=t.result;e.allURL.backtestURL=e.formLogin.address,localStorage.setItem("URL",JSON.stringify(e.allURL)),p["a"].cookies.set("uuid",s.user_cookie),p["a"].cookies.set("token",s.user_cookie),p["a"].cookies.set("userInfo",e.formLogin),e.$store.dispatch("d2admin/page/closeAll"),e.$store.dispatch("d2admin/user/set",{name:s.username},{root:!0}),e.$store.dispatch("d2admin/account/load"),e.$router.replace(e.$route.query.redirect||"/")})):e.$message.error("表单校验失败，请检查")}))}})},g=f,L=(s("60d0"),s("2877")),U=Object(L["a"])(g,r,a,!1,null,null,null);t["default"]=U.exports},"60d0":function(e,t,s){"use strict";var r=s("2973"),a=s.n(r);a.a},a6b0:function(e,t,s){e.exports=s.p+"img/logo@2x.286f12ac.png"}}]);