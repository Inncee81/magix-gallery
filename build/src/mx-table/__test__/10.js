define("mx-table/__test__/10",["magix","__test__/example","$","../rwd","mx-copy/index","__test__/hl"],(t,l,e)=>{t("../rwd"),t("mx-copy/index"),t("__test__/hl");t("magix");var r=t("__test__/example");t("$");e.exports=r.extend({tmpl:function(t,l,e,r,a,i,d,_){if(e||(e=t),!a){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},s=/[&<>"'`]/g,c=function(t){return"&"+n[t]+";"};a=function(t){return""+(null==t?"":t)},r=function(t){return a(t).replace(s,c)}}if(!i){var g={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},v=function(t){return g[t]},o=/[!')(*]/g;i=function(t){return encodeURIComponent(a(t)).replace(o,v)}}if(!_){var x=/[\\'"]/g;_=function(t){return a(t).replace(x,"\\$&")}}var m="",f=t.viewId,y=t.text1;m+='<div mxa="_zs_galleryc4:_" class="_zs_galleryf"><div mxa="_zs_galleryc4:a" class="_zs_galleryh"><div mxs="_zs_galleryc4:_" class="mb20 clearfix lh22"><div class="color-9 fl">以下示例：</div><div class="fl"><div>设置5列一页</div><div>开头固定2列，结尾固定2列</div><div>默认在第二页</div></div></div><div mxa="_zs_galleryc4:b" class="mb20"><div mxa="_zs_galleryc4:c" mx-view="mx-table/rwd?rwdRange=2%2C-2&rwdLimit=5&rwdCurrent=2"><table mxa="_zs_galleryc4:d" class="table"><thead><tr>';for(var u=0;u<25;u++)m+='<th mxa="_zs_galleryc4:e" width="200">示例字段'+r(u)+"</th>";m+="</tr></thead><tbody>";for(var b=0;b<4;b++){m+="<tr>";for(u=0;u<25;u++)m+="<td>示例字段内容"+r(u)+"</td>";m+="</tr>"}return m+='</tbody></table></div></div></div><div mxa="_zs_galleryc4:f" class="_zs_galleryi"><div mxs="_zs_galleryc4:a" class="_zs_galleryg">HTML Code</div><div class="_zs_galleryj" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(f)+'_text_1"><span mxa="_zs_galleryc4:g" class="_zs_galleryl">'+a(y)+'</span><i mxs="_zs_galleryc4:b" class="mc-iconfont _zs_galleryk">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+r(f)+'_text_1">\n&lt;mx-table.rwd rwd-range="2,-2" rwd-limit="5" rwd-current="2"&gt;\n    &lt;table class="table"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &#123;&#123;for(let i=0;i&lt;25;i++)&#125;&#125;\n                &lt;th width="200"&gt;示例字段&#123;&#123;=i&#125;&#125;&lt;/th&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &#123;&#123;for(let j=0;j&lt;4;j++)&#125;&#125;\n            &lt;tr&gt;\n                &#123;&#123;for(let i=0;i&lt;25;i++)&#125;&#125;\n                &lt;td&gt;示例字段内容&#123;&#123;=i&#125;&#125;&lt;/td&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tr&gt;\n            &#123;&#123;/for&#125;&#125;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-table.rwd&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});