//bDeleteFile.js: Functional Logic for deleting a file..

define([
  "rsvp",
  "fs",
  "Functions/bCheckFile",
  "Functions/log"
], function(
  rsvp,
  fs,
  bCheckFile,
  log
) {
  return function( Input ) {
    return new rsvp.Promise(function( resolve ) {
      bCheckFile( Input ).then(function( bExists ) {
        if ( bExists === true ) {
          fs.unlink( Input, function( error ) {
            if ( error ) {
              resolve( error );
            } else {
              log( "Deleted: " + Input );
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