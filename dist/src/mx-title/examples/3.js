define("mx-title/examples/3",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,l,n)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var t=e("examples/example");e("$");n.exports=t.extend({tmpl:function(e,l,n,t,s,a,i,r){if(n||(n=e),!s){var x={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,p=function(e){return"&"+x[e]+";"};s=function(e){return""+(null==e?"":e)},t=function(e){return s(e).replace(d,p)}}if(!a){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return c[e]},o=/[!')(*]/g;a=function(e){return encodeURIComponent(s(e)).replace(o,m)}}if(!r){var _=/[\\'"]/g;r=function(e){return s(e).replace(_,"\\$&")}}var g="",v=e.viewId,y=e.text5;return g+='<div class="_zs_galleryg" id="'+t(v)+'_demo2"><div mxs="_zs_galleryfb:_" class="_zs_galleryj"><div mx-view="mx-title/index?content=%3Cspan%20style%3D%27color%3A%20red%3B%27%3E%E4%B8%80%E7%BA%A7%3C%2Fspan%3E%E6%A0%87%E9%A2%98&tip=%3Cspan%20style%3D%27color%3A%20red%3B%27%3E%E9%AB%98%E4%BA%AE%3C%2Fspan%3E%E6%98%BE%E7%A4%BA"></div></div><div mxa="_zs_galleryfb:_" class="_zs_galleryk"><div mxs="_zs_galleryfb:a" class="_zs_galleryi">可包含html标签</div><div class="_zs_galleryl" mx-success="'+l+'done({id:5})" mx-view="mx-copy/index?copyNode='+a(v)+'_text_5"><span mxa="_zs_galleryfb:a" class="_zs_galleryn">'+s(y)+'</span><i mxs="_zs_galleryfb:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+t(v)+'_text_5">\n&lt;mx-title \n    content="&lt;span style=\'color: red;\'&gt;一级&lt;/span&gt;标题"\n    tip="&lt;span style=\'color: red;\'&gt;高亮&lt;/span&gt;显示"/&gt;\n        </pre></div></div>'},render:function(){this.updater.digest()}})});