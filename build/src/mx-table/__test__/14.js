define("mx-table/__test__/14",["magix","__test__/example","mx-checkbox/storestate","mx-checkbox/linkage","$","../index","mx-pagination/index","mx-copy/index","__test__/hl"],(t,e,l)=>{t("../index"),t("mx-pagination/index"),t("mx-copy/index"),t("__test__/hl");t("magix");var a=t("__test__/example"),n=t("mx-checkbox/storestate"),s=t("mx-checkbox/linkage");t("$");l.exports=a.extend({tmpl:function(t,e,l,a,n,s,i,d){if(l||(l=t),!n){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,g=function(t){return"&"+r[t]+";"};n=function(t){return""+(null==t?"":t)},a=function(t){return n(t).replace(c,g)}}if(!s){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},_=function(t){return x[t]},m=/[!')(*]/g;s=function(t){return encodeURIComponent(n(t)).replace(m,_)}}if(!d){var o=/[\\'"]/g;d=function(t){return n(t).replace(o,"\\$&")}}var p="",h=t.selected,v=t.list,b=t.total,y=t.size,u=t.page,z=t.viewId,k=t.text1,f=t.text2;p+='<div mxv mxa="_zs_galleryd$:_" class="_zs_galleryh"><div mxv mxa="_zs_galleryd$:a" class="_zs_galleryk"><div mxs="_zs_galleryd$:_" class="clearfix lh22 mb20"><div class="fl color-9">以下示例：</div><div class="fl"><div>使用input value作为主键，<span class="color-brand">请保证input value的唯一性（包含翻页的情况），不要使用index</span></div><div>需要的时候调用<span class="color-brand">this.getStoreState(linkage:string)</span>获取选中值，其中linkage为父节点input.attr(\'linkage\')</div><div>部分禁止选择，翻页保存选中值</div></div></div><div mxa="_zs_galleryd$:b" class="mb20"><a mxs="_zs_galleryd$:a" href="javascript:;" mx-click="'+e+'clear()" class="btn btn-brand mr20">清空所有选中</a><a mxs="_zs_galleryd$:b" href="javascript:;" mx-click="'+e+'get()" class="btn btn-brand mr20">获取选中值</a><span mxs="_zs_galleryd$:c" class="color-9">当前选中：</span>'+a(h)+'</div><div mxv mxa="_zs_galleryd$:c" mx-view="mx-table/index?sticky=true"><div mxv><table mxv mxa="_zs_galleryd$:d" class="table"><thead mxv><tr mxv><th mxv mxa="_zs_galleryd$:e" width="50"><input mxs="_zs_galleryd$:d" type="checkbox" class="checkbox" linkage="example"/></th><th mxs="_zs_galleryd$:e" width="200">列1</th><th mxs="_zs_galleryd$:f" width="200">列2</th><th mxs="_zs_galleryd$:g" width="200">列3</th></tr></thead><tbody mxv>';for(var $=0,w=v.length;$<w;$++){var S=v[$];p+='<tr mxv class="'+a($+1==v.length?"last-tr":"")+'"><td mxv><input type="checkbox" class="checkbox" linkage-parent="example" value="'+a(S.id)+'" ',S.disabled&&(p+=' disabled="true" '),p+="/></td><td>"+a(S.content1)+"</td><td>"+a(S.content2)+"</td><td>"+a(S.content3)+"</td></tr>"}return p+='</tbody></table></div></div><div mxa="_zs_galleryd$:f" class="table-pager-wrapper"><div mx-change="'+e+'changePager()" mx-view="mx-pagination/index?total='+s(b)+"&size="+s(y)+"&page="+s(u)+'"></div></div></div><div mxa="_zs_galleryd$:g" class="clearfix"><div mxa="_zs_galleryd$:h" class="_zs_galleryl _zs_gallerye"><div mxs="_zs_galleryd$:h" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+e+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(z)+'_text_1"><span mxa="_zs_galleryd$:i" class="_zs_galleryo">'+n(k)+'</span><i mxs="_zs_galleryd$:i" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(z)+'_text_1">\n&lt;div class="mb20"&gt;\n    &lt;a href="javascript:;" class="btn btn-brand mr20"\n        mx-click="clear()"&gt;清空所有选中&lt;/a&gt;\n\n    &lt;a href="javascript:;" class="btn btn-brand mr20"\n        mx-click="get()"&gt;获取选中值&lt;/a&gt;\n\n    &lt;span class="color-9"&gt;当前选中：&lt;/span&gt;&#123;&#123;=selected&#125;&#125;\n&lt;/div&gt;\n\n&lt;mx-table sticky="true"&gt;\n    &lt;table class="table"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &lt;th width="50"&gt;\n                    &lt;input type="checkbox" class="checkbox" linkage="example" /&gt;\n                &lt;/th&gt;\n                &lt;th width="200"&gt;列1&lt;/th&gt;\n                &lt;th width="200"&gt;列2&lt;/th&gt;\n                &lt;th width="200"&gt;列3&lt;/th&gt;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &#123;&#123;each list as item index&#125;&#125;\n            &lt;tr class="&#123;&#123;= (index+1==list.length) ? \'last-tr\' : \'\'&#125;&#125;"&gt;\n                &lt;td&gt;\n                    &lt;input type="checkbox" class="checkbox" \n                        linkage-parent="example" \n                        value="&#123;&#123;=item.id&#125;&#125;" \n                        &#123;&#123;if item.disabled&#125;&#125; disabled="true" &#123;&#123;/if&#125;&#125;/&gt;\n                &lt;/td&gt;\n                &lt;td&gt;&#123;&#123;=item.content1&#125;&#125;&lt;/td&gt;\n                &lt;td&gt;&#123;&#123;=item.content2&#125;&#125;&lt;/td&gt;\n                &lt;td&gt;&#123;&#123;=item.content3&#125;&#125;&lt;/td&gt;\n            &lt;/tr&gt;\n            &#123;&#123;/each&#125;&#125;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-table&gt;\n&lt;div class="table-pager-wrapper"&gt;\n    &lt;mx-pagination \n        total="&#123;&#123;=total&#125;&#125;" \n        size="&#123;&#123;=size&#125;&#125;" \n        page="&#123;&#123;=page&#125;&#125;"\n        mx-change="changePager()"/&gt;\n&lt;/div&gt;</pre></div><div mxa="_zs_galleryd$:j" class="_zs_galleryl _zs_gallerye _zs_galleryf"><div mxs="_zs_galleryd$:j" class="_zs_galleryj">JS Code</div><div class="_zs_gallerym" mx-success="'+e+'done({id:2})" mx-view="mx-copy/index?copyNode='+s(z)+'_text_2"><span mxa="_zs_galleryd$:k" class="_zs_galleryo">'+n(f)+'</span><i mxs="_zs_galleryd$:i" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(z)+"_text_2\">\nlet Magix = require('magix');\nlet StoreState = require('@../../mx-checkbox/storestate');\nlet Linkage = require('@../../mx-checkbox/linkage');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    mixins: [StoreState, Linkage],\n    render() &#123;\n        let that = this;\n        let allList = [];\n        for (var i = 0; i &lt; 20; i++) &#123;\n            allList.push(&#123;\n                id: i,\n                disabled: (i % 2 == 0),\n                content1: i + '_列1',\n                content2: i + '_列2',\n                content3: i + '_列3'\n            &#125;)\n        &#125;\n        let size = 5,\n            total = allList.length,\n            page = 1;\n        let list = allList.slice(0, 5);\n        that.updater.digest(&#123;\n            allList,\n            list,\n            size,\n            page,\n            total,\n            selected: []\n        &#125;);\n    &#125;,\n\n    'changePager&lt;change&gt;' (e) &#123;\n        // e.page 当前第几页\n        // e.size 每页多少条\n        let that = this;\n        let page = +e.page;\n        let allList = that.updater.get('allList');\n        let list = allList.slice((page - 1) * 5, page * 5);\n        that.updater.digest(&#123;\n            list,\n            page\n        &#125;)\n    &#125;,\n\n    'get&lt;click&gt;' (e) &#123;\n        let selected = this.getStoreState('example');\n        this.updater.digest(&#123;\n            selected: selected\n        &#125;)\n    &#125;,\n\n    'clear&lt;click&gt;' (e) &#123;\n        this.clearStoreState('example');\n        this.updater.digest(&#123;\n            selected: ''\n        &#125;)\n    &#125;\n&#125;);</pre></div></div></div>"},mixins:[n,s],render:function(){for(var t=[],e=0;e<20;e++)t.push({id:e,disabled:e%2==0,content1:e+"_列1",content2:e+"_列2",content3:e+"_列3"});var l=t.length,a=t.slice(0,5);this.updater.digest({allList:t,list:a,size:5,page:1,total:l,selected:[]})},"changePager<change>":function(t){var e=+t.page,l=this.updater.get("allList").slice(5*(e-1),5*e);this.updater.digest({list:l,page:e})},"get<click>":function(t){var e=this.getStoreState("example");this.updater.digest({selected:e})},"clear<click>":function(t){this.clearStoreState("example"),this.updater.digest({selected:""})}})});