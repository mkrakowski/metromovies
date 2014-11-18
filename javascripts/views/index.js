(function() {
 'use strict';
  window.APP = window.APP || {Routers: {}, Collections: {}, Models: {}, Views: {}};
  APP.Views.MovieIndexView = Backbone.View.extend({

    initialize: function(options) {
      this.movie  = options.movie;
      this.movies = options.movies;
      this.actor = options.actor;
      this.actors = options.actors;

      this.listenTo(this.movies, 'change', this.render);
      this.movies.on('reset', this.addMovies, this);
    },

    render: function() {
      this.$el.html($('#indexTemplate').html());
      this.addMovies();
      $('ul.navigation li').removeClass('active');
      $('ul.navigation li.recent').addClass('active');
      $('.page-heading h2').text('Recent Movies');
      return this;
    },

    addMovies: function() {
      this.$el.find('#indexTemplate .movie-listing').children().remove(); // clear index
      _.each(this.movies.models, $.proxy(this, 'addMovie'));
    },

    addMovie: function(movie) {
      var view = new APP.Views.indexThumbnailView({ movies: this.movies, movie: movie });
      this.$el.find('.movie-listing').append(view.render().el);
    }

  });
}());
