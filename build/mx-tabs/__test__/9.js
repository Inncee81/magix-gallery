define("mx-tabs/__test__/9",["magix","__test__/example","mx-form/index","mx-form/validator","$","../box","mx-copy/index","__test__/hl"],(e,t,_)=>{e("../box"),e("mx-copy/index"),e("__test__/hl");e("magix");var s=e("__test__/example"),l=e("mx-form/index"),r=e("mx-form/validator");e("$");_.exports=s.extend({tmpl:function(e,t,_,s,l,r,a,n){if(_||(_=e),!l){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,c=function(e){return"&"+i[e]+";"};l=function(e){return""+(null==e?"":e)},s=function(e){return l(e).replace(x,c)}}if(!r){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return d[e]},m=/[!')(*]/g;r=function(e){return encodeURIComponent(l(e)).replace(m,o)}}if(!n){var v=/[\\'"]/g;n=function(e){return l(e).replace(v,"\\$&")}}a||(a=function(e,t,_,s){for(s=e[f];--s;)if(e[_=f+s]===t)return _;return e[_=f+e[f]++]=t,_});var u,g,y,f="",p="",z=e.selected,b=e.viewId,h=e.text1;try{p+='<div mxv mxa="_zs_gallerye1:_" class="_zs_gallery___test___layout_-example"><div mxv mxa="_zs_gallerye1:a" class="_zs_gallery___test___layout_-eg-content"><div mxa="_zs_gallerye1:b" class="mb20"><span mxs="_zs_gallerye1:_" class="color-9">当前选中模块：</span>模块',y=5,g="=selected",p+=(u="<%=selected%>",s(z)+'</div><div mxv="selected" mxe="'+t+'_0" mxc="['),y=15,g=":selected{refresh:true}",p+="{p:'selected',f:{refresh:true},a:'selected'}]\" mx-view=\"mx-tabs/box?list=",y=8,g="@[{\n                value: 1,\n                text: '模块1'\n            }, {\n                value: 2,\n                text: '模块2'\n            }]",p+=(u="<%@[{            value: 1,            text: '模块1'        }, {            value: 2,            text: '模块2'        }]%>",a(_,[{value:1,text:"模块1"},{value:2,text:"模块2"}])+"&selected="),y=15,g=":selected{refresh:true}",p+=(u="<%@selected%>",a(_,z)+'"></div></div><div mxa="_zs_gallerye1:c" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerye1:a" class="_zs_gallery___test___layout_-eg-title">双向绑定</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='),y=19,g="=viewId",p+=(u="<%!$eu(viewId)%>",r(b)+'_text_1"><span mxa="_zs_gallerye1:d" class="_zs_gallery___test___layout_-desc-tip">'),y=21,g="!text1",p+=(u="<%!text1%>",l(h)+'</span><i mxs="_zs_gallerye1:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),y=24,g="=viewId",p+=(u="<%=viewId%>",s(b)+'_text_1">\n&lt;mx-tabs.box \n    list="&#123;&#123;@[&#123;\n        value: 1,\n        text: \'模块1\'\n    &#125;, &#123;\n        value: 2,\n        text: \'模块2\'\n    &#125;]&#125;&#125;" \n    selected="&#123;&#123;:selected&#123;refresh:true&#125;&#125;&#125;"&gt;&lt;/mx-tabs.box&gt;</pre></div></div>')}catch(e){var w="render view error:"+(e.message||e);throw g&&(w+="\r\n\tsrc art:{{"+g+"}}\r\n\tat line:"+y),w+="\r\n\t"+(g?"translate to:":"expr:"),w+=u+"\r\n\tat file:mx-tabs/__test__/9.html"}return p},mixins:[l,r],render:function(){this.updater.digest({selected:2})}})});