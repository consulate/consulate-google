/**
 * Module dependencies
 */
var debug = require('simple-debug')('consulate-google')
  , GoogleStrategy = require('passport-google').Strategy;

/**
 * Google Exchange Plugin
 */

module.exports = function(options, getUserByGoogleOrCreate) {
  if (!getUserByGoogleOrCreate) throw new Error('`getUserByGoogleOrCreate` callback required for `consulate-google`');

  var path = options.path || '/login/google';
  delete options.path;

  return function(app) {
    debug('registering google passport strategy with options', options);
    app.register(new GoogleStrategy(options, getUserByGoogleOrCreate));
    app.get(path, app.authenticate('google'), app.viewCallback('login'));
  };
};
