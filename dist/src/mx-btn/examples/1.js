define("mx-btn/examples/1",["magix","examples/example","$","mx-copy/index","examples/hl"],(a,t,n)=>{a("mx-copy/index"),a("examples/hl");var s=a("magix"),e=a("examples/example");a("$");s.applyStyle("_zs_galleryp","._zs_gallerybF{padding:10px;background-color:var(--app-bg)}._zs_gallerybG{padding:10px 0}"),n.exports=e.extend({tmpl:function(a,t,n,s,e,l,r,x){if(n||(n=a),!e){var m={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},g=/[&<>"'`]/g,i=function(a){return"&"+m[a]+";"};e=function(a){return""+(null==a?"":a)},s=function(a){return e(a).replace(g,i)}}if(!l){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(a){return c[a]},_=/[!')(*]/g;l=function(a){return encodeURIComponent(e(a)).replace(_,o)}}if(!x){var p=/[\\'"]/g;x=function(a){return e(a).replace(p,"\\$&")}}var b="",d=a.icon,y=a.viewId,u=a.text1,z=a.text2;return b+='<div mxa="_zs_galleryZ:_" class="_zs_galleryg"><div mxa="_zs_galleryZ:a" class="_zs_galleryj"><div mxa="_zs_galleryZ:b" class="_zs_gallerybG"><button mxs="_zs_galleryZ:_" type="button" class="mx-btn btn-brand mr40 mb20">品牌色按钮</button><button mxs="_zs_galleryZ:a" type="button" class="mx-btn btn-small btn-brand mb20">小号品牌色按钮<span class="mx-tag btn-tag"><span class="mx-tag-arrow btn-tag-arrow"></span><span class="mx-tag-name">New</span></span></button><br mxs="_zs_galleryZ:b"/><button mxa="_zs_galleryZ:c" type="button" class="mx-btn btn-brand mr60 mb20"><i mxs="_zs_galleryZ:c" class="mc-iconfont">&#xe731;</i>品牌色按钮<span mxa="_zs_galleryZ:d" class="mx-tag btn-tag"><span mxs="_zs_galleryZ:d" class="mx-tag-arrow btn-tag-arrow"></span><span mxa="_zs_galleryZ:e" class="mx-tag-name">'+e(d)+'</span></span></button><button mxs="_zs_galleryZ:e" type="button" class="mx-btn btn-brand mb20">品牌色按钮<span class="mx-tag btn-tag"><span class="mx-tag-arrow btn-tag-arrow"></span><span class="mx-tag-name">New</span></span></button><br mxs="_zs_galleryZ:b"/><button mxs="_zs_galleryZ:f" type="button" class="mx-btn btn-brand mb20">品牌色按钮<span class="mx-tag btn-tag" style="background-color: #ffb400;border: 1px solid #ffb400;"><span class="mx-tag-arrow btn-tag-arrow" style="border-color: #ffb400 transparent transparent #ffb400;"></span><span class="mx-tag-name">New</span></span></button></div></div><div mxa="_zs_galleryZ:f" class="_zs_galleryk"><div mxs="_zs_galleryZ:g" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+l(y)+'_text_1"><span mxa="_zs_galleryZ:g" class="_zs_galleryn">'+e(u)+'</span><i mxs="_zs_galleryZ:h" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+s(y)+'_text_1">\n&lt;mx-btn brand="true" content="品牌色按钮"/&gt;\n\n&lt;mx-btn brand="true" small="true" content="小号品牌色按钮"/&gt;\n\n&lt;mx-btn brand="true" tag-content="&#123;&#123;!icon&#125;&#125;"&gt;\n    &lt;i class="mc-iconfont"&gt;&#38;&#35;xe731;&lt;/i&gt;品牌色按钮\n&lt;/mx-btn&gt;\n\n&lt;mx-btn brand="true" content="品牌色按钮" tag-content="New"/&gt;\n\n&lt;mx-btn brand="true" content="品牌色按钮" tag-content="New" tag-color="#ffb400"/&gt;\n        </pre></div><div mxa="_zs_galleryZ:h" class="_zs_galleryk"><div mxs="_zs_galleryZ:i" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+t+'done({id:2})" mx-view="mx-copy/index?copyNode='+l(y)+'_text_2"><span mxa="_zs_galleryZ:i" class="_zs_galleryn">'+e(z)+'</span><i mxs="_zs_galleryZ:h" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+s(y)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\nMagix.applyStyle('@index.less');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        this.updater.digest(&#123;\n            icon: '&lt;i class=\"mc-iconfont\"&gt;&#38;&#35;xe601;&lt;/i&gt;'\n        &#125;);\n    &#125;\n&#125;);\n        </pre></div></div>"},render:function(){this.updater.digest({icon:'<i class="mc-iconfont">&#xe601;</i>'})},"test<click>":function(a){var t=this.updater.get("disabled");this.updater.digest({disabled:!t})}})});