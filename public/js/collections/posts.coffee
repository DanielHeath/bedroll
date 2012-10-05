@collections ||= {}

@collections.posts = class @Posts extends Backbone.Collection
  constructor: (url) ->
    @url = url
    super()
