// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,
  // url: 'http://parse.sfm6.hackreactor.com/mytunes/classes/songs',


  initialize: function() {
    // this.on('reset', function() {
    //   console.log('reset triggered');
    // });
    // this.fetch();
    // console.log(this.length);
  },



});



    // fetch: function() {
    //   //url: 'http://parse.sfm6.hackreactor.com/mytunes/classes/songs????'
    //   type: 'GET',
    //   datatype: jsonp,
    //   success: function(data) {
    //     $allSongs = data.results;
    //     for (song of $allSongs) {
    //       var ??? = new Songs(song);
    //     }
    //   }
    // }