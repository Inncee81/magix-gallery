define("mx-effects/examples/28",["magix","examples/example","$","../icon","mx-copy/index","examples/hl"],(l,e,a)=>{l("../icon"),l("mx-copy/index"),l("examples/hl");l("magix");var t=l("examples/example");l("$");a.exports=t.extend({tmpl:function(l,e,a,t,s,n,m,c){if(a||(a=l),!s){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},i=/[&<>"'`]/g,g=function(l){return"&"+r[l]+";"};s=function(l){return""+(null==l?"":l)},t=function(l){return s(l).replace(i,g)}}if(!n){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(l){return x[l]},b=/[!')(*]/g;n=function(l){return encodeURIComponent(s(l)).replace(b,p)}}if(!c){var _=/[\\'"]/g;c=function(l){return s(l).replace(_,"\\$&")}}var o="",y=l.viewId,v=l.text1;return o+='<div mxv mxa="_zs_gallerybQ:_" class="_zs_galleryg"><div mxv mxa="_zs_gallerybQ:a" class="_zs_galleryj"><div mxv mxa="_zs_gallerybQ:b" class="mb40"><span mxs="_zs_gallerybQ:_" class="color-9 mr10">checkbox：</span><label mxv mxa="_zs_gallerybQ:c" class="mr20"><input mxs="_zs_gallerybQ:a" type="radio" value="1" name="magix3" checked="true"/><span mxs="_zs_gallerybQ:b" class="mr5">选项1</span><span mxs="_zs_gallerybQ:c" mx-view="mx-effects/icon?type=highlight&content=%E6%8E%A8%E8%8D%90"></span></label><label mxv mxa="_zs_gallerybQ:d" class="mr20"><input mxs="_zs_gallerybQ:d" type="radio" value="2" name="magix3"/> 选项2</label><label mxv mxa="_zs_gallerybQ:e" class="mr20"><input mxs="_zs_gallerybQ:e" type="radio" value="3" name="magix3"/> 选项3</label></div><div mxv mxa="_zs_gallerybQ:f" class="mb30"><span mxs="_zs_gallerybQ:f" class="color-9 mr10">radio：</span><label mxv mxa="_zs_gallerybQ:g" class="mr20"><input mxs="_zs_gallerybQ:g" type="checkbox" name="cb1" value="1" checked="true"/> 选项1</label><label mxv mxa="_zs_gallerybQ:h" class="mr20"><input mxs="_zs_gallerybQ:h" type="checkbox" name="cb1" value="3"/><span mxs="_zs_gallerybQ:i" class="mr5">选项2</span><span mxs="_zs_gallerybQ:c" mx-view="mx-effects/icon?type=highlight&content=%E6%8E%A8%E8%8D%90"></span></label><label mxv><input mxs="_zs_gallerybQ:j" type="checkbox" name="cb1" value="4"/> 选项3</label></div></div><div mxa="_zs_gallerybQ:i" class="_zs_galleryk"><div mxs="_zs_gallerybQ:k" class="_zs_galleryi">Checkbox</div><div class="_zs_galleryl" mx-success="'+e+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(y)+'_text_1"><span mxa="_zs_gallerybQ:j" class="_zs_galleryn">'+s(v)+'</span><i mxs="_zs_gallerybQ:l" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+t(y)+'_text_1">\n&lt;div class="mb40"&gt;\n    &lt;span class="color-9 mr10"&gt;checkbox：&lt;/span&gt;\n    &lt;label class="mr20"&gt;\n        &lt;input type="radio" value="1" name="magix3" checked="true"/&gt;\n        &lt;span class="mr5"&gt;选项1&lt;/span&gt;\n        &lt;mx-effects.icon type="highlight" content="推荐"/&gt;\n    &lt;/label&gt;\n    &lt;label class="mr20"&gt;\n        &lt;input type="radio" value="2" name="magix3" /&gt;\n        选项2\n    &lt;/label&gt;\n    &lt;label class="mr20"&gt;\n        &lt;input type="radio" value="3" name="magix3" /&gt;\n        选项3\n    &lt;/label&gt;\n&lt;/div&gt;\n\n&lt;div class="mb30"&gt;\n    &lt;span class="color-9 mr10"&gt;radio：&lt;/span&gt;\n    &lt;label class="mr20"&gt;\n        &lt;input type="checkbox" name="cb1" value="1" checked="true" /&gt;\n        选项1\n    &lt;/label&gt;\n    &lt;label class="mr20"&gt;\n        &lt;input type="checkbox" name="cb1" value="3" /&gt;\n        &lt;span class="mr5"&gt;选项2&lt;/span&gt;\n        &lt;mx-effects.icon type="highlight" content="推荐"/&gt;\n    &lt;/label&gt;\n    &lt;label&gt;\n        &lt;input type="checkbox" name="cb1" value="4" /&gt;\n        选项3\n    &lt;/label&gt;\n&lt;/div&gt;\n        </pre></div></div>'},render:function(){this.updater.digest()}})});