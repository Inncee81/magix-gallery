define("mx-util/monitor",["$"],(e,n,_)=>{var o=e("$"),i=0,f=[],t=o(document),r=o(window),u=function(e){for(var n=f.length;n--;){var _=f[n];if(_.__fl)f.splice(n,1);else{var o=_.__fD;"resize"!=e.type&&o.__l(e.target)||o.__n()}}},d=function(e){var n=f[e.id];n&&(n.__fl=!0),delete f[e.id]};_.exports={__q:function(e){d(e);var n={__fD:e};f.push(n),f[e.id]=n},__i:d,__h:function(){i||(t.on("mousedown keyup",u),r.on("resize",u)),i++},__j:function(){i>0&&(--i||(t.off("mousedown keyup",u),r.off("resize",u)))}}});