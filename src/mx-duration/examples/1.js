let Magix = require('magix');
let Vframe = Magix.Vframe;
let Base = require('examples/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@1.html',
    render() {
        this.updater.digest({
            viewId: this.id,
            ok: true,
            result: '00:00-12:00:60,12:00-24:00:250;00:00-24:00:240;00:00-24:00:100;00:00-24:00:220;00:00-24:00:100;00:00-24:00:100;00:00-24:00:100'
        });
    },
    'get<click>'(event) {
        let vf = Vframe.get(this.id + '_duration');
        let result = vf.invoke('submit');

        // ok：
        //      false 未选择任何时段
        //      true 已选择时段
        // result.val 当前选中值，ok = true时
        this.updater.digest({
            ok: result.ok,
            result: result.val
        })
    }
});