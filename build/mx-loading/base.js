define("mx-loading/base",["$","magix"],(i,n,a)=>{var o=i("$");i("magix");a.exports={ctor:function(){var i=this,n=i.id+"_loading";i.on("destroy",function(){i.hideLoading();var a=o("#"+n);a&&a.length&&a.remove();var e=o("#"+n+"_mask");e&&e.length&&e.remove()})},hideLoading:function(){var i=this.id+"_loading";this["@{loading.build}"]().css({display:"none"});var n=o("#"+i+"_mask");n.length>0&&n.css({display:"none"})}}});