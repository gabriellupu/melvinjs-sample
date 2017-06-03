define(function(require, exports, module) {
    var app = require('app');
    var HomeLayout = require('../views/layout');

    module.exports = {
        home: function () {
            app.showView(new HomeLayout());
        }
    };
});