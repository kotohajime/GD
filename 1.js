
var divset = function(id,id2){
  $("body").append('<div id = '+id+'><div id= '+id2+'>');
};
var divsetpre = function(id,id2){
  $("body").prepend('<div id = '+id+'><div id= '+id2+'>');
};
var ulkei = function(divid,id,c){
  $("#"+divid+">div").append('<ul id ='+id+'><li class='+c+'><li class='+c+'><li class='+c+'>');
};
var ulk = function(divid,id){
  $("#"+divid+">div").append('<ul id ='+id+'>');
};
var lionly = function(ulid,c){
  $("#"+ulid).append('<li class='+c+'><li class='+c+'><li class='+c+'>');
};
var li10 = function(ulid,c){
  $("#"+ulid).append('<li class='+c+'><li class='+c+'><li class='+c+'><li class='+c+'><li class='+c+'><li class='+c+'><li class='+c+'><li class='+c+'><li class='+c+'><li class='+c+'>');
};
var li2 = function(ulid,c){
  $("#"+ulid).append('<li class='+c+'><li class='+c+'>');
};
$(function(){
  //smoothScroll.init();
  $("body").append('<div><div id="syodai"><p></p><ul><li class="answer"><a id ="hai"><li class="answer"><a id ="iie">');
  $("div:first").attr("id","main1");
  $("p").attr("id","tou");
  $("a").attr("href","");
  
  divset("main2");
  ulkei("main2","raul","rali");
  $(".rali:eq(0)").attr("id","ue");
  $(".rali:eq(1)").attr("id","naka");
  $(".rali:eq(2)").attr("id","sita");
  $(".rali").append('<a href="">');
  
  
  
  $("#tou").text("うさぎは好きですか？");
  $(".answer>a:first").text("はい");
  $(".answer>a:last").text("いいえ");
  
  $("#tou").fadeTo(3000,1);
  var ti = function(){
    var i = $("#tou").css("opacity");
    setTimeout(function(){
      if(i < 0.6){
      ti();
      }else if(i > 0.6 && i < 0.9){
      $(".answer").fadeTo(1500,1);
      }
    },100);
  };
  ti();
  
  $("#iie").click(function(){
    var none = function(){
      $("#syodai").remove();//←これは要るのか？deleteでもfadeOutでもvisility:hiddnでもいいやん
      $("#main1").append('<div id="non"><p><textarea id="text" placeholder=好きな動物の名前を入れてね cols=30 rows=1>');
      $("#non").fadeTo(2300,1);
      $("#non").append('<p><button type="button" id="aori">ボタン');
      $("#main2").remove();
      $("#aori").click(function(){
        var sukidou = $("textarea").val();
        $("#non").remove();
        $("#main1").append('<div class="aoric"></div><div class="aoric">');
        $(".aoric:first").text(" "+sukidou+" ＜＜＜＜＜（超えられない壁）＜＜＜＜＜ うさぎ");
        $(".aoric:first").css("margin-bottom","100px");
        $(".aoric:last").text("（ •́ .̫ •̀ ）（ •́ .̫ •̀ ）（ •́ .̫ •̀ ）（ •́ .̫ •̀ ）（ •́ .̫ •̀ ）（ •́ .̫ •̀ ）（ •́ .̫ •̀ ）（ •́ .̫ •̀ ）（ •́ .̫ •̀ ）（ •́ .̫ •̀ ）（ •́ .̫ •̀ ）（ •́ .̫ •̀ ）（ •́ .̫ •̀ ）（ •́ .̫ •̀ ）（ •́ .̫ •̀ ）（ •́ .̫ •̀ ）（ •́ .̫ •̀ ）（ •́ .̫ •̀ ）（ •́ .̫ •̀ ）（ •́ .̫ •̀ ）（ •́ .̫ •̀ ）（ •́ .̫ •̀ ）（ •́ .̫ •̀ ）（ •́ .̫ •̀ ）（ •́ .̫ •̀ ）（ •́ .̫ •̀ ）（ •́ .̫ •̀ ）（ •́ .̫ •̀ ）（ •́ .̫ •̀ ）（ •́ .̫ •̀ ）（ •́ .̫ •̀ ）（ •́ .̫ •̀ ）（ •́ .̫ •̀ ）（ •́ .̫ •̀ ）（ •́ .̫ •̀ ）（ •́ .̫ •̀ ）（ •́ .̫ •̀ ）（ •́ .̫ •̀ ）（ •́ .̫ •̀ ）（ •́ .̫ •̀ ）（ •́ .̫ •̀ ）（ •́ .̫ •̀ ）（ •́ .̫ •̀ ）（ •́ .̫ •̀ ）（ •́ .̫ •̀ ）（ •́ .̫ •̀ ）（ •́ .̫ •̀ ）（ •́ .̫ •̀ ）（ •́ .̫ •̀ ）（ •́ .̫ •̀ ）（ •́ .̫ •̀ ）（ •́ .̫ •̀ ）（ •́ .̫ •̀ ）（ •́ .̫ •̀ ）（ •́ .̫ •̀ ）（ •́ .̫ •̀ ）（ •́ .̫ •̀ ）（ •́ .̫ •̀ ）（ •́ .̫ •̀ ）（ •́ .̫ •̀ ）（ •́ .̫ •̀ ）（ •́ .̫ •̀ ）（ •́ .̫ •̀ ）（ •́ .̫ •̀ ）（ •́ .̫ •̀ ）");
        $(".aoric").css({
          "font-size":"45px",
          "max-width":"1900px",
          "text-align":"center"
        });
        $("#main1>div").css("max-width","none");
    //    $("#main1").css("margin-top","180px");
        
      });
    };
    $("#syodai").fadeTo(1500,0,none);
    return false;
  });
  
  
    
});