/*
    generate by magix-combine@3.8.3: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-taginput/__test__/index",["magix","mx-gtip/index","../index","__test__/hl"],(require,exports,module)=>{
/*Magix,GTip*/
require("../index");
require("__test__/hl");
/*
ver:2.0.1
*/
/*
    author:xinglie.lkf@alibaba-inc.com
 */
var Magix = require("magix");
var GTip = require("mx-gtip/index");
module.exports = Magix.View.extend({
    tmpl: {"html":"<h2>mx-taginput</h2><h3>默认情形</h3><div class=\"_B _ai\"><div class=\"_aa\" mx-view=\"mx-taginput/index?list=<%@$$.list%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E5%88%86%E7%B1%BB\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-taginput\n    list=\"&lt;%@ list %&gt;\"\n    placeholder=\"请选择分类\"\n&gt;&lt;/div&gt;</pre><div class=\"_z\">Javascript Code:</div><pre mx-view=\"__test__/hl\">let Magix = require('magix');\nMagix.applyStyle('@index.css');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            list: ['分类1', '分类2', '分类3', '分类4', '分类5', '分类6', '分类7', '分类8', '分类9', '分类10']\n        });\n    }\n});</pre></div><h3 class=\"_f\">默认选中</h3><div class=\"_B _ai\"><div class=\"_aa\" mx-view=\"mx-taginput/index?list=<%@$$.list%>&selected=<%@$$.selected%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E5%88%86%E7%B1%BB\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-taginput\n    list=\"&lt;%@ list %&gt;\"\n    selected=\"&lt;%@ selected %&gt;\"\n    placeholder=\"请选择分类\"/&gt;</pre><div class=\"_z\">Javascript Code:</div><pre mx-view=\"__test__/hl\">let Magix = require('magix');\nMagix.applyStyle('@index.css');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            list: ['分类1', '分类2', '分类3', '分类4', '分类5', '分类6', '分类7', '分类8', '分类9', '分类10'],\n            selected: ['分类1', '分类5', '分类10']\n        });\n    }\n});</pre></div><h3 class=\"_f\">禁用</h3><div class=\"_B _ai\"><div class=\"_aa\" mx-view=\"mx-taginput/index?list=<%@$$.list%>&selected=<%@$$.selected%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E5%88%86%E7%B1%BB&disabled=true\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-taginput\n    list=\"&lt;%@ list %&gt;\"\n    selected=\"&lt;%@ selected %&gt;\"\n    placeholder=\"请选择分类\"\n    disabled=\"true\"/&gt;</pre><div class=\"_z\">Javascript Code:</div><pre mx-view=\"__test__/hl\">let Magix = require('magix');\nMagix.applyStyle('@index.css');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            list: ['分类1', '分类2', '分类3', '分类4', '分类5', '分类6', '分类7', '分类8', '分类9', '分类10'],\n            selected: ['分类1', '分类5', '分类10']\n        });\n    }\n});</pre></div><h3 class=\"_f\">数据列表为对象</h3><div class=\"_B _ai\"><div class=\"_aa\" mx-view=\"mx-taginput/index?list=<%@$$.userList%>&selected=<%@$$.userSelected%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E7%94%A8%E6%88%B7&textKey=name&valueKey=id\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-taginput\n    list=\"&lt;%@ userList %&gt;\"\n    selected=\"&lt;%@ userSelected %&gt;\"\n    placeholder=\"请选择用户\"\n    text-key=\"name\"\n    value-key=\"id\"/&gt;</pre><div class=\"_z\">Javascript Code:</div><pre mx-view=\"__test__/hl\">let Magix = require('magix');\nMagix.applyStyle('@index.css');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    render() {\n        let me = this;\n        me.updater.digest({\n            userList: [{\n                name: 'xinglie',\n                id: 58782\n            }, {\n                name: 'xinglie1',\n                id: 587821\n            }, {\n                name: 'xinglie2',\n                id: 587822\n            }, {\n                name: 'xinglie3',\n                id: 587823\n            }, {\n                name: 'xinglie4',\n                id: 587824\n            }, {\n                name: 'xinglie5',\n                id: 587825\n            }, {\n                name: 'xinglie6',\n                id: 587826\n            }, {\n                name: 'xinglie7',\n                id: 587827\n            }, {\n                name: 'xinglie8',\n                id: 587828\n            }, {\n                name: 'xinglie9',\n                id: 587829\n            }],\n            userSelected: [58782]\n        });\n    }\n});</pre></div><h3 class=\"_f\">change事件</h3><div class=\"_B _ai\"><div mx-change=\"\u001f\u001eshowUserIds()\" class=\"_aa\" mx-view=\"mx-taginput/index?list=<%@$$.userList%>&selected=<%@$$.userSelected%>&placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E7%94%A8%E6%88%B7&textKey=name&valueKey=id\"></div></div><div class=\"_B\"><div>HTML Code:</div><pre mx-view=\"__test__/hl\">&lt;mx-taginput\n    list=\"&lt;%@ userList %&gt;\"\n    selected=\"&lt;%@ userSelected %&gt;\"\n    placeholder=\"请选择用户\"\n    text-key=\"name\"\n    value-key=\"id\"\n    mx-change=\"showUserIds()\"/&gt;</pre><div class=\"_z\">Javascript Code:</div><pre mx-view=\"__test__/hl\">let Magix = require('magix');\nlet GTip = require('mx-gtip/index');\nMagix.applyStyle('@index.css');\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [GTip],\n    render() {\n        let me = this;\n        me.updater.digest({\n            list: ['分类1', '分类2', '分类3', '分类4', '分类5', '分类6', '分类7', '分类8', '分类9', '分类10'],\n            selected: ['分类1', '分类5', '分类10'],\n            userList: [{\n                name: 'xinglie',\n                id: 58782\n            }, {\n                name: 'xinglie1',\n                id: 587821\n            }, {\n                name: 'xinglie2',\n                id: 587822\n            }, {\n                name: 'xinglie3',\n                id: 587823\n            }, {\n                name: 'xinglie4',\n                id: 587824\n            }, {\n                name: 'xinglie5',\n                id: 587825\n            }, {\n                name: 'xinglie6',\n                id: 587826\n            }, {\n                name: 'xinglie7',\n                id: 587827\n            }, {\n                name: 'xinglie8',\n                id: 587828\n            }, {\n                name: 'xinglie9',\n                id: 587829\n            }],\n            userSelected: [58782]\n        });\n    },\n    'showUserIds&lt;change&gt;' (e) {\n        this.gtipRT('选中的用户ids:'+e.ids);\n    }\n});</pre></div>"},
    mixins: [GTip],
    render: function () {
        var me = this;
        me.updater.digest({
            list: ['分类1', '分类2', '分类3', '分类4', '分类5', '分类6', '分类7', '分类8', '分类9', '分类10'],
            selected: ['分类1', '分类5', '分类10'],
            userList: [{
                    name: 'xinglie',
                    id: 58782
                }, {
                    name: 'xinglie1',
                    id: 587821
                }, {
                    name: 'xinglie2',
                    id: 587822
                }, {
                    name: 'xinglie3',
                    id: 587823
                }, {
                    name: 'xinglie4',
                    id: 587824
                }, {
                    name: 'xinglie5',
                    id: 587825
                }, {
                    name: 'xinglie6',
                    id: 587826
                }, {
                    name: 'xinglie7',
                    id: 587827
                }, {
                    name: 'xinglie8',
                    id: 587828
                }, {
                    name: 'xinglie9',
                    id: 587829
                }],
            userSelected: [58782]
        });
    },
    'showUserIds<change>': function (e) {
        this.gtipRT('选中的用户ids:' + e.ids);
    }
});

});