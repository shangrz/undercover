mobl.provides('undercover');
mobl.provides('mobl.ui.generic');
mobl.provides('mobl.ui');
mobl.provides('ui');
mobl.provides('undercover');
mobl.provides('mobl');
persistence.debug = false;undercover.Unit = mobl.defineType('undercover.Unit', null, {id: null,text: null,isUnderCover: null});


undercover.root = function(callback, screenCallback) {
  var root3180 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes2817 = $("<span>");
  root3180.append(nodes2817);
  subs__.addSub((ui.header)(mobl.ref("谁是卧底"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root3181 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root3181); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes2817;
    nodes2817 = node.contents();
    oldNodes.replaceWith(nodes2817);
  }));
  
  var gameNum = mobl.ref(7);
  
  var undercoverNum = mobl.ref(2);
  var nodes2818 = $("<span>");
  root3180.append(nodes2818);
  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
    var root3182 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes2819 = $("<span>");
    root3182.append(nodes2819);
    subs__.addSub((mobl.label)(mobl.ref("游戏人数："), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root3183 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3183); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2819;
      nodes2819 = node.contents();
      oldNodes.replaceWith(nodes2819);
    }));
    var nodes2820 = $("<span>");
    root3182.append(nodes2820);
    subs__.addSub((ui.numField)(gameNum, mobl.ref(null), mobl.ref("游戏人数"), mobl.ref(undercover.num_validate), mobl.ref(ui.textFieldStyle), mobl.ref(ui.textFieldInvalidStyle), mobl.ref(false), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root3184 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3184); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2820;
      nodes2820 = node.contents();
      oldNodes.replaceWith(nodes2820);
    }));
    callback(root3182); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2818;
    nodes2818 = node.contents();
    oldNodes.replaceWith(nodes2818);
  }));
  var nodes2821 = $("<span>");
  root3180.append(nodes2821);
  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
    var root3185 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes2822 = $("<span>");
    root3185.append(nodes2822);
    subs__.addSub((mobl.label)(mobl.ref("卧底人数："), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root3186 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3186); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2822;
      nodes2822 = node.contents();
      oldNodes.replaceWith(nodes2822);
    }));
    var nodes2823 = $("<span>");
    root3185.append(nodes2823);
    subs__.addSub((ui.numField)(undercoverNum, mobl.ref(null), mobl.ref("卧底人数"), mobl.ref(undercover.uc_num_validate), mobl.ref(ui.textFieldStyle), mobl.ref(ui.textFieldInvalidStyle), mobl.ref(false), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root3187 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3187); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2823;
      nodes2823 = node.contents();
      oldNodes.replaceWith(nodes2823);
    }));
    callback(root3185); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2821;
    nodes2821 = node.contents();
    oldNodes.replaceWith(nodes2821);
  }));
  var nodes2824 = $("<span>");
  root3180.append(nodes2824);
  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
    var root3188 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('undercover.infoScreen', [gameNum, undercoverNum, mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp891 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp883 = mobl.ref(result__);
    
    var nodes2825 = $("<span>");
    root3188.append(nodes2825);
    subs__.addSub((ui.sideButton)(mobl.ref("确定"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp883, function(_, callback) {
      var root3189 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3189); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2825;
      nodes2825 = node.contents();
      oldNodes.replaceWith(nodes2825);
    }));
    callback(root3188); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2824;
    nodes2824 = node.contents();
    oldNodes.replaceWith(nodes2824);
  }));
  callback(root3180); return subs__;
  
  
  
  
  return subs__;
};

