mobl.provides('ui');
mobl.provides('mobl.ui');
mobl.provides('mobl.ui.stylemixin');
mobl.provides('mobl');
mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root2235 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node261 = $("<span>");
  root2235.append(node261);
  var condSubs33 = new mobl.CompSubscription();
  subs__.addSub(condSubs33);
  var oldValue33;
  var renderCond33 = function() {
    var value153 = value.get();
    if(oldValue33 === value153) return;
    oldValue33 = value153;
    var subs__ = condSubs33;
    subs__.unsubscribe();
    node261.empty();
    if(value153) {
      var nodes1969 = $("<span>");
      node261.append(nodes1969);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl64();
      }));
      
      function renderControl64() {
        subs__.addSub((elements)(function(elements, callback) {
          var root2236 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2236); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1969;
          nodes1969 = node.contents();
          oldNodes.replaceWith(nodes1969);
        }));
      }
      renderControl64();
      
      
    } else {
      var nodes1970 = $("<span>");
      node261.append(nodes1970);
      subs__.addSub((mobl.block)(style, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2237 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes1971 = $("<span>");
        root2237.append(nodes1971);
        subs__.addSub((mobl.label)(loadingMessage, mobl.ref(null), mobl.ref(null), function(_, callback) {
          var root2238 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2238); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1971;
          nodes1971 = node.contents();
          oldNodes.replaceWith(nodes1971);
        }));
        var nodes1972 = $("<span>");
        root2237.append(nodes1972);
        subs__.addSub((ui.image)(mobl.ref("data:image/gif;base64,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"), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref("middle"), mobl.ref(null), function(_, callback) {
          var root2239 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2239); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1972;
          nodes1972 = node.contents();
          oldNodes.replaceWith(nodes1972);
        }));
        callback(root2237); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1970;
        nodes1970 = node.contents();
        oldNodes.replaceWith(nodes1970);
      }));
      
      
    }
  };
  renderCond33();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond33();
  }));
  
  callback(root2235); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, fixedPosition, onclick, elements, callback) {
  var root2240 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node262 = $("<div>");
  
  var ref225 = mobl.ref(ui.headerStyle);
  if(ref225.get() !== null) {
    node262.attr('class', ref225.get());
    subs__.addSub(ref225.addEventListener('change', function(_, ref, val) {
      node262.attr('class', val);
    }));
    
  }
  subs__.addSub(ref225.rebind());
  
  var val92 = onclick.get();
  if(val92 !== null) {
    subs__.addSub(mobl.domBind(node262, 'tap', val92));
  }
  
  var ref226 = mobl.ref(fixedPosition.get() ? "position:fixed;" : null);
  if(ref226.get() !== null) {
    node262.attr('style', ref226.get());
    subs__.addSub(ref226.addEventListener('change', function(_, ref, val) {
      node262.attr('style', val);
    }));
    subs__.addSub(fixedPosition.addEventListener('change', function() {
      node262.attr('style', fixedPosition.get() ? "position:fixed;" : null);
    }));
    
  }
  subs__.addSub(ref226.rebind());
  
  
  var node265 = $("<div>");
  
  var ref224 = mobl.ref(ui.headerContainerStyle);
  if(ref224.get() !== null) {
    node265.attr('class', ref224.get());
    subs__.addSub(ref224.addEventListener('change', function(_, ref, val) {
      node265.attr('class', val);
    }));
    
  }
  subs__.addSub(ref224.rebind());
  
  
  var node266 = $("<div>");
  
  var ref222 = text;
  node266.text(""+ref222.get());
  var ignore37 = false;
  subs__.addSub(ref222.addEventListener('change', function(_, ref, val) {
    if(ignore37) return;
    node266.text(""+val);
  }));
  subs__.addSub(ref222.rebind());
  
  
  var ref223 = mobl.ref(ui.headerTextStyle);
  if(ref223.get() !== null) {
    node266.attr('class', ref223.get());
    subs__.addSub(ref223.addEventListener('change', function(_, ref, val) {
      node266.attr('class', val);
    }));
    
  }
  subs__.addSub(ref223.rebind());
  
  node265.append(node266);
  node262.append(node265);
  var nodes1973 = $("<span>");
  node262.append(nodes1973);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl65();
  }));
  
  function renderControl65() {
    subs__.addSub((elements)(function(elements, callback) {
      var root2241 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2241); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1973;
      nodes1973 = node.contents();
      oldNodes.replaceWith(nodes1973);
    }));
  }
  renderControl65();
  root2240.append(node262);
  
  var node263 = $("<span>");
  root2240.append(node263);
  var condSubs34 = new mobl.CompSubscription();
  subs__.addSub(condSubs34);
  var oldValue34;
  var renderCond34 = function() {
    var value154 = fixedPosition.get();
    if(oldValue34 === value154) return;
    oldValue34 = value154;
    var subs__ = condSubs34;
    subs__.unsubscribe();
    node263.empty();
    if(value154) {
      
      var node264 = $("<div>");
      node264.attr('id', "hello");
      node264.attr('style', "height: 2.9em;");
      
      node263.append(node264);
      
      
    } else {
      
    }
  };
  renderCond34();
  subs__.addSub(fixedPosition.addEventListener('change', function() {
    renderCond34();
  }));
  
  callback(root2240); return subs__;
  
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root2242 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref227 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref227.get() !== null) {
    sp.attr('class', ref227.get());
    subs__.addSub(ref227.addEventListener('change', function(_, ref, val) {
      sp.attr('class', val);
    }));
    subs__.addSub(pushed.addEventListener('change', function() {
      sp.attr('class', pushed.get() ? pushedStyle.get() : style.get());
    }));
    subs__.addSub(pushedStyle.addEventListener('change', function() {
      sp.attr('class', pushed.get() ? pushedStyle.get() : style.get());
    }));
    subs__.addSub(style.addEventListener('change', function() {
      sp.attr('class', pushed.get() ? pushedStyle.get() : style.get());
    }));
    
  }
  subs__.addSub(ref227.rebind());
  
  var val93 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val93 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val93));
  }
  
  var val94 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.y < 0 || event.y > sp.outerHeight() || event.x < 0 || event.x > sp.outerWidth();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  if(callback && callback.apply) callback(); return;
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val94 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val94));
  }
  
  var val95 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after33(result__) {
                    var tmp566 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after33);if(result__ !== undefined) after33(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val95 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val95));
  }
  
  var val96 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  if(callback && callback.apply) callback(); return;
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val96 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val96));
  }
  
  var ref228 = text;
  sp.text(""+ref228.get());
  var ignore38 = false;
  subs__.addSub(ref228.addEventListener('change', function(_, ref, val) {
    if(ignore38) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref228.rebind());
  
  
  root2242.append(sp);
  callback(root2242); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root2243 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1974 = $("<span>");
  root2243.append(nodes1974);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root2244 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2244); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1974;
    nodes1974 = node.contents();
    oldNodes.replaceWith(nodes1974);
  }));
  callback(root2243); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root2245 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1975 = $("<span>");
  root2245.append(nodes1975);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root2246 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2246); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1975;
    nodes1975 = node.contents();
    oldNodes.replaceWith(nodes1975);
  }));
  callback(root2245); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root2247 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node267 = $("<ul>");
  
  var ref229 = mobl.ref(ui.groupStyle);
  if(ref229.get() !== null) {
    node267.attr('class', ref229.get());
    subs__.addSub(ref229.addEventListener('change', function(_, ref, val) {
      node267.attr('class', val);
    }));
    
  }
  subs__.addSub(ref229.rebind());
  
  var nodes1976 = $("<span>");
  node267.append(nodes1976);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl66();
  }));
  
  function renderControl66() {
    subs__.addSub((elements)(function(elements, callback) {
      var root2248 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2248); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1976;
      nodes1976 = node.contents();
      oldNodes.replaceWith(nodes1976);
    }));
  }
  renderControl66();
  root2247.append(node267);
  callback(root2247); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root2249 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node268 = $("<img>");
  
  var ref230 = url;
  if(ref230.get() !== null) {
    node268.attr('src', ref230.get());
    subs__.addSub(ref230.addEventListener('change', function(_, ref, val) {
      node268.attr('src', val);
    }));
    
  }
  subs__.addSub(ref230.rebind());
  
  var ref231 = width;
  if(ref231.get() !== null) {
    node268.attr('width', ref231.get());
    subs__.addSub(ref231.addEventListener('change', function(_, ref, val) {
      node268.attr('width', val);
    }));
    
  }
  subs__.addSub(ref231.rebind());
  
  var ref232 = height;
  if(ref232.get() !== null) {
    node268.attr('height', ref232.get());
    subs__.addSub(ref232.addEventListener('change', function(_, ref, val) {
      node268.attr('height', val);
    }));
    
  }
  subs__.addSub(ref232.rebind());
  
  var ref233 = style;
  if(ref233.get() !== null) {
    node268.attr('class', ref233.get());
    subs__.addSub(ref233.addEventListener('change', function(_, ref, val) {
      node268.attr('class', val);
    }));
    
  }
  subs__.addSub(ref233.rebind());
  
  var val97 = onclick.get();
  if(val97 !== null) {
    subs__.addSub(mobl.domBind(node268, 'tap', val97));
  }
  
  var ref234 = valign;
  if(ref234.get() !== null) {
    node268.attr('valign', ref234.get());
    subs__.addSub(ref234.addEventListener('change', function(_, ref, val) {
      node268.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref234.rebind());
  
  var ref235 = align;
  if(ref235.get() !== null) {
    node268.attr('align', ref235.get());
    subs__.addSub(ref235.addEventListener('change', function(_, ref, val) {
      node268.attr('align', val);
    }));
    
  }
  subs__.addSub(ref235.rebind());
  
  root2249.append(node268);
  callback(root2249); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';
ui.itemDownArrowStyle = 'ui__itemDownArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root2250 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref236 = mobl.ref(ui.itemStyle);
  if(ref236.get() !== null) {
    el.attr('class', ref236.get());
    subs__.addSub(ref236.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref236.rebind());
  
  var ref237 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref237.get() !== null) {
    el.attr('class', ref237.get());
    subs__.addSub(ref237.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    subs__.addSub(onclick.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(hideArrow.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(mobl.ref(ui.itemArrowStyle).addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(pushed.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(pushedStyle.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(style.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    
  }
  subs__.addSub(ref237.rebind());
  
  var val98 = onswipe.get();
  if(val98 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val98));
  }
  
  var val99 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp567 = result__;
                                           function after34(result__) {
                                             var tmp568 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after34);if(result__ !== undefined) after34(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp569 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val99 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val99));
  }
  
  var nodes1977 = $("<span>");
  el.append(nodes1977);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl67();
  }));
  
  function renderControl67() {
    subs__.addSub((elements)(function(elements, callback) {
      var root2251 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2251); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1977;
      nodes1977 = node.contents();
      oldNodes.replaceWith(nodes1977);
    }));
  }
  renderControl67();
  root2250.append(el);
  callback(root2250); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root2252 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node269 = $("<input>");
  node269.attr('type', "checkbox");
  
  var ref239 = b;
  node269.attr('checked', !!ref239.get());
  subs__.addSub(ref239.addEventListener('change', function(_, ref, val) {
    if(ref === ref239) node269.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node269, 'change', function() {
    b.set(!!node269.attr('checked'));
  }));
  
  var val101 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val101 !== null) {
    subs__.addSub(mobl.domBind(node269, 'tap', val101));
  }
  
  var val102 = onchange.get();
  if(val102 !== null) {
    subs__.addSub(mobl.domBind(node269, 'change', val102));
  }
  
  root2252.append(node269);
  
  root2252.append(" ");
  
  var node270 = $("<span>");
  
  var ref238 = label;
  node270.text(""+ref238.get());
  var ignore39 = false;
  subs__.addSub(ref238.addEventListener('change', function(_, ref, val) {
    if(ignore39) return;
    node270.text(""+val);
  }));
  subs__.addSub(ref238.rebind());
  
  
  var val100 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after35(result__) {
                    var tmp570 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after35);if(result__ !== undefined) after35(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val100 !== null) {
    subs__.addSub(mobl.domBind(node270, 'tap', val100));
  }
  
  root2252.append(node270);
  callback(root2252); return subs__;
  
  
  return subs__;
};
ui.textFieldStyle = 'ui__textFieldStyle';
ui.textFieldInvalidStyle = 'ui__textFieldInvalidStyle';
ui.textFieldLabelStyle = 'ui__textFieldLabelStyle';
ui.validationMessageStyle = 'ui__validationMessageStyle';
ui.alwaysOkValidator = function(s) {
   var __this = this;
  return "";
};


ui.textField = function(s, placeholder, label, inputType, validator, style, invalidStyle, autofocus, autocorrect, autocapitalize, autocomplete, onchange, onkeyup, elements, callback) {
  var root2253 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node271 = $("<span>");
  root2253.append(node271);
  var condSubs35 = new mobl.CompSubscription();
  subs__.addSub(condSubs35);
  var oldValue35;
  var renderCond35 = function() {
    var value155 = label.get();
    if(oldValue35 === value155) return;
    oldValue35 = value155;
    var subs__ = condSubs35;
    subs__.unsubscribe();
    node271.empty();
    if(value155) {
      var nodes1978 = $("<span>");
      node271.append(nodes1978);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root2254 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2254); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1978;
        nodes1978 = node.contents();
        oldNodes.replaceWith(nodes1978);
      }));
      
      
    } else {
      
    }
  };
  renderCond35();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond35();
  }));
  
  
  var node272 = $("<span>");
  root2253.append(node272);
  var condSubs36 = new mobl.CompSubscription();
  subs__.addSub(condSubs36);
  var oldValue36;
  var renderCond36 = function() {
    var value156 = validator.get();
    if(oldValue36 === value156) return;
    oldValue36 = value156;
    var subs__ = condSubs36;
    subs__.unsubscribe();
    node272.empty();
    if(value156) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after39(result__) {
        var tmp571 = result__;
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp572 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node273 = $("<input>");
        
        var ref240 = inputType;
        if(ref240.get() !== null) {
          node273.attr('type', ref240.get());
          subs__.addSub(ref240.addEventListener('change', function(_, ref, val) {
            node273.attr('type', val);
          }));
          
        }
        subs__.addSub(ref240.rebind());
        
        var ref241 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref241.get() !== null) {
          node273.attr('class', ref241.get());
          subs__.addSub(ref241.addEventListener('change', function(_, ref, val) {
            node273.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node273.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node273.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node273.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref241.rebind());
        
        var ref242 = placeholder;
        if(ref242.get() !== null) {
          node273.attr('placeholder', ref242.get());
          subs__.addSub(ref242.addEventListener('change', function(_, ref, val) {
            node273.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref242.rebind());
        
        var ref243 = temp;
        node273.val(""+ref243.get());
        var ignore40 = false;
        subs__.addSub(ref243.addEventListener('change', function(_, ref, val) {
          if(ignore40) return;
          node273.val(""+val);
        }));
        subs__.addSub(ref243.rebind());
        
        subs__.addSub(mobl.domBind(node273, 'keyup change', function() {
          ignore40 = true;
          temp.set(mobl.stringTomobl__String(node273.val()));
          ignore40 = false;
        }));
        
        
        var val103 = onchange.get();
        if(val103 !== null) {
          subs__.addSub(mobl.domBind(node273, 'change', val103));
        }
        
        var val104 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after36(result__) {
                          var tmp573 = result__;
                          function after37(result__) {
                            var tmp574 = result__;
                            var result__ = tmp574;
                            validationMessage.set(result__);
                            var result__ = !validationMessage.get();
                            if(result__) {
                              var result__ = temp.get();
                              s.set(result__);
                              var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
                              if(callback && callback.apply) callback(); return;
                            } else {
                              {
                                var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
                                if(callback && callback.apply) callback(); return;
                              }
                            }
                          }
                          var result__ = validator.get()(temp.get(), after37);if(result__ !== undefined) after37(result__);
                        }
                        var result__ = onkeyup.get()(event, after36);if(result__ !== undefined) after36(result__);
                      } else {
                        {
                          function after38(result__) {
                            var tmp574 = result__;
                            var result__ = tmp574;
                            validationMessage.set(result__);
                            var result__ = !validationMessage.get();
                            if(result__) {
                              var result__ = temp.get();
                              s.set(result__);
                              var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
                              if(callback && callback.apply) callback(); return;
                            } else {
                              {
                                var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
                                if(callback && callback.apply) callback(); return;
                              }
                            }
                          }
                          var result__ = validator.get()(temp.get(), after38);if(result__ !== undefined) after38(result__);
                        }
                      }
                    };
        if(val104 !== null) {
          subs__.addSub(mobl.domBind(node273, 'keyup', val104));
        }
        
        var ref244 = autofocus;
        if(ref244.get() !== null) {
          node273.attr('autofocus', ref244.get());
          subs__.addSub(ref244.addEventListener('change', function(_, ref, val) {
            node273.attr('autofocus', val);
          }));
          
        }
        subs__.addSub(ref244.rebind());
        
        var ref245 = autocorrect;
        if(ref245.get() !== null) {
          node273.attr('autocorrect', ref245.get());
          subs__.addSub(ref245.addEventListener('change', function(_, ref, val) {
            node273.attr('autocorrect', val);
          }));
          
        }
        subs__.addSub(ref245.rebind());
        
        var ref246 = autocapitalize;
        if(ref246.get() !== null) {
          node273.attr('autocapitalize', ref246.get());
          subs__.addSub(ref246.addEventListener('change', function(_, ref, val) {
            node273.attr('autocapitalize', val);
          }));
          
        }
        subs__.addSub(ref246.rebind());
        
        var ref247 = autocomplete;
        if(ref247.get() !== null) {
          node273.attr('autocomplete', ref247.get());
          subs__.addSub(ref247.addEventListener('change', function(_, ref, val) {
            node273.attr('autocomplete', val);
          }));
          
        }
        subs__.addSub(ref247.rebind());
        
        node272.append(node273);
        var nodes1979 = $("<span>");
        node272.append(nodes1979);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), mobl.ref(null), function(_, callback) {
          var root2255 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2255); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1979;
          nodes1979 = node.contents();
          oldNodes.replaceWith(nodes1979);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after39);if(result__ !== undefined) after39(result__);
    } else {
      
      var node274 = $("<input>");
      
      var ref248 = inputType;
      if(ref248.get() !== null) {
        node274.attr('type', ref248.get());
        subs__.addSub(ref248.addEventListener('change', function(_, ref, val) {
          node274.attr('type', val);
        }));
        
      }
      subs__.addSub(ref248.rebind());
      
      var ref249 = style;
      if(ref249.get() !== null) {
        node274.attr('class', ref249.get());
        subs__.addSub(ref249.addEventListener('change', function(_, ref, val) {
          node274.attr('class', val);
        }));
        
      }
      subs__.addSub(ref249.rebind());
      
      var ref250 = placeholder;
      if(ref250.get() !== null) {
        node274.attr('placeholder', ref250.get());
        subs__.addSub(ref250.addEventListener('change', function(_, ref, val) {
          node274.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref250.rebind());
      
      var ref251 = s;
      node274.val(""+ref251.get());
      var ignore41 = false;
      subs__.addSub(ref251.addEventListener('change', function(_, ref, val) {
        if(ignore41) return;
        node274.val(""+val);
      }));
      subs__.addSub(ref251.rebind());
      
      subs__.addSub(mobl.domBind(node274, 'keyup change', function() {
        ignore41 = true;
        s.set(mobl.stringTomobl__String(node274.val()));
        ignore41 = false;
      }));
      
      
      var val105 = onchange.get();
      if(val105 !== null) {
        subs__.addSub(mobl.domBind(node274, 'change', val105));
      }
      
      var val106 = onkeyup.get();
      if(val106 !== null) {
        subs__.addSub(mobl.domBind(node274, 'keyup', val106));
      }
      
      var ref252 = autofocus;
      if(ref252.get() !== null) {
        node274.attr('autofocus', ref252.get());
        subs__.addSub(ref252.addEventListener('change', function(_, ref, val) {
          node274.attr('autofocus', val);
        }));
        
      }
      subs__.addSub(ref252.rebind());
      
      var ref253 = autocorrect;
      if(ref253.get() !== null) {
        node274.attr('autocorrect', ref253.get());
        subs__.addSub(ref253.addEventListener('change', function(_, ref, val) {
          node274.attr('autocorrect', val);
        }));
        
      }
      subs__.addSub(ref253.rebind());
      
      var ref254 = autocapitalize;
      if(ref254.get() !== null) {
        node274.attr('autocapitalize', ref254.get());
        subs__.addSub(ref254.addEventListener('change', function(_, ref, val) {
          node274.attr('autocapitalize', val);
        }));
        
      }
      subs__.addSub(ref254.rebind());
      
      var ref255 = autocomplete;
      if(ref255.get() !== null) {
        node274.attr('autocomplete', ref255.get());
        subs__.addSub(ref255.addEventListener('change', function(_, ref, val) {
          node274.attr('autocomplete', val);
        }));
        
      }
      subs__.addSub(ref255.rebind());
      
      node272.append(node274);
      
      
    }
  };
  renderCond36();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond36();
  }));
  
  callback(root2253); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, autofocus, onchange, onkeyup, elements, callback) {
  var root2256 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1980 = $("<span>");
  root2256.append(nodes1980);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("email"), validator, style, invalidStyle, autofocus, mobl.ref(false), mobl.ref(false), mobl.ref(false), onchange, onkeyup, function(_, callback) {
    var root2257 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2257); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1980;
    nodes1980 = node.contents();
    oldNodes.replaceWith(nodes1980);
  }));
  callback(root2256); return subs__;
  
  return subs__;
};

