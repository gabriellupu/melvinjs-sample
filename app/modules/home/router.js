define(function (require, exports, module) {
    var Marionette = require('marionette');
    var RouteController = require('./controllers/route-controller');

    var HomeRouter =  Marionette.AppRouter.extend({
        controller: RouteController,
        appRoutes: {
            'home': 'home'
        }
    });

    module.exports = new HomeRouter();
});
