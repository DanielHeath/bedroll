(function() {

  this.app = {
    initialize: function(module) {
      this.module = module;
      return this.bind();
    },
    bind: function() {
      return document.addEventListener("deviceready", this.deviceready, false);
    },
    deviceready: function() {
      return app.report("deviceready");
    },
    report: function(id) {
      return $.getJSON("https://danielh.tent.is/tent/posts").then(function(posts) {
        var post, _i, _len, _results;
        _results = [];
        for (_i = 0, _len = posts.length; _i < _len; _i++) {
          post = posts[_i];
          _results.push($("#posts").append($("<p class='status'></p>").text(post.content.text)));
        }
        return _results;
      });
    }
  };

}).call(this);
