define("mx-form/__test__/10",["magix","__test__/example","mx-form/index","mx-form/validator","$","mx-copy/index","__test__/hl"],(e,l,t)=>{e("mx-copy/index"),e("__test__/hl");e("magix");var r=e("__test__/example"),i=e("mx-form/index"),a=e("mx-form/validator");e("$");t.exports=r.extend({tmpl:function(e,l,t,r,i,a,n,u){if(t||(t=e),!i){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},s=/[&<>"'`]/g,c=function(e){return"&"+_[e]+";"};i=function(e){return""+(null==e?"":e)},r=function(e){return i(e).replace(s,c)}}if(!a){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return m[e]},o=/[!')(*]/g;a=function(e){return encodeURIComponent(i(e)).replace(o,p)}}if(!u){var x=/[\\'"]/g;u=function(e){return i(e).replace(x,"\\$&")}}var d,v,g,h="",y=e.url,f=e.english,b=e.chinese,q=e.mobile,w=e.currency,z=e.email,I=e.viewId,$=e.text1;try{h+='<div mxv mxa="_zs_galleryb[:_" class="_zs_gallery___test___layout_-example"><div mxv mxa="_zs_galleryb[:a" class="_zs_gallery___test___layout_-eg-content"><div mxv mxa="_zs_galleryb[:b" class="clearfix"><input mxe="'+l+'_0" mxc="[',g=4,v=":url{url:true}",h+='{p:\'url\',f:{url:true}}]" class="input w200 mr20 mb20" placeholder="url链接" value="',g=4,v=":url{url:true}",h+=(d="<%=url%>",r(y)+'"/> <input mxe="'+l+'_1" mxc="['),g=5,v=":english{english:true}",h+='{p:\'english\',f:{english:true}}]" class="input w200 mr20 mb20" placeholder="只英文" value="',g=5,v=":english{english:true}",h+=(d="<%=english%>",r(f)+'"/> <input mxe="'+l+'_2" mxc="['),g=6,v=":chinese{chinese:true}",h+='{p:\'chinese\',f:{chinese:true}}]" class="input w200 mr20 mb20" placeholder="只中文" value="',g=6,v=":chinese{chinese:true}",h+=(d="<%=chinese%>",r(b)+'"/> <input mxe="'+l+'_3" mxc="['),g=7,v=":mobile{mobile:true}",h+='{p:\'mobile\',f:{mobile:true}}]" class="input w200 mr20 mb20" placeholder="电话号码" value="',g=7,v=":mobile{mobile:true}",h+=(d="<%=mobile%>",r(q)+'"/> <input mxe="'+l+'_4" mxc="['),g=8,v=":currency{currency:true}",h+='{p:\'currency\',f:{currency:true}}]" class="input w200 mr20 mb20" placeholder="金额" value="',g=8,v=":currency{currency:true}",h+=(d="<%=currency%>",r(w)+'"/> <input mxe="'+l+'_5" mxc="['),g=9,v=":email{email:true}",h+='{p:\'email\',f:{email:true}}]" class="input w200 mr20 mb20" placeholder="邮箱" value="',g=9,v=":email{email:true}",h+=(d="<%=email%>",r(z)+'"/> <input mxe="'+l+'_6" mxc="['),g=10,v=":email{email:[true, '只支持qq邮箱', ['qq.com']]}",h+="{p:'email',f:{email:[true, '只支持qq邮箱', ['qq.com']]}}]\" class=\"input w200 mr20 mb20\" placeholder=\"指定邮箱校验\" value=\"",g=10,v=":email{email:[true, '只支持qq邮箱', ['qq.com']]}",h+=(d="<%=email%>",r(z)+'"/></div></div><div mxa="_zs_galleryb[:c" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryb[:_" class="_zs_gallery___test___layout_-eg-title">常用校验</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='),g=15,v="=viewId",h+=(d="<%!$eu(viewId)%>",a(I)+'_text_1"><span mxa="_zs_galleryb[:d" class="_zs_gallery___test___layout_-desc-tip">'),g=17,v="!text1",h+=(d="<%!text1%>",i($)+'</span><i mxs="_zs_galleryb[:a" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),g=20,v="=viewId",h+=(d="<%=viewId%>",r(I)+'_text_1">\n&lt;input class="input" placeholder="url链接" value="&#123;&#123;:url&#123;url:true&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="只英文" value="&#123;&#123;:english&#123;english:true&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="只中文" value="&#123;&#123;:chinese&#123;chinese:true&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="电话号码" value="&#123;&#123;:mobile&#123;mobile:true&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="金额" value="&#123;&#123;:currency&#123;currency:true&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="邮箱" value="&#123;&#123;:email&#123;email:true&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="指定邮箱校验" value="&#123;&#123;:email&#123;email:[true, \'只支持qq邮箱\', [\'qq.com\']]&#125;&#125;&#125;"/&gt;\n        </pre></div></div>')}catch(e){var A="render view error:"+(e.message||e);throw v&&(A+="\r\n\tsrc art:{{"+v+"}}\r\n\tat line:"+g),A+="\r\n\t"+(v?"translate to:":"expr:"),A+=d+"\r\n\tat file:mx-form/__test__/10.html"}return h},mixins:[i,a],render:function(){this.updater.digest()}})});