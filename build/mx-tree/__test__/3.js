define("mx-tree/__test__/3",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,t,_)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var l=e("__test__/example");e("$");_.exports=l.extend({tmpl:function(e,t,_,l,a,r,u,i){if(_||(_=e),!a){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},n=/[&<>"'`]/g,x=function(e){return"&"+s[e]+";"};a=function(e){return""+(null==e?"":e)},l=function(e){return a(e).replace(n,x)}}if(!r){var v={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},d=function(e){return v[e]},p=/[!')(*]/g;r=function(e){return encodeURIComponent(a(e)).replace(p,d)}}if(!i){var c=/[\\'"]/g;i=function(e){return a(e).replace(c,"\\$&")}}u||(u=function(e,t,_,l){for(l=e[g];--l;)if(e[_=g+l]===t)return _;return e[_=g+e[g]++]=t,_});var o,m,y,g="",V="",f=e.viewId,w=e.list,z=e.text1;try{V+='<div mxv mxa="_zs_gallerye/:_" class="_zs_gallery___test___layout_-example"><div mxv mxa="_zs_gallerye/:a" class="_zs_gallery___test___layout_-eg-content"><div mxv="list" id="',y=3,m="=viewId",V+=(o="<%=viewId%>",l(f)+'_tree" mx-view="mx-tree/index?needExpand=true&readOnly=true&hasLine=true&list='),y=7,m="@list",V+=(o="<%@list%>",u(_,w)+'"></div></div><div mxa="_zs_gallerye/:b" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerye/:_" class="_zs_gallery___test___layout_-eg-title">只读 + 可展开收起 + 默认展开 + 有连接线</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='),y=11,m="=viewId",V+=(o="<%!$eu(viewId)%>",r(f)+'_text_1"><span mxa="_zs_gallerye/:c" class="_zs_gallery___test___layout_-desc-tip">'),y=13,m="!text1",V+=(o="<%!text1%>",a(z)+'</span><i mxs="_zs_gallerye/:a" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),y=16,m="=viewId",V+=(o="<%=viewId%>",l(f)+'_text_1">\n&lt;mx-tree id="&#123;&#123;=viewId&#125;&#125;_tree"\n    need-expand="true"\n    read-only="true"\n    has-line="true"\n    list="&#123;&#123;@list&#125;&#125;"&gt;&lt;/mx-tree&gt;</pre></div></div>')}catch(e){var h="render view error:"+(e.message||e);throw m&&(h+="\r\n\tsrc art:{{"+m+"}}\r\n\tat line:"+y),h+="\r\n\t"+(m?"translate to:":"expr:"),h+=o+"\r\n\tat file:mx-tree/__test__/3.html"}return V},render:function(){this.updater.digest({list:[{value:1,pValue:"",text:"1"},{value:2,pValue:"",text:"2"},{value:3,pValue:"",text:"3"},{value:11,pValue:1,text:"1-1"},{value:111,pValue:11,text:"1-1-1"},{value:1111,pValue:111,text:"1-1-1-1"},{value:1112,pValue:111,text:"1-1-1-2"},{value:112,pValue:11,text:"1-1-2"},{value:1121,pValue:112,text:"1-1-2-1"},{value:1122,pValue:112,text:"1-1-2-2"},{value:12,pValue:1,text:"1-2"},{value:21,pValue:2,text:"2-1"},{value:211,pValue:21,text:"2-1-1"},{value:212,pValue:21,text:"2-1-2"},{value:22,pValue:2,text:"2-2"},{value:23,pValue:2,text:"2-3"},{value:231,pValue:23,text:"2-3-1"},{value:232,pValue:23,text:"2-3-2"}]})}})});