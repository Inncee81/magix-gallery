define("mx-taginput/examples/2",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,n,a)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var t=e("examples/example");e("$");a.exports=t.extend({tmpl:function(e,n,a,t,l,i,s,r){if(a||(a=e),!l){var x={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},m=/[&<>"'`]/g,d=function(e){return"&"+x[e]+";"};l=function(e){return""+(null==e?"":e)},t=function(e){return l(e).replace(m,d)}}if(!i){var p={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},_=function(e){return p[e]},c=/[!')(*]/g;i=function(e){return encodeURIComponent(l(e)).replace(c,_)}}if(!r){var u=/[\\'"]/g;r=function(e){return l(e).replace(u,"\\$&")}}s||(s=function(e,n,a,t){for(t=e[g];--t;)if(e[a=g+t]===n)return a;return e[a=g+e[g]++]=n,a});var g="",v="",f=e.viewId,o=e.text1;return v+='<div mxa="_zs_galleryfp:_" class="_zs_galleryg"><div mxa="_zs_galleryfp:a" class="_zs_galleryj"><div class="w300" mx-view="mx-taginput/index?list='+s(a,[{name:"test1",id:1},{name:"test2",id:2},{name:"test3",id:3}])+'&textKey=name&valueKey=id"></div></div><div mxa="_zs_galleryfp:b" class="_zs_galleryk"><div mxs="_zs_galleryfp:_" class="_zs_galleryi">自定义&nbsp;list-text&nbsp;和&nbsp;list-value</div><div class="_zs_galleryl" mx-success="'+n+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(f)+'_text_1"><span mxa="_zs_galleryfp:c" class="_zs_galleryn">'+l(o)+'</span><i mxs="_zs_galleryfp:a" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+t(f)+'_text_1">\n&lt;mx-taginput class="w300"\n    list="&#123;&#123;@[&#123;\n        name: \'test1\',\n        id: 1\n    &#125;, &#123;\n        name: \'test2\',\n        id: 2\n    &#125;, &#123;\n        name: \'test3\',\n        id: 3\n    &#125;]&#125;&#125;"\n    text-key="name"\n    value-key="id"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});