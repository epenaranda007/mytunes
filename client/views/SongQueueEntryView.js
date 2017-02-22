// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

 
  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() { 
      console.log('yo');
      this.model.dequeue();
    }
  },

  inititialize: function() {
    this.collection.on('dequeue', function() {
      this.render();
    });


  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

});


/*
   // template: _.template('<span class="artist"><%- artist %></span> \
  //                         <span class="title">(<%- title %>)</span> '),
  
  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  inititialize: function() {
    this.on('change', function() {

    });
  },


  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

*/