var sitacli = function(){
  $("#sita").click(function(){
    divset("joubu5","joubutool5");
    $("#joubutool5").append('<a id="return" href=""><img src="return4.png"></a>');
    divset("main5","munen");
    
    $("#munen").append('<img src="mikan.png">');
    
    $("#return").click(function(){
      $("#main5").animate(
        {"width":"0%"},
        {duration:600,
         complete:function(){
           $("#main5").remove();
         }
        }
      );
      $("#joubu5").animate(
        {"width":"0%"},
        {duration:600,
         complete:function(){
           $("#joubu5").remove();
           divset("main2");
           ulkei("main2","raul","rali");
           $(".rali:eq(0)").attr("id","ue");
           $(".rali:eq(1)").attr("id","naka");
           $(".rali:eq(2)").attr("id","sita");
           $(".rali").append('<a href="">');
           var raliset = function(){
            $(".rali").css("height","223px");//スクロールの解決策。土壇場のheight調整
            $("#main2").css({
              "padding-top":"100px"
            });//問題発生だらけ。displayをnoneにしたらanimate時にまだ画像が読み込まれてなくて遅延
             　//画像のバイトを縮小して、まだダメだったら、スクロールされちゃう方を諦めよう
            $(".rali").animate(
              {"top":"0px","opacity":"1"},
              {duration:1800}
            );
            };
           raliset();
           ralimove();
           uecli();
           nakacli();
           sitacli();
         }
        }
      );
      return false;
    });
  });
};
$(function(){
  sitacli();
});