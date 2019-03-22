/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-topbar/index",["magix","$"],(require,exports,module)=>{
/*Magix,$*/

var Magix = require("magix");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-topbar_index_","/* @dependent: ./index.less */\n/* 说明文档： https://thx.github.io/magix-gallery/#!/all/pro/theme */\n._zs_gallery_mx-topbar_index_-mx-shadow {\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.08);\n  border: 1px solid #f5f5f6;\n}\n/*用于覆盖bp的品牌色信息*/\n._zs_gallery_mx-topbar_index_-bar {\n  position: fixed;\n  z-index: 400;\n  height: 2px;\n  left: 0;\n  top: 0;\n  right: 0;\n  background-color: #4d7fff;\n  -webkit-transform: translate3d(-100%, 0px, 0px);\n          transform: translate3d(-100%, 0px, 0px);\n  transition: all 0.25s ease;\n}\n");
var barId = Magix.guid('mx_topbar_');
var Vframe = Magix.Vframe;
var timer, interval;
var percent = 100;
var Topbar = {
    '@{show}': function () {
        clearTimeout(timer);
        var bar = $('#' + barId);
        if (!bar.length) {
            $('body').append("<div class=\"_zs_gallery_mx-topbar_index_-bar\" id=\"" + barId + "\"></div>");
            interval = setInterval(Topbar['@{progress}'], 300);
        }
    },
    '@{porgress}': function () {
        var bar = $('#' + barId);
        if (bar.length) {
            if (percent > 15) {
                percent -= (3 + Math.random() * 5);
            }
            else if (percent > 4) {
                percent -= (1 + Math.random());
            }
            bar.css({
                transform: "translate3d(-" + percent + "%,0px,0px)"
            });
        }
    },
    '@{hide}': function () {
        clearInterval(interval);
        var bar = $('#' + barId);
        if (bar.length) {
            bar.css({
                transform: "translate3d(0,0px,0px)"
            });
            timer = setTimeout(function () {
                percent = 100;
                bar.remove();
            }, 400);
        }
    }
};
var rootId = Magix.config('rootId');
var rootVf = Vframe.get(rootId);
var resume = function (vf) {
    vf.on('alter', Topbar['@{show}']);
    vf.on('created', Topbar['@{hide}']);
};
if (rootVf) {
    resume(rootVf);
}
else {
    Topbar['@{show}'](); //未准备好的情况下
    var watch_1 = function (e) {
        if (e.vframe.id == rootId) {
            Vframe.off('add', watch_1);
            resume(e.vframe);
        }
    };
    Vframe.on('add', watch_1);
}

});