// 自适应
$(function(){
  var wWidth = $(window).width();
  var wHeight = $(window).height();
  if (wWidth<=1366) {
    $("#indexBody").addClass("min").css("height",wHeight+"px");
  }
  $(window).resize(function(){
    var wWidth = $(window).width();
    var wHeight = $(window).height();
    if (wWidth<=1366) {
        $("#indexBody").addClass("min").css("height",wHeight+"px");
    }
  })
});


$(function(){

    //信息公开切换
    $('.xxjs_form_con').hover(function(){
        $(this).find('.hover_box').show(400);
    },function(){
        // $('.hover_box').eq($('.xxjs_form_con').index(this)).hide()
        $('.hover_box').hide();
    })

    backFirst($(".in-main-rt"),$(".in-main-rt a"),0);//首页左侧边栏
    backFirst($(".in-main-lf ul"),$(".in-main-lf ul li"),0);//首页右侧边栏
    backFirst($(".hd-lf-bot"),$(".hd-lf-bot a"),0);//互动服务
    backFirst($(".lb-lf-bot:first"),$(".lb-lf-bot:first a"),0);//列表页
    // backFirst($(".z-lf-bot"),$(".z-lf-bot>a"),1);//政务公开
    function backFirst(parent,child,index){
        parent.hover(function(){
            child.mouseover(function(){
                $(this).addClass("on").siblings().removeClass("on");
            });
        },function(){
            child.eq(index).addClass("on").siblings().removeClass("on");
        });
    }
});





