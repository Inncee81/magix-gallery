define("mx-tree/__test__/1",["magix","__test__/example","$","../index","mx-pagination/index","mx-copy/index","__test__/hl"],(e,t,l)=>{e("../index"),e("mx-pagination/index"),e("mx-copy/index"),e("__test__/hl");var a=e("magix"),n=a.Vframe,s=e("__test__/example"),i=e("$");a.applyStyle("_zs_galleryaG","._zs_gallerykt{width:300px;border:1px solid var(--color-border);border-radius:var(--border-radius)}._zs_gallerykt ._zs_galleryku{padding:20px 20px 5px}"),l.exports=s.extend({tmpl:function(e,t,l,a,n,s,i,r){if(l||(l=e),!n){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,d=function(e){return"&"+_[e]+";"};n=function(e){return""+(null==e?"":e)},a=function(e){return n(e).replace(x,d)}}if(!s){var u={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return u[e]},g=/[!')(*]/g;s=function(e){return encodeURIComponent(n(e)).replace(g,p)}}if(!r){var v=/[\\'"]/g;r=function(e){return n(e).replace(v,"\\$&")}}i||(i=function(e,t,l,a){for(a=e[c];--a;)if(e[l=c+a]===t)return l;return e[l=c+e[c]++]=t,l});var c="",m="",o=e.selected,y=e.viewId,z=e.list,V=e.text1,f=e.text2;return m+='<div mxv mxa="_zs_gallerye3:_" class="_zs_galleryg"><div mxv mxa="_zs_gallerye3:a" class="_zs_galleryj"><div mxs="_zs_gallerye3:_" class="mb10"><span class="color-9">使用场景：</span>切换页码的时候保留历史选中项，无需实时反馈选中结果</div><div mxa="_zs_gallerye3:b" class="mb20"><span mxs="_zs_gallerye3:a" class="color-9">当前选中单元：</span>'+a(o)+'</div><div mxv mxa="_zs_gallerye3:c" class="_zs_gallerykt"><div mxv mxa="_zs_gallerye3:d" class="_zs_galleryku"><div mxv="selected,list" id="'+a(y)+'_tree" mx-view="mx-tree/index?bottomValues='+i(l,o)+"&list="+i(l,z)+'&needAll=true"></div></div><div mxs="_zs_gallerye3:b" class="table-pager-wrapper" mx-change="'+t+'changePager()" mx-view="mx-pagination/index?total=10&size=5&page=1&mini=true&jump=false"></div></div></div><div mxa="_zs_gallerye3:e" class="_zs_galleryk"><div mxs="_zs_gallerye3:c" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(y)+'_text_1"><span mxa="_zs_gallerye3:f" class="_zs_galleryn">'+n(V)+'</span><i mxs="_zs_gallerye3:d" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(y)+'_text_1">\n&lt;mx-tree id="&#123;&#123;=viewId&#125;&#125;_tree"\n    bottom-values="&#123;&#123;@selected&#125;&#125;"\n    list="&#123;&#123;@list&#125;&#125;"\n    need-all="true"&gt;&lt;/mx-tree&gt;\n\n&lt;mx-pagination class="table-pager-wrapper"\n    total="10" \n    size="5" \n    page="1"\n    mini="true"\n    jump="false"\n    mx-change="changePager()"/&gt;</pre></div><div mxa="_zs_gallerye3:g" class="_zs_galleryk"><div mxs="_zs_gallerye3:e" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+t+'done({id:2})" mx-view="mx-copy/index?copyNode='+s(y)+'_text_2"><span mxa="_zs_gallerye3:h" class="_zs_galleryn">'+n(f)+'</span><i mxs="_zs_gallerye3:d" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(y)+"_text_2\">\nlet Magix = require('magix');\nlet Vframe = Magix.Vframe;\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        let list1 = [&#123;\n            value: 1,\n            pValue: '',\n            text: '计划1'\n        &#125;, &#123;\n            value: 2,\n            pValue: '',\n            text: '计划2'\n        &#125;, &#123;\n            value: 11,\n            pValue: 1,\n            text: '单元1-1'\n        &#125;, &#123;\n            value: 12,\n            pValue: 1,\n            text: '单元1-2'\n        &#125;, &#123;\n            value: 21,\n            pValue: 2,\n            text: '单元2-1'\n        &#125;, &#123;\n            value: 22,\n            pValue: 2,\n            text: '单元2-2'\n        &#125;]\n        \n        var list2 = [&#123;\n            value: 3,\n            pValue: '',\n            text: '计划3'\n        &#125;, &#123;\n            value: 4,\n            pValue: '',\n            text: '计划4'\n        &#125;, &#123;\n            value: 31,\n            pValue: 3,\n            text: '单元3-1'\n        &#125;, &#123;\n            value: 32,\n            pValue: 3,\n            text: '单元3-2'\n        &#125;, &#123;\n            value: 41,\n            pValue: 4,\n            text: '单元4-1'\n        &#125;, &#123;\n            value: 42,\n            pValue: 4,\n            text: '单元4-2'\n        &#125;]\n\n        this.updater.digest(&#123;\n            viewId: this.id,\n            list1,\n            list2,\n            list: $.extend(true, [], list1),\n            results: &#123;&#125;,\n            selected: []\n        &#125;);\n    &#125;,\n    'changePager&lt;change&gt;' (e) &#123;\n        let page = e.page;\n\n        let that = this;\n        let data = this.updater.get();\n\n        let tree = Vframe.get(that.id + '_tree');\n        let result = tree.invoke('getBottomValues');\n        \n        // 缓存已选中的节点，下次页面切换时依然选中原先选中的\n        let results = data.results || &#123;&#125;;\n        results[page] = result;\n        let selected = [];\n        for(var p in results)&#123;\n            selected = selected.concat(results[p]);\n        &#125;\n\n        // 更新list\n        let list = $.extend(true, [], data['list' + page]);\n        this.updater.digest(&#123;\n            list: list,\n            selected\n        &#125;)\n    &#125;\n&#125;);</pre></div></div>"},render:function(){var e=[{value:1,pValue:"",text:"计划1"},{value:2,pValue:"",text:"计划2"},{value:11,pValue:1,text:"单元1-1"},{value:12,pValue:1,text:"单元1-2"},{value:21,pValue:2,text:"单元2-1"},{value:22,pValue:2,text:"单元2-2"}];this.updater.digest({list1:e,list2:[{value:3,pValue:"",text:"计划3"},{value:4,pValue:"",text:"计划4"},{value:31,pValue:3,text:"单元3-1"},{value:32,pValue:3,text:"单元3-2"},{value:41,pValue:4,text:"单元4-1"},{value:42,pValue:4,text:"单元4-2"}],list:i.extend(!0,[],e),results:{},selected:[]})},"changePager<change>":function(e){var t=e.page,l=this.updater.get(),a=n.get(this.id+"_tree").invoke("getBottomValues"),s=l.results||{};s[t]=a;var r=[];for(var _ in s)r=r.concat(s[_]);var x=i.extend(!0,[],l["list"+t]);this.updater.digest({list:x,selected:r})}})});