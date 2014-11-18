(function() { 
 'use strict';
  window.APP = window.APP || {Routers: {}, Collections: {}, Models: {}, Views: {}};
  APP.Routers.mmRoutes = Backbone.Router.extend({
    routes: {
      'movies/recent'  : 'index',
      'movie/create'   : 'createMovie',
      'movie/:id/edit' : 'editMovie',
      'movie/:id/view' : 'showMovie',
      'actor/create'   : 'createActor',
      'actor/:id/edit' : 'editActor',
      'actor/:id/view' : 'showActor'
    },

    initialize: function(options) {
      this.movies = options.movies;
      this.actors = options.actors;
      this.listenTo(this.movies, 'change', this.render);
      this.index();
    },

    index: function() {
      this.currentView = new APP.Views.MovieIndexView({
        movies: this.movies
      });
      $('#renderView').html(this.currentView.render().el);
    },

    createMovie: function() {
      this.currentView = new APP.Views.MovieCreateView({ movies: this.movies, movie: new APP.Models.MovieModel() });
      $('#renderView').html(this.currentView.render().el);
    },

    createActor: function() {
      this.currentView = new APP.Views.ActorCreateView({
        movies: this.movies, 
        actors: this.actors,
        actor : new APP.Models.ActorModel()
      });
      $('#renderView').html(this.currentView.render().el);
    },

    editMovie: function(id) {
      var movie = this.movies.get(id);
      this.currentView = new APP.Views.MovieEditView({ movie: movie });
      $('#renderView').html(this.currentView.render().el);
    },

    editActor: function(id) {
      var movie = this.movies.get(id);
      var actor = this.actors.get(id);
      this.currentView = new APP.Views.ActorEditView({
        movies: this.movies, 
        movie : movie,
        actors: this.actors,
        actor : actor
      });
      $('#renderView').html(this.currentView.render().el);
    },

    showMovie: function(id) {
      var movie = this.movies.get(id);
      var actor = this.actors.get(id);
      this.currentView = new APP.Views.MovieShowView({ 
        movies: this.movies, 
        movie : movie,
        actors: this.actors,
        actor : actor
      });
      $('#renderView').html(this.currentView.render().el);
    },

    showActor: function(id) {
      var actor = this.actors.get(id);
      this.currentView = new APP.Views.ActorShowView({
        movies: this.movies,
        actors: this.actors,
        actor: actor
      });
      $('#renderView').html(this.currentView.render().el);
    },

  });
}());