$(function() {
// var mark = true;
// $(".hd-search a").click(function(){
//     // if (mark) {
//         $(".hd-search input").css({"height":"37px","border":"1px solid #e7e5e5","padding":"0px 8px"}).animate({"width":"100px"},200);
//     //     mark = false;
//     // }else{
//     //     $(".hd-search input").animate({"width":"0px"},200).css({"height":"37px","border":"none","padding-left":"0px"});
//     //     mark = true;
//     // }
// });

// 字符串限制
    txtLimit($(".zw-con-d ul li a"), 40, '...');
    txtLimit($(".hd-con-d ul li a"), 40, '...');
    txtLimit($(".lb-con-d ul li a"), 40, '...');

    function txtLimit(div, num, point) {
        for (var i = 0; i < div.length; i++) {
            var news_txt = div.eq(i).text();
            if (news_txt.length >= num) {
                var txt = news_txt.substr(0, num) + point;
                div.eq(i).text(txt);
            }
        }
    }

    addHref($('.top2-cpn-hd div p'),48,'...');
    function addHref(div, num, point) {
        var news_txt = div.text();
        if (news_txt.length >= num) {
            var txt = news_txt.substr(0, num) + point;
            div.text(txt);
            div.append('<a href="">[详细]</a>');
        }
    }

//子目录展开
// $("#z-lf-bot .lf-bot-a").hover(function(){
//     $("#z-lf-bot .zk-ul").hide();
//     $(this).addClass("on").siblings(".lf-bot-a").removeClass("on");
//     $(this).next(".zk-table").slideToggle().siblings(".zk-table").slideUp();
// });
levelExpan($("#z-lf-bot1"),$("#z-lf-bot1 .lf-bot-a"),1);
function levelExpan(parent,child,index){
    parent.hover(function(){
        child.hover(function(){
            $(this).addClass("on").siblings("a").removeClass("on");
            $(this).find("span").css("background","url('images/zw-bt.png') center no-repeat");
            if (parent.find(".zk-table").css("display") == "block") {
                child.eq(index).find("span").css("background","url('images/zw-bt2.png') center no-repeat");
            }else{
                child.eq(index).find("span").css("background","url('images/zw-span-bg1.png') center no-repeat");
            }
            if ($(this).hasClass("lf-bot-aon")) {
                if($(this).next(".zk-table").css("display") == "block"){
                    $(this).find("span").css("background","url('images/zw-span-bg2.png') center no-repeat");
                }else{
                    $(this).find("span").css("background","url('images/zw-bt.png') center no-repeat");
                }
            }
        },function(){
            child.find("span").css("background","url('images/zw-span-bg1.png') center no-repeat");
            if ($(this).hasClass("lf-bot-aon")) {
                if($(this).next(".zk-table").css("display") == "block"){
                    $(this).find("span").css("background","url('images/zw-bt2.png') center no-repeat");
                }
            }
            if (parent.find(".zk-table").css("display") == "block") {
                child.eq(index).find("span").css("background","url('images/zw-span-bg2.png') center no-repeat");
            }else{
                child.eq(index).find("span").css("background","url('images/zw-bt2.png') center no-repeat");
            }
        });
    },function(){
        child.find("span").css("background","url('images/zw-span-bg1.png') center no-repeat");
        child.eq(index).addClass("on").siblings().removeClass("on");
        if(child.eq(index).next(".zk-table").css("display") == "block"){
            child.eq(index).find("span").css("background","url('images/zw-span-bg2.png') center no-repeat");
        }else{
            child.eq(index).find("span").css("background","url('images/zw-bt.png') center no-repeat");
        }
    });
}
$("#z-lf-bot1 .lf-bot-aon").click(function(){
    if($(this).next(".zk-table").css("display") == "block"){
        $(this).find("span").css("background","url('images/zw-bt.png') center no-repeat");
        $(this).next(".zk-table").slideUp();
    }else{
        $(this).find("span").css("background","url('images/zw-span-bg2.png') center no-repeat");
        $(this).next(".zk-table").slideDown();
    }
})
$("#z-lf-bot1 .yj-tit").click(function(){
    $(this).next().slideToggle().parents("li").siblings().find(".zk-ul").slideUp();
});

levelExpan1($("#z-lf-bot"),$("#z-lf-bot .lf-bot-aon"),3);

function levelExpan1(parent,child,index){
    // parent.mouseover(function(){
    //     $("#z-lf-bot .lf-bot-aon").each(function(){
    //         if ($(this).next().css("display") == "block") {
    //              $(this).removeClass("on on1 active active1 active2 on3").addClass("active2");
    //         }else{
    //            $(this).removeClass("on on1 active active1 active2 on3").addClass("avtive1");
    //         }
    //     });
    // });
    // $("#z-lf-bot .lf-bot-a").each(function(){
    //     $(this).hover(function(){
    //         var e=getEvent();
    //     if(window.event){
    //         //e.returnValue=false;//阻止自身行为
    //         e.cancelBubble=true;//阻止冒泡
    //      }else if(e.preventDefault){
    //         //e.preventDefault();//阻止自身行为
    //         e.stopPropagation();//阻止冒泡
    //      }
    //         $(this).addClass("on").siblings("a").removeClass("on");
    //         if ($(this).hasClass("lf-bot-aon")) {
    //             $("#z-lf-bot .lf-bot-aon").each(function(){
    //                 if ($(this).next().css("display") == "block") {
    //                      $(this).removeClass("on on1 active active1 active2 on3").addClass("active2");
    //                 }else{
    //                    $(this).removeClass("on on1 active active1 active2 on3").addClass("avtive1");
    //                 }
    //             });
    //             if ($(this).next().css("display") == "block") {
    //                  $(this).removeClass("on on1 active active1 active2 on3").addClass("on");
    //             }else{
    //                $(this).removeClass("on on1 active active1 active2 on3").addClass("on3");
    //             }
    //         }
    //         else{
    //             $("#z-lf-bot .lf-bot-aon").each(function(){
    //                 if ($(this).next().css("display") == "block") {
    //                      $(this).removeClass("on on1 active active1 active2 on3").addClass("active2");
    //                 }else{
    //                    $(this).removeClass("on on1 active active1 active2 on3").addClass("avtive1");
    //                 }
    //             });
    //         }
    //     },function(){
    //         $("#z-lf-bot .lf-bot-a").removeClass("on on1 active active1 active2 on3");
    //         if ($(this).hasClass("lf-bot-aon")) {
    //             if ($(this).next().css("display") == "block") {
    //                  $(this).removeClass("on on1 active active1 active2 on3").addClass("active2");
    //             }else{
    //                $(this).removeClass("on on1 active active1 active2 on3").addClass("active1");
    //             }
    //         }
    //     });
    // });
    child.click(function(){
        if ($(this).next().css("display") == "block") {
            $("#z-lf-bot .lf-bot-a").removeClass("on on1 active active1 active2 on3");
            $(this).addClass("active");
        }else{
            $("#z-lf-bot .lf-bot-a").removeClass("on on1 active active1 active2 on3");
            $(this).addClass("on");
        }
        $(this).next().slideToggle().siblings(".zk-table").slideUp();
    });
}

$(".zk-table").each(function(){
    $(this).mouseover(function(){
        var e=getEvent();
        if(window.event){
            //e.returnValue=false;//阻止自身行为
            e.cancelBubble=true;//阻止冒泡
         }else if(e.preventDefault){
            //e.preventDefault();//阻止自身行为
            e.stopPropagation();//阻止冒泡
         }
        $("#z-lf-bot .lf-bot-a").removeClass("on on1 active active1 active2 on3");
        $(this).prev(1).removeClass("on on1 active active1 active2 on3").addClass("on");
    });
});

$("#z-lf-bot .yj-tit").click(function(){
    if ($(this).next().css("display") == "block") {
        $(this).addClass("on");
    }else{
        $(this).removeClass("on");
    }
    $(this).next().slideToggle();
});



selectBox($("#allBtn1"),$("#notBtn1"),$("#itemBox1"));
selectBox($("#allBtn2"),$("#notBtn2"),$("#itemBox2"));

// 全选/全不选
function selectBox(allBtn,notBtn,itemBox){
    allBtn.click(function(){
        itemBox.find("input").each(function(){
            $(this).prop("checked",true);
        });
    });
    notBtn.click(function(){
        itemBox.find("input").each(function(){
            $(this).prop("checked",false);
        });
    });
}

$("#in-carousel").carousel();
$("#lb-carousel").carousel();//轮播图
tabItem($(".gj-nav a"),$(".gj-con .gj-con-d"));
tabItem($("#zw-nav1 a").not(".zw-more"),$("#zw-nav1").next().find(".zw-con-d"));
tabItem($("#zw-nav2 a").not(".zw-more"),$("#zw-nav2").next().find(".zw-con-d"));
tabItem($("#zx-nav a"),$("#zx-nav").next().find(".lb-con-d"));

//首页选项卡
tabItem($(".top2-nav span"),$(".top2-con-wrap .top2-con"));
  function tabItem($item,$box){//选项卡
    $item.mouseover(function(){
      var index = $(this).index();
      $(this).addClass("on").siblings().removeClass("on");
      $box.eq(index).show().siblings().hide();
    });
  }

  getText($(".in-search-lf"));//首页下拉框
  getText($(".ly-con"));//下拉框
  getText($(".select-box"));//信息公开列表
  function getText(parent){
    parent.click(function(e){
        // window.event?window.event.cancelBubble=true:event.stopPropagation();
        var e=getEvent();
        if(window.event){
            //e.returnValue=false;//阻止自身行为
            e.cancelBubble=true;//阻止冒泡
         }else if(e.preventDefault){
            //e.preventDefault();//阻止自身行为
            e.stopPropagation();//阻止冒泡
         }
        var _this = $(this);
        _this.find("ul").slideToggle();
        _this.find("ul li").click(function(){
            var liText = $(this).text();
            _this.find("input").val(liText);
        });
    });
    $("body").click(function(){
        parent.find("ul").slideUp();
    })
  }

//获取事件
  function getEvent(){
     if(window.event)    {return window.event;}
     func=getEvent.caller;
     while(func!=null){
         var arg0=func.arguments[0];
         if(arg0){
             if((arg0.constructor==Event || arg0.constructor ==MouseEvent
                || arg0.constructor==KeyboardEvent)
                ||(typeof(arg0)=="object" && arg0.preventDefault
                && arg0.stopPropagation)){
                 return arg0;
             }
         }
         func=func.caller;
     }
     return null;
}

focus($(".fwCxDiv input"),'请输入零售许可办理编号查询');
focus($(".in-search-rt input"),"请输入检索关键字");//首页输入框

//搜索框
  function focus(inputbox,blurcontent){
    inputbox.focus(function(){
        if($(this).val()==blurcontent){
            $(this).val('');
        }
    });
    inputbox.blur(function(){
        if($(this).val()==''){
            $(this).val(blurcontent);
        }
    });
}


  // 在线办事切换
    var nextGgfw = 0;
    $('.ggfwARed a').click(function(){
        nextGgfw++;
        if(nextGgfw >= 3){
            $('.fwLs span').eq(2).addClass('on');
            $('.fwBl').eq(2).css('display','block');
            $(this).addClass('unableclick');
        }else{
            $('.fwBl').css('display','none');
            $('.fwBl').eq(nextGgfw).css('display','block');
            $('.fwLs span').removeClass('on');
            $('.fwLs span').eq(nextGgfw).addClass('on');
        }
    });
    $(".fwLs span").click(function(){
        $(this).addClass('on').siblings(".fwLs span").removeClass('on');
        $(".fwBl").eq($(this).index()).show().siblings(".fwBl").hide();
        if($(".fwLs span.on").index() < $(".fwLs span").length-1){
            $('.ggfwARed a').removeClass('unableclick');
        }else{
           $('.ggfwARed a').addClass('unableclick');
        }
        nextGgfw = $(".fwLs span.on").index();
    });
});

