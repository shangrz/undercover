mobl.provides('mobl.ui.generic');
mobl.provides('mobl.ui.stylemixin');
mobl.provides('mobl.ui.generic');
mobl.provides('mobl');
mobl.provides('mobl.ui');
mobl.ui.generic.loadingStyle = 'mobl__ui__generic__loadingStyle';

mobl.ui.generic.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root10 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node6 = $("<span>");
  root10.append(node6);
  var condSubs0 = new mobl.CompSubscription();
  subs__.addSub(condSubs0);
  var oldValue0;
  var renderCond0 = function() {
    var value8 = value.get();
    if(oldValue0 === value8) return;
    oldValue0 = value8;
    var subs__ = condSubs0;
    subs__.unsubscribe();
    node6.empty();
    if(value8) {
      var nodes4 = $("<span>");
      node6.append(nodes4);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl4();
      }));
      
      function renderControl4() {
        subs__.addSub((elements)(function(elements, callback) {
          var root11 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root11); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes4;
          nodes4 = node.contents();
          oldNodes.replaceWith(nodes4);
        }));
      }
      renderControl4();
      
      
    } else {
      var nodes5 = $("<span>");
      node6.append(nodes5);
      subs__.addSub((mobl.block)(style, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root12 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes6 = $("<span>");
        root12.append(nodes6);
        subs__.addSub((mobl.label)(loadingMessage, mobl.ref(null), mobl.ref(null), function(_, callback) {
          var root13 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root13); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes6;
          nodes6 = node.contents();
          oldNodes.replaceWith(nodes6);
        }));
        var nodes7 = $("<span>");
        root12.append(nodes7);
        subs__.addSub((mobl.ui.generic.image)(mobl.ref("data:image/gif;base64,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"), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref("middle"), mobl.ref(null), function(_, callback) {
          var root14 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root14); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7;
          nodes7 = node.contents();
          oldNodes.replaceWith(nodes7);
        }));
        callback(root12); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes5;
        nodes5 = node.contents();
        oldNodes.replaceWith(nodes5);
      }));
      
      
    }
  };
  renderCond0();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond0();
  }));
  
  callback(root10); return subs__;
  
  return subs__;
};
mobl.ui.generic.headerStyle = 'mobl__ui__generic__headerStyle';
mobl.ui.generic.headerContainerStyle = 'mobl__ui__generic__headerContainerStyle';
mobl.ui.generic.headerTextStyle = 'mobl__ui__generic__headerTextStyle';

mobl.ui.generic.header = function(text, fixedPosition, onclick, elements, callback) {
  var root15 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node7 = $("<div>");
  
  var ref11 = mobl.ref(mobl.ui.generic.headerStyle);
  if(ref11.get() !== null) {
    node7.attr('class', ref11.get());
    subs__.addSub(ref11.addEventListener('change', function(_, ref, val) {
      node7.attr('class', val);
    }));
    
  }
  subs__.addSub(ref11.rebind());
  
  var val5 = onclick.get();
  if(val5 !== null) {
    subs__.addSub(mobl.domBind(node7, 'tap', val5));
  }
  
  var ref12 = mobl.ref(fixedPosition.get() ? "position:fixed;" : null);
  if(ref12.get() !== null) {
    node7.attr('style', ref12.get());
    subs__.addSub(ref12.addEventListener('change', function(_, ref, val) {
      node7.attr('style', val);
    }));
    subs__.addSub(fixedPosition.addEventListener('change', function() {
      node7.attr('style', fixedPosition.get() ? "position:fixed;" : null);
    }));
    
  }
  subs__.addSub(ref12.rebind());
  
  
  var node10 = $("<div>");
  
  var ref10 = mobl.ref(mobl.ui.generic.headerContainerStyle);
  if(ref10.get() !== null) {
    node10.attr('class', ref10.get());
    subs__.addSub(ref10.addEventListener('change', function(_, ref, val) {
      node10.attr('class', val);
    }));
    
  }
  subs__.addSub(ref10.rebind());
  
  
  var node11 = $("<div>");
  
  var ref8 = text;
  node11.text(""+ref8.get());
  var ignore1 = false;
  subs__.addSub(ref8.addEventListener('change', function(_, ref, val) {
    if(ignore1) return;
    node11.text(""+val);
  }));
  subs__.addSub(ref8.rebind());
  
  
  var ref9 = mobl.ref(mobl.ui.generic.headerTextStyle);
  if(ref9.get() !== null) {
    node11.attr('class', ref9.get());
    subs__.addSub(ref9.addEventListener('change', function(_, ref, val) {
      node11.attr('class', val);
    }));
    
  }
  subs__.addSub(ref9.rebind());
  
  node10.append(node11);
  node7.append(node10);
  var nodes8 = $("<span>");
  node7.append(nodes8);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl5();
  }));
  
  function renderControl5() {
    subs__.addSub((elements)(function(elements, callback) {
      var root16 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8;
      nodes8 = node.contents();
      oldNodes.replaceWith(nodes8);
    }));
  }
  renderControl5();
  root15.append(node7);
  
  var node8 = $("<span>");
  root15.append(node8);
  var condSubs1 = new mobl.CompSubscription();
  subs__.addSub(condSubs1);
  var oldValue1;
  var renderCond1 = function() {
    var value9 = fixedPosition.get();
    if(oldValue1 === value9) return;
    oldValue1 = value9;
    var subs__ = condSubs1;
    subs__.unsubscribe();
    node8.empty();
    if(value9) {
      
      var node9 = $("<div>");
      node9.attr('id', "hello");
      node9.attr('style', "height: 2.9em;");
      
      node8.append(node9);
      
      
    } else {
      
    }
  };
  renderCond1();
  subs__.addSub(fixedPosition.addEventListener('change', function() {
    renderCond1();
  }));
  
  callback(root15); return subs__;
  
  
  
  
  
  return subs__;
};
mobl.ui.generic.buttonStyle = 'mobl__ui__generic__buttonStyle';
mobl.ui.generic.buttonPushedStyle = 'mobl__ui__generic__buttonPushedStyle';
mobl.ui.generic.buttonStyle = 'mobl__ui__generic__buttonStyle';
mobl.ui.generic.buttonPushedStyle = 'mobl__ui__generic__buttonPushedStyle';

mobl.ui.generic.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root17 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref13 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref13.get() !== null) {
    sp.attr('class', ref13.get());
    subs__.addSub(ref13.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref13.rebind());
  
  var val6 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val6 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val6));
  }
  
  var val7 = function(event, callback) {
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
  if(val7 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val7));
  }
  
  var val8 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after0(result__) {
                    var tmp25 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after0);if(result__ !== undefined) after0(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val8 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val8));
  }
  
  var val9 = function(event, callback) {
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
  if(val9 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val9));
  }
  
  var ref14 = text;
  sp.text(""+ref14.get());
  var ignore2 = false;
  subs__.addSub(ref14.addEventListener('change', function(_, ref, val) {
    if(ignore2) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref14.rebind());
  
  
  root17.append(sp);
  callback(root17); return subs__;
  
  return subs__;
};
mobl.ui.generic.sideButtonStyle = 'mobl__ui__generic__sideButtonStyle';
mobl.ui.generic.sideButtonPushedStyle = 'mobl__ui__generic__sideButtonPushedStyle';

mobl.ui.generic.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root18 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes9 = $("<span>");
  root18.append(nodes9);
  subs__.addSub((mobl.ui.generic.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root19 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root19); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes9;
    nodes9 = node.contents();
    oldNodes.replaceWith(nodes9);
  }));
  callback(root18); return subs__;
  
  return subs__;
};
mobl.ui.generic.backButtonStyle = 'mobl__ui__generic__backButtonStyle';
mobl.ui.generic.backButtonPushedStyle = 'mobl__ui__generic__backButtonPushedStyle';
mobl.ui.generic.backButtonStyle = 'mobl__ui__generic__backButtonStyle';
mobl.ui.generic.backButtonPushedStyle = 'mobl__ui__generic__backButtonPushedStyle';

mobl.ui.generic.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root20 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes10 = $("<span>");
  root20.append(nodes10);
  subs__.addSub((mobl.ui.generic.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root21 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root21); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes10;
    nodes10 = node.contents();
    oldNodes.replaceWith(nodes10);
  }));
  callback(root20); return subs__;
  
  return subs__;
};
mobl.ui.generic.groupStyle = 'mobl__ui__generic__groupStyle';

mobl.ui.generic.group = function(elements, callback) {
  var root22 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node12 = $("<ul>");
  
  var ref15 = mobl.ref(mobl.ui.generic.groupStyle);
  if(ref15.get() !== null) {
    node12.attr('class', ref15.get());
    subs__.addSub(ref15.addEventListener('change', function(_, ref, val) {
      node12.attr('class', val);
    }));
    
  }
  subs__.addSub(ref15.rebind());
  
  var nodes11 = $("<span>");
  node12.append(nodes11);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl6();
  }));
  
  function renderControl6() {
    subs__.addSub((elements)(function(elements, callback) {
      var root23 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root23); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes11;
      nodes11 = node.contents();
      oldNodes.replaceWith(nodes11);
    }));
  }
  renderControl6();
  root22.append(node12);
  callback(root22); return subs__;
  
  
  return subs__;
};

mobl.ui.generic.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root24 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node13 = $("<img>");
  
  var ref16 = url;
  if(ref16.get() !== null) {
    node13.attr('src', ref16.get());
    subs__.addSub(ref16.addEventListener('change', function(_, ref, val) {
      node13.attr('src', val);
    }));
    
  }
  subs__.addSub(ref16.rebind());
  
  var ref17 = width;
  if(ref17.get() !== null) {
    node13.attr('width', ref17.get());
    subs__.addSub(ref17.addEventListener('change', function(_, ref, val) {
      node13.attr('width', val);
    }));
    
  }
  subs__.addSub(ref17.rebind());
  
  var ref18 = height;
  if(ref18.get() !== null) {
    node13.attr('height', ref18.get());
    subs__.addSub(ref18.addEventListener('change', function(_, ref, val) {
      node13.attr('height', val);
    }));
    
  }
  subs__.addSub(ref18.rebind());
  
  var ref19 = style;
  if(ref19.get() !== null) {
    node13.attr('class', ref19.get());
    subs__.addSub(ref19.addEventListener('change', function(_, ref, val) {
      node13.attr('class', val);
    }));
    
  }
  subs__.addSub(ref19.rebind());
  
  var val10 = onclick.get();
  if(val10 !== null) {
    subs__.addSub(mobl.domBind(node13, 'tap', val10));
  }
  
  var ref20 = valign;
  if(ref20.get() !== null) {
    node13.attr('valign', ref20.get());
    subs__.addSub(ref20.addEventListener('change', function(_, ref, val) {
      node13.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref20.rebind());
  
  var ref21 = align;
  if(ref21.get() !== null) {
    node13.attr('align', ref21.get());
    subs__.addSub(ref21.addEventListener('change', function(_, ref, val) {
      node13.attr('align', val);
    }));
    
  }
  subs__.addSub(ref21.rebind());
  
  root24.append(node13);
  callback(root24); return subs__;
  
  return subs__;
};
mobl.ui.generic.itemStyle = 'mobl__ui__generic__itemStyle';
mobl.ui.generic.itemPushedStyle = 'mobl__ui__generic__itemPushedStyle';
mobl.ui.generic.itemArrowStyle = 'mobl__ui__generic__itemArrowStyle';
mobl.ui.generic.itemDownArrowStyle = 'mobl__ui__generic__itemDownArrowStyle';

mobl.ui.generic.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root25 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref22 = mobl.ref(mobl.ui.generic.itemStyle);
  if(ref22.get() !== null) {
    el.attr('class', ref22.get());
    subs__.addSub(ref22.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref22.rebind());
  
  var ref23 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), mobl.ui.generic.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref23.get() !== null) {
    el.attr('class', ref23.get());
    subs__.addSub(ref23.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    subs__.addSub(onclick.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), mobl.ui.generic.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(hideArrow.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), mobl.ui.generic.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(mobl.ref(mobl.ui.generic.itemArrowStyle).addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), mobl.ui.generic.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(pushed.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), mobl.ui.generic.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(pushedStyle.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), mobl.ui.generic.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(style.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), mobl.ui.generic.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    
  }
  subs__.addSub(ref23.rebind());
  
  var val11 = onswipe.get();
  if(val11 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val11));
  }
  
  var val12 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp26 = result__;
                                           function after1(result__) {
                                             var tmp27 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after1);if(result__ !== undefined) after1(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp28 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val12 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val12));
  }
  
  var nodes12 = $("<span>");
  el.append(nodes12);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl7();
  }));
  
  function renderControl7() {
    subs__.addSub((elements)(function(elements, callback) {
      var root26 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root26); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes12;
      nodes12 = node.contents();
      oldNodes.replaceWith(nodes12);
    }));
  }
  renderControl7();
  root25.append(el);
  callback(root25); return subs__;
  
  
  return subs__;
};

