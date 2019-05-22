define("mx-grid/__test__/7",["magix","__test__/example","$","mx-calendar/datepicker","mx-dropdown/index","mx-copy/index","__test__/hl"],(l,e,a)=>{l("mx-calendar/datepicker"),l("mx-dropdown/index"),l("mx-copy/index"),l("__test__/hl");var s=l("magix"),t=l("__test__/example");l("$");s.applyStyle("_zs_galleryV","._zs_galleryfY{opacity:.1}._zs_galleryfY,._zs_galleryfZ{background-color:var(--color-brand)}._zs_galleryfZ{opacity:.2}._zs_galleryg_{opacity:.3}._zs_galleryg_,._zs_galleryga{background-color:var(--color-brand)}._zs_galleryga{opacity:.4}._zs_gallerygb{padding:16px;background-color:var(--app-bg)}"),a.exports=t.extend({tmpl:function(l,e,a,s,t,r,i,d){if(a||(a=l),!t){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,n=function(l){return"&"+_[l]+";"};t=function(l){return""+(null==l?"":l)},s=function(l){return t(l).replace(c,n)}}if(!r){var g={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(l){return g[l]},m=/[!')(*]/g;r=function(l){return encodeURIComponent(t(l)).replace(m,x)}}if(!d){var o=/[\\'"]/g;d=function(l){return t(l).replace(o,"\\$&")}}i||(i=function(l,e,a,s){for(s=l[v];--s;)if(l[a=v+s]===e)return a;return l[a=v+l[v]++]=e,a});var v="",y="",p=l.viewId,z=l.text1,f=l.text3;return y+='<div mxa="_zs_galleryce:_" class="_zs_galleryg"><div mxa="_zs_galleryce:a" class="_zs_galleryj"><div mxs="_zs_galleryce:_" class="mb10">使用 &lt;mx-grid&gt; 标签；也可直接用 class grid 样式</div><div mxs="_zs_galleryce:a" class="mb10">其中标题部分，<span class="color-brand">标题+提示信息固定向左浮动</span>，标题上其他内容请自行控制左右浮动</div><div mxa="_zs_galleryce:b" class="_zs_gallerygb"><div mxa="_zs_galleryce:c" class="grid"><div mxa="_zs_galleryce:d" content="标题" class="clearfix" style="padding: 10px 24px;;border-bottom: 1px solid #e6e6e6;;"><div mxs="_zs_galleryce:b" style="float:left; height: 32px; line-height: 32px;"><span style="font-size: 16px; margin-right: 16px;">标题</span><span style="margin-right: 16px; color: #999;">提示信息</span></div><div mxs="_zs_galleryce:c" class="fl"><div class="w200 mr10" mx-view="mx-calendar/datepicker"></div></div><div mxa="_zs_galleryce:e" class="fr"><div mxs="_zs_galleryce:d" class="w200 mr10" mx-view="mx-calendar/datepicker"></div><div class="w200" mx-view="mx-dropdown/index?list='+i(a,[1,2,3])+'"></div></div></div><div mxs="_zs_galleryce:e" class="clearfix" style="padding: 16px 24px;">test</div></div></div></div><div mxa="_zs_galleryce:f" class="clearfix"><div mxa="_zs_galleryce:g" class="_zs_galleryd _zs_galleryf"><div mxa="_zs_galleryce:h" class="_zs_galleryk"><div mxs="_zs_galleryce:f" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+e+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(p)+'_text_1"><span mxa="_zs_galleryce:i" class="_zs_galleryn">'+t(z)+'</span><i mxs="_zs_galleryce:g" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+s(p)+'_text_1">\n&lt;mx-grid&gt;\n    &lt;mx-grid.title content="标题" tip="提示信息"&gt;\n        &lt;div class="fl"&gt;\n            &lt;mx-calendar.datepicker class="w200 mr10"/&gt;\n        &lt;/div&gt;\n\n        &lt;div class="fr"&gt;\n            &lt;mx-calendar.datepicker class="w200 mr10"/&gt;\n\n            &lt;mx-dropdown class="w200" \n                list="&#123;&#123;@[1,2,3]&#125;&#125;"&gt;\n            &lt;/mx-dropdown&gt;\n        &lt;/div&gt;\n    &lt;/mx-grid.title&gt;\n    &lt;mx-grid.body&gt;test&lt;/mx-grid.body&gt;\n&lt;/mx-grid&gt;\n                </pre></div></div><div mxa="_zs_galleryce:j" class="_zs_galleryd"><div mxa="_zs_galleryce:k" class="_zs_galleryk"><div mxs="_zs_galleryce:h" class="_zs_galleryi">等同于使用class grid</div><div class="_zs_galleryl" mx-success="'+e+'done({id:3})" mx-view="mx-copy/index?copyNode='+r(p)+'_text_3"><span mxa="_zs_galleryce:l" class="_zs_galleryn">'+t(f)+'</span><i mxs="_zs_galleryce:g" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+s(p)+'_text_3">\n&lt;div class="grid"&gt;\n    &lt;mx-grid.title content="标题" tip="提示信息"&gt;\n        &lt;div class="fl"&gt;\n            &lt;mx-calendar.datepicker class="w200 mr10"/&gt;\n        &lt;/div&gt;\n\n        &lt;div class="fr"&gt;\n            &lt;mx-calendar.datepicker class="w200 mr10"/&gt;\n\n            &lt;mx-dropdown class="w200" \n                list="&#123;&#123;@[1,2,3]&#125;&#125;"&gt;\n            &lt;/mx-dropdown&gt;\n        &lt;/div&gt;\n    &lt;/mx-grid.title&gt;\n    &lt;mx-grid.body&gt;test&lt;/mx-grid.body&gt;\n&lt;/div&gt;\n                </pre></div></div></div></div>'},render:function(){this.updater.digest()}})});