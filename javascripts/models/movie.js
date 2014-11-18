(function() {
 'use strict';
  APP.Models.MovieModel = Backbone.Model.extend({
    defaults: {
      'title'   : '',
      'year'    : '',
      'gross'   : '',
      'director': '',
      'actorIds': '',
      'actors'  : '',
      'genre'   : '',
      'rating'  : '',
      'image'   : '',
      'id'      : ''
    },

    validate: function(attrs) {}
  });

  APP.Collections.MovieCollection = Backbone.Collection.extend({
    model: APP.Models.MovieModel,
  });

}());
