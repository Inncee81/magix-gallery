define("mx-table/__test__/index12",["magix","$","mx-title/second","./17"],(e,t,n)=>{e("mx-title/second"),e("./17");var i=e("magix");e("$");n.exports=i.View.extend({tmpl:function(e,t,n,i,r,l,_,d){if(n||(n=e),!r){var a={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},m=/[&<>"'`]/g,x=function(e){return"&"+a[e]+";"};r=function(e){return""+(null==e?"":e)},function(e){return r(e).replace(m,x)}}if(!l){var s={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return s[e]},o=/[!')(*]/g;l=function(e){return encodeURIComponent(r(e)).replace(o,c)}}if(!d){var u=/[\\'"]/g;d=function(e){return r(e).replace(u,"\\$&")}}return'<div mxs="_zs_galleryeI:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_galleryeI:a" mx-view="mx-table/__test__/17"></div>','<div mxs="_zs_galleryeI:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_galleryeI:a" mx-view="mx-table/__test__/17"></div>'},render:function(){this.updater.digest({viewId:this.id})}})});