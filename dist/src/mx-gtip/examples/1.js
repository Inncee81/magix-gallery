define("mx-gtip/examples/1",["magix","examples/example","mx-gtip/index","$","mx-copy/index","examples/hl"],(i,s,e)=>{i("mx-copy/index"),i("examples/hl");i("magix");var l=i("examples/example"),n=i("mx-gtip/index");i("$");e.exports=l.extend({tmpl:function(i,s,e,l,n,a,t,r){if(e||(e=i),!n){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},p=/[&<>"'`]/g,g=function(i){return"&"+c[i]+";"};n=function(i){return""+(null==i?"":i)},l=function(i){return n(i).replace(p,g)}}if(!a){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(i){return o[i]},d=/[!')(*]/g;a=function(i){return encodeURIComponent(n(i)).replace(d,x)}}if(!r){var m=/[\\'"]/g;r=function(i){return n(i).replace(m,"\\$&")}}var h="",_=i.viewId,v=i.text1,y=i.text2;return h+='<div mxa="_zs_gallerycJ:_" class="_zs_galleryg"><div mxs="_zs_gallerycJ:_" class="_zs_galleryj"><div class="mb20"><div class="mb10"><span class="color-9">以下示例：</span>使用gtip(msg [, options])，<span class="color-brand">只保留一个实例</span></div><pre>\n{\n    msg: \'提示内容\',\n    options: {\n        timeout: \'延时自动关闭，设置的时候timeout后自动关闭，不设置的时候显示关闭按钮手动关闭\', \n        type: \'error：红色错误类型提示；warn：黄色警告类型提示；highlight：品牌色图标强调提示；common：默认黑底透明度提示\',\n        styles: { //驼峰，直接覆盖样式，默认内容如下：\n            position: \'fixed\',\n            top: \'0px\',\n            left: \'0px\',\n            width: \'100%\'  \n        },\n        singleton: 是否为单实例，默认true，singleton=false的可与其他gtip共存，否则当前view只有一个gtip\n    }\n}\n            </pre></div><div class="mb20"><a href="javascript:;" mx-click="'+s+'show1()" class="link-brand">默认顶通，手动关闭</a></div><div class="mb20"><a href="javascript:;" mx-click="'+s+'show2()" class="link-brand">error顶通（错误提示），手动关闭</a></div><div class="mb20"><a href="javascript:;" mx-click="'+s+'show3()" class="link-brand">warn顶通（警告），1s自动关闭</a></div><div class="mb20"><a href="javascript:;" mx-click="'+s+'show4()" class="link-brand">highlight顶通（品牌色强调），手动关闭</a></div></div><div mxa="_zs_gallerycJ:a" class="clearfix"><div mxa="_zs_gallerycJ:b" class="_zs_galleryk _zs_gallery_"><div mxs="_zs_gallerycJ:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+s+'done({id:1})" mx-view="mx-copy/index?copyNode='+a(_)+'_text_1"><span mxa="_zs_gallerycJ:c" class="_zs_galleryn">'+n(v)+'</span><i mxs="_zs_gallerycJ:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+l(_)+'_text_1">\n&lt;a href="javascript:;" mx-click="show1()" class="link-brand"&gt;默认顶通，手动关闭&lt;/a&gt;\n\n&lt;a href="javascript:;" mx-click="show2()" class="link-brand"&gt;error顶通（错误提示），手动关闭&lt;/a&gt;\n\n&lt;a href="javascript:;" mx-click="show3()" class="link-brand"&gt;warn顶通（警告），1s自动关闭&lt;/a&gt;\n\n&lt;a href="javascript:;" mx-click="show4()" class="link-brand"&gt;highlight顶通（品牌色强调），手动关闭&lt;/a&gt;\n            </pre></div><div mxa="_zs_gallerycJ:d" class="_zs_galleryk _zs_gallerye _zs_gallerya"><div mxs="_zs_gallerycJ:c" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+s+'done({id:2})" mx-view="mx-copy/index?copyNode='+a(_)+'_text_2"><span mxa="_zs_gallerycJ:e" class="_zs_galleryn">'+n(y)+'</span><i mxs="_zs_gallerycJ:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+l(_)+"_text_2\">\nlet Magix = require('magix');\nlet GTip = require('@../../mx-gtip/index');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() &#123;\n        this.updater.digest();\n    &#125;,\n    'show1&lt;click&gt;'()&#123;\n        this.gtip('默认顶通，手动关闭');\n    &#125;,\n    'show2&lt;click&gt;'()&#123;\n        this.gtip('error顶通（错误提示），手动关闭', &#123;\n            type: 'error'\n        &#125;);\n    &#125;,\n    'show3&lt;click&gt;'()&#123;\n        this.gtip('warn顶通（警告），1s自动关闭', &#123;\n            type: 'warn',\n            timeout: 1000,\n            styles: &#123;\n                width: 'auto',\n                top: '80px',\n                right: '40px',\n                left: 'auto',\n                borderRadius: '8px'\n            &#125;\n        &#125;);\n    &#125;,\n    'show4&lt;click&gt;'()&#123;\n        this.gtip('highlight顶通（品牌色强调），手动关闭', &#123;\n            type: 'highlight'\n        &#125;);\n    &#125;\n&#125;);\n            </pre></div></div></div>"},mixins:[n],render:function(){this.updater.digest()},"show1<click>":function(){this.gtip("默认顶通，手动关闭")},"show2<click>":function(){this.gtip("error顶通（错误提示），手动关闭",{type:"error"})},"show3<click>":function(){this.gtip("warn顶通（警告），1s自动关闭",{type:"warn",timeout:1e3,styles:{width:"auto",top:"80px",right:"40px",left:"auto",borderRadius:"8px"}})},"show4<click>":function(){this.gtip("highlight顶通（品牌色强调），手动关闭",{type:"highlight"})}})});