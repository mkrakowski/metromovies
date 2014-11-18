(function () {
 'use strict';
  APP.Views.MovieEditView = Backbone.View.extend({

    events: {
      'click a.save'  : 'save',
      'click a.cancel': 'cancel'
    },

    initialize: function(options) {
      this.movie  = options.movie;
    },

    render: function() {
      this.$el.html(_.template($('#editMovieTemplate').html(), this.movie.toJSON()));
      $('ul.navigation li').removeClass('active');
      $('.page-heading h2').text('Edit Movie');
      return this;
    },

    save: function (event) {
      event.stopPropagation();
      event.preventDefault();

      // update model with form
      this.movie.set({
        title   : this.$el.find('input[name=title]').val(),
        year    : this.$el.find('input[name=year]').val(),
        gross   : this.$el.find('input[name=gross]').val(),
        actorIds: this.$el.find('input[name=actorIds]').val(),
        director: this.$el.find('input[name=director]').val(),
        genre   : this.$el.find('input[name=genre]').val(),
        rating  : this.$el.find('input[name=rating]').val(),
      });

      // this.movie.save(); // save to server
      APP.Routers.mmRoutes.__super__.navigate('movie/' + this.movie.id + '/view', true);
    },
    cancel: function (event) {
      event.stopPropagation();
      event.preventDefault();
      APP.Routers.mmRoutes.__super__.navigate('movie/' + this.movie.id + '/view', true);
    }

  });
}());