mobl.ui.generic.checkBox = function(b, label, onchange, elements, callback) {
  var root27 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node14 = $("<input>");
  node14.attr('type', "checkbox");
  
  var ref25 = b;
  node14.attr('checked', !!ref25.get());
  subs__.addSub(ref25.addEventListener('change', function(_, ref, val) {
    if(ref === ref25) node14.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node14, 'change', function() {
    b.set(!!node14.attr('checked'));
  }));
  
  var val14 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val14 !== null) {
    subs__.addSub(mobl.domBind(node14, 'tap', val14));
  }
  
  var val15 = onchange.get();
  if(val15 !== null) {
    subs__.addSub(mobl.domBind(node14, 'change', val15));
  }
  
  root27.append(node14);
  
  root27.append(" ");
  
  var node15 = $("<span>");
  
  var ref24 = label;
  node15.text(""+ref24.get());
  var ignore3 = false;
  subs__.addSub(ref24.addEventListener('change', function(_, ref, val) {
    if(ignore3) return;
    node15.text(""+val);
  }));
  subs__.addSub(ref24.rebind());
  
  
  var val13 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after2(result__) {
                    var tmp29 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after2);if(result__ !== undefined) after2(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val13 !== null) {
    subs__.addSub(mobl.domBind(node15, 'tap', val13));
  }
  
  root27.append(node15);
  callback(root27); return subs__;
  
  
  return subs__;
};
mobl.ui.generic.textFieldStyle = 'mobl__ui__generic__textFieldStyle';
mobl.ui.generic.textFieldInvalidStyle = 'mobl__ui__generic__textFieldInvalidStyle';
mobl.ui.generic.textFieldLabelStyle = 'mobl__ui__generic__textFieldLabelStyle';
mobl.ui.generic.validationMessageStyle = 'mobl__ui__generic__validationMessageStyle';
mobl.ui.generic.alwaysOkValidator = function(s) {
   var __this = this;
  return "";
};


