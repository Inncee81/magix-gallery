define("mx-table/__test__/8",["magix","__test__/example","mx-table/sort","$","../index","mx-copy/index","__test__/hl"],(t,e,i)=>{t("../index"),t("mx-copy/index"),t("__test__/hl");t("magix");var l=t("__test__/example"),a=t("mx-table/sort");t("$");i.exports=l.extend({tmpl:function(t,e,i,l,a,r,_,n){if(i||(i=t),!a){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,o=function(t){return"&"+s[t]+";"};a=function(t){return""+(null==t?"":t)},l=function(t){return a(t).replace(d,o)}}if(!r){var g={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},f=function(t){return g[t]},c=/[!')(*]/g;r=function(t){return encodeURIComponent(a(t)).replace(c,f)}}if(!n){var x=/[\\'"]/g;n=function(t){return a(t).replace(x,"\\$&")}}var m,h,p,u="",v=t.groups,y=t.list,$=t.format,b=t.viewId,z=t.text1,q=t.text2;try{u+='<div mxa="_zs_galleryeE:_" class="_zs_gallery___test___layout_-example"><div mxa="_zs_galleryeE:a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_galleryeE:_" class="mb20 clearfix lh22"><div class="fl color-9">以下示例：</div><div class="fl"><div>需要排序的表头上加上<span class="color-brand">&lt;span sort-trigger="需要排序的字段key值"&gt;&lt;/span&gt;</span>；</div><div class="mt10 mb10"><pre class="tip-content">\n&lt;th class="field-item"&gt;\n    指标&#123;&#123;=field&#125;&#125;\n    &lt;span sort-trigger="&#123;&#123;=field&#125;&#125;"&gt;&lt;/span&gt;\n&lt;/th&gt;\n</pre></div><div>排序参数反应在路由上，orderField（按哪个字段排序），orderBy（desc降序，asc升序）；</div><div>mixins中this.sort为本页排序方法（<span class="color-brand">数字排序+字符串排序</span>），如果从接口获取排序则忽略此方法</div></div></div><div mxa="_zs_galleryeE:b" mx-view="mx-table/index?sticky=true" class="mb40"><div><table mxa="_zs_galleryeE:c" class="table"><thead><tr><th mxs="_zs_galleryeE:a" rowspan="2">固定1</th><th mxs="_zs_galleryeE:b" rowspan="2">固定2</th><th mxs="_zs_galleryeE:c" rowspan="2">固定3</th>',p=27,h="each groups as group",m="<%for (var $art_ippxhzfql$art_i = 0, $art_cjktnh$art_c = groups.length; $art_ippxhzfql$art_i < $art_cjktnh$art_c; $art_ippxhzfql$art_i++) {    var group = groups[$art_ippxhzfql$art_i]%>";for(var k=0,j=v.length;k<j;k++){var w=v[k];u+='<th class="field-group" colspan="',p=28,h="=group.fields.length",u+=(m="<%=group.fields.length%>",l(w.fields.length)+'"><div mxa="_zs_galleryeE:d" class="group-name">'),p=29,h="=group.name",u+=(m="<%=group.name%>",l(w.name)+"</div></th>"),p=31,h="/each",m="<%}%>"}u+="</tr><tr>",p=34,h="each groups as group",m="<%for (var $art_iiekxyv$art_i = 0, $art_cdrudkroyrq$art_c = groups.length; $art_iiekxyv$art_i < $art_cdrudkroyrq$art_c; $art_iiekxyv$art_i++) {    var group = groups[$art_iiekxyv$art_i]%>";for(var E=0,I=v.length;E<I;E++){w=v[E];u+=" ",p=35,h="each group.fields as field",m="<%for (var $art_ioqqnde$art_i = 0, $art_objgoijcufx$art_obj = group.fields, $art_cmqedztbk$art_c = $art_objgoijcufx$art_obj.length; $art_ioqqnde$art_i < $art_cmqedztbk$art_c; $art_ioqqnde$art_i++) {        var field = $art_objgoijcufx$art_obj[$art_ioqqnde$art_i]%>";for(var L=0,B=w.fields,S=B.length;L<S;L++){var C=B[L];u+='<th mxa="_zs_galleryeE:e" class="field-item">',p=37,h="=field.name",u+=(m="<%=field.name%>",l(C.name)+'<span sort-trigger="'),p=38,h="=field.key",u+=(m="<%=field.key%>",l(C.key)+'"></span></th>'),p=40,h="/each",m="<%}%>"}u+=" ",p=41,h="/each",m="<%}%>"}u+="</tr></thead><tbody>",p=45,h="each list as item index",m="<%for (var index = 0, $art_cdueymsoa$art_c = list.length; index < $art_cdueymsoa$art_c; index++) {    var item = list[index]%>";for(var F=0,M=y.length;F<M;F++){var A=y[F];u+="<tr><td>",p=47,h="=item.fixed1",u+=(m="<%=item.fixed1%>",l(A.fixed1)+"</td><td>"),p=48,h="=item.fixed2",u+=(m="<%=item.fixed2%>",l(A.fixed2)+"</td><td>"),p=49,h="=item.fixed3",u+=(m="<%=item.fixed3%>",l(A.fixed3)+"</td>"),p=50,h="each groups as group",m="<%for (var $art_iqszsjti$art_i = 0, $art_cnrejeai$art_c = groups.length; $art_iqszsjti$art_i < $art_cnrejeai$art_c; $art_iqszsjti$art_i++) {        var group = groups[$art_iqszsjti$art_i]%>";for(var N=0,G=v.length;N<G;N++){w=v[N];u+=" ",p=51,h="each group.fields as field",m="<%for (var $art_iqqkvlyb$art_i = 0, $art_objzhrmml$art_obj = group.fields, $art_cibbqjylre$art_c = $art_objzhrmml$art_obj.length; $art_iqqkvlyb$art_i < $art_cibbqjylre$art_c; $art_iqqkvlyb$art_i++) {            var field = $art_objzhrmml$art_obj[$art_iqqkvlyb$art_i]%>";for(var H=0,J=w.fields,R=J.length;H<R;H++){C=J[H];u+="<td>",p=52,h="=format(item[field.key])",u+=(m="<%=format(item[field.key])%>",l($(A[C.key]))+"</td>"),p=53,h="/each",m="<%}%>"}u+=" ",p=54,h="/each",m="<%}%>"}u+="</tr>",p=56,h="/each",m="<%}%>"}u+='</tbody></table></div></div></div><div mxa="_zs_galleryeE:f" class="clearfix"><div mxa="_zs_galleryeE:g" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-half"><div mxs="_zs_galleryeE:d" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+e+'done({id:1})" mx-view="mx-copy/index?copyNode=',p=64,h="=viewId",u+=(m="<%!$eu(viewId)%>",r(b)+'_text_1"><span mxa="_zs_galleryeE:h" class="_zs_gallery___test___layout_-desc-tip">'),p=66,h="!text1",u+=(m="<%!text1%>",a(z)+'</span><i mxs="_zs_galleryeE:e" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),p=69,h="=viewId",u+=(m="<%=viewId%>",l(b)+'_text_1">\n&lt;mx-table sticky="true" class="mb40"&gt;\n    &lt;table class="table" left="true" width="400"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &lt;th&gt;固定1&lt;/th&gt;\n                &lt;th&gt;固定2&lt;/th&gt;\n                &lt;th&gt;固定3&lt;/th&gt;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &#123;&#123;each list as item index&#125;&#125;\n                &lt;tr&gt;\n                    &lt;td&gt;&#123;&#123;=item.fixed1&#125;&#125;&lt;/td&gt;\n                    &lt;td&gt;&#123;&#123;=item.fixed2&#125;&#125;&lt;/td&gt;\n                    &lt;td&gt;&#123;&#123;=item.fixed3&#125;&#125;&lt;/td&gt;\n                &lt;/tr&gt;\n            &#123;&#123;/each&#125;&#125;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n    &lt;!-- 滚动列 --&gt;\n    &lt;table class="table" center="true" width="1200"&gt; \n        &lt;thead&gt;\n            &lt;tr&gt;\n                &#123;&#123;each groups as group&#125;&#125;\n                    &lt;th class="field-group" \n                        colspan="&#123;&#123;=group.fields.length&#125;&#125;"&gt;\n                        &lt;div class="group-name"&gt;\n                            &#123;&#123;=group.name&#125;&#125;\n                        &lt;/div&gt;\n                    &lt;/th&gt;\n                &#123;&#123;/each&#125;&#125;\n            &lt;/tr&gt;\n            &lt;tr&gt;\n                &#123;&#123;each groups as group&#125;&#125;\n                    &#123;&#123;each group.fields as field&#125;&#125;\n                    &lt;th class="field-item"&gt;\n                        指标&#123;&#123;=field&#125;&#125;\n                        &lt;span sort-trigger="&#123;&#123;=field&#125;&#125;"&gt;&lt;/span&gt;\n                    &lt;/th&gt;\n                    &#123;&#123;/each&#125;&#125;\n                &#123;&#123;/each&#125;&#125;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &#123;&#123;each list as item index&#125;&#125;\n                &lt;tr&gt;\n                    &#123;&#123;each groups as group&#125;&#125;\n                        &#123;&#123;each group.fields as field&#125;&#125;\n                        &lt;td&gt;&#123;&#123;=format(item[field])&#125;&#125;&lt;/td&gt;\n                        &#123;&#123;/each&#125;&#125;\n                    &#123;&#123;/each&#125;&#125;\n                &lt;/tr&gt;\n            &#123;&#123;/each&#125;&#125;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-table&gt;</pre></div><div mxa="_zs_galleryeE:i" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-half _zs_gallery___test___layout_-half-right"><div mxs="_zs_galleryeE:f" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+e+'done({id:2})" mx-view="mx-copy/index?copyNode='),p=129,h="=viewId",u+=(m="<%!$eu(viewId)%>",r(b)+'_text_2"><span mxa="_zs_galleryeE:j" class="_zs_gallery___test___layout_-desc-tip">'),p=131,h="!text2",u+=(m="<%!text2%>",a(q)+'</span><i mxs="_zs_galleryeE:e" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),p=134,h="=viewId",u+=(m="<%=viewId%>",l(b)+"_text_2\">\nlet Magix = require('magix');\nlet Sort = require('@../gallery/mx-table/sort');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    mixins: [Sort],\n    init() &#123;\n        this.observeLocation(['orderField', 'orderBy']);\n    &#125;,\n    render() &#123;\n        let that = this;\n\n        let groups = [&#123;\n            name: '组1',\n            fields: ['field1', 'field2']\n        &#125;, &#123;\n            name: '组2',\n            fields: ['field3', 'field4', 'field5', 'field6']\n        &#125;, &#123;\n            name: '组3',\n            fields: ['field7', 'field8', 'field9']\n        &#125;]\n        let len = 0;\n        groups.forEach(group =&gt; &#123;\n            len += group.fields.length;\n        &#125;)\n\n        that.updater.digest(&#123;\n            list: that.sort(that.getList()),\n            groups,\n            len,\n            format: (val) =&gt; &#123;\n                if (!val) &#123;\n                    return '-';\n                &#125;\n                return val;\n            &#125;\n        &#125;);\n    &#125;,\n    getList() &#123;\n        let list = [];\n        for (var i = 0; i &lt; 5; i++) &#123;\n            let empty = (i == 2 || i == 4);\n            let origin = &#123;\n                fixed1: i + '_1',\n                fixed2: i + '_2',\n                fixed3: i + '_3',\n                field1: empty ? 0 : (i + 9000),\n                field2: empty ? 0 : (i + 3000),\n                field3: empty ? 0 : (i + 1000),\n                field4: i + 412,\n                field5: i + 512,\n                field6: i + 612,\n                field7: i + 7,\n                field8: i + 8,\n                field9: i + 2\n            &#125;\n\n            let item = $.extend(true, &#123;&#125;, origin);\n            list.push(item);\n        &#125;\n        return list;\n    &#125;\n&#125;);\n            </pre></div></div></div>")}catch(t){var T="render view error:"+(t.message||t);throw h&&(T+="\r\n\tsrc art:{{"+h+"}}\r\n\tat line:"+p),T+="\r\n\t"+(h?"translate to:":"expr:"),T+=m+"\r\n\tat file:mx-table/__test__/8.html"}return u},mixins:[a],init:function(){this.updater.set({viewId:this.id,text1:"复制代码",text2:"复制代码"}),this.observeLocation(["orderField","orderBy"])},render:function(){var t=[{name:"数字（忽略无值行）",fields:[{name:"数字列1",key:"field1"},{name:"数字列2",key:"field2"}]},{name:"字符串排序（忽略无值行 + 忽略大小写）",fields:[{name:"英文",key:"field3"},{name:"中文",key:"field4"}]}],e=0;t.forEach(function(t){e+=t.fields.length});var i=[{fixed1:"1_1",fixed2:"1_2",fixed3:"1_3",field1:9e3,field2:3e3,field3:"Abc",field4:"中文"},{fixed1:"2_1",fixed2:"2_2",fixed3:"2_3",field1:9001,field2:void 0,field3:"dsas",field4:"测试"},{fixed1:"3_1",fixed2:"3_2",fixed3:"3_3",field1:9004,field2:2990,field3:"acc",field4:""},{fixed1:"4_1",fixed2:"4_2",fixed3:"4_3",field1:null,field2:3010,field3:"GSBa",field4:"你好"},{fixed1:"5_1",fixed2:"5_2",fixed3:"5_3",field1:9051,field2:3e3,field3:"",field4:"随机"}];this.updater.digest({list:this.sort(i),groups:t,len:e,format:function(t){return t||"-"}})}})});