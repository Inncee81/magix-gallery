define("mx-tree/examples/1",["magix","examples/example","$","../index","mx-pagination/index","mx-copy/index","examples/hl"],(e,l,t)=>{e("../index"),e("mx-pagination/index"),e("mx-copy/index"),e("examples/hl");var a=e("magix"),n=a.Vframe,s=e("examples/example"),i=e("$");a.applyStyle("_zs_galleryaH","._zs_galleryle{width:300px;border:1px solid var(--color-border);border-radius:var(--border-radius)}._zs_galleryle ._zs_gallerylf{padding:20px 20px 5px}"),t.exports=s.extend({tmpl:function(e,l,t,a,n,s,i,r){if(t||(t=e),!n){var x={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,u=function(e){return"&"+x[e]+";"};n=function(e){return""+(null==e?"":e)},a=function(e){return n(e).replace(d,u)}}if(!s){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return m[e]},g=/[!')(*]/g;s=function(e){return encodeURIComponent(n(e)).replace(g,p)}}if(!r){var v=/[\\'"]/g;r=function(e){return n(e).replace(v,"\\$&")}}i||(i=function(e,l,t,a){for(a=e[_];--a;)if(e[t=_+a]===l)return t;return e[t=_+e[_]++]=l,t});var _="",c="",o=e.selected,f=e.viewId,y=e.list,z=e.text1,V=e.text2;return c+='<div mxv mxa="_zs_galleryfm:_" class="_zs_galleryg"><div mxv mxa="_zs_galleryfm:a" class="_zs_galleryj"><div mxs="_zs_galleryfm:_" class="mb10"><span class="color-9">使用场景：</span>切换页码的时候保留历史选中项，无需实时反馈选中结果</div><div mxa="_zs_galleryfm:b" class="mb20"><span mxs="_zs_galleryfm:a" class="color-9">当前选中单元：</span>'+a(o)+'</div><div mxv mxa="_zs_galleryfm:c" class="_zs_galleryle"><div mxv mxa="_zs_galleryfm:d" class="_zs_gallerylf"><div mxv="selected,list" id="'+a(f)+'_tree" mx-view="mx-tree/index?bottomValues='+i(t,o)+"&list="+i(t,y)+'&needAll=true"></div></div><div mxs="_zs_galleryfm:b" class="table-pager-wrapper" mx-change="'+l+'changePager()" mx-view="mx-pagination/index?total=10&size=5&page=1&mini=true&jump=false"></div></div></div><div mxa="_zs_galleryfm:e" class="_zs_galleryk"><div mxs="_zs_galleryfm:c" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(f)+'_text_1"><span mxa="_zs_galleryfm:f" class="_zs_galleryn">'+n(z)+'</span><i mxs="_zs_galleryfm:d" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(f)+'_text_1">\n&lt;mx-tree id="&#123;&#123;=viewId&#125;&#125;_tree"\n    bottom-values="&#123;&#123;@selected&#125;&#125;"\n    list="&#123;&#123;@list&#125;&#125;"\n    need-all="true"&gt;&lt;/mx-tree&gt;\n\n&lt;mx-pagination class="table-pager-wrapper"\n    total="10" \n    size="5" \n    page="1"\n    mini="true"\n    jump="false"\n    mx-change="changePager()"/&gt;</pre></div><div mxa="_zs_galleryfm:g" class="_zs_galleryk"><div mxs="_zs_galleryfm:e" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+s(f)+'_text_2"><span mxa="_zs_galleryfm:h" class="_zs_galleryn">'+n(V)+'</span><i mxs="_zs_galleryfm:d" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(f)+"_text_2\">\nlet Magix = require('magix');\nlet Vframe = Magix.Vframe;\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        let list1 = [&#123;\n            value: 1,\n            pValue: '',\n            text: '计划1'\n        &#125;, &#123;\n            value: 2,\n            pValue: '',\n            text: '计划2'\n        &#125;, &#123;\n            value: 11,\n            pValue: 1,\n            text: '单元1-1'\n        &#125;, &#123;\n            value: 12,\n            pValue: 1,\n            text: '单元1-2'\n        &#125;, &#123;\n            value: 21,\n            pValue: 2,\n            text: '单元2-1'\n        &#125;, &#123;\n            value: 22,\n            pValue: 2,\n            text: '单元2-2'\n        &#125;]\n        \n        var list2 = [&#123;\n            value: 3,\n            pValue: '',\n            text: '计划3'\n        &#125;, &#123;\n            value: 4,\n            pValue: '',\n            text: '计划4'\n        &#125;, &#123;\n            value: 31,\n            pValue: 3,\n            text: '单元3-1'\n        &#125;, &#123;\n            value: 32,\n            pValue: 3,\n            text: '单元3-2'\n        &#125;, &#123;\n            value: 41,\n            pValue: 4,\n            text: '单元4-1'\n        &#125;, &#123;\n            value: 42,\n            pValue: 4,\n            text: '单元4-2'\n        &#125;]\n\n        this.updater.digest(&#123;\n            viewId: this.id,\n            list1,\n            list2,\n            list: $.extend(true, [], list1),\n            results: &#123;&#125;,\n            selected: []\n        &#125;);\n    &#125;,\n    'changePager&lt;change&gt;' (e) &#123;\n        let page = e.page;\n\n        let that = this;\n        let data = this.updater.get();\n\n        let tree = Vframe.get(that.id + '_tree');\n        let result = tree.invoke('getBottomValues');\n        \n        // 缓存已选中的节点，下次页面切换时依然选中原先选中的\n        let results = data.results || &#123;&#125;;\n        results[page] = result;\n        let selected = [];\n        for(var p in results)&#123;\n            selected = selected.concat(results[p]);\n        &#125;\n\n        // 更新list\n        let list = $.extend(true, [], data['list' + page]);\n        this.updater.digest(&#123;\n            list: list,\n            selected\n        &#125;)\n    &#125;\n&#125;);</pre></div></div>"},render:function(){var e=[{value:1,pValue:"",text:"计划1"},{value:2,pValue:"",text:"计划2"},{value:11,pValue:1,text:"单元1-1"},{value:12,pValue:1,text:"单元1-2"},{value:21,pValue:2,text:"单元2-1"},{value:22,pValue:2,text:"单元2-2"}];this.updater.digest({list1:e,list2:[{value:3,pValue:"",text:"计划3"},{value:4,pValue:"",text:"计划4"},{value:31,pValue:3,text:"单元3-1"},{value:32,pValue:3,text:"单元3-2"},{value:41,pValue:4,text:"单元4-1"},{value:42,pValue:4,text:"单元4-2"}],list:i.extend(!0,[],e),results:{},selected:[]})},"changePager<change>":function(e){var l=e.page,t=this.updater.get(),a=n.get(this.id+"_tree").invoke("getBottomValues"),s=t.results||{};s[l]=a;var r=[];for(var x in s)r=r.concat(s[x]);var d=i.extend(!0,[],t["list"+l]);this.updater.digest({list:d,selected:r})}})});