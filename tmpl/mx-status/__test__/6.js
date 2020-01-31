let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@6.html',
    render() {
        let opers = [{
            value: 0,
            text: '暂停投放',
            icon: '<i class="mc-iconfont">&#xe67f;</i>',
            color: '#a40100'
        }, {
            value: 9,
            text: '结束投放',
            confirmTitle: '系统提示',
            confirmContent: '确认结束投放吗？',
            icon: '<i class="mc-iconfont">&#xe682;</i>',
            color: '#999999'
        }]

        this.updater.digest({
            opers,
            cur: opers[0]
        });
    },
    'change<change>'(e) {
        // e.status 完整的对象
        //      value
        //      text
        this.updater.digest({
            cur: e.status
        });
    }
});