(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  this.collections || (this.collections = {});

  this.collections.posts = this.Posts = (function(_super) {

    __extends(Posts, _super);

    function Posts(url) {
      this.url = url;
      Posts.__super__.constructor.call(this);
    }

    return Posts;

  })(Backbone.Collection);

}).call(this);
