define("mx-effects/__test__/7",["magix","__test__/example","$","../notice","mx-copy/index","__test__/hl"],(t,e,n)=>{t("../notice"),t("mx-copy/index"),t("__test__/hl");t("magix");var i=t("__test__/example");t("$");n.exports=i.extend({tmpl:function(t,e,n,i,_,s,c,l){if(n||(n=t),!_){var E={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},a=/[&<>"'`]/g,o=function(t){return"&"+E[t]+";"};_=function(t){return""+(null==t?"":t)},i=function(t){return _(t).replace(a,o)}}if(!s){var r={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},g=function(t){return r[t]},m=/[!')(*]/g;s=function(t){return encodeURIComponent(_(t)).replace(m,g)}}if(!l){var d=/[\\'"]/g;l=function(t){return _(t).replace(d,"\\$&")}}var x,f,h,A="",v=t.viewId,B=t.text1;try{A+='<div mxa="_zs_gallerybW:_" class="_zs_gallery___test___layout_-example"><div mxs="_zs_gallerybW:_" class="_zs_gallery___test___layout_-eg-content"><div class="mb20" mx-view="mx-effects/notice?type=highlight&content=%E5%93%81%E7%89%8C%E8%89%B2%E9%87%8D%E8%A6%81%E4%BF%A1%E6%81%AF%E6%8F%90%E7%A4%BA"></div><div class="mb20" mx-view="mx-effects/notice?type=highlight"><span>品牌色重要信息提示（innerHTML）</span><a class="color-brand" href="https://www.taobao.com/" target="_blank">查看链接</a></div><div class="mb20" mx-view="mx-effects/notice?type=highlight&icon=false&content=%E5%93%81%E7%89%8C%E8%89%B2%E9%87%8D%E8%A6%81%E4%BF%A1%E6%81%AF%E6%8F%90%E7%A4%BA%EF%BC%88%E6%97%A0icon%EF%BC%89"></div><div class="mb20" mx-view="mx-effects/notice?type=highlight&radius=true&content=%E5%93%81%E7%89%8C%E8%89%B2%E9%87%8D%E8%A6%81%E4%BF%A1%E6%81%AF%E6%8F%90%E7%A4%BA%EF%BC%88%E5%B8%A6%E5%9C%86%E8%A7%92%EF%BC%89"></div><div class="mb20" mx-view="mx-effects/notice?type=highlight&textAlign=center&content=%E5%93%81%E7%89%8C%E8%89%B2%E9%87%8D%E8%A6%81%E4%BF%A1%E6%81%AF%E6%8F%90%E7%A4%BA%EF%BC%88%E6%96%87%E6%A1%88%E5%B1%85%E4%B8%AD%EF%BC%89"></div><div class="mb20" mx-view="mx-effects/notice?type=highlight&border=true&content=%E5%93%81%E7%89%8C%E8%89%B2%E9%87%8D%E8%A6%81%E4%BF%A1%E6%81%AF%E6%8F%90%E7%A4%BA%EF%BC%88%E5%B8%A6%E8%BE%B9%E6%A1%86%EF%BC%8C%E9%BB%98%E8%AE%A4%E5%B8%A6%E8%BE%B9%E6%A1%86%E9%83%BD%E5%B8%A6%E5%9C%86%E8%A7%92%EF%BC%89"></div><div class="mb20" mx-view="mx-effects/notice?type=highlight&border=true&icon=false&content=%E5%93%81%E7%89%8C%E8%89%B2%E9%87%8D%E8%A6%81%E4%BF%A1%E6%81%AF%E6%8F%90%E7%A4%BA%EF%BC%88%E5%B8%A6%E8%BE%B9%E6%A1%86%E6%97%A0icon%EF%BC%89"></div></div><div mxa="_zs_gallerybW:a" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerybW:a" class="_zs_gallery___test___layout_-eg-title">HTML Code（icon品牌色）</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+e+'done({id:1})" mx-view="mx-copy/index?copyNode=',h=36,f="=viewId",A+=(x="<%!$eu(viewId)%>",s(v)+'_text_1"><span mxa="_zs_gallerybW:b" class="_zs_gallery___test___layout_-desc-tip">'),h=38,f="!text1",A+=(x="<%!text1%>",_(B)+'</span><i mxs="_zs_gallerybW:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),h=41,f="=viewId",A+=(x="<%=viewId%>",i(v)+'_text_1">\n&lt;mx-effects.notice \n    type="highlight" \n    content="品牌色重要信息提示"/&gt;\n\n&lt;!-- innerHTML --&gt;\n&lt;mx-effects.notice \n    type="highlight"&gt;\n    &lt;span&gt;品牌色重要信息提示（innerHTML）&lt;/span&gt;\n    &lt;a class="color-brand" href="https://www.taobao.com/" target="_blank"&gt;查看链接&lt;/a&gt;\n&lt;/mx-effects.notice&gt;\n\n&lt;!-- 无icon --&gt;\n&lt;mx-effects.notice \n    type="highlight" \n    icon="false"\n    content="品牌色重要信息提示（无icon）"/&gt;\n\n&lt;!-- 带圆角 --&gt;\n&lt;mx-effects.notice \n    type="highlight" \n    radius="true"\n    content="品牌色重要信息提示（带圆角）"/&gt;\n\n&lt;!-- 文案居中 --&gt;\n&lt;mx-effects.notice \n    type="highlight" \n    text-align="center" \n    content="品牌色重要信息提示（文案居中）"class="mb20"/&gt;\n\n&lt;mx-effects.notice \n    type="highlight" \n    border="true" \n    content="品牌色重要信息提示（带边框，默认带边框都带圆角）"/&gt;\n\n&lt;mx-effects.notice \n    type="highlight" \n    border="true" \n    icon="false"\n    content="品牌色重要信息提示（带边框无icon）"/&gt;\n        </pre></div></div>')}catch(t){var p="render view error:"+(t.message||t);throw f&&(p+="\r\n\tsrc art:{{"+f+"}}\r\n\tat line:"+h),p+="\r\n\t"+(f?"translate to:":"expr:"),p+=x+"\r\n\tat file:mx-effects/__test__/7.html"}return A},render:function(){this.updater.digest()}})});