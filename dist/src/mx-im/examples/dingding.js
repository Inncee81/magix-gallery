define("mx-im/examples/dingding",["magix","examples/example","$","mx-title/second","mx-copy/index","examples/hl"],(e,l,s)=>{e("mx-title/second"),e("mx-copy/index"),e("examples/hl");e("magix");var i=e("examples/example");e("$");s.exports=i.extend({tmpl:function(e,l,s,i,a,n,t,c){if(s||(s=e),!a){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},_=/[&<>"'`]/g,m=function(e){return"&"+d[e]+";"};a=function(e){return""+(null==e?"":e)},i=function(e){return a(e).replace(_,m)}}if(!n){var r={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return r[e]},g=/[!')(*]/g;n=function(e){return encodeURIComponent(a(e)).replace(g,x)}}if(!c){var o=/[\\'"]/g;c=function(e){return a(e).replace(o,"\\$&")}}var v="",p=e.viewId,y=e.text1,z=e.text2;return v+='<div mxs="_zs_galleryc%:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryc%:_" class="mb40"><div mxa="_zs_galleryc%:a" class="_zs_galleryg"><div mxs="_zs_galleryc%:a" class="_zs_galleryj"><a href="dingtalk://dingtalkclient/action/sendmsg?dingtalk_id=t5z4z8s"><i class="mc-iconfont color-brand">&#xe677;</i>虞佳</a></div><div mxa="_zs_galleryc%:b" class="_zs_galleryk"><div mxs="_zs_galleryc%:b" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(p)+'_text_1"><span mxa="_zs_galleryc%:c" class="_zs_galleryn">'+a(y)+'</span><i mxs="_zs_galleryc%:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+i(p)+'_text_1">\n&lt;mx-im.dd uid="t5z4z8s" uname="虞佳"/&gt;\n            </pre></div><div mxa="_zs_galleryc%:d" class="_zs_galleryk"><div mxs="_zs_galleryc%:d" class="_zs_galleryi">等同于</div><div class="_zs_galleryl" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+n(p)+'_text_2"><span mxa="_zs_galleryc%:e" class="_zs_galleryn">'+a(z)+'</span><i mxs="_zs_galleryc%:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+i(p)+'_text_2">\n&lt;a href="dingtalk://dingtalkclient/action/sendmsg?dingtalk_id=t5z4z8s"&gt;\n    &lt;i class="mc-iconfont color-brand"&gt;&#38;&#35;xe677;&lt;/i&gt;虞佳\n&lt;/a&gt;</pre></div></div></div><div mxs="_zs_galleryc%:e" mx-view="mx-title/second?content=%E6%8E%A5%E5%85%A5%E8%AF%B4%E6%98%8E"></div><div mxs="_zs_galleryc%:f" class="mb10">链接格式为：dingtalk://dingtalkclient/action/sendmsg?dingtalk_id={id} ，将{id}替换为用户的钉钉号</div><div mxs="_zs_galleryc%:g" class="mb10">关于目前如何获取钉钉号：</div><img mxs="_zs_galleryc%:h" src="https://img.alicdn.com/tfs/TB1qp3UaNTpK1RjSZFKXXa2wXXa-942-1516.png" width="400"/>'},render:function(){this.updater.digest({})}})});