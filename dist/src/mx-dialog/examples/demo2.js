define("mx-dialog/examples/demo2",["magix","mx-dialog/index"],(i,e,n)=>{var a=i("magix"),t=i("mx-dialog/index");n.exports=a.View.extend({tmpl:function(i,e,n,a,t,r,o,l){if(n||(n=i),!t){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},s=/[&<>"'`]/g,c=function(i){return"&"+d[i]+";"};t=function(i){return""+(null==i?"":i)},function(i){return t(i).replace(s,c)}}if(!r){var u={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},f=function(i){return u[i]},g=/[!')(*]/g;r=function(i){return encodeURIComponent(t(i)).replace(g,f)}}if(!l){var v=/[\\'"]/g;l=function(i){return t(i).replace(v,"\\$&")}}return'<div mxs="_zs_gallerya0:_" class="dialog-header"><div class="fontsize-16">标题</div></div><div mxs="_zs_gallerya0:a" class="dialog-body">浮层内容</div>','<div mxs="_zs_gallerya0:_" class="dialog-header"><div class="fontsize-16">标题</div></div><div mxs="_zs_gallerya0:a" class="dialog-body">浮层内容</div>'},mixins:[t],init:function(i){var e=this;e.viewOptions=i,e.viewOptions.dialog.beforeClose(function(){return new Promise(function(i){e.confirm({title:"二次确认",content:"确认要关闭吗",enterCallback:i})})})},render:function(){this.updater.digest()}})});