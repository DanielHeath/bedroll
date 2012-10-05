@pages ||= {}

class Account
  activate: ->
    @_account = window?.localStorage?.username
    @el = $('#account input[name="name"]')
    @el.val(@_account)
    @el.change =>
      @setAccount @el.val()
      true

  setAccount: (value) ->
    @_account = value
    window?.localStorage.username = value
    window.location = '/feed/'

@pages.account = new Account()
