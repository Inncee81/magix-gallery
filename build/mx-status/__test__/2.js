define("mx-status/__test__/2",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(t,e,_)=>{t("../index"),t("mx-copy/index"),t("__test__/hl");t("magix");var i=t("__test__/example");t("$");_.exports=i.extend({tmpl:function(t,e,_,i,l,n,s,a){if(_||(_=t),!l){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,o=function(t){return"&"+r[t]+";"};l=function(t){return""+(null==t?"":t)},i=function(t){return l(t).replace(c,o)}}if(!n){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(t){return d[t]},v=/[!')(*]/g;n=function(t){return encodeURIComponent(l(t)).replace(v,x)}}if(!a){var u=/[\\'"]/g;a=function(t){return l(t).replace(u,"\\$&")}}s||(s=function(t,e,_,i){for(i=t[p];--i;)if(t[_=p+i]===e)return _;return t[_=p+t[p]++]=e,_});var m,g,f,p="",y="",z=t.viewId,w=t.text1;try{y+='<div mxa="_zs_galleryd&:_" class="_zs_gallery___test___layout_-example"><div mxa="_zs_galleryd&:a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_galleryd&:_" class="mb20 lh22 clearfix"><div class="fl color-9">以下示例：</div><div class="fl"><div>纯提示信息，无操作项</div></div></div><div mx-view="mx-status/index?info=',f=10,g="@{\n                value: 1,\n                text: '正在投放',\n                icon: '<i class=\\\"mc-iconfont\\\">&#xe683;</i>',\n                tip: '当前正在投放中<br/>换一行'\n                color: '#51a300'\n            }",y+=(m="<%@{        value: 1,        text: '正在投放',        icon: '<i class=\\\"mc-iconfont\\\">&#xe683;</i>',        tip: '当前正在投放中<br/>换一行',        color: '#51a300'    }%>",s(_,{value:1,text:"正在投放",icon:'<i class="mc-iconfont">&#xe683;</i>',tip:"当前正在投放中<br/>换一行",color:"#51a300"})+'"></div></div><div mxa="_zs_galleryd&:b" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryd&:a" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+e+'done({id:1})" mx-view="mx-copy/index?copyNode='),f=20,g="=viewId",y+=(m="<%!$eu(viewId)%>",n(z)+'_text_1"><span mxa="_zs_galleryd&:c" class="_zs_gallery___test___layout_-desc-tip">'),f=22,g="!text1",y+=(m="<%!text1%>",l(w)+'</span><i mxs="_zs_galleryd&:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),f=25,g="=viewId",y+=(m="<%=viewId%>",i(z)+"_text_1\">\n&lt;mx-status \n    info=\"&#123;&#123;@&#123;\n        value: 1,\n        text: '正在投放',\n        icon: '&lt;i class=\\\"mc-iconfont\\\"&gt;&#38;&#35;xe683;&lt;/i&gt;',\n        tip: '当前正在投放中'\n        color: '#51a300'\n    &#125;&#125;&#125;\"/&gt;</pre></div></div>")}catch(t){var h="render view error:"+(t.message||t);throw g&&(h+="\r\n\tsrc art:{{"+g+"}}\r\n\tat line:"+f),h+="\r\n\t"+(g?"translate to:":"expr:"),h+=m+"\r\n\tat file:mx-status/__test__/2.html"}return y},render:function(){this.updater.digest({})}})});