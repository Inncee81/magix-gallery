define("mx-status/__test__/5",["magix","__test__/example","$","../dropdown","mx-copy/index","__test__/hl"],(e,l,t)=>{e("../dropdown"),e("mx-copy/index"),e("__test__/hl");e("magix");var a=e("__test__/example");e("$");t.exports=a.extend({tmpl:function(e,l,t,a,n,s,i,_){if(t||(t=e),!n){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,o=function(e){return"&"+r[e]+";"};n=function(e){return""+(null==e?"":e)},a=function(e){return n(e).replace(d,o)}}if(!s){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return c[e]},m=/[!')(*]/g;s=function(e){return encodeURIComponent(n(e)).replace(m,x)}}if(!_){var v=/[\\'"]/g;_=function(e){return n(e).replace(v,"\\$&")}}i||(i=function(e,l,t,a){for(a=e[u];--a;)if(e[t=u+a]===l)return t;return e[t=u+e[u]++]=l,t});var u="",g="",f=e.viewId,p=e.text1;return g+='<div mxa="_zs_galleryda:_" class="_zs_galleryh"><div mxa="_zs_galleryda:a" class="_zs_galleryk"><div mxs="_zs_galleryda:_" class="mb20 lh22 clearfix"><div class="fl color-9">以下示例：</div><div class="fl">纯提示，无操作</div></div><div mx-view="mx-status/dropdown?info='+i(t,{value:1,text:"正在投放",icon:'<i class="mc-iconfont">&#xe683;</i>',color:"#51a300"})+'"></div></div><div mxa="_zs_galleryda:b" class="_zs_galleryl"><div mxs="_zs_galleryda:a" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(f)+'_text_1"><span mxa="_zs_galleryda:c" class="_zs_galleryo">'+n(p)+'</span><i mxs="_zs_galleryda:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(f)+"_text_1\">\n&lt;mx-status.dropdown \n    info=\"&#123;&#123;@&#123;\n        value: 1,\n        text: '正在投放',\n        icon: '&lt;i class=\\\"mc-iconfont\\\"&gt;&#38;&#35;xe683;&lt;/i&gt;',\n        color: '#51a300'\n    &#125;&#125;&#125;\"/&gt;</pre></div></div>"},render:function(){this.updater.digest()}})});