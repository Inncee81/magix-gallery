define("mx-table/__test__/19",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(t,e,l)=>{t("../index"),t("mx-copy/index"),t("__test__/hl");t("magix");var r=t("__test__/example");t("$");l.exports=r.extend({tmpl:function(t,e,l,r,a,n,_,i){if(l||(l=t),!a){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,g=function(t){return"&"+s[t]+";"};a=function(t){return""+(null==t?"":t)},r=function(t){return a(t).replace(d,g)}}if(!n){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(t){return x[t]},o=/[!')(*]/g;n=function(t){return encodeURIComponent(a(t)).replace(o,c)}}if(!i){var u=/[\\'"]/g;i=function(t){return a(t).replace(u,"\\$&")}}var m="",y=t.viewId,v=t.text1;m+='<div mxa="_zs_galleryeu:_" class="_zs_galleryg"><div mxa="_zs_galleryeu:a" class="_zs_galleryj"><div mxa="_zs_galleryeu:b" mx-view="mx-table/index?sticky=true&stickyEnd=true"><div><table mxa="_zs_galleryeu:c" class="table"><thead><tr>';for(var f=0;f<6;f++)m+='<th mxa="_zs_galleryeu:d" width="120">固定字段'+r(f)+"</th>";m+="</tr></thead><tbody>";for(var p=0;p<20;p++){m+="<tr>";for(f=0;f<6;f++)m+="<td>内容"+r(f)+"</td>";m+="</tr>"}return m+='</tbody></table></div></div></div><div mxa="_zs_galleryeu:e" class="_zs_galleryk"><div mxs="_zs_galleryeu:_" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+e+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(y)+'_text_1"><span mxa="_zs_galleryeu:f" class="_zs_galleryn">'+a(v)+'</span><i mxs="_zs_galleryeu:a" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+r(y)+'_text_1">\n&lt;mx-table sticky="true" sticky-end="true"&gt;\n    &lt;table class="table"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &#123;&#123;for(let i=0;i&lt;6;i++)&#125;&#125;\n                &lt;th width="120"&gt;固定字段&#123;&#123;=i&#125;&#125;&lt;/th&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &#123;&#123;for(let j=0;j&lt;20;j++)&#125;&#125;\n            &lt;tr&gt;\n                &#123;&#123;for(let i=0;i&lt;6;i++)&#125;&#125;\n                &lt;td&gt;内容&#123;&#123;=i&#125;&#125;&lt;/td&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tr&gt;\n            &#123;&#123;/for&#125;&#125;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-table&gt;\n        </pre></div></div>'},render:function(){this.updater.digest()}})});