mobl.ui.generic.textField = function(s, placeholder, label, inputType, validator, style, invalidStyle, autofocus, autocorrect, autocapitalize, autocomplete, onchange, onkeyup, elements, callback) {
  var root28 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node16 = $("<span>");
  root28.append(node16);
  var condSubs2 = new mobl.CompSubscription();
  subs__.addSub(condSubs2);
  var oldValue2;
  var renderCond2 = function() {
    var value10 = label.get();
    if(oldValue2 === value10) return;
    oldValue2 = value10;
    var subs__ = condSubs2;
    subs__.unsubscribe();
    node16.empty();
    if(value10) {
      var nodes13 = $("<span>");
      node16.append(nodes13);
      subs__.addSub((mobl.label)(label, mobl.ref(mobl.ui.generic.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root29 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root29); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes13;
        nodes13 = node.contents();
        oldNodes.replaceWith(nodes13);
      }));
      
      
    } else {
      
    }
  };
  renderCond2();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond2();
  }));
  
  
  var node17 = $("<span>");
  root28.append(node17);
  var condSubs3 = new mobl.CompSubscription();
  subs__.addSub(condSubs3);
  var oldValue3;
  var renderCond3 = function() {
    var value11 = validator.get();
    if(oldValue3 === value11) return;
    oldValue3 = value11;
    var subs__ = condSubs3;
    subs__.unsubscribe();
    node17.empty();
    if(value11) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after6(result__) {
        var tmp31 = result__;
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp32 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node18 = $("<input>");
        
        var ref26 = inputType;
        if(ref26.get() !== null) {
          node18.attr('type', ref26.get());
          subs__.addSub(ref26.addEventListener('change', function(_, ref, val) {
            node18.attr('type', val);
          }));
          
        }
        subs__.addSub(ref26.rebind());
        
        var ref27 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref27.get() !== null) {
          node18.attr('class', ref27.get());
          subs__.addSub(ref27.addEventListener('change', function(_, ref, val) {
            node18.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node18.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node18.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node18.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref27.rebind());
        
        var ref28 = placeholder;
        if(ref28.get() !== null) {
          node18.attr('placeholder', ref28.get());
          subs__.addSub(ref28.addEventListener('change', function(_, ref, val) {
            node18.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref28.rebind());
        
        var ref29 = temp;
        node18.val(""+ref29.get());
        var ignore4 = false;
        subs__.addSub(ref29.addEventListener('change', function(_, ref, val) {
          if(ignore4) return;
          node18.val(""+val);
        }));
        subs__.addSub(ref29.rebind());
        
        subs__.addSub(mobl.domBind(node18, 'keyup change', function() {
          ignore4 = true;
          temp.set(mobl.stringTomobl__String(node18.val()));
          ignore4 = false;
        }));
        
        
        var val16 = onchange.get();
        if(val16 !== null) {
          subs__.addSub(mobl.domBind(node18, 'change', val16));
        }
        
        var val17 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after3(result__) {
                          var tmp33 = result__;
                          function after4(result__) {
                            var tmp34 = result__;
                            var result__ = tmp34;
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
                          var result__ = validator.get()(temp.get(), after4);if(result__ !== undefined) after4(result__);
                        }
                        var result__ = onkeyup.get()(event, after3);if(result__ !== undefined) after3(result__);
                      } else {
                        {
                          function after5(result__) {
                            var tmp34 = result__;
                            var result__ = tmp34;
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
                          var result__ = validator.get()(temp.get(), after5);if(result__ !== undefined) after5(result__);
                        }
                      }
                    };
        if(val17 !== null) {
          subs__.addSub(mobl.domBind(node18, 'keyup', val17));
        }
        
        var ref30 = autofocus;
        if(ref30.get() !== null) {
          node18.attr('autofocus', ref30.get());
          subs__.addSub(ref30.addEventListener('change', function(_, ref, val) {
            node18.attr('autofocus', val);
          }));
          
        }
        subs__.addSub(ref30.rebind());
        
        var ref31 = autocorrect;
        if(ref31.get() !== null) {
          node18.attr('autocorrect', ref31.get());
          subs__.addSub(ref31.addEventListener('change', function(_, ref, val) {
            node18.attr('autocorrect', val);
          }));
          
        }
        subs__.addSub(ref31.rebind());
        
        var ref32 = autocapitalize;
        if(ref32.get() !== null) {
          node18.attr('autocapitalize', ref32.get());
          subs__.addSub(ref32.addEventListener('change', function(_, ref, val) {
            node18.attr('autocapitalize', val);
          }));
          
        }
        subs__.addSub(ref32.rebind());
        
        var ref33 = autocomplete;
        if(ref33.get() !== null) {
          node18.attr('autocomplete', ref33.get());
          subs__.addSub(ref33.addEventListener('change', function(_, ref, val) {
            node18.attr('autocomplete', val);
          }));
          
        }
        subs__.addSub(ref33.rebind());
        
        node17.append(node18);
        var nodes14 = $("<span>");
        node17.append(nodes14);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(mobl.ui.generic.validationMessageStyle), mobl.ref(null), function(_, callback) {
          var root30 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root30); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes14;
          nodes14 = node.contents();
          oldNodes.replaceWith(nodes14);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after6);if(result__ !== undefined) after6(result__);
    } else {
      
      var node19 = $("<input>");
      
      var ref34 = inputType;
      if(ref34.get() !== null) {
        node19.attr('type', ref34.get());
        subs__.addSub(ref34.addEventListener('change', function(_, ref, val) {
          node19.attr('type', val);
        }));
        
      }
      subs__.addSub(ref34.rebind());
      
      var ref35 = style;
      if(ref35.get() !== null) {
        node19.attr('class', ref35.get());
        subs__.addSub(ref35.addEventListener('change', function(_, ref, val) {
          node19.attr('class', val);
        }));
        
      }
      subs__.addSub(ref35.rebind());
      
      var ref36 = placeholder;
      if(ref36.get() !== null) {
        node19.attr('placeholder', ref36.get());
        subs__.addSub(ref36.addEventListener('change', function(_, ref, val) {
          node19.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref36.rebind());
      
      var ref37 = s;
      node19.val(""+ref37.get());
      var ignore5 = false;
      subs__.addSub(ref37.addEventListener('change', function(_, ref, val) {
        if(ignore5) return;
        node19.val(""+val);
      }));
      subs__.addSub(ref37.rebind());
      
      subs__.addSub(mobl.domBind(node19, 'keyup change', function() {
        ignore5 = true;
        s.set(mobl.stringTomobl__String(node19.val()));
        ignore5 = false;
      }));
      
      
      var val18 = onchange.get();
      if(val18 !== null) {
        subs__.addSub(mobl.domBind(node19, 'change', val18));
      }
      
      var val19 = onkeyup.get();
      if(val19 !== null) {
        subs__.addSub(mobl.domBind(node19, 'keyup', val19));
      }
      
      var ref38 = autofocus;
      if(ref38.get() !== null) {
        node19.attr('autofocus', ref38.get());
        subs__.addSub(ref38.addEventListener('change', function(_, ref, val) {
          node19.attr('autofocus', val);
        }));
        
      }
      subs__.addSub(ref38.rebind());
      
      var ref39 = autocorrect;
      if(ref39.get() !== null) {
        node19.attr('autocorrect', ref39.get());
        subs__.addSub(ref39.addEventListener('change', function(_, ref, val) {
          node19.attr('autocorrect', val);
        }));
        
      }
      subs__.addSub(ref39.rebind());
      
      var ref40 = autocapitalize;
      if(ref40.get() !== null) {
        node19.attr('autocapitalize', ref40.get());
        subs__.addSub(ref40.addEventListener('change', function(_, ref, val) {
          node19.attr('autocapitalize', val);
        }));
        
      }
      subs__.addSub(ref40.rebind());
      
      var ref41 = autocomplete;
      if(ref41.get() !== null) {
        node19.attr('autocomplete', ref41.get());
        subs__.addSub(ref41.addEventListener('change', function(_, ref, val) {
          node19.attr('autocomplete', val);
        }));
        
      }
      subs__.addSub(ref41.rebind());
      
      node17.append(node19);
      
      
    }
  };
  renderCond3();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond3();
  }));
  
  callback(root28); return subs__;
  
  
  return subs__;
};

mobl.ui.generic.emailField = function(s, placeholder, label, validator, style, invalidStyle, autofocus, onchange, onkeyup, elements, callback) {
  var root31 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes15 = $("<span>");
  root31.append(nodes15);
  subs__.addSub((mobl.ui.generic.textField)(s, placeholder, label, mobl.ref("email"), validator, style, invalidStyle, autofocus, mobl.ref(false), mobl.ref(false), mobl.ref(false), onchange, onkeyup, function(_, callback) {
    var root32 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root32); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes15;
    nodes15 = node.contents();
    oldNodes.replaceWith(nodes15);
  }));
  callback(root31); return subs__;
  
  return subs__;
};

mobl.ui.generic.telField = function(phoneNumber, placeholder, label, validator, style, invalidStyle, autofocus, onchange, onkeyup, elements, callback) {
  var root33 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes16 = $("<span>");
  root33.append(nodes16);
  subs__.addSub((mobl.ui.generic.textField)(phoneNumber, placeholder, label, mobl.ref("tel"), validator, style, invalidStyle, autofocus, mobl.ref(false), mobl.ref(false), mobl.ref(false), onchange, onkeyup, function(_, callback) {
    var root34 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root34); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes16;
    nodes16 = node.contents();
    oldNodes.replaceWith(nodes16);
  }));
  callback(root33); return subs__;
  
  return subs__;
};

mobl.ui.generic.rangeField = function(n, min, max, step, placeholder, label, onchange, onkeyup, elements, callback) {
  var root35 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node20 = $("<span>");
  root35.append(node20);
  var condSubs4 = new mobl.CompSubscription();
  subs__.addSub(condSubs4);
  var oldValue4;
  var renderCond4 = function() {
    var value12 = label.get();
    if(oldValue4 === value12) return;
    oldValue4 = value12;
    var subs__ = condSubs4;
    subs__.unsubscribe();
    node20.empty();
    if(value12) {
      var nodes17 = $("<span>");
      node20.append(nodes17);
      subs__.addSub((mobl.label)(label, mobl.ref(mobl.ui.generic.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root36 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root36); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes17;
        nodes17 = node.contents();
        oldNodes.replaceWith(nodes17);
      }));
      
      
    } else {
      
    }
  };
  renderCond4();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond4();
  }));
  
  
  var node21 = $("<input>");
  node21.attr('type', "range");
  
  var ref42 = n;
  node21.val(""+ref42.get());
  var ignore6 = false;
  subs__.addSub(ref42.addEventListener('change', function(_, ref, val) {
    if(ignore6) return;
    node21.val(""+val);
  }));
  subs__.addSub(ref42.rebind());
  
  subs__.addSub(mobl.domBind(node21, 'keyup change', function() {
    ignore6 = true;
    n.set(mobl.stringTomobl__Num(node21.val()));
    ignore6 = false;
  }));
  
  
  var ref43 = min;
  if(ref43.get() !== null) {
    node21.attr('min', ref43.get());
    subs__.addSub(ref43.addEventListener('change', function(_, ref, val) {
      node21.attr('min', val);
    }));
    
  }
  subs__.addSub(ref43.rebind());
  
  var ref44 = max;
  if(ref44.get() !== null) {
    node21.attr('max', ref44.get());
    subs__.addSub(ref44.addEventListener('change', function(_, ref, val) {
      node21.attr('max', val);
    }));
    
  }
  subs__.addSub(ref44.rebind());
  
  var ref45 = step;
  if(ref45.get() !== null) {
    node21.attr('step', ref45.get());
    subs__.addSub(ref45.addEventListener('change', function(_, ref, val) {
      node21.attr('step', val);
    }));
    
  }
  subs__.addSub(ref45.rebind());
  node21.attr('style', "width: 99%;");
  
  var val20 = onchange.get();
  if(val20 !== null) {
    subs__.addSub(mobl.domBind(node21, 'change', val20));
  }
  
  var val21 = onkeyup.get();
  if(val21 !== null) {
    subs__.addSub(mobl.domBind(node21, 'keyup', val21));
  }
  
  var ref46 = placeholder;
  if(ref46.get() !== null) {
    node21.attr('placeholder', ref46.get());
    subs__.addSub(ref46.addEventListener('change', function(_, ref, val) {
      node21.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref46.rebind());
  
  root35.append(node21);
  callback(root35); return subs__;
  
  
  return subs__;
};

mobl.ui.generic.numField = function(n, label, placeholder, validator, style, invalidStyle, autofocus, step, min, max, onchange, onkeyup, elements, callback) {
  var root37 = $("<span>");
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
    function after9(result__) {
      var tmp35 = result__;
      var validationMessage = mobl.ref(result__);
      
      var node22 = $("<input>");
      node22.attr('type', "number");
      
      var ref47 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
      if(ref47.get() !== null) {
        node22.attr('class', ref47.get());
        subs__.addSub(ref47.addEventListener('change', function(_, ref, val) {
          node22.attr('class', val);
        }));
        subs__.addSub(validationMessage.addEventListener('change', function() {
          node22.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
        }));
        subs__.addSub(invalidStyle.addEventListener('change', function() {
          node22.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
        }));
        subs__.addSub(style.addEventListener('change', function() {
          node22.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
        }));
        
      }
      subs__.addSub(ref47.rebind());
      
      var ref48 = placeholder;
      if(ref48.get() !== null) {
        node22.attr('placeholder', ref48.get());
        subs__.addSub(ref48.addEventListener('change', function(_, ref, val) {
          node22.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref48.rebind());
      
      var ref49 = n;
      node22.val(""+ref49.get());
      var ignore7 = false;
      subs__.addSub(ref49.addEventListener('change', function(_, ref, val) {
        if(ignore7) return;
        node22.val(""+val);
      }));
      subs__.addSub(ref49.rebind());
      
      subs__.addSub(mobl.domBind(node22, 'keyup change', function() {
        ignore7 = true;
        n.set(mobl.stringTomobl__Num(node22.val()));
        ignore7 = false;
      }));
      
      
      var val22 = onchange.get();
      if(val22 !== null) {
        subs__.addSub(mobl.domBind(node22, 'change', val22));
      }
      
      var val23 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    function after7(result__) {
                      var tmp36 = result__;
                      var result__ = tmp36;
                      validationMessage.set(result__);
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after8(result__) {
                          var tmp37 = result__;
                          if(callback && callback.apply) callback(); return;
                        }
                        var result__ = onkeyup.get()(event, after8);if(result__ !== undefined) after8(result__);
                      } else {
                        {
                          if(callback && callback.apply) callback(); return;
                        }
                      }
                    }
                    var result__ = validator.get()(n.get(), after7);if(result__ !== undefined) after7(result__);
                  };
      if(val23 !== null) {
        subs__.addSub(mobl.domBind(node22, 'keyup', val23));
      }
      
      var ref50 = autofocus;
      if(ref50.get() !== null) {
        node22.attr('autofocus', ref50.get());
        subs__.addSub(ref50.addEventListener('change', function(_, ref, val) {
          node22.attr('autofocus', val);
        }));
        
      }
      subs__.addSub(ref50.rebind());
      
      var ref51 = step;
      if(ref51.get() !== null) {
        node22.attr('step', ref51.get());
        subs__.addSub(ref51.addEventListener('change', function(_, ref, val) {
          node22.attr('step', val);
        }));
        
      }
      subs__.addSub(ref51.rebind());
      
      var ref52 = min;
      if(ref52.get() !== null) {
        node22.attr('min', ref52.get());
        subs__.addSub(ref52.addEventListener('change', function(_, ref, val) {
          node22.attr('min', val);
        }));
        
      }
      subs__.addSub(ref52.rebind());
      
      var ref53 = max;
      if(ref53.get() !== null) {
        node22.attr('max', ref53.get());
        subs__.addSub(ref53.addEventListener('change', function(_, ref, val) {
          node22.attr('max', val);
        }));
        
      }
      subs__.addSub(ref53.rebind());
      
      root37.append(node22);
      var nodes18 = $("<span>");
      root37.append(nodes18);
      subs__.addSub((mobl.label)(validationMessage, mobl.ref(mobl.ui.generic.validationMessageStyle), mobl.ref(null), function(_, callback) {
        var root38 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root38); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes18;
        nodes18 = node.contents();
        oldNodes.replaceWith(nodes18);
      }));
      callback(root37); return subs__;
      
      
    }
    var result__ = validator.get()(n.get(), after9);if(result__ !== undefined) after9(result__);
  } else {
    {
      function after9(result__) {
        var tmp35 = result__;
        var validationMessage = mobl.ref(result__);
        
        var node22 = $("<input>");
        node22.attr('type', "number");
        
        var ref47 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref47.get() !== null) {
          node22.attr('class', ref47.get());
          subs__.addSub(ref47.addEventListener('change', function(_, ref, val) {
            node22.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node22.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node22.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node22.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref47.rebind());
        
        var ref48 = placeholder;
        if(ref48.get() !== null) {
          node22.attr('placeholder', ref48.get());
          subs__.addSub(ref48.addEventListener('change', function(_, ref, val) {
            node22.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref48.rebind());
        
        var ref49 = n;
        node22.val(""+ref49.get());
        var ignore7 = false;
        subs__.addSub(ref49.addEventListener('change', function(_, ref, val) {
          if(ignore7) return;
          node22.val(""+val);
        }));
        subs__.addSub(ref49.rebind());
        
        subs__.addSub(mobl.domBind(node22, 'keyup change', function() {
          ignore7 = true;
          n.set(mobl.stringTomobl__Num(node22.val()));
          ignore7 = false;
        }));
        
        
        var val22 = onchange.get();
        if(val22 !== null) {
          subs__.addSub(mobl.domBind(node22, 'change', val22));
        }
        
        var val23 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      function after7(result__) {
                        var tmp36 = result__;
                        var result__ = tmp36;
                        validationMessage.set(result__);
                        var result__ = onkeyup.get();
                        if(result__) {
                          function after8(result__) {
                            var tmp37 = result__;
                            if(callback && callback.apply) callback(); return;
                          }
                          var result__ = onkeyup.get()(event, after8);if(result__ !== undefined) after8(result__);
                        } else {
                          {
                            if(callback && callback.apply) callback(); return;
                          }
                        }
                      }
                      var result__ = validator.get()(n.get(), after7);if(result__ !== undefined) after7(result__);
                    };
        if(val23 !== null) {
          subs__.addSub(mobl.domBind(node22, 'keyup', val23));
        }
        
        var ref50 = autofocus;
        if(ref50.get() !== null) {
          node22.attr('autofocus', ref50.get());
          subs__.addSub(ref50.addEventListener('change', function(_, ref, val) {
            node22.attr('autofocus', val);
          }));
          
        }
        subs__.addSub(ref50.rebind());
        
        var ref51 = step;
        if(ref51.get() !== null) {
          node22.attr('step', ref51.get());
          subs__.addSub(ref51.addEventListener('change', function(_, ref, val) {
            node22.attr('step', val);
          }));
          
        }
        subs__.addSub(ref51.rebind());
        
        var ref52 = min;
        if(ref52.get() !== null) {
          node22.attr('min', ref52.get());
          subs__.addSub(ref52.addEventListener('change', function(_, ref, val) {
            node22.attr('min', val);
          }));
          
        }
        subs__.addSub(ref52.rebind());
        
        var ref53 = max;
        if(ref53.get() !== null) {
          node22.attr('max', ref53.get());
          subs__.addSub(ref53.addEventListener('change', function(_, ref, val) {
            node22.attr('max', val);
          }));
          
        }
        subs__.addSub(ref53.rebind());
        
        root37.append(node22);
        var nodes18 = $("<span>");
        root37.append(nodes18);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(mobl.ui.generic.validationMessageStyle), mobl.ref(null), function(_, callback) {
          var root38 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root38); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes18;
          nodes18 = node.contents();
          oldNodes.replaceWith(nodes18);
        }));
        callback(root37); return subs__;
        
        
      }
      var result__ = validator.get()(n.get(), after9);if(result__ !== undefined) after9(result__);
    }
  }
  return subs__;
};

mobl.ui.generic.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root39 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node23 = $("<span>");
  root39.append(node23);
  var condSubs5 = new mobl.CompSubscription();
  subs__.addSub(condSubs5);
  var oldValue5;
  var renderCond5 = function() {
    var value13 = label.get();
    if(oldValue5 === value13) return;
    oldValue5 = value13;
    var subs__ = condSubs5;
    subs__.unsubscribe();
    node23.empty();
    if(value13) {
      
      var node24 = $("<span>");
      node24.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref57 = label;
      node24.text(""+ref57.get());
      var ignore9 = false;
      subs__.addSub(ref57.addEventListener('change', function(_, ref, val) {
        if(ignore9) return;
        node24.text(""+val);
      }));
      subs__.addSub(ref57.rebind());
      
      
      node23.append(node24);
      
      var node25 = $("<span>");
      node25.attr('style', "float: left");
      
      
      var node26 = $("<input>");
      node26.attr('type', "password");
      
      var ref54 = style;
      if(ref54.get() !== null) {
        node26.attr('class', ref54.get());
        subs__.addSub(ref54.addEventListener('change', function(_, ref, val) {
          node26.attr('class', val);
        }));
        
      }
      subs__.addSub(ref54.rebind());
      
      var ref55 = placeholder;
      if(ref55.get() !== null) {
        node26.attr('placeholder', ref55.get());
        subs__.addSub(ref55.addEventListener('change', function(_, ref, val) {
          node26.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref55.rebind());
      
      var ref56 = s;
      node26.val(""+ref56.get());
      var ignore8 = false;
      subs__.addSub(ref56.addEventListener('change', function(_, ref, val) {
        if(ignore8) return;
        node26.val(""+val);
      }));
      subs__.addSub(ref56.rebind());
      
      subs__.addSub(mobl.domBind(node26, 'keyup change', function() {
        ignore8 = true;
        s.set(mobl.stringTomobl__String(node26.val()));
        ignore8 = false;
      }));
      
      
      var val24 = onchange.get();
      if(val24 !== null) {
        subs__.addSub(mobl.domBind(node26, 'change', val24));
      }
      
      var val25 = onkeyup.get();
      if(val25 !== null) {
        subs__.addSub(mobl.domBind(node26, 'keyup', val25));
      }
      
      var val26 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = mobl.ui.generic.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val26 !== null) {
        subs__.addSub(mobl.domBind(node26, 'blur', val26));
      }
      
      node25.append(node26);
      node23.append(node25);
      
      
      
      
    } else {
      
      var node27 = $("<input>");
      node27.attr('type', "password");
      
      var ref58 = style;
      if(ref58.get() !== null) {
        node27.attr('class', ref58.get());
        subs__.addSub(ref58.addEventListener('change', function(_, ref, val) {
          node27.attr('class', val);
        }));
        
      }
      subs__.addSub(ref58.rebind());
      
      var ref59 = placeholder;
      if(ref59.get() !== null) {
        node27.attr('placeholder', ref59.get());
        subs__.addSub(ref59.addEventListener('change', function(_, ref, val) {
          node27.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref59.rebind());
      
      var ref60 = s;
      node27.val(""+ref60.get());
      var ignore10 = false;
      subs__.addSub(ref60.addEventListener('change', function(_, ref, val) {
        if(ignore10) return;
        node27.val(""+val);
      }));
      subs__.addSub(ref60.rebind());
      
      subs__.addSub(mobl.domBind(node27, 'keyup change', function() {
        ignore10 = true;
        s.set(mobl.stringTomobl__String(node27.val()));
        ignore10 = false;
      }));
      
      
      var val27 = onchange.get();
      if(val27 !== null) {
        subs__.addSub(mobl.domBind(node27, 'change', val27));
      }
      
      var val28 = onkeyup.get();
      if(val28 !== null) {
        subs__.addSub(mobl.domBind(node27, 'keyup', val28));
      }
      
      var val29 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = mobl.ui.generic.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val29 !== null) {
        subs__.addSub(mobl.domBind(node27, 'blur', val29));
      }
      
      node23.append(node27);
      
      
    }
  };
  renderCond5();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond5();
  }));
  
  callback(root39); return subs__;
  
  return subs__;
};
mobl.ui.generic.selectFieldStyle = 'mobl__ui__generic__selectFieldStyle';

mobl.ui.generic.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root40 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref65 = style;
  if(ref65.get() !== null) {
    sel.attr('class', ref65.get());
    subs__.addSub(ref65.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref65.rebind());
  
  var val30 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after10(result__) {
                    var tmp39 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after10);if(result__ !== undefined) after10(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val30 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val30));
  }
  
  
  var node28 = mobl.loadingSpan();
  sel.append(node28);
  var list0;
  var listSubs0 = new mobl.CompSubscription();
  subs__.addSub(listSubs0);
  var renderList0 = function() {
    var subs__ = listSubs0;
    list0 = options.get();
    list0.list(function(results0) {
      node28.empty();
      for(var i0 = 0; i0 < results0.length; i0++) {
        (function() {
          var iternode0 = $("<span>");
          node28.append(iternode0);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results0), i0), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results0), i0), "_2");
          
          var node29 = $("<option>");
          
          var ref61 = optionDescription;
          node29.text(""+ref61.get());
          var ignore11 = false;
          subs__.addSub(ref61.addEventListener('change', function(_, ref, val) {
            if(ignore11) return;
            node29.text(""+val);
          }));
          subs__.addSub(ref61.rebind());
          
          
          var ref62 = optionStyle;
          if(ref62.get() !== null) {
            node29.attr('class', ref62.get());
            subs__.addSub(ref62.addEventListener('change', function(_, ref, val) {
              node29.attr('class', val);
            }));
            
          }
          subs__.addSub(ref62.rebind());
          
          var ref63 = optionValue;
          if(ref63.get() !== null) {
            node29.attr('value', ref63.get());
            subs__.addSub(ref63.addEventListener('change', function(_, ref, val) {
              node29.attr('value', val);
            }));
            
          }
          subs__.addSub(ref63.rebind());
          
          var ref64 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref64.get() !== null) {
            node29.attr('selected', ref64.get());
            subs__.addSub(ref64.addEventListener('change', function(_, ref, val) {
              node29.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node29.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node29.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref64.rebind());
          
          iternode0.append(node29);
          
          var oldNodes = iternode0;
          iternode0 = iternode0.contents();
          oldNodes.replaceWith(iternode0);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list0.addEventListener('change', function() { listSubs0.unsubscribe(); renderList0(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs0.unsubscribe(); renderList0(true); }));
    });
  };
  renderList0();
  
  root40.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root40); return subs__;
  
  
  return subs__;
};
mobl.ui.generic.tabbarStyle = 'mobl__ui__generic__tabbarStyle';
mobl.ui.generic.inActiveTabButtonStyle = 'mobl__ui__generic__inActiveTabButtonStyle';
mobl.ui.generic.activeTabButtonStyle = 'mobl__ui__generic__activeTabButtonStyle';
mobl.ui.generic.inActiveTabStyle = 'mobl__ui__generic__inActiveTabStyle';
mobl.ui.generic.activeTabStyle = 'mobl__ui__generic__activeTabStyle';

