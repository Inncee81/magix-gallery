define("mx-dropdown/__test__/8",["magix","__test__/example","$","../multiple","mx-copy/index","__test__/hl"],(e,t,l)=>{e("../multiple"),e("mx-copy/index"),e("__test__/hl");e("magix");var s=e("__test__/example");e("$");l.exports=s.extend({tmpl:function(e,t,l,s,_,i,r,n){if(l||(l=e),!_){var a={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,c=function(e){return"&"+a[e]+";"};_=function(e){return""+(null==e?"":e)},s=function(e){return _(e).replace(d,c)}}if(!i){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return x[e]},v=/[!')(*]/g;i=function(e){return encodeURIComponent(_(e)).replace(v,o)}}if(!n){var m=/[\\'"]/g;n=function(e){return _(e).replace(m,"\\$&")}}r||(r=function(e,t,l,s){for(s=e[y];--s;)if(e[l=y+s]===t)return l;return e[l=y+e[y]++]=t,l});var u,g,p,y="",w="",f=e.list,z=e.selectedArr,h=e.selectedStr,b=e.viewId,A=e.text1,I=e.text2;try{w+='<div mxv mxa="_zs_gallerybc:_" class="_zs_gallery___test___layout_-example"><div mxv mxa="_zs_gallerybc:a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_gallerybc:_" class="mb20 clearfix lh22"><div class="fl color-9">说明：</div><div class="fl"><div>选项支持html片段</div><div>选中项传入支持传入数组或者逗号分隔</div><div>以下两个下拉框选中项保持一致</div></div></div><div mxv mxa="_zs_gallerybc:b" class="mb20"><div mxv="list,selectedArr" class="w200" mx-change="'+t+'select()" mx-view="mx-dropdown/multiple?list=',p=13,g="@list",w+=(u="<%@list%>",r(l,f)+"&selected="),p=14,g="@selectedArr",w+=(u="<%@selectedArr%>",r(l,z)+'"></div></div><div mxv mxa="_zs_gallerybc:c" class="mb20"><div mxv="list,selectedStr" class="w200" mx-change="'+t+'select()" mx-view="mx-dropdown/multiple?list='),p=19,g="@list",w+=(u="<%@list%>",r(l,f)+"&selected="),p=20,g="@selectedStr",w+=(u="<%@selectedStr%>",r(l,h)+'"></div></div><div><span mxs="_zs_gallerybc:a" class="color-9">当前选中值：</span><span>'),p=25,g="=selectedArr",w+=(u="<%=selectedArr%>",s(z)+'</span></div></div><div mxa="_zs_gallerybc:d" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerybc:b" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='),p=30,g="=viewId",w+=(u="<%!$eu(viewId)%>",i(b)+'_text_1"><span mxa="_zs_gallerybc:e" class="_zs_gallery___test___layout_-desc-tip">'),p=32,g="!text1",w+=(u="<%!text1%>",_(A)+'</span><i mxs="_zs_gallerybc:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),p=35,g="=viewId",w+=(u="<%=viewId%>",s(b)+'_text_1">\n&lt;mx-dropdown.multiple class="w200"\n    list="&#123;&#123;@list&#125;&#125;"\n    selected="&#123;&#123;@selectedArr&#125;&#125;"\n    mx-change="select()"/&gt;\n\n&lt;mx-dropdown.multiple class="w200"\n    list="&#123;&#123;@list&#125;&#125;"\n    selected="&#123;&#123;@selectedStr&#125;&#125;"\n    mx-change="select()"/&gt;</pre></div><div mxa="_zs_gallerybc:f" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerybc:d" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+t+'done({id:2})" mx-view="mx-copy/index?copyNode='),p=48,g="=viewId",w+=(u="<%!$eu(viewId)%>",i(b)+'_text_2"><span mxa="_zs_gallerybc:g" class="_zs_gallery___test___layout_-desc-tip">'),p=50,g="!text2",w+=(u="<%!text2%>",_(I)+'</span><i mxs="_zs_gallerybc:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),p=53,g="=viewId",w+=(u="<%=viewId%>",s(b)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        let list = [];\n        for (let index = 0; index &lt; 6; index++) &#123;\n            list.push(&#123;\n                text: (index == 0 ? '&lt;i class=\"mc-iconfont\"&gt;&#38;&#35;xe670;&lt;/i&gt;' : '') + '多选' + (index + 1),\n                value: index + 1\n            &#125;)\n        &#125;\n        this.updater.digest(&#123;\n            list,\n            selectedArr: [1, 2, 3],\n            selectedStr: '1,2,3'\n        &#125;);\n    &#125;,\n    \n    'select&lt;change&gt;'(e) &#123;\n        // e.values [array] 当前选中值\n        // e.texts [array] 当前选中文案\n        let values = e.values;\n        this.updater.digest(&#123;\n            selectedArr: values,\n            selectedStr: values.join(',')\n        &#125;);\n    &#125;\n&#125;);</pre></div></div>")}catch(e){var S="render view error:"+(e.message||e);throw g&&(S+="\r\n\tsrc art:{{"+g+"}}\r\n\tat line:"+p),S+="\r\n\t"+(g?"translate to:":"expr:"),S+=u+"\r\n\tat file:mx-dropdown/__test__/8.html"}return w},render:function(){for(var e=[],t=0;t<6;t++)e.push({text:(0==t?'<i class="mc-iconfont">&#xe670;</i>':"")+"多选"+(t+1),value:t+1});this.updater.digest({list:e,selectedArr:[1,2,3],selectedStr:"1,2,3"})},"select<change>":function(e){var t=e.values;this.updater.digest({selectedArr:t,selectedStr:t.join(",")})}})});