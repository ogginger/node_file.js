//bCreateFile.js: Functional Logic for creating a file..

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
      var bDebug = true;
      bCheckFile( Input.Name ).then(function( bExists ) {
        if ( bExists === true ) {
        //if the file exists then...
          resolve({ "message": "Error: That file already exists." });
        } else {
        //otherwise the file does not exist so...
          //Create the file.
          fs.writeFile( Input.Name, Input.Body, function( error ) {
            if ( error ) {
              resolve( false );
            } else {
              log( "Created: " + Input.Name );
              resolve( true );
            }
          });
        }
      }).catch(function( error ) {
        log( "ERROR: " + JSON.stringify( error ), bDebug )
      });
      
    });
  };
});
