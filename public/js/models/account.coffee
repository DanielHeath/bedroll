@models ||= {}

class Account
  constructor: () ->
    window?.localStorage?.username ||= 'danielh.tent.is'
    @name = window?.localStorage?.username

  feedUrl: ->
    "https://#{@name}/tent/posts"

@models.account = new Account()
