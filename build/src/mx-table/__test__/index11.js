define("mx-table/__test__/index11",["magix","$","__test__/subs","mx-title/second","./13","./16"],(e,t,i)=>{e("__test__/subs"),e("mx-title/second"),e("./13"),e("./16");var n=e("magix");e("$");i.exports=n.View.extend({tmpl:function(e,t,i,n,r,_,d,s){if(i||(i=e),!r){var u={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},a=/[&<>"'`]/g,v=function(e){return"&"+u[e]+";"};r=function(e){return""+(null==e?"":e)},n=function(e){return r(e).replace(a,v)}}if(!_){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},l=function(e){return c[e]},m=/[!')(*]/g;_=function(e){return encodeURIComponent(r(e)).replace(m,l)}}if(!s){var o=/[\\'"]/g;s=function(e){return r(e).replace(o,"\\$&")}}d||(d=function(e,t,i,n){for(n=e[x];--n;)if(e[i=x+n]===t)return i;return e[i=x+e[x]++]=t,i});var x="",f="",p=e.viewId;return f+='<div mxa="_zs_galleryc[:_" class="pr pr120"><div mx-view="__test__/subs?list='+d(i,[{name:"自定义吸顶容器",key:p+"_1"},{name:"相当于window吸顶",key:p+"_2"}])+'"></div><div mxs="_zs_galleryc[:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mx-view="mx-table/__test__/13" id="'+n(p)+'_1"></div><div mx-view="mx-table/__test__/16" id="'+n(p)+'_2"></div></div>'},render:function(){this.updater.digest({viewId:this.id})}})});