define("mx-suggest/__test__/4",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,n,t)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var s=e("__test__/example");e("$");t.exports=s.extend({tmpl:function(e,n,t,s,i,a,l,_){if(t||(t=e),!i){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,m=function(e){return"&"+r[e]+";"};i=function(e){return""+(null==e?"":e)},s=function(e){return i(e).replace(d,m)}}if(!a){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return x[e]},g=/[!')(*]/g;a=function(e){return encodeURIComponent(i(e)).replace(g,c)}}if(!_){var u=/[\\'"]/g;_=function(e){return i(e).replace(u,"\\$&")}}l||(l=function(e,n,t,s){for(s=e[o];--s;)if(e[t=o+s]===n)return t;return e[t=o+e[o]++]=n,t});var o="",v="",p=e.viewId,y=e.text1;return v+='<div mxa="_zs_gallerydW:_" class="_zs_galleryh"><div mxa="_zs_gallerydW:a" class="_zs_galleryk"><div mx-view="mx-suggest/index?list='+l(t,[{name:"test1",id:1},{name:"test12",id:2},{name:"abc1",id:3},{name:"abc2",id:4}])+'&listText=name&listValue=id"></div></div><div mxa="_zs_gallerydW:b" class="_zs_galleryl"><div mxs="_zs_gallerydW:_" class="_zs_galleryj">自定义&nbsp;list-text&nbsp;和&nbsp;list-value</div><div class="_zs_gallerym" mx-success="'+n+'done({id:1})" mx-view="mx-copy/index?copyNode='+a(p)+'_text_1"><span mxa="_zs_gallerydW:c" class="_zs_galleryo">'+i(y)+'</span><i mxs="_zs_gallerydW:a" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+s(p)+"_text_1\">\n&lt;mx-suggest \n    list=\"&#123;&#123;@[&#123;\n        name: 'test1',\n        id: 1\n    &#125;, &#123;\n        name: 'test12',\n        id: 2\n    &#125;, &#123;\n        name: 'abc1',\n        id: 3\n    &#125;, &#123;\n        name: 'abc2',\n        id: 4\n    &#125;]&#125;&#125;\"\n    list-text=\"name\"\n    list-value=\"id\"/&gt;</pre></div></div>"},render:function(){this.updater.digest()}})});