define("mx-dropdown/__test__/20",["magix","__test__/example","$","../multiple","mx-copy/index","__test__/hl"],(e,l,t)=>{e("../multiple"),e("mx-copy/index"),e("__test__/hl");e("magix");var i=e("__test__/example");e("$");t.exports=i.extend({tmpl:function(e,l,t,i,a,r,n,s){if(t||(t=e),!a){var o={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},_=/[&<>"'`]/g,d=function(e){return"&"+o[e]+";"};a=function(e){return""+(null==e?"":e)},i=function(e){return a(e).replace(_,d)}}if(!r){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return m[e]},c=/[!')(*]/g;r=function(e){return encodeURIComponent(a(e)).replace(c,x)}}if(!s){var g=/[\\'"]/g;s=function(e){return a(e).replace(g,"\\$&")}}var p="",u=e.viewId,v=e.text1;p+='<div mxa="_zs_gallerya3:_" class="_zs_galleryh"><div mxa="_zs_gallerya3:a" class="_zs_galleryk"><div mxs="_zs_gallerya3:_" class="mb20 clearfix lh22"><div class="fl color-9">以下示例：</div><div class="fl"><div>简单分组</div><div>选中上限max=5，此时全选为选择top max</div></div></div><div mxa="_zs_gallerya3:b" class="w200" mx-view="mx-dropdown/multiple?max=5&searchbox=true&height=250"><i mxs="_zs_gallerya3:a" group="true" class="none">第一组</i>';for(var f=0;f<4;f+=1)p+='<i value="'+i(f)+'" class="none">'+i(f)+"</i>";p+='<i mxs="_zs_gallerya3:b" group="true" class="none">第二组</i>';for(f=10;f<20;f+=1)p+='<i value="'+i(f)+'" class="none">'+i(f)+"</i>";return p+='</div></div><div mxa="_zs_gallerya3:c" class="_zs_galleryl"><div mxs="_zs_gallerya3:c" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(u)+'_text_1"><span mxa="_zs_gallerya3:d" class="_zs_galleryo">'+a(v)+'</span><i mxs="_zs_gallerya3:d" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+i(u)+'_text_1">\n&lt;mx-dropdown.multiple class="w200"\n    max="5"\n    searchbox="true"\n    height="250"&gt;\n    &lt;mx-dropdown.item group="true"&gt;第一组&lt;/mx-dropdown.item&gt;\n    &#123;&#123;for(let i=0;i&lt;4;i+=1)&#125;&#125;\n    &lt;mx-dropdown.item value="&#123;&#123;=i&#125;&#125;"&gt;&#123;&#123;=i&#125;&#125;&lt;/mx-dropdown.item&gt;\n    &#123;&#123;/for&#125;&#125;\n    &lt;mx-dropdown.item group="true"&gt;第二组&lt;/mx-dropdown.item&gt;\n    &#123;&#123;for(let i=10;i&lt;20;i+=1)&#125;&#125;\n    &lt;mx-dropdown.item value="&#123;&#123;=i&#125;&#125;"&gt;&#123;&#123;=i&#125;&#125;&lt;/mx-dropdown.item&gt;\n    &#123;&#123;/for&#125;&#125;\n&lt;/mx-dropdown.multiple&gt;\n        </pre></div></div>'},render:function(){this.updater.digest()}})});