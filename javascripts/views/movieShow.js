(function () {
 'use strict';
  APP.Views.MovieShowView = Backbone.View.extend({

    events : {
      'click a.edit'   : 'edit',
      'click a.delete' : 'destroy'
    },

    initialize: function(options) {
      this.movie  = options.movie;
      this.movies = options.movies;
      this.actors = options.actors;
    },

    render: function() {
      var actorIds = this.movie.attributes.actorIds.split(',');  // Create array of actor ids
      var actorNames = '';

      // lookup ids in actors
      for(var i = 1; i <= actorIds.length; i++) {
        actorNames += '<li><a href="#actor/' + i + '/view">' + this.actors._byId[i].attributes.firstname + ' ' + this.actors._byId[i].attributes.lastname + '</a></li>';
      }
      this.movie.set({ actors : actorNames }); // update movie

      this.$el.html(_.template($('#showMovieTemplate').html(), this.movie.toJSON()));
      $('ul.navigation li').removeClass('active');
      $('.page-heading h2').text('Movie Details');
      return this;
    },

    edit: function(event) {
      event.preventDefault();
      event.stopPropagation();
      APP.Routers.mmRoutes.__super__.navigate('movie/' + this.movie.id + '/edit', true);
    },

    destroy: function(event) {
      event.preventDefault();
      event.stopPropagation();    
      this.movies.remove(this.movie);
      this.$el.remove();
      APP.Routers.mmRoutes.__super__.navigate('movies/recent', true);
    }

  });

}());
