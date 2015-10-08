define(function(require, exports, module) {
    var Melvin = require('melvin');

    module.exports = Melvin.LayoutView.extend({
        template: '#home-layout',

        templateHelpers: {
            getNumber: function() {
                return 1;
            },
            number: 2
        }
    });
});
