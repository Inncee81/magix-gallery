define("mx-table/__test__/8",["magix","__test__/example","mx-table/sort","$","../index","mx-copy/index","__test__/hl"],(e,t,l)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var i=e("__test__/example"),n=e("mx-table/sort");e("$");l.exports=i.extend({tmpl:function(e,t,l,i,n,d,s,a){if(l||(l=e),!n){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},g=/[&<>"'`]/g,f=function(e){return"&"+r[e]+";"};n=function(e){return""+(null==e?"":e)},i=function(e){return n(e).replace(g,f)}}if(!d){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return _[e]},x=/[!')(*]/g;d=function(e){return encodeURIComponent(n(e)).replace(x,o)}}if(!a){var c=/[\\'"]/g;a=function(e){return n(e).replace(c,"\\$&")}}var m="",h=e.groups,p=e.list,v=e.format,y=e.viewId,u=e.text1,z=e.text2;m+='<div mxa="_zs_galleryed:_" class="_zs_galleryg"><div mxa="_zs_galleryed:a" class="_zs_galleryj"><div mxs="_zs_galleryed:_" class="mb20 clearfix lh22"><div class="fl color-9">以下示例：</div><div class="fl"><div>需要排序的表头上加上<span class="color-brand">&lt;span sort-trigger="需要排序的字段key值"&gt;&lt;/span&gt;</span>；</div><div class="mt10 mb10"><pre class="tip-content">\n&lt;th class="field-item"&gt;\n    指标&#123;&#123;=field&#125;&#125;\n    &lt;span sort-trigger="&#123;&#123;=field&#125;&#125;"&gt;&lt;/span&gt;\n&lt;/th&gt;\n</pre></div><div>排序参数反应在路由上，orderField（按哪个字段排序），orderBy（desc降序，asc升序）；</div><div>mixins中this.sort为本页排序方法（<span class="color-brand">数字排序+字符串排序</span>），如果从接口获取排序则忽略此方法</div></div></div><div mxa="_zs_galleryed:b" mx-view="mx-table/index?sticky=true" class="mb40"><div><table mxa="_zs_galleryed:c" class="table"><thead><tr><th mxs="_zs_galleryed:a" rowspan="2">固定1</th><th mxs="_zs_galleryed:b" rowspan="2">固定2</th><th mxs="_zs_galleryed:c" rowspan="2">固定3</th>';for(var b=0,w=h.length;b<w;b++){m+='<th class="field-group" colspan="'+i((j=h[b]).fields.length)+'"><div mxa="_zs_galleryed:d" class="group-name">'+i(j.name)+"</div></th>"}m+="</tr><tr>";for(var k=0,$=h.length;k<$;k++){m+=" ";for(var L=0,B=(j=h[k]).fields,S=B.length;L<S;L++){m+='<th mxa="_zs_galleryed:e" class="field-item">'+i((G=B[L]).name)+'<span sort-trigger="'+i(G.key)+'"></span></th>'}m+=" "}m+="</tr></thead><tbody>";for(var q=0,C=p.length;q<C;q++){var F=p[q];m+="<tr><td>"+i(F.fixed1)+"</td><td>"+i(F.fixed2)+"</td><td>"+i(F.fixed3)+"</td>";for(var I=0,M=h.length;I<M;I++){var j;m+=" ";for(var A=0,E=(j=h[I]).fields,N=E.length;A<N;A++){var G;m+="<td>"+i(v(F[(G=E[A]).key]))+"</td>"}m+=" "}m+="</tr>"}return m+='</tbody></table></div></div></div><div mxa="_zs_galleryed:f" class="clearfix"><div mxa="_zs_galleryed:g" class="_zs_galleryk _zs_galleryd"><div mxs="_zs_galleryed:d" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+d(y)+'_text_1"><span mxa="_zs_galleryed:h" class="_zs_galleryn">'+n(u)+'</span><i mxs="_zs_galleryed:e" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+i(y)+'_text_1">\n&lt;mx-table sticky="true" class="mb40"&gt;\n    &lt;table class="table" left="true" width="400"&gt;\n        &lt;thead&gt;\n            &lt;tr&gt;\n                &lt;th&gt;固定1&lt;/th&gt;\n                &lt;th&gt;固定2&lt;/th&gt;\n                &lt;th&gt;固定3&lt;/th&gt;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &#123;&#123;each list as item index&#125;&#125;\n                &lt;tr&gt;\n                    &lt;td&gt;&#123;&#123;=item.fixed1&#125;&#125;&lt;/td&gt;\n                    &lt;td&gt;&#123;&#123;=item.fixed2&#125;&#125;&lt;/td&gt;\n                    &lt;td&gt;&#123;&#123;=item.fixed3&#125;&#125;&lt;/td&gt;\n                &lt;/tr&gt;\n            &#123;&#123;/each&#125;&#125;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n    &lt;!-- 滚动列 --&gt;\n    &lt;table class="table" center="true" width="1200"&gt; \n        &lt;thead&gt;\n            &lt;tr&gt;\n                &#123;&#123;each groups as group&#125;&#125;\n                    &lt;th class="field-group" \n                        colspan="&#123;&#123;=group.fields.length&#125;&#125;"&gt;\n                        &lt;div class="group-name"&gt;\n                            &#123;&#123;=group.name&#125;&#125;\n                        &lt;/div&gt;\n                    &lt;/th&gt;\n                &#123;&#123;/each&#125;&#125;\n            &lt;/tr&gt;\n            &lt;tr&gt;\n                &#123;&#123;each groups as group&#125;&#125;\n                    &#123;&#123;each group.fields as field&#125;&#125;\n                    &lt;th class="field-item"&gt;\n                        指标&#123;&#123;=field&#125;&#125;\n                        &lt;span sort-trigger="&#123;&#123;=field&#125;&#125;"&gt;&lt;/span&gt;\n                    &lt;/th&gt;\n                    &#123;&#123;/each&#125;&#125;\n                &#123;&#123;/each&#125;&#125;\n            &lt;/tr&gt;\n        &lt;/thead&gt;\n        &lt;tbody&gt;\n            &#123;&#123;each list as item index&#125;&#125;\n                &lt;tr&gt;\n                    &#123;&#123;each groups as group&#125;&#125;\n                        &#123;&#123;each group.fields as field&#125;&#125;\n                        &lt;td&gt;&#123;&#123;=format(item[field])&#125;&#125;&lt;/td&gt;\n                        &#123;&#123;/each&#125;&#125;\n                    &#123;&#123;/each&#125;&#125;\n                &lt;/tr&gt;\n            &#123;&#123;/each&#125;&#125;\n        &lt;/tbody&gt;\n    &lt;/table&gt;\n&lt;/mx-table&gt;</pre></div><div mxa="_zs_galleryed:i" class="_zs_galleryk _zs_galleryd _zs_gallerye"><div mxs="_zs_galleryed:f" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+t+'done({id:2})" mx-view="mx-copy/index?copyNode='+d(y)+'_text_2"><span mxa="_zs_galleryed:j" class="_zs_galleryn">'+n(z)+'</span><i mxs="_zs_galleryed:e" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+i(y)+"_text_2\">\nlet Magix = require('magix');\nlet Sort = require('@../gallery/mx-table/sort');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    mixins: [Sort],\n    init() &#123;\n        this.observeLocation(['orderField', 'orderBy']);\n    &#125;,\n    render() &#123;\n        let that = this;\n\n        let groups = [&#123;\n            name: '组1',\n            fields: ['field1', 'field2']\n        &#125;, &#123;\n            name: '组2',\n            fields: ['field3', 'field4', 'field5', 'field6']\n        &#125;, &#123;\n            name: '组3',\n            fields: ['field7', 'field8', 'field9']\n        &#125;]\n        let len = 0;\n        groups.forEach(group =&gt; &#123;\n            len += group.fields.length;\n        &#125;)\n\n        that.updater.digest(&#123;\n            list: that.sort(that.getList()),\n            groups,\n            len,\n            format: (val) =&gt; &#123;\n                if (!val) &#123;\n                    return '-';\n                &#125;\n                return val;\n            &#125;\n        &#125;);\n    &#125;,\n    getList() &#123;\n        let list = [];\n        for (var i = 0; i &lt; 5; i++) &#123;\n            let empty = (i == 2 || i == 4);\n            let origin = &#123;\n                fixed1: i + '_1',\n                fixed2: i + '_2',\n                fixed3: i + '_3',\n                field1: empty ? 0 : (i + 9000),\n                field2: empty ? 0 : (i + 3000),\n                field3: empty ? 0 : (i + 1000),\n                field4: i + 412,\n                field5: i + 512,\n                field6: i + 612,\n                field7: i + 7,\n                field8: i + 8,\n                field9: i + 2\n            &#125;\n\n            let item = $.extend(true, &#123;&#125;, origin);\n            list.push(item);\n        &#125;\n        return list;\n    &#125;\n&#125;);\n            </pre></div></div></div>"},mixins:[n],init:function(){this.updater.set({viewId:this.id,text1:"复制代码",text2:"复制代码"}),this.observeLocation(["orderField","orderBy"])},render:function(){var e=[{name:"数字（忽略无值行）",fields:[{name:"数字列1",key:"field1"},{name:"数字列2",key:"field2"}]},{name:"字符串排序（忽略无值行 + 忽略大小写）",fields:[{name:"英文",key:"field3"},{name:"中文",key:"field4"}]}],t=0;e.forEach(function(e){t+=e.fields.length});var l=[{fixed1:"1_1",fixed2:"1_2",fixed3:"1_3",field1:9e3,field2:3e3,field3:"Abc",field4:"中文"},{fixed1:"2_1",fixed2:"2_2",fixed3:"2_3",field1:9001,field2:void 0,field3:"dsas",field4:"测试"},{fixed1:"3_1",fixed2:"3_2",fixed3:"3_3",field1:9004,field2:2990,field3:"acc",field4:""},{fixed1:"4_1",fixed2:"4_2",fixed3:"4_3",field1:null,field2:3010,field3:"GSBa",field4:"你好"},{fixed1:"5_1",fixed2:"5_2",fixed3:"5_3",field1:9051,field2:3e3,field3:"",field4:"随机"}];this.updater.digest({list:this.sort(l),groups:e,len:t,format:function(e){return e||"-"}})}})});