define("mx-taginput/__test__/index",["magix","$","mx-title/second","./1","./2","./3","./4","__test__/api"],(e,t,i)=>{e("mx-title/second"),e("./1"),e("./2"),e("./3"),e("./4"),e("__test__/api");var n=e("magix");e("$");i.exports=n.View.extend({tmpl:function(e,t,i,n,d,s,r,a){if(i||(i=e),!d){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},l=/[&<>"'`]/g,v=function(e){return"&"+_[e]+";"};d=function(e){return""+(null==e?"":e)},function(e){return d(e).replace(l,v)}}if(!s){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return x[e]},u=/[!')(*]/g;s=function(e){return encodeURIComponent(d(e)).replace(u,c)}}if(!a){var m=/[\\'"]/g;a=function(e){return d(e).replace(m,"\\$&")}}r||(r=function(e,t,i,n){for(n=e[o];--n;)if(e[i=o+n]===t)return i;return e[i=o+e[o]++]=t,i});var o="",p="";return p+='<div mxs="_zs_gallerydj:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_gallerydj:a" class="clearfix mb20"><div class="_zs_galleryc"><div mx-view="mx-taginput/__test__/1"></div></div><div class="_zs_galleryc"><div mx-view="mx-taginput/__test__/2"></div><div mx-view="mx-taginput/__test__/3"></div><div mx-view="mx-taginput/__test__/4"></div></div></div><div mxs="_zs_gallerydj:b" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options='+r(i,e.options)+'"></div>'},render:function(){this.updater.digest({options:[{key:"list",desc:'列表数组<br>支持简单数组如[1,2,3]<br>支持对象数组，如[{value:1,text:"a"}]，可自定义text-key和value-key',type:"array"},{key:"selected",desc:"当前选中值，多个值逗号分隔",type:"string",def:""},{key:"text-key",desc:"渲染text时读取的key",type:"string",def:"text"},{key:"value-key",desc:"渲染value时读取的key",type:"string",def:"value"},{key:"placeholder",desc:"空状态提示文案",type:"string",def:"请选择"},{key:"mx-disabled",desc:"是否禁用，请在节点上配置mx-disabled<br/>&lt;mx-taginput mx-disabled&gt;&lt;/mx-taginput&gt;",type:"",def:""}]})}})});