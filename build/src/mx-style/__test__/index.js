define("mx-style/__test__/index",["magix","$","mx-title/second","./3","./1","./5","./4","./2","./6"],(e,i,t)=>{e("mx-title/second"),e("./3"),e("./1"),e("./5"),e("./4"),e("./2"),e("./6");var _=e("magix");e("$");t.exports=_.View.extend({tmpl:function(e,i,t,_,v,s,d,l){if(t||(t=e),!v){var m={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,n=function(e){return"&"+m[e]+";"};v=function(e){return""+(null==e?"":e)},function(e){return v(e).replace(x,n)}}if(!s){var r={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return r[e]},a=/[!')(*]/g;s=function(e){return encodeURIComponent(v(e)).replace(a,c)}}if(!l){var y=/[\\'"]/g;l=function(e){return v(e).replace(y,"\\$&")}}return'<div mxs="_zs_gallerycP:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_gallerycP:a" class="clearfix mb20"><div class="_zs_galleryc"><div mx-view="mx-style/__test__/3"></div><div mx-view="mx-style/__test__/1"></div><div mx-view="mx-style/__test__/5"></div></div><div class="_zs_galleryc"><div mx-view="mx-style/__test__/4"></div><div mx-view="mx-style/__test__/2"></div><div mx-view="mx-style/__test__/6"></div></div></div>','<div mxs="_zs_gallerycP:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_gallerycP:a" class="clearfix mb20"><div class="_zs_galleryc"><div mx-view="mx-style/__test__/3"></div><div mx-view="mx-style/__test__/1"></div><div mx-view="mx-style/__test__/5"></div></div><div class="_zs_galleryc"><div mx-view="mx-style/__test__/4"></div><div mx-view="mx-style/__test__/2"></div><div mx-view="mx-style/__test__/6"></div></div></div>'},render:function(){this.updater.digest()}})});