define("mx-copy/__test__/index",["magix","__test__/example","$","__test__/subs","mx-title/second","../index","__test__/hl","__test__/api","__test__/event"],(e,s,t)=>{e("__test__/subs"),e("mx-title/second"),e("../index"),e("__test__/hl"),e("__test__/api"),e("__test__/event");e("magix");var _=e("__test__/example");e("$");t.exports=_.extend({tmpl:function(e,s,t,_,i,a,n,l){if(t||(t=e),!i){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},r=/[&<>"'`]/g,c=function(e){return"&"+d[e]+";"};i=function(e){return""+(null==e?"":e)},_=function(e){return i(e).replace(r,c)}}if(!a){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return o[e]},v=/[!')(*]/g;a=function(e){return encodeURIComponent(i(e)).replace(v,x)}}if(!l){var m=/[\\'"]/g;l=function(e){return i(e).replace(m,"\\$&")}}n||(n=function(e,s,t,_){for(_=e[g];--_;)if(e[t=g+_]===s)return t;return e[t=g+e[g]++]=s,t});var g="",p="",y=e.viewId,u=e.success,z=e.text2,f=e.text3,w=e.options,b=e.events;return p+='<div mxv mxa="_zs_galleryao:_" class="pr pr120"><div mx-view="__test__/subs?list='+n(t,[{name:"使用示例",key:y+"_demo"},{name:"API",key:y+"_api"},{name:"Event",key:y+"_event"}])+'"></div><div id="'+_(y)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxv mxa="_zs_galleryao:a" class="_zs_galleryh"><div mxv mxa="_zs_galleryao:b" class="_zs_galleryk"><div mxa="_zs_galleryao:c" class="mb20"><div class="btn btn-brand" mx-success="'+s+'done2()" mx-view="mx-copy/index?copyNode='+a(y)+'_text_1">复制</div>',u&&(p+='<span mxs="_zs_galleryao:_" class="color-green ml20">复制成功</span>'),p+='</div><textarea cols="30" rows="4" id="'+_(y)+'_text_1">Magix棒棒的！</textarea></div><div mxa="_zs_galleryao:d" class="clearfix"><div mxa="_zs_galleryao:e" class="_zs_galleryl _zs_gallerye"><div mxs="_zs_galleryao:a" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+s+'done({id:2})" mx-view="mx-copy/index?copyNode='+a(y)+'_text_2"><span mxa="_zs_galleryao:f" class="_zs_galleryo">'+i(z)+'</span><i mxs="_zs_galleryao:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+_(y)+'_text_2">\n    &lt;div class="mb20"&gt;\n        &lt;mx-copy copy-node="&#123;&#123;=viewId&#125;&#125;_text_1" class="btn btn-brand"\n            mx-success="done()"&gt;复制&lt;/mx-copy&gt;\n        &#123;&#123;if success&#125;&#125;\n        &lt;span class="color-green ml20"&gt;复制成功&lt;/span&gt;\n        &#123;&#123;/if&#125;&#125;\n    &lt;/div&gt;\n    &lt;textarea cols="30" rows="4" id="&#123;&#123;=viewId&#125;&#125;_text_1"&gt;Magix棒棒的！&lt;/textarea&gt;</pre></div><div mxa="_zs_galleryao:g" class="_zs_galleryl _zs_gallerye _zs_galleryf"><div mxs="_zs_galleryao:a" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+s+'done({id:3})" mx-view="mx-copy/index?copyNode='+a(y)+'_text_3"><span mxa="_zs_galleryao:h" class="_zs_galleryo">'+i(f)+'</span><i mxs="_zs_galleryao:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+_(y)+"_text_3\">\n    let Magix = require('magix');\n    let $ = require('$');\n    \n    module.exports = Magix.View.extend(&#123;\n        tmpl: '@index.html',\n        render() &#123;\n            this.updater.digest(&#123;\n                viewId: this.id\n            &#125;);\n        &#125;,\n        'done&lt;success&gt;'(e) &#123;\n            this.updater.digest(&#123;\n                success: true\n            &#125;)\n        &#125;\n    &#125;);</pre></div></div></div><div id=\""+_(y)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options='+n(t,w)+'" class="mb40"></div><div id="'+_(y)+'_event" mx-view="mx-title/second?content=Event"></div><div mxv="events" mx-view="__test__/event?options='+n(t,b)+'"></div></div>'},render:function(){this.updater.digest({options:[{key:"copy-node",desc:"需要复制的节点id",type:"string",def:""}],events:[{type:"success",desc:"复制成功触发",params:[{key:"-",desc:"-",type:"-"}]},{type:"error",desc:"复制失败触发",params:[{key:"-",desc:"-",type:"-"}]}]})},"done2<success>":function(e){this.updater.digest({success:!0})}})});