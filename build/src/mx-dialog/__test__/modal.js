define("mx-dialog/__test__/modal",["magix","$","__test__/subs","mx-title/second","./9","./10","./11","./options"],(t,e,i)=>{t("__test__/subs"),t("mx-title/second"),t("./9"),t("./10"),t("./11"),t("./options");var d=t("magix");t("$");i.exports=d.View.extend({tmpl:function(t,e,i,d,a,s,_,o){if(i||(i=t),!a){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},r=/[&<>"'`]/g,l=function(t){return"&"+n[t]+";"};a=function(t){return""+(null==t?"":t)},d=function(t){return a(t).replace(r,l)}}if(!s){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},v=function(t){return m[t]},x=/[!')(*]/g;s=function(t){return encodeURIComponent(a(t)).replace(x,v)}}if(!o){var c=/[\\'"]/g;o=function(t){return a(t).replace(c,"\\$&")}}_||(_=function(t,e,i,d){for(d=t[g];--d;)if(t[i=g+d]===e)return i;return t[i=g+t[g]++]=e,i});var g="",u="",p=t.viewId;return u+='<div mxa="_zs_galleryar:_" class="pr pr120"><div mx-view="__test__/subs?list='+_(i,[{name:"使用示例",key:p+"_demo",subs:[{name:"头部 + 底部",key:p+"_demo9"},{name:"只头部",key:p+"_demo10"},{name:"只底部",key:p+"_demo11"}]},{name:"View Methods",key:p+"_method"},{name:"dialogOptions",key:p+"_options"}])+'"></div><div id="'+d(p)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mx-view="mx-dialog/__test__/9" id="'+d(p)+'_demo9"></div><div mxa="_zs_galleryar:a" class="clearfix mb20"><div mxa="_zs_galleryar:b" class="_zs_gallerye"><div mx-view="mx-dialog/__test__/10" id="'+d(p)+'_demo10"></div></div><div mxa="_zs_galleryar:c" class="_zs_gallerye"><div mx-view="mx-dialog/__test__/11" id="'+d(p)+'_demo11"></div></div></div><div id="'+d(p)+'_method" mx-view="mx-title/second?content=Methods"></div><div mxs="_zs_galleryar:_" class="pr20 mb40"><table class="table _zs_galleryr"><thead><tr><th width="200">方法名</th><th width="200">说明</th><th width="300">预览</th></tr></thead><tbody><tr><td>mxModal(viewPath, [viewOptions], [dialogOptions])</td><td>自定义浮层</td><td></td></tr><tr><td>mxCloseAllDialogs()</td><td>关闭当前所有展开的浮层</td><td></td></tr></tbody></table></div><div id="'+d(p)+'_options" mx-view="mx-title/second?content=dialogOptions%E9%85%8D%E7%BD%AE%E5%8F%82%E6%95%B0"></div><div mxs="_zs_galleryar:a" class="mb40" mx-view="mx-dialog/__test__/options"></div></div>'},render:function(){this.updater.digest({viewId:this.id})}})});