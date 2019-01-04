define("mx-pagination/__test__/index",["magix","__test__/example","$","__test__/subs","mx-title/second","../index","mx-copy/index","__test__/hl","./1","./2","./4","./3","__test__/api","__test__/event"],(e,s,t)=>{e("__test__/subs"),e("mx-title/second"),e("../index"),e("mx-copy/index"),e("__test__/hl"),e("./1"),e("./2"),e("./4"),e("./3"),e("__test__/api"),e("__test__/event");e("magix");var i=e("__test__/example");e("$");t.exports=i.extend({tmpl:function(e,s,t,i,_,a,n,l){if(t||(t=e),!_){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,m=function(e){return"&"+d[e]+";"};_=function(e){return""+(null==e?"":e)},i=function(e){return _(e).replace(c,m)}}if(!a){var r={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return r[e]},p=/[!')(*]/g;a=function(e){return encodeURIComponent(_(e)).replace(p,o)}}if(!l){var x=/[\\'"]/g;l=function(e){return _(e).replace(x,"\\$&")}}n||(n=function(e,s,t,i){for(i=e[g];--i;)if(e[t=g+i]===s)return t;return e[t=g+e[g]++]=s,t});var g="",v="",y=e.viewId,z=e.page,u=e.size,f=e.text1,h=e.text2,b=e.options,k=e.events;return v+='<div mxv mxa="_zs_galleryct:_" class="pr pr120"><div mx-view="__test__/subs?list='+n(t,[{name:"使用示例",key:y+"_demo",subs:[{name:"完整示例",key:y+"_demo1"},{name:"精简版",key:y+"_demo2"},{name:"顺序翻页",key:y+"_demo3"},{name:"居中显示",key:y+"_demo4"}]},{name:"API",key:y+"_api"},{name:"Event",key:y+"_event"}])+'"></div><div id="'+i(y)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div class="_zs_galleryh" id="'+i(y)+'_demo1"><div mxa="_zs_galleryct:a" class="_zs_galleryk clearfix"><div mxa="_zs_galleryct:b" class="mb20"><span mxs="_zs_galleryct:_" class="color-9">当前页数：</span><span mxa="_zs_galleryct:c" class="mr20">'+i(z)+'</span><span mxs="_zs_galleryct:a" class="color-9">每页展示：</span><span>'+i(u)+'</span></div><div mx-change="'+s+'change()" mx-view="mx-pagination/index?total=600&sizes='+n(t,[20,40,50])+"&step=6&size="+a(u)+"&page="+a(z)+'"></div></div><div mxa="_zs_galleryct:d" class="clearfix"><div mxa="_zs_galleryct:e" class="_zs_galleryl _zs_gallerye"><div mxs="_zs_galleryct:b" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+s+'done({id:1})" mx-view="mx-copy/index?copyNode='+a(y)+'_text_1"><span mxa="_zs_galleryct:f" class="_zs_galleryo">'+_(f)+'</span><i mxs="_zs_galleryct:c" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+i(y)+'_text_1">\n    &lt;mx-pagination\n        total="600" \n        sizes="&#123;&#123;@[20,40,50]&#125;&#125;"\n        step="6"\n        size="&#123;&#123;=size&#125;&#125;" \n        page="&#123;&#123;=page&#125;&#125;"\n        mx-change="change()"&gt;\n    &lt;/mx-pagination&gt;</pre></div><div mxa="_zs_galleryct:g" class="_zs_galleryl _zs_gallerye _zs_galleryf"><div mxs="_zs_galleryct:d" class="_zs_galleryj">JS Code</div><div class="_zs_gallerym" mx-success="'+s+'done({id:2})" mx-view="mx-copy/index?copyNode='+a(y)+'_text_2"><span mxa="_zs_galleryct:h" class="_zs_galleryo">'+_(h)+'</span><i mxs="_zs_galleryct:c" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+i(y)+'_text_2">\n    let Magix = require(\'magix\');\n    let $ = require(\'$\');\n    \n    module.exports = Magix.View.extend(&#123;\n        tmpl: \'@index.html\',\n        render() &#123;\n            this.updater.digest(&#123;\n                page: 1,\n                size: 40\n            &#125;);\n        &#125;,\n        \'change&lt;change&gt;\' (e) &#123;\n            // e.page 当前第几页\n            // e.size 每页多少条\n            this.updater.digest(&#123;\n                page: e.page,\n                size: e.size\n            &#125;)\n        &#125;\n    &#125;);</pre></div></div></div><div mxs="_zs_galleryct:e" mx-view="mx-pagination/__test__/1"></div><div mxa="_zs_galleryct:i" class="clearfix mb20"><div mxa="_zs_galleryct:j" class="_zs_gallerye"><div mx-view="mx-pagination/__test__/2" id="'+i(y)+'_demo2"></div><div mx-view="mx-pagination/__test__/4" id="'+i(y)+'_demo4"></div></div><div mxa="_zs_galleryct:k" class="_zs_gallerye"><div mx-view="mx-pagination/__test__/3" id="'+i(y)+'_demo3"></div></div></div><div id="'+i(y)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options='+n(t,b)+'" class="mb40"></div><div id="'+i(y)+'_event" mx-view="mx-title/second?content=Event"></div><div mxv="events" mx-view="__test__/event?options='+n(t,k)+'"></div></div>'},render:function(){this.updater.digest({viewId:this.id,options:[{key:"total",desc:"总数",type:"number"},{key:"page",desc:"当前第几页",type:"number",def:1},{key:"size",desc:"每页多少条",type:"number",def:40},{key:"sizes",desc:"可选分页数",type:"array",def:"[10,20,30,40]"},{key:"jump",desc:"是否有快捷跳转",type:"boolean",def:"true"},{key:"simplify",desc:"只有翻页器，没有汇总数据版本",type:"boolean",def:"false"},{key:"sizes-change",desc:"是否可切换分页数",type:"boolean",def:"true"},{key:"sizes-placement",desc:"分页选择框展示方向，bottom（下方），top（上方）",type:"string",def:"bottom"},{key:"mini",desc:"顺序翻页版本",type:"boolean",def:"false"},{key:"step",desc:"页码过多时，中间显示多少条页码",type:"number",def:"5"}],events:[{type:"change",desc:"切换页码，分页数时均会触发",params:[{key:"page",desc:"当前页码",type:"number"},{key:"size",desc:"每页条数",type:"number"}]}],page:1,size:40})},"change<change>":function(e){this.updater.digest({page:e.page,size:e.size})}})});