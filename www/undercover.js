mobl.provides('undercover');
mobl.provides('mobl.ui.generic');
mobl.provides('mobl.ui');
mobl.provides('ui');
mobl.provides('undercover');
mobl.provides('mobl');
persistence.debug = false;undercover.Unit = mobl.defineType('undercover.Unit', null, {id: null,text: null,isUnderCover: null});


undercover.root = function(callback, screenCallback) {
  var root3276 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes2907 = $("<span>");
  root3276.append(nodes2907);
  subs__.addSub((ui.header)(mobl.ref("谁是卧底"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root3277 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root3277); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes2907;
    nodes2907 = node.contents();
    oldNodes.replaceWith(nodes2907);
  }));
  
  var gameNum = mobl.ref(7);
  
  var undercoverNum = mobl.ref(2);
  
  var normalString = mobl.ref("");
  
  var ucString = mobl.ref("");
  var nodes2908 = $("<span>");
  root3276.append(nodes2908);
  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
    var root3278 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes2909 = $("<span>");
    root3278.append(nodes2909);
    subs__.addSub((mobl.label)(mobl.ref("游戏人数："), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root3279 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3279); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2909;
      nodes2909 = node.contents();
      oldNodes.replaceWith(nodes2909);
    }));
    var nodes2910 = $("<span>");
    root3278.append(nodes2910);
    subs__.addSub((ui.numField)(gameNum, mobl.ref(null), mobl.ref("游戏人数"), mobl.ref(undercover.num_validate), mobl.ref(ui.textFieldStyle), mobl.ref(ui.textFieldInvalidStyle), mobl.ref(false), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root3280 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3280); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2910;
      nodes2910 = node.contents();
      oldNodes.replaceWith(nodes2910);
    }));
    callback(root3278); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2908;
    nodes2908 = node.contents();
    oldNodes.replaceWith(nodes2908);
  }));
  var nodes2911 = $("<span>");
  root3276.append(nodes2911);
  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
    var root3281 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes2912 = $("<span>");
    root3281.append(nodes2912);
    subs__.addSub((mobl.label)(mobl.ref("卧底人数："), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root3282 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3282); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2912;
      nodes2912 = node.contents();
      oldNodes.replaceWith(nodes2912);
    }));
    var nodes2913 = $("<span>");
    root3281.append(nodes2913);
    subs__.addSub((ui.numField)(undercoverNum, mobl.ref(null), mobl.ref("卧底人数"), mobl.ref(undercover.uc_num_validate), mobl.ref(ui.textFieldStyle), mobl.ref(ui.textFieldInvalidStyle), mobl.ref(false), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root3283 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3283); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2913;
      nodes2913 = node.contents();
      oldNodes.replaceWith(nodes2913);
    }));
    callback(root3281); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2911;
    nodes2911 = node.contents();
    oldNodes.replaceWith(nodes2911);
  }));
  var nodes2914 = $("<span>");
  root3276.append(nodes2914);
  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
    var root3284 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes2915 = $("<span>");
    root3284.append(nodes2915);
    subs__.addSub((mobl.label)(mobl.ref("普通词："), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root3285 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3285); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2915;
      nodes2915 = node.contents();
      oldNodes.replaceWith(nodes2915);
    }));
    var nodes2916 = $("<span>");
    root3284.append(nodes2916);
    subs__.addSub((ui.textField)(normalString, mobl.ref("普通词"), mobl.ref(null), mobl.ref("text"), mobl.ref(null), mobl.ref(ui.textFieldStyle), mobl.ref(ui.textFieldInvalidStyle), mobl.ref(false), mobl.ref(true), mobl.ref(true), mobl.ref(true), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root3286 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3286); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2916;
      nodes2916 = node.contents();
      oldNodes.replaceWith(nodes2916);
    }));
    callback(root3284); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2914;
    nodes2914 = node.contents();
    oldNodes.replaceWith(nodes2914);
  }));
  var nodes2917 = $("<span>");
  root3276.append(nodes2917);
  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
    var root3287 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes2918 = $("<span>");
    root3287.append(nodes2918);
    subs__.addSub((mobl.label)(mobl.ref("卧底词："), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root3288 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3288); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2918;
      nodes2918 = node.contents();
      oldNodes.replaceWith(nodes2918);
    }));
    var nodes2919 = $("<span>");
    root3287.append(nodes2919);
    subs__.addSub((ui.textField)(ucString, mobl.ref("卧底词"), mobl.ref(null), mobl.ref("text"), mobl.ref(null), mobl.ref(ui.textFieldStyle), mobl.ref(ui.textFieldInvalidStyle), mobl.ref(false), mobl.ref(true), mobl.ref(true), mobl.ref(true), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root3289 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3289); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2919;
      nodes2919 = node.contents();
      oldNodes.replaceWith(nodes2919);
    }));
    callback(root3287); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2917;
    nodes2917 = node.contents();
    oldNodes.replaceWith(nodes2917);
  }));
  var nodes2920 = $("<span>");
  root3276.append(nodes2920);
  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
    var root3290 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('undercover.infoScreen', [gameNum, undercoverNum, normalString, ucString, mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp918 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp910 = mobl.ref(result__);
    
    var nodes2921 = $("<span>");
    root3290.append(nodes2921);
    subs__.addSub((ui.sideButton)(mobl.ref("确定"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp910, function(_, callback) {
      var root3291 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3291); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2921;
      nodes2921 = node.contents();
      oldNodes.replaceWith(nodes2921);
    }));
    callback(root3290); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2920;
    nodes2920 = node.contents();
    oldNodes.replaceWith(nodes2920);
  }));
  callback(root3276); return subs__;
  
  
  
  
  
  
  return subs__;
};

