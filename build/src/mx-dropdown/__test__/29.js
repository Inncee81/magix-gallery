define("mx-dropdown/__test__/29",["magix","__test__/example","$","../bd","mx-copy/index","__test__/hl"],(e,t,l)=>{e("../bd"),e("mx-copy/index"),e("__test__/hl");e("magix");var a=e("__test__/example");e("$");l.exports=a.extend({tmpl:function(e,t,l,a,n,s,r,_){if(l||(l=e),!n){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},u=/[&<>"'`]/g,d=function(e){return"&"+i[e]+";"};n=function(e){return""+(null==e?"":e)},a=function(e){return n(e).replace(u,d)}}if(!s){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return x[e]},o=/[!')(*]/g;s=function(e){return encodeURIComponent(n(e)).replace(o,p)}}if(!_){var v=/[\\'"]/g;_=function(e){return n(e).replace(v,"\\$&")}}r||(r=function(e,t,l,a){for(a=e[c];--a;)if(e[l=c+a]===t)return l;return e[l=c+e[c]++]=t,l});var c="",m="",g=e.viewId,y=e.text1;return m+='<div mxa="_zs_gallerya%:_" class="_zs_galleryg"><div mxa="_zs_gallerya%:a" class="_zs_galleryj"><div mxs="_zs_gallerya%:_" class="mb20"><span class="color-9">以下示例：</span>多选部分选项禁用</div><div class="w200" mx-view="mx-dropdown/bd?multiple=true&searchbox=true&parents='+r(l,[{value:1,text:"第一组"},{value:2,text:"第二组"}])+"&list="+r(l,[{value:1,text:"test",disabled:!0,pValue:1},{value:2,text:"TestABC",pValue:1},{value:3,text:"Another",disabled:!0,pValue:2},{value:4,text:"选项1",pValue:1},{value:5,text:"选项2",pValue:2}])+'"></div></div><div mxa="_zs_gallerya%:b" class="_zs_galleryk"><div mxs="_zs_gallerya%:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(g)+'_text_1"><span mxa="_zs_gallerya%:c" class="_zs_galleryn">'+n(y)+'</span><i mxs="_zs_gallerya%:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(g)+"_text_1\">\n&lt;mx-dropdown.bd class=\"w200\" \n    multiple=\"true\"\n    searchbox=\"true\"\n    parents=\"&#123;&#123;@[&#123;\n        value:1,\n        text:'第一组'\n    &#125;,&#123;\n        value:2,\n        text:'第二组'\n    &#125;]&#125;&#125;\"\n    list=\"&#123;&#123;@[&#123;\n        value:1,\n        text:'test',\n        disabled: true,\n        pValue: 1\n    &#125;,&#123;\n        value:2,\n        text:'TestABC',\n        pValue: 1\n    &#125;,&#123;\n        value:3,\n        text:'Another',\n        disabled: true,\n        pValue: 2\n    &#125;,&#123;\n        value:4,\n        text:'选项1',\n        pValue: 1\n    &#125;,&#123;\n        value:5,\n        text:'选项2',\n        pValue: 2\n    &#125;]&#125;&#125;\"&gt;\n&lt;/mx-dropdown.bd&gt;\n        </pre></div></div>"},render:function(){this.updater.digest()}})});