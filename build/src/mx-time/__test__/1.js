define("mx-time/__test__/1",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,s,i)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var l=e("__test__/example");e("$");i.exports=l.extend({tmpl:function(e,s,i,l,n,t,a,_){if(i||(i=e),!n){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},m=/[&<>"'`]/g,c=function(e){return"&"+d[e]+";"};n=function(e){return""+(null==e?"":e)},l=function(e){return n(e).replace(m,c)}}if(!t){var r={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return r[e]},g=/[!')(*]/g;t=function(e){return encodeURIComponent(n(e)).replace(g,x)}}if(!_){var v=/[\\'"]/g;_=function(e){return n(e).replace(v,"\\$&")}}var o="",p=e.time,y=e.viewId,u=e.text1,z=e.text2;return o+='<div mxa="_zs_gallerye4:_" class="_zs_galleryg"><div mxa="_zs_gallerye4:a" class="_zs_galleryj"><div mxs="_zs_gallerye4:_" class="mb15 lh22"><div class="color-9">下列三种写法等价，时分秒均可选：</div><div class="pl10">types=""</div><div class="pl10">types="all"</div><div class="pl10">types="hour,minute,second"</div></div><div mxa="_zs_gallerye4:b" class="mb20"><span mxs="_zs_gallerye4:a" class="color-9">当前时间：</span>'+l(p)+'</div><div class="w120" id="'+l(y)+'_time" mx-change="'+s+'change()" mx-view="mx-time/index?time='+t(p)+'"></div></div><div mxa="_zs_gallerye4:c" class="_zs_galleryk"><div mxs="_zs_gallerye4:b" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+s+'done({id:1})" mx-view="mx-copy/index?copyNode='+t(y)+'_text_1"><span mxa="_zs_gallerye4:d" class="_zs_galleryn">'+n(u)+'</span><i mxs="_zs_gallerye4:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(y)+'_text_1">\n&lt;mx-time class="w120" \n    id="&#123;&#123;=viewId&#125;&#125;_time"\n    time="10:10:10"\n    mx-change="change()" /&gt;\n\n&lt;!-- 等价于 --&gt;\n&lt;mx-time class="w120" \n    id="&#123;&#123;=viewId&#125;&#125;_time"\n    time="10:10:10"\n    types="all"\n    mx-change="change()" /&gt;\n\n&lt;!-- 等价于 --&gt;\n&lt;mx-time class="w120" \n    id="&#123;&#123;=viewId&#125;&#125;_time"\n    time="10:10:10"\n    types="hour,minute,second"\n    mx-change="change()" /&gt;\n        </pre></div><div mxa="_zs_gallerye4:e" class="_zs_galleryk"><div mxs="_zs_gallerye4:d" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+s+'done({id:2})" mx-view="mx-copy/index?copyNode='+t(y)+'_text_2"><span mxa="_zs_gallerye4:f" class="_zs_galleryn">'+n(z)+'</span><i mxs="_zs_gallerye4:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(y)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@1.html',\n    render() &#123;\n        this.updater.digest(&#123;&#125;);\n    &#125;,\n    'change&lt;change&gt;'(e)&#123;\n        // e.time：当前时间\n    &#125;\n&#125;);\n        </pre></div></div>"},render:function(){this.updater.digest({time:"10:10:10"})},"change<change>":function(e){this.updater.digest({time:e.time})}})});