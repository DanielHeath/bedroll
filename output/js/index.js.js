(function() {
  var app;

  app = {
    initialize: function() {
      return this.bind();
    },
    bind: function() {
      return document.addEventListener("deviceready", this.deviceready, false);
    },
    deviceready: function() {
      return app.report("deviceready");
    },
    report: function(id) {
      var completeElem;
      console.log("Report: " + id);
      document.querySelector("#" + id + " .pending").className += " hide";
      completeElem = document.querySelector("#" + id + " .complete");
      completeElem.className = completeElem.className.split("hide").join("");
      return $.getJSON("https://danielh.tent.is/tent/posts").then(function(posts) {
        var post, _i, _len, _results;
        _results = [];
        for (_i = 0, _len = posts.length; _i < _len; _i++) {
          post = posts[_i];
          _results.push($("#posts").append("<p>" + post.content.text + "</p>"));
        }
        return _results;
      });
    }
  };

}).call(this);
