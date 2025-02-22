let Magix = require('magix');
let Base = require('__test__/example');
let Moment = require('moment');
let Form = require('@../../mx-form/index');
let Validator = require('@../../mx-form/validator');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@24.html',
    mixins: [Form, Validator],
    render() {
        this.updater.digest({
            start: '2018-03',
            end: '2018-04'
        });
    }
});