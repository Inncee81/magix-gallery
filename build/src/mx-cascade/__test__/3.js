define("mx-cascade/__test__/3",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,a,l)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix").Vframe;var t=e("__test__/example");e("$");l.exports=t.extend({tmpl:function(e,a,l,t,n,u,x,v){if(l||(l=e),!n){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},p=/[&<>"'`]/g,_=function(e){return"&"+s[e]+";"};n=function(e){return""+(null==e?"":e)},t=function(e){return n(e).replace(p,_)}}if(!u){var i={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},r=function(e){return i[e]},c=/[!')(*]/g;u=function(e){return encodeURIComponent(n(e)).replace(c,r)}}if(!v){var d=/[\\'"]/g;v=function(e){return n(e).replace(d,"\\$&")}}x||(x=function(e,a,l,t){for(t=e[V];--t;)if(e[l=V+t]===a)return l;return e[l=V+e[V]++]=a,l});var V="",m="",o=e.viewId,g=e.text1;return m+='<div mxa="_zs_galleryae:_" class="_zs_galleryg"><div mxa="_zs_galleryae:a" class="_zs_galleryj"><div mxs="_zs_galleryae:_" class="mb15 clearfix"><div class="fl color-9">以下示例：</div><div class="fl">禁止选中</div></div><div class="w200" mx-view="mx-cascade/index?disabled=true&list='+x(l,[{value:11,pValue:"",text:"上海"},{value:12,pValue:"",text:"江苏"},{value:13,pValue:"",text:"浙江"},{value:14,pValue:"",text:"北京"},{value:15,pValue:"",text:"四川"},{value:121,pValue:12,text:"南京"},{value:122,pValue:12,text:"苏州"},{value:123,pValue:12,text:"南通"},{value:131,pValue:13,text:"杭州"},{value:132,pValue:13,text:"宁波"},{value:133,pValue:13,text:"温州"},{value:134,pValue:13,text:"嘉兴"},{value:135,pValue:13,text:"舟山"},{value:136,pValue:13,text:"台州"},{value:137,pValue:13,text:"湖州"},{value:1311,pValue:131,text:"余杭区"},{value:1312,pValue:131,text:"西湖区"},{value:1313,pValue:131,text:"上城区"},{value:1314,pValue:131,text:"下城区"},{value:1315,pValue:131,text:"江干区"},{value:1316,pValue:131,text:"拱墅区"}])+'&selected=1312"></div></div><div mxa="_zs_galleryae:b" class="_zs_galleryk"><div mxs="_zs_galleryae:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode='+u(o)+'_text_1"><span mxa="_zs_galleryae:c" class="_zs_galleryn">'+n(g)+'</span><i mxs="_zs_galleryae:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+t(o)+"_text_1\">\n&lt;mx-cascade class=\"w200\"\n    disabled=\"true\"\n    list=\"&#123;&#123;@[&#123;\n        value: 11,\n        pValue: '',\n        text: '上海'\n    &#125;, &#123;\n        value: 12,\n        pValue: '',\n        text: '江苏'\n    &#125;, &#123;\n        value: 13,\n        pValue: '',\n        text: '浙江'\n    &#125;, &#123;\n        value: 14,\n        pValue: '',\n        text: '北京'\n    &#125;, &#123;\n        value: 15,\n        pValue: '',\n        text: '四川'\n    &#125;, &#123;\n        value: 121,\n        pValue: 12,\n        text: '南京'\n    &#125;, &#123;\n        value: 122,\n        pValue: 12,\n        text: '苏州'\n    &#125;, &#123;\n        value: 123,\n        pValue: 12,\n        text: '南通'\n    &#125;, &#123;\n        value: 131,\n        pValue: 13,\n        text: '杭州'\n    &#125;, &#123;\n        value: 132,\n        pValue: 13,\n        text: '宁波'\n    &#125;, &#123;\n        value: 133,\n        pValue: 13,\n        text: '温州'\n    &#125;, &#123;\n        value: 134,\n        pValue: 13,\n        text: '嘉兴'\n    &#125;, &#123;\n        value: 135,\n        pValue: 13,\n        text: '舟山'\n    &#125;, &#123;\n        value: 136,\n        pValue: 13,\n        text: '台州'\n    &#125;, &#123;\n        value: 137,\n        pValue: 13,\n        text: '湖州'\n    &#125;, &#123;\n        value: 1311,\n        pValue: 131,\n        text: '余杭区'\n    &#125;, &#123;\n        value: 1312,\n        pValue: 131,\n        text: '西湖区'\n    &#125;, &#123;\n        value: 1313,\n        pValue: 131,\n        text: '上城区'\n    &#125;, &#123;\n        value: 1314,\n        pValue: 131,\n        text: '下城区'\n    &#125;, &#123;\n        value: 1315,\n        pValue: 131,\n        text: '江干区'\n    &#125;, &#123;\n        value: 1316,\n        pValue: 131,\n        text: '拱墅区'\n    &#125;]&#125;&#125;\"\n    selected=\"1312\"&gt;&lt;/mx-cascade&gt;\n        </pre></div></div>"},render:function(){this.updater.digest()}})});