@app =
  initialize: (module) ->
    @module = module
    @bind()

  bind: ->
    document.addEventListener "deviceready", @deviceready, false

  deviceready: ->
    app.report "deviceready"

  report: (id) ->
    $.getJSON("https://danielh.tent.is/tent/posts").then (posts) ->
      for post in posts
        $("#posts").append $("<p class='status'></p>").text(post.content.text)