ui.telField = function(phoneNumber, placeholder, label, validator, style, invalidStyle, autofocus, onchange, onkeyup, elements, callback) {
  var root2258 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1981 = $("<span>");
  root2258.append(nodes1981);
  subs__.addSub((ui.textField)(phoneNumber, placeholder, label, mobl.ref("tel"), validator, style, invalidStyle, autofocus, mobl.ref(false), mobl.ref(false), mobl.ref(false), onchange, onkeyup, function(_, callback) {
    var root2259 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2259); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1981;
    nodes1981 = node.contents();
    oldNodes.replaceWith(nodes1981);
  }));
  callback(root2258); return subs__;
  
  return subs__;
};

ui.rangeField = function(n, min, max, step, placeholder, label, onchange, onkeyup, elements, callback) {
  var root2260 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node275 = $("<span>");
  root2260.append(node275);
  var condSubs37 = new mobl.CompSubscription();
  subs__.addSub(condSubs37);
  var oldValue37;
  var renderCond37 = function() {
    var value157 = label.get();
    if(oldValue37 === value157) return;
    oldValue37 = value157;
    var subs__ = condSubs37;
    subs__.unsubscribe();
    node275.empty();
    if(value157) {
      var nodes1982 = $("<span>");
      node275.append(nodes1982);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root2261 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2261); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1982;
        nodes1982 = node.contents();
        oldNodes.replaceWith(nodes1982);
      }));
      
      
    } else {
      
    }
  };
  renderCond37();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond37();
  }));
  
  
  var node276 = $("<input>");
  node276.attr('type', "range");
  
  var ref256 = n;
  node276.val(""+ref256.get());
  var ignore42 = false;
  subs__.addSub(ref256.addEventListener('change', function(_, ref, val) {
    if(ignore42) return;
    node276.val(""+val);
  }));
  subs__.addSub(ref256.rebind());
  
  subs__.addSub(mobl.domBind(node276, 'keyup change', function() {
    ignore42 = true;
    n.set(mobl.stringTomobl__Num(node276.val()));
    ignore42 = false;
  }));
  
  
  var ref257 = min;
  if(ref257.get() !== null) {
    node276.attr('min', ref257.get());
    subs__.addSub(ref257.addEventListener('change', function(_, ref, val) {
      node276.attr('min', val);
    }));
    
  }
  subs__.addSub(ref257.rebind());
  
  var ref258 = max;
  if(ref258.get() !== null) {
    node276.attr('max', ref258.get());
    subs__.addSub(ref258.addEventListener('change', function(_, ref, val) {
      node276.attr('max', val);
    }));
    
  }
  subs__.addSub(ref258.rebind());
  
  var ref259 = step;
  if(ref259.get() !== null) {
    node276.attr('step', ref259.get());
    subs__.addSub(ref259.addEventListener('change', function(_, ref, val) {
      node276.attr('step', val);
    }));
    
  }
  subs__.addSub(ref259.rebind());
  node276.attr('style', "width: 99%;");
  
  var val107 = onchange.get();
  if(val107 !== null) {
    subs__.addSub(mobl.domBind(node276, 'change', val107));
  }
  
  var val108 = onkeyup.get();
  if(val108 !== null) {
    subs__.addSub(mobl.domBind(node276, 'keyup', val108));
  }
  
  var ref260 = placeholder;
  if(ref260.get() !== null) {
    node276.attr('placeholder', ref260.get());
    subs__.addSub(ref260.addEventListener('change', function(_, ref, val) {
      node276.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref260.rebind());
  
  root2260.append(node276);
  callback(root2260); return subs__;
  
  
  return subs__;
};

ui.numField = function(n, label, placeholder, validator, style, invalidStyle, autofocus, step, min, max, onchange, onkeyup, elements, callback) {
  var root2262 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validateNum = function(n) {
     var __this = this;
    if(mobl.Math.isNaN(n)) {
      return mobl._("Not a valid numeric value", []);
    } else if(max.get() != null && n > max.get()) {
      return mobl._("Number is too high, maximum is: %%", [max.get()]);
    } else if(min.get() != null && n < min.get()) {
      return mobl._("Number is too low, minimum is: %%", [min.get()]);
    } else {
      return "";
    }
  };
  
  
  var result__ = validator.get() == null;
  if(result__) {
    var result__ = validateNum;
    validator.set(result__);
    function after42(result__) {
      var tmp575 = result__;
      var validationMessage = mobl.ref(result__);
      
      var node277 = $("<input>");
      node277.attr('type', "number");
      
      var ref261 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
      if(ref261.get() !== null) {
        node277.attr('class', ref261.get());
        subs__.addSub(ref261.addEventListener('change', function(_, ref, val) {
          node277.attr('class', val);
        }));
        subs__.addSub(validationMessage.addEventListener('change', function() {
          node277.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
        }));
        subs__.addSub(invalidStyle.addEventListener('change', function() {
          node277.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
        }));
        subs__.addSub(style.addEventListener('change', function() {
          node277.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
        }));
        
      }
      subs__.addSub(ref261.rebind());
      
      var ref262 = placeholder;
      if(ref262.get() !== null) {
        node277.attr('placeholder', ref262.get());
        subs__.addSub(ref262.addEventListener('change', function(_, ref, val) {
          node277.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref262.rebind());
      
      var ref263 = n;
      node277.val(""+ref263.get());
      var ignore43 = false;
      subs__.addSub(ref263.addEventListener('change', function(_, ref, val) {
        if(ignore43) return;
        node277.val(""+val);
      }));
      subs__.addSub(ref263.rebind());
      
      subs__.addSub(mobl.domBind(node277, 'keyup change', function() {
        ignore43 = true;
        n.set(mobl.stringTomobl__Num(node277.val()));
        ignore43 = false;
      }));
      
      
      var val109 = onchange.get();
      if(val109 !== null) {
        subs__.addSub(mobl.domBind(node277, 'change', val109));
      }
      
      var val110 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    function after40(result__) {
                      var tmp576 = result__;
                      var result__ = tmp576;
                      validationMessage.set(result__);
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after41(result__) {
                          var tmp577 = result__;
                          if(callback && callback.apply) callback(); return;
                        }
                        var result__ = onkeyup.get()(event, after41);if(result__ !== undefined) after41(result__);
                      } else {
                        {
                          if(callback && callback.apply) callback(); return;
                        }
                      }
                    }
                    var result__ = validator.get()(n.get(), after40);if(result__ !== undefined) after40(result__);
                  };
      if(val110 !== null) {
        subs__.addSub(mobl.domBind(node277, 'keyup', val110));
      }
      
      var ref264 = autofocus;
      if(ref264.get() !== null) {
        node277.attr('autofocus', ref264.get());
        subs__.addSub(ref264.addEventListener('change', function(_, ref, val) {
          node277.attr('autofocus', val);
        }));
        
      }
      subs__.addSub(ref264.rebind());
      
      var ref265 = step;
      if(ref265.get() !== null) {
        node277.attr('step', ref265.get());
        subs__.addSub(ref265.addEventListener('change', function(_, ref, val) {
          node277.attr('step', val);
        }));
        
      }
      subs__.addSub(ref265.rebind());
      
      var ref266 = min;
      if(ref266.get() !== null) {
        node277.attr('min', ref266.get());
        subs__.addSub(ref266.addEventListener('change', function(_, ref, val) {
          node277.attr('min', val);
        }));
        
      }
      subs__.addSub(ref266.rebind());
      
      var ref267 = max;
      if(ref267.get() !== null) {
        node277.attr('max', ref267.get());
        subs__.addSub(ref267.addEventListener('change', function(_, ref, val) {
          node277.attr('max', val);
        }));
        
      }
      subs__.addSub(ref267.rebind());
      
      root2262.append(node277);
      var nodes1983 = $("<span>");
      root2262.append(nodes1983);
      subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), mobl.ref(null), function(_, callback) {
        var root2263 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2263); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1983;
        nodes1983 = node.contents();
        oldNodes.replaceWith(nodes1983);
      }));
      callback(root2262); return subs__;
      
      
    }
    var result__ = validator.get()(n.get(), after42);if(result__ !== undefined) after42(result__);
  } else {
    {
      function after42(result__) {
        var tmp575 = result__;
        var validationMessage = mobl.ref(result__);
        
        var node277 = $("<input>");
        node277.attr('type', "number");
        
        var ref261 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref261.get() !== null) {
          node277.attr('class', ref261.get());
          subs__.addSub(ref261.addEventListener('change', function(_, ref, val) {
            node277.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node277.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node277.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node277.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref261.rebind());
        
        var ref262 = placeholder;
        if(ref262.get() !== null) {
          node277.attr('placeholder', ref262.get());
          subs__.addSub(ref262.addEventListener('change', function(_, ref, val) {
            node277.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref262.rebind());
        
        var ref263 = n;
        node277.val(""+ref263.get());
        var ignore43 = false;
        subs__.addSub(ref263.addEventListener('change', function(_, ref, val) {
          if(ignore43) return;
          node277.val(""+val);
        }));
        subs__.addSub(ref263.rebind());
        
        subs__.addSub(mobl.domBind(node277, 'keyup change', function() {
          ignore43 = true;
          n.set(mobl.stringTomobl__Num(node277.val()));
          ignore43 = false;
        }));
        
        
        var val109 = onchange.get();
        if(val109 !== null) {
          subs__.addSub(mobl.domBind(node277, 'change', val109));
        }
        
        var val110 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      function after40(result__) {
                        var tmp576 = result__;
                        var result__ = tmp576;
                        validationMessage.set(result__);
                        var result__ = onkeyup.get();
                        if(result__) {
                          function after41(result__) {
                            var tmp577 = result__;
                            if(callback && callback.apply) callback(); return;
                          }
                          var result__ = onkeyup.get()(event, after41);if(result__ !== undefined) after41(result__);
                        } else {
                          {
                            if(callback && callback.apply) callback(); return;
                          }
                        }
                      }
                      var result__ = validator.get()(n.get(), after40);if(result__ !== undefined) after40(result__);
                    };
        if(val110 !== null) {
          subs__.addSub(mobl.domBind(node277, 'keyup', val110));
        }
        
        var ref264 = autofocus;
        if(ref264.get() !== null) {
          node277.attr('autofocus', ref264.get());
          subs__.addSub(ref264.addEventListener('change', function(_, ref, val) {
            node277.attr('autofocus', val);
          }));
          
        }
        subs__.addSub(ref264.rebind());
        
        var ref265 = step;
        if(ref265.get() !== null) {
          node277.attr('step', ref265.get());
          subs__.addSub(ref265.addEventListener('change', function(_, ref, val) {
            node277.attr('step', val);
          }));
          
        }
        subs__.addSub(ref265.rebind());
        
        var ref266 = min;
        if(ref266.get() !== null) {
          node277.attr('min', ref266.get());
          subs__.addSub(ref266.addEventListener('change', function(_, ref, val) {
            node277.attr('min', val);
          }));
          
        }
        subs__.addSub(ref266.rebind());
        
        var ref267 = max;
        if(ref267.get() !== null) {
          node277.attr('max', ref267.get());
          subs__.addSub(ref267.addEventListener('change', function(_, ref, val) {
            node277.attr('max', val);
          }));
          
        }
        subs__.addSub(ref267.rebind());
        
        root2262.append(node277);
        var nodes1983 = $("<span>");
        root2262.append(nodes1983);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), mobl.ref(null), function(_, callback) {
          var root2263 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2263); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1983;
          nodes1983 = node.contents();
          oldNodes.replaceWith(nodes1983);
        }));
        callback(root2262); return subs__;
        
        
      }
      var result__ = validator.get()(n.get(), after42);if(result__ !== undefined) after42(result__);
    }
  }
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root2264 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node278 = $("<span>");
  root2264.append(node278);
  var condSubs38 = new mobl.CompSubscription();
  subs__.addSub(condSubs38);
  var oldValue38;
  var renderCond38 = function() {
    var value158 = label.get();
    if(oldValue38 === value158) return;
    oldValue38 = value158;
    var subs__ = condSubs38;
    subs__.unsubscribe();
    node278.empty();
    if(value158) {
      
      var node279 = $("<span>");
      node279.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref271 = label;
      node279.text(""+ref271.get());
      var ignore45 = false;
      subs__.addSub(ref271.addEventListener('change', function(_, ref, val) {
        if(ignore45) return;
        node279.text(""+val);
      }));
      subs__.addSub(ref271.rebind());
      
      
      node278.append(node279);
      
      var node281 = $("<span>");
      node281.attr('style', "float: left");
      
      
      var node282 = $("<input>");
      node282.attr('type', "password");
      
      var ref268 = style;
      if(ref268.get() !== null) {
        node282.attr('class', ref268.get());
        subs__.addSub(ref268.addEventListener('change', function(_, ref, val) {
          node282.attr('class', val);
        }));
        
      }
      subs__.addSub(ref268.rebind());
      
      var ref269 = placeholder;
      if(ref269.get() !== null) {
        node282.attr('placeholder', ref269.get());
        subs__.addSub(ref269.addEventListener('change', function(_, ref, val) {
          node282.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref269.rebind());
      
      var ref270 = s;
      node282.val(""+ref270.get());
      var ignore44 = false;
      subs__.addSub(ref270.addEventListener('change', function(_, ref, val) {
        if(ignore44) return;
        node282.val(""+val);
      }));
      subs__.addSub(ref270.rebind());
      
      subs__.addSub(mobl.domBind(node282, 'keyup change', function() {
        ignore44 = true;
        s.set(mobl.stringTomobl__String(node282.val()));
        ignore44 = false;
      }));
      
      
      var val111 = onchange.get();
      if(val111 !== null) {
        subs__.addSub(mobl.domBind(node282, 'change', val111));
      }
      
      var val112 = onkeyup.get();
      if(val112 !== null) {
        subs__.addSub(mobl.domBind(node282, 'keyup', val112));
      }
      
      var val113 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val113 !== null) {
        subs__.addSub(mobl.domBind(node282, 'blur', val113));
      }
      
      node281.append(node282);
      node278.append(node281);
      
      
      
      
    } else {
      
      var node283 = $("<input>");
      node283.attr('type', "password");
      
      var ref272 = style;
      if(ref272.get() !== null) {
        node283.attr('class', ref272.get());
        subs__.addSub(ref272.addEventListener('change', function(_, ref, val) {
          node283.attr('class', val);
        }));
        
      }
      subs__.addSub(ref272.rebind());
      
      var ref273 = placeholder;
      if(ref273.get() !== null) {
        node283.attr('placeholder', ref273.get());
        subs__.addSub(ref273.addEventListener('change', function(_, ref, val) {
          node283.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref273.rebind());
      
      var ref274 = s;
      node283.val(""+ref274.get());
      var ignore46 = false;
      subs__.addSub(ref274.addEventListener('change', function(_, ref, val) {
        if(ignore46) return;
        node283.val(""+val);
      }));
      subs__.addSub(ref274.rebind());
      
      subs__.addSub(mobl.domBind(node283, 'keyup change', function() {
        ignore46 = true;
        s.set(mobl.stringTomobl__String(node283.val()));
        ignore46 = false;
      }));
      
      
      var val114 = onchange.get();
      if(val114 !== null) {
        subs__.addSub(mobl.domBind(node283, 'change', val114));
      }
      
      var val115 = onkeyup.get();
      if(val115 !== null) {
        subs__.addSub(mobl.domBind(node283, 'keyup', val115));
      }
      
      var val116 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val116 !== null) {
        subs__.addSub(mobl.domBind(node283, 'blur', val116));
      }
      
      node278.append(node283);
      
      
    }
  };
  renderCond38();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond38();
  }));
  
  callback(root2264); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root2265 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref279 = style;
  if(ref279.get() !== null) {
    sel.attr('class', ref279.get());
    subs__.addSub(ref279.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref279.rebind());
  
  var val117 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after43(result__) {
                    var tmp579 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after43);if(result__ !== undefined) after43(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val117 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val117));
  }
  
  
  var node284 = mobl.loadingSpan();
  sel.append(node284);
  var list1519;
  var listSubs137 = new mobl.CompSubscription();
  subs__.addSub(listSubs137);
  var renderList137 = function() {
    var subs__ = listSubs137;
    list1519 = options.get();
    list1519.list(function(results221) {
      node284.empty();
      for(var i3930 = 0; i3930 < results221.length; i3930++) {
        (function() {
          var iternode137 = $("<span>");
          node284.append(iternode137);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results221), i3930), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results221), i3930), "_2");
          
          var node285 = $("<option>");
          
          var ref275 = optionDescription;
          node285.text(""+ref275.get());
          var ignore47 = false;
          subs__.addSub(ref275.addEventListener('change', function(_, ref, val) {
            if(ignore47) return;
            node285.text(""+val);
          }));
          subs__.addSub(ref275.rebind());
          
          
          var ref276 = optionStyle;
          if(ref276.get() !== null) {
            node285.attr('class', ref276.get());
            subs__.addSub(ref276.addEventListener('change', function(_, ref, val) {
              node285.attr('class', val);
            }));
            
          }
          subs__.addSub(ref276.rebind());
          
          var ref277 = optionValue;
          if(ref277.get() !== null) {
            node285.attr('value', ref277.get());
            subs__.addSub(ref277.addEventListener('change', function(_, ref, val) {
              node285.attr('value', val);
            }));
            
          }
          subs__.addSub(ref277.rebind());
          
          var ref278 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref278.get() !== null) {
            node285.attr('selected', ref278.get());
            subs__.addSub(ref278.addEventListener('change', function(_, ref, val) {
              node285.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node285.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node285.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref278.rebind());
          
          iternode137.append(node285);
          
          var oldNodes = iternode137;
          iternode137 = iternode137.contents();
          oldNodes.replaceWith(iternode137);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list1519.addEventListener('change', function() { listSubs137.unsubscribe(); renderList137(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs137.unsubscribe(); renderList137(true); }));
    });
  };
  renderList137();
  
  root2265.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root2265); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, activeTab, elements, callback) {
  var root2266 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = activeTab.get() == null;
  if(result__) {
    var result__ = tabs.get().get(0)._1;
    activeTab.set(result__);
    
    var s = mobl.ref("");
    var nodes1984 = $("<span>");
    root2266.append(nodes1984);
    subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root2267 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node286 = mobl.loadingSpan();
      root2267.append(node286);
      var list1520;
      var listSubs138 = new mobl.CompSubscription();
      subs__.addSub(listSubs138);
      var renderList138 = function() {
        var subs__ = listSubs138;
        list1520 = tabs.get();
        list1520.list(function(results222) {
          node286.empty();
          for(var i3931 = 0; i3931 < results222.length; i3931++) {
            (function() {
              var iternode138 = $("<span>");
              node286.append(iternode138);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results222), i3931), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results222), i3931), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results222), i3931), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
              var tmp544 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp544.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp544.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                tmp544.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                tmp544.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              
              var result__ = function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = tabName.get();
                               activeTab.set(result__);
                               if(callback && callback.apply) callback(); return;
                             };
              var tmp543 = mobl.ref(result__);
              
              var nodes1985 = $("<span>");
              iternode138.append(nodes1985);
              subs__.addSub((mobl.span)(tmp544, mobl.ref(null), tmp543, mobl.ref(null), function(_, callback) {
                var root2268 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes1986 = $("<span>");
                root2268.append(nodes1986);
                subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                  var root2269 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root2269); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1986;
                  nodes1986 = node.contents();
                  oldNodes.replaceWith(nodes1986);
                }));
                callback(root2268); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes1985;
                nodes1985 = node.contents();
                oldNodes.replaceWith(nodes1985);
              }));
              
              var oldNodes = iternode138;
              iternode138 = iternode138.contents();
              oldNodes.replaceWith(iternode138);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list1520.addEventListener('change', function() { listSubs138.unsubscribe(); renderList138(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs138.unsubscribe(); renderList138(true); }));
        });
      };
      renderList138();
      
      callback(root2267); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1984;
      nodes1984 = node.contents();
      oldNodes.replaceWith(nodes1984);
    }));
    
    var node287 = mobl.loadingSpan();
    root2266.append(node287);
    var list1521;
    var listSubs139 = new mobl.CompSubscription();
    subs__.addSub(listSubs139);
    var renderList139 = function() {
      var subs__ = listSubs139;
      list1521 = tabs.get();
      list1521.list(function(results223) {
        node287.empty();
        for(var i3932 = 0; i3932 < results223.length; i3932++) {
          (function() {
            var iternode139 = $("<span>");
            node287.append(iternode139);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results223), i3932), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results223), i3932), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results223), i3932), "_3");
            var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
            var tmp545 = mobl.ref(result__);
            subs__.addSub(activeTab.addEventListener('change', function() {
              tmp545.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp545.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
              tmp545.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
              tmp545.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            
            var nodes1987 = $("<span>");
            iternode139.append(nodes1987);
            subs__.addSub((mobl.block)(tmp545, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root2270 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes1988 = $("<span>");
              root2270.append(nodes1988);
              subs__.addSub((mobl.screenContext)(function(_, callback) {
                var root2271 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes1989 = $("<span>");
                root2271.append(nodes1989);
                subs__.addSub(tabControl.addEventListener('change', function() {
                  renderControl68();
                }));
                
                function renderControl68() {
                  subs__.addSub((tabControl.get())(function(elements, callback) {
                    var root2272 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root2272); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes1989;
                    nodes1989 = node.contents();
                    oldNodes.replaceWith(nodes1989);
                  }));
                }
                renderControl68();
                callback(root2271); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes1988;
                nodes1988 = node.contents();
                oldNodes.replaceWith(nodes1988);
              }));
              callback(root2270); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes1987;
              nodes1987 = node.contents();
              oldNodes.replaceWith(nodes1987);
            }));
            
            var oldNodes = iternode139;
            iternode139 = iternode139.contents();
            oldNodes.replaceWith(iternode139);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list1521.addEventListener('change', function() { listSubs139.unsubscribe(); renderList139(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs139.unsubscribe(); renderList139(true); }));
      });
    };
    renderList139();
    
    callback(root2266); return subs__;
    
    
  } else {
    {
      
      var s = mobl.ref("");
      var nodes1984 = $("<span>");
      root2266.append(nodes1984);
      subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2267 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node286 = mobl.loadingSpan();
        root2267.append(node286);
        var list1520;
        var listSubs138 = new mobl.CompSubscription();
        subs__.addSub(listSubs138);
        var renderList138 = function() {
          var subs__ = listSubs138;
          list1520 = tabs.get();
          list1520.list(function(results222) {
            node286.empty();
            for(var i3931 = 0; i3931 < results222.length; i3931++) {
              (function() {
                var iternode138 = $("<span>");
                node286.append(iternode138);
                var tabName;var tabIcon;var tabControl;
                tabName = mobl.ref(mobl.ref(mobl.ref(results222), i3931), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results222), i3931), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results222), i3931), "_3");
                var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
                var tmp544 = mobl.ref(result__);
                subs__.addSub(activeTab.addEventListener('change', function() {
                  tmp544.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(tabName.addEventListener('change', function() {
                  tmp544.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                  tmp544.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                  tmp544.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTab.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp543 = mobl.ref(result__);
                
                var nodes1985 = $("<span>");
                iternode138.append(nodes1985);
                subs__.addSub((mobl.span)(tmp544, mobl.ref(null), tmp543, mobl.ref(null), function(_, callback) {
                  var root2268 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes1986 = $("<span>");
                  root2268.append(nodes1986);
                  subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                    var root2269 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root2269); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes1986;
                    nodes1986 = node.contents();
                    oldNodes.replaceWith(nodes1986);
                  }));
                  callback(root2268); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1985;
                  nodes1985 = node.contents();
                  oldNodes.replaceWith(nodes1985);
                }));
                
                var oldNodes = iternode138;
                iternode138 = iternode138.contents();
                oldNodes.replaceWith(iternode138);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list1520.addEventListener('change', function() { listSubs138.unsubscribe(); renderList138(true); }));
            subs__.addSub(tabs.addEventListener('change', function() { listSubs138.unsubscribe(); renderList138(true); }));
          });
        };
        renderList138();
        
        callback(root2267); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1984;
        nodes1984 = node.contents();
        oldNodes.replaceWith(nodes1984);
      }));
      
      var node287 = mobl.loadingSpan();
      root2266.append(node287);
      var list1521;
      var listSubs139 = new mobl.CompSubscription();
      subs__.addSub(listSubs139);
      var renderList139 = function() {
        var subs__ = listSubs139;
        list1521 = tabs.get();
        list1521.list(function(results223) {
          node287.empty();
          for(var i3932 = 0; i3932 < results223.length; i3932++) {
            (function() {
              var iternode139 = $("<span>");
              node287.append(iternode139);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results223), i3932), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results223), i3932), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results223), i3932), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
              var tmp545 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp545.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp545.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
                tmp545.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
                tmp545.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              
              var nodes1987 = $("<span>");
              iternode139.append(nodes1987);
              subs__.addSub((mobl.block)(tmp545, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root2270 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes1988 = $("<span>");
                root2270.append(nodes1988);
                subs__.addSub((mobl.screenContext)(function(_, callback) {
                  var root2271 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes1989 = $("<span>");
                  root2271.append(nodes1989);
                  subs__.addSub(tabControl.addEventListener('change', function() {
                    renderControl68();
                  }));
                  
                  function renderControl68() {
                    subs__.addSub((tabControl.get())(function(elements, callback) {
                      var root2272 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root2272); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes1989;
                      nodes1989 = node.contents();
                      oldNodes.replaceWith(nodes1989);
                    }));
                  }
                  renderControl68();
                  callback(root2271); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1988;
                  nodes1988 = node.contents();
                  oldNodes.replaceWith(nodes1988);
                }));
                callback(root2270); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes1987;
                nodes1987 = node.contents();
                oldNodes.replaceWith(nodes1987);
              }));
              
              var oldNodes = iternode139;
              iternode139 = iternode139.contents();
              oldNodes.replaceWith(iternode139);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list1521.addEventListener('change', function() { listSubs139.unsubscribe(); renderList139(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs139.unsubscribe(); renderList139(true); }));
        });
      };
      renderList139();
      
      callback(root2266); return subs__;
      
      
    }
  }
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root2273 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node288 = $("<div>");
  
  var ref283 = mobl.ref(ui.searchboxStyle);
  if(ref283.get() !== null) {
    node288.attr('class', ref283.get());
    subs__.addSub(ref283.addEventListener('change', function(_, ref, val) {
      node288.attr('class', val);
    }));
    
  }
  subs__.addSub(ref283.rebind());
  
  
  var node289 = $("<input>");
  node289.attr('type', "search");
  
  var ref280 = mobl.ref(ui.searchBoxInputStyle);
  if(ref280.get() !== null) {
    node289.attr('class', ref280.get());
    subs__.addSub(ref280.addEventListener('change', function(_, ref, val) {
      node289.attr('class', val);
    }));
    
  }
  subs__.addSub(ref280.rebind());
  
  var ref281 = placeholder;
  if(ref281.get() !== null) {
    node289.attr('placeholder', ref281.get());
    subs__.addSub(ref281.addEventListener('change', function(_, ref, val) {
      node289.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref281.rebind());
  
  var ref282 = s;
  node289.val(""+ref282.get());
  var ignore48 = false;
  subs__.addSub(ref282.addEventListener('change', function(_, ref, val) {
    if(ignore48) return;
    node289.val(""+val);
  }));
  subs__.addSub(ref282.rebind());
  
  subs__.addSub(mobl.domBind(node289, 'keyup change', function() {
    ignore48 = true;
    s.set(mobl.stringTomobl__String(node289.val()));
    ignore48 = false;
  }));
  
  
  var val118 = onsearch.get();
  if(val118 !== null) {
    subs__.addSub(mobl.domBind(node289, 'change', val118));
  }
  
  var val119 = onkeyup.get();
  if(val119 !== null) {
    subs__.addSub(mobl.domBind(node289, 'keyup', val119));
  }
  node289.attr('autocorrect', false);
  node289.attr('autocapitalize', false);
  node289.attr('autocomplete', false);
  
  node288.append(node289);
  root2273.append(node288);
  callback(root2273); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root2274 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref284 = mobl.ref(ui.contextMenuStyle);
  if(ref284.get() !== null) {
    menu.attr('class', ref284.get());
    subs__.addSub(ref284.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref284.rebind());
  
  var nodes1990 = $("<span>");
  menu.append(nodes1990);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl69();
  }));
  
  function renderControl69() {
    subs__.addSub((elements)(function(elements, callback) {
      var root2275 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2275); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1990;
      nodes1990 = node.contents();
      oldNodes.replaceWith(nodes1990);
    }));
  }
  renderControl69();
  root2274.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val120 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp582 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val120 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val120));
  }
  
  root2274.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root2274); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root2276 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp565 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp565.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node290 = $("<span>");
  root2276.append(node290);
  var condSubs39 = new mobl.CompSubscription();
  subs__.addSub(condSubs39);
  var oldValue39;
  var renderCond39 = function() {
    var value159 = tmp565.get();
    if(oldValue39 === value159) return;
    oldValue39 = value159;
    var subs__ = condSubs39;
    subs__.unsubscribe();
    node290.empty();
    if(value159) {
      items.get().one(function(result__) {
        var tmp583 = result__;
        var current = mobl.ref(result__);
        
        var node291 = $("<div>");
        node291.attr('width', "100%");
        
        
        var node292 = $("<div>");
        node292.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes1993 = $("<span>");
        node292.append(nodes1993);
        subs__.addSub((ui.group)(function(_, callback) {
          var root2279 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node295 = mobl.loadingSpan();
          root2279.append(node295);
          var list1522;
          var listSubs140 = new mobl.CompSubscription();
          subs__.addSub(listSubs140);
          var renderList140 = function() {
            var subs__ = listSubs140;
            list1522 = items.get();
            list1522.list(function(results224) {
              node295.empty();
              for(var i3933 = 0; i3933 < results224.length; i3933++) {
                (function() {
                  var iternode140 = $("<span>");
                  node295.append(iternode140);
                  var it;
                  it = mobl.ref(mobl.ref(results224), i3933);
                  var result__ = it.get() == current.get();
                  var tmp551 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp551.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp551.set(it.get() == current.get());
                  }));
                  
                  
                  var node296 = $("<span>");
                  iternode140.append(node296);
                  var condSubs41 = new mobl.CompSubscription();
                  subs__.addSub(condSubs41);
                  var oldValue41;
                  var renderCond41 = function() {
                    var value161 = tmp551.get();
                    if(oldValue41 === value161) return;
                    oldValue41 = value161;
                    var subs__ = condSubs41;
                    subs__.unsubscribe();
                    node296.empty();
                    if(value161) {
                      var nodes1994 = $("<span>");
                      node296.append(nodes1994);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root2280 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes1995 = $("<span>");
                        root2280.append(nodes1995);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl71();
                        }));
                        
                        function renderControl71() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root2281 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root2281); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes1995;
                            nodes1995 = node.contents();
                            oldNodes.replaceWith(nodes1995);
                          }));
                        }
                        renderControl71();
                        callback(root2280); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes1994;
                        nodes1994 = node.contents();
                        oldNodes.replaceWith(nodes1994);
                      }));
                      
                      
                    } else {
                      var result__ = function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = it.get();
                                       current.set(result__);
                                       var result__ = ui.scrollUp();
                                       if(callback && callback.apply) callback(); return;
                                     };
                      var tmp550 = mobl.ref(result__);
                      
                      var nodes1996 = $("<span>");
                      node296.append(nodes1996);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp550, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root2282 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes1997 = $("<span>");
                        root2282.append(nodes1997);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl72();
                        }));
                        
                        function renderControl72() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root2283 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root2283); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes1997;
                            nodes1997 = node.contents();
                            oldNodes.replaceWith(nodes1997);
                          }));
                        }
                        renderControl72();
                        callback(root2282); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes1996;
                        nodes1996 = node.contents();
                        oldNodes.replaceWith(nodes1996);
                      }));
                      
                      
                    }
                  };
                  renderCond41();
                  subs__.addSub(tmp551.addEventListener('change', function() {
                    renderCond41();
                  }));
                  
                  
                  var oldNodes = iternode140;
                  iternode140 = iternode140.contents();
                  oldNodes.replaceWith(iternode140);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list1522.addEventListener('change', function() { listSubs140.unsubscribe(); renderList140(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs140.unsubscribe(); renderList140(true); }));
            });
          };
          renderList140();
          
          callback(root2279); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes1993;
          nodes1993 = node.contents();
          oldNodes.replaceWith(nodes1993);
        }));
        node291.append(node292);
        
        var node293 = $("<div>");
        node293.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node294 = $("<span>");
        node293.append(node294);
        var condSubs40 = new mobl.CompSubscription();
        subs__.addSub(condSubs40);
        var oldValue40;
        var renderCond40 = function() {
          var value160 = current.get();
          if(oldValue40 === value160) return;
          oldValue40 = value160;
          var subs__ = condSubs40;
          subs__.unsubscribe();
          node294.empty();
          if(value160) {
            var nodes1991 = $("<span>");
            node294.append(nodes1991);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl70();
            }));
            
            function renderControl70() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root2277 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root2277); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes1991;
                nodes1991 = node.contents();
                oldNodes.replaceWith(nodes1991);
              }));
            }
            renderControl70();
            
            
          } else {
            var result__ = mobl._("Select an item on the left", []);
            var tmp552 = mobl.ref(result__);
            
            var nodes1992 = $("<span>");
            node294.append(nodes1992);
            subs__.addSub((mobl.label)(tmp552, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root2278 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root2278); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1992;
              nodes1992 = node.contents();
              oldNodes.replaceWith(nodes1992);
            }));
            
            
          }
        };
        renderCond40();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond40();
        }));
        
        node291.append(node293);
        node290.append(node291);
        
        
        
        
        
        
      });
    } else {
      var nodes1998 = $("<span>");
      node290.append(nodes1998);
      subs__.addSub((ui.group)(function(_, callback) {
        var root2284 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node297 = mobl.loadingSpan();
        root2284.append(node297);
        var list1523;
        var listSubs141 = new mobl.CompSubscription();
        subs__.addSub(listSubs141);
        var renderList141 = function() {
          var subs__ = listSubs141;
          list1523 = items.get();
          list1523.list(function(results225) {
            node297.empty();
            for(var i3934 = 0; i3934 < results225.length; i3934++) {
              (function() {
                var iternode141 = $("<span>");
                node297.append(iternode141);
                var it;
                it = mobl.ref(mobl.ref(results225), i3934);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp584 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp546 = mobl.ref(result__);
                
                var nodes1999 = $("<span>");
                iternode141.append(nodes1999);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp546, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root2285 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes2000 = $("<span>");
                  root2285.append(nodes2000);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl73();
                  }));
                  
                  function renderControl73() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root2286 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root2286); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes2000;
                      nodes2000 = node.contents();
                      oldNodes.replaceWith(nodes2000);
                    }));
                  }
                  renderControl73();
                  callback(root2285); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1999;
                  nodes1999 = node.contents();
                  oldNodes.replaceWith(nodes1999);
                }));
                
                var oldNodes = iternode141;
                iternode141 = iternode141.contents();
                oldNodes.replaceWith(iternode141);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list1523.addEventListener('change', function() { listSubs141.unsubscribe(); renderList141(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs141.unsubscribe(); renderList141(true); }));
          });
        };
        renderList141();
        
        callback(root2284); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1998;
        nodes1998 = node.contents();
        oldNodes.replaceWith(nodes1998);
      }));
      
      
    }
  };
  renderCond39();
  subs__.addSub(tmp565.addEventListener('change', function() {
    renderCond39();
  }));
  
  callback(root2276); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root2287 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp549 = mobl.ref(result__);
  
  var nodes2001 = $("<span>");
  root2287.append(nodes2001);
  subs__.addSub((ui.header)(tmp549, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2288 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp548 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp547 = mobl.ref(result__);
    
    var nodes2002 = $("<span>");
    root2288.append(nodes2002);
    subs__.addSub((ui.backButton)(tmp547, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp548, function(_, callback) {
      var root2289 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2289); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2002;
      nodes2002 = node.contents();
      oldNodes.replaceWith(nodes2002);
    }));
    callback(root2288); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2001;
    nodes2001 = node.contents();
    oldNodes.replaceWith(nodes2001);
  }));
  var nodes2003 = $("<span>");
  root2287.append(nodes2003);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl74();
  }));
  
  function renderControl74() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root2290 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2290); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2003;
      nodes2003 = node.contents();
      oldNodes.replaceWith(nodes2003);
    }));
  }
  renderControl74();
  callback(root2287); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root2291 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes2004 = $("<span>");
  root2291.append(nodes2004);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2292 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node298 = mobl.loadingSpan();
    root2292.append(node298);
    var list1524;
    var listSubs142 = new mobl.CompSubscription();
    subs__.addSub(listSubs142);
    var renderList142 = function() {
      var subs__ = listSubs142;
      list1524 = coll.get();
      list1524.list(function(results226) {
        node298.empty();
        for(var i3935 = 0; i3935 < results226.length; i3935++) {
          (function() {
            var iternode142 = $("<span>");
            node298.append(iternode142);
            var it;
            it = mobl.ref(mobl.ref(results226), i3935);
            var result__ = it.get() == selected.get();
            var tmp554 = mobl.ref(result__);
            subs__.addSub(it.addEventListener('change', function() {
              tmp554.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp554.set(it.get() == selected.get());
            }));
            
            
            var node299 = $("<span>");
            iternode142.append(node299);
            var condSubs42 = new mobl.CompSubscription();
            subs__.addSub(condSubs42);
            var oldValue42;
            var renderCond42 = function() {
              var value162 = tmp554.get();
              if(oldValue42 === value162) return;
              oldValue42 = value162;
              var subs__ = condSubs42;
              subs__.unsubscribe();
              node299.empty();
              if(value162) {
                var nodes2005 = $("<span>");
                node299.append(nodes2005);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root2293 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes2006 = $("<span>");
                  root2293.append(nodes2006);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl75();
                  }));
                  
                  function renderControl75() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root2294 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root2294); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes2006;
                      nodes2006 = node.contents();
                      oldNodes.replaceWith(nodes2006);
                    }));
                  }
                  renderControl75();
                  callback(root2293); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes2005;
                  nodes2005 = node.contents();
                  oldNodes.replaceWith(nodes2005);
                }));
                
                
              } else {
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = it.get();
                                 selected.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp553 = mobl.ref(result__);
                
                var nodes2007 = $("<span>");
                node299.append(nodes2007);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp553, mobl.ref(null), mobl.ref(true), function(_, callback) {
                  var root2295 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes2008 = $("<span>");
                  root2295.append(nodes2008);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl76();
                  }));
                  
                  function renderControl76() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root2296 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root2296); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes2008;
                      nodes2008 = node.contents();
                      oldNodes.replaceWith(nodes2008);
                    }));
                  }
                  renderControl76();
                  callback(root2295); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes2007;
                  nodes2007 = node.contents();
                  oldNodes.replaceWith(nodes2007);
                }));
                
                
              }
            };
            renderCond42();
            subs__.addSub(tmp554.addEventListener('change', function() {
              renderCond42();
            }));
            
            
            var oldNodes = iternode142;
            iternode142 = iternode142.contents();
            oldNodes.replaceWith(iternode142);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list1524.addEventListener('change', function() { listSubs142.unsubscribe(); renderList142(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs142.unsubscribe(); renderList142(true); }));
      });
    };
    renderList142();
    
    callback(root2292); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2004;
    nodes2004 = node.contents();
    oldNodes.replaceWith(nodes2004);
  }));
  callback(root2291); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, moreStyle, elements, callback) {
  var root2297 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var tmp585 = result__;
    var total = mobl.ref(result__);
    var result__ = coll.get().limit(n.get());
    var tmp555 = mobl.ref(result__);
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp555.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp555.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp555.set(coll.get().limit(n.get()));
    }));
    
    
    var node300 = mobl.loadingSpan();
    root2297.append(node300);
    var list1525;
    var listSubs143 = new mobl.CompSubscription();
    subs__.addSub(listSubs143);
    var renderList143 = function() {
      var subs__ = listSubs143;
      list1525 = tmp555.get();
      list1525.list(function(results227) {
        node300.empty();
        for(var i3936 = 0; i3936 < results227.length; i3936++) {
          (function() {
            var iternode143 = $("<span>");
            node300.append(iternode143);
            var it;
            it = mobl.ref(mobl.ref(results227), i3936);
            var nodes2009 = $("<span>");
            iternode143.append(nodes2009);
            subs__.addSub(listCtrl.addEventListener('change', function() {
              renderControl77();
            }));
            
            function renderControl77() {
              subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                var root2298 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root2298); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes2009;
                nodes2009 = node.contents();
                oldNodes.replaceWith(nodes2009);
              }));
            }
            renderControl77();
            
            var oldNodes = iternode143;
            iternode143 = iternode143.contents();
            oldNodes.replaceWith(iternode143);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list1525.addEventListener('change', function() { listSubs143.unsubscribe(); renderList143(true); }));
        subs__.addSub(tmp555.addEventListener('change', function() { listSubs143.unsubscribe(); renderList143(true); }));
      });
    };
    renderList143();
    
    var result__ = n.get() < total.get();
    var tmp557 = mobl.ref(result__);
    subs__.addSub(n.addEventListener('change', function() {
      tmp557.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp557.set(n.get() < total.get());
    }));
    
    
    var node301 = $("<span>");
    root2297.append(node301);
    var condSubs43 = new mobl.CompSubscription();
    subs__.addSub(condSubs43);
    var oldValue43;
    var renderCond43 = function() {
      var value163 = tmp557.get();
      if(oldValue43 === value163) return;
      oldValue43 = value163;
      var subs__ = condSubs43;
      subs__.unsubscribe();
      node301.empty();
      if(value163) {
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = n.get() + step.get();
                         n.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp556 = mobl.ref(result__);
        
        var nodes2010 = $("<span>");
        node301.append(nodes2010);
        subs__.addSub((mobl.block)(moreStyle, mobl.ref(null), tmp556, mobl.ref(null), function(_, callback) {
          var root2299 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes2011 = $("<span>");
          root2299.append(nodes2011);
          subs__.addSub((mobl.label)(moreLabel, mobl.ref(null), mobl.ref(null), function(_, callback) {
            var root2300 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root2300); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes2011;
            nodes2011 = node.contents();
            oldNodes.replaceWith(nodes2011);
          }));
          callback(root2299); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes2010;
          nodes2010 = node.contents();
          oldNodes.replaceWith(nodes2010);
        }));
        
        
      } else {
        
      }
    };
    renderCond43();
    subs__.addSub(tmp557.addEventListener('change', function() {
      renderCond43();
    }));
    
    callback(root2297); return subs__;
    
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root2301 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes2012 = $("<span>");
  root2301.append(nodes2012);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2302 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node302 = mobl.loadingSpan();
    root2302.append(node302);
    var list1526;
    var listSubs144 = new mobl.CompSubscription();
    subs__.addSub(listSubs144);
    var renderList144 = function() {
      var subs__ = listSubs144;
      list1526 = items.get();
      list1526.list(function(results228) {
        node302.empty();
        for(var i3937 = 0; i3937 < results228.length; i3937++) {
          (function() {
            var iternode144 = $("<span>");
            node302.append(iternode144);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results228), i3937), "_1");it = mobl.ref(mobl.ref(mobl.ref(results228), i3937), "_2");
            var nodes2013 = $("<span>");
            iternode144.append(nodes2013);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
              var root2303 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes2014 = $("<span>");
              root2303.append(nodes2014);
              subs__.addSub((ui.checkBox)(checked, it, mobl.ref(null), function(_, callback) {
                var root2304 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root2304); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes2014;
                nodes2014 = node.contents();
                oldNodes.replaceWith(nodes2014);
              }));
              callback(root2303); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes2013;
              nodes2013 = node.contents();
              oldNodes.replaceWith(nodes2013);
            }));
            
            var oldNodes = iternode144;
            iternode144 = iternode144.contents();
            oldNodes.replaceWith(iternode144);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list1526.addEventListener('change', function() { listSubs144.unsubscribe(); renderList144(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs144.unsubscribe(); renderList144(true); }));
      });
    };
    renderList144();
    
    callback(root2302); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2012;
    nodes2012 = node.contents();
    oldNodes.replaceWith(nodes2012);
  }));
  callback(root2301); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root2305 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll454) {
    coll454 = coll454.reverse();
    function processOne7() {
      var it;
      it = coll454.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll454.length > 0) processOne7(); else rest7();
      
    }
    function rest7() {
      var nodes2015 = $("<span>");
      root2305.append(nodes2015);
      subs__.addSub((ui.header)(title, mobl.ref(false), mobl.ref(null), function(_, callback) {
        var root2306 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = null;
                         if(callback && callback.apply) callback(result__);
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp558 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp559 = mobl.ref(result__);
        
        var nodes2016 = $("<span>");
        root2306.append(nodes2016);
        subs__.addSub((ui.backButton)(tmp559, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp558, function(_, callback) {
          var root2307 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2307); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2016;
          nodes2016 = node.contents();
          oldNodes.replaceWith(nodes2016);
        }));
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = [];
                         var selected = result__;
                         var result__ = items.get();
                         items.get().list(function(coll453) {
                           coll453 = coll453.reverse();
                           function processOne6() {
                             var checked;var it;
                             var tmp587 = coll453.pop();
                             checked = tmp587._1;it = tmp587._2;
                             var result__ = checked;
                             if(result__) {
                               var result__ = selected.push(it);
                               
                               if(coll453.length > 0) processOne6(); else rest6();
                               
                             } else {
                               {
                                 
                                 if(coll453.length > 0) processOne6(); else rest6();
                                 
                               }
                             }
                           }
                           function rest6() {
                             var result__ = selected;
                             if(screenCallback) screenCallback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll453.length > 0) processOne6(); else rest6();
                         });
                         
                       };
        var tmp560 = mobl.ref(result__);
        
        var nodes2017 = $("<span>");
        root2306.append(nodes2017);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp560, function(_, callback) {
          var root2308 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2308); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2017;
          nodes2017 = node.contents();
          oldNodes.replaceWith(nodes2017);
        }));
        callback(root2306); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes2015;
        nodes2015 = node.contents();
        oldNodes.replaceWith(nodes2015);
      }));
      var nodes2018 = $("<span>");
      root2305.append(nodes2018);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root2309 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2309); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2018;
        nodes2018 = node.contents();
        oldNodes.replaceWith(nodes2018);
      }));
      callback(root2305); return subs__;
      
      
    }
    if(coll454.length > 0) processOne7(); else rest7();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root2310 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  var nodes2019 = $("<span>");
  root2310.append(nodes2019);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root2311 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2311); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes2019;
    nodes2019 = node.contents();
    oldNodes.replaceWith(nodes2019);
  }));
  var result__ = Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get());
  var tmp561 = mobl.ref(result__);
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp561.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp561.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp561.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp561.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp561.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes2020 = $("<span>");
  root2310.append(nodes2020);
  subs__.addSub((ui.masterDetail)(tmp561, masterItem, detailItem, function(_, callback) {
    var root2312 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2312); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes2020;
    nodes2020 = node.contents();
    oldNodes.replaceWith(nodes2020);
  }));
  callback(root2310); return subs__;
  
  
  return subs__;
};
ui.progressStyle = 'ui__progressStyle';
ui.startLoading = function(loadingMessage, style) {
   var __this = this;
  var loading = mobl.$("<div id='progress' class='" + style + "'>" + loadingMessage + "</div>");
  
  mobl.$("body").prepend(loading);
};

