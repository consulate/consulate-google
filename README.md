consulate-google
==================

Google exchange plugin for [consulate](https://github.com/consulate/consulate).

`consulate-google` allows users to login/register with Google and exchange
a Google access_token for a consulate authorization code.

Usage
-----

Just register `consulate-google` as a plugin with your [consulate](https://github.com/consulate/consulate) server:

```js
var consulate = require('consulate')
  , google = require('consulate-google');

var app = consulate();

app.plugin(google({
  returnURL: 'MY_CALLBACK',
  realm: 'MY_REALM'
}, function(identifier, profile, done) {

  // lookup user by google id here. if they don't exist create them
  ...

  // Return the user for your consulate system
  done(null, myUser);
}));
```

Tests
-----

```sh
$ npm test
```
