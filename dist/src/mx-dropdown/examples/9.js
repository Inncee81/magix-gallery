define("mx-dropdown/examples/9",["magix","examples/example","$","../multiple","mx-copy/index","examples/hl"],(e,l,a)=>{e("../multiple"),e("mx-copy/index"),e("examples/hl");e("magix");var t=e("examples/example");e("$");a.exports=t.extend({tmpl:function(e,l,a,t,n,s,i,r){if(a||(a=e),!n){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},m=/[&<>"'`]/g,x=function(e){return"&"+d[e]+";"};n=function(e){return""+(null==e?"":e)},t=function(e){return n(e).replace(m,x)}}if(!s){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return c[e]},u=/[!')(*]/g;s=function(e){return encodeURIComponent(n(e)).replace(u,p)}}if(!r){var _=/[\\'"]/g;r=function(e){return n(e).replace(_,"\\$&")}}i||(i=function(e,l,a,t){for(t=e[o];--t;)if(e[a=o+t]===l)return a;return e[a=o+e[o]++]=l,a});var o="",v="",g=e.viewId,y=e.text1;return v+='<div mxa="_zs_gallerybt:_" class="_zs_galleryg"><div mxa="_zs_gallerybt:a" class="_zs_galleryj"><div class="w200" mx-view="mx-dropdown/multiple?list='+i(a,[{id:1,name:"选项1"},{id:2,name:"选项2"}])+'&textKey=name&valueKey=id"></div></div><div mxa="_zs_gallerybt:b" class="_zs_galleryk"><div mxs="_zs_gallerybt:_" class="_zs_galleryi">自定义&nbsp;text-key&nbsp;和&nbsp;value-key</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(g)+'_text_1"><span mxa="_zs_gallerybt:c" class="_zs_galleryn">'+n(y)+'</span><i mxs="_zs_gallerybt:a" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+t(g)+'_text_1">\n&lt;mx-dropdown.multiple class="w200"\n    list="&#123;&#123;@[&#123;id:1,name:\'选项1\'&#125;,&#123;id:2,name:\'选项2\'&#125;]&#125;&#125;"\n    text-key="name"\n    value-key="id"/&gt;</pre></div></div>'},render:function(){for(var e=[],l=0;l<6;l++)e.push({text:"多选"+(l+1),value:l+1});this.updater.digest({list:e,selected:"1,2,3"})},"select<change>":function(e){this.updater.digest({selected:e.values})}})});