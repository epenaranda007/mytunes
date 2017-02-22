// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  url: 'http://parse.sfm6.hackreactor.com/mytunes/classes/songs',

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

// var mySongs = [];

// $.ajax({
//      method: 'GET',
//      url: '/some/url',
//      success: function(resp) {
//        respon //handle response}
//   })


//var allSongs = [];

// var dataSet = {
//   fetch: function() {
//     $.ajax({
//       url: 'http://parse.sfm6.hackreactor.com/mytunes/classes/songs',
//       type: 'GET',
//       datatype: 'jsonp',
//       success: function(data) {
//         $allMessages = data.results;
//         for (message of $allMessages) {
//           app.renderMessage(message);
//         }
//       }
//     });
//   }
// };