undercover.infoScreen = function(gameNum, undercoverNum, callback, screenCallback) {
  var root3190 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var game_status = mobl.ref("准备中");
  
  var game_status_desc = mobl.ref("查看自己的词语,每个只能显示一次！！！");
  var nodes2826 = $("<span>");
  root3190.append(nodes2826);
  subs__.addSub((ui.header)(mobl.ref("谁是卧底："), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root3191 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root3191); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes2826;
    nodes2826 = node.contents();
    oldNodes.replaceWith(nodes2826);
  }));
  var nodes2827 = $("<span>");
  root3190.append(nodes2827);
  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
    var root3192 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = "目前游戏状态:	" + game_status.get();
    var tmp884 = mobl.ref(result__);
    subs__.addSub(game_status.addEventListener('change', function() {
      tmp884.set("目前游戏状态:	" + game_status.get());
    }));
    
    var nodes2828 = $("<span>");
    root3192.append(nodes2828);
    subs__.addSub((mobl.label)(tmp884, mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root3193 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3193); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2828;
      nodes2828 = node.contents();
      oldNodes.replaceWith(nodes2828);
    }));
    
    var node373 = $("<br>");
    
    root3192.append(node373);
    var result__ = "说明:	" + game_status_desc.get();
    var tmp885 = mobl.ref(result__);
    subs__.addSub(game_status_desc.addEventListener('change', function() {
      tmp885.set("说明:	" + game_status_desc.get());
    }));
    
    var nodes2829 = $("<span>");
    root3192.append(nodes2829);
    subs__.addSub((mobl.label)(tmp885, mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root3194 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3194); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2829;
      nodes2829 = node.contents();
      oldNodes.replaceWith(nodes2829);
    }));
    callback(root3192); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2827;
    nodes2827 = node.contents();
    oldNodes.replaceWith(nodes2827);
  }));
  var nodes2830 = $("<span>");
  root3190.append(nodes2830);
  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
    var root3195 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = "游戏人数：" + gameNum.get().toString() + " ";
    var tmp886 = mobl.ref(result__);
    subs__.addSub(gameNum.addEventListener('change', function() {
      tmp886.set("游戏人数：" + gameNum.get().toString() + " ");
    }));
    
    var nodes2831 = $("<span>");
    root3195.append(nodes2831);
    subs__.addSub((mobl.label)(tmp886, mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root3196 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3196); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2831;
      nodes2831 = node.contents();
      oldNodes.replaceWith(nodes2831);
    }));
    var result__ = "卧底人数：" + undercoverNum.get().toString();
    var tmp887 = mobl.ref(result__);
    subs__.addSub(undercoverNum.addEventListener('change', function() {
      tmp887.set("卧底人数：" + undercoverNum.get().toString());
    }));
    
    var nodes2832 = $("<span>");
    root3195.append(nodes2832);
    subs__.addSub((mobl.label)(tmp887, mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root3197 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3197); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2832;
      nodes2832 = node.contents();
      oldNodes.replaceWith(nodes2832);
    }));
    callback(root3195); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2830;
    nodes2830 = node.contents();
    oldNodes.replaceWith(nodes2830);
  }));
  
  var units = mobl.ref(undercover.getUnitList(gameNum.get(), undercoverNum.get()));
  
  var i = mobl.ref(1);
  var nodes2833 = $("<span>");
  root3190.append(nodes2833);
  subs__.addSub((ui.group)(function(_, callback) {
    var root3198 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var string1 = mobl.ref("身份,不可点");
    
    var isStart = mobl.ref(false);
    
    var node374 = mobl.loadingSpan();
    root3198.append(node374);
    var list2247;
    var listSubs177 = new mobl.CompSubscription();
    subs__.addSub(listSubs177);
    var renderList177 = function() {
      var subs__ = listSubs177;
      list2247 = units.get();
      list2247.list(function(results309) {
        node374.empty();
        for(var i4751 = 0; i4751 < results309.length; i4751++) {
          (function() {
            var iternode177 = $("<span>");
            node374.append(iternode177);
            var unit;
            unit = mobl.ref(mobl.ref(results309), i4751);
            var nodes2834 = $("<span>");
            iternode177.append(nodes2834);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
              var root3199 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var ss = mobl.ref("未知");
              
              var isShow = mobl.ref(false);
              
              var show = mobl.ref("显示");
              var nodes2835 = $("<span>");
              root3199.append(nodes2835);
              subs__.addSub((mobl.label)(mobl.ref(unit, 'id'), mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root3200 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root3200); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes2835;
                nodes2835 = node.contents();
                oldNodes.replaceWith(nodes2835);
              }));
              var nodes2836 = $("<span>");
              root3199.append(nodes2836);
              subs__.addSub((mobl.label)(mobl.ref(" : "), mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root3201 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root3201); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes2836;
                nodes2836 = node.contents();
                oldNodes.replaceWith(nodes2836);
              }));
              var nodes2837 = $("<span>");
              root3199.append(nodes2837);
              subs__.addSub((mobl.label)(ss, mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root3202 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root3202); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes2837;
                nodes2837 = node.contents();
                oldNodes.replaceWith(nodes2837);
              }));
              var result__ = function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = !isShow.get();
                               if(result__) {
                                 var result__ = mobl.alert(unit.get().text);
                                 var result__ = "已显示";
                                 show.set(result__);
                                 var result__ = true;
                                 isShow.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               } else {
                                 {
                                   if(callback && callback.apply) callback(); return;
                                 }
                               }
                             };
              var tmp888 = mobl.ref(result__);
              
              var nodes2838 = $("<span>");
              root3199.append(nodes2838);
              subs__.addSub((ui.sideButton)(show, mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp888, function(_, callback) {
                var root3203 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root3203); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes2838;
                nodes2838 = node.contents();
                oldNodes.replaceWith(nodes2838);
              }));
              var result__ = function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = isStart.get();
                               if(result__) {
                                 var result__ = mobl.alert(undercover.isUnderCover(unit.get().isUnderCover));
                                 var result__ = undercover.isUnderCover(unit.get().isUnderCover);
                                 ss.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               } else {
                                 {
                                   if(callback && callback.apply) callback(); return;
                                 }
                               }
                             };
              var tmp889 = mobl.ref(result__);
              
              var nodes2839 = $("<span>");
              root3199.append(nodes2839);
              subs__.addSub((ui.sideButton)(string1, mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp889, function(_, callback) {
                var root3204 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root3204); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes2839;
                nodes2839 = node.contents();
                oldNodes.replaceWith(nodes2839);
              }));
              callback(root3199); return subs__;
              
              
              
              
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes2834;
              nodes2834 = node.contents();
              oldNodes.replaceWith(nodes2834);
            }));
            
            var oldNodes = iternode177;
            iternode177 = iternode177.contents();
            oldNodes.replaceWith(iternode177);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list2247.addEventListener('change', function() { listSubs177.unsubscribe(); renderList177(true); }));
        subs__.addSub(units.addEventListener('change', function() { listSubs177.unsubscribe(); renderList177(true); }));
      });
    };
    renderList177();
    
    var nodes2840 = $("<span>");
    root3198.append(nodes2840);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3205 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var btnString = mobl.ref("开始游戏");
      
      var labelString = mobl.ref("点击开始游戏后，才能显示身份！");
      var nodes2841 = $("<span>");
      root3205.append(nodes2841);
      subs__.addSub((mobl.label)(labelString, mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3206 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3206); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2841;
        nodes2841 = node.contents();
        oldNodes.replaceWith(nodes2841);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = "身份";
                       string1.set(result__);
                       var result__ = true;
                       isStart.set(result__);
                       var result__ = "游戏进行中";
                       game_status.set(result__);
                       var result__ = "点击身份查看出局者身份";
                       game_status_desc.set(result__);
                       var result__ = "游戏中";
                       btnString.set(result__);
                       var result__ = "游戏开始了";
                       labelString.set(result__);
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp890 = mobl.ref(result__);
      
      var nodes2842 = $("<span>");
      root3205.append(nodes2842);
      subs__.addSub((ui.sideButton)(btnString, mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp890, function(_, callback) {
        var root3207 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3207); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2842;
        nodes2842 = node.contents();
        oldNodes.replaceWith(nodes2842);
      }));
      callback(root3205); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2840;
      nodes2840 = node.contents();
      oldNodes.replaceWith(nodes2840);
    }));
    callback(root3198); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2833;
    nodes2833 = node.contents();
    oldNodes.replaceWith(nodes2833);
  }));
  callback(root3190); return subs__;
  
  
  
  
  return subs__;
};
undercover.isUnderCover = function(isUc) {
   var __this = this;
  if(isUc) {
    return "卧底";
  } else {
    return "不是卧底";
  }
};

