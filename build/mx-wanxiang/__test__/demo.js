define("mx-wanxiang/__test__/demo",["magix","$","mx-copy/index","__test__/hl"],(e,a,t)=>{e("mx-copy/index"),e("__test__/hl");var i=e("magix"),_=(e("$"),i.Router);t.exports=i.View.extend({tmpl:function(e,a,t,i,_,r,s,l){if(t||(t=e),!_){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},n=/[&<>"'`]/g,c=function(e){return"&"+d[e]+";"};_=function(e){return""+(null==e?"":e)},i=function(e){return _(e).replace(n,c)}}if(!r){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return o[e]},x=/[!')(*]/g;r=function(e){return encodeURIComponent(_(e)).replace(x,m)}}if(!l){var v=/[\\'"]/g;l=function(e){return _(e).replace(v,"\\$&")}}var p,g,f,u="",h=e.list,y=e.cur,w=e.viewId,z=e.text1;try{u+='<div mxa="_zs_galleryfe:_" class="pa20"><div mxa="_zs_galleryfe:a" class="_zs_gallery___test___layout_-example" style="width: 600px;"><div mxa="_zs_galleryfe:b" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_galleryfe:_" class="clearfix mb40"><div class="fl">页面展示：</div><div class="fl"><div class="color-brand">注意只在taobao域名下可用</div><div>点击小象logo展开收起问答框</div></div></div><div mxa="_zs_galleryfe:c" class="clearfix mb40"><div mxs="_zs_galleryfe:a" class="fl">当前：</div>',f=14,g="each list as item index",p="<%for (var index = 0, $art_cadelraaht$art_c = list.length; index < $art_cadelraaht$art_c; index++) {    var item = list[index]%>";for(var $=0,b=h.length;$<b;$++){var I=h[$];u+=" ",f=15,g="if (cur == item.path)",p="<%if (cur == item.path) {%>",y==I.path&&(u+='<div mxa="_zs_galleryfe:d" class="fl"><div>路径：',f=17,g="=item.path",u+=(p="<%=item.path%>",i(I.path)+"</div><div>匹配到id："),f=18,g="=item.id",u+=(p="<%=item.id%>",i(I.id)+"</div><div>"),f=19,g="=item.tip",u+=(p="<%=item.tip%>",i(I.tip)+"</div></div>"),f=21,g="/if",p="<%}%>"),u+=" ",f=22,g="/each",p="<%}%>"}u+="</div>",f=25,g="each list as item index",p="<%for (var index = 0, $art_cmsaqook$art_c = list.length; index < $art_cmsaqook$art_c; index++) {    var item = list[index]%>";$=0;for(var C=h.length;$<C;$++){I=h[$];u+='<div mxa="_zs_galleryfe:e" class="mb20">',f=26,g="=(index + 1)",u+=(p="<%=(index + 1)%>",i($+1)+'. 跳转<a class="color-brand" href="#!'),f=26,g="=item.path",u+=(p="<%=item.path%>",i(I.path)+'">'),f=26,g="=item.path",u+=(p="<%=item.path%>",i(I.path)+"</a>，"),f=26,g="=item.extra",u+=(p="<%=item.extra%>",i(I.extra)+"</div>"),f=27,g="/each",p="<%}%>"}u+='</div><div mxa="_zs_galleryfe:f" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryfe:b" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode=',f=31,g="=viewId",u+=(p="<%!$eu(viewId)%>",r(w)+'_text_1"><span mxa="_zs_galleryfe:g" class="_zs_gallery___test___layout_-desc-tip">'),f=33,g="!text1",u+=(p="<%!text1%>",_(z)+'</span><i mxs="_zs_galleryfe:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),f=36,g="=viewId",u+=(p="<%=viewId%>",i(w)+'_text_1">\n&lt;mx-wanxiang \n    biz-code="PCMaMaAnyWhereWindow"\n    default-source-id="432"\n    source-map="&#123;&#123;@&#123;\n        \'/wanxiang/demo1\': 496,\n        \'/wanxiang/demo2?version=1\': 502\n    &#125;&#125;&#125;"\n    bottom="50"/&gt;\n            </pre></div></div></div>')}catch(e){var M="render view error:"+(e.message||e);throw g&&(M+="\r\n\tsrc art:{{"+g+"}}\r\n\tat line:"+f),M+="\r\n\t"+(g?"translate to:":"expr:"),M+=p+"\r\n\tat file:mx-wanxiang/__test__/demo.html"}return u},render:function(){var e=_.parse();this.updater.digest({cur:e.srcHash,list:[{path:"/wanxiang/demo1",id:496,tip:"第一个问题：我要咨询钻展流量的问题",extra:"匹配中source-map中配置的496"},{path:"/wanxiang/demo2?version=1&mode=2",id:502,tip:"第一个问题：如何查看资源位的类目要求？",extra:"匹配中source-map中配置的502"},{path:"/wanxiang/demo3",id:432,tip:"第一个问题：我要咨询内容推广的问题",extra:"source-map中没有额外配置，使用默认的432"}]})}})});