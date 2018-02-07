//log.js: Functional Logic for printing messages to console.

define([], function() {
  return function( Input, Boolean ) {
    if ( Boolean === undefined ) {
      Boolean = true;
    }
    
    if ( Boolean === true ) {
      console.log( Input ); 
    }
  };
});