define(function(require, exports, module) {
    var Backbone = require('backbone');
    var app = require('app');

    var HomeLayout = require('../views/layout');

    module.exports = {
        home: function () {
            var person = new Backbone.Model({
                name: 'Melvin User'
            });

            app.rootView.content.show(new HomeLayout({
                model: person
            }));
        }
    };
});