define("mx-effects/__test__/empty",["magix","$","mx-title/second","./1","./2","__test__/api"],(e,t,i)=>{e("mx-title/second"),e("./1"),e("./2"),e("__test__/api");var n=e("magix");e("$");i.exports=n.View.extend({tmpl:function(e,t,i,n,r,s,_,d){if(i||(i=e),!r){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,a=function(e){return"&"+c[e]+";"};r=function(e){return""+(null==e?"":e)},function(e){return r(e).replace(o,a)}}if(!s){var v={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},l=function(e){return v[e]},f=/[!')(*]/g;s=function(e){return encodeURIComponent(r(e)).replace(f,l)}}if(!d){var m=/[\\'"]/g;d=function(e){return r(e).replace(m,"\\$&")}}_||(_=function(e,t,i,n){for(n=e[x];--n;)if(e[i=x+n]===t)return i;return e[i=x+e[x]++]=t,i});var x="",u="";return u+='<div mxs="_zs_gallerya;:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_gallerya;:a" class="clearfix mb20"><div class="_zs_gallerye"><div mx-view="mx-effects/__test__/1"></div></div><div class="_zs_gallerye"><div mx-view="mx-effects/__test__/2"></div></div></div><div mxs="_zs_gallerya;:b" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options='+_(i,e.options)+'"></div>'},render:function(){this.updater.digest({options:[{key:"content",desc:"空状态提示文案",type:"string",def:"暂无内容"},{key:"bg",desc:'背景样式，默认灰色，需要白底空状态时配置bg="white"',type:"string",def:""}]})}})});