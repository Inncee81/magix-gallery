define("mx-effects/__test__/27",["magix","__test__/example","$","mx-copy/index","__test__/hl"],(e,_,a)=>{e("mx-copy/index"),e("__test__/hl");var l=e("magix"),s=e("__test__/example");e("$");l.applyStyle("_zs_gallery_mx-effects_ua_","._zs_gallery_mx-effects_ua_-chrome-wrapper {\n  width: 280px;\n  background-color: var(--color-brand);\n  background-image: linear-gradient(to right, var(--color-brand), var(--btn-brand-gradient));\n  padding: 20px;\n  border-radius: var(--border-radius);\n}\n._zs_gallery_mx-effects_ua_-chrome-wrapper ._zs_gallery_mx-effects_ua_-chrome-icon {\n  font-size: 20px;\n  margin-right: 5px;\n}\n"),a.exports=s.extend({tmpl:function(e,_,a,l,s,t,r,i){if(a||(a=e),!s){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},n=/[&<>"'`]/g,o=function(e){return"&"+c[e]+";"};s=function(e){return""+(null==e?"":e)},l=function(e){return s(e).replace(n,o)}}if(!t){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return d[e]},x=/[!')(*]/g;t=function(e){return encodeURIComponent(s(e)).replace(x,m)}}if(!i){var f=/[\\'"]/g;i=function(e){return s(e).replace(f,"\\$&")}}var g,v,p,b="",y=e.show2,h=e.title2,u=e.tip2,w=e.show1,z=e.title1,N=e.tip1,k=e.viewId,I=e.text1;try{b+='<div mxa="_zs_gallerybN:_" class="_zs_gallery___test___layout_-example"><div mxa="_zs_gallerybN:a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_gallerybN:_" class="mb20 clearfix"><div class="fl color-9">说明：</div><div class="fl"><div>组件没有做兼容性测试，仅在chrome下开发测试，提供内置的浏览器升级提示组件</div><div>自动判断当前浏览器 + 版本，非chrome内核73以上版本出现以下提示框</div></div></div><div mxa="_zs_gallerybN:b" class="clearfix">',p=11,v="if show2",g="<%if (show2) {%>",y&&(b+='<div mxa="_zs_gallerybN:c" class="_zs_gallery_mx-effects_ua_-chrome-wrapper fl mr40"><div mxa="_zs_gallerybN:d" class="color-f mb10"><i mxs="_zs_gallerybN:a" class="mc-iconfont _zs_gallery_mx-effects_ua_-chrome-icon">&#xe631;</i><span mxa="_zs_gallerybN:e" class="fontsize-18">',p=15,v="=title2",b+=(g="<%=title2%>",l(h)+'</span></div><div mxa="_zs_gallerybN:f" class="mb20 color-f">'),p=17,v="=tip2",b+=(g="<%=tip2%>",l(u)+'</div><div mxs="_zs_gallerybN:b" class="clearfix"><a href="//www.google.com/chrome/browser/desktop/index.html" target="_blank" rel="noopener noreferrer" class="w80 mr10 btn btn-white btn-small">立即下载</a><a href="javascript:;" class="w80 btn btn-white btn-small" mx-click="'+_+'close({id:2})">关闭</a></div></div>'),p=23,v="/if",g="<%}%>"),b+=" ",p=24,v="if show1",g="<%if (show1) {%>",w&&(b+='<div mxa="_zs_gallerybN:g" class="_zs_gallery_mx-effects_ua_-chrome-wrapper fl"><div mxa="_zs_gallerybN:h" class="color-f mb10"><i mxs="_zs_gallerybN:a" class="mc-iconfont _zs_gallery_mx-effects_ua_-chrome-icon">&#xe631;</i><span mxa="_zs_gallerybN:i" class="fontsize-18">',p=28,v="=title1",b+=(g="<%=title1%>",l(z)+'</span></div><div mxa="_zs_gallerybN:j" class="mb20 color-f">'),p=30,v="=tip1",b+=(g="<%=tip1%>",l(N)+'</div><div mxs="_zs_gallerybN:c" class="clearfix"><a href="//www.google.com/chrome/browser/desktop/index.html" target="_blank" rel="noopener noreferrer" class="w80 mr10 btn btn-white btn-small">立即下载</a><a href="javascript:;" class="w80 btn btn-white btn-small" mx-click="'+_+'close({id:1})">关闭</a></div></div>'),p=36,v="/if",g="<%}%>"),b+='</div></div><div mxa="_zs_gallerybN:k" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerybN:d" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+_+'done({id:1})" mx-view="mx-copy/index?copyNode=',p=41,v="=viewId",b+=(g="<%!$eu(viewId)%>",t(k)+'_text_1"><span mxa="_zs_gallerybN:l" class="_zs_gallery___test___layout_-desc-tip">'),p=43,v="!text1",b+=(g="<%!text1%>",s(I)+'</span><i mxs="_zs_gallerybN:e" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),p=46,v="=viewId",b+=(g="<%=viewId%>",l(k)+'_text_1">\n&lt;mx-effects.ua /&gt;\n        </pre></div></div>')}catch(e){var C="render view error:"+(e.message||e);throw v&&(C+="\r\n\tsrc art:{{"+v+"}}\r\n\tat line:"+p),C+="\r\n\t"+(v?"translate to:":"expr:"),C+=g+"\r\n\tat file:mx-effects/__test__/27.html"}return b},render:function(){this.updater.digest({show1:!0,title1:"Chrome升级提示",tip1:"系统检测到您当前的Chrome浏览器不是高级版本，为了产品功能更好的性能及体验，请下载高级版。",show2:!0,title2:"浏览器检测提示",tip2:"系统检测到您当前使用的是非Chrome浏览器，如果该浏览器在产品性能和体验上存在问题，请下载chrome高级版。"})},"close<click>":function(e){var _,a=e.params.id;this.updater.digest(((_={})["show"+a]=!1,_))}})});