define("__test__/pro/menu3",["magix","../example","$","mx-copy/index","../hl"],(a,l,e)=>{a("mx-copy/index"),a("../hl");var _=a("magix"),r=a("../example");a("$");_.applyStyle("_zs_galleryh","._zs_galleryaD{height:160px;background-color:var(--color-bg)}._zs_galleryaE{height:160px;padding:30px}._zs_galleryaF{box-shadow:0 6px 8px rgba(51,51,51,.08)}._zs_galleryaF ._zs_galleryaG{height:50px;background-color:var(--color-brand)}._zs_galleryaF ._zs_galleryaG ._zs_galleryaH,._zs_galleryaF ._zs_galleryaG ._zs_galleryaI{float:left;height:50px;line-height:50px;color:#fff}._zs_galleryaF ._zs_galleryaG ._zs_galleryaH{width:210px;font-size:22px;opacity:.8;text-align:center}._zs_galleryaF ._zs_galleryaG ._zs_galleryaI{padding-left:30px;padding-right:10px;font-size:14px;opacity:.6}._zs_galleryaF ._zs_galleryaJ{float:left;position:relative;padding-top:30px;width:210px;padding-bottom:80px;background-color:#3d414d;transition:left var(--duration) ease-out;font-size:14px}._zs_galleryaF ._zs_galleryaJ ._zs_galleryaK{display:block;height:46px;padding-left:24px;padding-right:10px}._zs_galleryaF ._zs_galleryaJ ._zs_galleryaK,._zs_galleryaF ._zs_galleryaJ ._zs_galleryaK ._zs_galleryaL{line-height:46px;color:#9ea0a6;cursor:pointer;transition:all .2s ease-out}._zs_galleryaF ._zs_galleryaJ ._zs_galleryaK ._zs_galleryaL{float:right;font-size:24px}._zs_galleryaF ._zs_galleryaJ ._zs_galleryaK._zs_galleryaM ._zs_galleryaL{-webkit-transform:rotate(180deg);transform:rotate(180deg)}._zs_galleryaF ._zs_galleryaJ ._zs_galleryaK._zs_galleryaN,._zs_galleryaF ._zs_galleryaJ ._zs_galleryaK._zs_galleryaN ._zs_galleryaL,._zs_galleryaF ._zs_galleryaJ ._zs_galleryaK:hover,._zs_galleryaF ._zs_galleryaJ ._zs_galleryaK:hover ._zs_galleryaL{color:#fff}._zs_galleryaF ._zs_galleryaJ ._zs_galleryaO{display:block;height:46px;padding-left:20px;line-height:46px;border-left:4px solid transparent;color:#9ea0a6;overflow-y:hidden;transition:all .2s ease-out;cursor:pointer}._zs_galleryaF ._zs_galleryaJ ._zs_galleryaO:hover{color:#fff}._zs_galleryaF ._zs_galleryaJ ._zs_galleryaO._zs_galleryaP{border-left:4px solid var(--color-brand);color:#fff;background-color:#2e313a}._zs_galleryaF ._zs_galleryaJ ._zs_galleryaQ{background-color:#343842;box-shadow:0 6px 8px rgba(51,51,51,.08)}._zs_galleryaF ._zs_galleryaJ ._zs_galleryaQ ._zs_galleryaO{padding-left:40px}._zs_galleryaF ._zs_galleryaJ ._zs_galleryaQ._zs_galleryaR ._zs_galleryaO{height:46px}._zs_galleryaF ._zs_galleryaS{position:absolute;top:0;left:210px;padding:30px}"),e.exports=r.extend({tmpl:function(a,l,e,_,r,s,g,i){if(e||(e=a),!r){var o={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},t=/[&<>"'`]/g,y=function(a){return"&"+o[a]+";"};r=function(a){return""+(null==a?"":a)},_=function(a){return r(a).replace(t,y)}}if(!s){var z={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},n=function(a){return z[a]},d=/[!')(*]/g;s=function(a){return encodeURIComponent(r(a)).replace(d,n)}}if(!i){var p=/[\\'"]/g;i=function(a){return r(a).replace(p,"\\$&")}}var c="",x=a.viewId,f=a.text1;return c+='<div mxa="_zs_galleryH:_" class="_zs_galleryg"><div mxs="_zs_galleryH:_" class="_zs_galleryj"><div class="clearfix mb20"><div class="fl color-9">以下示例：</div><div class="fl">侧边是一个自定义页面，配置leftView，无subs</div></div><div class="_zs_galleryaF"><div class="_zs_galleryaG clearfix"><div class="_zs_galleryaH">LOGO</div><div class="_zs_galleryaI">一级标题</div></div><div class="clearfix"><div class="_zs_galleryaJ"><img src="//img.alicdn.com/tfs/TB1A_l1oBsmBKNjSZFsXXaXSVXa-210-153.png"></div></div></div></div><div mxa="_zs_galleryH:a" class="_zs_galleryk"><div mxs="_zs_galleryH:a" class="_zs_galleryi">配置Menus</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(x)+'_text_1"><span mxa="_zs_galleryH:b" class="_zs_galleryn">'+r(f)+'</span><i mxs="_zs_galleryH:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+_(x)+"_text_1\">\nlet Menus = [&#123;\n    has: true,\n    name: '一级标题',\n    path: '/develop/index',\n    leftView: '/develop/side'  // 侧边导航加载的view\n&#125;]</pre></div></div>"},render:function(){this.updater.digest()}})});