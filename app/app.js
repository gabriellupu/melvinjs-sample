/**
 * Add your own magic in here
 * Melvin.Application extends Marionette.Application. You can read more about it here:
 * http://marionettejs.com/docs/v2.4.2/marionette.application.html
 */
define(function(require, exports, module) {
   var Melvin = require('melvin');

   var MyApp = Melvin.Application.extend({
      region: '#content'
   });

   module.exports = new MyApp();
});