(function() {

  this.app = {
    initialize: function(page) {
      this.page = page;
      this.bind();
      return this.selectPage('');
    },
    bind: function() {
      var th;
      th = this;
      return document.addEventListener("deviceready", (function() {
        return th.deviceready();
      }), false);
    },
    selectPage: function(module) {
      var _ref;
      $(".module").hide();
      $("#" + module).show();
      return (_ref = pages[module]) != null ? _ref.activate() : void 0;
    },
    deviceready: function() {
      var th;
      th = this;
      this.selectPage('feed');
      return $('#navigation .navlink').click(function() {
        var module;
        module = $(this).attr('data-module');
        return th.selectPage(module);
      });
    }
  };

}).call(this);
