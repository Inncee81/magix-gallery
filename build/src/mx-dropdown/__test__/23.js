define("mx-dropdown/__test__/23",["magix","__test__/example","$","../bd","mx-copy/index","__test__/hl"],(e,t,n)=>{e("../bd"),e("mx-copy/index"),e("__test__/hl");e("magix");var a=e("__test__/example");e("$");n.exports=a.extend({tmpl:function(e,t,n,a,l,s,_,r){if(n||(n=e),!l){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},u=/[&<>"'`]/g,x=function(e){return"&"+i[e]+";"};l=function(e){return""+(null==e?"":e)},a=function(e){return l(e).replace(u,x)}}if(!s){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},v=function(e){return d[e]},p=/[!')(*]/g;s=function(e){return encodeURIComponent(l(e)).replace(p,v)}}if(!r){var o=/[\\'"]/g;r=function(e){return l(e).replace(o,"\\$&")}}_||(_=function(e,t,n,a){for(a=e[c];--a;)if(e[n=c+a]===t)return n;return e[n=c+e[c]++]=t,n});var c="",m="",g=e.viewId,y=e.text1;return m+='<div mxa="_zs_gallerya%:_" class="_zs_galleryg"><div mxa="_zs_gallerya%:a" class="_zs_galleryj"><div mxs="_zs_gallerya%:_" class="mb20"><span class="color-9">以下示例：</span>分组 + 单选</div><div class="w200" mx-view="mx-dropdown/bd?parents='+_(n,[{value:1,text:"第一组"},{value:2,text:"第二组"}])+"&list="+_(n,[{value:1,text:"test",pValue:1},{value:2,text:"TestABC",pValue:1},{value:3,text:"Another",pValue:2},{value:4,text:"选项1",pValue:1},{value:5,text:"选项2",pValue:2}])+'"></div></div><div mxa="_zs_gallerya%:b" class="_zs_galleryk"><div mxs="_zs_gallerya%:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(g)+'_text_1"><span mxa="_zs_gallerya%:c" class="_zs_galleryn">'+l(y)+'</span><i mxs="_zs_gallerya%:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(g)+"_text_1\">\n&lt;mx-dropdown.bd class=\"w200\" \n    parents=\"&#123;&#123;@[&#123;\n        value:1,\n        text:'第一组'\n    &#125;,&#123;\n        value:2,\n        text:'第二组'\n    &#125;]&#125;&#125;\"\n    list=\"&#123;&#123;@[&#123;\n        value:1,\n        text:'test',\n        pValue: 1\n    &#125;,&#123;\n        value:2,\n        text:'TestABC',\n        pValue: 1\n    &#125;,&#123;\n        value:3,\n        text:'Another',\n        pValue: 2\n    &#125;,&#123;\n        value:4,\n        text:'选项1',\n        pValue: 1\n    &#125;,&#123;\n        value:5,\n        text:'选项2',\n        pValue: 2\n    &#125;]&#125;&#125;\"&gt;\n&lt;/mx-dropdown.bd&gt;\n        </pre></div></div>"},render:function(){this.updater.digest()}})});