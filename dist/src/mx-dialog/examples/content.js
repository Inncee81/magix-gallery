define("mx-dialog/examples/content",["magix","$"],(n,e,t)=>{var r=n("magix");n("$");t.exports=r.View.extend({tmpl:function(n,e,t,r,a,i,o,u){if(t||(t=n),!a){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},l=/[&<>"'`]/g,d=function(n){return"&"+c[n]+";"};a=function(n){return""+(null==n?"":n)},r=function(n){return a(n).replace(l,d)}}if(!i){var s={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},f=function(n){return s[n]},m=/[!')(*]/g;i=function(n){return encodeURIComponent(a(n)).replace(m,f)}}if(!u){var p=/[\\'"]/g;u=function(n){return a(n).replace(p,"\\$&")}}var v="",g=n.text,x=n.content;return v+='<div mxa="_zs_galleryaX:_" class="fontsize-16 mb20">标题：'+r(g)+'</div><div mxa="_zs_galleryaX:a" class="mb20">内容：'+r(x)+'</div><div mxs="_zs_galleryaX:_"><a href="#!/popover/index" class="btn btn-brand">从当前页面跳走，自动销毁浮层</a></div>'},init:function(n){this.updater.set(n.data)},render:function(){this.updater.digest()}})});