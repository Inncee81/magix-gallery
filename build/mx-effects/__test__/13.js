define("mx-effects/__test__/13",["magix","__test__/example","$","../star","mx-copy/index","__test__/hl"],(e,t,_)=>{e("../star"),e("mx-copy/index"),e("__test__/hl");e("magix");var s=e("__test__/example");e("$");_.exports=s.extend({tmpl:function(e,t,_,s,c,i,n,a){if(_||(_=e),!c){var l={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},r=/[&<>"'`]/g,o=function(e){return"&"+l[e]+";"};c=function(e){return""+(null==e?"":e)},s=function(e){return c(e).replace(r,o)}}if(!i){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return m[e]},d=/[!')(*]/g;i=function(e){return encodeURIComponent(c(e)).replace(d,x)}}if(!a){var f=/[\\'"]/g;a=function(e){return c(e).replace(f,"\\$&")}}var g,y,v,u="",p=e.viewId,z=e.text1;try{u+='<div mxa="_zs_galleryby:_" class="_zs_gallery___test___layout_-example"><div mxa="_zs_galleryby:a" class="_zs_gallery___test___layout_-eg-content"><div mxa="_zs_galleryby:b" class="mb10"><div mx-view="mx-effects/star?num=2.5&icon=',v=5,y="='<i class=\\\"mc-iconfont\\\">&#xe635;</i>'",u+=(g="<%!$eu('<i class=\\\"mc-iconfont\\\">&#xe635;</i>')%>",i('<i class="mc-iconfont">&#xe635;</i>')+'&color=%23fc2a2a"></div></div><div mxa="_zs_galleryby:c" class="mb10"><div mx-view="mx-effects/star?num=4&icon='),v=10,y="='<i class=\\\"mc-iconfont\\\">&#xe60c;</i>'",u+=(g="<%!$eu('<i class=\\\"mc-iconfont\\\">&#xe60c;</i>')%>",i('<i class="mc-iconfont">&#xe60c;</i>')+'&color=rgb%2881%2C%20163%2C%200%29"></div></div></div><div mxa="_zs_galleryby:d" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryby:_" class="_zs_gallery___test___layout_-eg-title">自定义icon + 颜色</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='),v=16,y="=viewId",u+=(g="<%!$eu(viewId)%>",i(p)+'_text_1"><span mxa="_zs_galleryby:e" class="_zs_gallery___test___layout_-desc-tip">'),v=18,y="!text1",u+=(g="<%!text1%>",c(z)+'</span><i mxs="_zs_galleryby:a" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),v=21,y="=viewId",u+=(g="<%=viewId%>",s(p)+'_text_1">\n&lt;mx-effects.star num="2.5"\n    icon="&#123;&#123;=\'&lt;i class=\\"mc-iconfont\\"&gt;&#38;&#35;xe635;&lt;/i&gt;\'&#125;&#125;"\n    color="#fc2a2a"&gt;&lt;/mx-effects.star&gt;\n\n&lt;mx-effects.star num="4"\n    icon="&#123;&#123;=\'&lt;i class=\\"mc-iconfont\\"&gt;&#38;&#35;xe60c;&lt;/i&gt;\'&#125;&#125;"\n    color="rgb(81, 163, 0)"&gt;&lt;/mx-effects.star&gt;\n        </pre></div></div>')}catch(e){var b="render view error:"+(e.message||e);throw y&&(b+="\r\n\tsrc art:{{"+y+"}}\r\n\tat line:"+v),b+="\r\n\t"+(y?"translate to:":"expr:"),b+=g+"\r\n\tat file:mx-effects/__test__/13.html"}return u},render:function(){this.updater.digest({icon1:'<i class="mc-iconfont">&#xe635;</i>',icon2:'<i class="mc-iconfont">&#xe60c;</i>'})}})});