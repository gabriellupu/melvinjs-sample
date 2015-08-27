/**
 * Add your own magic in here
 * Melvin.Application extends Marionette.Application. You can read more about it here:
 * http://marionettejs.com/docs/v2.4.2/marionette.application.html
 */
define(function(require, exports, module) {
   var Melvin = require('melvin');
   var Layout = require('modules/app/views/layout');

   var MyApp = Melvin.Application.extend({
      rootView: new Layout()
   });

   module.exports = new MyApp();
});