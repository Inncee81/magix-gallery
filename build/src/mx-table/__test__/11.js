define("mx-table/__test__/11",["magix","__test__/example","$","mx-copy/index","__test__/hl"],(t,l,e)=>{t("mx-copy/index"),t("__test__/hl");t("magix");var a=t("__test__/example");t("$");e.exports=a.extend({tmpl:function(t,l,e,a,s,n,r,_){if(e||(e=t),!s){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},i=/[&<>"'`]/g,g=function(t){return"&"+d[t]+";"};s=function(t){return""+(null==t?"":t)},a=function(t){return s(t).replace(i,g)}}if(!n){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(t){return c[t]},x=/[!')(*]/g;n=function(t){return encodeURIComponent(s(t)).replace(x,o)}}if(!_){var m=/[\\'"]/g;_=function(t){return s(t).replace(m,"\\$&")}}var v="",p=t.viewId,y=t.text1;v+='<div mxa="_zs_galleryd|:_" class="_zs_galleryg"><div mxa="_zs_galleryd|:a" class="_zs_galleryj"><div mxs="_zs_galleryd|:_" class="mb20 clearfix lh22"><span class="color-9">普通表格：</span><span>加class="table"，样式与组件一致，没有默认选中逻辑</span></div><div mxa="_zs_galleryd|:b" class="mb20"><table mxa="_zs_galleryd|:c" class="table"><thead><tr>';for(var f=0;f<5;f++)v+="<th>示例字段"+a(f)+"</th>";v+='<th mxs="_zs_galleryd|:a">操作</th></tr></thead><tbody>';for(var b=0;b<3;b++){v+="<tr>";for(f=0;f<5;f++)v+="<td>示例字段"+a(f)+"</td>";v+='<td mxs="_zs_galleryd|:b"><div class="operations"><a href="javascript:;" class="btn btn-white btn-small">操作</a></div></td></tr>'}return v+='</tbody></table></div></div><div mxa="_zs_galleryd|:d" class="_zs_galleryk"><div mxs="_zs_galleryd|:c" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(p)+'_text_1"><span mxa="_zs_galleryd|:e" class="_zs_galleryn">'+s(y)+'</span><i mxs="_zs_galleryd|:d" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(p)+'_text_1">\n&lt;table class="table"&gt;\n    &lt;thead&gt;\n        &lt;tr&gt;\n            &#123;&#123;for(let i=0;i&lt;5;i++)&#125;&#125;\n            &lt;th&gt;示例字段&#123;&#123;=i&#125;&#125;&lt;/th&gt;\n            &#123;&#123;/for&#125;&#125;\n            &lt;th&gt;操作&lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/thead&gt;\n    &lt;tbody&gt;\n        &#123;&#123;for(let j=0;j&lt;3;j++)&#125;&#125;\n        &lt;tr&gt;\n            &#123;&#123;for(let i=0;i&lt;5;i++)&#125;&#125;\n            &lt;td&gt;示例字段&#123;&#123;=i&#125;&#125;&lt;/td&gt;\n            &#123;&#123;/for&#125;&#125;\n            &lt;td&gt;\n                &lt;div class="operations"&gt;\n                    &lt;a href="javascript:;" class="btn btn-white btn-small"&gt;操作&lt;/a&gt;\n                &lt;/div&gt;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n        &#123;&#123;/for&#125;&#125;\n    &lt;/tbody&gt;\n&lt;/table&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});