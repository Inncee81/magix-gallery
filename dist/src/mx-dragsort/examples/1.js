define("mx-dragsort/examples/1",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,a,l)=>{e("../index"),e("mx-copy/index"),e("examples/hl");var s=e("magix"),i=e("examples/example"),r=e("$");s.applyStyle("_zs_galleryF","._zs_gallerydY{width:120px;padding:10px;margin-bottom:10px;margin-right:10px;border:1px solid var(--color-border);border-radius:var(--border-radius);cursor:pointer}"),l.exports=i.extend({tmpl:function(e,a,l,s,i,r,d,n){if(l||(l=e),!i){var t={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},_=/[&<>"'`]/g,x=function(e){return"&"+t[e]+";"};i=function(e){return""+(null==e?"":e)},s=function(e){return i(e).replace(_,x)}}if(!r){var g={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return g[e]},c=/[!')(*]/g;r=function(e){return encodeURIComponent(i(e)).replace(c,m)}}if(!n){var o=/[\\'"]/g;n=function(e){return i(e).replace(o,"\\$&")}}var p="",v=e.items,y=e.viewId,z=e.text1,u=e.text3,f=e.text2;p+='<div mxa="_zs_gallerya5:_" class="_zs_galleryg"><div mxa="_zs_gallerya5:a" class="_zs_galleryj"><div mxs="_zs_gallerya5:_" class="mb20"><span class="color-9">以下示例：</span>支持垂直方向的排序</div><div mxa="_zs_gallerya5:b" class="clearfix"><ul mxa="_zs_gallerya5:c" class="fl mr40" mx-view="mx-dragsort/index" mx-dragfinish="'+a+'drag()">';for(var h=0,b=v.length;h<b;h++){p+='<li class="_zs_gallerydY" data-value="'+s(C=v[h])+'">'+s(C)+"</li>"}p+='</ul><div mxa="_zs_gallerya5:d" class="fl"><div mxs="_zs_gallerya5:a">当前顺序：</div>';for(var w=0,$=v.length;w<$;w++){var C;p+="<div>"+s(C=v[w])+"</div>"}return p+='</div></div></div><div mxa="_zs_gallerya5:e" class="clearfix"><div mxa="_zs_gallerya5:f" class="_zs_galleryd"><div mxa="_zs_gallerya5:g" class="_zs_galleryk"><div mxs="_zs_gallerya5:b" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(y)+'_text_1"><span mxa="_zs_gallerya5:h" class="_zs_galleryn">'+i(z)+'</span><i mxs="_zs_gallerya5:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+s(y)+'_text_1">\n&lt;!-- mx-view 指到组件地址 --&gt;\n&lt;ul mx-view="app/gallery/mx-dragsort/index" \n    mx-dragfinish="drag()"&gt;\n    &#123;&#123;each items as item&#125;&#125;\n    &lt;li class="item" data-value="&#123;&#123;=item&#125;&#125;"&gt;&#123;&#123;=item&#125;&#125;&lt;/li&gt;\n    &#123;&#123;/each&#125;&#125;\n&lt;/ul&gt;\n                </pre></div><div mxa="_zs_gallerya5:i" class="_zs_galleryk"><div mxs="_zs_gallerya5:d" class="_zs_galleryi">CSS Code</div><div class="_zs_galleryl" mx-success="'+a+'done({id:3})" mx-view="mx-copy/index?copyNode='+r(y)+'_text_3"><span mxa="_zs_gallerya5:j" class="_zs_galleryn">'+i(u)+'</span><i mxs="_zs_gallerya5:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+s(y)+'_text_3">\n.item&#123;\n    width: 200px;\n    padding: 10px;\n    margin-bottom: 10px;\n    border: 1px solid @color-border;\n    border-radius: @border-radius;\n    cursor: pointer;\n&#125;\n                </pre></div></div><div mxa="_zs_gallerya5:k" class="_zs_galleryd _zs_gallerye"><div mxa="_zs_gallerya5:l" class="_zs_galleryk"><div mxs="_zs_gallerya5:e" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+a+'done({id:2})" mx-view="mx-copy/index?copyNode='+r(y)+'_text_2"><span mxa="_zs_gallerya5:m" class="_zs_galleryn">'+i(f)+'</span><i mxs="_zs_gallerya5:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+s(y)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\nMagix.applyStyle('@index.less');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        this.updater.digest(&#123;\n            items: [1, 2, 3, 4, 5]\n        &#125;);\n    &#125;,\n    'drag&lt;dragfinish&gt;'(e) &#123;\n        // 重排序之后的\n        let items = [];\n        let drags = $('#' + this.id + ' .@index.less:item');\n        for (var i = 0, len = drags.length; i &lt; len; i++) &#123;\n            let drag = $(drags[i]);\n            items.push(drag.data('value'));\n        &#125;\n        this.updater.digest(&#123;\n            items\n        &#125;);\n    &#125;\n&#125;);\n                </pre></div></div></div></div>"},render:function(){this.updater.digest({items:[1,2,3,4,5]})},"drag<dragfinish>":function(e){for(var a=[],l=r("#"+this.id+" ._zs_gallerydY"),s=0,i=l.length;s<i;s++){var d=r(l[s]);a.push(d.data("value"))}this.updater.digest({items:a})}})});