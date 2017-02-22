// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  //template: _.template('<div class="songQueueView"></div>'),

  
  initialize: function() {

    this.render();
  },

  render: function() { 
    console.log('hey sqv render fired');
    this.$el.children().detach();

    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song) {
        console.log('song object', song);
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
