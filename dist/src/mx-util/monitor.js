define("mx-util/monitor",["$"],(e,o,_)=>{var n=e("$"),i=0,f=[],t=n(document),r=n(window),u=function(e){for(var o=f.length;o--;){var _=f[o];if(_.__fv)f.splice(o,1);else{var n=_.__fz;"resize"!=e.type&&n.__o(e.target)||n.__q()}}},d=function(e){var o=f[e.id];o&&(o.__fv=!0),delete f[e.id]};_.exports={__t:function(e){d(e);var o={__fz:e};f.push(o),f[e.id]=o},__l:d,__k:function(){i||(t.on("mousedown keyup",u),r.on("resize",u)),i++},__m:function(){i>0&&(--i||(t.off("mousedown keyup",u),r.off("resize",u)))}}});