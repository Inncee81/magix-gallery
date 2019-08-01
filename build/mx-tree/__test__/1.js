define("mx-tree/__test__/1",["magix","__test__/example","$","../index","mx-pagination/index","mx-copy/index","__test__/hl"],(e,t,l)=>{e("../index"),e("mx-pagination/index"),e("mx-copy/index"),e("__test__/hl");var _=e("magix"),a=_.Vframe,n=e("__test__/example"),s=e("$");_.applyStyle("_zs_gallery_mx-tree___test___index_","._zs_gallery_mx-tree___test___index_-wrapper {\n  width: 300px;\n  border: 1px solid var(--color-border);\n  border-radius: var(--border-radius);\n}\n._zs_gallery_mx-tree___test___index_-wrapper ._zs_gallery_mx-tree___test___index_-content {\n  padding: 20px 20px 5px 20px;\n}\n"),l.exports=n.extend({tmpl:function(e,t,l,_,a,n,s,r){if(l||(l=e),!a){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,x=function(e){return"&"+i[e]+";"};a=function(e){return""+(null==e?"":e)},_=function(e){return a(e).replace(d,x)}}if(!n){var u={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return u[e]},c=/[!')(*]/g;n=function(e){return encodeURIComponent(a(e)).replace(c,p)}}if(!r){var v=/[\\'"]/g;r=function(e){return a(e).replace(v,"\\$&")}}s||(s=function(e,t,l,_){for(_=e[y];--_;)if(e[l=y+_]===t)return l;return e[l=y+e[y]++]=t,l});var g,o,m,y="",z="",V=e.selected,h=e.viewId,f=e.list,w=e.text1,I=e.text2;try{z+='<div mxv mxa="_zs_gallerye;:_" class="_zs_gallery___test___layout_-example"><div mxv mxa="_zs_gallerye;:a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_gallerye;:_" class="mb10"><span class="color-9">使用场景：</span>切换页码的时候保留历史选中项，无需实时反馈选中结果</div><div mxa="_zs_gallerye;:b" class="mb20"><span mxs="_zs_gallerye;:a" class="color-9">当前选中单元：</span>',m=9,o="=selected",z+=(g="<%=selected%>",_(V)+'</div><div mxv mxa="_zs_gallerye;:c" class="_zs_gallery_mx-tree___test___index_-wrapper"><div mxv mxa="_zs_gallerye;:d" class="_zs_gallery_mx-tree___test___index_-content"><div mxv="selected,list" id="'),m=13,o="=viewId",z+=(g="<%=viewId%>",_(h)+'_tree" mx-view="mx-tree/index?bottomValues='),m=14,o="@selected",z+=(g="<%@selected%>",s(l,V)+"&list="),m=15,o="@list",z+=(g="<%@list%>",s(l,f)+'&needAll=true"></div></div><div mxs="_zs_gallerye;:b" class="table-pager-wrapper" mx-change="'+t+'changePager()" mx-view="mx-pagination/index?total=10&size=5&page=1&mini=true&jump=false"></div></div></div><div mxa="_zs_gallerye;:e" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerye;:c" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='),m=29,o="=viewId",z+=(g="<%!$eu(viewId)%>",n(h)+'_text_1"><span mxa="_zs_gallerye;:f" class="_zs_gallery___test___layout_-desc-tip">'),m=31,o="!text1",z+=(g="<%!text1%>",a(w)+'</span><i mxs="_zs_gallerye;:d" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),m=34,o="=viewId",z+=(g="<%=viewId%>",_(h)+'_text_1">\n&lt;mx-tree id="&#123;&#123;=viewId&#125;&#125;_tree"\n    bottom-values="&#123;&#123;@selected&#125;&#125;"\n    list="&#123;&#123;@list&#125;&#125;"\n    need-all="true"&gt;&lt;/mx-tree&gt;\n\n&lt;mx-pagination class="table-pager-wrapper"\n    total="10" \n    size="5" \n    page="1"\n    mini="true"\n    jump="false"\n    mx-change="changePager()"/&gt;</pre></div><div mxa="_zs_gallerye;:g" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerye;:e" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+t+'done({id:2})" mx-view="mx-copy/index?copyNode='),m=50,o="=viewId",z+=(g="<%!$eu(viewId)%>",n(h)+'_text_2"><span mxa="_zs_gallerye;:h" class="_zs_gallery___test___layout_-desc-tip">'),m=52,o="!text2",z+=(g="<%!text2%>",a(I)+'</span><i mxs="_zs_gallerye;:d" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),m=55,o="=viewId",z+=(g="<%=viewId%>",_(h)+"_text_2\">\nlet Magix = require('magix');\nlet Vframe = Magix.Vframe;\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        let list1 = [&#123;\n            value: 1,\n            pValue: '',\n            text: '计划1'\n        &#125;, &#123;\n            value: 2,\n            pValue: '',\n            text: '计划2'\n        &#125;, &#123;\n            value: 11,\n            pValue: 1,\n            text: '单元1-1'\n        &#125;, &#123;\n            value: 12,\n            pValue: 1,\n            text: '单元1-2'\n        &#125;, &#123;\n            value: 21,\n            pValue: 2,\n            text: '单元2-1'\n        &#125;, &#123;\n            value: 22,\n            pValue: 2,\n            text: '单元2-2'\n        &#125;]\n        \n        var list2 = [&#123;\n            value: 3,\n            pValue: '',\n            text: '计划3'\n        &#125;, &#123;\n            value: 4,\n            pValue: '',\n            text: '计划4'\n        &#125;, &#123;\n            value: 31,\n            pValue: 3,\n            text: '单元3-1'\n        &#125;, &#123;\n            value: 32,\n            pValue: 3,\n            text: '单元3-2'\n        &#125;, &#123;\n            value: 41,\n            pValue: 4,\n            text: '单元4-1'\n        &#125;, &#123;\n            value: 42,\n            pValue: 4,\n            text: '单元4-2'\n        &#125;]\n\n        this.updater.digest(&#123;\n            viewId: this.id,\n            list1,\n            list2,\n            list: $.extend(true, [], list1),\n            results: &#123;&#125;,\n            selected: []\n        &#125;);\n    &#125;,\n    'changePager&lt;change&gt;' (e) &#123;\n        let page = e.page;\n\n        let that = this;\n        let data = this.updater.get();\n\n        let tree = Vframe.get(that.id + '_tree');\n        let result = tree.invoke('getBottomValues');\n        \n        // 缓存已选中的节点，下次页面切换时依然选中原先选中的\n        let results = data.results || &#123;&#125;;\n        results[page] = result;\n        let selected = [];\n        for(var p in results)&#123;\n            selected = selected.concat(results[p]);\n        &#125;\n\n        // 更新list\n        let list = $.extend(true, [], data['list' + page]);\n        this.updater.digest(&#123;\n            list: list,\n            selected\n        &#125;)\n    &#125;\n&#125;);</pre></div></div>")}catch(e){var b="render view error:"+(e.message||e);throw o&&(b+="\r\n\tsrc art:{{"+o+"}}\r\n\tat line:"+m),b+="\r\n\t"+(o?"translate to:":"expr:"),b+=g+"\r\n\tat file:mx-tree/__test__/1.html"}return z},render:function(){var e=[{value:1,pValue:"",text:"计划1"},{value:2,pValue:"",text:"计划2"},{value:11,pValue:1,text:"单元1-1"},{value:12,pValue:1,text:"单元1-2"},{value:21,pValue:2,text:"单元2-1"},{value:22,pValue:2,text:"单元2-2"}];this.updater.digest({list1:e,list2:[{value:3,pValue:"",text:"计划3"},{value:4,pValue:"",text:"计划4"},{value:31,pValue:3,text:"单元3-1"},{value:32,pValue:3,text:"单元3-2"},{value:41,pValue:4,text:"单元4-1"},{value:42,pValue:4,text:"单元4-2"}],list:s.extend(!0,[],e),results:{},selected:[]})},"changePager<change>":function(e){var t=e.page,l=this.updater.get(),_=a.get(this.id+"_tree").invoke("getBottomValues"),n=l.results||{};n[t]=_;var r=[];for(var i in n)r=r.concat(n[i]);var d=s.extend(!0,[],l["list"+t]);this.updater.digest({list:d,selected:r})}})});