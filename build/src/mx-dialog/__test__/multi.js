define("mx-dialog/__test__/multi",["magix","mx-dialog/index"],(i,a,t)=>{var e=i("magix"),l=i("mx-dialog/index");t.exports=e.View.extend({tmpl:function(i,a,t,e,l,n,s,r){if(t||(t=i),!l){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,o=function(i){return"&"+c[i]+";"};l=function(i){return""+(null==i?"":i)},e=function(i){return l(i).replace(d,o)}}if(!n){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},u=function(i){return m[i]},g=/[!')(*]/g;n=function(i){return encodeURIComponent(l(i)).replace(g,u)}}if(!r){var v=/[\\'"]/g;r=function(i){return l(i).replace(v,"\\$&")}}var h="",f=i.height,x=i.number;return h+='<div mxs="_zs_galleryas:_" class="dialog-header"><span class="fontsize-16">多个带modal的浮层</span></div><div class="dialog-body" style="height:'+e(f)+'px;"><div mxa="_zs_galleryas:_" class="mb20">浮层'+e(x)+'</div><div mxs="_zs_galleryas:a" class="mb20"><a href="javascript:;" mx-click="'+a+'modal()" class="btn btn-brand">再开一个</a></div><div mxs="_zs_galleryas:b"><a href="javascript:;" mx-click="'+a+'closeAll()" class="btn btn-brand">关闭所有展开浮层</a></div></div><div mxs="_zs_galleryas:c" class="dialog-footer"><a href="javascript:;" class="btn mr10" mx-click="'+a+'cancel()">取消</a></div>'},mixins:[l],init:function(i){this.viewOptions=i},render:function(){var i=+this.viewOptions.number;this.updater.digest({number:i,width:800-100*i,height:140+40*i})},"cancel<click>":function(i){i.preventDefault();var a=this.viewOptions;a.dialog&&a.dialog.close()},"modal<click>":function(i){var a=+this.updater.get("width"),t=+this.updater.get("height"),e=+this.updater.get("number");this.mxDialog("mx-dialog/__test__/multi",{number:e+1},{width:a-100,height:t+170,modal:!0})},"closeAll<click>":function(i){this.mxCloseAllDialogs()}})});