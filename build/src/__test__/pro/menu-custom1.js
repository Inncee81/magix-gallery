define("__test__/pro/menu-custom1",["magix","../example","$"],(a,l,r)=>{var _=a("magix"),e=a("../example"),s=a("$");_.applyStyle("_zs_galleryh","._zs_galleryaE{height:160px;background-color:var(--color-bg)}._zs_galleryaF{height:160px;padding:30px}._zs_galleryaG{box-shadow:0 6px 8px rgba(51,51,51,.08)}._zs_galleryaG ._zs_galleryaH{height:50px;background-color:var(--color-brand)}._zs_galleryaG ._zs_galleryaH ._zs_galleryaI,._zs_galleryaG ._zs_galleryaH ._zs_galleryaJ{float:left;height:50px;line-height:50px;color:#fff}._zs_galleryaG ._zs_galleryaH ._zs_galleryaI{width:210px;font-size:22px;opacity:.8;text-align:center}._zs_galleryaG ._zs_galleryaH ._zs_galleryaJ{padding-left:30px;padding-right:10px;font-size:14px;opacity:.6}._zs_galleryaG ._zs_galleryaK{float:left;position:relative;padding-top:30px;width:210px;padding-bottom:80px;background-color:#3d414d;transition:left var(--duration) ease-out;font-size:14px}._zs_galleryaG ._zs_galleryaK ._zs_galleryaL{display:block;height:46px;padding-left:24px;padding-right:10px}._zs_galleryaG ._zs_galleryaK ._zs_galleryaL,._zs_galleryaG ._zs_galleryaK ._zs_galleryaL ._zs_galleryaM{line-height:46px;color:#9ea0a6;cursor:pointer;transition:all .2s ease-out}._zs_galleryaG ._zs_galleryaK ._zs_galleryaL ._zs_galleryaM{float:right;font-size:24px}._zs_galleryaG ._zs_galleryaK ._zs_galleryaL._zs_galleryaN ._zs_galleryaM{transform:rotate(180deg)}._zs_galleryaG ._zs_galleryaK ._zs_galleryaL._zs_galleryaO,._zs_galleryaG ._zs_galleryaK ._zs_galleryaL._zs_galleryaO ._zs_galleryaM,._zs_galleryaG ._zs_galleryaK ._zs_galleryaL:hover,._zs_galleryaG ._zs_galleryaK ._zs_galleryaL:hover ._zs_galleryaM{color:#fff}._zs_galleryaG ._zs_galleryaK ._zs_galleryaP{display:block;height:46px;padding-left:20px;line-height:46px;border-left:4px solid transparent;color:#9ea0a6;overflow-y:hidden;transition:all .2s ease-out;cursor:pointer}._zs_galleryaG ._zs_galleryaK ._zs_galleryaP:hover{color:#fff}._zs_galleryaG ._zs_galleryaK ._zs_galleryaP._zs_galleryaQ{border-left:4px solid var(--color-brand);color:#fff;background-color:#2e313a}._zs_galleryaG ._zs_galleryaK ._zs_galleryaR{background-color:#343842;box-shadow:0 6px 8px rgba(51,51,51,.08)}._zs_galleryaG ._zs_galleryaK ._zs_galleryaR ._zs_galleryaP{padding-left:40px}._zs_galleryaG ._zs_galleryaK ._zs_galleryaR._zs_galleryaS ._zs_galleryaP{height:46px}._zs_galleryaG ._zs_galleryaT{position:absolute;top:0;left:210px;padding:30px}"),r.exports=e.extend({tmpl:function(a,l,r,_,e,s,g,i){if(r||(r=a),!e){var t={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,y=function(a){return"&"+t[a]+";"};e=function(a){return""+(null==a?"":a)},_=function(a){return e(a).replace(o,y)}}if(!s){var z={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},d=function(a){return z[a]},n=/[!')(*]/g;s=function(a){return encodeURIComponent(e(a)).replace(n,d)}}if(!i){var c=/[\\'"]/g;i=function(a){return e(a).replace(c,"\\$&")}}var p="",f=a.parentId;return p+='<div mxa="_zs_galleryA:_" class="_zs_galleryaG mr20"><div mxs="_zs_galleryA:_" class="_zs_galleryaH clearfix"><div class="_zs_galleryaI">LOGO</div><div class="_zs_galleryaJ">一级标题</div></div><div mxa="_zs_galleryA:a" class="clearfix pr"><div mxs="_zs_galleryA:a" class="_zs_galleryaK"><div><a href="javascript:;" class="_zs_galleryaP _zs_galleryaQ"><i class="mc-iconfont mr5">&#xe731;</i>三级1</a></div><div><a href="javascript:;" class="_zs_galleryaP"><i class="mc-iconfont mr5">&#xe609;</i>三级2</a></div><div><a href="javascript:;" class="_zs_galleryaP"><i class="mc-iconfont mr5">&#xe698;</i>三级3</a></div></div><div mxa="_zs_galleryA:b" class="_zs_galleryaT"><div mxs="_zs_galleryA:b" class="mb20">以下四种情况均为自定义页面，入口在导航上不可见，点击可查看配置：</div><div mxa="_zs_galleryA:c" class="mb20">1. 映射到三级1这个页面，顶部和侧边导航显示与三级1完全一致<a class="link-brand ml10" href="javascript:;" mx-click="'+l+"to({id:'"+_(i(f))+'_custom3\'})">查看配置</a></div><div mxa="_zs_galleryA:d" class="mb20">2. 映射到三级1这个页面，顶部显示与三级1完全一致，侧边内容自定义<a class="link-brand ml10" href="javascript:;" mx-click="'+l+"to({id:'"+_(i(f))+'_custom5\'})">查看配置</a></div><div mxa="_zs_galleryA:e" class="mb20">3. 映射到三级1这个页面，顶部显示与三级1完全一致，无侧边<a class="link-brand ml10" href="javascript:;" mx-click="'+l+"to({id:'"+_(i(f))+'_custom2\'})">查看配置</a></div><div mxa="_zs_galleryA:f" class="mb20">4. 使用另外的容器文件，而不是default<a class="link-brand ml10" href="javascript:;" mx-click="'+l+"to({id:'"+_(i(f))+"_custom4'})\">查看配置</a></div></div></div></div>"},init:function(a){this.updater.set({parentId:a.parentId})},render:function(){this.updater.digest()},"to<click>":function(a){var l=a.params.id,r=s("#"+l);s(window).scrollTop(r.offset().top)}})});