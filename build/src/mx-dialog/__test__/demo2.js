define("mx-dialog/__test__/demo2",["magix"],(i,e,n)=>{var t=i("magix");n.exports=t.View.extend({tmpl:function(i,e,n,t,d,a,o,s){if(n||(n=i),!d){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},l=/[&<>"'`]/g,c=function(i){return"&"+r[i]+";"};d=function(i){return""+(null==i?"":i)},function(i){return d(i).replace(l,c)}}if(!a){var v={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},u=function(i){return v[i]},g=/[!')(*]/g;a=function(i){return encodeURIComponent(d(i)).replace(g,u)}}if(!s){var f=/[\\'"]/g;s=function(i){return d(i).replace(f,"\\$&")}}return'<div mxs="_zs_galleryan:_" class="dialog-content" style="height: 200px;"><div class="dialog-header"><div class="fontsize-16">标题</div></div><div class="dialog-body">浮层内容</div></div>','<div mxs="_zs_galleryan:_" class="dialog-content" style="height: 200px;"><div class="dialog-header"><div class="fontsize-16">标题</div></div><div class="dialog-body">浮层内容</div></div>'},init:function(i){this.viewOptions=i,this.viewOptions.dialog.beforeClose(function(){return!0})},render:function(){this.updater.digest()}})});