define("mx-table/__test__/15",["magix","__test__/example","mx-checkbox/storestate","mx-checkbox/linkage","$","../index","mx-pagination/index","mx-copy/index","__test__/hl"],(t,e,l)=>{t("../index"),t("mx-pagination/index"),t("mx-copy/index"),t("__test__/hl");t("magix");var a=t("__test__/example"),n=t("mx-checkbox/storestate"),s=t("mx-checkbox/linkage");t("$");l.exports=a.extend({tmpl:function(t,e,l,a,n,s,i,_){if(l||(l=t),!n){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},r=/[&<>"'`]/g,g=function(t){return"&"+c[t]+";"};n=function(t){return""+(null==t?"":t)},a=function(t){return n(t).replace(r,g)}}if(!s){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(t){return d[t]},o=/[!')(*]/g;s=function(t){return encodeURIComponent(n(t)).replace(o,x)}}if(!_){var m=/[\\'"]/g;_=function(t){return n(t).replace(m,"\\$&")}}var p,h,v,y="",u=t.selected,z=t.list,b=t.total,f=t.size,w=t.page,k=t.viewId,q=t.text1,$=t.text2;try{y+='<div mxv mxa="_zs_galleryeq:_" class="_zs_gallery___test___layout_-example"><div mxv mxa="_zs_galleryeq:a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_galleryeq:_" class="mb20"><span class="color-9">以下示例：</span>实时反馈当前选中项</div><div mxa="_zs_galleryeq:b" class="mb20"><a mxs="_zs_galleryeq:a" href="javascript:;" mx-click="'+e+'clear()" class="btn btn-brand mr20">清空所有选中</a><span mxs="_zs_galleryeq:b" class="color-9">当前选中：</span>',v=9,h="=selected",y+=(p="<%=selected%>",a(u)+'</div><div mxv mxa="_zs_galleryeq:c" mx-view="mx-table/index?sticky=true"><div mxv><table mxv mxa="_zs_galleryeq:d" class="table"><thead mxv><tr mxv><th mxv mxa="_zs_galleryeq:e" width="50"><input mxs="_zs_galleryeq:c" type="checkbox" class="checkbox" linkage="example" mx-change="'+e+'get()"/></th><th mxs="_zs_galleryeq:d" width="200">列1</th><th mxs="_zs_galleryeq:e" width="200">列2</th><th mxs="_zs_galleryeq:f" width="200">列3</th></tr></thead><tbody mxv>'),v=24,h="each list as item index",p="<%for (var index = 0, $art_coappslpvw$art_c = list.length; index < $art_coappslpvw$art_c; index++) {    var item = list[index]%>";for(var L=0,S=z.length;L<S;L++){var I=z[L];y+='<tr mxv><td mxv><input type="checkbox" class="checkbox" linkage-parent="example" value="',v=29,h="=item.id",y+=(p="<%=item.id%>",a(I.id)+'" mx-change="'+e+'get()"/></td><td>'),v=31,h="=item.content1",y+=(p="<%=item.content1%>",a(I.content1)+"</td><td>"),v=32,h="=item.content2",y+=(p="<%=item.content2%>",a(I.content2)+"</td><td>"),v=33,h="=item.content3",y+=(p="<%=item.content3%>",a(I.content3)+"</td></tr>"),v=35,h="/each",p="<%}%>"}y+='</tbody></table></div></div><div class="table-pager-wrapper" mx-change="'+e+'changePager()" mx-view="mx-pagination/index?total=',v=40,h="=total",y+=(p="<%!$eu(total)%>",s(b)+"&size="),v=41,h="=size",y+=(p="<%!$eu(size)%>",s(f)+"&page="),v=42,h="=page",y+=(p="<%!$eu(page)%>",s(w)+'"></div></div><div mxa="_zs_galleryeq:f" class="clearfix"><div mxa="_zs_galleryeq:g" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-half"><div mxs="_zs_galleryeq:g" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+e+'done({id:1})" mx-view="mx-copy/index?copyNode='),v=48,h="=viewId",y+=(p="<%!$eu(viewId)%>",s(k)+'_text_1"><span mxa="_zs_galleryeq:h" class="_zs_gallery___test___layout_-desc-tip">'),v=50,h="!text1",y+=(p="<%!text1%>",n(q)+'</span><i mxs="_zs_galleryeq:h" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),v=53,h="=viewId",y+=(p="<%=viewId%>",a(k)+'_text_1">\n&lt;div class="mb20"&gt;\n    &lt;a href="javascript:;" class="btn btn-brand mr20"\n        mx-click="clear()"&gt;清空所有选中&lt;/a&gt;\n\n    &lt;span class="color-9"&gt;当前选中：&lt;/span&gt;&#123;&#123;=selected&#125;&#125;\n&lt;/div&gt;\n&lt;mx-table sticky="true"&gt;\n    &lt;table class="table"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &lt;th width="50"&gt;\n                    &lt;input type="checkbox" class="checkbox" linkage="example" mx-change="get()"/&gt;\n                &lt;/th&gt;\n                &lt;th width="200"&gt;列1&lt;/th&gt;\n                &lt;th width="200"&gt;列2&lt;/th&gt;\n                &lt;th width="200"&gt;列3&lt;/th&gt;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &#123;&#123;each list as item index&#125;&#125;\n            &lt;tr&gt;\n                &lt;td&gt;\n                    &lt;input type="checkbox" class="checkbox" \n                        linkage-parent="example" \n                        value="&#123;&#123;=item.id&#125;&#125;" mx-change="get()"/&gt;\n                &lt;/td&gt;\n                &lt;td&gt;&#123;&#123;=item.content1&#125;&#125;&lt;/td&gt;\n                &lt;td&gt;&#123;&#123;=item.content2&#125;&#125;&lt;/td&gt;\n                &lt;td&gt;&#123;&#123;=item.content3&#125;&#125;&lt;/td&gt;\n            &lt;/tr&gt;\n            &#123;&#123;/each&#125;&#125;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-table&gt;\n&lt;mx-pagination class="table-pager-wrapper"\n    total="&#123;&#123;=total&#125;&#125;" \n    size="&#123;&#123;=size&#125;&#125;" \n    page="&#123;&#123;=page&#125;&#125;"\n    mx-change="changePager()"/&gt;</pre></div><div mxa="_zs_galleryeq:i" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-half _zs_gallery___test___layout_-half-right"><div mxs="_zs_galleryeq:i" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+e+'done({id:2})" mx-view="mx-copy/index?copyNode='),v=96,h="=viewId",y+=(p="<%!$eu(viewId)%>",s(k)+'_text_2"><span mxa="_zs_galleryeq:j" class="_zs_gallery___test___layout_-desc-tip">'),v=98,h="!text2",y+=(p="<%!text2%>",n($)+'</span><i mxs="_zs_galleryeq:h" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),v=101,h="=viewId",y+=(p="<%=viewId%>",a(k)+"_text_2\">\nlet Magix = require('magix');\nlet StoreState = require('@../../mx-checkbox/storestate');\nlet Linkage = require('@../../mx-checkbox/linkage');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    mixins: [StoreState, Linkage],\n    render() &#123;\n        let that = this;\n        let allList = [];\n        for (var i = 0; i &lt; 20; i++) &#123;\n            allList.push(&#123;\n                id: i,\n                content1: i + '_列1',\n                content2: i + '_列2',\n                content3: i + '_列3'\n            &#125;)\n        &#125;\n        let size = 5,\n            total = allList.length,\n            page = 1;\n        let list = allList.slice(0, 5);\n        that.updater.digest(&#123;\n            allList,\n            list,\n            size,\n            page,\n            total,\n            selected: []\n        &#125;);\n    &#125;,\n\n    'changePager&lt;change&gt;' (e) &#123;\n        // e.page 当前第几页\n        // e.size 每页多少条\n        let that = this;\n        let page = +e.page;\n        let allList = that.updater.get('allList');\n        let list = allList.slice((page - 1) * 5, page * 5);\n        that.updater.digest(&#123;\n            list,\n            page\n        &#125;)\n    &#125;,\n\n    'get&lt;change&gt;' (e) &#123;\n        let selected = this.getStoreState('example');\n        this.updater.digest(&#123;\n            selected: selected\n        &#125;)\n    &#125;,\n\n    'clear&lt;click&gt;' (e) &#123;\n        this.clearStoreState('example');\n        this.updater.digest(&#123;\n            selected: ''\n        &#125;)\n    &#125;\n&#125;);</pre></div></div></div>")}catch(t){var P="render view error:"+(t.message||t);throw h&&(P+="\r\n\tsrc art:{{"+h+"}}\r\n\tat line:"+v),P+="\r\n\t"+(h?"translate to:":"expr:"),P+=p+"\r\n\tat file:mx-table/__test__/15.html"}return y},mixins:[n,s],render:function(){for(var t=[],e=0;e<20;e++)t.push({id:e,content1:e+"_列1",content2:e+"_列2",content3:e+"_列3"});var l=t.length,a=t.slice(0,5);this.updater.digest({allList:t,list:a,size:5,page:1,total:l,selected:[]})},"changePager<change>":function(t){var e=+t.page,l=this.updater.get("allList").slice(5*(e-1),5*e);this.updater.digest({list:l,page:e})},"get<change>":function(t){var e=this.getStoreState("example");this.updater.digest({selected:e})},"clear<click>":function(t){this.clearStoreState("example"),this.updater.digest({selected:""})}})});