(function () {
 'use strict';
  APP.Views.MovieCreateView = Backbone.View.extend({

    events: {
      'click a.save'  : 'save',
      'click a.cancel': 'cancel'
    },

    initialize: function(options) {
      this.movies = options.movies;
      this.movie  = options.movie;
      this.actors = options.actors;
      this.actor  = options.actor;
    },

    render: function() {
      this.$el.html(_.template($('#editMovieTemplate').html(), this.movie.toJSON()));
      $('ul.navigation li').removeClass('active');
      $('.page-heading h2').text('Add Movie');
      return this;
    },

    showErrors: function(movie, errors) {
      this.$el.find('.error').removeClass('error');
      this.$el.find('.alert').html(_.values(errors).join('<br>')).show();
     
      // highlight errors
      _.each(_.keys(errors), _.bind(function (key) {
        this.$el.find('*[name=' + key + ']').parent().addClass('error');
      }, this));
    },

    save: function(event) {
      event.stopPropagation();
      event.preventDefault();

      // update model with form
      this.movie.set({
        title   : this.$el.find('input[name=title]').val(),
        image   : 'http://' + this.$el.find('input[name=image]').val(),
        year    : this.$el.find('input[name=year]').val(),
        gross   : this.$el.find('input[name=gross]').val(),
        actorIds: this.$el.find('input[name=actorIds]').val(),
        director: this.$el.find('input[name=director]').val(),
        genre   : this.$el.find('input[name=genre]').val(),
        rating  : this.$el.find('input[name=rating]').val(),
        id      : Math.floor(Math.random() * 100) + 1
      });


      if (this.movie.isValid()){
        this.movies.add(this.movie);
        APP.Routers.mmRoutes.__super__.navigate('movie/' + this.movie.id + '/view', true);
      }
    },

    cancel: function (event) {
      event.stopPropagation();
      event.preventDefault();
      APP.Routers.mmRoutes.__super__.navigate('movies/recent', true);
    }    

  });
}());
