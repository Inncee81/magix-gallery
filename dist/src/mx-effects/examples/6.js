define("mx-effects/examples/6",["magix","examples/example","$","../notice","mx-copy/index","examples/hl"],(e,n,l)=>{e("../notice"),e("mx-copy/index"),e("examples/hl");e("magix");var t=e("examples/example");e("$");l.exports=t.extend({tmpl:function(e,n,l,t,o,c,r,s){if(l||(l=e),!o){var a={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},i=/[&<>"'`]/g,f=function(e){return"&"+a[e]+";"};o=function(e){return""+(null==e?"":e)},t=function(e){return o(e).replace(i,f)}}if(!c){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return x[e]},E=/[!')(*]/g;c=function(e){return encodeURIComponent(o(e)).replace(E,m)}}if(!s){var d=/[\\'"]/g;s=function(e){return o(e).replace(d,"\\$&")}}var _="",v=e.viewId,A=e.text1;return _+='<div mxa="_zs_gallerybX:_" class="_zs_galleryg"><div mxs="_zs_gallerybX:_" class="_zs_galleryj"><div class="mb20" mx-view="mx-effects/notice?color=%2351a300&content=%E8%87%AA%E5%AE%9A%E4%B9%89%E4%B8%BB%E8%A6%81%E9%A2%9C%E8%89%B2%EF%BC%8C%E5%85%B6%E4%BB%96%E5%9F%BA%E4%BA%8E%E6%AD%A4%E8%AE%A1%E7%AE%97"></div><div class="mb20" mx-view="mx-effects/notice?color=%2351a300&colorText=%2351a300&content=%E8%87%AA%E5%AE%9A%E4%B9%89%E6%96%87%E6%A1%88%E9%A2%9C%E8%89%B2"></div><div class="mb20" mx-view="mx-effects/notice?colorBg=%23ffb400&colorBorder=%23ffb400&colorText=%23fff&colorIcon=%23fff&border=true&content=%E6%89%80%E6%9C%89%E6%94%AF%E6%8C%81%E8%87%AA%E5%AE%9A%E4%B9%89%E7%9A%84%E9%A2%9C%E8%89%B2"></div></div><div mxa="_zs_gallerybX:a" class="_zs_galleryk"><div mxs="_zs_gallerybX:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+n+'done({id:1})" mx-view="mx-copy/index?copyNode='+c(v)+'_text_1"><span mxa="_zs_gallerybX:b" class="_zs_galleryn">'+o(A)+'</span><i mxs="_zs_gallerybX:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+t(v)+'_text_1">\n&lt;mx-effects.notice \n    color="#51a300" \n    content="自定义主要颜色，其他基于此计算"/&gt;\n\n&lt;mx-effects.notice \n    color="#51a300" \n    color-text="#51a300"\n    content="自定义文案颜色"/&gt;\n\n&lt;mx-effects.notice \n    color-bg="#ffb400"\n    color-border="#ffb400" \n    color-text="#fff"\n    color-icon="#fff"\n    border="true"\n    content="所有支持自定义的颜色"/&gt;\n        </pre></div></div>'},render:function(){this.updater.digest()}})});