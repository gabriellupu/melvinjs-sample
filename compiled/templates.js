this["JST"] = this["JST"] || {};

this["JST"]["#home-layout"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h1 class="page-title">Hello, ' +
__e( model.name ) +
'</h1><p>This is my custom Melvin.js App ' +
__e( getNumber() ) +
' and ' +
__e( number ) +
'</p>';

}
return __p
};