define("mx-table/__test__/index3",["magix","$","mx-title/second","./2","./3"],(e,t,i)=>{e("mx-title/second"),e("./2"),e("./3");var n=e("magix");e("$");i.exports=n.View.extend({tmpl:function(e,t,i,n,_,r,d,l){if(i||(i=e),!_){var m={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,a=function(e){return"&"+m[e]+";"};_=function(e){return""+(null==e?"":e)},function(e){return _(e).replace(x,a)}}if(!r){var s={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},v=function(e){return s[e]},c=/[!')(*]/g;r=function(e){return encodeURIComponent(_(e)).replace(c,v)}}if(!l){var o=/[\\'"]/g;l=function(e){return _(e).replace(o,"\\$&")}}return'<div mxs="_zs_galleryd1:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_galleryd1:a" mx-view="mx-table/__test__/2"></div><div mxs="_zs_galleryd1:b" mx-view="mx-table/__test__/3"></div>','<div mxs="_zs_galleryd1:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_galleryd1:a" mx-view="mx-table/__test__/2"></div><div mxs="_zs_galleryd1:b" mx-view="mx-table/__test__/3"></div>'},render:function(){this.updater.digest()}})});