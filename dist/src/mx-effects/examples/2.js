define("mx-effects/examples/2",["magix","examples/example","$","mx-copy/index","examples/hl"],(e,i,l)=>{e("mx-copy/index"),e("examples/hl");e("magix");var s=e("examples/example");e("$");l.exports=s.extend({tmpl:function(e,i,l,s,t,a,n,d){if(l||(l=e),!t){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,m=function(e){return"&"+r[e]+";"};t=function(e){return""+(null==e?"":e)},s=function(e){return t(e).replace(c,m)}}if(!a){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},v=function(e){return x[e]},_=/[!')(*]/g;a=function(e){return encodeURIComponent(t(e)).replace(_,v)}}if(!d){var g=/[\\'"]/g;d=function(e){return t(e).replace(g,"\\$&")}}var o="",p=e.viewId,f=e.text1;return o+='<div mxa="_zs_gallerybW:_" class="_zs_galleryg"><div mxs="_zs_gallerybW:_" class="_zs_galleryj"><div bg="white" class="empty-white"><div class="empty-inner"><div><i class="mc-iconfont no-data">&#xe685;</i></div><div><div class="fontsize-14">暂无可选内容</div><div class="fontsize-14">您暂时没有可以添加的内容，请使用本地上传！</div></div></div></div></div><div mxa="_zs_gallerybW:a" class="_zs_galleryk"><div mxs="_zs_gallerybW:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+i+'done({id:1})" mx-view="mx-copy/index?copyNode='+a(p)+'_text_1"><span mxa="_zs_gallerybW:b" class="_zs_galleryn">'+t(f)+'</span><i mxs="_zs_gallerybW:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+s(p)+'_text_1">\n&lt;mx-effects.empty bg="white"&gt;\n    &lt;div class="fontsize-14"&gt;暂无可选内容&lt;/div&gt;\n    &lt;div class="fontsize-14"&gt;您暂时没有可以添加的内容，请使用本地上传！&lt;/div&gt;\n&lt;/mx-effects.empty&gt;\n        </pre></div></div>'},render:function(){this.updater.digest()}})});