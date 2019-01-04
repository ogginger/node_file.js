//sGetFile.js: Functional Logic for getting the contents of a file.

define([
  "rsvp",
  "fs",
  "Functions/bCheckFile"
], function(
  rsvp,
  fs,
  bCheckFile
) {
  return function( Input ) {
    return new rsvp.Promise(function( resolve, reject ) {
      bCheckFile( Input ).then(function( bExists ) {
        if ( bExists === true ) {
          fs.readFile( Input, function( error, sBody ) {
            if ( !error ) {
              resolve( sBody.toString() );
            } else {
              reject( error );
            }
          });
        } else {
          reject({ "message": "Error: That file does not exist." });
        }
      });
    });
  };
});
