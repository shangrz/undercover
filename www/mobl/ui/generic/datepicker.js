mobl.provides('mobl.ui.generic.datepicker');
mobl.provides('mobl.ui');
mobl.provides('mobl');
mobl.provides('mobl.ui.generic.datepicker');
mobl.provides('mobl.ui.generic');
mobl.ui.generic.datepicker.getMonthName = function(m) {
   var __this = this;
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  return months.get(m);
};

mobl.ui.generic.datepicker.narrowNumFieldStyle = 'mobl__ui__generic__datepicker__narrowNumFieldStyle';
mobl.ui.generic.datepicker.monthStyle = 'mobl__ui__generic__datepicker__monthStyle';

mobl.ui.generic.datepicker.narrowNumField = function(n, onchange, elements, callback) {
  var root2329 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node310 = $("<input>");
  node310.attr('type', "text");
  
  var ref293 = n;
  node310.val(""+ref293.get());
  var ignore49 = false;
  subs__.addSub(ref293.addEventListener('change', function(_, ref, val) {
    if(ignore49) return;
    node310.val(""+val);
  }));
  subs__.addSub(ref293.rebind());
  
  subs__.addSub(mobl.domBind(node310, 'keyup change', function() {
    ignore49 = true;
    n.set(mobl.stringTomobl__Num(node310.val()));
    ignore49 = false;
  }));
  
  
  var val121 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !mobl.Math.isNaN(n.get());
                if(result__) {
                  function after44(result__) {
                    var tmp608 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after44);if(result__ !== undefined) after44(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val121 !== null) {
    subs__.addSub(mobl.domBind(node310, 'keyup', val121));
  }
  
  var ref294 = mobl.ref(mobl.ui.generic.datepicker.narrowNumFieldStyle);
  if(ref294.get() !== null) {
    node310.attr('class', ref294.get());
    subs__.addSub(ref294.addEventListener('change', function(_, ref, val) {
      node310.attr('class', val);
    }));
    
  }
  subs__.addSub(ref294.rebind());
  
  root2329.append(node310);
  callback(root2329); return subs__;
  
  return subs__;
};

mobl.ui.generic.datepicker.datePicker = function(d, onchange, elements, callback) {
  var root2330 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = d.get() == null;
  if(result__) {
    var result__ = mobl.now();
    d.set(result__);
    
    var visible = mobl.ref(false);
    
    var day = mobl.ref(d.get().getDate());
    
    var year = mobl.ref(d.get().getFullYear());
    
    var updates = function(callback) {
      var __this = this;
      var result__ = d.get().getFullYear();
      year.set(result__);
      var result__ = d.get().getDate();
      day.set(result__);
      var result__ = d.get();
      d.set(result__);
      var result__ = onchange.get();
      if(result__) {
        function after45(result__) {
          var tmp609 = result__;
          if(callback && callback.apply) callback(); return;
        }
        var result__ = onchange.get()(d.get(), after45);if(result__ !== undefined) after45(result__);
      } else {
        {
          if(callback && callback.apply) callback(); return;
        }
      }
    };
    
    
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = visible.get() ? false : true;
                     visible.set(result__);
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp590 = mobl.ref(result__);
    
    var result__ = d.get().toDateString();
    var tmp589 = mobl.ref(result__);
    subs__.addSub(d.addEventListener('change', function() {
      tmp589.set(d.get().toDateString());
    }));
    
    var nodes2031 = $("<span>");
    root2330.append(nodes2031);
    subs__.addSub((mobl.label)(tmp589, mobl.ref(null), tmp590, function(_, callback) {
      var root2331 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2331); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2031;
      nodes2031 = node.contents();
      oldNodes.replaceWith(nodes2031);
    }));
    
    var node311 = $("<div>");
    
    
    var node312 = $("<span>");
    node311.append(node312);
    var condSubs44 = new mobl.CompSubscription();
    subs__.addSub(condSubs44);
    var oldValue44;
    var renderCond44 = function() {
      var value180 = visible.get();
      if(oldValue44 === value180) return;
      oldValue44 = value180;
      var subs__ = condSubs44;
      subs__.unsubscribe();
      node312.empty();
      if(value180) {
        
        var node313 = $("<div>");
        node313.attr('style', "float: left; text-align: center;");
        
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = d.get().setDate(d.get().getDate() + 1);
                         updates(function(result__) {
                           var tmp615 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       };
        var tmp591 = mobl.ref(result__);
        
        var nodes2038 = $("<span>");
        node313.append(nodes2038);
        subs__.addSub((mobl.ui.generic.button)(mobl.ref("+"), mobl.ref(mobl.ui.generic.buttonStyle), mobl.ref(mobl.ui.generic.buttonPushedStyle), tmp591, function(_, callback) {
          var root2338 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2338); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2038;
          nodes2038 = node.contents();
          oldNodes.replaceWith(nodes2038);
        }));
        
        var node320 = $("<br>");
        
        node313.append(node320);
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = d.get().setDate(day.get());
                         var result__ = d.get();
                         d.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp592 = mobl.ref(result__);
        
        var nodes2039 = $("<span>");
        node313.append(nodes2039);
        subs__.addSub((mobl.ui.generic.datepicker.narrowNumField)(day, tmp592, function(_, callback) {
          var root2339 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2339); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2039;
          nodes2039 = node.contents();
          oldNodes.replaceWith(nodes2039);
        }));
        
        var node321 = $("<br>");
        
        node313.append(node321);
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = d.get().setDate(d.get().getDate() - 1);
                         updates(function(result__) {
                           var tmp614 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       };
        var tmp593 = mobl.ref(result__);
        
        var nodes2040 = $("<span>");
        node313.append(nodes2040);
        subs__.addSub((mobl.ui.generic.button)(mobl.ref("-"), mobl.ref(mobl.ui.generic.buttonStyle), mobl.ref(mobl.ui.generic.buttonPushedStyle), tmp593, function(_, callback) {
          var root2340 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2340); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2040;
          nodes2040 = node.contents();
          oldNodes.replaceWith(nodes2040);
        }));
        node312.append(node313);
        
        var node314 = $("<div>");
        node314.attr('style', "float: left; text-align: center;");
        
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = d.get().setMonth(d.get().getMonth() + 1);
                         updates(function(result__) {
                           var tmp613 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       };
        var tmp594 = mobl.ref(result__);
        
        var nodes2035 = $("<span>");
        node314.append(nodes2035);
        subs__.addSub((mobl.ui.generic.button)(mobl.ref("+"), mobl.ref(mobl.ui.generic.buttonStyle), mobl.ref(mobl.ui.generic.buttonPushedStyle), tmp594, function(_, callback) {
          var root2335 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2335); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2035;
          nodes2035 = node.contents();
          oldNodes.replaceWith(nodes2035);
        }));
        
        var node318 = $("<br>");
        
        node314.append(node318);
        var result__ = mobl.ui.generic.datepicker.getMonthName(d.get().getMonth());
        var tmp595 = mobl.ref(result__);
        subs__.addSub(d.addEventListener('change', function() {
          tmp595.set(mobl.ui.generic.datepicker.getMonthName(d.get().getMonth()));
        }));
        
        var nodes2036 = $("<span>");
        node314.append(nodes2036);
        subs__.addSub((mobl.label)(tmp595, mobl.ref(mobl.ui.generic.datepicker.monthStyle), mobl.ref(null), function(_, callback) {
          var root2336 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2336); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2036;
          nodes2036 = node.contents();
          oldNodes.replaceWith(nodes2036);
        }));
        
        var node319 = $("<br>");
        
        node314.append(node319);
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = d.get().setMonth(d.get().getMonth() - 1);
                         updates(function(result__) {
                           var tmp612 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       };
        var tmp596 = mobl.ref(result__);
        
        var nodes2037 = $("<span>");
        node314.append(nodes2037);
        subs__.addSub((mobl.ui.generic.button)(mobl.ref("-"), mobl.ref(mobl.ui.generic.buttonStyle), mobl.ref(mobl.ui.generic.buttonPushedStyle), tmp596, function(_, callback) {
          var root2337 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2337); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2037;
          nodes2037 = node.contents();
          oldNodes.replaceWith(nodes2037);
        }));
        node312.append(node314);
        
        var node315 = $("<div>");
        node315.attr('style', "float: left; text-align: center;");
        
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = d.get().setFullYear(d.get().getFullYear() + 1);
                         updates(function(result__) {
                           var tmp611 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       };
        var tmp597 = mobl.ref(result__);
        
        var nodes2032 = $("<span>");
        node315.append(nodes2032);
        subs__.addSub((mobl.ui.generic.button)(mobl.ref("+"), mobl.ref(mobl.ui.generic.buttonStyle), mobl.ref(mobl.ui.generic.buttonPushedStyle), tmp597, function(_, callback) {
          var root2332 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2332); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2032;
          nodes2032 = node.contents();
          oldNodes.replaceWith(nodes2032);
        }));
        
        var node316 = $("<br>");
        
        node315.append(node316);
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = d.get().setFullYear(year.get());
                         var result__ = d.get();
                         d.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp598 = mobl.ref(result__);
        
        var nodes2033 = $("<span>");
        node315.append(nodes2033);
        subs__.addSub((mobl.ui.generic.datepicker.narrowNumField)(year, tmp598, function(_, callback) {
          var root2333 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2333); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2033;
          nodes2033 = node.contents();
          oldNodes.replaceWith(nodes2033);
        }));
        
        var node317 = $("<br>");
        
        node315.append(node317);
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = d.get().setFullYear(d.get().getFullYear() - 1);
                         updates(function(result__) {
                           var tmp610 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       };
        var tmp599 = mobl.ref(result__);
        
        var nodes2034 = $("<span>");
        node315.append(nodes2034);
        subs__.addSub((mobl.ui.generic.button)(mobl.ref("-"), mobl.ref(mobl.ui.generic.buttonStyle), mobl.ref(mobl.ui.generic.buttonPushedStyle), tmp599, function(_, callback) {
          var root2334 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2334); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2034;
          nodes2034 = node.contents();
          oldNodes.replaceWith(nodes2034);
        }));
        node312.append(node315);
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
      } else {
        
      }
    };
    renderCond44();
    subs__.addSub(visible.addEventListener('change', function() {
      renderCond44();
    }));
    
    
    var node322 = $("<div>");
    node322.attr('style', "clear: both");
    
    node311.append(node322);
    root2330.append(node311);
    callback(root2330); return subs__;
    
    
    
    
  } else {
    {
      
      var visible = mobl.ref(false);
      
      var day = mobl.ref(d.get().getDate());
      
      var year = mobl.ref(d.get().getFullYear());
      
      var updates = function(callback) {
        var __this = this;
        var result__ = d.get().getFullYear();
        year.set(result__);
        var result__ = d.get().getDate();
        day.set(result__);
        var result__ = d.get();
        d.set(result__);
        var result__ = onchange.get();
        if(result__) {
          function after45(result__) {
            var tmp609 = result__;
            if(callback && callback.apply) callback(); return;
          }
          var result__ = onchange.get()(d.get(), after45);if(result__ !== undefined) after45(result__);
        } else {
          {
            if(callback && callback.apply) callback(); return;
          }
        }
      };
      
      
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = visible.get() ? false : true;
                       visible.set(result__);
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp590 = mobl.ref(result__);
      
      var result__ = d.get().toDateString();
      var tmp589 = mobl.ref(result__);
      subs__.addSub(d.addEventListener('change', function() {
        tmp589.set(d.get().toDateString());
      }));
      
      var nodes2031 = $("<span>");
      root2330.append(nodes2031);
      subs__.addSub((mobl.label)(tmp589, mobl.ref(null), tmp590, function(_, callback) {
        var root2331 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2331); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2031;
        nodes2031 = node.contents();
        oldNodes.replaceWith(nodes2031);
      }));
      
      var node311 = $("<div>");
      
      
      var node312 = $("<span>");
      node311.append(node312);
      var condSubs44 = new mobl.CompSubscription();
      subs__.addSub(condSubs44);
      var oldValue44;
      var renderCond44 = function() {
        var value180 = visible.get();
        if(oldValue44 === value180) return;
        oldValue44 = value180;
        var subs__ = condSubs44;
        subs__.unsubscribe();
        node312.empty();
        if(value180) {
          
          var node313 = $("<div>");
          node313.attr('style', "float: left; text-align: center;");
          
          var result__ = function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = d.get().setDate(d.get().getDate() + 1);
                           updates(function(result__) {
                             var tmp615 = result__;
                             if(callback && callback.apply) callback(); return;
                           });
                         };
          var tmp591 = mobl.ref(result__);
          
          var nodes2038 = $("<span>");
          node313.append(nodes2038);
          subs__.addSub((mobl.ui.generic.button)(mobl.ref("+"), mobl.ref(mobl.ui.generic.buttonStyle), mobl.ref(mobl.ui.generic.buttonPushedStyle), tmp591, function(_, callback) {
            var root2338 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root2338); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes2038;
            nodes2038 = node.contents();
            oldNodes.replaceWith(nodes2038);
          }));
          
          var node320 = $("<br>");
          
          node313.append(node320);
          var result__ = function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = d.get().setDate(day.get());
                           var result__ = d.get();
                           d.set(result__);
                           if(callback && callback.apply) callback(); return;
                         };
          var tmp592 = mobl.ref(result__);
          
          var nodes2039 = $("<span>");
          node313.append(nodes2039);
          subs__.addSub((mobl.ui.generic.datepicker.narrowNumField)(day, tmp592, function(_, callback) {
            var root2339 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root2339); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes2039;
            nodes2039 = node.contents();
            oldNodes.replaceWith(nodes2039);
          }));
          
          var node321 = $("<br>");
          
          node313.append(node321);
          var result__ = function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = d.get().setDate(d.get().getDate() - 1);
                           updates(function(result__) {
                             var tmp614 = result__;
                             if(callback && callback.apply) callback(); return;
                           });
                         };
          var tmp593 = mobl.ref(result__);
          
          var nodes2040 = $("<span>");
          node313.append(nodes2040);
          subs__.addSub((mobl.ui.generic.button)(mobl.ref("-"), mobl.ref(mobl.ui.generic.buttonStyle), mobl.ref(mobl.ui.generic.buttonPushedStyle), tmp593, function(_, callback) {
            var root2340 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root2340); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes2040;
            nodes2040 = node.contents();
            oldNodes.replaceWith(nodes2040);
          }));
          node312.append(node313);
          
          var node314 = $("<div>");
          node314.attr('style', "float: left; text-align: center;");
          
          var result__ = function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = d.get().setMonth(d.get().getMonth() + 1);
                           updates(function(result__) {
                             var tmp613 = result__;
                             if(callback && callback.apply) callback(); return;
                           });
                         };
          var tmp594 = mobl.ref(result__);
          
          var nodes2035 = $("<span>");
          node314.append(nodes2035);
          subs__.addSub((mobl.ui.generic.button)(mobl.ref("+"), mobl.ref(mobl.ui.generic.buttonStyle), mobl.ref(mobl.ui.generic.buttonPushedStyle), tmp594, function(_, callback) {
            var root2335 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root2335); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes2035;
            nodes2035 = node.contents();
            oldNodes.replaceWith(nodes2035);
          }));
          
          var node318 = $("<br>");
          
          node314.append(node318);
          var result__ = mobl.ui.generic.datepicker.getMonthName(d.get().getMonth());
          var tmp595 = mobl.ref(result__);
          subs__.addSub(d.addEventListener('change', function() {
            tmp595.set(mobl.ui.generic.datepicker.getMonthName(d.get().getMonth()));
          }));
          
          var nodes2036 = $("<span>");
          node314.append(nodes2036);
          subs__.addSub((mobl.label)(tmp595, mobl.ref(mobl.ui.generic.datepicker.monthStyle), mobl.ref(null), function(_, callback) {
            var root2336 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root2336); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes2036;
            nodes2036 = node.contents();
            oldNodes.replaceWith(nodes2036);
          }));
          
          var node319 = $("<br>");
          
          node314.append(node319);
          var result__ = function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = d.get().setMonth(d.get().getMonth() - 1);
                           updates(function(result__) {
                             var tmp612 = result__;
                             if(callback && callback.apply) callback(); return;
                           });
                         };
          var tmp596 = mobl.ref(result__);
          
          var nodes2037 = $("<span>");
          node314.append(nodes2037);
          subs__.addSub((mobl.ui.generic.button)(mobl.ref("-"), mobl.ref(mobl.ui.generic.buttonStyle), mobl.ref(mobl.ui.generic.buttonPushedStyle), tmp596, function(_, callback) {
            var root2337 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root2337); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes2037;
            nodes2037 = node.contents();
            oldNodes.replaceWith(nodes2037);
          }));
          node312.append(node314);
          
          var node315 = $("<div>");
          node315.attr('style', "float: left; text-align: center;");
          
          var result__ = function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = d.get().setFullYear(d.get().getFullYear() + 1);
                           updates(function(result__) {
                             var tmp611 = result__;
                             if(callback && callback.apply) callback(); return;
                           });
                         };
          var tmp597 = mobl.ref(result__);
          
          var nodes2032 = $("<span>");
          node315.append(nodes2032);
          subs__.addSub((mobl.ui.generic.button)(mobl.ref("+"), mobl.ref(mobl.ui.generic.buttonStyle), mobl.ref(mobl.ui.generic.buttonPushedStyle), tmp597, function(_, callback) {
            var root2332 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root2332); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes2032;
            nodes2032 = node.contents();
            oldNodes.replaceWith(nodes2032);
          }));
          
          var node316 = $("<br>");
          
          node315.append(node316);
          var result__ = function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = d.get().setFullYear(year.get());
                           var result__ = d.get();
                           d.set(result__);
                           if(callback && callback.apply) callback(); return;
                         };
          var tmp598 = mobl.ref(result__);
          
          var nodes2033 = $("<span>");
          node315.append(nodes2033);
          subs__.addSub((mobl.ui.generic.datepicker.narrowNumField)(year, tmp598, function(_, callback) {
            var root2333 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root2333); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes2033;
            nodes2033 = node.contents();
            oldNodes.replaceWith(nodes2033);
          }));
          
          var node317 = $("<br>");
          
          node315.append(node317);
          var result__ = function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = d.get().setFullYear(d.get().getFullYear() - 1);
                           updates(function(result__) {
                             var tmp610 = result__;
                             if(callback && callback.apply) callback(); return;
                           });
                         };
          var tmp599 = mobl.ref(result__);
          
          var nodes2034 = $("<span>");
          node315.append(nodes2034);
          subs__.addSub((mobl.ui.generic.button)(mobl.ref("-"), mobl.ref(mobl.ui.generic.buttonStyle), mobl.ref(mobl.ui.generic.buttonPushedStyle), tmp599, function(_, callback) {
            var root2334 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root2334); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes2034;
            nodes2034 = node.contents();
            oldNodes.replaceWith(nodes2034);
          }));
          node312.append(node315);
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
        } else {
          
        }
      };
      renderCond44();
      subs__.addSub(visible.addEventListener('change', function() {
        renderCond44();
      }));
      
      
      var node322 = $("<div>");
      node322.attr('style', "clear: both");
      
      node311.append(node322);
      root2330.append(node311);
      callback(root2330); return subs__;
      
      
      
      
    }
  }
  return subs__;
};

