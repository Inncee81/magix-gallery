define("mx-main/__test__/inner",["magix","$"],(e,n,t)=>{var r=e("magix"),i=e("$");t.exports=r.View.extend({tmpl:function(e,n,t,r,i,a,o,u){if(t||(t=e),!i){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},f=/[&<>"'`]/g,s=function(e){return"&"+c[e]+";"};i=function(e){return""+(null==e?"":e)},function(e){return i(e).replace(f,s)}}if(!a){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},l=function(e){return d[e]},m=/[!')(*]/g;a=function(e){return encodeURIComponent(i(e)).replace(m,l)}}if(!u){var g=/[\\'"]/g;u=function(e){return i(e).replace(g,"\\$&")}}var _="";try{_+='<div mxs="_zs_galleryc*:_" class="min-height-320">自定义内容</div>'}catch(e){var p="render view error:"+(e.message||e);throw p+="\r\n\texpr:",p+=void 0+"\r\n\tat file:mx-main/__test__/inner.html"}return _},init:function(e){this.updater.set({info:e.info||{},data:i.extend(!0,{},e.data||{})})},render:function(){this.updater.digest()},check:function(){var e=this.updater.get("info"),n={};return n["test_"+e.index]=e.label,new Promise(function(t){t({ok:!0,msg:e.label,remain:n})})}})});