define("mx-popover/base",["magix","$"],(t,e,o)=>{var _=t("magix"),l=(_.Vframe,t("$"));o.exports=_.View.extend({constants:{showDelay:100,hideDelay:200,classNames:{"bottom-left":"_zs_galleryio","bottom-right":"_zs_galleryip","bottom-center":"_zs_galleryin","top-left":"_zs_galleryix","top-right":"_zs_galleryiy","top-center":"_zs_galleryiw","left-top":"_zs_galleryis","left-bottom":"_zs_galleryiq","left-center":"_zs_galleryir","right-top":"_zs_galleryiv","right-bottom":"_zs_galleryit","right-center":"_zs_galleryiu"}},bindScroll:function(){var t=this,e=t.__bL;e&&("string"!=typeof e||/^#/.test(e)||/^\./.test(e)?l(e):l("#"+e)).scroll(function(){t.__cE&&t.__bS()})},__bS:function(){var t=this,e=t.__a,o=l("#popover_"+t.id);if(o&&o.length){var _=e.outerWidth(),r=e.outerHeight(),i=e.offset(),a=o.outerWidth(),s=o.outerHeight(),c=i.top+10,f=i.left-(a-_)/2,p=+t.__cL,g=+t.__cM;if(isNaN(p)||isNaN(g))switch(t.__cA+"_"+t.__cB){case"top_left":c=i.top-s-10,f=i.left;break;case"top_center":c=i.top-s-10,f=i.left-(a-_)/2;break;case"top_right":c=i.top-s-10,f=i.left+_-a;break;case"bottom_left":c=i.top+r+10,f=i.left;break;case"bottom_center":c=i.top+r+10,f=i.left-(a-_)/2;break;case"bottom_right":c=i.top+r+10,f=i.left+_-a;break;case"left_top":c=i.top,f=i.left-a-10;break;case"left_center":c=i.top-(s-r)/2,f=i.left-a-10;break;case"left_bottom":c=i.top-(s-r),f=i.left-a-10;break;case"right_top":c=i.top,f=i.left+_+10;break;case"right_center":c=i.top-(s-r)/2,f=i.left+_+10;break;case"right_bottom":c=i.top-(s-r),f=i.left+_+10}else c=p,f=g;var b=t.__cJ||{};return l.isEmptyObject(b)||(f+=b.left||0,c+=b.top||0),o.css({textAlign:t.__cH,left:f,top:c}),o}},"$win<scroll>":function(t){this.__cE&&this.__bS()},"$doc<dialogScolll>":function(t){this.__cE&&this.__bS()}})});