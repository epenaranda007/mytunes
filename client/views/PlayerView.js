var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {
    this.on('play', function() {
      //this.model =
    });

    // console.log(this.$el);

    //this needs a rewrite 
    this.$el.on('ended', () => {
      this.model.ended();
    });

    // this.on('songEnded', function() {
    //   console.log('songEnded trigger');
    // });
  },

  setSong: function(song) {
    this.model = song;
    this.render();
  },

  render: function() {
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});