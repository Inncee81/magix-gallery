define("mx-form/__test__/style",["magix","__test__/subs","mx-title/second","./18","./19","./20"],(e,i,t)=>{e("__test__/subs"),e("mx-title/second"),e("./18"),e("./19"),e("./20");var _=e("magix");t.exports=_.View.extend({tmpl:function(e,i,t,_,r,n,d,s){if(t||(t=e),!r){var m={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},a=/[&<>"'`]/g,l=function(e){return"&"+m[e]+";"};r=function(e){return""+(null==e?"":e)},_=function(e){return r(e).replace(a,l)}}if(!n){var v={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return v[e]},c=/[!')(*]/g;n=function(e){return encodeURIComponent(r(e)).replace(c,o)}}if(!s){var u=/[\\'"]/g;s=function(e){return r(e).replace(u,"\\$&")}}d||(d=function(e,i,t,_){for(_=e[x];--_;)if(e[t=x+_]===i)return t;return e[t=x+e[x]++]=i,t});var x="",f="",g=e.viewId;return f+='<div mxa="_zs_gallerybH:_" class="pr pr120"><div mx-view="__test__/subs?list='+d(t,[{name:"默认",key:g+"_demo18"},{name:"小距离+右对齐",key:g+"_demo19"},{name:"左文字个数",key:g+"_demo20"}])+'"></div><div mxs="_zs_gallerybH:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallerybH:a" class="clearfix mb20"><div mxa="_zs_gallerybH:b" class="_zs_gallerye"><div mx-view="mx-form/__test__/18" id="'+_(g)+'_demo18"></div></div><div mxa="_zs_gallerybH:c" class="_zs_gallerye"><div mx-view="mx-form/__test__/19" id="'+_(g)+'_demo19"></div><div mx-view="mx-form/__test__/20" id="'+_(g)+'_demo20"></div></div></div></div>'},render:function(){this.updater.digest({viewId:this.id})}})});