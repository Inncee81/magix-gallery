define("mx-duration/__test__/index",["magix","$","__test__/subs","mx-title/second","./1","./2","__test__/api"],(e,t,i)=>{e("__test__/subs"),e("mx-title/second"),e("./1"),e("./2"),e("__test__/api");var n=e("magix");e("$");i.exports=n.View.extend({tmpl:function(e,t,i,n,d,_,s,r){if(i||(i=e),!d){var o={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},m=/[&<>"'`]/g,a=function(e){return"&"+o[e]+";"};d=function(e){return""+(null==e?"":e)},n=function(e){return d(e).replace(m,a)}}if(!_){var v={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},u=function(e){return v[e]},c=/[!')(*]/g;_=function(e){return encodeURIComponent(d(e)).replace(c,u)}}if(!r){var l=/[\\'"]/g;r=function(e){return d(e).replace(l,"\\$&")}}s||(s=function(e,t,i,n){for(n=e[x];--n;)if(e[i=x+n]===t)return i;return e[i=x+e[x]++]=t,i});var x="",p="",f=e.viewId,y=e.options;return p+='<div mxv mxa="_zs_gallerybm:_" class="pr pr120"><div mx-view="__test__/subs?list='+s(i,[{name:"使用示例",key:f+"_demo",subs:[{name:"一小时",key:f+"_demo1"},{name:"半小时",key:f+"_demo2"}]},{name:"API",key:f+"_api"}])+'"></div><div id="'+n(f)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallerybm:a" class="clearfix mb20"><div mx-view="mx-duration/__test__/1" id="'+n(f)+'_demo1"></div><div mx-view="mx-duration/__test__/2" id="'+n(f)+'_demo2"></div></div><div id="'+n(f)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options='+s(i,y)+'"></div></div>'},render:function(){this.updater.digest({viewId:this.id,options:[{key:"width",desc:"宽度",type:"number",def:"780，设置了宽度的时候最小宽度也是780"},{key:"selected",desc:"当前选中值",type:"string",def:"00:00-24:00:100;00:00-24:00:100;00:00-24:00:100;00:00-24:00:100;00:00-24:00:100;00:00-24:00:100;00:00-24:00:100"},{key:"half",desc:"是否以半小时为选择间隔",type:"boolean",def:"false，默认一小时为间隔"}]})}})});