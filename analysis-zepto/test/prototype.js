var zepto = {}, $;

function Z(params) {
  this.params = params;
}

zepto.Z = function(v) {
  console.log(v)
  return new Z('zepto prototype')
}

zepto.init = function(v) {
  return zepto.Z(v)
}

$ = function (params) {
  return zepto.init()
}

$.fn = {
  constructor: zepto.Z,
  method: function() {
    return this
  }
}

zepto.Z.prototype = Z.prototype = $.fn

return $
