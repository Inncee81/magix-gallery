define("mx-tree/index",["magix","mx-tree/util","../mx-medusa/util","./branch"],(e,t,r)=>{e("./branch");var n=e("magix"),a=n.Vframe,l=e("mx-tree/util"),o=e("../mx-medusa/util");n.applyStyle("_zs_galleryaF",':root{--mx-tree-oper-size:calc(var(--font-size) + 2px)}._zs_gallerykR{position:relative;height:32px;line-height:20px;padding-bottom:12px;background-color:#fff;overflow:hidden;transition:height .2s}._zs_gallerykR ._zs_gallerykS{float:left;width:var(--mx-tree-oper-size);height:var(--mx-tree-oper-size);margin-right:5px;line-height:var(--mx-tree-oper-size);font-size:var(--mx-tree-oper-size);color:#ccc;transition:color var(--duration);-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-select:none}._zs_gallerykR ._zs_gallerykT{cursor:pointer}._zs_gallerykR ._zs_gallerykT:hover{color:#666}._zs_gallerykU ._zs_gallerykR{height:0;padding-bottom:0}._zs_gallerykV{position:relative}._zs_gallerykW{padding-left:calc(var(--mx-tree-oper-size) + 5px)}._zs_gallerykX,._zs_gallerykX ._zs_gallerykV{position:relative}._zs_gallerykX ._zs_gallerykV:after{content:"";position:absolute;top:22px;left:calc(var(--mx-tree-oper-size)/2);bottom:2px;width:1px;background-color:var(--color-border)}._zs_gallerykX ._zs_gallerykV:last-child:after{content:none}'),r.exports=n.View.extend({tmpl:function(e,t,r,n,a,l,o,i){if(r||(r=e),!a){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,u=function(e){return"&"+s[e]+";"};a=function(e){return""+(null==e?"":e)},n=function(e){return a(e).replace(c,u)}}if(!l){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},d=function(e){return _[e]},f=/[!')(*]/g;l=function(e){return encodeURIComponent(a(e)).replace(f,d)}}if(!i){var p=/[\\'"]/g;i=function(e){return a(e).replace(p,"\\$&")}}o||(o=function(e,t,r,n){for(n=e[g];--n;)if(e[r=g+n]===t)return r;return e[r=g+e[g]++]=t,r});var g="",h="",v=e.hasLine,m=e.viewId,x=e.readOnly,y=e.needExpand,z=e.textKey,k=e.valueKey,V=e.closeMap,b=e.list;return h+='<div mxv="readOnly,needExpand,closeMap,list" class="',v&&(h+=" _zs_gallerykX "),h+='" id="tree_'+n(m)+'" mx-change="'+t+'__ac()" mx-view="mx-tree/branch?readOnly='+o(r,x)+"&needExpand="+o(r,y)+"&textKey="+l(z)+"&valueKey="+l(k)+"&closeMap="+o(r,V)+"&list="+o(r,b)+'"></div>'},init:function(e){var t=this;t.__fn={},t.__fo=[],t.__a=$("#"+t.id),t.updater.snapshot(),t.assign(e)},assign:function(e){var t,r=this,a=r.updater.altered(),i=e.readOnly+""=="true",s=e.hasLine+""=="true",c=e.valueKey||"value",u=e.textKey||"text",_=e.parentKey||"pValue",d=e.needAll+""=="true",f=e.needExpand+""=="true",p=l.listToTree(e.list,c,_);if(d){var g={};g[c]=r.id+"_all",g[u]=o["select.all"],g.isAll=!0,g.children=p.list,t=[g]}else t=p.list;var h=e.close+""=="true",v={},m=function(e){e.forEach(function(e){v[e[c]]=h,e.children&&e.children.length>0&&m(e.children)})};m(t),r.__fn=n.mix(v,r.__fn);var x=function(e){e.forEach(function(e){e.close=r.__fn[e[c]],e.children&&e.children.length>0&&x(e.children)})};return x(t),r.__fo=r.__fo.map(function(e){return e+""}),(e.bottomValues||[]).forEach(function(e){e+="",r.__fo.indexOf(e)<0&&r.__fo.push(e)}),r.updater.set({viewId:r.id,valueKey:c,textKey:u,list:t,readOnly:i,hasLine:s,needExpand:f,closeMap:r.__fn,bottomValues:r.__fo}),r.__a.val(r.__fo),a||(a=r.updater.altered()),!!a&&(r.updater.snapshot(),!0)},render:function(){this.updater.digest();var e=this.updater.get("bottomValues");e.length>0&&this.setBottomValues(e)},"__ac<change>":function(e){e.stopPropagation();var t=this.getBottomValues();this.__a.val(this.__fo=t).trigger($.Event("change",{bottomValues:t}))},setBottomValues:function(e){this.loop(function(t){t.invoke("setValues",[e])})},getBottomValues:function(){var e=[];return this.loop(function(t){var r=t.invoke("getValues");e=e.concat(r)}),e},getBottomItems:function(){var e=[];return this.loop(function(t){var r=t.invoke("getItems");e=e.concat(r)}),e},loop:function(e){var t=this.owner.children(),r=function(t){for(var n=0,l=t;n<l.length;n++){var o=l[n],i=a.get(o);e(i);var s=i.children();s&&s.length>0&&r(s)}};r(t)}})});