define("mx-suggest/__test__/5",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,t,l)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var n=e("__test__/example");e("$");l.exports=n.extend({tmpl:function(e,t,l,n,s,_,a,i){if(l||(l=e),!s){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,d=function(e){return"&"+r[e]+";"};s=function(e){return""+(null==e?"":e)},n=function(e){return s(e).replace(x,d)}}if(!_){var u={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return u[e]},v=/[!')(*]/g;_=function(e){return encodeURIComponent(s(e)).replace(v,c)}}if(!i){var g=/[\\'"]/g;i=function(e){return s(e).replace(g,"\\$&")}}a||(a=function(e,t,l,n){for(n=e[m];--n;)if(e[l=m+n]===t)return l;return e[l=m+e[m]++]=t,l});var m="",o="",p=e.viewId,y=e.text1;return o+='<div mxa="_zs_galleryd}:_" class="_zs_galleryg"><div mxa="_zs_galleryd}:a" class="_zs_galleryj"><div mx-view="mx-suggest/index?list='+a(l,[{text:"test1",value:4},{text:"test2",value:3},{text:"test3",value:2},{text:"test4",value:1}])+'&type=all"></div></div><div mxa="_zs_galleryd}:b" class="_zs_galleryk"><div mxs="_zs_galleryd}:_" class="_zs_galleryi">同时在value和text中搜索关键词</div><div class="_zs_galleryl" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+_(p)+'_text_1"><span mxa="_zs_galleryd}:c" class="_zs_galleryn">'+s(y)+'</span><i mxs="_zs_galleryd}:a" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+n(p)+"_text_1\">\n&lt;mx-suggest \n    list=\"&#123;&#123;@[&#123;\n        value: 'test1',\n        text: 4\n    &#125;, &#123;\n        value: 'test12',\n        text: 3\n    &#125;, &#123;\n        value: 'abc1',\n        text: 2\n    &#125;, &#123;\n        value: 'abc2',\n        text: 1\n    &#125;]&#125;&#125;\"\n    type=\"all\"/&gt;</pre></div></div>"},render:function(){this.updater.digest()}})});