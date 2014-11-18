(function () {
 'use strict';
  APP.Views.ActorShowView = Backbone.View.extend({

    events : {
      'click a.edit'   : 'edit',
      'click a.delete' : 'destroy'
    },

    initialize: function(options) {
      this.movie  = options.movie;
      this.movies = options.movies;
      this.actor  = options.actor;
      this.actors = options.actors;      
    },

    render: function() {
      var movieIds = this.actor.attributes.moviesIds.split(',');  // Create array of movie ids
      var movieTitles = '';

      // lookup ids in movies
      for(var i = 1; i <= movieIds.length; i++) {
        movieTitles += '<li><a href="#movie/' + i + '/view">' + this.movies._byId[i].attributes.title + '</a></li>';
      }
      this.actor.set({ movies : movieTitles }); // update actor 
      this.$el.html(_.template($('#showActorTemplate').html(), this.actor.toJSON()));

      $('ul.navigation li').removeClass('active');
      $('.page-heading h2').text('Actor Details');
      return this;
    },

    edit: function(event) {
      event.preventDefault();
      event.stopPropagation();
      APP.Routers.mmRoutes.__super__.navigate('actor/' + this.actor.id + '/edit', true);
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
