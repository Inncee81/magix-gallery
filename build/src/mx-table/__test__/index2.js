define("mx-table/__test__/index2",["magix","$","__test__/subs","mx-title/second","./cal","./6","./7"],(e,t,i)=>{e("__test__/subs"),e("mx-title/second"),e("./cal"),e("./6"),e("./7");var n=e("magix");e("$");i.exports=n.View.extend({tmpl:function(e,t,i,n,_,d,r,a){if(i||(i=e),!_){var m={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},s=/[&<>"'`]/g,l=function(e){return"&"+m[e]+";"};_=function(e){return""+(null==e?"":e)},n=function(e){return _(e).replace(s,l)}}if(!d){var E={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},v=function(e){return E[e]},c=/[!')(*]/g;d=function(e){return encodeURIComponent(_(e)).replace(c,v)}}if(!a){var x=/[\\'"]/g;a=function(e){return _(e).replace(x,"\\$&")}}r||(r=function(e,t,i,n){for(n=e[o];--n;)if(e[i=o+n]===t)return i;return e[i=o+e[o]++]=t,i});var o="",u="",f=e.viewId;return u+='<div mxa="_zs_galleryex:_" class="pr pr120"><div mx-view="__test__/subs?list='+r(i,[{name:"表头实际位置计算",key:f+"_cal"},{name:"使用示例",key:f+"_demo",subs:[{name:"左右分列+子表格",key:f+"_demo6"},{name:"普通table",key:f+"_demo7"}]}])+'"></div><div id="'+n(f)+'_cal" mx-view="mx-title/second?content=%E8%A1%A8%E5%A4%B4%E5%AE%9E%E9%99%85%E4%BD%8D%E7%BD%AE%E8%AE%A1%E7%AE%97&tip=%E8%8E%B7%E5%8F%96%E5%8D%95%E5%85%83%E6%A0%BC%E5%AE%9E%E9%99%85%E4%BD%8D%E7%BD%AE%7Bx%2Cy%7D"></div><div mxs="_zs_galleryex:_" mx-view="mx-table/__test__/cal" class="pr20 mb40"></div><div id="'+n(f)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryex:a" class="clearfix mb20"><div mx-view="mx-table/__test__/6" id="'+n(f)+'_demo6"></div><div mx-view="mx-table/__test__/7" id="'+n(f)+'_demo7"></div></div></div>'},render:function(){this.updater.digest({viewId:this.id})}})});