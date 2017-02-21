// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('change add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);

    this.on('ended', function() {
      this.shift();
      if (this.length) {
        this.playFirst();
      }
    }, this);

    this.on('dequeue', function() {
      this.remove(this.at(0));
    }, this);

    this.on('delete', function() {
      this.remove(this.at(0));
    }, this);

    // this.on('enqueue', function(song) {
      // this.add(song);  
    // });

  },

  enqueue: function (song) {
    this.add(song);
    this.trigger('change', this);
  },

  playFirst: function() {
    this.at(0).play();
  },


});