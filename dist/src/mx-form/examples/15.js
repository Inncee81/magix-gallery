define("mx-form/examples/15",["magix","examples/example","mx-form/index","mx-form/validator","$","mx-taginput/index","mx-copy/index","examples/hl"],(e,l,a)=>{e("mx-taginput/index"),e("mx-copy/index"),e("examples/hl");e("magix");var s=e("examples/example"),i=e("mx-form/index"),r=e("mx-form/validator");e("$");a.exports=s.extend({tmpl:function(e,l,a,s,i,r,n,t){if(a||(a=e),!i){var x={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},m=/[&<>"'`]/g,d=function(e){return"&"+x[e]+";"};i=function(e){return""+(null==e?"":e)},s=function(e){return i(e).replace(m,d)}}if(!r){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},_=function(e){return c[e]},g=/[!')(*]/g;r=function(e){return encodeURIComponent(i(e)).replace(g,_)}}if(!t){var o=/[\\'"]/g;t=function(e){return i(e).replace(o,"\\$&")}}n||(n=function(e,l,a,s){for(s=e[p];--s;)if(e[a=p+s]===l)return a;return e[a=p+e[p]++]=l,a});var p="",v="",u=e.list,y=e.tags,f=e.viewId,z=e.text1,h=e.text2;return v+='<div mxv mxa="_zs_gallerycl:_" class="_zs_galleryg"><div mxv mxa="_zs_gallerycl:a" class="_zs_galleryj"><div mxv mxa="_zs_gallerycl:b" class="mb20 clearfix"><span mxs="_zs_gallerycl:_" class="color-9 mr20 fl lh32">taginput必选：</span><div mxv="list,tags" mxe="'+l+'_0" mxc="[{p:\'tags\',f:{required:true},a:\'selected\'}]" class="fl w220" mx-view="mx-taginput/index?list='+n(a,u)+"&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%A0%87%E7%AD%BE&selected="+n(a,y)+'"></div></div></div><div mxa="_zs_gallerycl:c" class="clearfix"><div mxa="_zs_gallerycl:d" class="_zs_galleryk _zs_galleryd"><div mxs="_zs_gallerycl:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(f)+'_text_1"><span mxa="_zs_gallerycl:e" class="_zs_galleryn">'+i(z)+'</span><i mxs="_zs_gallerycl:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+s(f)+'_text_1">\n&lt;mx-taginput class="w220"\n    list="&#123;&#123;@list&#125;&#125;"\n    placeholder="请选择标签"\n    selected="&#123;&#123;:tags&#123;required:true&#125;&#125;&#125;"/&gt;</pre></div><div mxa="_zs_gallerycl:f" class="_zs_galleryk _zs_galleryd _zs_gallerye"><div mxs="_zs_gallerycl:c" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+r(f)+'_text_2"><span mxa="_zs_gallerycl:g" class="_zs_galleryn">'+i(h)+'</span><i mxs="_zs_gallerycl:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+s(f)+"_text_2\">\nlet Magix = require('magix');\nlet Form = require('@../mx-form/index');\nlet Validator = require('@../mx-form/validator');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    mixins: [Form, Validator],\n    render() &#123;\n        this.updater.digest(&#123;\n            list: [1, 2, 3],\n            tags: [1]\n        &#125;);\n    &#125;\n&#125;);</pre></div></div></div>"},mixins:[i,r],render:function(){this.updater.digest({list:[1,2,3],tags:[1]})}})});