define("mx-preview/__test__/index",["magix","$","__test__/subs","mx-title/second","./1","./3","./7","./2","./4","./8","./5","__test__/api","./6"],(e,i,d)=>{e("__test__/subs"),e("mx-title/second"),e("./1"),e("./3"),e("./7"),e("./2"),e("./4"),e("./8"),e("./5"),e("__test__/api"),e("./6");var t=e("magix");e("$");d.exports=t.View.extend({tmpl:function(e,i,d,t,_,n,s,r){if(d||(d=e),!_){var m={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},v=/[&<>"'`]/g,a=function(e){return"&"+m[e]+";"};_=function(e){return""+(null==e?"":e)},t=function(e){return _(e).replace(v,a)}}if(!n){var l={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return l[e]},p=/[!')(*]/g;n=function(e){return encodeURIComponent(_(e)).replace(p,o)}}if(!r){var c=/[\\'"]/g;r=function(e){return _(e).replace(c,"\\$&")}}s||(s=function(e,i,d,t){for(t=e[E];--t;)if(e[d=E+t]===i)return d;return e[d=E+e[E]++]=i,d});var E="",x="",y=e.viewId,u=e.options;return x+='<div mxv mxa="_zs_galleryd_:_" class="pr pr120"><div mx-view="__test__/subs?list='+s(d,[{name:"使用示例",key:y+"_demo",subs:[{name:"图片",key:y+"_demo1"},{name:"视频",key:y+"_demo2"},{name:"html(iframe展示)",key:y+"_demo3"},{name:"文字",key:y+"_demo4"},{name:"纯缩略图(无预览)",key:y+"_demo7"},{name:"左对齐",key:y+"_demo8"},{name:"套图",key:y+"_demo5"}]},{name:"API",key:y+"_api"},{name:"关于懒加载",key:y+"_lazyload"}])+'"></div><div id="'+t(y)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B&tip=%E6%A0%B9%E6%8D%AE%E5%AE%9E%E9%99%85%E5%B0%BA%E5%AF%B8%E5%B1%95%E7%A4%BA%EF%BC%8C%E7%AD%89%E6%AF%94%E4%BE%8B%E7%BC%A9%E6%94%BE%EF%BC%8C%E4%B8%8D%E8%B6%85%E8%BF%87%E5%B1%8F%E5%B9%95%E5%8F%AF%E8%A7%86%E8%8C%83%E5%9B%B4%EF%BC%9B%3Cspan%20class%3D%27color-brand%27%3E%E5%AE%9E%E7%8E%B0%E7%B4%A0%E6%9D%90%E6%87%92%E5%8A%A0%E8%BD%BD%3C%2Fspan%3E"></div><div mxa="_zs_galleryd_:a" class="clearfix mb20"><div mxa="_zs_galleryd_:b" class="_zs_gallerye"><div mx-view="mx-preview/__test__/1" id="'+t(y)+'_demo1"></div><div mx-view="mx-preview/__test__/3" id="'+t(y)+'_demo3"></div><div mx-view="mx-preview/__test__/7" id="'+t(y)+'_demo7"></div></div><div mxa="_zs_galleryd_:c" class="_zs_gallerye"><div mx-view="mx-preview/__test__/2" id="'+t(y)+'_demo2"></div><div mx-view="mx-preview/__test__/4" id="'+t(y)+'_demo4"></div><div mx-view="mx-preview/__test__/8" id="'+t(y)+'_demo8"></div><div mx-view="mx-preview/__test__/5" id="'+t(y)+'_demo5"></div></div></div><div id="'+t(y)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options='+s(d,u)+'" class="mb40"></div><div id="'+t(y)+'_lazyload" mx-view="mx-title/second?content=%E5%85%B3%E4%BA%8E%E6%87%92%E5%8A%A0%E8%BD%BD"></div><div mxs="_zs_galleryd_:_" class="lh22">使用IntersectionObserver实现，滚动容器内依然支持懒加载；</div><div mxs="_zs_galleryd_:a" class="lh22 mb20">注意点：<span class="color-brand">需要提前给包裹容器设定一个高度，不然可能在素材未加载的时候，所有的元素都在可视区，会导致所有元素都被加载</span></div><div mxs="_zs_galleryd_:b" mx-view="mx-preview/__test__/6"></div></div>'},render:function(){this.updater.digest({viewId:this.id,options:[{key:"format",desc:"<pre>展示类型，不配置类型默认展示为纯文本\n2：图片\n4：视频\n5：文字链\n10：html\n23：套图\n</pre>",type:"number",def:"5"},{key:"url",desc:"<pre>展示内容\n2：图片链接\n4：视频链接\n5：文本内容\n10：html链接\n</pre>",type:"string",def:""},{key:"preview",desc:"是否需要预览，preview=false的时候只有缩略图没有预览",type:"boolean",def:"true"},{key:"width",desc:'<pre>预览实际宽度\n会根据当前屏幕的可视范围进行等比例修正\n<div class="color-brand">除图片和文本类型外，其余情况下必填</div>\n</pre>',type:"number",def:""},{key:"height",desc:'<pre>预览实际高度\n<div class="color-brand">除图片和文本类型外，其余情况下必填</div>\n</pre>',type:"number",def:""},{key:"max-width",desc:"缩略图最大宽度",type:"number",def:100},{key:"max-height",desc:"缩略图最大高度",type:"number",def:"100"},{key:"datu-url",desc:"套图大图",type:"string",def:""},{key:"xiaotu-url",desc:"套图小图",type:"string",def:""},{key:"click-url",desc:"点击预览内容的跳转外链",type:"string",def:""},{key:"placement",desc:"相对目标的展示位置，可选left、right",type:"string",def:"right"}]})}})});