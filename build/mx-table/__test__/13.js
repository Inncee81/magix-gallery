define("mx-table/__test__/13",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(t,e,r)=>{t("../index"),t("mx-copy/index"),t("__test__/hl");t("magix");var l=t("__test__/example");t("$");r.exports=l.extend({tmpl:function(t,e,r,l,i,_,a,d){if(r||(r=t),!i){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,s=function(t){return"&"+n[t]+";"};i=function(t){return""+(null==t?"":t)},l=function(t){return i(t).replace(o,s)}}if(!_){var g={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},v=function(t){return g[t]},f=/[!')(*]/g;_=function(t){return encodeURIComponent(i(t)).replace(f,v)}}if(!d){var c=/[\\'"]/g;d=function(t){return i(t).replace(c,"\\$&")}}var x,y,p,u="",m=t.viewId,h=t.text1;try{u+='<div mxa="_zs_galleryer:_" class="_zs_gallery___test___layout_-example"><div mxa="_zs_galleryer:a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_galleryer:_" class="mb20 lh22 clearfix"><div class="color-9 fl">以下示例：</div><div class="fl"><div>配置自定义吸顶相对的容器 scroll-wrapper="{=id}}"</div><div>适用场景：浮层内表头固定</div><div>父容器宽高度限定</div></div></div><div id="',p=11,y="=viewId",u+=(x="<%=viewId%>",l(m)+'_wrapper" style="width: 80%; height: 240px; overflow-y: auto; border: 1px solid #e6e6e6;"><div mx-view="mx-table/index?sticky=true&scrollWrapper='),p=12,y="=viewId",u+=(x="<%!$eu(viewId)%>",_(m)+'_wrapper"><div><table mxa="_zs_galleryer:b" class="table" left="true"><thead><tr>'),p=16,y="for (let i=0;i<4;i++)",x="<%for (var i = 0; i < 4; i++) {%>";for(var b=0;b<4;b++)u+='<th mxa="_zs_galleryer:c" width="120">固定字段',p=17,y="=i",u+=(x="<%=i%>",l(b)+"</th>"),p=18,y="/for",x="<%}%>";u+="</tr></thead><tbody>",p=22,y="for (let j=0;j<20;j++)",x="<%for (var j = 0; j < 20; j++) {%>";for(var w=0;w<20;w++){u+="<tr>",p=24,y="for (let i=0;i<4;i++)",x="<%for (var i = 0; i < 4; i++) {%>";for(b=0;b<4;b++)u+="<td>固定内容",p=25,y="=i",u+=(x="<%=i%>",l(b)+"</td>"),p=26,y="/for",x="<%}%>";u+="</tr>",p=28,y="/for",x="<%}%>"}u+='</tbody></table></div><div><table mxa="_zs_galleryer:d" class="table" center="true"><thead><tr>',p=35,y="for (let i=0;i<10;i++)",x="<%for (var i = 0; i < 10; i++) {%>";for(b=0;b<10;b++)u+='<th mxa="_zs_galleryer:e" width="120">滚动',p=36,y="=i",u+=(x="<%=i%>",l(b)+"</th>"),p=37,y="/for",x="<%}%>";u+="</tr></thead><tbody>",p=41,y="for (let j=0;j<20;j++)",x="<%for (var j = 0; j < 20; j++) {%>";for(w=0;w<20;w++){u+="<tr>",p=43,y="for (let i=0;i<10;i++)",x="<%for (var i = 0; i < 10; i++) {%>";for(b=0;b<10;b++)u+="<td>滚动内容",p=44,y="=i",u+=(x="<%=i%>",l(b)+"</td>"),p=45,y="/for",x="<%}%>";u+="</tr>",p=47,y="/for",x="<%}%>"}u+='</tbody></table></div></div></div></div><div mxa="_zs_galleryer:f" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryer:a" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+e+'done({id:1})" mx-view="mx-copy/index?copyNode=',p=55,y="=viewId",u+=(x="<%!$eu(viewId)%>",_(m)+'_text_1"><span mxa="_zs_galleryer:g" class="_zs_gallery___test___layout_-desc-tip">'),p=57,y="!text1",u+=(x="<%!text1%>",i(h)+'</span><i mxs="_zs_galleryer:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),p=60,y="=viewId",u+=(x="<%=viewId%>",l(m)+'_text_1">\n&lt;div id="&#123;&#123;=viewId&#125;&#125;_wrapper" style="width: 80%; height: 240px; overflow-y: auto; border: 1px solid #e6e6e6;"&gt;\n    &lt;mx-table sticky="true" scroll-wrapper="&#123;&#123;=viewId&#125;&#125;_wrapper"&gt;\n        &lt;table class="table" left="true"&gt;\n            &lt;thead&gt;\n                &lt;tr&gt;\n                    &#123;&#123;for(let i=0;i&lt;4;i++)&#125;&#125;\n                    &lt;th width="120"&gt;固定字段&#123;&#123;=i&#125;&#125;&lt;/th&gt;\n                    &#123;&#123;/for&#125;&#125;\n                &lt;/tr&gt;\n            &lt;/thead&gt;\n            &lt;tbody&gt;\n                &#123;&#123;for(let j=0;j&lt;20;j++)&#125;&#125;\n                &lt;tr&gt;\n                    &#123;&#123;for(let i=0;i&lt;4;i++)&#125;&#125;\n                    &lt;td&gt;固定内容&#123;&#123;=i&#125;&#125;&lt;/td&gt;\n                    &#123;&#123;/for&#125;&#125;\n                &lt;/tr&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tbody&gt;\n        &lt;/table&gt;\n        &lt;!-- 滚动列，在table上直接配置center="true" --&gt;\n        &lt;table class="table" center="true"&gt;\n            &lt;thead&gt;\n                &lt;tr&gt;\n                    &#123;&#123;for(let i=0;i&lt;10;i++)&#125;&#125;\n                    &lt;th width="120"&gt;滚动&#123;&#123;=i&#125;&#125;&lt;/th&gt;\n                    &#123;&#123;/for&#125;&#125;\n                &lt;/tr&gt;\n            &lt;/thead&gt;\n            &lt;tbody&gt;\n                &#123;&#123;for(let j=0;j&lt;20;j++)&#125;&#125;\n                &lt;tr&gt;\n                    &#123;&#123;for(let i=0;i&lt;10;i++)&#125;&#125;\n                    &lt;td&gt;滚动内容&#123;&#123;=i&#125;&#125;&lt;/td&gt;\n                    &#123;&#123;/for&#125;&#125;\n                &lt;/tr&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tbody&gt;\n        &lt;/table&gt;\n    &lt;/mx-table&gt;\n&lt;/div&gt;</pre></div></div>')}catch(t){var j="render view error:"+(t.message||t);throw y&&(j+="\r\n\tsrc art:{{"+y+"}}\r\n\tat line:"+p),j+="\r\n\t"+(y?"translate to:":"expr:"),j+=x+"\r\n\tat file:mx-table/__test__/13.html"}return u},render:function(){this.updater.digest()}})});