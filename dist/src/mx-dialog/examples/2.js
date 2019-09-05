define("mx-dialog/examples/2",["magix","mx-dialog/index","examples/example","$","mx-copy/index","examples/hl"],(e,n,l)=>{e("mx-copy/index"),e("examples/hl");e("magix");var i=e("mx-dialog/index"),a=e("examples/example");e("$");l.exports=a.extend({tmpl:function(e,n,l,i,a,t,s,r){if(l||(l=e),!a){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},m=/[&<>"'`]/g,o=function(e){return"&"+c[e]+";"};a=function(e){return""+(null==e?"":e)},i=function(e){return a(e).replace(m,o)}}if(!t){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return d[e]},_=/[!')(*]/g;t=function(e){return encodeURIComponent(a(e)).replace(_,x)}}if(!r){var g=/[\\'"]/g;r=function(e){return a(e).replace(g,"\\$&")}}var f="",v=e.viewId,p=e.text1,y=e.text2;return f+='<div mxa="_zs_galleryaR:_" class="_zs_galleryg"><div mxs="_zs_galleryaR:_" class="_zs_galleryj"><div class="mb20 clearfix"><div class="color-9 fl">二次确认浮层：</div><div class="fl"><div>mixins到view上，this.confirm()</div><div>默认无mask，宽度320，居中显示</div></div></div><div><a href="javascript:;" mx-click="'+n+'confirm1()" class="btn btn-brand">默认confirm</a><a href="javascript:;" mx-click="'+n+'confirm2()" class="btn btn-brand ml20">自定义confirm样式</a></div></div><div mxa="_zs_galleryaR:a" class="clearfix"><div mxa="_zs_galleryaR:b" class="_zs_galleryk _zs_gallery_"><div mxs="_zs_galleryaR:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+n+'done({id:1})" mx-view="mx-copy/index?copyNode='+t(v)+'_text_1"><span mxa="_zs_galleryaR:c" class="_zs_galleryn">'+a(p)+'</span><i mxs="_zs_galleryaR:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+i(v)+'_text_1">\n&lt;a href="javascript:;" \n    mx-click="confirm1()" \n    class="btn btn-brand"&gt;默认confirm&lt;/a&gt;\n\n&lt;a href="javascript:;" \n    mx-click="confirm2()" \n    class="btn btn-brand ml20"&gt;自定义confirm样式&lt;/a&gt;</pre></div><div mxa="_zs_galleryaR:d" class="_zs_galleryk _zs_gallerya _zs_gallerye"><div mxs="_zs_galleryaR:c" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+n+'done({id:2})" mx-view="mx-copy/index?copyNode='+t(v)+'_text_2"><span mxa="_zs_galleryaR:e" class="_zs_galleryn">'+a(y)+'</span><i mxs="_zs_galleryaR:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+i(v)+"_text_2\">\nlet Magix = require('magix');\nlet Dialog = require('@../index'); //mixins dialog\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    mixins: [Dialog],\n    render() &#123;\n        this.updater.digest();\n    &#125;,\n    'confirm1&lt;click&gt;'(e) &#123;\n        this.confirm(&#123;\n            title: '标题',\n            content: '测试内容'\n        &#125;)\n    &#125;,\n    'confirm2&lt;click&gt;'(e) &#123;\n            // this.confirm(viewOptions, dialogOptions);\n            //    viewOptions: {\n            //          title: '标题',\n            //          content: '内容',\n            //          enterText: '自定义确定按钮文案，默认确定',\n            //          cancelText: '自定义取消按钮文案，默认取消',\n            //          enterCallback: '确定按钮响应事件',\n            //          cancelCallback: '取消按钮响应事件'\n            //    }\n            //    dialogOptions: { //浮层样式覆盖\n            //          width:'宽度，默认320',\n            //          height:'高度',\n            //          modal: 'true（禁止滚动） or false（允许滚动），溢出是否允许滚动，默认false',\n            //          mask: 'true or false，是否有遮罩，默认false',\n            //          closable: 'true or false，是否有右上角关闭按钮，默认false',\n            //          left: '最终定位相对于屏幕左侧，默认居中',\n            //          top: '最终定位相对于屏幕高侧，默认居中'\n            //    }\n            title: '标题',\n            content: '测试内容',\n            enterText: '确认按钮文案',\n            cancelText: '取消按钮文案',\n            enterCallback: () => &#123;\n                console.log('确定按钮响应事件');\n            &#125;\n        &#125;, &#123;\n            width: 400,\n            mask: true\n        &#125;)\n    &#125;\n&#125;);\n            </pre></div></div></div>"},mixins:[i],render:function(){this.updater.digest()},"confirm1<click>":function(e){this.confirm({title:"标题",content:"测试内容"})},"confirm2<click>":function(e){this.confirm({title:"标题",content:"测试内容",enterText:"确认按钮文案",cancelText:"取消按钮文案",enterCallback:function(){}},{width:400,mask:!0})}})});