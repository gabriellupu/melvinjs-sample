define(function(require, exports, module) {
    var app = require('app');

    var Article = require('../models/article');
    var HomeLayout = require('../views/layout');

    module.exports = {
        home: function () {
            var article = new Article();

            //article.fetch().then(function(){
                app.showView(new HomeLayout({
                    model: article
                }));
            //});
        }
    };
});