let Magix = require('magix');

module.exports = Magix.View.extend({
    tmpl: '@config.html',
    render() {
        this.updater.digest();
    }
});