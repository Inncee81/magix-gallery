define("mx-effects/examples/ua",["magix","$","mx-title/second","./27"],(e,n,t)=>{e("mx-title/second"),e("./27");var i=e("magix");e("$");t.exports=i.View.extend({tmpl:function(e,n,t,i,r,c,d,a){if(t||(t=e),!r){var u={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},f=/[&<>"'`]/g,m=function(e){return"&"+u[e]+";"};r=function(e){return""+(null==e?"":e)},i=function(e){return r(e).replace(f,m)}}if(!c){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},l=function(e){return o[e]},s=/[!')(*]/g;c=function(e){return encodeURIComponent(r(e)).replace(s,l)}}if(!a){var v=/[\\'"]/g;a=function(e){return r(e).replace(v,"\\$&")}}var x="";return x+='<div id="'+i(e.viewId)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_galleryb@:_" class="clearfix mb20"><div mx-view="mx-effects/examples/27"></div></div>'},render:function(){this.updater.digest({viewId:this.id})}})});