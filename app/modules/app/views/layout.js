define(function (require, exports, module) {
    var Melvin = require('melvin');

    module.exports = Melvin.LayoutView.extend({
        el: 'body',
        /**
         * Configure the application's regions here
         */
        regions: {
            content: '#content'
        }
    });
});
