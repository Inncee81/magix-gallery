define("mx-form/__test__/14",["magix","__test__/example","mx-form/index","mx-form/validator","$","mx-copy/index","__test__/hl"],(e,t,_)=>{e("mx-copy/index"),e("__test__/hl");e("magix");var l=e("__test__/example"),a=e("mx-form/index"),r=e("mx-form/validator");e("$");_.exports=l.extend({tmpl:function(e,t,_,l,a,r,s,i){if(_||(_=e),!a){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,c=function(e){return"&"+n[e]+";"};a=function(e){return""+(null==e?"":e)},l=function(e){return a(e).replace(d,c)}}if(!r){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return m[e]},x=/[!')(*]/g;r=function(e){return encodeURIComponent(a(e)).replace(x,o)}}if(!i){var u=/[\\'"]/g;i=function(e){return a(e).replace(u,"\\$&")}}var v,g,y,p="",f=e.list,h=e.viewId,b=e.text1,z=e.text2;try{p+='<div mxv mxa="_zs_galleryb`:_" class="_zs_gallery___test___layout_-example"><div mxv mxa="_zs_galleryb`:a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_galleryb`:_" class="mb20"><span class="color-9 mr20">动态添加（要求2 ~ 4个字符）：</span><a href="javascript:;" class="link-brand" mx-click="'+t+'add()">+ 再加一条</a></div><div mxv>',y=9,g="each list as item",v="<%for (var $art_itejsrdfb$art_i = 0, $art_cfbmvknj$art_c = list.length; $art_itejsrdfb$art_i < $art_cfbmvknj$art_c; $art_itejsrdfb$art_i++) {    var item = list[$art_itejsrdfb$art_i]%>";for(var $=0,w=f.length;$<w;$++){var k=f[$];p+='<input mxe="'+t+"_0_"+(v="<%=$art_itejsrdfb$art_i%>",l($))+'" mxc="[',y=11,g=":item.value{required:true,blength:[2,4]}",p+="{p:'list."+(v="<%=$art_itejsrdfb$art_i%>",l($))+'.value\',f:{required:true,blength:[2,4]}}]" class="input mr20 mb20 w120" placeholder="请填写" value="',y=11,g=":item.value{required:true,blength:[2,4]}",p+=(v="<%=item.value%>",l(k.value)+'"/>'),y=12,g="/each",v="<%}%>"}p+='</div></div><div mxa="_zs_galleryb`:b" class="clearfix"><div mxa="_zs_galleryb`:c" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-half"><div mxs="_zs_galleryb`:a" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode=',y=18,g="=viewId",p+=(v="<%!$eu(viewId)%>",r(h)+'_text_1"><span mxa="_zs_galleryb`:d" class="_zs_gallery___test___layout_-desc-tip">'),y=20,g="!text1",p+=(v="<%!text1%>",a(b)+'</span><i mxs="_zs_galleryb`:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),y=23,g="=viewId",p+=(v="<%=viewId%>",l(h)+'_text_1">\n&lt;a href="javascript:;"class="link-brand"\n    mx-click="add()"&gt;+ 再加一条&lt;/a&gt;\n\n&#123;&#123;each list as item&#125;&#125;\n&lt;input class="input mr20" placeholder="请填写" \n    value="&#123;&#123;:item.value&#123;required:true,blength:[2,4]&#125;&#125;&#125;"/&gt;\n&#123;&#123;/each&#125;&#125;</pre></div><div mxa="_zs_galleryb`:e" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-half _zs_gallery___test___layout_-half-right"><div mxs="_zs_galleryb`:c" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+t+'done({id:2})" mx-view="mx-copy/index?copyNode='),y=34,g="=viewId",p+=(v="<%!$eu(viewId)%>",r(h)+'_text_2"><span mxa="_zs_galleryb`:f" class="_zs_gallery___test___layout_-desc-tip">'),y=36,g="!text2",p+=(v="<%!text2%>",a(z)+'</span><i mxs="_zs_galleryb`:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),y=39,g="=viewId",p+=(v="<%=viewId%>",l(h)+"_text_2\">\nlet Magix = require('magix');\nlet Form = require('@../mx-form/index');\nlet Validator = require('@../mx-form/validator');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    mixins: [Form, Validator],\n    render() &#123;\n        let list = [];\n        for (let index = 0; index &lt; 2; index++) &#123;\n            list.push(&#123;\n                key: index,\n                value: ''\n            &#125;)\n        &#125;\n\n        this.updater.digest(&#123;\n            list\n        &#125;);\n    &#125;,\n    'add&lt;click&gt;'(e)&#123;\n        let list = this.updater.get('list');\n        let len = list.length;\n        list.push(&#123;\n            key: len,\n            value: 'test'\n        &#125;)\n        this.updater.digest(&#123;\n            list\n        &#125;);\n    &#125;\n&#125;);</pre></div></div></div>")}catch(e){var j="render view error:"+(e.message||e);throw g&&(j+="\r\n\tsrc art:{{"+g+"}}\r\n\tat line:"+y),j+="\r\n\t"+(g?"translate to:":"expr:"),j+=v+"\r\n\tat file:mx-form/__test__/14.html"}return p},mixins:[a,r],render:function(){for(var e=[],t=0;t<2;t++)e.push({key:t,value:""});this.updater.digest({list:e})},"add<click>":function(e){var t=this.updater.get("list"),_=t.length;t.push({key:_,value:"test"}),this.updater.digest({list:t})}})});