define("mx-form/__test__/13",["magix","__test__/example","mx-form/index","mx-form/validator","$","mx-dropdown/index","mx-copy/index","__test__/hl"],(e,t,_)=>{e("mx-dropdown/index"),e("mx-copy/index"),e("__test__/hl");e("magix");var r=e("__test__/example"),l=e("mx-form/index"),a=e("mx-form/validator");e("$");_.exports=r.extend({tmpl:function(e,t,_,r,l,a,s,d){if(_||(_=e),!l){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},i=/[&<>"'`]/g,o=function(e){return"&"+n[e]+";"};l=function(e){return""+(null==e?"":e)},r=function(e){return l(e).replace(i,o)}}if(!a){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return m[e]},c=/[!')(*]/g;a=function(e){return encodeURIComponent(l(e)).replace(c,x)}}if(!d){var u=/[\\'"]/g;d=function(e){return l(e).replace(u,"\\$&")}}s||(s=function(e,t,_,r){for(r=e[g];--r;)if(e[_=g+r]===t)return _;return e[_=g+e[g]++]=t,_});var v,y,p,g="",f="",w=e.day,z=e.viewId,b=e.text1;try{f+='<div mxv mxa="_zs_galleryb?:_" class="_zs_gallery___test___layout_-example"><div mxv mxa="_zs_galleryb?:a" class="_zs_gallery___test___layout_-eg-content"><div mxv mxa="_zs_galleryb?:b" class="mb20"><span mxs="_zs_galleryb?:_" class="color-9 mr20">dropdown必选（请选择为空状态提示）：</span><div mxv="day" mxe="'+t+'_0" mxc="[',p=7,y=":day{required:true}",f+="{p:'day',f:{required:true},a:'selected'}]\" class=\"w200\" mx-view=\"mx-dropdown/index?emptyText=%E8%AF%B7%E9%80%89%E6%8B%A9&selected=",p=7,y=":day{required:true}",f+=(v="<%@day%>",s(_,w)+'"><i mxs="_zs_galleryb?:a" value="1" class="none">1</i><i mxs="_zs_galleryb?:b" value="2" class="none">2</i></div></div></div><div mxa="_zs_galleryb?:c" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryb?:c" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='),p=15,y="=viewId",f+=(v="<%!$eu(viewId)%>",a(z)+'_text_1"><span mxa="_zs_galleryb?:d" class="_zs_gallery___test___layout_-desc-tip">'),p=17,y="!text1",f+=(v="<%!text1%>",l(b)+'</span><i mxs="_zs_galleryb?:d" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),p=20,y="=viewId",f+=(v="<%=viewId%>",r(z)+'_text_1">\n&lt;mx-dropdown class="w200"\n    empty-text="请选择"\n    selected="&#123;&#123;:day&#123;required:true&#125;&#125;&#125;"&gt;\n    &lt;mx-dropdown.item value="1"&gt;1&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="2"&gt;2&lt;/mx-dropdown.item&gt;\n&lt;/mx-dropdown&gt;</pre></div></div>')}catch(e){var h="render view error:"+(e.message||e);throw y&&(h+="\r\n\tsrc art:{{"+y+"}}\r\n\tat line:"+p),h+="\r\n\t"+(y?"translate to:":"expr:"),h+=v+"\r\n\tat file:mx-form/__test__/13.html"}return f},mixins:[l,a],render:function(){this.updater.digest()}})});