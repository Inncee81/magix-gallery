define("mx-dropdown/__test__/9",["magix","__test__/example","$","../multiple","mx-copy/index","__test__/hl"],(e,t,_)=>{e("../multiple"),e("mx-copy/index"),e("__test__/hl");e("magix");var l=e("__test__/example");e("$");_.exports=l.extend({tmpl:function(e,t,_,l,a,n,s,i){if(_||(_=e),!a){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,c=function(e){return"&"+r[e]+";"};a=function(e){return""+(null==e?"":e)},l=function(e){return a(e).replace(d,c)}}if(!n){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return o[e]},u=/[!')(*]/g;n=function(e){return encodeURIComponent(a(e)).replace(u,m)}}if(!i){var x=/[\\'"]/g;i=function(e){return a(e).replace(x,"\\$&")}}s||(s=function(e,t,_,l){for(l=e[g];--l;)if(e[_=g+l]===t)return _;return e[_=g+e[g]++]=t,_});var p,v,y,g="",f="",w=e.viewId,z=e.text1;try{f+='<div mxa="_zs_gallerybc:_" class="_zs_gallery___test___layout_-example"><div mxa="_zs_gallerybc:a" class="_zs_gallery___test___layout_-eg-content"><div class="w200" mx-view="mx-dropdown/multiple?list=',y=4,v="@[{id:1,name:'选项1'},{id:2,name:'选项2'}]",f+=(p="<%@[{ id: 1, name: '选项1' }, { id: 2, name: '选项2' }]%>",s(_,[{id:1,name:"选项1"},{id:2,name:"选项2"}])+'&textKey=name&valueKey=id"></div></div><div mxa="_zs_gallerybc:b" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerybc:_" class="_zs_gallery___test___layout_-eg-title">自定义&nbsp;text-key&nbsp;和&nbsp;value-key</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='),y=10,v="=viewId",f+=(p="<%!$eu(viewId)%>",n(w)+'_text_1"><span mxa="_zs_gallerybc:c" class="_zs_gallery___test___layout_-desc-tip">'),y=12,v="!text1",f+=(p="<%!text1%>",a(z)+'</span><i mxs="_zs_gallerybc:a" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),y=15,v="=viewId",f+=(p="<%=viewId%>",l(w)+'_text_1">\n&lt;mx-dropdown.multiple class="w200"\n    list="&#123;&#123;@[&#123;id:1,name:\'选项1\'&#125;,&#123;id:2,name:\'选项2\'&#125;]&#125;&#125;"\n    text-key="name"\n    value-key="id"/&gt;</pre></div></div>')}catch(e){var b="render view error:"+(e.message||e);throw v&&(b+="\r\n\tsrc art:{{"+v+"}}\r\n\tat line:"+y),b+="\r\n\t"+(v?"translate to:":"expr:"),b+=p+"\r\n\tat file:mx-dropdown/__test__/9.html"}return f},render:function(){for(var e=[],t=0;t<6;t++)e.push({text:"多选"+(t+1),value:t+1});this.updater.digest({list:e,selected:"1,2,3"})},"select<change>":function(e){this.updater.digest({selected:e.values})}})});