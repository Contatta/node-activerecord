(function() {
  var Configuration;

  exports.Configuration = Configuration = (function() {

    function Configuration(config) {
      this.config = config;
    }

    Configuration.prototype.get = function(adapter) {
      return this.config[adapter];
    };

    Configuration.prototype.getAdapter = function(adapter) {
      var Adapter, config;
      config = this.get(adapter);
      if (config.factory != null) {
        return config.factory(config);
      }
      Adapter = require("" + __dirname + "/adapters/" + adapter);
      return new Adapter(this.get(adapter));
    };

    return Configuration;

  })();

}).call(this);
