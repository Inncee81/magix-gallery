define("mx-area/__test__/1",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,_,a)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");var t=e("magix"),r=e("__test__/example");e("$");t.applyStyle("_zs_gallery_mx-area___test___index_","._zs_gallery_mx-area___test___index_-area-wrapper1,\n._zs_gallery_mx-area___test___index_-area-wrapper2 {\n  padding: 20px 20px 0;\n  border: 1px solid var(--color-border);\n  border-radius: var(--border-radius);\n}\n._zs_gallery_mx-area___test___index_-area-wrapper1 {\n  width: 740px;\n}\n._zs_gallery_mx-area___test___index_-area-wrapper2 {\n  width: 600px;\n}\n._zs_gallery_mx-area___test___index_-area-wrapper3 {\n  width: 740px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--border-radius);\n  padding: 20px 0;\n}\n"),a.exports=r.extend({tmpl:function(e,_,a,t,r,l,s,i){if(a||(a=e),!r){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},n=/[&<>"'`]/g,c=function(e){return"&"+d[e]+";"};r=function(e){return""+(null==e?"":e)},t=function(e){return r(e).replace(n,c)}}if(!l){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},v=function(e){return x[e]},o=/[!')(*]/g;l=function(e){return encodeURIComponent(r(e)).replace(o,v)}}if(!i){var m=/[\\'"]/g;i=function(e){return r(e).replace(m,"\\$&")}}s||(s=function(e,_,a,t){for(t=e[u];--t;)if(e[a=u+t]===_)return a;return e[a=u+e[u]++]=_,a});var g,p,y,u="",z="",f=e.viewId,w=e.selected,h=e.text1,R=e.text2;try{z+='<div mxv mxa="_zs_galleryR:_" class="_zs_gallery___test___layout_-example"><div mxv mxa="_zs_galleryR:a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_galleryR:_" class="clearfix lh22 mb20"><div class="fl color-9">以下示例：</div><div class="fl"><div>可以选择城市</div><div>每个省份和城市都有各自的id，若选择了省份，则获取选中值时只有省份的id（不包含该省份下所有城市id）</div><div>宽度由容器宽度决定，自适应</div></div></div><div mxv mxa="_zs_galleryR:b" class="clearfix mb20"><div mxv mxa="_zs_galleryR:c" class="_zs_gallery_mx-area___test___index_-area-wrapper1 fl mr20"><div mxv="selected" id="',y=13,p="=viewId",z+=(g="<%=viewId%>",t(f)+'_area" mx-view="mx-area/index?city=true&selected='),y=15,p="@selected",z+=(g="<%@selected%>",s(a,w)+'"></div></div><div mxa="_zs_galleryR:d" class="fl"><div mxs="_zs_galleryR:a" class="mb10"><a href="javascript:;" class="btn btn-brand" mx-click="'+_+'get()">获取选中值</a></div><div mxa="_zs_galleryR:e" class="clearfix lh22"><div mxs="_zs_galleryR:b" class="fl color-9">当前选中值：</div><div mxa="_zs_galleryR:f" class="fl">'),y=22,p="each selected as item",g="<%for (var $art_ikannfppm$art_i = 0, $art_cewztazww$art_c = selected.length; $art_ikannfppm$art_i < $art_cewztazww$art_c; $art_ikannfppm$art_i++) {    var item = selected[$art_ikannfppm$art_i]%>";for(var $=0,b=w.length;$<b;$++){var I=w[$];z+="<div>",y=23,p="=item",z+=(g="<%=item%>",t(I)+"</div>"),y=24,p="/each",g="<%}%>"}z+='</div></div></div></div></div><div mxa="_zs_galleryR:g" class="clearfix"><div mxa="_zs_galleryR:h" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-half"><div mxs="_zs_galleryR:c" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+_+'done({id:1})" mx-view="mx-copy/index?copyNode=',y=33,p="=viewId",z+=(g="<%!$eu(viewId)%>",l(f)+'_text_1"><span mxa="_zs_galleryR:i" class="_zs_gallery___test___layout_-desc-tip">'),y=35,p="!text1",z+=(g="<%!text1%>",r(h)+'</span><i mxs="_zs_galleryR:d" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),y=38,p="=viewId",z+=(g="<%=viewId%>",t(f)+'_text_1">\n&lt;mx-area id="&#123;&#123;=viewId&#125;&#125;_area"\n    city="true"\n    selected="&#123;&#123;@selected&#125;&#125;"/&gt;</pre></div><div mxa="_zs_galleryR:j" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-half _zs_gallery___test___layout_-half-right"><div mxs="_zs_galleryR:e" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+_+'done({id:2})" mx-view="mx-copy/index?copyNode='),y=45,p="=viewId",z+=(g="<%!$eu(viewId)%>",l(f)+'_text_2"><span mxa="_zs_galleryR:k" class="_zs_gallery___test___layout_-desc-tip">'),y=47,p="!text2",z+=(g="<%!text2%>",r(R)+'</span><i mxs="_zs_galleryR:d" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),y=50,p="=viewId",z+=(g="<%=viewId%>",t(f)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        this.updater.digest(&#123;\n            viewId: this.id,\n            selected: [1]\n        &#125;);\n    &#125;,\n    'get&lt;click&gt;' (event) &#123;\n        let id = this.id + '_area'\n        let selected = Magix.Vframe.get(id).invoke('val');\n        this.updater.digest(&#123;\n            selected: selected\n        &#125;)\n    &#125;\n&#125;);</pre></div></div></div>")}catch(e){var k="render view error:"+(e.message||e);throw p&&(k+="\r\n\tsrc art:{{"+p+"}}\r\n\tat line:"+y),k+="\r\n\t"+(p?"translate to:":"expr:"),k+=g+"\r\n\tat file:mx-area/__test__/1.html"}return z},render:function(){this.updater.digest({viewId:this.id,selected:[1]})},"get<click>":function(e){var _=this.id+"_area",a=t.Vframe.get(_).invoke("val");this.updater.digest({selected:a})}})});