define("mx-popover/__test__/multi",["magix","mx-popover/index","../index"],(t,e,i)=>{t("../index");var n=t("magix"),r=t("mx-popover/index");i.exports=n.View.extend({tmpl:function(t,e,i,n,r,a,d,o){if(i||(i=t),!r){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},l=/[&<>"'`]/g,s=function(t){return"&"+c[t]+";"};r=function(t){return""+(null==t?"":t)},n=function(t){return r(t).replace(l,s)}}if(!a){var p={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},h=function(t){return p[t]},x=/[!')(*]/g;a=function(t){return encodeURIComponent(r(t)).replace(x,h)}}if(!o){var m=/[\\'"]/g;o=function(t){return r(t).replace(m,"\\$&")}}var u="";return u+='<div mxs="_zs_gallerycX:_" class="dialog-header"><span class="fontsize-16">多个带modal的浮层</span></div><div style="height:'+n(t.height)+'px;"><table mxs="_zs_gallerycX:a" class="table"><thead><tr><th width="100">配置key值<i class="mc-iconfont color-9 displacement-2 ml5" mx-view="mx-popover/index?content=%E7%94%A8%20i%20%E6%A0%87%E7%AD%BE%E7%94%9F%E6%88%90%EF%BC%8C%E5%AE%BD%E5%BA%A6400%EF%BC%8C%E6%96%87%E5%AD%97%E5%B1%85%E4%B8%AD%E5%AF%B9%E9%BD%90&width=400&alignText=center&placement=bottom">&#xe629;</i></th><th width="100">显示文案</th><th width="200">描述</th></tr></thead><tbody><tr><td>key1</td><td>text1</td><td>tip1</td></tr><tr><td>key2</td><td>text2</td><td>tip2</td></tr></tbody></table></div><div mxs="_zs_gallerycX:b" class="dialog-footer"><a href="javascript:;" class="btn mr10" mx-click="'+e+'cancel()">取消</a></div>'},mixins:[r],init:function(t){this.viewOptions=t},render:function(){this.updater.digest({height:$(window).height()})},"cancel<click>":function(t){t.preventDefault();var e=this.viewOptions;e.dialog&&e.dialog.close()}})});