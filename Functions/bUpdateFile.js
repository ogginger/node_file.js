//bUpdateFile.js: Functional Logic for updating a file.

define([
  "rsvp",
  "fs",
  "Functions/bCheckFile",
  "log"
], function(
  rsvp,
  fs,
  bCheckFile,
  log
) {
  return function( Input ) {
    return new rsvp.Promise(function( resolve ) {
      bCheckFile( Input.Name ).then(function( bExists ) {
        if ( bExists === true ) {
          fs.writeFile( Input.Name, Input.Body, function( error ) {
            if ( error ) {
              resolve( error );
            } else {
              log( "Updated: " + Input.Name );
              resolve( true );
            }
          });
        } else {
          resolve({ "message": "Error: That file does not exist." });
        }
      });
    });
  };
});
