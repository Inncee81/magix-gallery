define("mx-switch/__test__/1",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,t,s)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var a=e("__test__/example");e("$");s.exports=a.extend({tmpl:function(e,t,s,a,n,l,i,_){if(s||(s=e),!n){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,c=function(e){return"&"+r[e]+";"};n=function(e){return""+(null==e?"":e)},a=function(e){return n(e).replace(d,c)}}if(!l){var g={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return g[e]},m=/[!')(*]/g;l=function(e){return encodeURIComponent(n(e)).replace(m,x)}}if(!_){var p=/[\\'"]/g;_=function(e){return n(e).replace(p,"\\$&")}}var o="",v=e.state,u=e.viewId,y=e.text1,h=e.text2;return o+='<div mxa="_zs_galleryd^:_" class="_zs_galleryg"><div mxa="_zs_galleryd^:a" class="_zs_galleryj clearfix"><span class="fl mr20 mt5" mx-change="'+t+'toggle()" mx-view="mx-switch/index?state='+l(v)+'"></span><a mxs="_zs_galleryd^:_" href="javascript:;" class="btn btn-brand fl mr20" mx-click="'+t+'change()">切换状态</a><span mxa="_zs_galleryd^:b" class="lh32 fl">当前状态：'+a(v)+'</span></div><div mxa="_zs_galleryd^:c" class="_zs_galleryk"><div mxs="_zs_galleryd^:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+l(u)+'_text_1"><span mxa="_zs_galleryd^:d" class="_zs_galleryn">'+n(y)+'</span><i mxs="_zs_galleryd^:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(u)+'_text_1">\n&lt;mx-switch class="mr20"\n    state="&#123;&#123;=state&#125;&#125;"\n    mx-change="toggle()"/&gt;\n\n&lt;a href="javascript:;" class="btn btn-brand" \n    mx-click="change()"&gt;切换状态&lt;/a&gt;</pre></div><div mxa="_zs_galleryd^:e" class="_zs_galleryk"><div mxs="_zs_galleryd^:c" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+t+'done({id:2})" mx-view="mx-copy/index?copyNode='+l(u)+'_text_2"><span mxa="_zs_galleryd^:f" class="_zs_galleryn">'+n(h)+'</span><i mxs="_zs_galleryd^:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(u)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        this.updater.digest(&#123;\n            state: true\n        &#125;);\n    &#125;,\n    'toggle&lt;change&gt;' (event) &#123;\n        // event.state 当前开还是关\n        // true 开，false关\n        this.updater.digest(&#123;\n            state: event.state\n        &#125;);\n    &#125;,\n    'change&lt;click&gt;'(event)&#123;\n        let state = this.updater.get('state');\n        this.updater.digest(&#123;\n            state: !state\n        &#125;);\n&#125;\n&#125;);</pre></div></div>"},render:function(){this.updater.digest({state:!0})},"toggle<change>":function(e){this.updater.digest({state:e.state})},"change<click>":function(e){var t=this.updater.get("state");this.updater.digest({state:!t})}})});