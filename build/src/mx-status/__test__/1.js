define("mx-status/__test__/1",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,s,n)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var l=e("__test__/example");e("$");n.exports=l.extend({tmpl:function(e,s,n,l,t,a,i,c){if(n||(n=e),!t){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},_=/[&<>"'`]/g,d=function(e){return"&"+r[e]+";"};t=function(e){return""+(null==e?"":e)},l=function(e){return t(e).replace(_,d)}}if(!a){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return o[e]},v=/[!')(*]/g;a=function(e){return encodeURIComponent(t(e)).replace(v,x)}}if(!c){var m=/[\\'"]/g;c=function(e){return t(e).replace(m,"\\$&")}}i||(i=function(e,s,n,l){for(l=e[g];--l;)if(e[n=g+l]===s)return n;return e[n=g+e[g]++]=s,n});var g="",u="",p=e.cur,y=e.opers,f=e.viewId,z=e.text1,h=e.text2;return u+='<div mxv mxa="_zs_gallerydP:_" class="_zs_galleryg"><div mxv mxa="_zs_gallerydP:a" class="_zs_galleryj"><div mxs="_zs_gallerydP:_" class="mb20 clearfix"><div class="fl color-9">以下示例：</div><div class="fl"><div>纯操作项，hover显示操作项</div><div>当前选中项排在第一个</div></div></div><div mxv><span mxa="_zs_gallerydP:b" class="mr40"><span mxs="_zs_gallerydP:a" class="color-9">当前选中项：</span>'+l(p.text)+"（"+l(p.value)+'）</span><div mxv="opers" mx-change="'+s+'change()" mx-view="mx-status/index?opers='+i(n,y)+"&selected="+a(p.value)+'"></div></div></div><div mxa="_zs_gallerydP:c" class="_zs_galleryk"><div mxs="_zs_gallerydP:b" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+s+'done({id:1})" mx-view="mx-copy/index?copyNode='+a(f)+'_text_1"><span mxa="_zs_gallerydP:d" class="_zs_galleryn">'+t(z)+'</span><i mxs="_zs_gallerydP:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(f)+'_text_1">\n&lt;mx-status \n    opers="&#123;&#123;@opers&#125;&#125;" \n    selected="&#123;&#123;=cur.value&#125;&#125;"\n    mx-change="change()"/&gt;</pre></div><div mxa="_zs_gallerydP:e" class="_zs_galleryk"><div mxs="_zs_gallerydP:d" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+s+'done({id:2})" mx-view="mx-copy/index?copyNode='+a(f)+'_text_2"><span mxa="_zs_gallerydP:f" class="_zs_galleryn">'+t(h)+'</span><i mxs="_zs_gallerydP:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(f)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        let opers = [&#123;\n            value: 0,\n            text: '暂停投放',\n            icon: '&lt;i class=\"mc-iconfont\"&gt;&#38;&#35;xe67f;&lt;/i&gt;',\n            color: '#a40100'\n        &#125;, &#123;\n            value: 1,\n            text: '正在投放',\n            icon: '&lt;i class=\"mc-iconfont\"&gt;&#38;&#35;xe683;&lt;/i&gt;',\n            color: '#51a300'\n        &#125;, &#123;\n            value: 9,\n            text: '结束投放',\n            icon: '&lt;i class=\"mc-iconfont\"&gt;&#38;&#35;xe682;&lt;/i&gt;',\n            color: '#999999'\n        &#125;]\n\n        this.updater.digest(&#123;\n            opers,\n            cur: opers[1]\n        &#125;);\n    &#125;,\n    'change&lt;change&gt;'(e)&#123;\n        // e.status 完整的对象\n        //      value\n        //      text\n        this.updater.digest(&#123;\n            cur: e.status\n        &#125;);\n    &#125;\n&#125;);</pre></div></div>"},render:function(){var e=[{value:0,text:"暂停投放",icon:'<i class="mc-iconfont">&#xe67f;</i>',color:"#a40100"},{value:1,text:"正在投放",icon:'<i class="mc-iconfont">&#xe683;</i>',color:"#51a300"},{value:9,text:"结束投放",icon:'<i class="mc-iconfont">&#xe682;</i>',color:"#999999"}];this.updater.digest({opers:e,cur:e[1]})},"change<change>":function(e){this.updater.digest({cur:e.status})}})});