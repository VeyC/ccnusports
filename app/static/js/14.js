webpackJsonp([14],{1092:function(t,e,o){o(1180);var l=o(253)(o(1131),o(1200),null,null);t.exports=l.exports},1131:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{labelPosition:"right",formLabelAlign:{title:"",text:""}}},methods:{open:function(t){var e=this;console.log(t.id);var o=this.$createElement;this.$msgbox({title:"添加新闻",message:o("p",null,[o("span",null,"确定添加 "),o("i",{style:"color: teal"},t.title+"?")]),showCancelButton:!0,confirmButtonText:"确定",cancelButtonText:"取消",beforeClose:function(t,e,o){"confirm"===t?(e.confirmButtonLoading=!0,e.confirmButtonText="执行中...",setTimeout(function(){o(),setTimeout(function(){e.confirmButtonLoading=!1},300)},300)):o()}}).then(function(o){console.log("title"+t.title),console.log("text"+t.text),e.$http.post("../api/addnews",{title:t.title,text:t.text}).then(function(o){console.log("res.data1"+o.data),e.$message({type:"info",message:"添加成功"}),e.$forceUpdate(),e.$set(t,"hasapply",o.data.hasapply),e.$set(t,"count",o.data.count),console.log(t.hasapply),console.log(o.data.hasapply),console.log("res.data"+o.data),console.log(t),t.title="",t.text=""}).catch(function(t){console.log(t)})})}}}},1165:function(t,e,o){e=t.exports=o(1090)(),e.push([t.i,".el-textarea_inner{min-height:250px!important}",""])},1180:function(t,e,o){var l=o(1165);"string"==typeof l&&(l=[[t.i,l,""]]),l.locals&&(t.exports=l.locals);o(1091)("64af0bf9",l,!0)},1200:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{"margin-top":"15px"}},[o("el-form",{attrs:{"label-position":t.labelPosition,"label-width":"80px",model:t.formLabelAlign}},[o("el-form-item",{attrs:{label:"新闻标题"}},[o("el-input",{model:{value:t.formLabelAlign.title,callback:function(e){t.$set(t.formLabelAlign,"title",e)},expression:"formLabelAlign.title"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"新闻内容"}},[o("el-input",{staticClass:"h",staticStyle:{height:"200px"},attrs:{type:"textarea",rows:7},model:{value:t.formLabelAlign.text,callback:function(e){t.$set(t.formLabelAlign,"text",e)},expression:"formLabelAlign.text"}})],1),t._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:function(e){t.open(t.formLabelAlign)}}},[t._v("添加")])],1)],1)},staticRenderFns:[]}}});