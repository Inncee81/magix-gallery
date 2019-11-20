define("mx-grid/examples/7",["magix","examples/example","$","mx-calendar/datepicker","mx-dropdown/index","mx-copy/index","examples/hl"],(l,a,e)=>{l("mx-calendar/datepicker"),l("mx-dropdown/index"),l("mx-copy/index"),l("examples/hl");var s=l("magix"),r=l("examples/example");l("$");s.applyStyle("_zs_galleryV","._zs_galleryfY{opacity:.1}._zs_galleryfY,._zs_galleryfZ{background-color:var(--color-brand)}._zs_galleryfZ{opacity:.2}._zs_galleryg_{opacity:.3}._zs_galleryg_,._zs_galleryga{background-color:var(--color-brand)}._zs_galleryga{opacity:.4}._zs_gallerygb{padding:16px;background-color:var(--app-bg)}"),e.exports=r.extend({tmpl:function(l,a,e,s,r,i,t,d){if(e||(e=l),!r){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},g=/[&<>"'`]/g,n=function(l){return"&"+c[l]+";"};r=function(l){return""+(null==l?"":l)},s=function(l){return r(l).replace(g,n)}}if(!i){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(l){return _[l]},m=/[!')(*]/g;i=function(l){return encodeURIComponent(r(l)).replace(m,x)}}if(!d){var o=/[\\'"]/g;d=function(l){return r(l).replace(o,"\\$&")}}t||(t=function(l,a,e,s){for(s=l[p];--s;)if(l[e=p+s]===a)return e;return l[e=p+l[p]++]=a,e});var p="",v="",y=l.viewId,z=l.text1,f=l.text3;return v+='<div mxa="_zs_gallerycN:_" class="_zs_galleryg"><div mxa="_zs_gallerycN:a" class="_zs_galleryj"><div mxs="_zs_gallerycN:_" class="mb10">使用 &lt;mx-grid&gt; 标签；也可直接用 class grid 样式</div><div mxs="_zs_gallerycN:a" class="mb10">其中标题部分，<span class="color-brand">标题+提示信息固定向左浮动</span>，标题上其他内容请自行控制左右浮动</div><div mxa="_zs_gallerycN:b" class="_zs_gallerygb"><div mxa="_zs_gallerycN:c" class="grid"><div mxa="_zs_gallerycN:d" class="clearfix" style="padding: 10px 24px;border-bottom: 1px solid var(--color-border)"><div mxs="_zs_gallerycN:b" style="float:left; height: 32px; line-height: 32px;"><span class="grid-title" style="margin-right: 16px;">标题</span><span style="margin-right: 16px; color: #999;">提示信息</span></div><div mxs="_zs_gallerycN:c" class="fl"><div class="w200 mr10" mx-view="mx-calendar/datepicker"></div></div><div mxa="_zs_gallerycN:e" class="fr"><div mxs="_zs_gallerycN:d" class="w200 mr10" mx-view="mx-calendar/datepicker"></div><div class="w200" mx-view="mx-dropdown/index?list='+t(e,[1,2,3])+'"></div></div></div><div mxs="_zs_gallerycN:e" class="clearfix" style="padding: 16px 24px;">test</div></div></div></div><div mxa="_zs_gallerycN:f" class="clearfix"><div mxa="_zs_gallerycN:g" class="_zs_galleryd _zs_galleryf"><div mxa="_zs_gallerycN:h" class="_zs_galleryk"><div mxs="_zs_gallerycN:f" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(y)+'_text_1"><span mxa="_zs_gallerycN:i" class="_zs_galleryn">'+r(z)+'</span><i mxs="_zs_gallerycN:g" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+s(y)+'_text_1">\n&lt;mx-grid&gt;\n    &lt;mx-grid.title content="标题" tip="提示信息"&gt;\n        &lt;div class="fl"&gt;\n            &lt;mx-calendar.datepicker class="w200 mr10"/&gt;\n        &lt;/div&gt;\n\n        &lt;div class="fr"&gt;\n            &lt;mx-calendar.datepicker class="w200 mr10"/&gt;\n\n            &lt;mx-dropdown class="w200" \n                list="&#123;&#123;@[1,2,3]&#125;&#125;"&gt;\n            &lt;/mx-dropdown&gt;\n        &lt;/div&gt;\n    &lt;/mx-grid.title&gt;\n    &lt;mx-grid.body&gt;test&lt;/mx-grid.body&gt;\n&lt;/mx-grid&gt;\n                </pre></div></div><div mxa="_zs_gallerycN:j" class="_zs_galleryd"><div mxa="_zs_gallerycN:k" class="_zs_galleryk"><div mxs="_zs_gallerycN:h" class="_zs_galleryi">等同于使用class grid</div><div class="_zs_galleryl" mx-success="'+a+'done({id:3})" mx-view="mx-copy/index?copyNode='+i(y)+'_text_3"><span mxa="_zs_gallerycN:l" class="_zs_galleryn">'+r(f)+'</span><i mxs="_zs_gallerycN:g" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+s(y)+'_text_3">\n&lt;div class="grid"&gt;\n    &lt;mx-grid.title content="标题" tip="提示信息"&gt;\n        &lt;div class="fl"&gt;\n            &lt;mx-calendar.datepicker class="w200 mr10"/&gt;\n        &lt;/div&gt;\n\n        &lt;div class="fr"&gt;\n            &lt;mx-calendar.datepicker class="w200 mr10"/&gt;\n\n            &lt;mx-dropdown class="w200" \n                list="&#123;&#123;@[1,2,3]&#125;&#125;"&gt;\n            &lt;/mx-dropdown&gt;\n        &lt;/div&gt;\n    &lt;/mx-grid.title&gt;\n    &lt;mx-grid.body&gt;test&lt;/mx-grid.body&gt;\n&lt;/div&gt;\n                </pre></div></div></div></div>'},render:function(){this.updater.digest()}})});