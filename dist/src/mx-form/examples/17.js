let Magix = require('magix');
let Base = require('examples/example');
let Form = require('@../index');
let Validator = require('@../validator');
let $ = require('$');
let Moment = require('moment');
let Formater = 'YYYY-MM-DD';

module.exports = Base.extend({
    tmpl: '@17.html',
    mixins: [Form, Validator],
    render() {
        this.updater.digest({
            viewId: this.id,
            checkboxes: ['checkbox1', 'checkbox2', 'checkbox3'],
            radioes: ['radio1', 'radio2', 'radio3'],
            areas: [{
                value: 11,
                pValue: '',
                text: '上海'
            }, {
                value: 12,
                pValue: '',
                text: '江苏'
            }, {
                value: 13,
                pValue: '',
                text: '浙江'
            }, {
                value: 14,
                pValue: '',
                text: '北京'
            }, {
                value: 15,
                pValue: '',
                text: '四川'
            }, {
                value: 121,
                pValue: 12,
                text: '南京'
            }, {
                value: 122,
                pValue: 12,
                text: '苏州'
            }, {
                value: 123,
                pValue: 12,
                text: '南通'
            }, {
                value: 131,
                pValue: 13,
                text: '杭州'
            }, {
                value: 132,
                pValue: 13,
                text: '宁波'
            }, {
                value: 133,
                pValue: 13,
                text: '温州'
            }, {
                value: 134,
                pValue: 13,
                text: '嘉兴'
            }, {
                value: 135,
                pValue: 13,
                text: '舟山'
            }, {
                value: 136,
                pValue: 13,
                text: '台州'
            }, {
                value: 137,
                pValue: 13,
                text: '湖州'
            }, {
                value: 1311,
                pValue: 131,
                text: '余杭区'
            }, {
                value: 1312,
                pValue: 131,
                text: '西湖区'
            }, {
                value: 1313,
                pValue: 131,
                text: '上城区'
            }, {
                value: 1314,
                pValue: 131,
                text: '下城区'
            }, {
                value: 1315,
                pValue: 131,
                text: '江干区'
            }, {
                value: 1316,
                pValue: 131,
                text: '拱墅区'
            }],
            selected: {
                area: '',
                checkboxes: ['checkbox1'],
                radio: 'radio2',
                single: '',  //下拉框单选
                multiComma: '', //下拉框多选逗号分隔
                multiArr: [], //下拉框多选数组
                str: '', //汉字/字母/数字/下划线
                // date: Moment().format(Formater), //单个日期
                date: '',
                start: Moment().subtract(1, 'days').format(Formater), //时间段开始时间
                end: Moment().add(1, 'days').format(Formater), //时间段结束时间
                type: 'custom', //默认还是自定义（自定义带输入框）
                int: 10,
                switch: true //开关
            }
        });
    },
    'confirm<click>'(e){
        let that = this;
        let valid = that.isValid();

        if(valid){
            // 校验通过
            // 双向绑定的数据，继续执行后续操作
            let selected = that.updater.get('selected');
            that.updater.digest({
                tip: '<span class="color-green"><i class="mc-iconfont displacement-2">&#xe6ad;</i>校验通过</span>'
            })
        }else{
            // 校验失败
            that.updater.digest({
                tip: '<span class="color-red"><i class="mc-iconfont displacement-2">&#xe6ad;</i>校验失败</span>'
            })
        }
    }
});