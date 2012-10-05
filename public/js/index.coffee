@app =
  initialize: (@page) ->
    @bind()
    @selectPage('')

  bind: ->
    th = @
    document.addEventListener "deviceready", (-> th.deviceready()), false

  selectPage: (module) ->
    $(".module").hide()
    $("##{module}").show()
    pages[module]?.activate()

  deviceready: ->
    th = @
    @selectPage('feed')
    $('#navigation .navlink').click ->
      module = $(@).attr('data-module')
      th.selectPage(module)

