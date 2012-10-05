(function() {
  var Account;

  this.pages || (this.pages = {});

  Account = (function() {

    function Account() {}

    Account.prototype.activate = function() {
      var _ref,
        _this = this;
      this._account = typeof window !== "undefined" && window !== null ? (_ref = window.localStorage) != null ? _ref.username : void 0 : void 0;
      this.el = $('#account input[name="name"]');
      this.el.val(this._account);
      return this.el.change(function() {
        _this.setAccount(_this.el.val());
        return true;
      });
    };

    Account.prototype.setAccount = function(value) {
      this._account = value;
      if (typeof window !== "undefined" && window !== null) {
        window.localStorage.username = value;
      }
      return window.location = '/feed/';
    };

    return Account;

  })();

  this.pages.account = new Account();

}).call(this);
