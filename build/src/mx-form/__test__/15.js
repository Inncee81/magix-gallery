define("mx-form/__test__/15",["magix","__test__/example","mx-form/index","mx-form/validator","$","mx-taginput/index","mx-copy/index","__test__/hl"],(e,l,a)=>{e("mx-taginput/index"),e("mx-copy/index"),e("__test__/hl");e("magix");var s=e("__test__/example"),i=e("mx-form/index"),t=e("mx-form/validator");e("$");a.exports=s.extend({tmpl:function(e,l,a,s,i,t,r,_){if(a||(a=e),!i){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,d=function(e){return"&"+n[e]+";"};i=function(e){return""+(null==e?"":e)},s=function(e){return i(e).replace(x,d)}}if(!t){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return m[e]},g=/[!')(*]/g;t=function(e){return encodeURIComponent(i(e)).replace(g,c)}}if(!_){var o=/[\\'"]/g;_=function(e){return i(e).replace(o,"\\$&")}}r||(r=function(e,l,a,s){for(s=e[v];--s;)if(e[a=v+s]===l)return a;return e[a=v+e[v]++]=l,a});var v="",p="",u=e.list,y=e.tags,f=e.viewId,z=e.text1,h=e.text2;return p+='<div mxv mxa="_zs_gallerya-:_" class="_zs_galleryf"><div mxv mxa="_zs_gallerya-:a" class="_zs_galleryh"><div mxv mxa="_zs_gallerya-:b" class="mb20 clearfix"><span mxs="_zs_gallerya-:_" class="color-9 mr20 fl lh32">taginput必选：</span><div mxv="list,tags" mxe="'+l+'_0" mxc="[{p:\'tags\',f:{required:true},a:\'selected\'}]" class="fl" mx-view="mx-taginput/index?list='+r(a,u)+"&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E6%A0%87%E7%AD%BE&selected="+r(a,y)+'"></div></div></div><div mxa="_zs_gallerya-:c" class="clearfix"><div mxa="_zs_gallerya-:d" class="_zs_galleryi _zs_galleryc"><div mxs="_zs_gallerya-:a" class="_zs_galleryg">HTML Code</div><div class="_zs_galleryj" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+t(f)+'_text_1"><span mxa="_zs_gallerya-:e" class="_zs_galleryl">'+i(z)+'</span><i mxs="_zs_gallerya-:b" class="mc-iconfont _zs_galleryk">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+s(f)+'_text_1">\n&lt;mx-taginput \n    list="&#123;&#123;@list&#125;&#125;"\n    placeholder="请选择标签"\n    selected="&#123;&#123;:tags&#123;required:true&#125;&#125;&#125;"/&gt;</pre></div><div mxa="_zs_gallerya-:f" class="_zs_galleryi _zs_galleryc _zs_galleryd"><div mxs="_zs_gallerya-:c" class="_zs_galleryg">JS Code</div><div class="_zs_galleryj" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+t(f)+'_text_2"><span mxa="_zs_gallerya-:g" class="_zs_galleryl">'+i(h)+'</span><i mxs="_zs_gallerya-:b" class="mc-iconfont _zs_galleryk">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+s(f)+"_text_2\">\nlet Magix = require('magix');\nlet Form = require('@../index');\nlet Validator = require('@../validator');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    mixins: [Form, Validator],\n    render() &#123;\n        this.updater.digest(&#123;\n            list: [1, 2, 3],\n            tags: [1]\n        &#125;);\n    &#125;\n&#125;);</pre></div></div></div>"},mixins:[i,t],render:function(){this.updater.digest({list:[1,2,3],tags:[1]})}})});