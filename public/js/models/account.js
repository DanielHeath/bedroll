(function() {
  var Account;

  this.models || (this.models = {});

  Account = (function() {

    function Account() {
      var _ref, _ref1;
      if (typeof window !== "undefined" && window !== null) {
        if ((_ref = window.localStorage) != null) {
          _ref.username || (_ref.username = 'danielh.tent.is');
        }
      }
      this.name = typeof window !== "undefined" && window !== null ? (_ref1 = window.localStorage) != null ? _ref1.username : void 0 : void 0;
    }

    Account.prototype.feedUrl = function() {
      return "https://" + this.name + "/tent/posts";
    };

    return Account;

  })();

  this.models.account = new Account();

}).call(this);
