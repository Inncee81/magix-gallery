define("mx-main/__test__/index",["magix","$"],(e,n,t)=>{var r=e("magix");e("$");t.exports=r.View.extend({tmpl:function(e,n,t,r,i,o,u,c){if(t||(t=e),!i){var f={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},a=/[&<>"'`]/g,d=function(e){return"&"+f[e]+";"};i=function(e){return""+(null==e?"":e)},function(e){return i(e).replace(a,d)}}if(!o){var p={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return p[e]},g=/[!')(*]/g;o=function(e){return encodeURIComponent(i(e)).replace(g,m)}}if(!c){var l=/[\\'"]/g;c=function(e){return i(e).replace(l,"\\$&")}}return"Todo","Todo"},render:function(){this.updater.digest({options:[{key:"mode",desc:"页脚类型，简单版（simple）还是复杂版本",type:"string",def:""}]})}})});