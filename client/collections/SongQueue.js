// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('change add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
      console.log('event triggered');
    }, this);

    this.at(0).on('change', function() {
      console.log('triggered songPlayEnd');
      this.shift();
    }, this);

  }, 

  songPlayEnd: function() {
    
  },

  playFirst: function() {
    console.log('playFirst triggered');
  } 

});