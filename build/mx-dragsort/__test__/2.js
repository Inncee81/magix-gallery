define("mx-dragsort/__test__/2",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,_,t)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");var a=e("magix"),r=e("__test__/example"),i=e("$");a.applyStyle("_zs_gallery_mx-dragsort___test___index_","._zs_gallery_mx-dragsort___test___index_-item {\n  width: 120px;\n  padding: 10px;\n  margin-bottom: 10px;\n  margin-right: 10px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--border-radius);\n  cursor: pointer;\n}\n"),t.exports=r.extend({tmpl:function(e,_,t,a,r,i,s,l){if(t||(t=e),!r){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,c=function(e){return"&"+n[e]+";"};r=function(e){return""+(null==e?"":e)},a=function(e){return r(e).replace(d,c)}}if(!i){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return m[e]},x=/[!')(*]/g;i=function(e){return encodeURIComponent(r(e)).replace(x,o)}}if(!l){var g=/[\\'"]/g;l=function(e){return r(e).replace(g,"\\$&")}}var v,u,p,y="",f=e.items,z=e.viewId,h=e.text1;try{y+='<div mxa="_zs_gallerya6:_" class="_zs_gallery___test___layout_-example"><div mxa="_zs_gallerya6:a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_gallerya6:_" class="mb20"><span class="color-9">以下示例：</span>支持水平方向的排序</div><div mxa="_zs_gallerya6:b" class="clearfix"><div mxa="_zs_gallerya6:c" class="mb20"><span mxs="_zs_gallerya6:a" class="color-9 mr10">当前顺序：</span>',p=6,u="=items",y+=(v="<%=items%>",a(f)+'</div><ul mxa="_zs_gallerya6:d" class="clearfix" mx-view="mx-dragsort/index?horizonal=true&vertical=false" mx-dragfinish="'+_+'drag()">'),p=13,u="each items as item",v="<%for (var $art_ierzkjnj$art_i = 0, $art_ccbipcfd$art_c = items.length; $art_ierzkjnj$art_i < $art_ccbipcfd$art_c; $art_ierzkjnj$art_i++) {    var item = items[$art_ierzkjnj$art_i]%>";for(var $=0,w=f.length;$<w;$++){var b=f[$];y+='<li class="_zs_gallery_mx-dragsort___test___index_-item fl" data-value="',p=14,u="=item",y+=(v="<%=item%>",a(b)+'">'),p=14,u="=item",y+=(v="<%=item%>",a(b)+"</li>"),p=15,u="/each",v="<%}%>"}y+='</ul></div></div><div mxa="_zs_gallerya6:e" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerya6:b" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+_+'done({id:1})" mx-view="mx-copy/index?copyNode=',p=21,u="=viewId",y+=(v="<%!$eu(viewId)%>",i(z)+'_text_1"><span mxa="_zs_gallerya6:f" class="_zs_gallery___test___layout_-desc-tip">'),p=23,u="!text1",y+=(v="<%!text1%>",r(h)+'</span><i mxs="_zs_gallerya6:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),p=26,u="=viewId",y+=(v="<%=viewId%>",a(z)+'_text_1">\n&lt;ul class="clearfix"\n    mx-view="@../../mx-dragsort/index" \n    view-horizonal="true"\n    view-vertical="false"\n    mx-dragfinish="drag()"&gt;\n    &#123;&#123;each items as item&#125;&#125;\n    &lt;li class="item fl" data-value="&#123;&#123;=item&#125;&#125;"&gt;&#123;&#123;=item&#125;&#125;&lt;/li&gt;\n    &#123;&#123;/each&#125;&#125;\n&lt;/ul&gt;\n        </pre></div></div>')}catch(e){var j="render view error:"+(e.message||e);throw u&&(j+="\r\n\tsrc art:{{"+u+"}}\r\n\tat line:"+p),j+="\r\n\t"+(u?"translate to:":"expr:"),j+=v+"\r\n\tat file:mx-dragsort/__test__/2.html"}return y},render:function(){this.updater.digest({items:[1,2,3,4,5]})},"drag<dragfinish>":function(e){for(var _=[],t=i("#"+this.id+" ._zs_gallery_mx-dragsort___test___index_-item"),a=0,r=t.length;a<r;a++){var s=i(t[a]);_.push(s.data("value"))}this.updater.digest({items:_})}})});