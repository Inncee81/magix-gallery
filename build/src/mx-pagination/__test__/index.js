define("mx-pagination/__test__/index",["magix","__test__/example","$","__test__/subs","mx-title/second","../index","mx-copy/index","__test__/hl","./1","./2","./4","./3","./5","__test__/api","__test__/event"],(e,s,i)=>{e("__test__/subs"),e("mx-title/second"),e("../index"),e("mx-copy/index"),e("__test__/hl"),e("./1"),e("./2"),e("./4"),e("./3"),e("./5"),e("__test__/api"),e("__test__/event");e("magix");var t=e("__test__/example");e("$");i.exports=t.extend({tmpl:function(e,s,i,t,_,a,n,d){if(i||(i=e),!_){var l={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},m=/[&<>"'`]/g,c=function(e){return"&"+l[e]+";"};_=function(e){return""+(null==e?"":e)},t=function(e){return _(e).replace(m,c)}}if(!a){var r={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return r[e]},p=/[!')(*]/g;a=function(e){return encodeURIComponent(_(e)).replace(p,o)}}if(!d){var x=/[\\'"]/g;d=function(e){return _(e).replace(x,"\\$&")}}n||(n=function(e,s,i,t){for(t=e[g];--t;)if(e[i=g+t]===s)return i;return e[i=g+e[g]++]=s,i});var g="",v="",y=e.viewId,z=e.page,f=e.size,u=e.text1,k=e.text2,b=e.options,h=e.events;return v+='<div mxv mxa="_zs_galleryc7:_" class="pr pr120"><div mx-view="__test__/subs?list='+n(i,[{name:"使用示例",key:y+"_demo",subs:[{name:"完整示例",key:y+"_demo6"},{name:"禁止修改页数",key:y+"_demo1"},{name:"精简版",key:y+"_demo2"},{name:"顺序翻页",key:y+"_demo3"},{name:"居中显示",key:y+"_demo4"},{name:"offset",key:y+"_demo5"}]},{name:"API",key:y+"_api"},{name:"Event",key:y+"_event"}])+'"></div><div id="'+t(y)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div class="_zs_galleryg" id="'+t(y)+'_demo6"><div mxa="_zs_galleryc7:a" class="_zs_galleryj clearfix"><div mxa="_zs_galleryc7:b" class="mb20"><span mxs="_zs_galleryc7:_" class="color-9">当前页数：</span><span mxa="_zs_galleryc7:c" class="mr20">'+t(z)+'</span><span mxs="_zs_galleryc7:a" class="color-9">每页展示：</span><span>'+t(f)+'</span></div><div mx-change="'+s+'change()" mx-view="mx-pagination/index?total=600&sizes='+n(i,[20,40,50])+"&size="+a(f)+"&page="+a(z)+'"></div></div><div mxa="_zs_galleryc7:d" class="clearfix"><div mxa="_zs_galleryc7:e" class="_zs_galleryk _zs_galleryd"><div mxs="_zs_galleryc7:b" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+s+'done({id:1})" mx-view="mx-copy/index?copyNode='+a(y)+'_text_1"><span mxa="_zs_galleryc7:f" class="_zs_galleryn">'+_(u)+'</span><i mxs="_zs_galleryc7:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+t(y)+'_text_1">\n&lt;mx-pagination\n    total="600" \n    sizes="&#123;&#123;@[20,40,50]&#125;&#125;"\n    size="&#123;&#123;=size&#125;&#125;" \n    page="&#123;&#123;=page&#125;&#125;"\n    mx-change="change()"&gt;\n&lt;/mx-pagination&gt;\n                </pre></div><div mxa="_zs_galleryc7:g" class="_zs_galleryk _zs_galleryd _zs_gallerye"><div mxs="_zs_galleryc7:d" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+s+'done({id:2})" mx-view="mx-copy/index?copyNode='+a(y)+'_text_2"><span mxa="_zs_galleryc7:h" class="_zs_galleryn">'+_(k)+'</span><i mxs="_zs_galleryc7:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+t(y)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        this.updater.digest(&#123;\n            page: 1,\n            size: 40\n        &#125;);\n    &#125;,\n    'change&lt;change&gt;' (e) &#123;\n        // e.page 当前第几页\n        // e.size 每页多少条\n        // e.offset 偏移量\n        this.updater.digest(&#123;\n            page: e.page,\n            size: e.size\n        &#125;)\n    &#125;\n&#125;);\n                </pre></div></div></div><div mx-view=\"mx-pagination/__test__/1\" id=\""+t(y)+'_demo1"></div><div mxa="_zs_galleryc7:i" class="clearfix mb20"><div mxa="_zs_galleryc7:j" class="_zs_galleryd"><div mx-view="mx-pagination/__test__/2" id="'+t(y)+'_demo2"></div><div mx-view="mx-pagination/__test__/4" id="'+t(y)+'_demo4"></div></div><div mxa="_zs_galleryc7:k" class="_zs_galleryd"><div mx-view="mx-pagination/__test__/3" id="'+t(y)+'_demo3"></div><div mx-view="mx-pagination/__test__/5" id="'+t(y)+'_demo5"></div></div></div><div id="'+t(y)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options='+n(i,b)+'" class="mb40"></div><div id="'+t(y)+'_event" mx-view="mx-title/second?content=Event"></div><div mxv="events" mx-view="__test__/event?options='+n(i,h)+'"></div></div>'},render:function(){this.updater.digest({viewId:this.id,options:[{key:"total",desc:"总数",type:"number"},{key:"page",desc:"当前第几页",type:"number",def:1},{key:"offset",desc:"偏移量，优先级 page > offset",type:"number",def:0},{key:"size",desc:"每页多少条",type:"number",def:40},{key:"sizes",desc:"可选分页数",type:"array",def:"[10,20,30,40]"},{key:"jump",desc:"是否有快捷跳转",type:"boolean",def:"true"},{key:"simplify",desc:"只有翻页器，没有汇总数据版本",type:"boolean",def:"false"},{key:"sizes-change",desc:"是否可切换分页数",type:"boolean",def:"true"},{key:"sizes-placement",desc:"分页选择框展示方向，bottom（下方），top（上方）",type:"string",def:"bottom"},{key:"mini",desc:"顺序翻页版本",type:"boolean",def:"false"},{key:"step",desc:"页码过多时，中间显示多少条页码",type:"number",def:"5"}],events:[{type:"change",desc:"切换页码，分页数时均会触发",params:[{key:"page",desc:"当前页码",type:"number"},{key:"size",desc:"每页条数",type:"number"},{key:"offset",desc:"偏移量：offset = (size - 1) * page",type:"number"}]}],page:1,size:40})},"change<change>":function(e){this.updater.digest({page:e.page,size:e.size})}})});