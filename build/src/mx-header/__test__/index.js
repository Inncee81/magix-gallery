define("mx-header/__test__/index",["magix","$","__test__/subs","mx-title/second","./1","./2","__test__/api"],(e,i,t)=>{e("__test__/subs"),e("mx-title/second"),e("./1"),e("./2"),e("__test__/api");var n=e("magix");e("$");t.exports=n.View.extend({tmpl:function(e,i,t,n,d,r,_,s){if(t||(t=e),!d){var a={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,m=function(e){return"&"+a[e]+";"};d=function(e){return""+(null==e?"":e)},n=function(e){return d(e).replace(o,m)}}if(!r){var v={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return v[e]},p=/[!')(*]/g;r=function(e){return encodeURIComponent(d(e)).replace(p,c)}}if(!s){var u=/[\\'"]/g;s=function(e){return d(e).replace(u,"\\$&")}}_||(_=function(e,i,t,n){for(n=e[l];--n;)if(e[t=l+n]===i)return t;return e[t=l+e[l]++]=i,t});var l="",x="",f=e.viewId,g=e.options;return x+='<div mxv mxa="_zs_galleryb2:_" class="pr pr120"><div mx-view="__test__/subs?list='+_(t,[{name:"使用示例",key:f+"_demo",subs:[{name:"全屏",key:f+"_demo1"},{name:"容器内",key:f+"_demo2"}]},{name:"API",key:f+"_api"}])+'"></div><div id="'+n(f)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryb2:a" class="clearfix mb20"><div mx-view="mx-header/__test__/1" id="'+n(f)+'_demo1"></div><div mx-view="mx-header/__test__/2" id="'+n(f)+'_demo2"></div></div><div id="'+n(f)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options='+_(t,g)+'"></div></div>'},render:function(){this.updater.digest({viewId:this.id,options:[{key:"width",desc:"导航中间区域宽度，默认1184，会根据屏幕宽度进行修正",type:"number",def:1184},{key:"navs",desc:'导航数组<pre>[{\n    text:"展示文案",\n    value:"value值"\n}]</pre>',type:"array",def:""},{key:"cur",desc:"当前哪个导航，对应navs的value，默认不选中任何一个导航",type:"string",def:""},{key:"wrapper",desc:"导航相对定位的容器节点，默认为window",type:"string",def:""},{key:"logo",desc:"项目logo的图片地址",type:"string",def:'<img width="200" src="//img.alicdn.com/tfs/TB1vee6iAzoK1RjSZFlXXai4VXa-534-98.png">'}]})}})});