define("mx-form/examples/warn",["magix","mx-title/second","./1"],(e,n,i)=>{e("mx-title/second"),e("./1");var r=e("magix");i.exports=r.View.extend({tmpl:function(e,n,i,r,t,a,c,d){if(i||(i=e),!t){var m={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,u=function(e){return"&"+m[e]+";"};t=function(e){return""+(null==e?"":e)},r=function(e){return t(e).replace(o,u)}}if(!a){var l={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},f=function(e){return l[e]},v=/[!')(*]/g;a=function(e){return encodeURIComponent(t(e)).replace(v,f)}}if(!d){var x=/[\\'"]/g;d=function(e){return t(e).replace(x,"\\$&")}}var s="";return s+='<div id="'+r(e.viewId)+'_warn" mx-view="mx-title/second?content=warn%E8%AD%A6%E5%91%8A%E5%9C%BA%E6%99%AF%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_gallerycF:_" class="clearfix mb20"><div mx-view="mx-form/examples/1"></div></div>'},render:function(){this.updater.digest({viewId:this.id})}})});