define("mx-dialog/__test__/content",["magix","$"],(t,e,n)=>{var r=t("magix");t("$");n.exports=r.View.extend({tmpl:function(t,e,n,r,a,i,o,c){if(n||(n=t),!a){var l={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},s=/[&<>"'`]/g,d=function(t){return"&"+l[t]+";"};a=function(t){return""+(null==t?"":t)},r=function(t){return a(t).replace(s,d)}}if(!i){var u={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},f=function(t){return u[t]},_=/[!')(*]/g;i=function(t){return encodeURIComponent(a(t)).replace(_,f)}}if(!c){var m=/[\\'"]/g;c=function(t){return a(t).replace(m,"\\$&")}}var v,x,g,p="",h=t.text,b=t.content;try{p+='<div mxa="_zs_galleryaT:_" class="fontsize-16 mb20">标题：',g=1,x="=text",p+=(v="<%=text%>",r(h)+'</div><div mxa="_zs_galleryaT:a" class="mb20">内容：'),g=2,x="=content",p+=(v="<%=content%>",r(b)+'</div><div mxs="_zs_galleryaT:_"><a href="#!/popover/index" class="btn btn-brand">从当前页面跳走，自动销毁浮层</a></div>')}catch(t){var y="render view error:"+(t.message||t);throw x&&(y+="\r\n\tsrc art:{{"+x+"}}\r\n\tat line:"+g),y+="\r\n\t"+(x?"translate to:":"expr:"),y+=v+"\r\n\tat file:mx-dialog/__test__/content.html"}return p},init:function(t){this.updater.set(t.data)},render:function(){this.updater.digest()}})});