ui.endLoading = function() {
   var __this = this;
  mobl.$("#progress").remove();
};

(function(__ns) {
__ns.floatBox = function(top, right, bottom, left, elements, callback) {
                  var root928 = $("<span>");
                  var node280 = $("<div style=\"position: absolute;\">");
                  var nodes681 = $("<span>");
                  node280.append(nodes681);
                  mobl.ref(elements).addEventListener('change', function() {
                                                                  renderControl102();
                                                                });
                  function renderControl102 ( ) {
                    (elements)(function(elements, callback) {
                                 var root929 = $("<span>");
                                 callback(root929);
                                 return;
                               }, function(node) {
                                    var oldNodes = nodes681;
                                    nodes681 = node.contents();
                                    oldNodes.replaceWith(nodes681);
                                  });
                  }
                  renderControl102();
                  root928.append(node280);
                  var box = node280;
                  if(top.get() !== null)
                  box.css("top", "" + top.get() + "px");
                  if(right.get() !== null)
                  box.css("right", "" + right.get() + "px");
                  if(bottom.get() !== null)
                  box.css("top", "" + ( window.pageYOffset + window.innerHeight - box.outerHeight() - bottom.get() ) + "px");
                  if(left.get() !== null)
                  box.css("left", "" + left.get() + "px");
                  function updateLocation ( ) {
                    if(top.get() !== null)
                    {
                      box.css("top", "" + ( window.pageYOffset + top.get() ) + "px");
                    }
                    if(bottom.get() !== null)
                    {
                      box.css("top", "" + ( window.pageYOffset + window.innerHeight - box.outerHeight() - bottom.get() ) + "px");
                    }
                  }
                  $(window).bind('scroll', updateLocation);
                  $(window).bind('resize', updateLocation);
                  callback(root928);
                  return;
                };
}(ui));ui.accordionStyle = 'ui__accordionStyle';
ui.activeSectionHeaderStyle = 'ui__activeSectionHeaderStyle';
ui.inActiveSectionHeaderStyle = 'ui__inActiveSectionHeaderStyle';
ui.activeSectionHeaderStyle = 'ui__activeSectionHeaderStyle';
ui.inActiveSectionHeaderStyle = 'ui__inActiveSectionHeaderStyle';
ui.inActiveSectionStyle = 'ui__inActiveSectionStyle';
ui.activeSectionStyle = 'ui__activeSectionStyle';

