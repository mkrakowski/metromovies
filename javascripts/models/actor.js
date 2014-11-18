(function() {
 'use strict';
  APP.Models.ActorModel = Backbone.Model.extend({
    defaults: {
      'id'        : '',
      'moviesIds' : '',
      'movies'    : '',
      'firstname' : '',
      'lastname'  : '',
      'dob'       : ''
    },

    validate: function(attrs) {}
  });

  APP.Collections.ActorCollection = Backbone.Collection.extend({ 
    model: APP.Models.ActorModel,
  });



}());
