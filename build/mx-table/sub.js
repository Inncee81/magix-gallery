define("mx-table/sub",["$","magix"],(e,s,t)=>{var l=e("$");e("magix").applyStyle("_zs_gallery_mx-table_sub_","._zs_gallery_mx-table_sub_-sub-wrapper {\n  position: relative;\n  display: inline-block;\n  width: 1px;\n  height: 1px;\n}\n._zs_gallery_mx-table_sub_-sub-wrapper ._zs_gallery_mx-table_sub_-sub-expand,\n._zs_gallery_mx-table_sub_-sub-wrapper ._zs_gallery_mx-table_sub_-sub-close {\n  position: absolute;\n  top: -10px;\n  left: 0;\n  width: 16px;\n  height: 16px;\n  text-align: center;\n  line-height: 16px;\n}\n._zs_gallery_mx-table_sub_-sub-expand {\n  cursor: pointer;\n  color: var(--color-brand);\n}\n._zs_gallery_mx-table_sub_-sub-close {\n  cursor: pointer;\n  color: #999;\n}\n._zs_gallery_mx-table_sub_-sub-close:hover {\n  color: #333;\n}\n"),t.exports={ctor:function(){var e=this;e["@{sub.toggle.store}"]={};var s=function(s){var t=e["@{sub.toggle.store}"];l("#"+(s.id||e.id)).find("[sub-toggle]").each(function(s,n){var a=l(n).attr("sub-toggle");/^true$/i.test(l(n).attr("data-expand"))&&!t[a]&&(t[a]={expand:!0});var r=t[a];e.sync(r&&r.expand,n,a)})};e.on("rendered",s),e.on("domready",s)},sync:function(e,s,t){var n=l("#"+this.id);l(s).addClass("_zs_gallery_mx-table_sub_-sub-wrapper"),e?(l(s).html('<i class="mc-iconfont _zs_gallery_mx-table_sub_-sub-expand">&#xe653;</i>'),n.find("[sub-toggle-parent="+t+"]").removeClass("hide")):(l(s).html('<i class="mc-iconfont _zs_gallery_mx-table_sub_-sub-close">&#xe652;</i>'),n.find("[sub-toggle-parent="+t+"]").addClass("hide"))},"$[sub-toggle]<click>":function(e){l("#"+this.id);var s=l(e.eventTarget),t=s.attr("sub-toggle"),n=this["@{sub.toggle.store}"][t];n||(n=this["@{sub.toggle.store}"][t]={}),n.expand=!n.expand,this.sync(n.expand,s,t),l(document).trigger("tableresize")}}});