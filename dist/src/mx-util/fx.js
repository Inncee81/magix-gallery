define("mx-util/fx",["magix","./runner"],(_,f,t)=>{var n=_("magix"),i=_("./runner"),e=function(_){return _},u=Date.now||function(){return(new Date).getTime()},r=n.Base.extend({ctor:function(_,f){var t=this;t.__ft&&!f||(f=f||e,t.__ft=function(_,n){return _+(n-_)*f(t.__fu/t.__fv)}),t.__fw=[],t.__fx=_},__fC:function(_,f){this.__fp||(this.__fw.push({__fy:_,__fz:f}),this.__fA||this.__fB())},__fB:function(){var _=this,f=_.__fw.shift();f?(_.__fv=f.__fy,_.__fD=f.__fz,_.__fE=u(),_.__fA||i.__bG(_.__fx,_.__fA=function(f){_.__fu=Date.now()-_.__fE,_.__fu>_.__fv&&(_.__fu=_.__fv,f=1);try{_.__fD(_.__ft)}catch(_){f=_}f&&_.__fB()})):_.__m()},__m:function(){this.__fA&&(i.__bI(this.__fA),delete this.__fA,this.fire("stop"))},destroy:function(){this.__m(),this.__fw=[],this.__fp=1}});t.exports={__fG:function(){var _=new r;return this.capture(n.guid("__fF"),_),_}}});