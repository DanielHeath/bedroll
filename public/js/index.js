(function() {

  this.app = {
    initialize: function(page) {
      this.page = page;
      return this.bind();
    },
    bind: function() {
      var th;
      th = this;
      return document.addEventListener("deviceready", (function() {
        return th.deviceready();
      }), false);
    },
    deviceready: function() {
      if (pages[this.page]) {
        return pages[this.page].activate();
      }
    }
  };

}).call(this);
