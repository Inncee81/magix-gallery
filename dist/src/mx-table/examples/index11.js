define("mx-table/examples/index11",["magix","$","examples/subs","mx-title/second","./13","./16","./19"],(e,i,n)=>{e("examples/subs"),e("mx-title/second"),e("./13"),e("./16"),e("./19");var t=e("magix");e("$");n.exports=t.View.extend({tmpl:function(e,i,n,t,r,a,d,m){if(n||(n=e),!r){var l={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},s=/[&<>"'`]/g,x=function(e){return"&"+l[e]+";"};r=function(e){return""+(null==e?"":e)},t=function(e){return r(e).replace(s,x)}}if(!a){var v={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},u=function(e){return v[e]},o=/[!')(*]/g;a=function(e){return encodeURIComponent(r(e)).replace(o,u)}}if(!m){var c=/[\\'"]/g;m=function(e){return r(e).replace(c,"\\$&")}}d||(d=function(e,i,n,t){for(t=e[p];--t;)if(e[n=p+t]===i)return n;return e[n=p+e[p]++]=i,n});var p="",f="",_=e.viewId;return f+='<div mxa="_zs_galleryeU:_" class="pr pr120"><div mx-view="examples/subs?list='+d(n,[{name:"自定义吸顶容器",key:_+"_1"},{name:"相对于window吸顶",key:_+"_2"},{name:"滚动时隐藏吸顶",key:_+"_3"}])+'"></div><div mxs="_zs_galleryeU:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mx-view="mx-table/examples/13" id="'+t(_)+'_1"></div><div mx-view="mx-table/examples/16" id="'+t(_)+'_2"></div><div mx-view="mx-table/examples/19" id="'+t(_)+'_3"></div></div>'},render:function(){this.updater.digest({viewId:this.id})}})});