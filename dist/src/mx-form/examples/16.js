define("mx-form/examples/16",["magix","examples/example","mx-form/index","mx-form/validator","$","mx-copy/index","examples/hl"],(e,l,a)=>{e("mx-copy/index"),e("examples/hl");e("magix");var s=e("examples/example"),i=e("mx-form/index"),n=e("mx-form/validator");e("$");a.exports=s.extend({tmpl:function(e,l,a,s,i,n,r,t){if(a||(a=e),!i){var m={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},_=/[&<>"'`]/g,d=function(e){return"&"+m[e]+";"};i=function(e){return""+(null==e?"":e)},s=function(e){return i(e).replace(_,d)}}if(!n){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return x[e]},p=/[!')(*]/g;n=function(e){return encodeURIComponent(i(e)).replace(p,c)}}if(!t){var o=/[\\'"]/g;t=function(e){return i(e).replace(o,"\\$&")}}r||(r=function(e,l,a,s){for(s=e[u];--s;)if(e[a=u+s]===l)return a;return e[a=u+e[u]++]=l,a});var u="",v="",g=e.viewId,y=e.name,z=e.text1,f=e.text2;return v+='<div mxv mxa="_zs_galleryb+:_" class="_zs_galleryg"><div mxv mxa="_zs_galleryb+:a" class="_zs_galleryj"><div mxv mxa="_zs_galleryb+:b" class="clearfix mb20"><span mxs="_zs_galleryb+:_" class="color-9 mr20">节点1：</span><input class="input w240 mr20" placeholder="节点1" id="'+s(g)+'_1" value="1"/><span mxs="_zs_galleryb+:a" class="color-9 mr20">节点2：</span><input class="input w240" placeholder="节点2" id="'+s(g)+'_2" value="2"/></div><div mxv mxa="_zs_galleryb+:c" class="mb20"><span mxs="_zs_galleryb+:b" class="color-9 mr20" style="opacity: 0;">节点3：</span><input mxe="'+l+"_0\" mxc=\"[{p:'name',f:{unequalto:'"+r(a,g+"_1,"+g+"_2")+'\'}}]" class="input w240 mr20" placeholder="不同于节点1与节点2" value="'+s(y)+'"/><span mxs="_zs_galleryb+:c" class="color-9 mr20" style="opacity: 0;">节点4：</span><input mxe="'+l+"_1\" mxc=\"[{p:'name',f:{unequalto:['"+r(a,g+"_1,"+g+"_2")+'\',\'不要输入重复的内容\']}}]" class="input w240" placeholder="不同于节点1与节点2，自定义提示" value="'+s(y)+'"/></div></div><div mxa="_zs_galleryb+:d" class="clearfix"><div mxa="_zs_galleryb+:e" class="_zs_galleryk _zs_galleryd"><div mxs="_zs_galleryb+:d" class="_zs_galleryi">与某个节点的结果不重复</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(g)+'_text_1"><span mxa="_zs_galleryb+:f" class="_zs_galleryn">'+i(z)+'</span><i mxs="_zs_galleryb+:e" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+s(g)+'_text_1">\n&lt;input class="input" placeholder="节点1" \n    id="&#123;&#123;=viewId&#125;&#125;_1" value="1"/&gt;\n\n&lt;input class="input" placeholder="节点2" \n    id="&#123;&#123;=viewId&#125;&#125;_2" value="2"/&gt;\n\n&lt;input class="input" placeholder="不同于节点1与节点2" \n    value="&#123;&#123;:name&#123;unequalto:viewId + \'_1,\' + viewId + \'_2\'&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="不同于节点1与节点2，自定义提示" \n    value="&#123;&#123;:name&#123;unequalto:[viewId + \'_1,\' + viewId + \'_2\',\'不要输入重复的内容\']&#125;&#125;&#125;"/&gt;</pre></div><div mxa="_zs_galleryb+:g" class="_zs_galleryk _zs_galleryd _zs_gallerye"><div mxs="_zs_galleryb+:f" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+n(g)+'_text_2"><span mxa="_zs_galleryb+:h" class="_zs_galleryn">'+i(f)+'</span><i mxs="_zs_galleryb+:e" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+s(g)+"_text_2\">\nlet Magix = require('magix');\nlet Form = require('@../mx-form/index');\nlet Validator = require('@../mx-form/validator');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [Form, Validator],\n    render() {\n        this.updater.digest({\n            viewId: this.id\n        });\n    }\n});</pre></div></div></div>"},mixins:[i,n],render:function(){this.updater.digest({viewId:this.id})}})});