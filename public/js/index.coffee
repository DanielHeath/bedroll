@app =
  initialize: (@page) ->
    @bind()

  bind: ->
    th = @
    document.addEventListener "deviceready", (-> th.deviceready()), false

  deviceready: ->
    pages[@page].activate() if pages[@page]
