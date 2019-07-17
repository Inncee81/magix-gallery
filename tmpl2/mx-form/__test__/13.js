let Magix = require('magix');
let Base = require('__test__/example');
let Form = require('@../index');
let Validator = require('@../validator');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@13.html',
    mixins: [Form, Validator],
    render() {
        this.updater.digest();
    }
});