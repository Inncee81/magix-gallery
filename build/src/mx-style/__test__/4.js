define("mx-style/__test__/4",["magix","__test__/example","$","mx-copy/index","__test__/hl"],(a,e,l)=>{a("mx-copy/index"),a("__test__/hl");a("magix");var s=a("__test__/example");a("$");l.exports=s.extend({tmpl:function(a,e,l,s,r,i,_,m){if(l||(l=a),!r){var t={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,n=function(a){return"&"+t[a]+";"};r=function(a){return""+(null==a?"":a)},s=function(a){return r(a).replace(c,n)}}if(!i){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},d=function(a){return x[a]},g=/[!')(*]/g;i=function(a){return encodeURIComponent(r(a)).replace(g,d)}}if(!m){var u=/[\\'"]/g;m=function(a){return r(a).replace(u,"\\$&")}}var y="",v=a.viewId,p=a.text1;return y+='<div mxv mxa="_zs_gallerycM:_" class="_zs_galleryf"><div mxv mxa="_zs_gallerycM:a" class="_zs_galleryh"><div mxv mxa="_zs_gallerycM:b" class="mb20"><span mxs="_zs_gallerycM:_" class="color-9 mr10">动效：</span><label mxv mxa="_zs_gallerycM:c" class="mr20"><input mxs="_zs_gallerycM:a" type="radio" class="anim-radio" value="1" name="magix" checked="true"/> 选中</label><label mxv mxa="_zs_gallerycM:d" class="mr20"><input mxs="_zs_gallerycM:b" type="radio" class="anim-radio" value="2" name="magix"/> 未选中</label><label mxv mxa="_zs_gallerycM:e" class="mr20"><input mxs="_zs_gallerycM:c" type="radio" class="anim-radio" value="3" name="magix" disabled="true"/> 未选中禁止选择</label><label mxv><input mxs="_zs_gallerycM:d" type="radio" class="anim-radio" value="3" name="magix2" checked="true" disabled="true"/> 选中禁止选择</label></div><div mxv><span mxs="_zs_gallerycM:e" class="color-9 mr10">普通：</span><label mxv mxa="_zs_gallerycM:f" class="mr20"><input mxs="_zs_gallerycM:f" type="radio" value="1" name="magix3" checked="true"/> 选中</label><label mxv mxa="_zs_gallerycM:g" class="mr20"><input mxs="_zs_gallerycM:g" type="radio" value="2" name="magix3"/> 未选中</label><label mxv mxa="_zs_gallerycM:h" class="mr20"><input mxs="_zs_gallerycM:h" type="radio" value="3" name="magix3" disabled="true"/> 未选中禁止选择</label><label mxv><input mxs="_zs_gallerycM:i" type="radio" value="3" name="magix4" checked="true" disabled="true"/> 选中禁止选择</label></div></div><div mxa="_zs_gallerycM:i" class="_zs_galleryi"><div mxs="_zs_gallerycM:j" class="_zs_galleryg">Radio</div><div class="_zs_galleryj" mx-success="'+e+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(v)+'_text_1"><span mxa="_zs_gallerycM:j" class="_zs_galleryl">'+r(p)+'</span><i mxs="_zs_gallerycM:k" class="mc-iconfont _zs_galleryk">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+s(v)+'_text_1">\n&lt;label class="mr20"&gt;\n    &lt;input type="radio" class="anim-radio"\n        value="1" name="magix" checked="true"/&gt;\n    动效加className（anim-radio）\n&lt;/label&gt;\n\n&lt;label class="mr20"&gt;\n    &lt;input type="radio"  \n        value="2" name="magix2" checked="true"/&gt;\n    普通无动效\n&lt;/label&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});