define("mx-table/__test__/7",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(t,l,e)=>{t("../index"),t("mx-copy/index"),t("__test__/hl");t("magix");var a=t("__test__/example");t("$");e.exports=a.extend({tmpl:function(t,l,e,a,s,i,n,r){if(e||(e=t),!s){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},g=/[&<>"'`]/g,c=function(t){return"&"+d[t]+";"};s=function(t){return""+(null==t?"":t)},a=function(t){return s(t).replace(g,c)}}if(!i){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},h=function(t){return _[t]},o=/[!')(*]/g;i=function(t){return encodeURIComponent(s(t)).replace(o,h)}}if(!r){var m=/[\\'"]/g;r=function(t){return s(t).replace(m,"\\$&")}}var p="",f=t.viewId,v=t.text1;p+='<div mxa="_zs_galleryea:_" class="_zs_galleryg"><div mxa="_zs_galleryea:a" class="_zs_galleryj"><div mxs="_zs_galleryea:_" class="mb20"><span class="color-9">该示例：</span>吸顶 + 表头分组</div><div mxa="_zs_galleryea:b" mx-view="mx-table/index?sticky=true"><div><table mxa="_zs_galleryea:c" class="table"><thead mxs="_zs_galleryea:a"><tr><th rowspan="2">单个1</th><th rowspan="2">单个2</th><th class="field-group" colspan="2"><div class="group-name">第一组</div></th><th class="field-group" colspan="3"><div class="group-name">第二组</div></th><th class="field-group" colspan="4"><div class="group-name">第三组</div></th></tr><tr><th class="field-item">点击率</th><th class="field-item">点击单价</th><th class="field-item">进店访客量</th><th class="field-item">千次展现成本</th><th class="field-item">展现量</th><th class="field-item">消耗</th><th class="field-item">收藏加购成本</th><th class="field-item">回搜成本</th><th class="field-item">成交订单金额</th></tr></thead><tbody>';for(var x=0;x<3;x++){p+="<tr>";for(var u=0;u<11;u++)p+="<td>"+a(5e3*u)+"</td>";p+="</tr>"}return p+='</tbody></table></div></div></div><div mxa="_zs_galleryea:d" class="_zs_galleryk"><div mxs="_zs_galleryea:b" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(f)+'_text_1"><span mxa="_zs_galleryea:e" class="_zs_galleryn">'+s(v)+'</span><i mxs="_zs_galleryea:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(f)+'_text_1">\n&lt;mx-table sticky="true"&gt;\n    &lt;table class="table"&gt;\n        &lt;thead&gt;\n            &lt;!-- 二级结构的表头 --&gt;\n            &lt;tr&gt;\n                &lt;th rowspan="2"&gt;单个1&lt;/th&gt;\n                &lt;th rowspan="2"&gt;单个2&lt;/th&gt;\n                &lt;th class="field-group" colspan="2"&gt;\n                    &lt;div class="group-name"&gt;组1&lt;/div&gt;\n                &lt;/th&gt;\n                &lt;th class="field-group" colspan="3"&gt;\n                    &lt;div class="group-name"&gt;组2&lt;/div&gt;\n                &lt;/th&gt;\n            &lt;/tr&gt;\n            &lt;tr&gt;\n                &lt;th class="field-item"&gt;组1-1&lt;/th&gt;\n                &lt;th class="field-item"&gt;组1-2&lt;/th&gt;\n                &lt;th class="field-item"&gt;组2-1&lt;/th&gt;\n                &lt;th class="field-item"&gt;组2-2&lt;/th&gt;\n                &lt;th class="field-item"&gt;组2-3&lt;/th&gt;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &#123;&#123;for(let j=0;j&lt;3;j++)&#125;&#125;\n            &lt;tr&gt;\n                &#123;&#123;for(let i=0;i&lt;7;i++)&#125;&#125;\n                &lt;td&gt;&#123;&#123;=i&#125;&#125;&lt;/td&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tr&gt;\n            &#123;&#123;/for&#125;&#125;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-table&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});