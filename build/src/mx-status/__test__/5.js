define("mx-status/__test__/5",["magix","__test__/example","$","../dropdown","mx-copy/index","__test__/hl"],(e,l,t)=>{e("../dropdown"),e("mx-copy/index"),e("__test__/hl");e("magix");var n=e("__test__/example");e("$");t.exports=n.extend({tmpl:function(e,l,t,n,s,i,_,a){if(t||(t=e),!s){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,o=function(e){return"&"+r[e]+";"};s=function(e){return""+(null==e?"":e)},n=function(e){return s(e).replace(c,o)}}if(!i){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return d[e]},v=/[!')(*]/g;i=function(e){return encodeURIComponent(s(e)).replace(v,x)}}if(!a){var m=/[\\'"]/g;a=function(e){return s(e).replace(m,"\\$&")}}_||(_=function(e,l,t,n){for(n=e[u];--n;)if(e[t=u+n]===l)return t;return e[t=u+e[u]++]=l,t});var u="",g="",f=e.viewId,p=e.text1;return g+='<div mxa="_zs_gallerycD:_" class="_zs_galleryf"><div mxa="_zs_gallerycD:a" class="_zs_galleryh"><div mxs="_zs_gallerycD:_" class="mb20 lh22 clearfix"><div class="fl color-9">以下示例：</div><div class="fl">纯提示，无操作</div></div><div mx-view="mx-status/dropdown?info='+_(t,{value:1,text:"正在投放",icon:'<i class="mc-iconfont">&#xe683;</i>',color:"#51a300"})+'"></div></div><div mxa="_zs_gallerycD:b" class="_zs_galleryi"><div mxs="_zs_gallerycD:a" class="_zs_galleryg">HTML Code</div><div class="_zs_galleryj" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(f)+'_text_1"><span mxa="_zs_gallerycD:c" class="_zs_galleryl">'+s(p)+'</span><i mxs="_zs_gallerycD:b" class="mc-iconfont _zs_galleryk">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+n(f)+"_text_1\">\n&lt;mx-status.dropdown \n    info=\"&#123;&#123;@&#123;\n        value: 1,\n        text: '正在投放',\n        icon: '&lt;i class=\\\"mc-iconfont\\\"&gt;&#38;&#35;xe683;&lt;/i&gt;',\n        color: '#51a300'\n    &#125;&#125;&#125;\"/&gt;</pre></div></div>"},render:function(){this.updater.digest()}})});