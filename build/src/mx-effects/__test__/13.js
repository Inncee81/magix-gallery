define("mx-effects/__test__/13",["magix","__test__/example","$","../star","mx-copy/index","__test__/hl"],(e,t,s)=>{e("../star"),e("mx-copy/index"),e("__test__/hl");e("magix");var i=e("__test__/example");e("$");s.exports=i.extend({tmpl:function(e,t,s,i,n,c,l,a){if(s||(s=e),!n){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},r=/[&<>"'`]/g,o=function(e){return"&"+_[e]+";"};n=function(e){return""+(null==e?"":e)},i=function(e){return n(e).replace(r,o)}}if(!c){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return m[e]},f=/[!')(*]/g;c=function(e){return encodeURIComponent(n(e)).replace(f,x)}}if(!a){var d=/[\\'"]/g;a=function(e){return n(e).replace(d,"\\$&")}}var g="",v=e.viewId,u=e.text1;return g+='<div mxa="_zs_gallerybe:_" class="_zs_galleryh"><div mxs="_zs_gallerybe:_" class="_zs_galleryk"><div class="mb10"><div mx-view="mx-effects/star?num=2.5&icon=%3Ci%20class%3D%27mc-iconfont%27%3E%EE%98%B5%3C%2Fi%3E&color=%23fc2a2a"></div></div><div class="mb10"><div mx-view="mx-effects/star?num=4&icon=%3Ci%20class%3D%27mc-iconfont%27%3E%EE%98%8C%3C%2Fi%3E&color=rgb%2881%2C%20163%2C%200%29"></div></div></div><div mxa="_zs_gallerybe:a" class="_zs_galleryl"><div mxs="_zs_gallerybe:a" class="_zs_galleryj">自定义icon + 颜色</div><div class="_zs_gallerym" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+c(v)+'_text_1"><span mxa="_zs_gallerybe:b" class="_zs_galleryo">'+n(u)+'</span><i mxs="_zs_gallerybe:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+i(v)+'_text_1">\n&lt;mx-effects.star \n    num="2.5"\n    icon="&lt;i class=\'mc-iconfont\'&gt;&#38;&#35;xe635;&lt;/i&gt;"\n    color="#fc2a2a"&gt;&lt;/mx-effects.star&gt;\n\n&lt;mx-effects.star \n    num="4"\n    icon="&lt;i class=\'mc-iconfont\'&gt;&#38;&#35;xe60c;&lt;/i&gt;"\n    color="rgb(81, 163, 0)"&gt;&lt;/mx-effects.star&gt;</pre></div></div>'},render:function(){this.updater.digest({icon:'<i class="mc-iconfont">&#xe635;</i>',icon2:'<i class="mc-iconfont">&#xe60c;</i>'})}})});