define("mx-main/__test__/inner4",["magix","$"],(i,l,e)=>{var a=i("magix"),r=i("$");a.applyStyle("_zs_galleryaa","._zs_galleryiz{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_galleryiA{height:46px;padding:0 20px;line-height:44px;background-color:#fafafa;border:1px solid #e6e6e6;border-radius:4px}._zs_galleryiA ._zs_galleryiB{float:left;height:44px;line-height:44px}._zs_galleryiA ._zs_galleryiB>*{position:relative;top:2px;margin-right:4px;color:#999;font-size:20px}._zs_galleryiA ._zs_galleryiC{float:left;font-size:16px}._zs_galleryiA._zs_galleryiD{background-color:#f6e6e6;border:1px solid #a40100;color:#a40100}._zs_galleryiA._zs_galleryiD ._zs_galleryiB>*{color:#a40100}._zs_galleryiA._zs_galleryiE{background-color:#fff8e6;border:1px solid #ffb400;color:#ffb400}._zs_galleryiA._zs_galleryiE ._zs_galleryiB>*{color:#ffb400}._zs_galleryiF{padding:40px 20px 0}"),e.exports=a.View.extend({tmpl:function(i,l,e,a,r,n,t,s){if(e||(e=i),!r){var o={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},_=/[&<>"'`]/g,c=function(i){return"&"+o[i]+";"};r=function(i){return""+(null==i?"":i)},a=function(i){return r(i).replace(_,c)}}if(!n){var g={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},d=function(i){return g[i]},f=/[!')(*]/g;n=function(i){return encodeURIComponent(r(i)).replace(f,d)}}if(!s){var p=/[\\'"]/g;s=function(i){return r(i).replace(p,"\\$&")}}var x="",y=i.info;return x+='<div mxa="_zs_gallerycf:_" class="_zs_galleryiA clearfix">',y.icon&&(x+='<span mxa="_zs_gallerycf:a" class="_zs_galleryiB">'+r(y.icon)+"</span>"),x+='<span mxa="_zs_gallerycf:b" class="_zs_galleryiC">'+a(y.label)+'</span></div><div mxs="_zs_gallerycf:_" class="_zs_galleryiF" style="min-height: 200px;"><div class="lh22 mb10"><div>页面功能说明：</div></div><div class="tip-content mb40"><div>1. 当前步骤只要一个子步骤，侧边导航不显示子步骤</div><div>2. 没有侧边区域</div></div><div class="lh22 mb10"><div>当前页面配置信息：</div></div><pre class="tip-content mb40">\n&#123;\n    label: \'完成创建\',\n    nextTip: \'完成\',\n    icon: \'&lt;i class="mc-iconfont"&gt;&#38;&#35;xe64c;&lt;/i&gt;\',\n    subs: [&#123;\n        label: \'完成标题\',\n        icon: \'&lt;i class="mc-iconfont"&gt;&#38;&#35;xe7be;&lt;/i&gt;\',\n        view: \'@./inner4\'\n    &#125;]\n&#125;\n    </pre></div>'},init:function(i){this.updater.set({info:i.info||{},data:r.extend(!0,{},i.data||{})})},render:function(){this.updater.digest()},check:function(){var i=this.updater.get("info"),l={};return l["test_"+i.index]=i.label,new Promise(function(e){e({ok:!0,msg:i.label,remain:l})})}})});