define("mx-calendar/__test__/index",["magix","$","__test__/subs","mx-title/second","./1","./2","./16","./3","./4","./14","./5","__test__/api","__test__/event","./implement"],(e,t,i)=>{e("__test__/subs"),e("mx-title/second"),e("./1"),e("./2"),e("./16"),e("./3"),e("./4"),e("./14"),e("./5"),e("__test__/api"),e("__test__/event"),e("./implement");var _=e("magix");e("$");i.exports=_.View.extend({tmpl:function(e,t,i,_,d,n,s,m){if(i||(i=e),!d){var a={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},r=/[&<>"'`]/g,v=function(e){return"&"+a[e]+";"};d=function(e){return""+(null==e?"":e)},_=function(e){return d(e).replace(r,v)}}if(!n){var l={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return l[e]},x=/[!')(*]/g;n=function(e){return encodeURIComponent(d(e)).replace(x,c)}}if(!m){var o=/[\\'"]/g;m=function(e){return d(e).replace(o,"\\$&")}}s||(s=function(e,t,i,_){for(_=e[p];--_;)if(e[i=p+_]===t)return i;return e[i=p+e[p]++]=t,i});var p="",y="",u=e.viewId,f=e.options,g=e.events;return y+='<div mxv mxa="_zs_gallery$:_" class="pr pr120"><div mx-view="__test__/subs?list='+s(i,[{name:"使用示例",key:u+"_demo",subs:[{name:"提示前缀",key:u+"_demo1"},{name:"可选择时分秒",key:u+"_demo4"},{name:"限制部分不可选",key:u+"_demo14"},{name:"只选择月份",key:u+"_demo16"}]},{name:"API",key:u+"_api"},{name:"Event",key:u+"_event"},{name:"关于实现方案",key:u+"_implement"}])+'"></div><div id="'+_(u)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallery$:a" class="clearfix mb20"><div mxa="_zs_gallery$:b" class="_zs_gallerye"><div mx-view="mx-calendar/__test__/1" id="'+_(u)+'_demo1"></div><div mxs="_zs_gallery$:_" mx-view="mx-calendar/__test__/2"></div><div mx-view="mx-calendar/__test__/16" id="'+_(u)+'_demo16"></div></div><div mxa="_zs_gallery$:c" class="_zs_gallerye"><div mxs="_zs_gallery$:a" mx-view="mx-calendar/__test__/3"></div><div mx-view="mx-calendar/__test__/4" id="'+_(u)+'_demo4"></div><div mx-view="mx-calendar/__test__/14" id="'+_(u)+'_demo14"></div><div mxs="_zs_gallery$:b" mx-view="mx-calendar/__test__/5"></div></div></div><div id="'+_(u)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options='+s(i,f)+'" class="mb40"></div><div id="'+_(u)+'_event" mx-view="mx-title/second?content=Event"></div><div mxv="events" mx-view="__test__/event?options='+s(i,g)+'" class="mb40"></div><div mx-view="mx-calendar/__test__/implement" id="'+_(u)+'_implement"></div></div>'},render:function(){this.updater.digest({viewId:this.id,options:[{key:"max",desc:"最大可选的日期",type:"string"},{key:"min",desc:"最小可选的日期",type:"string",def:""},{key:"selected",desc:"默认选中的日期",type:"string",def:"1. 今天小于min，默认为min<br/>2. 今天大于max，默认为max<br/>3. 今天在可选范围之内，默认为今天"},{key:"time-type",desc:'时分秒选择类型，设置该值后会出现时间选择组件<br/>可选择"hour,minute,second"中的一个或者多个<br/>此外提供快捷的配置"all" = "hour,minute,second"',type:"string",def:""},{key:"align",desc:"日历与目标的对齐方式，可选left和right",type:"string",def:"left"},{key:"prefix",desc:"提示文案前缀，展示为prefix：YYYY-MM-DD",type:"string",def:""},{key:"disabled-weeks",desc:"限制周几不可选，[0, 1, 2, 3, 4, 5, 6]的子集",type:"array",def:"[]"},{key:"week-start",desc:"从周几开，0-6，0表示周日",type:"number",def:"0"}],events:[{type:"change",desc:"切换日期时会触发",params:[{key:"date",desc:"当前日期，格式：YYYY-MM-DD",type:"string"},{key:"time",desc:"当前时分秒",type:"string"}]}]})}})});