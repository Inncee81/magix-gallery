define("mx-btn/__test__/1",["magix","__test__/example","$","mx-copy/index","__test__/hl"],(a,s,t)=>{a("mx-copy/index"),a("__test__/hl");var e=a("magix"),n=a("__test__/example");a("$");e.applyStyle("_zs_galleryo","._zs_gallerybE{padding:20px;background-color:var(--app-bg)}._zs_gallerybF{padding:20px 0}"),t.exports=n.extend({tmpl:function(a,s,t,e,n,l,r,_){if(t||(t=a),!n){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,g=function(a){return"&"+i[a]+";"};n=function(a){return""+(null==a?"":a)},e=function(a){return n(a).replace(c,g)}}if(!l){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(a){return x[a]},d=/[!')(*]/g;l=function(a){return encodeURIComponent(n(a)).replace(d,m)}}if(!_){var o=/[\\'"]/g;_=function(a){return n(a).replace(o,"\\$&")}}var p="",b=a.icon,y=a.viewId,z=a.text1,v=a.text2;return p+='<div mxa="_zs_galleryV:_" class="_zs_galleryg"><div mxa="_zs_galleryV:a" class="_zs_galleryj"><div mxa="_zs_galleryV:b" class="_zs_gallerybF"><a mxs="_zs_galleryV:_" href="javascript:;" class="mx-btn btn-brand mr40 mb20" style=";">品牌色按钮</a><a mxs="_zs_galleryV:a" href="javascript:;" class="mx-btn btn-small btn-brand mb20" style=";">小号品牌色按钮</a><br mxs="_zs_galleryV:b"/><a mxa="_zs_galleryV:c" href="javascript:;" class="mx-btn btn-brand mr60 mb20" style=";"><i mxs="_zs_galleryV:c" class="mc-iconfont">&#xe731;</i>品牌色按钮<span mxa="_zs_galleryV:d" class="mx-tag btn-tag"><span mxs="_zs_galleryV:d" class="mx-tag-arrow btn-tag-arrow"></span><span mxa="_zs_galleryV:e" class="mx-tag-name">'+n(b)+'</span></span></a><a mxs="_zs_galleryV:e" href="javascript:;" class="mx-btn btn-brand mb20" style=";">品牌色按钮<span class="mx-tag btn-tag"><span class="mx-tag-arrow btn-tag-arrow"></span><span class="mx-tag-name">New</span></span></a><br mxs="_zs_galleryV:b"/><a mxs="_zs_galleryV:f" href="javascript:;" class="mx-btn btn-brand mb20" style=";">品牌色按钮<span class="mx-tag btn-tag" style="background-color: #ffb400;"><span class="mx-tag-arrow btn-tag-arrow" style="border-color: #ffb400 transparent transparent #ffb400;"></span><span class="mx-tag-name">New</span></span></a></div></div><div mxa="_zs_galleryV:f" class="_zs_galleryk"><div mxs="_zs_galleryV:g" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+s+'done({id:1})" mx-view="mx-copy/index?copyNode='+l(y)+'_text_1"><span mxa="_zs_galleryV:g" class="_zs_galleryn">'+n(z)+'</span><i mxs="_zs_galleryV:h" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+e(y)+'_text_1">\n&lt;mx-btn brand="true" content="品牌色按钮"/&gt;\n\n&lt;mx-btn brand="true" small="true" content="小号品牌色按钮"/&gt;\n\n&lt;mx-btn brand="true" tag-content="&#123;&#123;!icon&#125;&#125;"&gt;\n    &lt;i class="mc-iconfont"&gt;&#38;&#35;xe731;&lt;/i&gt;品牌色按钮\n&lt;/mx-btn&gt;\n\n&lt;mx-btn brand="true" content="品牌色按钮" tag-content="New"/&gt;\n\n&lt;mx-btn brand="true" content="品牌色按钮" tag-content="New" tag-color="#ffb400"/&gt;\n        </pre></div><div mxa="_zs_galleryV:h" class="_zs_galleryk"><div mxs="_zs_galleryV:i" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+s+'done({id:2})" mx-view="mx-copy/index?copyNode='+l(y)+'_text_2"><span mxa="_zs_galleryV:i" class="_zs_galleryn">'+n(v)+'</span><i mxs="_zs_galleryV:h" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+e(y)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\nMagix.applyStyle('@index.less');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        this.updater.digest(&#123;\n            icon: '&lt;i class=\"mc-iconfont\"&gt;&#38;&#35;xe601;&lt;/i&gt;'\n        &#125;);\n    &#125;\n&#125;);\n        </pre></div></div>"},render:function(){this.updater.digest({icon:'<i class="mc-iconfont">&#xe601;</i>'})},"test<click>":function(a){var s=this.updater.get("disabled");this.updater.digest({disabled:!s})}})});