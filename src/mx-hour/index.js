define("mx-hour/index",["magix","$","mx-dragselect/index"],(e,t,d)=>{e("mx-dragselect/index");var i=e("magix");i.applyStyle("_w","._dw{padding:0;height:38.4px;overflow:hidden;cursor:default;min-width:1px}._dx{opacity:0}._dy{background-color:#f37b63}._dz{border:none}._dA{border-right:1px solid #e6e6e6}");var r=e("$");d.exports=i.View.extend({tmpl:function(e){var t="",d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},i=/[&<>"'`]/g,r=function(e){return null==e?"":""+e},a=function(e){return"&"+d[e]+";"};t+='<tr mx-change="__h()" mx-dragbegin="__bf()" mx-dragfinish="__bg()" mx-view="mx-dragselect/index">';for(var n=0;n<24;n++)t+='<td class="_dw',e.noBorder&&(t+=" _dz",n<23&&(t+=" _dA")),t+='" data-hour="'+(_=n,r(_).replace(i,a))+'"><span class="_dx">'+r(("0"+n).slice(-2))+"</span></td>";var _;return t+="</tr>"},init:function(e){this.__cY=e.range,this.__cZ="no"==e.border},assign:function(){return!1},render:function(){this.updater.digest({noBorder:this.__cZ});var e=r("#"+this.id);this.__k=e,this.__cW=e.find("._dw"),this.__cY&&this.val(this.__cY)},val:function(e){var t=this.__cW;if(e||""===e){var d={};t.each(function(t,i){i=r(i),"1"==e.charAt(t)?(d[t]=1,i.addClass("_dy")):i.removeClass("_dy")}),this.__bc=d}else e=[],t.each(function(t,d){d=r(d),t<24&&e.push(d.hasClass("_dy")?1:0)}),e=e.join("");return e},__x:function(){var e=this.__be,t=this.val();e!=t&&this.__k.val(t).trigger({type:"change",range:t})},"__h<change,click>":function(e){e.stopPropagation();var t=r(e.node),d=t.data("hour"),i=this.__bc,a=this.__bd;"add"==e.action?i[d]?(t.removeClass("_dy"),delete i[d],"drag"==e.mode&&(a[d]=1)):(t.addClass("_dy"),i[d]=1,"drag"==e.mode&&delete a[d]):"remove"==e.action&&(a[d]?(t.addClass("_dy"),i[d]=1,"drag"==e.mode&&delete a[d]):(t.removeClass("_dy"),delete i[d],"drag"==e.mode&&(a[d]=1))),"click"==e.mode&&this.__x()},"__bf<dragbegin>":function(e){e.stopPropagation();this.__be=this.val(),this.__bd={}},"__bg<dragfinish>":function(e){e.stopPropagation();this.__x(),delete this.__bd}},{improve:function(e){e||(e="");for(var t=0;t<24;)e.charAt(t)||(e+="0"),t++;return e}})});