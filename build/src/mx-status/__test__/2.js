define("mx-status/__test__/2",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,i,t)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var l=e("__test__/example");e("$");t.exports=l.extend({tmpl:function(e,i,t,l,n,s,_,a){if(t||(t=e),!n){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,d=function(e){return"&"+r[e]+";"};n=function(e){return""+(null==e?"":e)},l=function(e){return n(e).replace(c,d)}}if(!s){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return o[e]},v=/[!')(*]/g;s=function(e){return encodeURIComponent(n(e)).replace(v,x)}}if(!a){var m=/[\\'"]/g;a=function(e){return n(e).replace(m,"\\$&")}}_||(_=function(e,i,t,l){for(l=e[u];--l;)if(e[t=u+l]===i)return t;return e[t=u+e[u]++]=i,t});var u="",g="",f=e.viewId,p=e.text1;return g+='<div mxa="_zs_galleryc+:_" class="_zs_galleryh"><div mxa="_zs_galleryc+:a" class="_zs_galleryk"><div mxs="_zs_galleryc+:_" class="mb20 lh22 clearfix"><div class="fl color-9">以下示例：</div><div class="fl"><div>纯提示信息，无操作项</div></div></div><div mx-view="mx-status/index?info='+_(t,{value:1,text:"正在投放",icon:'<i class="mc-iconfont">&#xe683;</i>',tip:"当前正在投放中<br/>换一行",color:"#51a300"})+'"></div></div><div mxa="_zs_galleryc+:b" class="_zs_galleryl"><div mxs="_zs_galleryc+:a" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+i+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(f)+'_text_1"><span mxa="_zs_galleryc+:c" class="_zs_galleryo">'+n(p)+'</span><i mxs="_zs_galleryc+:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(f)+"_text_1\">\n&lt;mx-status \n    info=\"&#123;&#123;@&#123;\n        value: 1,\n        text: '正在投放',\n        icon: '&lt;i class=\\\"mc-iconfont\\\"&gt;&#38;&#35;xe683;&lt;/i&gt;',\n        tip: '当前正在投放中'\n        color: '#51a300'\n    &#125;&#125;&#125;\"/&gt;</pre></div></div>"},render:function(){this.updater.digest({})}})});