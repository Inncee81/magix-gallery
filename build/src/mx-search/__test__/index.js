define("mx-search/__test__/index",["magix","$","__test__/subs","mx-title/second","./1","./4","./5","./3","./2","__test__/api","__test__/event"],(e,t,i)=>{e("__test__/subs"),e("mx-title/second"),e("./1"),e("./4"),e("./5"),e("./3"),e("./2"),e("__test__/api"),e("__test__/event");var s=e("magix");e("$");i.exports=s.View.extend({tmpl:function(e,t,i,s,n,_,d,r){if(i||(i=e),!n){var a={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},v=/[&<>"'`]/g,c=function(e){return"&"+a[e]+";"};n=function(e){return""+(null==e?"":e)},s=function(e){return n(e).replace(v,c)}}if(!_){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},l=function(e){return m[e]},o=/[!')(*]/g;_=function(e){return encodeURIComponent(n(e)).replace(o,l)}}if(!r){var x=/[\\'"]/g;r=function(e){return n(e).replace(x,"\\$&")}}d||(d=function(e,t,i,s){for(s=e[p];--s;)if(e[i=p+s]===t)return i;return e[i=p+e[p]++]=t,i});var p="",y="",u=e.viewId,g=e.options,f=e.events;return y+='<div mxv mxa="_zs_galleryc$:_" class="pr pr120"><div mx-view="__test__/subs?list='+d(i,[{name:"使用示例",key:u+"_demo",subs:[{name:"多类型搜索",key:u+"_demo1"},{name:"自定义搜索文案",key:u+"_demo5"},{name:"右对齐",key:u+"_demo3"},{name:"单个搜索",key:u+"_demo4"}]},{name:"API",key:u+"_api"},{name:"Event",key:u+"_event"}])+'"></div><div id="'+s(u)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryc$:a" class="clearfix mb20"><div mxa="_zs_galleryc$:b" class="_zs_gallerye"><div mx-view="mx-search/__test__/1" id="'+s(u)+'_demo1"></div><div mx-view="mx-search/__test__/4" id="'+s(u)+'_demo4"></div></div><div mxa="_zs_galleryc$:c" class="_zs_gallerye"><div mx-view="mx-search/__test__/5" id="'+s(u)+'_demo5"></div><div mx-view="mx-search/__test__/3" id="'+s(u)+'_demo3"></div><div mxs="_zs_galleryc$:_" mx-view="mx-search/__test__/2"></div></div></div><div id="'+s(u)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options='+d(i,g)+'" class="mb40"></div><div id="'+s(u)+'_event" mx-view="mx-title/second?content=Event"></div><div mxv="events" mx-view="__test__/event?options='+d(i,f)+'"></div></div>'},render:function(){this.updater.digest({viewId:this.id,options:[{key:"list",desc:"可搜素类型列表，例如<pre>[{\n    text: '文案',\n    value: '跟后端交互字段',\n    tmpl: '自定义下拉列表模板'\n}]\n\n关于tmpl：\n默认为 = 搜索含有“$&#123;content&#125;”的$&#123;text&#125;\n自定义时输入内容位置使用占位符$&#123;content&#125;\n</pre>",type:"array",def:""},{key:"list-text",desc:"可搜索类型展示文案",type:"string",def:"text"},{key:"list-value",desc:"可搜索类型对应的key值",type:"string",def:"value"},{key:"search-key",desc:"当前选中的搜索值，对应list-value的某个值",type:"string",def:""},{key:"search-value",desc:"搜索框的输入文案",type:"string",def:""},{key:"align",desc:"左对齐还是右对齐，left or right",type:"string",def:"left"},{key:"placeholder",desc:"空状态提示文案",type:"string",def:"配置了placeholder，显示placeholder，否则<br>配置了list，默认显示list-text.join('/')<br>单个类型搜索默认显示搜素"}],events:[{type:"trigger",desc:"回车（默认搜索第一个）<br/>或者点选下拉列表某个选项时触发",params:[{key:"searchKey",desc:"下拉列表选中项",type:"string"},{key:"searchValue",desc:"输入框输入的内容",type:"string"}]}]})}})});