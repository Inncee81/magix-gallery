define("__test__/pro/menu-custom4",["magix","../example","$","mx-copy/index","../hl"],(a,l,e)=>{a("mx-copy/index"),a("../hl");var _=a("magix"),r=a("../example");a("$");_.applyStyle("_zs_galleryh","._zs_galleryaE{height:160px;background-color:var(--color-bg)}._zs_galleryaF{height:160px;padding:30px}._zs_galleryaG{box-shadow:0 6px 8px rgba(51,51,51,.08)}._zs_galleryaG ._zs_galleryaH{height:50px;background-color:var(--color-brand)}._zs_galleryaG ._zs_galleryaH ._zs_galleryaI,._zs_galleryaG ._zs_galleryaH ._zs_galleryaJ{float:left;height:50px;line-height:50px;color:#fff}._zs_galleryaG ._zs_galleryaH ._zs_galleryaI{width:210px;font-size:22px;opacity:.8;text-align:center}._zs_galleryaG ._zs_galleryaH ._zs_galleryaJ{padding-left:30px;padding-right:10px;font-size:14px;opacity:.6}._zs_galleryaG ._zs_galleryaK{float:left;position:relative;padding-top:30px;width:210px;padding-bottom:80px;background-color:#3d414d;transition:left var(--duration) ease-out;font-size:14px}._zs_galleryaG ._zs_galleryaK ._zs_galleryaL{display:block;height:46px;padding-left:24px;padding-right:10px}._zs_galleryaG ._zs_galleryaK ._zs_galleryaL,._zs_galleryaG ._zs_galleryaK ._zs_galleryaL ._zs_galleryaM{line-height:46px;color:#9ea0a6;cursor:pointer;transition:all .2s ease-out}._zs_galleryaG ._zs_galleryaK ._zs_galleryaL ._zs_galleryaM{float:right;font-size:24px}._zs_galleryaG ._zs_galleryaK ._zs_galleryaL._zs_galleryaN ._zs_galleryaM{transform:rotate(180deg)}._zs_galleryaG ._zs_galleryaK ._zs_galleryaL._zs_galleryaO,._zs_galleryaG ._zs_galleryaK ._zs_galleryaL._zs_galleryaO ._zs_galleryaM,._zs_galleryaG ._zs_galleryaK ._zs_galleryaL:hover,._zs_galleryaG ._zs_galleryaK ._zs_galleryaL:hover ._zs_galleryaM{color:#fff}._zs_galleryaG ._zs_galleryaK ._zs_galleryaP{display:block;height:46px;padding-left:20px;line-height:46px;border-left:4px solid transparent;color:#9ea0a6;overflow-y:hidden;transition:all .2s ease-out;cursor:pointer}._zs_galleryaG ._zs_galleryaK ._zs_galleryaP:hover{color:#fff}._zs_galleryaG ._zs_galleryaK ._zs_galleryaP._zs_galleryaQ{border-left:4px solid var(--color-brand);color:#fff;background-color:#2e313a}._zs_galleryaG ._zs_galleryaK ._zs_galleryaR{background-color:#343842;box-shadow:0 6px 8px rgba(51,51,51,.08)}._zs_galleryaG ._zs_galleryaK ._zs_galleryaR ._zs_galleryaP{padding-left:40px}._zs_galleryaG ._zs_galleryaK ._zs_galleryaR._zs_galleryaS ._zs_galleryaP{height:46px}._zs_galleryaG ._zs_galleryaT{position:absolute;top:0;left:210px;padding:30px}"),e.exports=r.extend({tmpl:function(a,l,e,_,r,s,g,t){if(e||(e=a),!r){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},y=/[&<>"'`]/g,o=function(a){return"&"+i[a]+";"};r=function(a){return""+(null==a?"":a)},_=function(a){return r(a).replace(y,o)}}if(!s){var z={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},n=function(a){return z[a]},p=/[!')(*]/g;s=function(a){return encodeURIComponent(r(a)).replace(p,n)}}if(!t){var d=/[\\'"]/g;t=function(a){return r(a).replace(d,"\\$&")}}var x="",c=a.viewId,f=a.text1;return x+='<div mxa="_zs_galleryD:_" class="_zs_galleryg"><div mxs="_zs_galleryD:_" class="_zs_galleryj"><div class="_zs_galleryaG"><div class="pl30 pt30 pr30 pb30"><div>view4：</div><div>使用另外的容器文件，而不是default</div><div>该容器没有顶部导航</div></div></div></div><div mxa="_zs_galleryD:a" class="_zs_galleryk"><div mxs="_zs_galleryD:a" class="_zs_galleryi">配置CustomPath</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(c)+'_text_1"><span mxa="_zs_galleryD:b" class="_zs_galleryn">'+r(f)+'</span><i mxs="_zs_galleryD:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+_(c)+"_text_1\">\nlet CustomPath = [&#123;\n    has: true,\n    name: 'view4',\n    path: '/example/empty',\n    view: '@./views/empty'\n&#125;]</pre></div></div>"},render:function(){this.updater.digest()}})});