define("mx-effects/examples/notice",["magix","$","examples/subs","mx-title/second","./7","./4","./3","./31","./30","./6","./5","examples/api"],(e,i,d)=>{e("examples/subs"),e("mx-title/second"),e("./7"),e("./4"),e("./3"),e("./31"),e("./30"),e("./6"),e("./5"),e("examples/api");var o=e("magix");e("$");d.exports=o.View.extend({tmpl:function(e,i,d,o,t,s,r,m){if(d||(d=e),!t){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},a=/[&<>"'`]/g,l=function(e){return"&"+n[e]+";"};t=function(e){return""+(null==e?"":e)},o=function(e){return t(e).replace(a,l)}}if(!s){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},v=function(e){return c[e]},f=/[!')(*]/g;s=function(e){return encodeURIComponent(t(e)).replace(f,v)}}if(!m){var x=/[\\'"]/g;m=function(e){return t(e).replace(x,"\\$&")}}r||(r=function(e,i,d,o){for(o=e[p];--o;)if(e[d=p+o]===i)return d;return e[d=p+e[p]++]=i,d});var p="",y="",_=e.viewId,u=e.options;return y+='<div mxv mxa="_zs_galleryb5:_" class="pr pr120"><div mx-view="examples/subs?list='+r(d,[{name:"使用示例",key:_+"_demo",subs:[{name:"品牌色强调",key:_+"_demo7"},{name:"带关闭按钮",key:_+"_demo30"},{name:"事件处理",key:_+"_demo31"},{name:"红色错误类",key:_+"_demo4"},{name:"黄色警告类",key:_+"_demo5"},{name:"自定义颜色",key:_+"_demo6"},{name:"默认灰底",key:_+"_demo3"}]},{name:"API",key:_+"_api"}])+'"></div><div id="'+o(_)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryb5:a" class="clearfix mb20"><div mxa="_zs_galleryb5:b" class="_zs_galleryd"><div mx-view="mx-effects/examples/7" id="'+o(_)+'_demo7"></div><div mx-view="mx-effects/examples/4" id="'+o(_)+'_demo4"></div><div mx-view="mx-effects/examples/3" id="'+o(_)+'_demo3"></div></div><div mxa="_zs_galleryb5:c" class="_zs_galleryd"><div mx-view="mx-effects/examples/31" id="'+o(_)+'_demo31"></div><div mx-view="mx-effects/examples/30" id="'+o(_)+'_demo30"></div><div mx-view="mx-effects/examples/6" id="'+o(_)+'_demo6"></div><div mx-view="mx-effects/examples/5" id="'+o(_)+'_demo5"></div></div></div><div id="'+o(_)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="examples/api?options='+r(d,u)+'"></div></div>'},render:function(){var e=[{key:"type",desc:["展示类型","error：红色错误类型提示，color = #a40100","warn：黄色警告类型提示，color = #ffb400","highlight：强调提示，color = 品牌色","common：灰色提示，color = #ccc"].join("<br>"),type:"string",def:"默认灰色提示"},{key:"color",desc:"自定义颜色，配置了color的时候忽略type的配置，其他颜色基于此色值计算",type:"string",def:""},{key:"color-bg",desc:"背景颜色，默认为color * 0.1",type:"string",def:""},{key:"border",desc:"是否带边框，默认情况下带边框则border-radius=4",type:"boolean",def:"false"},{key:"closable",desc:"是否带关闭",type:"boolean",def:"false"},{key:"radius",desc:"是否带圆角",type:"boolean",def:"false"},{key:"color-border",desc:"边框颜色，默认=color",type:"string",def:""},{key:"icon",desc:"是否有警告icon",type:"boolean",def:"true"},{key:"color-icon",desc:"icon颜色，默认=color",type:"string",def:""},{key:"color-text",desc:"文字颜色，默认#666",type:"string",def:""},{key:"text-align",desc:"文字对齐方式，left，center，right",type:"string",def:"left"}];this.updater.digest({viewId:this.id,options:e})}})});