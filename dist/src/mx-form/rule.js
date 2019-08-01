define("mx-form/rule",["$","../mx-medusa/util"],(r,t,e)=>{var i=r("$"),n=function(r){return r.replace(/[^\x00-\xff]/g,"xl").length},a=r("../mx-medusa/util"),c=function(r){var t={cm:/^(?:0?1)(?:3[456789]|47|5[0124789]|78|8[23478]|9[89])\d{8}$/,cu:/^(?:0?1)(?:3[012]|45|5[356]|66|7[56]|8[356])\d{8}$/,ce:/^(?:0?1)(?:33|49|53|7[37]|8[019])\d{8}$/,cn:/^(?:0?1)(?:70)\d{8}$/,hk:/^(?:0?[1569])(?:\d{7}|\d{8}|\d{12})$/,macao:/^6\d{7}$/,tw:/^(?:0?[679])(?:\d{7}|\d{8}|\d{10})$/},e=!1;for(var i in t)t[i].test(r)&&(e=!0);return e};e.exports={email:function(r,t){var e=!0,n=a["form.check.email"],c=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,u=[];if((r=i.trim(r))&&(i.isArray(t)?(t[0]&&(e=c.test(r)),t[1]&&(n=t[1]),t[2]&&i.isArray(t[2])&&(u=t[2])):t&&(e=c.test(r))),e&&u.length>0){for(var m=!1,l=r.substring(r.indexOf("@")+1),o=0;o<u.length;o++)if(u[o]==l){m=!0;break}m||(e=!1)}return{valid:e,tip:n}},url:function(r,t){var e=!0,n=a["form.check.url"],c=/(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:\/~\+#]*[\w\-\@?^=%&\/~\+#])?/;return(r=i.trim(r))&&(i.isArray(t)?(t[0]&&(e=c.test(r)),t[1]&&(n=t[1])):t&&(e=c.test(r))),{valid:e,tip:n}},english:function(r,t){var e=!0,n=a["form.check.english"],c=/^[A-Za-z]+$/;return(r=i.trim(r))&&(i.isArray(t)?(t[0]&&(e=c.test(r)),t[1]&&(n=t[1])):t&&(e=c.test(r))),{valid:e,tip:n}},chinese:function(r,t){var e=!0,n=a["form.check.chinese"],c=/^[\u0391-\uFFE5]+$/;return(r=i.trim(r))&&(i.isArray(t)?(t[0]&&(e=c.test(r)),t[1]&&(n=t[1])):t&&(e=c.test(r))),{valid:e,tip:n}},mobile:function(r,t){var e=!0,n=a["form.check.mobile"];return(r=i.trim(r))&&(i.isArray(t)?(t[0]&&(e=c(r)),t[1]&&(n=t[1])):t&&(e=c(r))),{valid:e,tip:n}},currency:function(r,t){var e=!0,n=a["form.check.currency"],c=/^(([1-9]\d*)|0)(\.\d{1,2})?$/;return(r=i.trim(r))&&(i.isArray(t)?(t[0]&&(e=c.test(r)),t[1]&&(n=t[1])):t&&(e=c.test(r))),{valid:e,tip:n}},trim:function(r,t){var e=!0,n=a["form.check.trim"];return i.isArray(t)?(t[0]&&(e=/\s/.test(r)),t[1]&&(n=t[1])):t&&(e=/\s/.test(r)),{valid:!e,tip:n}},required:function(r,t){var e=!0,n=a["form.check.required"];return r=i.trim(r),i.isArray(t)?(t[0]&&(e=""!=r),t[1]&&(n=t[1])):t&&(e=""!=r),{valid:e,tip:n}},number:function(r,t){var e=!0,n=a["form.check.number"];return(r=i.trim(r))&&t&&(e=r.indexOf(".")==r.lastIndexOf(".")&&r.indexOf(".")!=r.length-1&&/^-?[\d\.]+$/.test(r)),{valid:e,tip:n}},int:function(r,t){var e=!0,n=a["form.check.int"];return(r=i.trim(r))&&t&&(e=/^-?\d+$/.test(r)),{valid:e,tip:n}},posint:function(r,t){var e=!0,n=a["form.check.posint"],c=/^[0-9]*[1-9][0-9]*$/;return(r=i.trim(r))&&(i.isArray(t)?(t[0]&&(e=c.test(r)),t[1]&&(n=t[1])):t&&(e=c.test(r))),{valid:e,tip:n}},negint:function(r,t){var e=!0,n=a["form.check.negint"],c=/^-[0-9]*[1-9][0-9]*$/;return(r=i.trim(r))&&(i.isArray(t)?(t[0]&&(e=c.test(r)),t[1]&&(n=t[1])):t&&(e=c.test(r))),{valid:e,tip:n}},length:function(r,t){var e=!0,n=a["form.word.between"];if(r=i.trim(r)){var c=t[0],u=t[1],m=r.length;e=m>=c&&m<=u,n=n.replace("${min}",c).replace("${max}",u).replace("${current}",m)}return{valid:e,tip:n}},minlength:function(r,t){var e=!0,n=[a["form.less"],t,a["form.word"]].join(" ");return(r=i.trim(r))&&(i.isArray(t)?(e=r.length>=t[0],t[1]&&(n=t[1])):e=r.length>=t),{valid:e,tip:n}},maxlength:function(r,t){var e=!0,n=[a["form.more"],t,a["form.word"]].join(" ");return(r=i.trim(r))&&(i.isArray(t)?(e=r.length<=t[0],t[1]&&(n=t[1])):e=r.length<=t),{valid:e,tip:n}},blength:function(r,t){var e=!0,c=a["form.char.between"];if(r=i.trim(r)){var u=t[0],m=t[1],l=n(r);e=l>=u&&l<=m,c=c.replace("${min}",u).replace("${max}",m).replace("${current}",l)}return{valid:e,tip:c}},bminlength:function(r,t){r=i.trim(r);var e=n(r),c=!0,u=a["form.less"]+" "+t+" "+a["form.char"];return r&&(i.isArray(t)?(c=e>=t[0],t[1]&&(u=t[1])):c=e>=t),{valid:c,tip:u}},bmaxlength:function(r,t){r=i.trim(r);var e=n(r),c=!0,u=a["form.more"]+" "+t+" "+a["form.char"];return r&&(i.isArray(t)?(c=e<=t[0],t[1]&&(u=t[1])):c=e<=t),{valid:c,tip:u}},equalto:function(r,t){var e,n=a["form.check.equal"];return i.isArray(t)?(e=t[0],n=t[1]?t[1]:n.replace("${rule}",t[0])):(e=t,n=n.replace("${rule}",t)),{valid:i("#"+e).val()==r,tip:n}},unequalto:function(r,t){var e,n=a["form.check.unequal"];i.isArray(t)?(e=t[0],t[1]&&(n=t[1])):e=t;var c=[];return(e=e.split(",")).forEach(function(t){i("#"+t).val()==r&&c.push(t)}),n=n.replace("${rule}",c.join(",")),{valid:0==c.length,tip:n}},pattern:function(r,t){var e=!0,n=a["form.check.pattern"];if(r=i.trim(r)){var c=void 0;i.isArray(t)?(c=new RegExp(t[0]),t[1]&&(n=t[1])):c=new RegExp(t),e=c.test(r)}return{valid:e,tip:n}},range:function(r,t){var e=!0,n=t[0],c=t[1],u=t[2]||a["form.check.range"];return(r=i.trim(r))&&(e=+r>=+n&&+r<=+c),{valid:e,tip:u.replace("${min}",n).replace("${max}",c)}},max:function(r,t){var e=!0,n=a["form.max"]+" "+t;return(r=i.trim(r))&&(i.isArray(t)?(e=+r<=+t[0],t[1]&&(n=t[1])):e=+r<=+t),{valid:e,tip:n}},min:function(r,t){var e=!0,n=a["form.min"]+" "+t;return(r=i.trim(r))&&(i.isArray(t)?(e=+r>=+t[0],t[1]&&(n=t[1])):e=+r>=+t),{valid:e,tip:n}}}});