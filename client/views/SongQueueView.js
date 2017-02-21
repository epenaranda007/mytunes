// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  template: _.template('<div class="songQueueView"></div>'),

  
  initialize: function() {

    this.collection.on('add remove', function() {
      console.log('change add remove triggered')
      this.render();
    }, this);
  },

  render: function() { 
    this.collection.forEach(function(song) {
      var songQueueEntryView = new SongQueueEntryView({'model': song});
      this.$el.append(songQueueEntryView.render());
    }, this);
  }

});
