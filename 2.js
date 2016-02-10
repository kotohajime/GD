var haiset = function(cli){
  $(cli).click(function(){
    //いよいよ、ここに、アレ、３本の細いウサギ画像がアニメーションなのか、
    //はたまた、再びのfadeToなのか。統一したほうがいい？いや、横からシュッて入ったら良いな
    //それ、横幅とか%で指定してたし、それをやる。
    
    //$("#main1").css("position":"fixed");
    $("#main1>div").remove();
    $("#main1").css({
      "position":"fixed",
      "width":"100%"
    });
    $("#main1").append('<div id="kao">');
    $("#kao").text("(゜∇゜)");
    $("#kao").css({
      "width":"500px",
      "height":"100%",
      "margin":"auto",
      "margin-top":"60px",
      "font-size":"8em"//160px
    });
    var rabbitimage = function(){
      $("#main1").remove();
    };
    $("#main1").fadeTo(2800,0,rabbitimage);
    
    var raliset = function(){
      $(".rali").css("height","223px");//スクロールの解決策。土壇場のheight調整
      $("#main2").css({
        "padding-top":"100px"
      });//問題発生だらけ。displayをnoneにしたらanimate時にまだ画像が読み込まれてなくて遅延
      　//画像のバイトを縮小して、まだダメだったら、スクロールされちゃう方を諦めよう
      $(".rali").animate(
        {"top":"0px","opacity":"1"},
        {duration:2500}
      );
    };
    raliset();
    return false;
  });
};
  
var ralimove = function(){
  $(".rali").mouseover(function(){
  var id = $(this).attr("id");
  //$(this).each(function(){
  if(id == "ue"){
    $("#naka,#sita").css("display","none");
    $(this).css({
      "height":"689px",
      "border-radius":"5px"
    });
    $("a",this).text("囀");
  }else if(id == "naka"){
    $("#ue,#sita").css("display","none");
    $(this).css({
      "height":"689px",
      "background-position":"0px 0px",
      "border-radius":"5px"
    });
    $("a",this).text("転");
  }else{
    $("#naka,#ue").css("display","none");
    $(this).css({
      "height":"689px",
      "background-position":"0px 0px",  
      "border-radius":"5px"
    });
    $("a",this).text("顔");
  }
  $("a",this).css({
      "display":"block",
      "padding-top":"619px"
    });
  });
  $(".rali").mouseout(function(){
    var id = $(this).attr("id");
    //$(this).each(function(){
    if(id == "ue"){
      $("#naka,#sita").css("display","block");
      $(this).css({
        "height":"223px",
        "border-radius":"0px"
      });
      
    }else if(id == "naka"){
      $("#ue,#sita").css("display","block");
      $(this).css({
        "height":"223px",
        "background-position":"0px -233px",
        "border-radius":"0px"
      });
      
    }else{
      $("#naka,#ue").css("display","block");
      $(this).css({
        "height":"223px",
        "background-position":"0px -466px",
        "border-radius":"0px"
      });
    }
    $("a",this).text("");
    $("a",this).css({
      "display":"inline",
      "padding-top":"0px",
      "padding-bottom":"0px"
      });
  });
  
  $(".rali").click(function(){
    var id = $(this).attr("id");
    $(this).mouseout(function(){
      $(this).css({
        "height":"689px",
        "background-position":"0px 0px",
        "border-radius":"8px 8px 8px 8px/8px 8px 8px 8px"
      });
    });
    if(id == "ue"){
      $("#naka,#sita").remove();
    }else if(id == "naka"){
      $("#ue,#sita").remove();
    }else{
      $("#naka,#ue").remove();
    }
    $(".rali").animate(
      {
        "top":"30px",
        //"left":"12px"
      },
      {
        duration:300
      }
    );
    $(".rali").animate(
      {"top":"-1400px"},
      {
        duration:400,
        complete:function(){
          $("#main2").remove();
          if(id == "naka"){
            $("#main4").stop().animate(
              {
                "width":"100%",
              },
              {
                duration:2300
              }
              );
            $("#joubu4").stop().animate(
              {
                "width":"100%",
              },
              {
                duration:2300
              }
              );
          }else if(id =="ue"){
            $("#main3").stop().animate(
              {"width":"100%"},
              {
                duration:2300
              }
              );
              $("#joubu3").stop().animate(
              {
                "width":"100%",
              },
              {
                duration:2300
              }
              );
              $("#joubutool3").stop().animate(
              {
                "width":"100%",
              },
              {
                duration:2300
              }
              );
          }else{
            $("#main5").stop().animate(
              {"width":"100%"},
              {
                duration:2300
                
              }
              );
              $("#joubu5").stop().animate(
              {
                "width":"100%",
              },
              {
                duration:2300
              }
              );
          }
        }
      }
    );
    return false;
  });  
};
  

$(function(){
  haiset("#hai");
  ralimove();
});    
    //いまの時点の問題はfixedしたやつをmargin:autoできないこと
    //display:noneにしたら画像の読み込み時間がかかり、animateに支障をきたすこと
    
    //帰宅後。fixedの問題は解決できた。position:fixedでもwidth:100%は効いてくれるみたい。
    //その子にtextいれたdivいれたら期待通りの動きに
    //スクロール問題は、「いいえ」を押した瞬間にmain2のdisplayをnoneにすることで
    //一部解消できた。トップページのスクロールだけ、残ってるのは。
    //画像を縮小して、display:noneにしなくても問題なくanimateするようならそうしよう。
    
    //lionly("rul","rali");
    //↑これら、一応、windowオブジェクトにメソッド入れて汎用的に使うってのやってみたけど
    //一応は成功してる。けど、なんだろ、無理して汎用的にしてる感じで、
    //楽な感じは今のところ、あんまりない。ただ、今後、これらを使う場面が来たら便利かもな
    //要素追加で汎用性って難しいのかな
    
    //うーん、試しにやってみたけど、実際には一番大きいdivのidは変えないで
    //その次のdivのid名をページの推移とともにわかりやすく変えていくのが良いかな
    //いや、ページごとのcssも用意してるし、一番大きいdivのidでいいかも
    //推移とともにメインdivが差し替わっていく仕様。
    //しかし、メソッド作って引数にいれた文字列をid名にできることを知ったのはでかい
    //こうゆう感じで、汎用性あるメソッドをいくつか最初に設定して、
    //ページごとのコーディングに一貫性を持たせられれば修正もしやすいし、融通が利く。
    //id名が鍵だと思う。idとclassを、各ページを貫く一定の法則をもって設定できれば
    //簡単になるよ