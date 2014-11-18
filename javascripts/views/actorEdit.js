(function () {
 'use strict';
  APP.Views.ActorEditView = Backbone.View.extend({

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
      this.$el.html(_.template($('#editActorTemplate').html(), this.actor.toJSON()));
      $('ul.navigation li').removeClass('active');
      $('.page-heading h2').text('Add Actor');
      return this;
    },

    showErrors: function(actor, errors) {
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
      this.actor.set({
        firstname: this.$el.find('input[name=firstname]').val(),
        lastname : this.$el.find('input[name=lastname]').val(),
        dob      : this.$el.find('input[name=dob]').val(),
        movieIds : this.$el.find('input[name=movieIds]').val(),
        id       : Math.floor(Math.random() * 100) + 1
      });

      APP.Routers.mmRoutes.__super__.navigate('actor/' + this.actor.id + '/view', true);

    },

    cancel: function (event) {
      event.stopPropagation();
      event.preventDefault();
      APP.Routers.mmRoutes.__super__.navigate('actor/' + this.actor.id + '/view', true);
    }

  });
}());