ui.accordion = function(sections, activeSection, elements, callback) {
  var root2313 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(activeSection.get() ? activeSection.get() : sections.get().get(0)._1);
  var nodes2021 = $("<span>");
  root2313.append(nodes2021);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root2314 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node303 = mobl.loadingSpan();
    root2314.append(node303);
    var list1527;
    var listSubs145 = new mobl.CompSubscription();
    subs__.addSub(listSubs145);
    var renderList145 = function() {
      var subs__ = listSubs145;
      list1527 = sections.get();
      list1527.list(function(results229) {
        node303.empty();
        for(var i3938 = 0; i3938 < results229.length; i3938++) {
          (function() {
            var iternode145 = $("<span>");
            node303.append(iternode145);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results229), i3938), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results229), i3938), "_2");
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle;
            var tmp563 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp563.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp563.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp563.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp563.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = sectionName.get();
                             activeSection.set(result__);
                             if(callback && callback.apply) callback(); return;
                           };
            var tmp562 = mobl.ref(result__);
            
            var nodes2022 = $("<span>");
            iternode145.append(nodes2022);
            subs__.addSub((mobl.span)(tmp563, mobl.ref(null), tmp562, mobl.ref(null), function(_, callback) {
              var root2315 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes2023 = $("<span>");
              root2315.append(nodes2023);
              subs__.addSub((mobl.label)(sectionName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root2316 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root2316); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes2023;
                nodes2023 = node.contents();
                oldNodes.replaceWith(nodes2023);
              }));
              callback(root2315); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes2022;
              nodes2022 = node.contents();
              oldNodes.replaceWith(nodes2022);
            }));
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle;
            var tmp564 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp564.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp564.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp564.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp564.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            var nodes2024 = $("<span>");
            iternode145.append(nodes2024);
            subs__.addSub((mobl.block)(tmp564, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root2317 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes2025 = $("<span>");
              root2317.append(nodes2025);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl78();
              }));
              
              function renderControl78() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root2318 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root2318); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes2025;
                  nodes2025 = node.contents();
                  oldNodes.replaceWith(nodes2025);
                }));
              }
              renderControl78();
              callback(root2317); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes2024;
              nodes2024 = node.contents();
              oldNodes.replaceWith(nodes2024);
            }));
            
            var oldNodes = iternode145;
            iternode145 = iternode145.contents();
            oldNodes.replaceWith(iternode145);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list1527.addEventListener('change', function() { listSubs145.unsubscribe(); renderList145(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs145.unsubscribe(); renderList145(true); }));
      });
    };
    renderList145();
    
    callback(root2314); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2021;
    nodes2021 = node.contents();
    oldNodes.replaceWith(nodes2021);
  }));
  callback(root2313); return subs__;
  
  return subs__;
};
ui.tableStyle = 'ui__tableStyle';
ui.tdStyle = 'ui__tdStyle';
ui.trStyle = 'ui__trStyle';
ui.trStyle = 'ui__trStyle';
ui.trStyle = 'ui__trStyle';
ui.tdStyle = 'ui__tdStyle';
ui.tdStyle = 'ui__tdStyle';
ui.tdStyle = 'ui__tdStyle';
ui.tdStyle = 'ui__tdStyle';
ui.tdStyle = 'ui__tdStyle';
ui.tdStyle = 'ui__tdStyle';
ui.tdStyle = 'ui__tdStyle';
ui.tdStyle = 'ui__tdStyle';

