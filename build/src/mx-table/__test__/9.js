define("mx-table/__test__/9",["magix","__test__/example","$","../rwd","mx-copy/index","__test__/hl"],(t,e,l)=>{t("../rwd"),t("mx-copy/index"),t("__test__/hl");t("magix");var a=t("__test__/example");t("$");l.exports=a.extend({tmpl:function(t,e,l,a,r,_,i,s){if(l||(l=t),!r){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},n=/[&<>"'`]/g,g=function(t){return"&"+d[t]+";"};r=function(t){return""+(null==t?"":t)},a=function(t){return r(t).replace(n,g)}}if(!_){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(t){return c[t]},x=/[!')(*]/g;_=function(t){return encodeURIComponent(r(t)).replace(x,o)}}if(!s){var v=/[\\'"]/g;s=function(t){return r(t).replace(v,"\\$&")}}var m="",f=t.viewId,y=t.text1;m+='<div mxa="_zs_galleryek:_" class="_zs_galleryg"><div mxa="_zs_galleryek:a" class="_zs_galleryj"><div mxs="_zs_galleryek:_" class="mb20 clearfix lh22"><div class="color-9 fl">以下示例：</div><div class="fl"><div>默认4列一页</div><div>默认开头固定2列，结尾固定1列</div></div></div><div mxa="_zs_galleryek:b" class="mb20"><div mxa="_zs_galleryek:c" mx-view="mx-table/rwd"><table mxa="_zs_galleryek:d" class="table"><thead><tr>';for(var b=0;b<14;b++)m+='<th mxa="_zs_galleryek:e" width="200">示例字段'+a(b)+"</th>";m+="</tr></thead><tbody>";for(var p=0;p<4;p++){m+="<tr>";for(b=0;b<14;b++)m+="<td>示例字段内容"+a(b)+"</td>";m+="</tr>"}return m+='</tbody></table></div></div></div><div mxa="_zs_galleryek:f" class="_zs_galleryk"><div mxs="_zs_galleryek:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+e+'done({id:1})" mx-view="mx-copy/index?copyNode='+_(f)+'_text_1"><span mxa="_zs_galleryek:g" class="_zs_galleryn">'+r(y)+'</span><i mxs="_zs_galleryek:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(f)+'_text_1">\n&lt;mx-table.rwd&gt;\n    &lt;table class="table"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &#123;&#123;for(let i=0;i&lt;14;i++)&#125;&#125;\n                &lt;th width="200"&gt;示例字段&#123;&#123;=i&#125;&#125;&lt;/th&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &#123;&#123;for(let j=0;j&lt;4;j++)&#125;&#125;\n            &lt;tr&gt;\n                &#123;&#123;for(let i=0;i&lt;14;i++)&#125;&#125;\n                &lt;td&gt;示例字段内容&#123;&#123;=i&#125;&#125;&lt;/td&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tr&gt;\n            &#123;&#123;/for&#125;&#125;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-table.rwd&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});