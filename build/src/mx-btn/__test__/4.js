define("mx-btn/__test__/4",["magix","__test__/example","$","mx-copy/index","__test__/hl"],(t,a,e)=>{t("mx-copy/index"),t("__test__/hl");var s=t("magix"),l=t("__test__/example");t("$");s.applyStyle("_zs_galleryo","._zs_gallerybE{padding:20px;background-color:var(--app-bg)}._zs_gallerybF{padding:20px 0}"),e.exports=l.extend({tmpl:function(t,a,e,s,l,n,r,_){if(e||(e=t),!l){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,d=function(t){return"&"+i[t]+";"};l=function(t){return""+(null==t?"":t)},s=function(t){return l(t).replace(c,d)}}if(!n){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},g=function(t){return m[t]},x=/[!')(*]/g;n=function(t){return encodeURIComponent(l(t)).replace(x,g)}}if(!_){var b=/[\\'"]/g;_=function(t){return l(t).replace(b,"\\$&")}}var p="",o=t.viewId,y=t.text1;return p+='<div mxa="_zs_galleryY:_" class="_zs_galleryg"><div mxs="_zs_galleryY:_" class="_zs_galleryj"><div class="_zs_gallerybF"><a href="javascript:;" class="mx-btn btn-disabled mr20 mb20" style=";">禁用按钮</a><a href="javascript:;" class="mx-btn btn-small btn-disabled mr20 mb20" style=";">小号禁用按钮</a><br/><a href="javascript:;" class="mx-btn btn-disabled mr20 mb20" style=";"><i class="mc-iconfont">&#xe731;</i>禁用按钮</a><a href="javascript:;" class="mx-btn btn-disabled mr20 mb20" style=";">禁用按钮<span class="mx-tag btn-tag"><span class="mx-tag-arrow btn-tag-arrow"></span><span class="mx-tag-name">New</span></span></a></div></div><div mxa="_zs_galleryY:a" class="_zs_galleryk"><div mxs="_zs_galleryY:a" class="_zs_galleryi">按钮</div><div class="_zs_galleryl" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(o)+'_text_1"><span mxa="_zs_galleryY:b" class="_zs_galleryn">'+l(y)+'</span><i mxs="_zs_galleryY:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+s(o)+'_text_1">\n&lt;mx-btn disabled="true" content="禁用按钮"/&gt;\n\n&lt;mx-btn disabled="true" small="true" content="小号禁用按钮"/&gt;\n\n&lt;mx-btn disabled="true"&gt;\n    &lt;i class="mc-iconfont"&gt;&#38;&#35;xe731;&lt;/i&gt;禁用按钮\n&lt;/mx-btn&gt;\n\n&lt;mx-btn disabled="true" content="禁用按钮" tag-content="New"/&gt;\n        </pre></div></div>'},render:function(){this.updater.digest()}})});