define("mx-table/examples/23",["magix","examples/example","$","mx-table/sort","../index"],(e,i,t)=>{e("../index");e("magix");var l=e("examples/example"),d=(e("$"),e("mx-table/sort"));t.exports=l.extend({tmpl:function(e,i,t,l,d,r,a,f){if(t||(t=e),!d){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},s=/[&<>"'`]/g,o=function(e){return"&"+n[e]+";"};d=function(e){return""+(null==e?"":e)},l=function(e){return d(e).replace(s,o)}}if(!r){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return x[e]},c=/[!')(*]/g;r=function(e){return encodeURIComponent(d(e)).replace(c,m)}}if(!f){var _=/[\\'"]/g;f=function(e){return d(e).replace(_,"\\$&")}}var u="",g=e.selected,v=e.groups,p=e.list,h=e.format;u+='<div mxa="_zs_gallerye6:_" class="pt10 pb10">'+l(g)+'</div><div mxa="_zs_gallerye6:a" mx-view="mx-table/index?sticky=true" class="mb40"><div><table mxa="_zs_gallerye6:b" class="table"><thead><tr><th mxs="_zs_gallerye6:_" rowspan="2">固定1</th><th mxs="_zs_gallerye6:a" rowspan="2">固定2</th><th mxs="_zs_gallerye6:b" rowspan="2">固定3</th>';for(var y=0,b=v.length;y<b;y++){u+='<th class="field-group" colspan="'+l((I=v[y]).fields.length)+'"><div mxa="_zs_gallerye6:c" class="group-name">'+l(I.name)+"</div></th>"}u+="</tr><tr>";for(var z=0,k=v.length;z<k;z++){u+=" ";for(var w=0,$=(I=v[z]).fields,A=$.length;w<A;w++){u+='<th mxa="_zs_gallerye6:d" class="field-item">'+l((T=$[w]).name)+'<span sort-trigger="'+l(T.key)+'"></span></th>'}u+=" "}u+="</tr></thead><tbody>";for(var B=0,C=p.length;B<C;B++){var E=p[B];u+="<tr><td>"+l(E.fixed1)+"</td><td>"+l(E.fixed2)+"</td><td>"+l(E.fixed3)+"</td>";for(var F=0,G=v.length;F<G;F++){var I;u+=" ";for(var L=0,R=(I=v[F]).fields,S=R.length;L<S;L++){var T;u+="<td>"+l(h(E[(T=R[L]).key]))+"</td>"}u+=" "}u+="</tr>"}return u+="</tbody></table></div></div>"},mixins:[d],init:function(e){this.updater.set({selected:e.selected}),this.observeLocation(["orderField","orderBy"])},render:function(){var e=this,i=[{name:"数字（忽略无值行）",fields:[{name:"数字列1",key:"field1"},{name:"数字列2",key:"field2"}]},{name:"字符串排序（忽略无值行 + 忽略大小写）",fields:[{name:"英文",key:"field3"},{name:"中文",key:"field4"}]}],t=0;i.forEach(function(e){t+=e.fields.length});var l=[{fixed1:"1_1",fixed2:"1_2",fixed3:"1_3",field1:9e3,field2:3e3,field3:"Abc",field4:"中文"},{fixed1:"2_1",fixed2:"2_2",fixed3:"2_3",field1:9001,field2:void 0,field3:"dsas",field4:"测试"},{fixed1:"3_1",fixed2:"3_2",fixed3:"3_3",field1:9004,field2:2990,field3:"acc",field4:""},{fixed1:"4_1",fixed2:"4_2",fixed3:"4_3",field1:null,field2:3010,field3:"GSBa",field4:"你好"},{fixed1:"5_1",fixed2:"5_2",fixed3:"5_3",field1:9051,field2:3e3,field3:"",field4:"随机"}];setTimeout(function(){e.updater.digest({list:e.sort(l),groups:i,len:t,format:function(e){return e||"-"}})},1e3)}})});