//file.js: Functional suite for implementing crud methods on files.

/*
  file.js is intended to be run on a nodejs server. It's dependencies are rsvp and nodejs's "fs" file system.
*/

define([
  "Functions/bCreateFile",
  "Functions/bDeleteFile",
  "Functions/sGetFile",
  "Functions/bUpdateFile",
  "Functions/bCheckFile"
], function(
  bCreateFile,
  bDeleteFile,
  sGetFile,
  bUpdateFile
) {
  return {
    "create": bCreateFile,
    "delete": bDeleteFile,
    "get": sGetFile,
    "update": bUpdateFile,
    "check": bCheckFile
  };
});