mobl.ui.generic.tabSet = function(tabs, activeTab, elements, callback) {
  var root41 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = activeTab.get() == null;
  if(result__) {
    var result__ = tabs.get().get(0)._1;
    activeTab.set(result__);
    
    var s = mobl.ref("");
    var nodes19 = $("<span>");
    root41.append(nodes19);
    subs__.addSub((mobl.block)(mobl.ref(mobl.ui.generic.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root42 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node30 = mobl.loadingSpan();
      root42.append(node30);
      var list1;
      var listSubs1 = new mobl.CompSubscription();
      subs__.addSub(listSubs1);
      var renderList1 = function() {
        var subs__ = listSubs1;
        list1 = tabs.get();
        list1.list(function(results1) {
          node30.empty();
          for(var i1 = 0; i1 < results1.length; i1++) {
            (function() {
              var iternode1 = $("<span>");
              node30.append(iternode1);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results1), i1), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results1), i1), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results1), i1), "_3");
              var result__ = activeTab.get() == tabName.get() ? mobl.ui.generic.activeTabButtonStyle : mobl.ui.generic.inActiveTabButtonStyle;
              var tmp1 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp1.set(activeTab.get() == tabName.get() ? mobl.ui.generic.activeTabButtonStyle : mobl.ui.generic.inActiveTabButtonStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp1.set(activeTab.get() == tabName.get() ? mobl.ui.generic.activeTabButtonStyle : mobl.ui.generic.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(mobl.ui.generic.activeTabButtonStyle).addEventListener('change', function() {
                tmp1.set(activeTab.get() == tabName.get() ? mobl.ui.generic.activeTabButtonStyle : mobl.ui.generic.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(mobl.ui.generic.inActiveTabButtonStyle).addEventListener('change', function() {
                tmp1.set(activeTab.get() == tabName.get() ? mobl.ui.generic.activeTabButtonStyle : mobl.ui.generic.inActiveTabButtonStyle);
              }));
              
              var result__ = function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = tabName.get();
                               activeTab.set(result__);
                               if(callback && callback.apply) callback(); return;
                             };
              var tmp0 = mobl.ref(result__);
              
              var nodes20 = $("<span>");
              iternode1.append(nodes20);
              subs__.addSub((mobl.span)(tmp1, mobl.ref(null), tmp0, mobl.ref(null), function(_, callback) {
                var root43 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes21 = $("<span>");
                root43.append(nodes21);
                subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                  var root44 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root44); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes21;
                  nodes21 = node.contents();
                  oldNodes.replaceWith(nodes21);
                }));
                callback(root43); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes20;
                nodes20 = node.contents();
                oldNodes.replaceWith(nodes20);
              }));
              
              var oldNodes = iternode1;
              iternode1 = iternode1.contents();
              oldNodes.replaceWith(iternode1);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list1.addEventListener('change', function() { listSubs1.unsubscribe(); renderList1(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs1.unsubscribe(); renderList1(true); }));
        });
      };
      renderList1();
      
      callback(root42); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes19;
      nodes19 = node.contents();
      oldNodes.replaceWith(nodes19);
    }));
    
    var node31 = mobl.loadingSpan();
    root41.append(node31);
    var list2;
    var listSubs2 = new mobl.CompSubscription();
    subs__.addSub(listSubs2);
    var renderList2 = function() {
      var subs__ = listSubs2;
      list2 = tabs.get();
      list2.list(function(results2) {
        node31.empty();
        for(var i2 = 0; i2 < results2.length; i2++) {
          (function() {
            var iternode2 = $("<span>");
            node31.append(iternode2);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results2), i2), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results2), i2), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results2), i2), "_3");
            var result__ = activeTab.get() == tabName.get() ? mobl.ui.generic.activeTabStyle : mobl.ui.generic.inActiveTabStyle;
            var tmp2 = mobl.ref(result__);
            subs__.addSub(activeTab.addEventListener('change', function() {
              tmp2.set(activeTab.get() == tabName.get() ? mobl.ui.generic.activeTabStyle : mobl.ui.generic.inActiveTabStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp2.set(activeTab.get() == tabName.get() ? mobl.ui.generic.activeTabStyle : mobl.ui.generic.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(mobl.ui.generic.activeTabStyle).addEventListener('change', function() {
              tmp2.set(activeTab.get() == tabName.get() ? mobl.ui.generic.activeTabStyle : mobl.ui.generic.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(mobl.ui.generic.inActiveTabStyle).addEventListener('change', function() {
              tmp2.set(activeTab.get() == tabName.get() ? mobl.ui.generic.activeTabStyle : mobl.ui.generic.inActiveTabStyle);
            }));
            
            var nodes22 = $("<span>");
            iternode2.append(nodes22);
            subs__.addSub((mobl.block)(tmp2, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root45 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes23 = $("<span>");
              root45.append(nodes23);
              subs__.addSub((mobl.screenContext)(function(_, callback) {
                var root46 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes24 = $("<span>");
                root46.append(nodes24);
                subs__.addSub(tabControl.addEventListener('change', function() {
                  renderControl8();
                }));
                
                function renderControl8() {
                  subs__.addSub((tabControl.get())(function(elements, callback) {
                    var root47 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root47); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes24;
                    nodes24 = node.contents();
                    oldNodes.replaceWith(nodes24);
                  }));
                }
                renderControl8();
                callback(root46); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes23;
                nodes23 = node.contents();
                oldNodes.replaceWith(nodes23);
              }));
              callback(root45); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes22;
              nodes22 = node.contents();
              oldNodes.replaceWith(nodes22);
            }));
            
            var oldNodes = iternode2;
            iternode2 = iternode2.contents();
            oldNodes.replaceWith(iternode2);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list2.addEventListener('change', function() { listSubs2.unsubscribe(); renderList2(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs2.unsubscribe(); renderList2(true); }));
      });
    };
    renderList2();
    
    callback(root41); return subs__;
    
    
  } else {
    {
      
      var s = mobl.ref("");
      var nodes19 = $("<span>");
      root41.append(nodes19);
      subs__.addSub((mobl.block)(mobl.ref(mobl.ui.generic.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root42 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node30 = mobl.loadingSpan();
        root42.append(node30);
        var list1;
        var listSubs1 = new mobl.CompSubscription();
        subs__.addSub(listSubs1);
        var renderList1 = function() {
          var subs__ = listSubs1;
          list1 = tabs.get();
          list1.list(function(results1) {
            node30.empty();
            for(var i1 = 0; i1 < results1.length; i1++) {
              (function() {
                var iternode1 = $("<span>");
                node30.append(iternode1);
                var tabName;var tabIcon;var tabControl;
                tabName = mobl.ref(mobl.ref(mobl.ref(results1), i1), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results1), i1), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results1), i1), "_3");
                var result__ = activeTab.get() == tabName.get() ? mobl.ui.generic.activeTabButtonStyle : mobl.ui.generic.inActiveTabButtonStyle;
                var tmp1 = mobl.ref(result__);
                subs__.addSub(activeTab.addEventListener('change', function() {
                  tmp1.set(activeTab.get() == tabName.get() ? mobl.ui.generic.activeTabButtonStyle : mobl.ui.generic.inActiveTabButtonStyle);
                }));
                subs__.addSub(tabName.addEventListener('change', function() {
                  tmp1.set(activeTab.get() == tabName.get() ? mobl.ui.generic.activeTabButtonStyle : mobl.ui.generic.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(mobl.ui.generic.activeTabButtonStyle).addEventListener('change', function() {
                  tmp1.set(activeTab.get() == tabName.get() ? mobl.ui.generic.activeTabButtonStyle : mobl.ui.generic.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(mobl.ui.generic.inActiveTabButtonStyle).addEventListener('change', function() {
                  tmp1.set(activeTab.get() == tabName.get() ? mobl.ui.generic.activeTabButtonStyle : mobl.ui.generic.inActiveTabButtonStyle);
                }));
                
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTab.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp0 = mobl.ref(result__);
                
                var nodes20 = $("<span>");
                iternode1.append(nodes20);
                subs__.addSub((mobl.span)(tmp1, mobl.ref(null), tmp0, mobl.ref(null), function(_, callback) {
                  var root43 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes21 = $("<span>");
                  root43.append(nodes21);
                  subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                    var root44 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root44); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes21;
                    nodes21 = node.contents();
                    oldNodes.replaceWith(nodes21);
                  }));
                  callback(root43); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes20;
                  nodes20 = node.contents();
                  oldNodes.replaceWith(nodes20);
                }));
                
                var oldNodes = iternode1;
                iternode1 = iternode1.contents();
                oldNodes.replaceWith(iternode1);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list1.addEventListener('change', function() { listSubs1.unsubscribe(); renderList1(true); }));
            subs__.addSub(tabs.addEventListener('change', function() { listSubs1.unsubscribe(); renderList1(true); }));
          });
        };
        renderList1();
        
        callback(root42); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes19;
        nodes19 = node.contents();
        oldNodes.replaceWith(nodes19);
      }));
      
      var node31 = mobl.loadingSpan();
      root41.append(node31);
      var list2;
      var listSubs2 = new mobl.CompSubscription();
      subs__.addSub(listSubs2);
      var renderList2 = function() {
        var subs__ = listSubs2;
        list2 = tabs.get();
        list2.list(function(results2) {
          node31.empty();
          for(var i2 = 0; i2 < results2.length; i2++) {
            (function() {
              var iternode2 = $("<span>");
              node31.append(iternode2);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results2), i2), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results2), i2), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results2), i2), "_3");
              var result__ = activeTab.get() == tabName.get() ? mobl.ui.generic.activeTabStyle : mobl.ui.generic.inActiveTabStyle;
              var tmp2 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp2.set(activeTab.get() == tabName.get() ? mobl.ui.generic.activeTabStyle : mobl.ui.generic.inActiveTabStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp2.set(activeTab.get() == tabName.get() ? mobl.ui.generic.activeTabStyle : mobl.ui.generic.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(mobl.ui.generic.activeTabStyle).addEventListener('change', function() {
                tmp2.set(activeTab.get() == tabName.get() ? mobl.ui.generic.activeTabStyle : mobl.ui.generic.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(mobl.ui.generic.inActiveTabStyle).addEventListener('change', function() {
                tmp2.set(activeTab.get() == tabName.get() ? mobl.ui.generic.activeTabStyle : mobl.ui.generic.inActiveTabStyle);
              }));
              
              var nodes22 = $("<span>");
              iternode2.append(nodes22);
              subs__.addSub((mobl.block)(tmp2, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root45 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes23 = $("<span>");
                root45.append(nodes23);
                subs__.addSub((mobl.screenContext)(function(_, callback) {
                  var root46 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes24 = $("<span>");
                  root46.append(nodes24);
                  subs__.addSub(tabControl.addEventListener('change', function() {
                    renderControl8();
                  }));
                  
                  function renderControl8() {
                    subs__.addSub((tabControl.get())(function(elements, callback) {
                      var root47 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root47); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes24;
                      nodes24 = node.contents();
                      oldNodes.replaceWith(nodes24);
                    }));
                  }
                  renderControl8();
                  callback(root46); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes23;
                  nodes23 = node.contents();
                  oldNodes.replaceWith(nodes23);
                }));
                callback(root45); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes22;
                nodes22 = node.contents();
                oldNodes.replaceWith(nodes22);
              }));
              
              var oldNodes = iternode2;
              iternode2 = iternode2.contents();
              oldNodes.replaceWith(iternode2);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list2.addEventListener('change', function() { listSubs2.unsubscribe(); renderList2(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs2.unsubscribe(); renderList2(true); }));
        });
      };
      renderList2();
      
      callback(root41); return subs__;
      
      
    }
  }
  return subs__;
};
mobl.ui.generic.searchboxStyle = 'mobl__ui__generic__searchboxStyle';
mobl.ui.generic.searchBoxInputStyle = 'mobl__ui__generic__searchBoxInputStyle';

