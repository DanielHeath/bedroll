@app =
  initialize: ->
    @bind()

  bind: ->
    document.addEventListener "deviceready", @deviceready, false

  deviceready: ->
    app.report "deviceready"

  report: (id) ->
    $.getJSON("https://danielh.tent.is/tent/posts").then (posts) ->
      for post in posts
        $("#posts").append $("<p></p>").text(post.content.text)
