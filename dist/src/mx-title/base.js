define("mx-title/base",["magix","$"],(e,n,t)=>{var r=e("magix");e("$");t.exports=r.View.extend({tmpl:function(e,n,t,r,a,i,c,s){if(t||(t=e),!a){var p={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},u=/[&<>"'`]/g,o=function(e){return"&"+p[e]+";"};a=function(e){return""+(null==e?"":e)},r=function(e){return a(e).replace(u,o)}}if(!i){var l={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},d=function(e){return l[e]},f=/[!')(*]/g;i=function(e){return encodeURIComponent(a(e)).replace(f,d)}}if(!s){var g=/[\\'"]/g;s=function(e){return a(e).replace(g,"\\$&")}}var m="",v=e.second,x=e.content,h=e.tip;return m+='<div mxa="_zs_gallerye+:_" class="page-header"><span class="'+r(v?"second-header":"first-header")+'">'+a(x)+"</span>",h&&(m+='<span mxa="_zs_gallerye+:a" class="page-tip">'+a(h)+"</span>"),m+="</div>"},init:function(e){var n=e.content||"标题",t=e.tip||"";this.updater.set({content:n,tip:t})},render:function(){this.updater.digest()}})});