define("mx-search/__test__/4",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,_,a)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var t=e("__test__/example");e("$");a.exports=t.extend({tmpl:function(e,_,a,t,s,l,r,n){if(a||(a=e),!s){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},i=/[&<>"'`]/g,d=function(e){return"&"+c[e]+";"};s=function(e){return""+(null==e?"":e)},t=function(e){return s(e).replace(i,d)}}if(!l){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return x[e]},m=/[!')(*]/g;l=function(e){return encodeURIComponent(s(e)).replace(m,o)}}if(!n){var g=/[\\'"]/g;n=function(e){return s(e).replace(g,"\\$&")}}var u,p,v,y="",h=e.searchValue,f=e.viewId,z=e.text1;try{y+='<div mxa="_zs_gallerydS:_" class="_zs_gallery___test___layout_-example"><div mxa="_zs_gallerydS:a" class="_zs_gallery___test___layout_-eg-content"><div mxa="_zs_gallerydS:b" class="mb20"><span mxs="_zs_gallerydS:_" class="color-9">回车搜索：</span><span>campaignId = ',v=6,p="=searchValue",y+=(u="<%=searchValue%>",t(h)+'</span></div><div mxs="_zs_gallerydS:a" class="w200" mx-search="'+_+'change()" mx-view="mx-search/index?searchKey=campaignId&placeholder=%E6%90%9C%E7%B4%A2%E8%AE%A1%E5%88%92"></div></div><div mxa="_zs_gallerydS:c" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerydS:b" class="_zs_gallery___test___layout_-eg-title">单个搜索，封装事件</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+_+'done({id:1})" mx-view="mx-copy/index?copyNode='),v=15,p="=viewId",y+=(u="<%!$eu(viewId)%>",l(f)+'_text_1"><span mxa="_zs_gallerydS:d" class="_zs_gallery___test___layout_-desc-tip">'),v=17,p="!text1",y+=(u="<%!text1%>",s(z)+'</span><i mxs="_zs_gallerydS:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),v=20,p="=viewId",y+=(u="<%=viewId%>",t(f)+'_text_1">\n&lt;mx-search class="w200"\n    search-key="campaignId"\n    placeholder="搜索计划"\n    mx-search="change()"/&gt;</pre></div></div>')}catch(e){var w="render view error:"+(e.message||e);throw p&&(w+="\r\n\tsrc art:{{"+p+"}}\r\n\tat line:"+v),w+="\r\n\t"+(p?"translate to:":"expr:"),w+=u+"\r\n\tat file:mx-search/__test__/4.html"}return y},render:function(){this.updater.digest({searchValue:""})},"change<search>":function(e){e.preventDefault(),this.updater.digest({searchValue:e.searchValue})}})});