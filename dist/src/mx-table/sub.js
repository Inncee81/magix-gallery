define("mx-table/sub",["$","magix"],(e,t,a)=>{var l=e("$");e("magix").applyStyle("_zs_galleryaC","._zs_gallerykv{position:relative;display:inline-block;width:1px;height:1px}._zs_gallerykv ._zs_gallerykw,._zs_gallerykv ._zs_gallerykx{position:absolute;top:-10px;left:0;width:16px;height:16px;text-align:center;line-height:16px}._zs_gallerykx{cursor:pointer;color:var(--color-brand)}._zs_gallerykw{cursor:pointer;color:#999}._zs_gallerykw:hover{color:#333}"),a.exports={ctor:function(){var e=this;e.__eK={};var t=function(t){var a=e.__eK;l("#"+(t.id||e.id)).find("[sub-toggle]").each(function(t,r){var i=l(r).attr("sub-toggle");/^true$/i.test(l(r).attr("data-expand"))&&!a[i]&&(a[i]={expand:!0});var s=a[i];e.sync(s&&s.expand,r,i)})};e.on("rendered",t),e.on("domready",t)},sync:function(e,t,a){var r=l("#"+this.id);l(t).addClass("_zs_gallerykv"),e?(l(t).html('<i class="mc-iconfont _zs_gallerykx">&#xe653;</i>'),r.find("[sub-toggle-parent="+a+"]").removeClass("hide")):(l(t).html('<i class="mc-iconfont _zs_gallerykw">&#xe652;</i>'),r.find("[sub-toggle-parent="+a+"]").addClass("hide"))},"$[sub-toggle]<click>":function(e){l("#"+this.id);var t=l(e.eventTarget),a=t.attr("sub-toggle"),r=this.__eK[a];r||(r=this.__eK[a]={}),r.expand=!r.expand,this.sync(r.expand,t,a),l(document).trigger("tableresize")}}});