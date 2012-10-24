mobl.provides('mobl.reflect');
mobl.provides('mobl.reflect');
mobl.provides('mobl');
(function(__ns) {
__ns.Reflector = {
                   getProperties: function(o) {
                                    return Object.keys(o);
                                  },
                   get: function(o, prop) {
                          return o[prop];
                        },
                   set: function(o, prop, val) {
                          o[prop] = val;
                        },
                   isArray: function(o) {
                              return Object.prototype.toString.call(o) === '[object Array]';
                            },
                   isNum: function(o) {
                            return typeof o === "number";
                          },
                   isBool: function(o) {
                             return typeof o === "boolean";
                           },
                   isString: function(o) {
                               return typeof o === "string";
                             }
                 };
}(mobl.reflect));