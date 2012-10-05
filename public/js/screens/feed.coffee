@pages ||= {}

class Feed
  activate: ->
    $("#loading").show()
    $.getJSON(models.account.feedUrl()).then (posts) ->
      $("#loading").hide()
      for post in posts when post.content.text
        $("#posts").append $("<p class='status'></p>").text(post.content.text)


@pages.feed = new Feed()