undercover.infoScreen = function(gameNum, undercoverNum, normalString, ucString, callback, screenCallback) {
  var root3292 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var game_status = mobl.ref("准备中");
  
  var game_status_desc = mobl.ref("查看自己的词语,每个只能显示一次！！！");
  var nodes2922 = $("<span>");
  root3292.append(nodes2922);
  subs__.addSub((ui.header)(mobl.ref("谁是卧底："), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root3293 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root3293); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes2922;
    nodes2922 = node.contents();
    oldNodes.replaceWith(nodes2922);
  }));
  var nodes2923 = $("<span>");
  root3292.append(nodes2923);
  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
    var root3294 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = "目前游戏状态:	" + game_status.get();
    var tmp911 = mobl.ref(result__);
    subs__.addSub(game_status.addEventListener('change', function() {
      tmp911.set("目前游戏状态:	" + game_status.get());
    }));
    
    var nodes2924 = $("<span>");
    root3294.append(nodes2924);
    subs__.addSub((mobl.label)(tmp911, mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root3295 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3295); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2924;
      nodes2924 = node.contents();
      oldNodes.replaceWith(nodes2924);
    }));
    
    var node379 = $("<br>");
    
    root3294.append(node379);
    var result__ = "说明:	" + game_status_desc.get();
    var tmp912 = mobl.ref(result__);
    subs__.addSub(game_status_desc.addEventListener('change', function() {
      tmp912.set("说明:	" + game_status_desc.get());
    }));
    
    var nodes2925 = $("<span>");
    root3294.append(nodes2925);
    subs__.addSub((mobl.label)(tmp912, mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root3296 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3296); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2925;
      nodes2925 = node.contents();
      oldNodes.replaceWith(nodes2925);
    }));
    callback(root3294); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2923;
    nodes2923 = node.contents();
    oldNodes.replaceWith(nodes2923);
  }));
  var nodes2926 = $("<span>");
  root3292.append(nodes2926);
  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
    var root3297 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = "游戏人数：" + gameNum.get().toString() + " ";
    var tmp913 = mobl.ref(result__);
    subs__.addSub(gameNum.addEventListener('change', function() {
      tmp913.set("游戏人数：" + gameNum.get().toString() + " ");
    }));
    
    var nodes2927 = $("<span>");
    root3297.append(nodes2927);
    subs__.addSub((mobl.label)(tmp913, mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root3298 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3298); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2927;
      nodes2927 = node.contents();
      oldNodes.replaceWith(nodes2927);
    }));
    var result__ = "卧底人数：" + undercoverNum.get().toString();
    var tmp914 = mobl.ref(result__);
    subs__.addSub(undercoverNum.addEventListener('change', function() {
      tmp914.set("卧底人数：" + undercoverNum.get().toString());
    }));
    
    var nodes2928 = $("<span>");
    root3297.append(nodes2928);
    subs__.addSub((mobl.label)(tmp914, mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root3299 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root3299); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2928;
      nodes2928 = node.contents();
      oldNodes.replaceWith(nodes2928);
    }));
    callback(root3297); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2926;
    nodes2926 = node.contents();
    oldNodes.replaceWith(nodes2926);
  }));
  
  var units = mobl.ref(undercover.getUnitList(gameNum.get(), undercoverNum.get(), normalString.get(), ucString.get()));
  
  var i = mobl.ref(1);
  var nodes2929 = $("<span>");
  root3292.append(nodes2929);
  subs__.addSub((ui.group)(function(_, callback) {
    var root3300 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var string1 = mobl.ref("身份,不可点");
    
    var isStart = mobl.ref(false);
    
    var node380 = mobl.loadingSpan();
    root3300.append(node380);
    var list2406;
    var listSubs180 = new mobl.CompSubscription();
    subs__.addSub(listSubs180);
    var renderList180 = function() {
      var subs__ = listSubs180;
      list2406 = units.get();
      list2406.list(function(results330) {
        node380.empty();
        for(var i4919 = 0; i4919 < results330.length; i4919++) {
          (function() {
            var iternode180 = $("<span>");
            node380.append(iternode180);
            var unit;
            unit = mobl.ref(mobl.ref(results330), i4919);
            var nodes2930 = $("<span>");
            iternode180.append(nodes2930);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
              var root3301 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              
              var ss = mobl.ref("未知");
              
              var isShow = mobl.ref(false);
              
              var show = mobl.ref("显示");
              var nodes2931 = $("<span>");
              root3301.append(nodes2931);
              subs__.addSub((mobl.label)(mobl.ref(unit, 'id'), mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root3302 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root3302); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes2931;
                nodes2931 = node.contents();
                oldNodes.replaceWith(nodes2931);
              }));
              var nodes2932 = $("<span>");
              root3301.append(nodes2932);
              subs__.addSub((mobl.label)(mobl.ref(" : "), mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root3303 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root3303); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes2932;
                nodes2932 = node.contents();
                oldNodes.replaceWith(nodes2932);
              }));
              var nodes2933 = $("<span>");
              root3301.append(nodes2933);
              subs__.addSub((mobl.label)(ss, mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root3304 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root3304); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes2933;
                nodes2933 = node.contents();
                oldNodes.replaceWith(nodes2933);
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
              var tmp915 = mobl.ref(result__);
              
              var nodes2934 = $("<span>");
              root3301.append(nodes2934);
              subs__.addSub((ui.sideButton)(show, mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp915, function(_, callback) {
                var root3305 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root3305); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes2934;
                nodes2934 = node.contents();
                oldNodes.replaceWith(nodes2934);
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
              var tmp916 = mobl.ref(result__);
              
              var nodes2935 = $("<span>");
              root3301.append(nodes2935);
              subs__.addSub((ui.sideButton)(string1, mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp916, function(_, callback) {
                var root3306 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root3306); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes2935;
                nodes2935 = node.contents();
                oldNodes.replaceWith(nodes2935);
              }));
              callback(root3301); return subs__;
              
              
              
              
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes2930;
              nodes2930 = node.contents();
              oldNodes.replaceWith(nodes2930);
            }));
            
            var oldNodes = iternode180;
            iternode180 = iternode180.contents();
            oldNodes.replaceWith(iternode180);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list2406.addEventListener('change', function() { listSubs180.unsubscribe(); renderList180(true); }));
        subs__.addSub(units.addEventListener('change', function() { listSubs180.unsubscribe(); renderList180(true); }));
      });
    };
    renderList180();
    
    var nodes2936 = $("<span>");
    root3300.append(nodes2936);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root3307 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var btnString = mobl.ref("开始游戏");
      
      var labelString = mobl.ref("点击开始游戏后，才能显示身份！");
      var nodes2937 = $("<span>");
      root3307.append(nodes2937);
      subs__.addSub((mobl.label)(labelString, mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3308 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3308); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2937;
        nodes2937 = node.contents();
        oldNodes.replaceWith(nodes2937);
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
      var tmp917 = mobl.ref(result__);
      
      var nodes2938 = $("<span>");
      root3307.append(nodes2938);
      subs__.addSub((ui.sideButton)(btnString, mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp917, function(_, callback) {
        var root3309 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3309); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2938;
        nodes2938 = node.contents();
        oldNodes.replaceWith(nodes2938);
      }));
      callback(root3307); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2936;
      nodes2936 = node.contents();
      oldNodes.replaceWith(nodes2936);
    }));
    callback(root3300); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2929;
    nodes2929 = node.contents();
    oldNodes.replaceWith(nodes2929);
  }));
  callback(root3292); return subs__;
  
  
  
  
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
  
  var coll629 = mobl.range(1, gameNum + 1);
  var length369 = coll629.length;
  for(var i4920 = 0; i4920 < length369; i4920++) {
    var n;
    n = coll629.get(i4920);
    if(!list.contains(n)) {
      ids.push(n);
    } else {
      
    }
  }
  return ids;
};

undercover.getUnitList = function(gameNum, ucNum, normalString, ucString) {
   var __this = this;
  var rs = [];
  
  var uc_ids = [];
  
  var coll630 = mobl.range(0, ucNum);
  var length370 = coll630.length;
  for(var i4921 = 0; i4921 < length370; i4921++) {
    var n;
    n = coll630.get(i4921);
    var ids = undercover.getalist(gameNum, uc_ids);
    
    var rnum = mobl.random(ids.length - 1);
    
    var unum = ids.get(rnum);
    
    uc_ids.push(unum);
  }
  mobl.log(uc_ids);
  var coll631 = mobl.range(1, gameNum + 1);
  var length371 = coll631.length;
  for(var i4922 = 0; i4922 < length371; i4922++) {
    var n;
    n = coll631.get(i4922);
    var item = [];
    
    item.id = n;
    if(uc_ids.contains(n)) {
      item.text = ucString;
      item.isUnderCover = true;
    } else {
      item.text = normalString;
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
    return "请输入数字，不能为0!";
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

