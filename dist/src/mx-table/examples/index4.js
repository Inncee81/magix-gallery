define("mx-table/examples/index4",["magix","$","mx-title/second","./1"],(e,n,t)=>{e("mx-title/second"),e("./1");var i=e("magix");e("$");t.exports=i.View.extend({tmpl:function(e,n,t,i,r,l,a,m){if(t||(t=e),!r){var x={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,c=function(e){return"&"+x[e]+";"};r=function(e){return""+(null==e?"":e)},function(e){return r(e).replace(d,c)}}if(!l){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},s=function(e){return o[e]},u=/[!')(*]/g;l=function(e){return encodeURIComponent(r(e)).replace(u,s)}}if(!m){var v=/[\\'"]/g;m=function(e){return r(e).replace(v,"\\$&")}}return'<div mxs="_zs_gallerye7:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_gallerye7:a" mx-view="mx-table/examples/1"></div>','<div mxs="_zs_gallerye7:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_gallerye7:a" mx-view="mx-table/examples/1"></div>'},render:function(){this.updater.digest()}})});