mobl.ui.generic.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root48 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node32 = $("<div>");
  
  var ref69 = mobl.ref(mobl.ui.generic.searchboxStyle);
  if(ref69.get() !== null) {
    node32.attr('class', ref69.get());
    subs__.addSub(ref69.addEventListener('change', function(_, ref, val) {
      node32.attr('class', val);
    }));
    
  }
  subs__.addSub(ref69.rebind());
  
  
  var node33 = $("<input>");
  node33.attr('type', "search");
  
  var ref66 = mobl.ref(mobl.ui.generic.searchBoxInputStyle);
  if(ref66.get() !== null) {
    node33.attr('class', ref66.get());
    subs__.addSub(ref66.addEventListener('change', function(_, ref, val) {
      node33.attr('class', val);
    }));
    
  }
  subs__.addSub(ref66.rebind());
  
  var ref67 = placeholder;
  if(ref67.get() !== null) {
    node33.attr('placeholder', ref67.get());
    subs__.addSub(ref67.addEventListener('change', function(_, ref, val) {
      node33.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref67.rebind());
  
  var ref68 = s;
  node33.val(""+ref68.get());
  var ignore12 = false;
  subs__.addSub(ref68.addEventListener('change', function(_, ref, val) {
    if(ignore12) return;
    node33.val(""+val);
  }));
  subs__.addSub(ref68.rebind());
  
  subs__.addSub(mobl.domBind(node33, 'keyup change', function() {
    ignore12 = true;
    s.set(mobl.stringTomobl__String(node33.val()));
    ignore12 = false;
  }));
  
  
  var val31 = onsearch.get();
  if(val31 !== null) {
    subs__.addSub(mobl.domBind(node33, 'change', val31));
  }
  
  var val32 = onkeyup.get();
  if(val32 !== null) {
    subs__.addSub(mobl.domBind(node33, 'keyup', val32));
  }
  node33.attr('autocorrect', false);
  node33.attr('autocapitalize', false);
  node33.attr('autocomplete', false);
  
  node32.append(node33);
  root48.append(node32);
  callback(root48); return subs__;
  
  
  return subs__;
};
mobl.ui.generic.contextMenuStyle = 'mobl__ui__generic__contextMenuStyle';
mobl.ui.generic.buttonStyle = 'mobl__ui__generic__buttonStyle';
mobl.ui.generic.buttonPushedStyle = 'mobl__ui__generic__buttonPushedStyle';

mobl.ui.generic.contextMenu = function(elements, callback) {
  var root49 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref70 = mobl.ref(mobl.ui.generic.contextMenuStyle);
  if(ref70.get() !== null) {
    menu.attr('class', ref70.get());
    subs__.addSub(ref70.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref70.rebind());
  
  var nodes25 = $("<span>");
  menu.append(nodes25);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl9();
  }));
  
  function renderControl9() {
    subs__.addSub((elements)(function(elements, callback) {
      var root50 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root50); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes25;
      nodes25 = node.contents();
      oldNodes.replaceWith(nodes25);
    }));
  }
  renderControl9();
  root49.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val33 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp43 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val33 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val33));
  }
  
  root49.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root49); return subs__;
  
  
  
  return subs__;
};

