define("mx-taginput/examples/3",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,t,s)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var l=e("examples/example");e("$");s.exports=l.extend({tmpl:function(e,t,s,l,i,n,a,r){if(s||(s=e),!i){var x={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,m=function(e){return"&"+x[e]+";"};i=function(e){return""+(null==e?"":e)},l=function(e){return i(e).replace(c,m)}}if(!n){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},_=function(e){return d[e]},p=/[!')(*]/g;n=function(e){return encodeURIComponent(i(e)).replace(p,_)}}if(!r){var g=/[\\'"]/g;r=function(e){return i(e).replace(g,"\\$&")}}a||(a=function(e,t,s,l){for(l=e[u];--l;)if(e[s=u+l]===t)return s;return e[s=u+e[u]++]=t,s});var u="",v="",o=e.viewId,y=e.text1;return v+='<div mxa="_zs_gallerye/:_" class="_zs_galleryg"><div mxa="_zs_gallerye/:a" class="_zs_galleryj"><div class="mb20 w280" mx-view="mx-taginput/index?list='+a(s,["test1","test2","test3","test4"])+'&selected=test1%2Ctest2"></div><div class="w280" mx-view="mx-taginput/index?list='+a(s,["test1","test2","test3","test4"])+'"></div></div><div mxa="_zs_gallerye/:b" class="_zs_galleryk"><div mxs="_zs_gallerye/:_" class="_zs_galleryi">简单list</div><div class="_zs_galleryl" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(o)+'_text_1"><span mxa="_zs_gallerye/:c" class="_zs_galleryn">'+i(y)+'</span><i mxs="_zs_gallerye/:a" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+l(o)+"_text_1\">\n&lt;mx-taginput class=\"w280\"\n    list=\"&#123;&#123;@['test1','test2','test3','test4']&#125;&#125;\"\n    selected=\"test1,test2\"/&gt;\n\n&lt;mx-taginput class=\"w280\"\n    list=\"&#123;&#123;@['test1','test2','test3','test4']&#125;&#125;\"/&gt;</pre></div></div>"},render:function(){this.updater.digest()}})});