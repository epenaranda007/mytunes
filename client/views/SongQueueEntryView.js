// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  template: _.template('<span class="artist"><%- artist %></span> \
                          <span class="title">(<%- title %>)</span> '),


  inititialize: function() {
    this.on('change', function() {

    });
  },


  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

});