mobl.ui.generic.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root51 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp24 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp24.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node34 = $("<span>");
  root51.append(node34);
  var condSubs6 = new mobl.CompSubscription();
  subs__.addSub(condSubs6);
  var oldValue6;
  var renderCond6 = function() {
    var value14 = tmp24.get();
    if(oldValue6 === value14) return;
    oldValue6 = value14;
    var subs__ = condSubs6;
    subs__.unsubscribe();
    node34.empty();
    if(value14) {
      items.get().one(function(result__) {
        var tmp44 = result__;
        var current = mobl.ref(result__);
        
        var node35 = $("<div>");
        node35.attr('width', "100%");
        
        
        var node36 = $("<div>");
        node36.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes28 = $("<span>");
        node36.append(nodes28);
        subs__.addSub((mobl.ui.generic.group)(function(_, callback) {
          var root54 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node39 = mobl.loadingSpan();
          root54.append(node39);
          var list3;
          var listSubs3 = new mobl.CompSubscription();
          subs__.addSub(listSubs3);
          var renderList3 = function() {
            var subs__ = listSubs3;
            list3 = items.get();
            list3.list(function(results3) {
              node39.empty();
              for(var i3 = 0; i3 < results3.length; i3++) {
                (function() {
                  var iternode3 = $("<span>");
                  node39.append(iternode3);
                  var it;
                  it = mobl.ref(mobl.ref(results3), i3);
                  var result__ = it.get() == current.get();
                  var tmp8 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp8.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp8.set(it.get() == current.get());
                  }));
                  
                  
                  var node40 = $("<span>");
                  iternode3.append(node40);
                  var condSubs8 = new mobl.CompSubscription();
                  subs__.addSub(condSubs8);
                  var oldValue8;
                  var renderCond8 = function() {
                    var value16 = tmp8.get();
                    if(oldValue8 === value16) return;
                    oldValue8 = value16;
                    var subs__ = condSubs8;
                    subs__.unsubscribe();
                    node40.empty();
                    if(value16) {
                      var nodes29 = $("<span>");
                      node40.append(nodes29);
                      subs__.addSub((mobl.ui.generic.item)(mobl.ref(mobl.ui.generic.selectedItemStyle), mobl.ref(mobl.ui.generic.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root55 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes30 = $("<span>");
                        root55.append(nodes30);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl11();
                        }));
                        
                        function renderControl11() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root56 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root56); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes30;
                            nodes30 = node.contents();
                            oldNodes.replaceWith(nodes30);
                          }));
                        }
                        renderControl11();
                        callback(root55); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes29;
                        nodes29 = node.contents();
                        oldNodes.replaceWith(nodes29);
                      }));
                      
                      
                    } else {
                      var result__ = function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = it.get();
                                       current.set(result__);
                                       var result__ = mobl.ui.generic.scrollUp();
                                       if(callback && callback.apply) callback(); return;
                                     };
                      var tmp7 = mobl.ref(result__);
                      
                      var nodes31 = $("<span>");
                      node40.append(nodes31);
                      subs__.addSub((mobl.ui.generic.item)(mobl.ref(mobl.ui.generic.itemStyle), mobl.ref(mobl.ui.generic.itemPushedStyle), tmp7, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root57 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes32 = $("<span>");
                        root57.append(nodes32);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl12();
                        }));
                        
                        function renderControl12() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root58 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root58); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes32;
                            nodes32 = node.contents();
                            oldNodes.replaceWith(nodes32);
                          }));
                        }
                        renderControl12();
                        callback(root57); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes31;
                        nodes31 = node.contents();
                        oldNodes.replaceWith(nodes31);
                      }));
                      
                      
                    }
                  };
                  renderCond8();
                  subs__.addSub(tmp8.addEventListener('change', function() {
                    renderCond8();
                  }));
                  
                  
                  var oldNodes = iternode3;
                  iternode3 = iternode3.contents();
                  oldNodes.replaceWith(iternode3);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list3.addEventListener('change', function() { listSubs3.unsubscribe(); renderList3(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs3.unsubscribe(); renderList3(true); }));
            });
          };
          renderList3();
          
          callback(root54); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes28;
          nodes28 = node.contents();
          oldNodes.replaceWith(nodes28);
        }));
        node35.append(node36);
        
        var node37 = $("<div>");
        node37.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node38 = $("<span>");
        node37.append(node38);
        var condSubs7 = new mobl.CompSubscription();
        subs__.addSub(condSubs7);
        var oldValue7;
        var renderCond7 = function() {
          var value15 = current.get();
          if(oldValue7 === value15) return;
          oldValue7 = value15;
          var subs__ = condSubs7;
          subs__.unsubscribe();
          node38.empty();
          if(value15) {
            var nodes26 = $("<span>");
            node38.append(nodes26);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl10();
            }));
            
            function renderControl10() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root52 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root52); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes26;
                nodes26 = node.contents();
                oldNodes.replaceWith(nodes26);
              }));
            }
            renderControl10();
            
            
          } else {
            var result__ = mobl._("Select an item on the left", []);
            var tmp9 = mobl.ref(result__);
            
            var nodes27 = $("<span>");
            node38.append(nodes27);
            subs__.addSub((mobl.label)(tmp9, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root53 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root53); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes27;
              nodes27 = node.contents();
              oldNodes.replaceWith(nodes27);
            }));
            
            
          }
        };
        renderCond7();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond7();
        }));
        
        node35.append(node37);
        node34.append(node35);
        
        
        
        
        
        
      });
    } else {
      var nodes33 = $("<span>");
      node34.append(nodes33);
      subs__.addSub((mobl.ui.generic.group)(function(_, callback) {
        var root59 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node41 = mobl.loadingSpan();
        root59.append(node41);
        var list4;
        var listSubs4 = new mobl.CompSubscription();
        subs__.addSub(listSubs4);
        var renderList4 = function() {
          var subs__ = listSubs4;
          list4 = items.get();
          list4.list(function(results4) {
            node41.empty();
            for(var i4 = 0; i4 < results4.length; i4++) {
              (function() {
                var iternode4 = $("<span>");
                node41.append(iternode4);
                var it;
                it = mobl.ref(mobl.ref(results4), i4);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('mobl.ui.generic.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp45 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp3 = mobl.ref(result__);
                
                var nodes34 = $("<span>");
                iternode4.append(nodes34);
                subs__.addSub((mobl.ui.generic.item)(mobl.ref(mobl.ui.generic.itemStyle), mobl.ref(mobl.ui.generic.itemPushedStyle), tmp3, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root60 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes35 = $("<span>");
                  root60.append(nodes35);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl13();
                  }));
                  
                  function renderControl13() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root61 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root61); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes35;
                      nodes35 = node.contents();
                      oldNodes.replaceWith(nodes35);
                    }));
                  }
                  renderControl13();
                  callback(root60); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes34;
                  nodes34 = node.contents();
                  oldNodes.replaceWith(nodes34);
                }));
                
                var oldNodes = iternode4;
                iternode4 = iternode4.contents();
                oldNodes.replaceWith(iternode4);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list4.addEventListener('change', function() { listSubs4.unsubscribe(); renderList4(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs4.unsubscribe(); renderList4(true); }));
          });
        };
        renderList4();
        
        callback(root59); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes33;
        nodes33 = node.contents();
        oldNodes.replaceWith(nodes33);
      }));
      
      
    }
  };
  renderCond6();
  subs__.addSub(tmp24.addEventListener('change', function() {
    renderCond6();
  }));
  
  callback(root51); return subs__;
  
  return subs__;
};

mobl.ui.generic.detailScreen = function(it, detail, callback, screenCallback) {
  var root62 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp6 = mobl.ref(result__);
  
  var nodes36 = $("<span>");
  root62.append(nodes36);
  subs__.addSub((mobl.ui.generic.header)(tmp6, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root63 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp5 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp4 = mobl.ref(result__);
    
    var nodes37 = $("<span>");
    root63.append(nodes37);
    subs__.addSub((mobl.ui.generic.backButton)(tmp4, mobl.ref(mobl.ui.generic.backButtonStyle), mobl.ref(mobl.ui.generic.backButtonPushedStyle), tmp5, function(_, callback) {
      var root64 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root64); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes37;
      nodes37 = node.contents();
      oldNodes.replaceWith(nodes37);
    }));
    callback(root63); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes36;
    nodes36 = node.contents();
    oldNodes.replaceWith(nodes36);
  }));
  var nodes38 = $("<span>");
  root62.append(nodes38);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl14();
  }));
  
  function renderControl14() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root65 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root65); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes38;
      nodes38 = node.contents();
      oldNodes.replaceWith(nodes38);
    }));
  }
  renderControl14();
  callback(root62); return subs__;
  
  
  return subs__;
};
mobl.ui.generic.selectedItemStyle = 'mobl__ui__generic__selectedItemStyle';

