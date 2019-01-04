//bCheckFile.js: Functional Logic for checking if a file exists..

define([
  "rsvp",
  "fs",
  "log"
], function(
  rsvp,
  fs,
  log
) {
  return function( Input ) {
    return new rsvp.Promise(function( resolve ) {
      fs.stat( Input, function( error ) {
        if ( error ) {
          resolve( false );
        } else {
          resolve( true );
        }
      });
    });
  };
});
