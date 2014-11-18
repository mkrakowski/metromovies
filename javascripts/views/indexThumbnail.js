(function() {
  "use strict";
  APP.Views.indexThumbnailView = Backbone.View.extend({
    tagName   : 'div',
    className : 'large-4 columns thumbnail',
    
    events : {
      'click div.thumb-inner' : 'getDetail',
    },

    initialize: function(options) {
      this.movie  = options.movie;
      this.movies = options.movies;
      this.actor = options.actor;
      this.actors = options.actors;
    },

    render: function() {
      this.$el.html(_.template($('#indexThumbnailTemplate').html(), this.movie.toJSON()));
      return this;
    },

    getDetail: function(event) {
      APP.Routers.mmRoutes.__super__.navigate('actor/'+ this.movie.toJSON().id +'/view', true);
    },

  });
}());

