define("__test__/pro/menu5",["magix","../example","$","mx-copy/index","../hl"],(a,l,_)=>{a("mx-copy/index"),a("../hl");var e=a("magix"),r=a("../example");a("$");e.applyStyle("_zs_galleryg","._zs_galleryX{box-shadow:0 2px 4px rgba(51,51,51,.08);border:1px solid #eee}._zs_galleryY{height:160px;background-color:#fafafa}._zs_galleryZ{height:160px;padding:30px}._zs_gallerya_{box-shadow:0 6px 8px rgba(51,51,51,.08)}._zs_gallerya_ ._zs_galleryaa{height:50px;background-color:#4d7fff}._zs_gallerya_ ._zs_galleryaa ._zs_galleryab,._zs_gallerya_ ._zs_galleryaa ._zs_galleryac{float:left;height:50px;line-height:50px;color:#fff}._zs_gallerya_ ._zs_galleryaa ._zs_galleryab{width:210px;font-size:22px;opacity:.8;text-align:center}._zs_gallerya_ ._zs_galleryaa ._zs_galleryac{padding-left:30px;padding-right:10px;font-size:14px;opacity:.6}._zs_gallerya_ ._zs_galleryad{float:left;position:relative;padding-top:30px;width:210px;padding-bottom:80px;background-color:#3d414d;transition:left .25s ease-out;font-size:14px}._zs_gallerya_ ._zs_galleryad ._zs_galleryae{display:block;height:46px;padding-left:24px;padding-right:10px}._zs_gallerya_ ._zs_galleryad ._zs_galleryae,._zs_gallerya_ ._zs_galleryad ._zs_galleryae ._zs_galleryaf{line-height:46px;color:#9ea0a6;cursor:pointer;transition:all .2s ease-out}._zs_gallerya_ ._zs_galleryad ._zs_galleryae ._zs_galleryaf{float:right;font-size:24px}._zs_gallerya_ ._zs_galleryad ._zs_galleryae._zs_galleryag ._zs_galleryaf{-webkit-transform:rotate(180deg);transform:rotate(180deg)}._zs_gallerya_ ._zs_galleryad ._zs_galleryae._zs_galleryah,._zs_gallerya_ ._zs_galleryad ._zs_galleryae._zs_galleryah ._zs_galleryaf,._zs_gallerya_ ._zs_galleryad ._zs_galleryae:hover,._zs_gallerya_ ._zs_galleryad ._zs_galleryae:hover ._zs_galleryaf{color:#fff}._zs_gallerya_ ._zs_galleryad ._zs_galleryai{display:block;height:46px;padding-left:20px;line-height:46px;border-left:4px solid transparent;color:#9ea0a6;overflow-y:hidden;transition:all .2s ease-out;cursor:pointer}._zs_gallerya_ ._zs_galleryad ._zs_galleryai:hover{color:#fff}._zs_gallerya_ ._zs_galleryad ._zs_galleryai._zs_galleryaj{border-left:4px solid #4d7fff;color:#fff;background-color:#2e313a}._zs_gallerya_ ._zs_galleryad ._zs_galleryak{background-color:#343842;box-shadow:0 6px 8px rgba(51,51,51,.08)}._zs_gallerya_ ._zs_galleryad ._zs_galleryak._zs_galleryal ._zs_galleryai{height:46px}._zs_gallerya_ ._zs_galleryam{position:absolute;top:0;left:210px;padding:30px}"),_.exports=r.extend({tmpl:function(a,l,_,e,r,s,g,i){if(_||(_=a),!r){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},y=/[&<>"'`]/g,t=function(a){return"&"+d[a]+";"};r=function(a){return""+(null==a?"":a)},e=function(a){return r(a).replace(y,t)}}if(!s){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},z=function(a){return o[a]},n=/[!')(*]/g;s=function(a){return encodeURIComponent(r(a)).replace(n,z)}}if(!i){var p=/[\\'"]/g;i=function(a){return r(a).replace(p,"\\$&")}}var x="",c=a.viewId,f=a.text1;return x+='<div mxa="_zs_galleryF:_" class="_zs_galleryf"><div mxs="_zs_galleryF:_" class="_zs_galleryh"><div class="clearfix mb20"><div class="fl color-9">以下示例：</div><div class="fl">无侧边，padding，白底</div></div><div class="_zs_gallerya_"><div class="_zs_galleryaa clearfix"><div class="_zs_galleryab">LOGO</div><div class="_zs_galleryac">一级标题</div></div><div class="clearfix"><div class="_zs_galleryZ">内容区域</div></div></div></div><div mxa="_zs_galleryF:a" class="_zs_galleryi"><div mxs="_zs_galleryF:a" class="_zs_galleryg">配置Menus</div><div class="_zs_galleryj" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(c)+'_text_1"><span mxa="_zs_galleryF:b" class="_zs_galleryl">'+r(f)+'</span><i mxs="_zs_galleryF:b" class="mc-iconfont _zs_galleryk">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+e(c)+"_text_1\">\nlet Menus = [{\n    has: true,\n    name: '一级标题',\n    path: '/develop/index'\n}]</pre></div></div>"},render:function(){this.updater.digest()}})});