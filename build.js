//build.js: Configuration file for optimizing the "file" function.
/*
  1. file.js is implemented with nodejs and uses node's "fs" file system module as a dependency.
  2. file.js uses rsvp as a dependency but is not imported with the optimization.
*/

({
    baseUrl: ".",
    paths: {
      "rsvp": "lib/rsvp.min",
      "fs": "empty:"
    },
    exclude: [ "rsvp", "fs" ],
    name: "file.js",
    out: "file.min.js"
})