undercover.getalist = function(gameNum, list) {
   var __this = this;
  var ids = [];
  
  var coll608 = mobl.range(1, gameNum + 1);
  var length360 = coll608.length;
  for(var i4752 = 0; i4752 < length360; i4752++) {
    var n;
    n = coll608.get(i4752);
    if(!list.contains(n)) {
      ids.push(n);
    } else {
      
    }
  }
  return ids;
};

undercover.getUnitList = function(gameNum, ucNum) {
   var __this = this;
  var rs = [];
  
  var texts = ["中秋", "端午"];
  
  var normal_text = texts.get(0);
  
  var uc_text = texts.get(1);
  
  var uc_ids = [];
  
  var coll609 = mobl.range(0, ucNum);
  var length361 = coll609.length;
  for(var i4753 = 0; i4753 < length361; i4753++) {
    var n;
    n = coll609.get(i4753);
    var ids = undercover.getalist(gameNum, uc_ids);
    
    var rnum = mobl.random(ids.length - 1);
    
    var unum = ids.get(rnum);
    
    uc_ids.push(unum);
  }
  mobl.log(uc_ids);
  var coll610 = mobl.range(1, gameNum + 1);
  var length362 = coll610.length;
  for(var i4754 = 0; i4754 < length362; i4754++) {
    var n;
    n = coll610.get(i4754);
    var item = [];
    
    item.id = n;
    if(uc_ids.contains(n)) {
      item.text = uc_text;
      item.isUnderCover = true;
    } else {
      item.text = normal_text;
      item.isUnderCover = false;
    }
    rs.push(item);
  }
  return rs;
};

undercover.num_validate = function(n) {
   var __this = this;
  if(n > 0) {
    return "";
  } else {
    return "请输入数字，不能为0";
  }
};

undercover.uc_num_validate = function(n) {
   var __this = this;
  if(n > 1) {
    return "";
  } else {
    return "请输入数字，卧底大于等于1人";
  }
};

