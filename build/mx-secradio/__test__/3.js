define("mx-secradio/__test__/3",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,t,_)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var l=e("__test__/example");e("$");_.exports=l.extend({tmpl:function(e,t,_,l,s,a,r,i){if(_||(_=e),!s){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,x=function(e){return"&"+n[e]+";"};s=function(e){return""+(null==e?"":e)},l=function(e){return s(e).replace(d,x)}}if(!a){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return c[e]},u=/[!')(*]/g;a=function(e){return encodeURIComponent(s(e)).replace(u,o)}}if(!i){var v=/[\\'"]/g;i=function(e){return s(e).replace(v,"\\$&")}}r||(r=function(e,t,_,l){for(l=e[p];--l;)if(e[_=p+l]===t)return _;return e[_=p+e[p]++]=t,_});var m,g,y,p="",f="",z=e.list,w=e.viewId,h=e.text1;try{f+='<div mxv mxa="_zs_gallerydY:_" class="_zs_gallery___test___layout_-example"><div mxv mxa="_zs_gallerydY:a" class="_zs_gallery___test___layout_-eg-content"><div mxv="list" mx-view="mx-secradio/index?list=',y=4,g="@list",f+=(m="<%@list%>",r(_,z)+'&close=true"></div></div><div mxa="_zs_gallerydY:b" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerydY:_" class="_zs_gallery___test___layout_-eg-title">默认收起</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='),y=9,g="=viewId",f+=(m="<%!$eu(viewId)%>",a(w)+'_text_1"><span mxa="_zs_gallerydY:c" class="_zs_gallery___test___layout_-desc-tip">'),y=11,g="!text1",f+=(m="<%!text1%>",s(h)+'</span><i mxs="_zs_gallerydY:a" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),y=14,g="=viewId",f+=(m="<%=viewId%>",l(w)+'_text_1">\n&lt;mx-secradio \n    list="&#123;&#123;@list&#125;&#125;"\n    close="true"/&gt;</pre></div></div>')}catch(e){var I="render view error:"+(e.message||e);throw g&&(I+="\r\n\tsrc art:{{"+g+"}}\r\n\tat line:"+y),I+="\r\n\t"+(g?"translate to:":"expr:"),I+=m+"\r\n\tat file:mx-secradio/__test__/3.html"}return f},render:function(){this.updater.digest({list:[{value:1,text:"单品推广计划1",subs:[{value:11,text:"单品推广计划1_单元1"},{value:12,text:"单品推广计划1_单元2"},{value:13,text:"单品推广计划1_单元3"}]},{value:2,text:"单品推广计划2",subs:[{value:21,text:"单品推广计划2_单元1"},{value:22,text:"单品推广计划2_单元2"},{value:23,text:"单品推广计划2_单元3"}]}]})}})});