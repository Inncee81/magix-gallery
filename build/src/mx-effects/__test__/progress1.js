define("mx-effects/__test__/progress1",["magix","$","__test__/subs","mx-title/second","./8","./9","./29","./22","./21","./23","./20","__test__/api"],(e,t,i)=>{e("__test__/subs"),e("mx-title/second"),e("./8"),e("./9"),e("./29"),e("./22"),e("./21"),e("./23"),e("./20"),e("__test__/api");var d=e("magix");e("$");i.exports=d.View.extend({tmpl:function(e,t,i,d,_,s,n,m){if(i||(i=e),!_){var o={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},r=/[&<>"'`]/g,v=function(e){return"&"+o[e]+";"};_=function(e){return""+(null==e?"":e)},d=function(e){return _(e).replace(r,v)}}if(!s){var f={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},a=function(e){return f[e]},c=/[!')(*]/g;s=function(e){return encodeURIComponent(_(e)).replace(c,a)}}if(!m){var l=/[\\'"]/g;m=function(e){return _(e).replace(l,"\\$&")}}n||(n=function(e,t,i,d){for(d=e[x];--d;)if(e[i=x+d]===t)return i;return e[i=x+e[x]++]=t,i});var x="",p="",y=e.viewId,u=e.options;return p+='<div mxv mxa="_zs_galleryb3:_" class="pr pr120"><div mx-view="__test__/subs?list='+n(i,[{name:"使用示例",key:y+"_demo",subs:[{name:"精度",key:y+"_demo8"},{name:"左右对比",key:y+"_demo29"},{name:"自定义颜色",key:y+"_demo22"},{name:"自定义宽度",key:y+"_demo21"},{name:"无文案",key:y+"_demo23"},{name:"滚轴渐变",key:y+"_demo20"},{name:"动态修改",key:y+"_demo9"}]},{name:"API",key:y+"_api"}])+'"></div><div id="'+d(y)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryb3:a" class="clearfix mb20"><div mxa="_zs_galleryb3:b" class="_zs_galleryd"><div mx-view="mx-effects/__test__/8" id="'+d(y)+'_demo8"></div><div mx-view="mx-effects/__test__/9" id="'+d(y)+'_demo9"></div></div><div mxa="_zs_galleryb3:c" class="_zs_galleryd"><div mx-view="mx-effects/__test__/29" id="'+d(y)+'_demo29"></div><div mx-view="mx-effects/__test__/22" id="'+d(y)+'_demo22"></div><div mx-view="mx-effects/__test__/21" id="'+d(y)+'_demo21"></div><div mx-view="mx-effects/__test__/23" id="'+d(y)+'_demo23"></div><div mx-view="mx-effects/__test__/20" id="'+d(y)+'_demo20"></div></div></div><div id="'+d(y)+'_api" mx-view="mx-title/second?content=%E9%80%9A%E7%94%A8%E5%8F%82%E6%95%B0"></div><div mxv="options" mx-view="__test__/api?options='+n(i,u)+'"></div></div>'},render:function(){this.updater.digest({viewId:this.id,options:[{key:"num",desc:"当前进度，0 ~ 100之间的数字，传入几位小数展示几位小数，最多保留两位小数",type:"number",def:""},{key:"color",desc:"自定义颜色，#4d7fff 或者 rgb(77, 127, 255)",type:"string",def:"品牌色"},{key:"color-gradient",desc:"自定义渐变颜色",type:"string",def:""},{key:"vs",desc:"是否显示左右占比",type:"boolean",def:!1},{key:"color-vs",desc:"vs=true时，对比色值",type:"string",def:"#f0f0f0"},{key:"text",desc:"是否显示比例文案",type:"boolean",def:!0},{key:"text-placement",desc:"数值位置，只在type=line时生效<br/>可选：left，right，top，bottom",type:"string",def:"top"},{key:"width",desc:"进度条宽度",type:"number",def:"200"}]})}})});