define("mx-dialog/__test__/multi",["magix","mx-dialog/index"],(i,e,a)=>{var t=i("magix"),l=i("mx-dialog/index");a.exports=t.View.extend({tmpl:function(i,e,a,t,l,n,s,r){if(a||(a=i),!l){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,o=function(i){return"&"+c[i]+";"};l=function(i){return""+(null==i?"":i)},t=function(i){return l(i).replace(d,o)}}if(!n){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},u=function(i){return m[i]},g=/[!')(*]/g;n=function(i){return encodeURIComponent(l(i)).replace(g,u)}}if(!r){var v=/[\\'"]/g;r=function(i){return l(i).replace(v,"\\$&")}}var h="",f=i.height,x=i.number;return h+='<div mxs="_zs_galleryae:_" class="dialog-header"><span class="fontsize-16">多个带modal的浮层</span></div><div class="dialog-body" style="height:'+t(f)+'px;"><div mxa="_zs_galleryae:_" class="mb20">浮层'+t(x)+'</div><div mxs="_zs_galleryae:a" class="mb20"><a href="javascript:;" mx-click="'+e+'modal()" class="btn btn-brand">再开一个</a></div><div mxs="_zs_galleryae:b"><a href="javascript:;" mx-click="'+e+'closeAll()" class="btn btn-brand">关闭所有展开浮层</a></div></div><div mxs="_zs_galleryae:c" class="dialog-footer"><a href="javascript:;" class="btn mr10" mx-click="'+e+'cancel()">取消</a></div>'},mixins:[l],init:function(i){this.viewOptions=i},render:function(){var i=+this.viewOptions.number;this.updater.digest({number:i,width:800-100*i,height:140+40*i})},"cancel<click>":function(i){i.preventDefault();var e=this.viewOptions;e.dialog&&e.dialog.close()},"modal<click>":function(i){var e=+this.updater.get("width"),a=+this.updater.get("height"),t=+this.updater.get("number");this.mxDialog("mx-dialog/__test__/multi",{number:t+1},{width:e-100,height:a+170,modal:!0})},"closeAll<click>":function(i){this.mxCloseAllDialogs()}})});