mobl.ui.generic.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root66 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes39 = $("<span>");
  root66.append(nodes39);
  subs__.addSub((mobl.ui.generic.group)(function(_, callback) {
    var root67 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node42 = mobl.loadingSpan();
    root67.append(node42);
    var list5;
    var listSubs5 = new mobl.CompSubscription();
    subs__.addSub(listSubs5);
    var renderList5 = function() {
      var subs__ = listSubs5;
      list5 = coll.get();
      list5.list(function(results5) {
        node42.empty();
        for(var i5 = 0; i5 < results5.length; i5++) {
          (function() {
            var iternode5 = $("<span>");
            node42.append(iternode5);
            var it;
            it = mobl.ref(mobl.ref(results5), i5);
            var result__ = it.get() == selected.get();
            var tmp12 = mobl.ref(result__);
            subs__.addSub(it.addEventListener('change', function() {
              tmp12.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp12.set(it.get() == selected.get());
            }));
            
            
            var node43 = $("<span>");
            iternode5.append(node43);
            var condSubs9 = new mobl.CompSubscription();
            subs__.addSub(condSubs9);
            var oldValue9;
            var renderCond9 = function() {
              var value17 = tmp12.get();
              if(oldValue9 === value17) return;
              oldValue9 = value17;
              var subs__ = condSubs9;
              subs__.unsubscribe();
              node43.empty();
              if(value17) {
                var nodes40 = $("<span>");
                node43.append(nodes40);
                subs__.addSub((mobl.ui.generic.item)(mobl.ref(mobl.ui.generic.itemStyle), mobl.ref(mobl.ui.generic.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root68 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes41 = $("<span>");
                  root68.append(nodes41);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl15();
                  }));
                  
                  function renderControl15() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root69 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root69); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes41;
                      nodes41 = node.contents();
                      oldNodes.replaceWith(nodes41);
                    }));
                  }
                  renderControl15();
                  callback(root68); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes40;
                  nodes40 = node.contents();
                  oldNodes.replaceWith(nodes40);
                }));
                
                
              } else {
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = it.get();
                                 selected.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp11 = mobl.ref(result__);
                
                var nodes42 = $("<span>");
                node43.append(nodes42);
                subs__.addSub((mobl.ui.generic.item)(mobl.ref(mobl.ui.generic.itemStyle), mobl.ref(mobl.ui.generic.itemPushedStyle), tmp11, mobl.ref(null), mobl.ref(true), function(_, callback) {
                  var root70 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes43 = $("<span>");
                  root70.append(nodes43);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl16();
                  }));
                  
                  function renderControl16() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root71 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root71); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes43;
                      nodes43 = node.contents();
                      oldNodes.replaceWith(nodes43);
                    }));
                  }
                  renderControl16();
                  callback(root70); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes42;
                  nodes42 = node.contents();
                  oldNodes.replaceWith(nodes42);
                }));
                
                
              }
            };
            renderCond9();
            subs__.addSub(tmp12.addEventListener('change', function() {
              renderCond9();
            }));
            
            
            var oldNodes = iternode5;
            iternode5 = iternode5.contents();
            oldNodes.replaceWith(iternode5);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list5.addEventListener('change', function() { listSubs5.unsubscribe(); renderList5(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs5.unsubscribe(); renderList5(true); }));
      });
    };
    renderList5();
    
    callback(root67); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes39;
    nodes39 = node.contents();
    oldNodes.replaceWith(nodes39);
  }));
  callback(root66); return subs__;
  
  return subs__;
};
mobl.ui.generic.loadMoreStyle = 'mobl__ui__generic__loadMoreStyle';

mobl.ui.generic.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, moreStyle, elements, callback) {
  var root72 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var tmp46 = result__;
    var total = mobl.ref(result__);
    var result__ = coll.get().limit(n.get());
    var tmp13 = mobl.ref(result__);
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp13.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp13.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp13.set(coll.get().limit(n.get()));
    }));
    
    
    var node44 = mobl.loadingSpan();
    root72.append(node44);
    var list6;
    var listSubs6 = new mobl.CompSubscription();
    subs__.addSub(listSubs6);
    var renderList6 = function() {
      var subs__ = listSubs6;
      list6 = tmp13.get();
      list6.list(function(results6) {
        node44.empty();
        for(var i6 = 0; i6 < results6.length; i6++) {
          (function() {
            var iternode6 = $("<span>");
            node44.append(iternode6);
            var it;
            it = mobl.ref(mobl.ref(results6), i6);
            var nodes44 = $("<span>");
            iternode6.append(nodes44);
            subs__.addSub(listCtrl.addEventListener('change', function() {
              renderControl17();
            }));
            
            function renderControl17() {
              subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                var root73 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root73); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes44;
                nodes44 = node.contents();
                oldNodes.replaceWith(nodes44);
              }));
            }
            renderControl17();
            
            var oldNodes = iternode6;
            iternode6 = iternode6.contents();
            oldNodes.replaceWith(iternode6);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list6.addEventListener('change', function() { listSubs6.unsubscribe(); renderList6(true); }));
        subs__.addSub(tmp13.addEventListener('change', function() { listSubs6.unsubscribe(); renderList6(true); }));
      });
    };
    renderList6();
    
    var result__ = n.get() < total.get();
    var tmp15 = mobl.ref(result__);
    subs__.addSub(n.addEventListener('change', function() {
      tmp15.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp15.set(n.get() < total.get());
    }));
    
    
    var node45 = $("<span>");
    root72.append(node45);
    var condSubs10 = new mobl.CompSubscription();
    subs__.addSub(condSubs10);
    var oldValue10;
    var renderCond10 = function() {
      var value18 = tmp15.get();
      if(oldValue10 === value18) return;
      oldValue10 = value18;
      var subs__ = condSubs10;
      subs__.unsubscribe();
      node45.empty();
      if(value18) {
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = n.get() + step.get();
                         n.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp14 = mobl.ref(result__);
        
        var nodes45 = $("<span>");
        node45.append(nodes45);
        subs__.addSub((mobl.block)(moreStyle, mobl.ref(null), tmp14, mobl.ref(null), function(_, callback) {
          var root74 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes46 = $("<span>");
          root74.append(nodes46);
          subs__.addSub((mobl.label)(moreLabel, mobl.ref(null), mobl.ref(null), function(_, callback) {
            var root75 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root75); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes46;
            nodes46 = node.contents();
            oldNodes.replaceWith(nodes46);
          }));
          callback(root74); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes45;
          nodes45 = node.contents();
          oldNodes.replaceWith(nodes45);
        }));
        
        
      } else {
        
      }
    };
    renderCond10();
    subs__.addSub(tmp15.addEventListener('change', function() {
      renderCond10();
    }));
    
    callback(root72); return subs__;
    
    
  });
  return subs__;
};

mobl.ui.generic.markableList = function(items, elements, callback) {
  var root76 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes47 = $("<span>");
  root76.append(nodes47);
  subs__.addSub((mobl.ui.generic.group)(function(_, callback) {
    var root77 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node46 = mobl.loadingSpan();
    root77.append(node46);
    var list7;
    var listSubs7 = new mobl.CompSubscription();
    subs__.addSub(listSubs7);
    var renderList7 = function() {
      var subs__ = listSubs7;
      list7 = items.get();
      list7.list(function(results7) {
        node46.empty();
        for(var i7 = 0; i7 < results7.length; i7++) {
          (function() {
            var iternode7 = $("<span>");
            node46.append(iternode7);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results7), i7), "_1");it = mobl.ref(mobl.ref(mobl.ref(results7), i7), "_2");
            var nodes48 = $("<span>");
            iternode7.append(nodes48);
            subs__.addSub((mobl.ui.generic.item)(mobl.ref(mobl.ui.generic.itemStyle), mobl.ref(mobl.ui.generic.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
              var root78 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes49 = $("<span>");
              root78.append(nodes49);
              subs__.addSub((mobl.ui.generic.checkBox)(checked, it, mobl.ref(null), function(_, callback) {
                var root79 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root79); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes49;
                nodes49 = node.contents();
                oldNodes.replaceWith(nodes49);
              }));
              callback(root78); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes48;
              nodes48 = node.contents();
              oldNodes.replaceWith(nodes48);
            }));
            
            var oldNodes = iternode7;
            iternode7 = iternode7.contents();
            oldNodes.replaceWith(iternode7);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list7.addEventListener('change', function() { listSubs7.unsubscribe(); renderList7(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs7.unsubscribe(); renderList7(true); }));
      });
    };
    renderList7();
    
    callback(root77); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes47;
    nodes47 = node.contents();
    oldNodes.replaceWith(nodes47);
  }));
  callback(root76); return subs__;
  
  return subs__;
};

mobl.ui.generic.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root80 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll13) {
    coll13 = coll13.reverse();
    function processOne1() {
      var it;
      it = coll13.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll13.length > 0) processOne1(); else rest1();
      
    }
    function rest1() {
      var nodes50 = $("<span>");
      root80.append(nodes50);
      subs__.addSub((mobl.ui.generic.header)(title, mobl.ref(false), mobl.ref(null), function(_, callback) {
        var root81 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = null;
                         if(callback && callback.apply) callback(result__);
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp16 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp17 = mobl.ref(result__);
        
        var nodes51 = $("<span>");
        root81.append(nodes51);
        subs__.addSub((mobl.ui.generic.backButton)(tmp17, mobl.ref(mobl.ui.generic.backButtonStyle), mobl.ref(mobl.ui.generic.backButtonPushedStyle), tmp16, function(_, callback) {
          var root82 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root82); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes51;
          nodes51 = node.contents();
          oldNodes.replaceWith(nodes51);
        }));
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = [];
                         var selected = result__;
                         var result__ = items.get();
                         items.get().list(function(coll12) {
                           coll12 = coll12.reverse();
                           function processOne0() {
                             var checked;var it;
                             var tmp48 = coll12.pop();
                             checked = tmp48._1;it = tmp48._2;
                             var result__ = checked;
                             if(result__) {
                               var result__ = selected.push(it);
                               
                               if(coll12.length > 0) processOne0(); else rest0();
                               
                             } else {
                               {
                                 
                                 if(coll12.length > 0) processOne0(); else rest0();
                                 
                               }
                             }
                           }
                           function rest0() {
                             var result__ = selected;
                             if(screenCallback) screenCallback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll12.length > 0) processOne0(); else rest0();
                         });
                         
                       };
        var tmp18 = mobl.ref(result__);
        
        var nodes52 = $("<span>");
        root81.append(nodes52);
        subs__.addSub((mobl.ui.generic.button)(doneButtonLabel, mobl.ref(mobl.ui.generic.buttonStyle), mobl.ref(mobl.ui.generic.buttonPushedStyle), tmp18, function(_, callback) {
          var root83 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root83); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes52;
          nodes52 = node.contents();
          oldNodes.replaceWith(nodes52);
        }));
        callback(root81); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes50;
        nodes50 = node.contents();
        oldNodes.replaceWith(nodes50);
      }));
      var nodes53 = $("<span>");
      root80.append(nodes53);
      subs__.addSub((mobl.ui.generic.markableList)(items, function(_, callback) {
        var root84 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root84); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes53;
        nodes53 = node.contents();
        oldNodes.replaceWith(nodes53);
      }));
      callback(root80); return subs__;
      
      
    }
    if(coll13.length > 0) processOne1(); else rest1();
  });
  
  return subs__;
};

mobl.ui.generic.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root85 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  var nodes54 = $("<span>");
  root85.append(nodes54);
  subs__.addSub((mobl.ui.generic.searchBox)(phrase, searchTermPlaceholder, mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root86 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root86); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes54;
    nodes54 = node.contents();
    oldNodes.replaceWith(nodes54);
  }));
  var result__ = Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get());
  var tmp19 = mobl.ref(result__);
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp19.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp19.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp19.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp19.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp19.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes55 = $("<span>");
  root85.append(nodes55);
  subs__.addSub((mobl.ui.generic.masterDetail)(tmp19, masterItem, detailItem, function(_, callback) {
    var root87 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root87); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes55;
    nodes55 = node.contents();
    oldNodes.replaceWith(nodes55);
  }));
  callback(root85); return subs__;
  
  
  return subs__;
};
mobl.ui.generic.progressStyle = 'mobl__ui__generic__progressStyle';
mobl.ui.generic.startLoading = function(loadingMessage, style) {
   var __this = this;
  var loading = mobl.$("<div id='progress' class='" + style + "'>" + loadingMessage + "</div>");
  
  mobl.$("body").prepend(loading);
};

