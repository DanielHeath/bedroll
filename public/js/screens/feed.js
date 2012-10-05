(function() {
  var Feed;

  this.pages || (this.pages = {});

  Feed = (function() {

    function Feed() {}

    Feed.prototype.activate = function() {
      $("#loading").show();
      return $.getJSON(models.account.feedUrl()).then(function(posts) {
        var post, _i, _len, _results;
        $("#loading").hide();
        _results = [];
        for (_i = 0, _len = posts.length; _i < _len; _i++) {
          post = posts[_i];
          if (post.content.text) {
            _results.push($("#posts").append($("<p class='status'></p>").text(post.content.text)));
          }
        }
        return _results;
      });
    };

    return Feed;

  })();

  this.pages.feed = new Feed();

}).call(this);
