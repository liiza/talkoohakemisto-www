define(function(require, exports, module) {

  var $ = require("jquery");
  var _ = require("underscore");
  var Backbone = require("backbone");
  var app = require("app");
  var VoluntaryWork = require("modules/voluntary-work");

  module.exports = Backbone.View.extend({
    initialize: function(el) {

    },

    events: {
      "click": "viewDetails"
    },

    tagName: "li",
    className: "voluntaryWorkItem row",

    render: function() {
      var data = this.model.toJSON();
      var typeId = data.links.type;
      var municipalityId = data.links.municipality;

      data.municipality = this.model.collection.getLinkedItem('municipalities', municipalityId);
      data.type = this.model.collection.getLinkedItem('types', typeId);

      data.iconUrl = app.helpers.generateTypeIconUrl(data.type.name);

      this.$el.html( this.template( data ) );
      return this;
    },

    viewDetails: function() {
      this.model.collection.trigger('viewDetails', this.model.id);
      Backbone.history.navigate("view/" + this.model.id, true);
    },

    template: require("hbs!templates/listitem")
  });

});