define("mx-table/__test__/3",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(t,l,a)=>{t("../index"),t("mx-copy/index"),t("__test__/hl");t("magix");var e=t("__test__/example");t("$");a.exports=e.extend({tmpl:function(t,l,a,e,r,n,s,i){if(a||(a=t),!r){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,g=function(t){return"&"+c[t]+";"};r=function(t){return""+(null==t?"":t)},e=function(t){return r(t).replace(d,g)}}if(!n){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(t){return _[t]},f=/[!')(*]/g;n=function(t){return encodeURIComponent(r(t)).replace(f,o)}}if(!i){var m=/[\\'"]/g;i=function(t){return r(t).replace(m,"\\$&")}}var b="",x=t.viewId,v=t.text1;b+='<div mxa="_zs_galleryc@:_" class="_zs_galleryf"><div mxa="_zs_galleryc@:a" class="_zs_galleryh"><div mxs="_zs_galleryc@:_" class="mb20"><span class="color-9">该示例：</span>表头吸顶 + 左右分栏 + 默认展开第一行下方操作项 + 选中行展示操作项</div><div mxa="_zs_galleryc@:b" mx-view="mx-table/index?sticky=true" class="mb40"><div><table mxa="_zs_galleryc@:c" class="table" left="true" width="500"><thead><tr>';for(var y=0;y<4;y++)b+="<th>固定字段"+e(y)+"</th>";b+="</tr></thead><tbody>";for(var p=0;p<3;p++){b+='<tr class="'+e(2==p?"last-tr":"")+'">';for(y=0;y<4;y++)b+="<td>固定内容"+e(y)+"</td>";b+='</tr><tr mxs="_zs_galleryc@:a" class="operation-tr"><td colspan="4"><a href="javascript:;" class="btn btn-small mr10">操作</a><a href="javascript:;" class="btn btn-small">操作</a></td></tr>'}b+='</tbody></table></div><div><table mxa="_zs_galleryc@:d" class="table" center="true" width="1000"><thead><tr>';for(y=0;y<10;y++)b+="<th>滚动"+e(y)+"</th>";b+="</tr></thead><tbody>";for(p=0;p<3;p++){b+='<tr class="'+e(2==p?"last-tr":"")+'">';for(y=0;y<10;y++)b+="<td>滚动内容"+e(y)+"</td>";b+='</tr><tr mxs="_zs_galleryc@:b" class="operation-tr"><td colspan="10"></td></tr>'}return b+='</tbody></table></div></div></div><div mxa="_zs_galleryc@:e" class="_zs_galleryi"><div mxs="_zs_galleryc@:c" class="_zs_galleryg">HTML Code</div><div class="_zs_galleryj" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(x)+'_text_1"><span mxa="_zs_galleryc@:f" class="_zs_galleryl">'+r(v)+'</span><i mxs="_zs_galleryc@:d" class="mc-iconfont _zs_galleryk">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+e(x)+'_text_1">\n&lt;mx-table sticky="true" class="mb40"&gt;\n    &lt;!-- 固定列，在table上配置left="true" --&gt;\n    &lt;table class="table" left="true" width="500"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &#123;&#123;for(let i=0;i&lt;4;i++)&#125;&#125;\n                &lt;th&gt;固定字段&#123;&#123;=i&#125;&#125;&lt;/th&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &#123;&#123;for(let j=0;j&lt;3;j++)&#125;&#125;\n            &lt;tr class="&#123;&#123;= (j==2) ? \'last-tr\' : \'\'&#125;&#125;"&gt;\n                &#123;&#123;for(let i=0;i&lt;4;i++)&#125;&#125;\n                &lt;td&gt;固定内容&#123;&#123;=i&#125;&#125;&lt;/td&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tr&gt;\n            &lt;tr class="operation-tr"&gt;\n                &lt;td colspan="4"&gt;\n                    &lt;a href="javascript:;" class="btn btn-small mr10"&gt;操作&lt;/a&gt;\n                    &lt;a href="javascript:;" class="btn btn-small"&gt;操作&lt;/a&gt;\n                &lt;/td&gt;\n            &lt;/tr&gt;\n            &#123;&#123;/for&#125;&#125;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n    &lt;!-- 滚动列，在table上直接配置center="true" --&gt;\n    &lt;table class="table" center="true" width="1000"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &#123;&#123;for(let i=0;i&lt;10;i++)&#125;&#125;\n                &lt;th&gt;滚动&#123;&#123;=i&#125;&#125;&lt;/th&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &#123;&#123;for(let j=0;j&lt;3;j++)&#125;&#125;\n            &lt;tr class="&#123;&#123;= (j==2) ? \'last-tr\' : \'\'&#125;&#125;"&gt;\n                &#123;&#123;for(let i=0;i&lt;10;i++)&#125;&#125;\n                &lt;td&gt;滚动内容&#123;&#123;=i&#125;&#125;&lt;/td&gt;\n                &#123;&#123;/for&#125;&#125;\n            &lt;/tr&gt;\n            &lt;!-- 有操作项该行不可少 --&gt;\n            &lt;tr class="operation-tr"&gt;\n                &lt;td colspan="10"&gt;&lt;/td&gt;\n            &lt;/tr&gt;\n            &#123;&#123;/for&#125;&#125;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-table&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});