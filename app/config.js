// This is the runtime configuration file.  It complements the Gruntfile.js by
// supplementing shared properties.
require.config({
  baseUrl: "/app",
  paths: {
    // Make vendor easier to access.
    "vendor": "../vendor",

    // Almond is used to lighten the output filesize.
    //"almond": "../vendor/bower/almond/almond",

    // Opt for Lo-Dash Underscore compatibility build over Underscore.
    "underscore": "../vendor/bower/lodash/dist/lodash.underscore",

    // Map `lodash` to a valid location for the template loader plugin.
    //"lodash": "../vendor/bower/lodash/dist/lodash",

    // Use the Lo-Dash template loader.
    //"ldsh": "../vendor/bower/lodash-template-loader/loader",

    "hbs": "../vendor/bower/require-handlebars-plugin/hbs",

    // Map remaining vendor dependencies.
    "jquery": "../vendor/bower/jquery/jquery",
    "backbone": "../vendor/bower/backbone/backbone",

    "bootstrap": "../vendor/bower/bootstrap/dist/js/bootstrap",
    "layoutmanager": "../vendor/bower/layoutmanager/backbone.layoutmanager",
    //"collectionCache": "../vendor/backbone.collectioncache"
  },

  shim: {
    // This is required to ensure Backbone works as expected within the AMD
    // environment.
    "backbone": {
      // These are the two hard dependencies that will be loaded first.
      deps: ["jquery", "underscore"],

      // This maps the global `Backbone` object to `require("backbone")`.
      exports: "Backbone"
    },
    "underscore": {
      exports: "_"
    }
  },

  hbs: { // optional
      helpers: false,            // default: true
      i18n: false,              // default: false
      templateExtension: 'hbs', // default: 'hbs'
      partialsUrl: ''           // default: ''
  },

  // Backbone.CollectionCache depends on Backbone.
  //"collectionCache": ["backbone"],

  // Twitter Bootstrap depends on jQuery.
  "bootstrap": ["jquery"]
});
