define("mx-dropdown/examples/32",["magix","examples/example","$","../multiple","mx-copy/index","examples/hl"],(e,l,s)=>{e("../multiple"),e("mx-copy/index"),e("examples/hl");e("magix");var n=e("examples/example");e("$");s.exports=n.extend({tmpl:function(e,l,s,n,i,r,a,t){if(s||(s=e),!i){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,m=function(e){return"&"+d[e]+";"};i=function(e){return""+(null==e?"":e)},n=function(e){return i(e).replace(c,m)}}if(!r){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},_=function(e){return x[e]},o=/[!')(*]/g;r=function(e){return encodeURIComponent(i(e)).replace(o,_)}}if(!t){var g=/[\\'"]/g;t=function(e){return i(e).replace(g,"\\$&")}}a||(a=function(e,l,s,n){for(n=e[p];--n;)if(e[s=p+n]===l)return s;return e[s=p+e[p]++]=l,s});var p="",v="",u=e.checker,y=e.viewId,z=e.text1,f=e.text2;return v+='<div mxv mxa="_zs_gallerybd:_" class="_zs_galleryg"><div mxv mxa="_zs_gallerybd:a" class="_zs_galleryj"><div mxs="_zs_gallerybd:_" class="mb20 clearfix lh22"><div class="fl color-9">以下示例：</div><div class="fl">自定义提交校验函数，最多选择两个</div></div><div mxv="checker" class="w280" mx-view="mx-dropdown/multiple?name=%E6%95%B0%E5%AD%97&list='+a(s,[1,2,3,4,5,6])+"&submitChecker="+a(s,u)+'"></div></div><div mxa="_zs_gallerybd:b" class="_zs_galleryk"><div mxs="_zs_gallerybd:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(y)+'_text_1"><span mxa="_zs_gallerybd:c" class="_zs_galleryn">'+i(z)+'</span><i mxs="_zs_gallerybd:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+n(y)+'_text_1">\n&lt;mx-dropdown.multiple class="w280"  \n    name="数字"\n    list="&#123;&#123;@[1,2,3,4,5,6]&#125;&#125;"\n    submit-checker="&#123;&#123;@checker&#125;&#125;"/&gt;\n        </pre></div><div mxa="_zs_gallerybd:d" class="_zs_galleryk"><div mxs="_zs_gallerybd:c" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+r(y)+'_text_2"><span mxa="_zs_gallerybd:e" class="_zs_galleryn">'+i(f)+'</span><i mxs="_zs_gallerybd:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+n(y)+"_text_2\">\nlet Magix = require('magix');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@32.html',\n    render() &#123;\n        let that = this;\n        that.updater.digest(&#123;\n            checker: (selected) =&gt; &#123;\n                return new Promise(resolve =&gt; &#123;\n                    resolve((selected.length &gt; 2) ? '最多选择两个' : '');\n                &#125;)\n            &#125;\n        &#125;);\n    &#125;\n&#125;);\n        </pre></div></div>"},render:function(){this.updater.digest({checker:function(e){return new Promise(function(l){l(e.length>2?"最多选择两个":"")})}})}})});