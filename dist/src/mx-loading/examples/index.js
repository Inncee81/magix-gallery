define("mx-loading/examples/index",["magix","$","examples/subs","mx-title/second","./1","./2","./3","./11","./6","./4","./8","./10","./5","./7","./9","examples/api"],(e,i,d)=>{e("examples/subs"),e("mx-title/second"),e("./1"),e("./2"),e("./3"),e("./11"),e("./6"),e("./4"),e("./8"),e("./10"),e("./5"),e("./7"),e("./9"),e("examples/api");var m=e("magix");e("$");d.exports=m.View.extend({tmpl:function(e,i,d,m,a,n,s,l){if(d||(d=e),!a){var o={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},v=/[&<>"'`]/g,t=function(e){return"&"+o[e]+";"};a=function(e){return""+(null==e?"":e)},m=function(e){return a(e).replace(v,t)}}if(!n){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},r=function(e){return x[e]},c=/[!')(*]/g;n=function(e){return encodeURIComponent(a(e)).replace(c,r)}}if(!l){var _=/[\\'"]/g;l=function(e){return a(e).replace(_,"\\$&")}}s||(s=function(e,i,d,m){for(m=e[p];--m;)if(e[d=p+m]===i)return d;return e[d=p+e[p]++]=i,d});var p="",u="",g=e.viewId,y=e.options;return u+='<div mxv mxa="_zs_galleryd_:_" class="pr pr120"><div mx-view="examples/subs?list='+s(d,[{name:"手动加载",key:g+"_custom",subs:[{name:"非全屏自动关",key:g+"_custom1"},{name:"全屏自动关",key:g+"_custom2"},{name:"手动关闭",key:g+"_custom3"}]},{name:"loading动画",key:g+"_demo",subs:[{name:"circle-spinner",key:g+"_demo11"},{name:"three-bounce",key:g+"_demo10"},{name:"rectangle",key:g+"_demo6"},{name:"double-bounce",key:g+"_demo5"},{name:"square",key:g+"_demo4"},{name:"cubes",key:g+"_demo7"},{name:"pulse",key:g+"_demo8"},{name:"dots",key:g+"_demo9"}]},{name:"API",key:g+"_api"}])+'"></div><div id="'+m(g)+'_custom" mx-view="mx-title/second?content=%E6%89%8B%E5%8A%A8%E5%8A%A0%E8%BD%BD"></div><div mxa="_zs_galleryd_:a" class="clearfix mb20"><div mxa="_zs_galleryd_:b" class="_zs_galleryd"><div mx-view="mx-loading/examples/1" id="'+m(g)+'_custom1"></div><div mx-view="mx-loading/examples/2" id="'+m(g)+'_custom2"></div></div><div mxa="_zs_galleryd_:c" class="_zs_galleryd"><div mx-view="mx-loading/examples/3" id="'+m(g)+'_custom3"></div></div></div><div id="'+m(g)+'_demo" mx-view="mx-title/second?content=loading%E5%8A%A8%E7%94%BB"></div><div mxa="_zs_galleryd_:d" class="clearfix mb20"><div mxa="_zs_galleryd_:e" class="_zs_galleryd"><div mx-view="mx-loading/examples/11" id="'+m(g)+'_demo11"></div><div mx-view="mx-loading/examples/6" id="'+m(g)+'_demo6"></div><div mx-view="mx-loading/examples/4" id="'+m(g)+'_demo4"></div><div mx-view="mx-loading/examples/8" id="'+m(g)+'_demo8"></div></div><div mxa="_zs_galleryd_:f" class="_zs_galleryd"><div mx-view="mx-loading/examples/10" id="'+m(g)+'_demo10"></div><div mx-view="mx-loading/examples/5" id="'+m(g)+'_demo5"></div><div mx-view="mx-loading/examples/7" id="'+m(g)+'_demo7"></div><div mx-view="mx-loading/examples/9" id="'+m(g)+'_demo9"></div></div></div><div id="'+m(g)+'_api" mx-view="mx-title/second?content=API&tip=mx-loading.anim%20api"></div><div mxv="options" mx-view="examples/api?options='+s(d,y)+'"></div></div>'},render:function(){var e=[{key:"size",desc:"loading尺寸 ",type:"number",def:60},{key:"mode",desc:["可选动画类型","circle-spinner","three-bounce","rectangle","double-bounce","square","cubes","pulse","dots"].join("<br>"),type:"string",def:"circle-spinner"},{key:"type",desc:["展示类型","brand：品牌色","grey：灰色"].join("<br>"),type:"string",def:"grey"},{key:"color",desc:"自定义颜色",type:"hex格式色号",def:""}];this.updater.digest({viewId:this.id,options:e})}})});