ui.table = function(style, elements, callback) {
  var root2319 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node304 = $("<table>");
  
  var ref285 = style;
  if(ref285.get() !== null) {
    node304.attr('class', ref285.get());
    subs__.addSub(ref285.addEventListener('change', function(_, ref, val) {
      node304.attr('class', val);
    }));
    
  }
  subs__.addSub(ref285.rebind());
  
  var nodes2026 = $("<span>");
  node304.append(nodes2026);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl79();
  }));
  
  function renderControl79() {
    subs__.addSub((elements)(function(elements, callback) {
      var root2320 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2320); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2026;
      nodes2026 = node.contents();
      oldNodes.replaceWith(nodes2026);
    }));
  }
  renderControl79();
  root2319.append(node304);
  callback(root2319); return subs__;
  
  
  return subs__;
};

ui.row = function(style, elements, callback) {
  var root2321 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node305 = $("<tr>");
  
  var ref286 = style;
  if(ref286.get() !== null) {
    node305.attr('class', ref286.get());
    subs__.addSub(ref286.addEventListener('change', function(_, ref, val) {
      node305.attr('class', val);
    }));
    
  }
  subs__.addSub(ref286.rebind());
  
  var nodes2027 = $("<span>");
  node305.append(nodes2027);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl80();
  }));
  
  function renderControl80() {
    subs__.addSub((elements)(function(elements, callback) {
      var root2322 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2322); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2027;
      nodes2027 = node.contents();
      oldNodes.replaceWith(nodes2027);
    }));
  }
  renderControl80();
  root2321.append(node305);
  callback(root2321); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, style, elements, callback) {
  var root2323 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node306 = $("<td>");
  
  var ref287 = width;
  if(ref287.get() !== null) {
    node306.attr('width', ref287.get());
    subs__.addSub(ref287.addEventListener('change', function(_, ref, val) {
      node306.attr('width', val);
    }));
    
  }
  subs__.addSub(ref287.rebind());
  
  var ref288 = style;
  if(ref288.get() !== null) {
    node306.attr('class', ref288.get());
    subs__.addSub(ref288.addEventListener('change', function(_, ref, val) {
      node306.attr('class', val);
    }));
    
  }
  subs__.addSub(ref288.rebind());
  
  var nodes2028 = $("<span>");
  node306.append(nodes2028);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl81();
  }));
  
  function renderControl81() {
    subs__.addSub((elements)(function(elements, callback) {
      var root2324 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2324); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2028;
      nodes2028 = node.contents();
      oldNodes.replaceWith(nodes2028);
    }));
  }
  renderControl81();
  root2323.append(node306);
  callback(root2323); return subs__;
  
  
  return subs__;
};

