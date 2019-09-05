define("mx-grid/examples/index",["magix","$","examples/subs","mx-title/second","./10","./7","./8","./9","./1","./2","./3","./6","./4","./5","examples/api","./err"],(e,i,d)=>{e("examples/subs"),e("mx-title/second"),e("./10"),e("./7"),e("./8"),e("./9"),e("./1"),e("./2"),e("./3"),e("./6"),e("./4"),e("./5"),e("examples/api"),e("./err");var m=e("magix");e("$");d.exports=m.View.extend({tmpl:function(e,i,d,m,r,t,s,n){if(d||(d=e),!r){var x={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},a=/[&<>"'`]/g,l=function(e){return"&"+x[e]+";"};r=function(e){return""+(null==e?"":e)},m=function(e){return r(e).replace(a,l)}}if(!t){var v={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return v[e]},c=/[!')(*]/g;t=function(e){return encodeURIComponent(r(e)).replace(c,o)}}if(!n){var g=/[\\'"]/g;n=function(e){return r(e).replace(g,"\\$&")}}s||(s=function(e,i,d,m){for(m=e[_];--m;)if(e[d=_+m]===i)return d;return e[d=_+e[_]++]=i,d});var _="",p="",y=e.viewId,f=e.rows,u=e.cols;return p+='<div mxv mxa="_zs_gallerycI:_" class="pr pr120"><div mx-view="examples/subs?list='+s(d,[{name:"组合示例",key:y+"_demo10"},{name:"单格样式",key:y+"_grid",subs:[{name:"标题+内容区域",key:y+"_grid1"},{name:"只标题",key:y+"_grid2"},{name:"只内容区域",key:y+"_grid3"}]},{name:"布局示例",key:y+"_demo",subs:[{name:"水平等比例",key:y+"_demo1"},{name:"嵌套",key:y+"_demo6"},{name:"某一个固定宽度",key:y+"_demo2"},{name:"justify",key:y+"_demo3"},{name:"align",key:y+"_demo4"},{name:"垂直等比例",key:y+"_demo5"}]},{name:"mx-grid.row",key:y+"_row"},{name:"mx-grid.col",key:y+"_col"},{name:"问题小计",key:y+"_err"}])+'"></div><div mxs="_zs_gallerycI:_" mx-view="mx-title/second?content=%E7%BB%84%E5%90%88%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallerycI:a" class="clearfix mb40"><div mx-view="mx-grid/examples/10" id="'+m(y)+'_demo10"></div></div><div id="'+m(y)+'_grid" mx-view="mx-title/second?content=%E5%8D%95%E6%A0%BC%E6%A0%B7%E5%BC%8F"></div><div mxa="_zs_gallerycI:b" class="clearfix mb40"><div mx-view="mx-grid/examples/7" id="'+m(y)+'_grid1"></div><div mx-view="mx-grid/examples/8" id="'+m(y)+'_grid2"></div><div mx-view="mx-grid/examples/9" id="'+m(y)+'_grid3"></div></div><div id="'+m(y)+'_demo" mx-view="mx-title/second?content=%E5%B8%83%E5%B1%80%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallerycI:c" class="clearfix mb20"><div mxa="_zs_gallerycI:d" class="_zs_galleryd"><div mx-view="mx-grid/examples/1" id="'+m(y)+'_demo1"></div><div mx-view="mx-grid/examples/2" id="'+m(y)+'_demo2"></div><div mx-view="mx-grid/examples/3" id="'+m(y)+'_demo3"></div></div><div mxa="_zs_gallerycI:e" class="_zs_galleryd"><div mx-view="mx-grid/examples/6" id="'+m(y)+'_demo6"></div><div mx-view="mx-grid/examples/4" id="'+m(y)+'_demo4"></div><div mx-view="mx-grid/examples/5" id="'+m(y)+'_demo5"></div></div></div><div id="'+m(y)+'_row" mx-view="mx-title/second?content=mx-grid.row&tip=flex%E5%AE%B9%E5%99%A8"></div><div mxv="rows" mx-view="examples/api?options='+s(d,f)+'" class="mb40"></div><div id="'+m(y)+'_col" mx-view="mx-title/second?content=mx-grid.col&tip=flex%E9%A1%B9%E7%9B%AE"></div><div mxv="cols" mx-view="examples/api?options='+s(d,u)+'" class="mb40"></div><div id="'+m(y)+'_err" mx-view="mx-title/second?content=%E9%97%AE%E9%A2%98%E5%B0%8F%E8%AE%A1"></div><div mxs="_zs_gallerycI:a" mx-view="mx-grid/examples/err" class="mb20"></div></div>'},render:function(){this.updater.digest({rows:[{key:"width",desc:"容器宽度",type:"number",def:"auto"},{key:"height",desc:"容器高度",type:"number",def:"auto"},{key:"direction",desc:"主轴方向(flex项目的排列方向)，可选值：<br/>row：主轴为水平方向，起点在左端<br/>column：主轴为垂直方向，起点在上沿",type:"string",def:"row"},{key:"justify",desc:"主轴对齐方式，可选值：<br/>1. left（默认值）：左对齐<br/>2. right：右对齐<br/>3. center：居中<br/>4. space-between：两端对齐，项目之间的间隔相等，即剩余空间等分成间隙。<br/>5. space-around：每个项目两侧的间隔相等，所以项目之间的间隔比项目与边缘的间隔大一倍。",type:"string",def:"left"},{key:"align",desc:"交叉轴对齐方式，可选值：<br/>1. stretch（默认值）：如果项目未设置高度或者设为 auto，将占满整个容器的高度<br/>2. top：交叉轴的起点对齐<br/>3. bottom：交叉轴的终点对齐<br/>4. center：交叉轴的中点对齐",type:"string",def:"stretch"},{key:"gutter",desc:"flex项目的间隔距离<br/>direction=row：margin-right<br/>direction=column：margin-bottom",type:"number",def:"0"}],cols:[{key:"flex",desc:"flex: flex-grow, flex-shrink 和 flex-basis",type:"string",def:"1"},{key:"width",desc:"指定项目固定宽度，优先级 width > flex",type:"number",def:""},{key:"height",desc:"项目高度",type:"number",def:""}],viewId:this.id})}})});