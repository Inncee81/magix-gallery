define("mx-dialog/__test__/5",["magix","mx-dialog/index","__test__/example","$","mx-copy/index","__test__/hl"],(a,l,e)=>{a("mx-copy/index"),a("__test__/hl");var s=a("magix"),t=a("mx-dialog/index"),r=a("__test__/example");a("$");s.applyStyle("_zs_galleryC",'._zs_gallerydK,._zs_gallerydL{position:fixed;left:0;width:100%;height:100%;transition:all var(--duration)}._zs_gallerydK{opacity:0;top:0;background-color:rgba(0,0,0,.4)}._zs_gallerydK._zs_gallerydM{opacity:1}._zs_gallerydN{position:absolute;border-radius:var(--border-radius);background-color:#fff;box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerydN ._zs_gallerydO{position:relative;word-break:break-all}._zs_gallerydN ._zs_gallerydP{position:absolute;top:16px;right:24px;width:26px;height:26px;z-index:20;border-radius:50%;background:transparent;color:#ccc;text-align:center}._zs_gallerydN ._zs_gallerydP ._zs_gallerydQ{font-size:18px;font-weight:700;line-height:26px}._zs_gallerydN ._zs_gallerydP:focus,._zs_gallerydN ._zs_gallerydP:hover{background-color:#999;color:#fff}._zs_gallerydN._zs_gallerydR{border-radius:0}@-webkit-keyframes _zs_gallerya{0%{transform:translate(0)}25%{transform:translateY(2px)}50%{transform:translate(0)}75%{transform:translateY(-2px)}to{transform:translate(0)}}@keyframes _zs_gallerya{0%{transform:translate(0)}25%{transform:translateY(2px)}50%{transform:translate(0)}75%{transform:translateY(-2px)}to{transform:translate(0)}}@-webkit-keyframes _zs_galleryb{0%{transform:translate(0)}25%{transform:translateY(-2px)}50%{transform:translate(0)}75%{transform:translateY(2px)}to{transform:translate(0)}}@keyframes _zs_galleryb{0%{transform:translate(0)}25%{transform:translateY(-2px)}50%{transform:translate(0)}75%{transform:translateY(2px)}to{transform:translate(0)}}._zs_gallerydS,._zs_gallerydS:after,._zs_gallerydS:before{display:inline-block;width:4px;height:4px;background-color:#fff;vertical-align:middle;border-radius:50%}._zs_gallerydS{position:relative;margin:0 8px}._zs_gallerydS:after{content:" ";position:absolute;left:-8px;top:0;-webkit-animation:_zs_gallerya .6s linear 0s infinite;animation:_zs_gallerya .6s linear 0s infinite}._zs_gallerydS:before{content:" ";position:absolute;left:8px;top:0;-webkit-animation:_zs_galleryb .6s linear 0s infinite;animation:_zs_galleryb .6s linear 0s infinite}._zs_gallerydT{position:relative}._zs_gallerydT ._zs_gallerydU{opacity:1;position:relative;z-index:1}._zs_gallerydT ._zs_gallerydV{display:none;position:absolute;top:0;left:0;z-index:2;width:100%;height:100%}._zs_gallerydT._zs_gallerydW ._zs_gallerydU{opacity:0}._zs_gallerydT._zs_gallerydW ._zs_gallerydV{display:inline}'),e.exports=r.extend({tmpl:function(a,l,e,s,t,r,i,n){if(e||(e=a),!t){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,d=function(a){return"&"+_[a]+";"};t=function(a){return""+(null==a?"":a)},s=function(a){return t(a).replace(o,d)}}if(!r){var g={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(a){return g[a]},y=/[!')(*]/g;r=function(a){return encodeURIComponent(t(a)).replace(y,c)}}if(!n){var p=/[\\'"]/g;n=function(a){return t(a).replace(p,"\\$&")}}var x="",z=a.viewId,m=a.text1,f=a.text2;return x+='<div mxa="_zs_galleryaO:_" class="_zs_galleryg"><div mxs="_zs_galleryaO:_" class="_zs_galleryj"><div class="mb20"><span class="color-9">以下示例：</span>说明浮层本身如何获取dialog示例关闭，即this.mxDialog(viewPath, viewOptions, dialogOptions)中viewPath页面如何写</div><div class="pr" style="width: 400px; height: 200px;"><div class="_zs_gallerydN" style="top: 0; left: 0; width: 400px;"><div class="_zs_gallerydO"><div class="dialog-header"><div class="fontsize-16">标题</div></div><div class="dialog-body">浮层内容</div><div class="dialog-footer"><a href="javascript:;" class="btn">取消</a></div></div></div></div></div><div mxa="_zs_galleryaO:a" class="clearfix"><div mxa="_zs_galleryaO:b" class="_zs_galleryk _zs_gallery_"><div mxs="_zs_galleryaO:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(z)+'_text_1"><span mxa="_zs_galleryaO:c" class="_zs_galleryn">'+t(m)+'</span><i mxs="_zs_galleryaO:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+s(z)+'_text_1">\n&lt;div class="dialog-header"&gt;\n    &lt;div class="fontsize-16"&gt;标题&lt;/div&gt;\n&lt;/div&gt;\n&lt;div class="dialog-body"&gt;\n    浮层内容\n&lt;/div&gt;\n&lt;div class="dialog-footer"&gt;\n    &lt;a href="javascript:;" \n        class="btn" \n        mx-click="cancel()"&gt;&lt;/a&gt; \n&lt;/div&gt;\n            </pre></div><div mxa="_zs_galleryaO:d" class="_zs_galleryk _zs_gallerya _zs_gallerye"><div mxs="_zs_galleryaO:c" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+r(z)+'_text_2"><span mxa="_zs_galleryaO:e" class="_zs_galleryn">'+t(f)+'</span><i mxs="_zs_galleryaO:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+s(z)+"_text_2\">\nlet Magix = require('magix');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    init(e) &#123;\n        this.viewOptions = e;\n    &#125;,\n    render() &#123;\n        this.updater.digest();\n    &#125;,\n    'cancel&lt;click&gt;'(event) &#123;\n        event.preventDefault();\n        let viewOptions = this.viewOptions;\n        if (viewOptions.dialog) &#123;\n            viewOptions.dialog.close();\n        &#125;\n    &#125;\n&#125;);\n    </pre></div></div></div>"},mixins:[t],render:function(){this.updater.digest()},"open<click>":function(a){this.mxDialog("mx-dialog/__test__/multi",{number:1},{width:800,height:320,modal:!0})}})});