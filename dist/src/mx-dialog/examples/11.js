define("mx-dialog/examples/11",["magix","mx-dialog/index","examples/example","$","mx-copy/index","examples/hl"],(e,a,l)=>{e("mx-copy/index"),e("examples/hl");e("magix");var n=e("mx-dialog/index"),i=e("examples/example");e("$");l.exports=i.extend({tmpl:function(e,a,l,n,i,s,r,x){if(l||(l=e),!i){var t={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},m=/[&<>"'`]/g,c=function(e){return"&"+t[e]+";"};i=function(e){return""+(null==e?"":e)},n=function(e){return i(e).replace(m,c)}}if(!s){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},_=function(e){return d[e]},o=/[!')(*]/g;s=function(e){return encodeURIComponent(i(e)).replace(o,_)}}if(!x){var p=/[\\'"]/g;x=function(e){return i(e).replace(p,"\\$&")}}var g="",u=e.viewId,v=e.text1;return g+='<div mxa="_zs_galleryaO:_" class="_zs_galleryg"><div mxs="_zs_galleryaO:_" class="_zs_galleryj"><a href="javascript:;" mx-click="'+a+'open()" class="btn btn-brand mr20">全屏右出浮层(只底部)</a></div><div mxa="_zs_galleryaO:a" class="_zs_galleryk"><div mxs="_zs_galleryaO:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(u)+'_text_1"><span mxa="_zs_galleryaO:b" class="_zs_galleryn">'+i(v)+'</span><i mxs="_zs_galleryaO:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+n(u)+"_text_1\">\n'open&lt;click&gt;'(e) &#123;\n    this.mxModal('@./full', &#123;\n        \n    &#125;, &#123;\n        width: 800,\n        mask: false\n    &#125;);\n&#125;\n        </pre></div></div>"},mixins:[n],render:function(){this.updater.digest()},"open<click>":function(e){this.mxModal("mx-dialog/examples/full",{},{width:800,mask:!1})}})});