define("__test__/dingding",["magix","./example","$","mx-title/second","mx-copy/index","./hl"],(e,i,l)=>{e("mx-title/second"),e("mx-copy/index"),e("./hl");e("magix");var t=e("./example");e("$");l.exports=t.extend({tmpl:function(e,i,l,t,n,s,a,d){if(l||(l=e),!n){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},_=/[&<>"'`]/g,r=function(e){return"&"+c[e]+";"};n=function(e){return""+(null==e?"":e)},t=function(e){return n(e).replace(_,r)}}if(!s){var g={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return g[e]},o=/[!')(*]/g;s=function(e){return encodeURIComponent(n(e)).replace(o,m)}}if(!d){var x=/[\\'"]/g;d=function(e){return n(e).replace(x,"\\$&")}}var v="",z=e.viewId,p=e.text2;return v+='<div mxs="_zs_galleryb:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryb:_" class="mb40"><div mxa="_zs_galleryb:a" class="_zs_galleryf"><div mxs="_zs_galleryb:a" class="_zs_galleryh"><a href="dingtalk://dingtalkclient/action/sendmsg?dingtalk_id=t5z4z8s"><i class="mc-iconfont color-brand displacement-2 fontsize-18">&#xe677;</i>虞佳</a></div><div mxa="_zs_galleryb:b" class="_zs_galleryi"><div mxs="_zs_galleryb:b" class="_zs_galleryg">HTML Code</div><div class="_zs_galleryj" mx-success="'+i+'done({id:2})" mx-view="mx-copy/index?copyNode='+s(z)+'_text_2"><span mxa="_zs_galleryb:c" class="_zs_galleryl">'+n(p)+'</span><i mxs="_zs_galleryb:c" class="mc-iconfont _zs_galleryk">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+t(z)+'_text_2">\n&lt;a href="dingtalk://dingtalkclient/action/sendmsg?dingtalk_id=t5z4z8s"&gt;\n    &lt;i class="mc-iconfont color-brand"&gt;&#38;&#35;xe677;&lt;/i&gt;虞佳\n&lt;/a&gt;</pre></div></div></div><div mxs="_zs_galleryb:d" mx-view="mx-title/second?content=%E6%8E%A5%E5%85%A5%E8%AF%B4%E6%98%8E"></div><div mxs="_zs_galleryb:e" class="mb10">链接格式为：dingtalk://dingtalkclient/action/sendmsg?dingtalk_id={id} ，将{id}替换为用户的钉钉号</div><div mxs="_zs_galleryb:f" class="mb10">关于目前如何获取钉钉号：</div><img mxs="_zs_galleryb:g" src="https://img.alicdn.com/tfs/TB1qp3UaNTpK1RjSZFKXXa2wXXa-942-1516.png" width="400"/>'},render:function(){this.updater.digest({})}})});