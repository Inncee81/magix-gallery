define("mx-checkbox/index",["magix","$"],(e,t,i)=>{var d=e("magix"),a=e("$");i.exports=d.View.extend({init:function(e){this.updater.snapshot(),this.assign(e)},assign:function(e){var t=this.updater.altered(),i=e.checked+""=="true",d=e.disabled+""=="true",a=e.indeterminate+""=="true";return this.updater.set({checked:i,disabled:d,indeterminate:a}),t||(t=this.updater.altered()),!!t&&(this.updater.snapshot(),!0)},render:function(){this.updater.digest({});var e=this.updater.get(),t=a("#"+this.id);["checked","disabled","indeterminate"].forEach(function(i){t.prop(i,e[i])})}})});