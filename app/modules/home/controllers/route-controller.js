define(function(require, exports, module) {
    var Backbone = require('backbone');
    var app = require('app');

    var Article = require('../models/article');
    var HomeLayout = require('../views/layout');

    module.exports = {
        home: function () {
            var article = new Article();
            article.fetch({
                async: false
            });

            app.rootView.content.show(new HomeLayout({
                model: article
            }));
        }
    };
});