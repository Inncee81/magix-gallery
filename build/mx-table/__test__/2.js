define("mx-table/__test__/2",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(t,e,l)=>{t("../index"),t("mx-copy/index"),t("__test__/hl");t("magix");var a=t("__test__/example");t("$");l.exports=a.extend({tmpl:function(t,e,l,a,r,_,s,n){if(l||(l=t),!r){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,d=function(t){return"&"+i[t]+";"};r=function(t){return""+(null==t?"":t)},a=function(t){return r(t).replace(o,d)}}if(!_){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},g=function(t){return c[t]},v=/[!')(*]/g;_=function(t){return encodeURIComponent(r(t)).replace(v,g)}}if(!n){var m=/[\\'"]/g;n=function(t){return r(t).replace(m,"\\$&")}}var x,f,b,p="",y=t.viewId,h=t.text1;try{p+='<div mxa="_zs_galleryev:_" class="_zs_gallery___test___layout_-example"><div mxa="_zs_galleryev:a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_galleryev:_" class="mb20"><span class="color-9">该示例：</span>默认展开第一行下方操作项 + 选中行展示操作项</div><div mxa="_zs_galleryev:b" mx-view="mx-table/index" class="mb20"><div><table mxa="_zs_galleryev:c" class="table"><thead><tr>',b=11,f="for (let i=0;i<5;i++)",x="<%for (var i = 0; i < 5; i++) {%>";for(var u=0;u<5;u++)p+='<th width="',b=12,f="=(100*(i+1))",p+=(x="<%=(100 * (i + 1))%>",a(100*(u+1))+'">示例'),b=12,f="=i",p+=(x="<%=i%>",a(u)+"</th>"),b=13,f="/for",x="<%}%>";p+="</tr></thead><tbody>",b=17,f="for (let j=0;j<3;j++)",x="<%for (var j = 0; j < 3; j++) {%>";for(var w=0;w<3;w++){p+="<tr>",b=19,f="for (let i=0;i<5;i++)",x="<%for (var i = 0; i < 5; i++) {%>";for(u=0;u<5;u++)p+="<td>示例内容",b=20,f="=i",p+=(x="<%=i%>",a(u)+"</td>"),b=21,f="/for",x="<%}%>";p+='</tr><tr mxs="_zs_galleryev:a" class="operation-tr"><td colspan="5"><a href="javascript:;" class="btn btn-white btn-small mr10">操作</a><a href="javascript:;" class="btn btn-white btn-small mr10">操作</a><a href="javascript:;" class="btn btn-white btn-small">操作</a></td></tr>',b=30,f="/for",x="<%}%>"}p+='</tbody></table></div></div></div><div mxa="_zs_galleryev:d" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryev:b" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+e+'done({id:1})" mx-view="mx-copy/index?copyNode=',b=37,f="=viewId",p+=(x="<%!$eu(viewId)%>",_(y)+'_text_1"><span mxa="_zs_galleryev:e" class="_zs_gallery___test___layout_-desc-tip">'),b=39,f="!text1",p+=(x="<%!text1%>",r(h)+'</span><i mxs="_zs_galleryev:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),b=42,f="=viewId",p+=(x="<%=viewId%>",a(y)+'_text_1">\n&lt;mx-table&gt;\n    &lt;table class="table"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &#123;&#123;for(let i=0;i&lt;5;i++)&#125;&#125;\n                &lt;th width="&#123;&#123;=(100*(i+1))&#125;&#125;"&gt;示例&#123;&#123;=i&#125;&#125;&lt;/th&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &#123;&#123;for(let j=0;j&lt;3;j++)&#125;&#125;\n            &lt;tr&gt;\n                &#123;&#123;for(let i=0;i&lt;5;i++)&#125;&#125;\n                    &lt;td&gt;示例内容&#123;&#123;=i&#125;&#125;&lt;/td&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tr&gt;\n            &lt;tr class="operation-tr"&gt;\n                &lt;td colspan="5"&gt;\n                    &lt;a href="javascript:;" class="btn btn-white btn-small mr10"&gt;操作&lt;/a&gt;\n                    &lt;a href="javascript:;" class="btn btn-white btn-small mr10"&gt;操作&lt;/a&gt;\n                    &lt;a href="javascript:;" class="btn btn-white btn-small"&gt;操作&lt;/a&gt;\n                &lt;/td&gt;\n            &lt;/tr&gt;\n            &#123;&#123;/for&#125;&#125;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-table&gt;</pre></div></div>')}catch(t){var z="render view error:"+(t.message||t);throw f&&(z+="\r\n\tsrc art:{{"+f+"}}\r\n\tat line:"+b),z+="\r\n\t"+(f?"translate to:":"expr:"),z+=x+"\r\n\tat file:mx-table/__test__/2.html"}return p},render:function(){this.updater.digest()}})});