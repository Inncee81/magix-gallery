define("mx-status/__test__/1",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,t,_)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var s=e("__test__/example");e("$");_.exports=s.extend({tmpl:function(e,t,_,s,l,a,n,i){if(_||(_=e),!l){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,o=function(e){return"&"+r[e]+";"};l=function(e){return""+(null==e?"":e)},s=function(e){return l(e).replace(c,o)}}if(!a){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return d[e]},u=/[!')(*]/g;a=function(e){return encodeURIComponent(l(e)).replace(u,x)}}if(!i){var v=/[\\'"]/g;i=function(e){return l(e).replace(v,"\\$&")}}n||(n=function(e,t,_,s){for(s=e[y];--s;)if(e[_=y+s]===t)return _;return e[_=y+e[y]++]=t,_});var g,m,p,y="",f="",z=e.cur,h=e.opers,w=e.viewId,I=e.text1,$=e.text2;try{f+='<div mxv mxa="_zs_galleryd(:_" class="_zs_gallery___test___layout_-example"><div mxv mxa="_zs_galleryd(:a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_galleryd(:_" class="mb20 clearfix"><div class="fl color-9">以下示例：</div><div class="fl"><div>纯操作项，hover显示操作项</div><div>当前选中项排在第一个</div></div></div><div mxv><span mxa="_zs_galleryd(:b" class="mr40"><span mxs="_zs_galleryd(:a" class="color-9">当前选中项：</span>',p=13,m="=cur.text",f+=(g="<%=cur.text%>",s(z.text)+"（"),p=13,m="=cur.value",f+=(g="<%=cur.value%>",s(z.value)+'）</span><div mxv="opers" mx-change="'+t+'change()" mx-view="mx-status/index?opers='),p=16,m="@opers",f+=(g="<%@opers%>",n(_,h)+"&selected="),p=17,m="=cur.value",f+=(g="<%!$eu(cur.value)%>",a(z.value)+'"></div></div></div><div mxa="_zs_galleryd(:c" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryd(:b" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='),p=23,m="=viewId",f+=(g="<%!$eu(viewId)%>",a(w)+'_text_1"><span mxa="_zs_galleryd(:d" class="_zs_gallery___test___layout_-desc-tip">'),p=25,m="!text1",f+=(g="<%!text1%>",l(I)+'</span><i mxs="_zs_galleryd(:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),p=28,m="=viewId",f+=(g="<%=viewId%>",s(w)+'_text_1">\n&lt;mx-status \n    opers="&#123;&#123;@opers&#125;&#125;" \n    selected="&#123;&#123;=cur.value&#125;&#125;"\n    mx-change="change()"/&gt;</pre></div><div mxa="_zs_galleryd(:e" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryd(:d" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+t+'done({id:2})" mx-view="mx-copy/index?copyNode='),p=36,m="=viewId",f+=(g="<%!$eu(viewId)%>",a(w)+'_text_2"><span mxa="_zs_galleryd(:f" class="_zs_gallery___test___layout_-desc-tip">'),p=38,m="!text2",f+=(g="<%!text2%>",l($)+'</span><i mxs="_zs_galleryd(:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),p=41,m="=viewId",f+=(g="<%=viewId%>",s(w)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        let opers = [&#123;\n            value: 0,\n            text: '暂停投放',\n            icon: '&lt;i class=\"mc-iconfont\"&gt;&#38;&#35;xe67f;&lt;/i&gt;',\n            color: '#a40100'\n        &#125;, &#123;\n            value: 1,\n            text: '正在投放',\n            icon: '&lt;i class=\"mc-iconfont\"&gt;&#38;&#35;xe683;&lt;/i&gt;',\n            color: '#51a300'\n        &#125;, &#123;\n            value: 9,\n            text: '结束投放',\n            icon: '&lt;i class=\"mc-iconfont\"&gt;&#38;&#35;xe682;&lt;/i&gt;',\n            color: '#999999'\n        &#125;]\n\n        this.updater.digest(&#123;\n            opers,\n            cur: opers[1]\n        &#125;);\n    &#125;,\n    'change&lt;change&gt;'(e)&#123;\n        // e.status 完整的对象\n        //      value\n        //      text\n        this.updater.digest(&#123;\n            cur: e.status\n        &#125;);\n    &#125;\n&#125;);</pre></div></div>")}catch(e){var b="render view error:"+(e.message||e);throw m&&(b+="\r\n\tsrc art:{{"+m+"}}\r\n\tat line:"+p),b+="\r\n\t"+(m?"translate to:":"expr:"),b+=g+"\r\n\tat file:mx-status/__test__/1.html"}return f},render:function(){var e=[{value:0,text:"暂停投放",icon:'<i class="mc-iconfont">&#xe67f;</i>',color:"#a40100"},{value:1,text:"正在投放",icon:'<i class="mc-iconfont">&#xe683;</i>',color:"#51a300"},{value:9,text:"结束投放",icon:'<i class="mc-iconfont">&#xe682;</i>',color:"#999999"}];this.updater.digest({opers:e,cur:e[1]})},"change<change>":function(e){this.updater.digest({cur:e.status})}})});