mobl.ui.generic.endLoading = function() {
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
}(mobl.ui.generic));mobl.ui.generic.accordionStyle = 'mobl__ui__generic__accordionStyle';
mobl.ui.generic.activeSectionHeaderStyle = 'mobl__ui__generic__activeSectionHeaderStyle';
mobl.ui.generic.inActiveSectionHeaderStyle = 'mobl__ui__generic__inActiveSectionHeaderStyle';
mobl.ui.generic.activeSectionHeaderStyle = 'mobl__ui__generic__activeSectionHeaderStyle';
mobl.ui.generic.inActiveSectionHeaderStyle = 'mobl__ui__generic__inActiveSectionHeaderStyle';
mobl.ui.generic.inActiveSectionStyle = 'mobl__ui__generic__inActiveSectionStyle';
mobl.ui.generic.activeSectionStyle = 'mobl__ui__generic__activeSectionStyle';

mobl.ui.generic.accordion = function(sections, activeSection, elements, callback) {
  var root88 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(activeSection.get() ? activeSection.get() : sections.get().get(0)._1);
  var nodes56 = $("<span>");
  root88.append(nodes56);
  subs__.addSub((mobl.block)(mobl.ref(mobl.ui.generic.accordionStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root89 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node47 = mobl.loadingSpan();
    root89.append(node47);
    var list8;
    var listSubs8 = new mobl.CompSubscription();
    subs__.addSub(listSubs8);
    var renderList8 = function() {
      var subs__ = listSubs8;
      list8 = sections.get();
      list8.list(function(results8) {
        node47.empty();
        for(var i8 = 0; i8 < results8.length; i8++) {
          (function() {
            var iternode8 = $("<span>");
            node47.append(iternode8);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results8), i8), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results8), i8), "_2");
            var result__ = activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionHeaderStyle : mobl.ui.generic.inActiveSectionHeaderStyle;
            var tmp22 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp22.set(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionHeaderStyle : mobl.ui.generic.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp22.set(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionHeaderStyle : mobl.ui.generic.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(mobl.ui.generic.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp22.set(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionHeaderStyle : mobl.ui.generic.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(mobl.ui.generic.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp22.set(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionHeaderStyle : mobl.ui.generic.inActiveSectionHeaderStyle);
            }));
            
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = sectionName.get();
                             activeSection.set(result__);
                             if(callback && callback.apply) callback(); return;
                           };
            var tmp21 = mobl.ref(result__);
            
            var nodes57 = $("<span>");
            iternode8.append(nodes57);
            subs__.addSub((mobl.span)(tmp22, mobl.ref(null), tmp21, mobl.ref(null), function(_, callback) {
              var root90 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes58 = $("<span>");
              root90.append(nodes58);
              subs__.addSub((mobl.label)(sectionName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root91 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root91); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes58;
                nodes58 = node.contents();
                oldNodes.replaceWith(nodes58);
              }));
              callback(root90); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes57;
              nodes57 = node.contents();
              oldNodes.replaceWith(nodes57);
            }));
            var result__ = activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionStyle : mobl.ui.generic.inActiveSectionStyle;
            var tmp23 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp23.set(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionStyle : mobl.ui.generic.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp23.set(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionStyle : mobl.ui.generic.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(mobl.ui.generic.activeSectionStyle).addEventListener('change', function() {
              tmp23.set(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionStyle : mobl.ui.generic.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(mobl.ui.generic.inActiveSectionStyle).addEventListener('change', function() {
              tmp23.set(activeSection.get() == sectionName.get() ? mobl.ui.generic.activeSectionStyle : mobl.ui.generic.inActiveSectionStyle);
            }));
            
            var nodes59 = $("<span>");
            iternode8.append(nodes59);
            subs__.addSub((mobl.block)(tmp23, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root92 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes60 = $("<span>");
              root92.append(nodes60);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl18();
              }));
              
              function renderControl18() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root93 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root93); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes60;
                  nodes60 = node.contents();
                  oldNodes.replaceWith(nodes60);
                }));
              }
              renderControl18();
              callback(root92); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes59;
              nodes59 = node.contents();
              oldNodes.replaceWith(nodes59);
            }));
            
            var oldNodes = iternode8;
            iternode8 = iternode8.contents();
            oldNodes.replaceWith(iternode8);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list8.addEventListener('change', function() { listSubs8.unsubscribe(); renderList8(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs8.unsubscribe(); renderList8(true); }));
      });
    };
    renderList8();
    
    callback(root89); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes56;
    nodes56 = node.contents();
    oldNodes.replaceWith(nodes56);
  }));
  callback(root88); return subs__;
  
  return subs__;
};
mobl.ui.generic.tableStyle = 'mobl__ui__generic__tableStyle';
mobl.ui.generic.tdStyle = 'mobl__ui__generic__tdStyle';
mobl.ui.generic.trStyle = 'mobl__ui__generic__trStyle';
mobl.ui.generic.trStyle = 'mobl__ui__generic__trStyle';
mobl.ui.generic.trStyle = 'mobl__ui__generic__trStyle';
mobl.ui.generic.tdStyle = 'mobl__ui__generic__tdStyle';
mobl.ui.generic.tdStyle = 'mobl__ui__generic__tdStyle';
mobl.ui.generic.tdStyle = 'mobl__ui__generic__tdStyle';
mobl.ui.generic.tdStyle = 'mobl__ui__generic__tdStyle';
mobl.ui.generic.tdStyle = 'mobl__ui__generic__tdStyle';
mobl.ui.generic.tdStyle = 'mobl__ui__generic__tdStyle';
mobl.ui.generic.tdStyle = 'mobl__ui__generic__tdStyle';
mobl.ui.generic.tdStyle = 'mobl__ui__generic__tdStyle';

mobl.ui.generic.table = function(style, elements, callback) {
  var root94 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node48 = $("<table>");
  
  var ref71 = style;
  if(ref71.get() !== null) {
    node48.attr('class', ref71.get());
    subs__.addSub(ref71.addEventListener('change', function(_, ref, val) {
      node48.attr('class', val);
    }));
    
  }
  subs__.addSub(ref71.rebind());
  
  var nodes61 = $("<span>");
  node48.append(nodes61);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl19();
  }));
  
  function renderControl19() {
    subs__.addSub((elements)(function(elements, callback) {
      var root95 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root95); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes61;
      nodes61 = node.contents();
      oldNodes.replaceWith(nodes61);
    }));
  }
  renderControl19();
  root94.append(node48);
  callback(root94); return subs__;
  
  
  return subs__;
};

mobl.ui.generic.row = function(style, elements, callback) {
  var root96 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node49 = $("<tr>");
  
  var ref72 = style;
  if(ref72.get() !== null) {
    node49.attr('class', ref72.get());
    subs__.addSub(ref72.addEventListener('change', function(_, ref, val) {
      node49.attr('class', val);
    }));
    
  }
  subs__.addSub(ref72.rebind());
  
  var nodes62 = $("<span>");
  node49.append(nodes62);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl20();
  }));
  
  function renderControl20() {
    subs__.addSub((elements)(function(elements, callback) {
      var root97 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root97); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes62;
      nodes62 = node.contents();
      oldNodes.replaceWith(nodes62);
    }));
  }
  renderControl20();
  root96.append(node49);
  callback(root96); return subs__;
  
  
  return subs__;
};

mobl.ui.generic.cell = function(width, style, elements, callback) {
  var root98 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node50 = $("<td>");
  
  var ref73 = width;
  if(ref73.get() !== null) {
    node50.attr('width', ref73.get());
    subs__.addSub(ref73.addEventListener('change', function(_, ref, val) {
      node50.attr('width', val);
    }));
    
  }
  subs__.addSub(ref73.rebind());
  
  var ref74 = style;
  if(ref74.get() !== null) {
    node50.attr('class', ref74.get());
    subs__.addSub(ref74.addEventListener('change', function(_, ref, val) {
      node50.attr('class', val);
    }));
    
  }
  subs__.addSub(ref74.rebind());
  
  var nodes63 = $("<span>");
  node50.append(nodes63);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl21();
  }));
  
  function renderControl21() {
    subs__.addSub((elements)(function(elements, callback) {
      var root99 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root99); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes63;
      nodes63 = node.contents();
      oldNodes.replaceWith(nodes63);
    }));
  }
  renderControl21();
  root98.append(node50);
  callback(root98); return subs__;
  
  
  return subs__;
};

mobl.ui.generic.col = function(width, style, elements, callback) {
  var root100 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node51 = $("<td>");
  
  var ref75 = width;
  if(ref75.get() !== null) {
    node51.attr('width', ref75.get());
    subs__.addSub(ref75.addEventListener('change', function(_, ref, val) {
      node51.attr('width', val);
    }));
    
  }
  subs__.addSub(ref75.rebind());
  
  var ref76 = style;
  if(ref76.get() !== null) {
    node51.attr('class', ref76.get());
    subs__.addSub(ref76.addEventListener('change', function(_, ref, val) {
      node51.attr('class', val);
    }));
    
  }
  subs__.addSub(ref76.rebind());
  
  var nodes64 = $("<span>");
  node51.append(nodes64);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl22();
  }));
  
  function renderControl22() {
    subs__.addSub((elements)(function(elements, callback) {
      var root101 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root101); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes64;
      nodes64 = node.contents();
      oldNodes.replaceWith(nodes64);
    }));
  }
  renderControl22();
  root100.append(node51);
  callback(root100); return subs__;
  
  
  return subs__;
};

mobl.ui.generic.headerCol = function(width, style, elements, callback) {
  var root102 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node52 = $("<td>");
  
  var ref77 = width;
  if(ref77.get() !== null) {
    node52.attr('width', ref77.get());
    subs__.addSub(ref77.addEventListener('change', function(_, ref, val) {
      node52.attr('width', val);
    }));
    
  }
  subs__.addSub(ref77.rebind());
  
  var ref78 = style;
  if(ref78.get() !== null) {
    node52.attr('class', ref78.get());
    subs__.addSub(ref78.addEventListener('change', function(_, ref, val) {
      node52.attr('class', val);
    }));
    
  }
  subs__.addSub(ref78.rebind());
  
  
  var node53 = $("<strong>");
  
  var nodes65 = $("<span>");
  node53.append(nodes65);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl23();
  }));
  
  function renderControl23() {
    subs__.addSub((elements)(function(elements, callback) {
      var root103 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root103); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes65;
      nodes65 = node.contents();
      oldNodes.replaceWith(nodes65);
    }));
  }
  renderControl23();
  node52.append(node53);
  root102.append(node52);
  callback(root102); return subs__;
  
  
  
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
}(mobl.ui.generic));