ui.col = function(width, style, elements, callback) {
  var root2325 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node307 = $("<td>");
  
  var ref289 = width;
  if(ref289.get() !== null) {
    node307.attr('width', ref289.get());
    subs__.addSub(ref289.addEventListener('change', function(_, ref, val) {
      node307.attr('width', val);
    }));
    
  }
  subs__.addSub(ref289.rebind());
  
  var ref290 = style;
  if(ref290.get() !== null) {
    node307.attr('class', ref290.get());
    subs__.addSub(ref290.addEventListener('change', function(_, ref, val) {
      node307.attr('class', val);
    }));
    
  }
  subs__.addSub(ref290.rebind());
  
  var nodes2029 = $("<span>");
  node307.append(nodes2029);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl82();
  }));
  
  function renderControl82() {
    subs__.addSub((elements)(function(elements, callback) {
      var root2326 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2326); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2029;
      nodes2029 = node.contents();
      oldNodes.replaceWith(nodes2029);
    }));
  }
  renderControl82();
  root2325.append(node307);
  callback(root2325); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, style, elements, callback) {
  var root2327 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node308 = $("<td>");
  
  var ref291 = width;
  if(ref291.get() !== null) {
    node308.attr('width', ref291.get());
    subs__.addSub(ref291.addEventListener('change', function(_, ref, val) {
      node308.attr('width', val);
    }));
    
  }
  subs__.addSub(ref291.rebind());
  
  var ref292 = style;
  if(ref292.get() !== null) {
    node308.attr('class', ref292.get());
    subs__.addSub(ref292.addEventListener('change', function(_, ref, val) {
      node308.attr('class', val);
    }));
    
  }
  subs__.addSub(ref292.rebind());
  
  
  var node309 = $("<strong>");
  
  var nodes2030 = $("<span>");
  node309.append(nodes2030);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl83();
  }));
  
  function renderControl83() {
    subs__.addSub((elements)(function(elements, callback) {
      var root2328 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2328); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2030;
      nodes2030 = node.contents();
      oldNodes.replaceWith(nodes2030);
    }));
  }
  renderControl83();
  node308.append(node309);
  root2327.append(node308);
  callback(root2327); return subs__;
  
  
  
  return subs__;
};
(function(__ns) {
setTimeout(function() {
             scrollTo(0, -1);
           }, 250);
__ns.scrollUp = function() {
                  scrollTo(0, 0);
                };
__ns.setupScrollers = function() {
                        setTimeout(function() {
                                     var allScrollers = $("div.scroller");
                                     for(var i = 0; i < allScrollers.length; i++)
                                     {
                                       var scroller = allScrollers.eq(i);
                                       if(!scroller.data("scroller"))
                                       {
                                         scroller.data("scroller", new TouchScroll(scroller[0],{
                                                                                                 elastic: true
                                                                                               }));
                                       }
                                     }
                                   }, 250);
                      };
}(ui));ui.loginTableStyle = 'ui__loginTableStyle';
ui.hotPicStyle = 'ui__hotPicStyle';
ui.defaultSpan = 'ui__defaultSpan';
ui.successSpan = 'ui__successSpan';
ui.warningSpan = 'ui__warningSpan';
ui.importantSpan = 'ui__importantSpan';
ui.infoSpan = 'ui__infoSpan';
ui.inverseSpan = 'ui__inverseSpan';
ui.carouselcaption = 'ui__carouselcaption';
ui.carouselinner = 'ui__carouselinner';
ui.whitelabel = 'ui__whitelabel';