mobl.ui.generic.datepicker.timePicker = function(d, onchange, elements, callback) {
  var root2341 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = d.get() == null;
  if(result__) {
    var result__ = mobl.now();
    d.set(result__);
    
    var visible = mobl.ref(false);
    
    var hours = mobl.ref(d.get().getHours());
    
    var minutes = mobl.ref(d.get().getMinutes());
    
    var updates = function(callback) {
      var __this = this;
      var result__ = d.get().getHours();
      hours.set(result__);
      var result__ = d.get().getMinutes();
      minutes.set(result__);
      var result__ = d.get();
      d.set(result__);
      var result__ = onchange.get();
      if(result__) {
        function after46(result__) {
          var tmp616 = result__;
          if(callback && callback.apply) callback(); return;
        }
        var result__ = onchange.get()(d.get(), after46);if(result__ !== undefined) after46(result__);
      } else {
        {
          if(callback && callback.apply) callback(); return;
        }
      }
    };
    
    
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = visible.get() ? false : true;
                     visible.set(result__);
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp601 = mobl.ref(result__);
    
    var result__ = (hours.get().toString().length == 1 ? "0" : "") + hours.get().toString() + ":" + (minutes.get().toString().length == 1 ? "0" : "") + minutes.get().toString();
    var tmp600 = mobl.ref(result__);
    subs__.addSub(mobl.ref(mobl.ref(hours.get().toString()), 'length').addEventListener('change', function() {
      tmp600.set((hours.get().toString().length == 1 ? "0" : "") + hours.get().toString() + ":" + (minutes.get().toString().length == 1 ? "0" : "") + minutes.get().toString());
    }));
    subs__.addSub(hours.addEventListener('change', function() {
      tmp600.set((hours.get().toString().length == 1 ? "0" : "") + hours.get().toString() + ":" + (minutes.get().toString().length == 1 ? "0" : "") + minutes.get().toString());
    }));
    subs__.addSub(mobl.ref(mobl.ref(minutes.get().toString()), 'length').addEventListener('change', function() {
      tmp600.set((hours.get().toString().length == 1 ? "0" : "") + hours.get().toString() + ":" + (minutes.get().toString().length == 1 ? "0" : "") + minutes.get().toString());
    }));
    subs__.addSub(minutes.addEventListener('change', function() {
      tmp600.set((hours.get().toString().length == 1 ? "0" : "") + hours.get().toString() + ":" + (minutes.get().toString().length == 1 ? "0" : "") + minutes.get().toString());
    }));
    
    var nodes2041 = $("<span>");
    root2341.append(nodes2041);
    subs__.addSub((mobl.label)(tmp600, mobl.ref(null), tmp601, function(_, callback) {
      var root2342 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2342); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2041;
      nodes2041 = node.contents();
      oldNodes.replaceWith(nodes2041);
    }));
    
    var node323 = $("<div>");
    
    
    var node324 = $("<span>");
    node323.append(node324);
    var condSubs45 = new mobl.CompSubscription();
    subs__.addSub(condSubs45);
    var oldValue45;
    var renderCond45 = function() {
      var value181 = visible.get();
      if(oldValue45 === value181) return;
      oldValue45 = value181;
      var subs__ = condSubs45;
      subs__.unsubscribe();
      node324.empty();
      if(value181) {
        
        var node325 = $("<div>");
        node325.attr('style', "float: left; text-align: center;");
        
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = d.get().setHours(d.get().getHours() + 1);
                         updates(function(result__) {
                           var tmp622 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       };
        var tmp602 = mobl.ref(result__);
        
        var nodes2045 = $("<span>");
        node325.append(nodes2045);
        subs__.addSub((mobl.ui.generic.button)(mobl.ref("+"), mobl.ref(mobl.ui.generic.buttonStyle), mobl.ref(mobl.ui.generic.buttonPushedStyle), tmp602, function(_, callback) {
          var root2346 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2346); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2045;
          nodes2045 = node.contents();
          oldNodes.replaceWith(nodes2045);
        }));
        
        var node329 = $("<br>");
        
        node325.append(node329);
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = d.get().setHours(hours.get());
                         updates(function(result__) {
                           var tmp621 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       };
        var tmp603 = mobl.ref(result__);
        
        var nodes2046 = $("<span>");
        node325.append(nodes2046);
        subs__.addSub((mobl.ui.generic.datepicker.narrowNumField)(hours, tmp603, function(_, callback) {
          var root2347 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2347); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2046;
          nodes2046 = node.contents();
          oldNodes.replaceWith(nodes2046);
        }));
        
        var node330 = $("<br>");
        
        node325.append(node330);
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = d.get().setHours(d.get().getHours() - 1);
                         updates(function(result__) {
                           var tmp620 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       };
        var tmp604 = mobl.ref(result__);
        
        var nodes2047 = $("<span>");
        node325.append(nodes2047);
        subs__.addSub((mobl.ui.generic.button)(mobl.ref("-"), mobl.ref(mobl.ui.generic.buttonStyle), mobl.ref(mobl.ui.generic.buttonPushedStyle), tmp604, function(_, callback) {
          var root2348 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2348); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2047;
          nodes2047 = node.contents();
          oldNodes.replaceWith(nodes2047);
        }));
        node324.append(node325);
        
        var node326 = $("<div>");
        node326.attr('style', "float: left; text-align: center;");
        
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = d.get().setMinutes(d.get().getMinutes() + 1);
                         updates(function(result__) {
                           var tmp619 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       };
        var tmp605 = mobl.ref(result__);
        
        var nodes2042 = $("<span>");
        node326.append(nodes2042);
        subs__.addSub((mobl.ui.generic.button)(mobl.ref("+"), mobl.ref(mobl.ui.generic.buttonStyle), mobl.ref(mobl.ui.generic.buttonPushedStyle), tmp605, function(_, callback) {
          var root2343 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2343); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2042;
          nodes2042 = node.contents();
          oldNodes.replaceWith(nodes2042);
        }));
        
        var node327 = $("<br>");
        
        node326.append(node327);
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = d.get().setMinutes(minutes.get());
                         updates(function(result__) {
                           var tmp618 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       };
        var tmp606 = mobl.ref(result__);
        
        var nodes2043 = $("<span>");
        node326.append(nodes2043);
        subs__.addSub((mobl.ui.generic.datepicker.narrowNumField)(minutes, tmp606, function(_, callback) {
          var root2344 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2344); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2043;
          nodes2043 = node.contents();
          oldNodes.replaceWith(nodes2043);
        }));
        
        var node328 = $("<br>");
        
        node326.append(node328);
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = d.get().setMinutes(d.get().getMinutes() - 1);
                         updates(function(result__) {
                           var tmp617 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       };
        var tmp607 = mobl.ref(result__);
        
        var nodes2044 = $("<span>");
        node326.append(nodes2044);
        subs__.addSub((mobl.ui.generic.button)(mobl.ref("-"), mobl.ref(mobl.ui.generic.buttonStyle), mobl.ref(mobl.ui.generic.buttonPushedStyle), tmp607, function(_, callback) {
          var root2345 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2345); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2044;
          nodes2044 = node.contents();
          oldNodes.replaceWith(nodes2044);
        }));
        node324.append(node326);
        
        
        
        
        
        
        
        
        
        
        
        
        
      } else {
        
      }
    };
    renderCond45();
    subs__.addSub(visible.addEventListener('change', function() {
      renderCond45();
    }));
    
    
    var node331 = $("<div>");
    node331.attr('style', "clear: both");
    
    node323.append(node331);
    root2341.append(node323);
    callback(root2341); return subs__;
    
    
    
    
  } else {
    {
      
      var visible = mobl.ref(false);
      
      var hours = mobl.ref(d.get().getHours());
      
      var minutes = mobl.ref(d.get().getMinutes());
      
      var updates = function(callback) {
        var __this = this;
        var result__ = d.get().getHours();
        hours.set(result__);
        var result__ = d.get().getMinutes();
        minutes.set(result__);
        var result__ = d.get();
        d.set(result__);
        var result__ = onchange.get();
        if(result__) {
          function after46(result__) {
            var tmp616 = result__;
            if(callback && callback.apply) callback(); return;
          }
          var result__ = onchange.get()(d.get(), after46);if(result__ !== undefined) after46(result__);
        } else {
          {
            if(callback && callback.apply) callback(); return;
          }
        }
      };
      
      
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = visible.get() ? false : true;
                       visible.set(result__);
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp601 = mobl.ref(result__);
      
      var result__ = (hours.get().toString().length == 1 ? "0" : "") + hours.get().toString() + ":" + (minutes.get().toString().length == 1 ? "0" : "") + minutes.get().toString();
      var tmp600 = mobl.ref(result__);
      subs__.addSub(mobl.ref(mobl.ref(hours.get().toString()), 'length').addEventListener('change', function() {
        tmp600.set((hours.get().toString().length == 1 ? "0" : "") + hours.get().toString() + ":" + (minutes.get().toString().length == 1 ? "0" : "") + minutes.get().toString());
      }));
      subs__.addSub(hours.addEventListener('change', function() {
        tmp600.set((hours.get().toString().length == 1 ? "0" : "") + hours.get().toString() + ":" + (minutes.get().toString().length == 1 ? "0" : "") + minutes.get().toString());
      }));
      subs__.addSub(mobl.ref(mobl.ref(minutes.get().toString()), 'length').addEventListener('change', function() {
        tmp600.set((hours.get().toString().length == 1 ? "0" : "") + hours.get().toString() + ":" + (minutes.get().toString().length == 1 ? "0" : "") + minutes.get().toString());
      }));
      subs__.addSub(minutes.addEventListener('change', function() {
        tmp600.set((hours.get().toString().length == 1 ? "0" : "") + hours.get().toString() + ":" + (minutes.get().toString().length == 1 ? "0" : "") + minutes.get().toString());
      }));
      
      var nodes2041 = $("<span>");
      root2341.append(nodes2041);
      subs__.addSub((mobl.label)(tmp600, mobl.ref(null), tmp601, function(_, callback) {
        var root2342 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2342); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2041;
        nodes2041 = node.contents();
        oldNodes.replaceWith(nodes2041);
      }));
      
      var node323 = $("<div>");
      
      
      var node324 = $("<span>");
      node323.append(node324);
      var condSubs45 = new mobl.CompSubscription();
      subs__.addSub(condSubs45);
      var oldValue45;
      var renderCond45 = function() {
        var value181 = visible.get();
        if(oldValue45 === value181) return;
        oldValue45 = value181;
        var subs__ = condSubs45;
        subs__.unsubscribe();
        node324.empty();
        if(value181) {
          
          var node325 = $("<div>");
          node325.attr('style', "float: left; text-align: center;");
          
          var result__ = function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = d.get().setHours(d.get().getHours() + 1);
                           updates(function(result__) {
                             var tmp622 = result__;
                             if(callback && callback.apply) callback(); return;
                           });
                         };
          var tmp602 = mobl.ref(result__);
          
          var nodes2045 = $("<span>");
          node325.append(nodes2045);
          subs__.addSub((mobl.ui.generic.button)(mobl.ref("+"), mobl.ref(mobl.ui.generic.buttonStyle), mobl.ref(mobl.ui.generic.buttonPushedStyle), tmp602, function(_, callback) {
            var root2346 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root2346); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes2045;
            nodes2045 = node.contents();
            oldNodes.replaceWith(nodes2045);
          }));
          
          var node329 = $("<br>");
          
          node325.append(node329);
          var result__ = function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = d.get().setHours(hours.get());
                           updates(function(result__) {
                             var tmp621 = result__;
                             if(callback && callback.apply) callback(); return;
                           });
                         };
          var tmp603 = mobl.ref(result__);
          
          var nodes2046 = $("<span>");
          node325.append(nodes2046);
          subs__.addSub((mobl.ui.generic.datepicker.narrowNumField)(hours, tmp603, function(_, callback) {
            var root2347 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root2347); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes2046;
            nodes2046 = node.contents();
            oldNodes.replaceWith(nodes2046);
          }));
          
          var node330 = $("<br>");
          
          node325.append(node330);
          var result__ = function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = d.get().setHours(d.get().getHours() - 1);
                           updates(function(result__) {
                             var tmp620 = result__;
                             if(callback && callback.apply) callback(); return;
                           });
                         };
          var tmp604 = mobl.ref(result__);
          
          var nodes2047 = $("<span>");
          node325.append(nodes2047);
          subs__.addSub((mobl.ui.generic.button)(mobl.ref("-"), mobl.ref(mobl.ui.generic.buttonStyle), mobl.ref(mobl.ui.generic.buttonPushedStyle), tmp604, function(_, callback) {
            var root2348 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root2348); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes2047;
            nodes2047 = node.contents();
            oldNodes.replaceWith(nodes2047);
          }));
          node324.append(node325);
          
          var node326 = $("<div>");
          node326.attr('style', "float: left; text-align: center;");
          
          var result__ = function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = d.get().setMinutes(d.get().getMinutes() + 1);
                           updates(function(result__) {
                             var tmp619 = result__;
                             if(callback && callback.apply) callback(); return;
                           });
                         };
          var tmp605 = mobl.ref(result__);
          
          var nodes2042 = $("<span>");
          node326.append(nodes2042);
          subs__.addSub((mobl.ui.generic.button)(mobl.ref("+"), mobl.ref(mobl.ui.generic.buttonStyle), mobl.ref(mobl.ui.generic.buttonPushedStyle), tmp605, function(_, callback) {
            var root2343 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root2343); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes2042;
            nodes2042 = node.contents();
            oldNodes.replaceWith(nodes2042);
          }));
          
          var node327 = $("<br>");
          
          node326.append(node327);
          var result__ = function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = d.get().setMinutes(minutes.get());
                           updates(function(result__) {
                             var tmp618 = result__;
                             if(callback && callback.apply) callback(); return;
                           });
                         };
          var tmp606 = mobl.ref(result__);
          
          var nodes2043 = $("<span>");
          node326.append(nodes2043);
          subs__.addSub((mobl.ui.generic.datepicker.narrowNumField)(minutes, tmp606, function(_, callback) {
            var root2344 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root2344); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes2043;
            nodes2043 = node.contents();
            oldNodes.replaceWith(nodes2043);
          }));
          
          var node328 = $("<br>");
          
          node326.append(node328);
          var result__ = function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           var result__ = d.get().setMinutes(d.get().getMinutes() - 1);
                           updates(function(result__) {
                             var tmp617 = result__;
                             if(callback && callback.apply) callback(); return;
                           });
                         };
          var tmp607 = mobl.ref(result__);
          
          var nodes2044 = $("<span>");
          node326.append(nodes2044);
          subs__.addSub((mobl.ui.generic.button)(mobl.ref("-"), mobl.ref(mobl.ui.generic.buttonStyle), mobl.ref(mobl.ui.generic.buttonPushedStyle), tmp607, function(_, callback) {
            var root2345 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root2345); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes2044;
            nodes2044 = node.contents();
            oldNodes.replaceWith(nodes2044);
          }));
          node324.append(node326);
          
          
          
          
          
          
          
          
          
          
          
          
          
        } else {
          
        }
      };
      renderCond45();
      subs__.addSub(visible.addEventListener('change', function() {
        renderCond45();
      }));
      
      
      var node331 = $("<div>");
      node331.attr('style', "clear: both");
      
      node323.append(node331);
      root2341.append(node323);
      callback(root2341); return subs__;
      
      
      
      
    }
  }
  return subs__;
};