;(function ($) {
     $.fn.carousel = function () {
        var speed = 1000,
            interval = 2000,
            nowIndex = 0,
            timer = null,
            oPrev = $(this).find(".prev"),
            oNext = $(this).find(".next"),
            oP = $(this).find("p"),
            ol = $(this).find("ol"),
            olLi = null,
            oUl = $(this).find(".csl-content ul"),
            firstLi = oUl.find("li:first").clone(),
            liWidth = oUl.find("li:first").outerWidth();
        oUl = oUl.append(firstLi);
        var length = oUl.children("li").length;
        var ulWidth = length*liWidth;
        oUl.width(ulWidth);
        for (var i = 0; i < length-1; i++) {
            ol.append('<li></li>');
        }
        olLi = $(this).find("ol li"),
        olLi.first().addClass("on");
        oPrev.click(function(){
            clearInterval(timer);
            nowIndex --;
            if (nowIndex == -1) {
                nowIndex = length-2;
                oUl.css({"left":-liWidth*(length-1)+"px"});
            }
            oUl.stop().animate({"left":-liWidth*nowIndex+"px"},speed,function(){
                timer = setInterval(cslProgcess,interval);
            });
            olLi.eq(nowIndex).addClass("on").siblings().removeClass("on");
            oP.eq(nowIndex).show().siblings().hide();
        });
        oNext.click(function(){
            clearInterval(timer);
            nowIndex ++;
            if (nowIndex == length) {
                nowIndex = 1;
                oUl.css({"left":"0px"});
            }
            oUl.stop().animate({"left":-liWidth*nowIndex+"px"},speed,function(){
                timer = setInterval(cslProgcess,interval);
            });
            if(nowIndex == length-1){
                olLi.eq(0).addClass("on").siblings().removeClass("on");
                oP.eq(0).show().siblings().hide();
            }else{
                olLi.eq(nowIndex).addClass("on").siblings().removeClass("on");
                oP.eq(nowIndex).show().siblings().hide();
            }
        });
        olLi.hover(function(){
            clearInterval(timer);
            nowIndex = $(this).index();
            oUl.stop().animate({"left":-liWidth*nowIndex+"px"},speed);
            olLi.eq(nowIndex).addClass("on").siblings().removeClass("on");
            oP.eq(nowIndex).show().siblings().hide();
        },function(){
            timer = setInterval(cslProgcess,interval);
        });
        oUl.hover(function(){
            clearInterval(timer);
        },function(){
            timer = setInterval(cslProgcess,interval);
        });
        function cslProgcess(){
            nowIndex ++;
            if (nowIndex == length) {
                nowIndex = 1;
                oUl.css({"left":"0px"});
            }
            oUl.stop().animate({"left":-liWidth*nowIndex+"px"},speed);
            if(nowIndex == length-1){
                olLi.eq(0).addClass("on").siblings().removeClass("on");
                oP.eq(0).show().siblings().hide();
            }else{
                olLi.eq(nowIndex).addClass("on").siblings().removeClass("on");
                oP.eq(nowIndex).show().siblings().hide();
            }
        }
        timer = setInterval(cslProgcess,interval);

    }

})(jQuery);
