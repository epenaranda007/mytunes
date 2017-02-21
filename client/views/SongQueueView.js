// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  //template: _.template('<div class="songQueueView"></div>'),

  
  initialize: function() {

    this.collection.on('add remove', function() {
      this.render();
    }, this);

    // this.collection.on('change', function() { 
    //   console.log('fired');
    //   this.render();
    // });


    this.render();
  },

  render: function() { 
    this.$el.children().detach();

    this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );

    // this.collection.map(function(song) {
    //   var songQueueEntryView = new SongQueueEntryView({'model': song});
    //   this.$el.append(songQueueEntryView.render());
    // }, this);
  }

});
