define("mx-preview/__test__/2",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,a,r)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");var i=e("magix"),l=e("__test__/example");e("$");i.applyStyle("_zs_galleryap","._zs_gallerykD{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerykE{margin-right:20px;margin-bottom:20px;border:1px solid #e6e6e6;background-color:#fafafa}._zs_gallerykF{width:400px;height:220px;padding:10px;border-radius:4px;overflow-y:auto;border:1px solid #e6e6e6}"),r.exports=l.extend({tmpl:function(e,a,r,i,l,s,t,_){if(r||(r=e),!l){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,x=function(e){return"&"+n[e]+";"};l=function(e){return""+(null==e?"":e)},i=function(e){return l(e).replace(d,x)}}if(!s){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return o[e]},g=/[!')(*]/g;s=function(e){return encodeURIComponent(l(e)).replace(g,c)}}if(!_){var m=/[\\'"]/g;_=function(e){return l(e).replace(m,"\\$&")}}var p="",v=e.viewId,f=e.text1;return p+='<div mxa="_zs_galleryc0:_" class="_zs_galleryh"><div mxs="_zs_galleryc0:_" class="_zs_galleryk"><div class="_zs_gallerykE" mx-view="mx-preview/index?format=4&url=%2F%2Fossgw.alicdn.com%2Fcreatives-assets%2Fvideo%2F2018%2F05%2F16%2Faa7ee841-503d-497b-b802-16687fb9731f.mp4&width=540&height=960&maxWidth=100&maxHeight=100"></div></div><div mxa="_zs_galleryc0:a" class="_zs_galleryl"><div mxs="_zs_galleryc0:a" class="_zs_galleryj">视频预览</div><div class="_zs_gallerym" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(v)+'_text_1"><span mxa="_zs_galleryc0:b" class="_zs_galleryo">'+l(f)+'</span><i mxs="_zs_galleryc0:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+i(v)+'_text_1">\n&lt;mx-preview class="demo"\n    format="4"\n    url="//ossgw.alicdn.com/creatives-assets/video/2018/05/16/aa7ee841-503d-497b-b802-16687fb9731f.mp4"\n    width="540"\n    height="960"\n    max-width="100"\n    max-height="100"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});