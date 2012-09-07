exports.Configuration = class Configuration
  constructor: (@config) ->
  get: (adapter) -> @config[adapter]
  getAdapter: (adapter) ->
    config = @get(adapter)
    return config.factory(config) if config.factory?

    Adapter = require "#{__dirname}/adapters/#{adapter}"
    new Adapter(@get(adapter))