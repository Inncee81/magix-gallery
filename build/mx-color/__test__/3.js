define("mx-color/__test__/3",["magix","__test__/example","$","../picker","mx-copy/index","__test__/hl"],(e,_,t)=>{e("../picker"),e("mx-copy/index"),e("__test__/hl");e("magix");var r=e("__test__/example");e("$");t.exports=r.extend({tmpl:function(e,_,t,r,l,a,o,s){if(t||(t=e),!l){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},n=/[&<>"'`]/g,i=function(e){return"&"+c[e]+";"};l=function(e){return""+(null==e?"":e)},r=function(e){return l(e).replace(n,i)}}if(!a){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return d[e]},g=/[!')(*]/g;a=function(e){return encodeURIComponent(l(e)).replace(g,x)}}if(!s){var m=/[\\'"]/g;s=function(e){return l(e).replace(m,"\\$&")}}var u,p,v,y="",f=e.color,z=e.viewId,h=e.text1;try{y+='<div mxa="_zs_galleryaB:_" class="_zs_gallery___test___layout_-example"><div mxa="_zs_galleryaB:a" class="_zs_gallery___test___layout_-eg-content"><div mxa="_zs_galleryaB:b" class="mb20"><span mxa="_zs_galleryaB:c" class="color-9">当前选中颜色：',v=4,p="=color",y+=(u="<%=color%>",r(f)+'</span></div><div mx-change="'+_+'changeColor()" mx-view="mx-color/picker?dot=true&color='),v=8,p="=color",y+=(u="<%!$eu(color)%>",a(f)+'"></div></div><div mxa="_zs_galleryaB:d" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryaB:_" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+_+'done({id:1})" mx-view="mx-copy/index?copyNode='),v=13,p="=viewId",y+=(u="<%!$eu(viewId)%>",a(z)+'_text_1"><span mxa="_zs_galleryaB:e" class="_zs_gallery___test___layout_-desc-tip">'),v=15,p="!text1",y+=(u="<%!text1%>",l(h)+'</span><i mxs="_zs_galleryaB:a" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),v=18,p="=viewId",y+=(u="<%=viewId%>",r(z)+'_text_1">\n&lt;mx-color.picker \n    dot="true"\n    color="&#123;&#123;=color&#125;&#125;"\n    mx-change="changeColor()"/&gt;\n        </pre></div></div>')}catch(e){var w="render view error:"+(e.message||e);throw p&&(w+="\r\n\tsrc art:{{"+p+"}}\r\n\tat line:"+v),w+="\r\n\t"+(p?"translate to:":"expr:"),w+=u+"\r\n\tat file:mx-color/__test__/3.html"}return y},render:function(){this.updater.digest({color:"#9a3c3c"})},"changeColor<change>":function(e){this.updater.digest({color:e.color})}})});