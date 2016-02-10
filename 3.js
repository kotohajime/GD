var uecli = function(){
  $("#ue").click(function(){
    divset("joubu3","joubutool3");
    $("#joubutool3").append('<a id="return" href=""><img src="return3.png"></a>');
    
    divset("main3","maintw");
    $("#maintw").append('<div id="twleft"></div><div id="twcenter"></div><div id="twright"></div>');
    
    $("#twleft").append('<div id="twleftue"></div><div id="twleftsita"></div>');
    $("#twcenter").append('<div id="toukouran"></div><div id="timeline"></div>');
    $("#twright").append('<div id="twrightue"></div><div id="twrightsita"></div>');
    $("#timeline").append('<div id="sintyaku"></div><div id="tl"></div>');
    $("#tl").append('<ul id="tlul">');

    
    var sasita = ["SMAP","#寒いから暖かそうな画像貼る","ダイエット","冬","娯楽","チモシー","屋根","鳥類","猫","#猫怖い"];
    var sinki = [/*たぶんココは、setTimeoutで増やしていくから配列はいらない*/];
    var tweetotouto = ["そっとしといてくれ","屋根のある場所、最高","顔かゆい","人間、耳の中に指突っ込んでくるのマジなんなの...","人間、たまにガチのレタスとかくれるけど普通にチモシーのがうまい(言えない)","カラオケ行きたい","感情とか、そうゆうの、無いから","「うさぎは寂しくて死ぬ生き物」って最初に言ったやつを絶対に許さない","私はうさぎであるが、私の実存は危機に瀕している","野生に生まれてたと思うと正直ぞっとする。鳥類...怖過ぎだろ...","スキャットマン、かっけー","すべてのプレイボーイはうさぎに足向けて寝んなよマジで",];
    var tweetane = ["触るのはいいけど草よこせよオラ","屋根　良さ","海行きたい...","耳のなかに指いれることを取り締まる法律をつくれ","一回だけでいいから寿司ってのを食べてみたい","カラオケ苦手...","スキャットマン来日しないかな...","美術館とか行ってみたい","最近、弟が怖い","新婚旅行はとりあえず北欧がいいな","声帯持ってないの、つらい...","好きな季節は秋です",];
    var tweethaha = ["・・・。","屋根","レタス","スキャットマン","屋根","レタス","・・・。","屋根","レタス","・・・。","屋根","レタス",];
    
    $("#twleftue").append('<a id="header"><img id="headerimage"></a><div id="twyou"><div id="imagename"><a id="icontutumi"><img></a><div id="akaka"><span id="hutoaka"></span><br><span id="hosoaka"></span></div></div><div id="followers"><ul><li id="twsuu"><li id="folo"><li id="foloed"></ul></div></div>');
    $("#followers li").addClass("twfl");
    $("#twleftsita").append('<div id="toredai"></div><ul><li><li><li><li><li><li><li><li><li><li></ul>');
    $("#twleftsita li").attr("class","torend");
    $(".torend").append('<span>');
    
    var leftueset = function(){
      var sauetwi = Math.floor(Math.random()*1000);
      var sauefollow = Math.floor(Math.random()*500);
      var sauefollower = Math.floor(Math.random()*500);
      $("#headerimage").attr("src","header.png");
      $("#imagename img").attr("src","anata2.png");
      $("#hutoaka").text("あなた");
      $("#hosoaka").text("@suki_usagi");
      $("#twsuu").append('<span class="twmoji"></span><br><span class="twkazu"></span>');
      $("#folo").append('<span class="twmoji"></span><br><span class="twkazu"></span>');
      $("#foloed").append('<span class="twmoji"></span><br><span class="twkazu"></span>');
      $("#twsuu .twmoji").text("ツイート");
      $("#folo .twmoji").text("フォロー");
      $("#foloed .twmoji").text("フォロワー");
      $("#twsuu .twkazu").text(sauetwi);
      $("#folo .twkazu").text("3");
      $("#foloed .twkazu").text("3");
    };
    
    $("#followers li").mouseover(function(){
      $(".twmoji",this).stop().animate({"color":"#00008B"},{duration:100});
    });
     $("#followers li").mouseout(function(){
      $(".twmoji",this).stop().animate({"color":"#8899a6"},{duration:100});
    });
    
    leftueset();
    var torendset = function(){
      $("#toredai").text("トレンド");
      for(var tr=0;tr<11;tr++){
        $('.torend:eq('+tr+') span').text(sasita[tr]);
      }
    };
    torendset();
    
    var rightset = function(){
      
      $("#twrightue").append('<div id="padright"><div id="osusume"></div><div id="osugun"><div class="osuaka"></div><div class="osuaka"></div></div></div><div id="siriai"><span>知り合いを見つけましょう</span></div>');
      $("#osusume").append('<h3>おすすめユーザー</h3><span>· </span><span class="osuao">更新</span><span>· </span><span class="osuao">すべて見る</span>');
      $(".osuaka").append('<img class="osuimg"><div class="twaka"><span class="osu1">さーさん</span><span class="osu2">@sa-san</span></div><div class="followbutton"><button type="button" class="flbutton"><img class="fbutton"><span></span></button></div>');
      $(".fbutton").attr("src","button.png");
      $(".flbutton span").text("フォロー");
      
      $("#twrightsita").append('<div id="twrsitapa"><span class="mu">諸々</span><span class="mu">諸々</span><span class="mu">諸々</span><span class="mu">諸々</span><span class="mu">諸々</span><span class="mu">諸々</span><span class="mu">諸々</span><span class="mu">諸々</span><span class="mu">諸々</span><span class="mu">諸々</span><span class="mu">諸々</span><span class="mu">諸々</span><span class="mu">諸々</span><span class="mu">諸々</span><span class="mu">諸々</span><span class="mu">諸々</span><span class="mu">諸々</span><span class="mu">諸々</span><span class="mu">諸々</span><span class="mu">諸々</span><span class="mu">諸々</span><span class="mu">諸々</span><span class="mu">諸々</span><span class="mu">諸々</span><span class="mu">諸々</span><span class="mu">諸々</span><span class="mu">諸々</span><span class="mu">諸々</span><span class="mu">諸々</span><span class="mu">諸々</span><span class="mu">諸々</span><span class="mu">諸々</span><span class="mu">諸々</span><span class="mu">諸々</span><span class="mu">諸々</span><span class="mu">諸々</span><span class="mu">諸々</span><span class="mu">諸々</span><span class="mu">諸々</span><span class="mu">諸々</span></div>');
      $("#twrsitapa").append('<span class="mu">諸々</span><span class="mu">諸々</span><span class="mu">諸々</span><span class="mu">諸々</span><span class="mu">諸々</span><span class="mu">諸々</span><span class="mu">諸々</span><span class="mu">諸々</span><span class="mu">諸々</span><span class="mu">諸々</span>');
      
      $(".flbutton").click(function(){
        if($(this).attr("class") == "flbutton"){
          $(this).addClass("flbutton2");
          $(this).removeClass("flbutton");
          $(this).text("フォロー中");
        }else{
          $(this).addClass("flbutton");
          $(this).removeClass("flbutton2");
          $(this).text("");
          $(this).append('<img class="fbutton" src="button.png"><span>フォロー</span>');
        }
      });
      
      var osuimgset = function(){
        var osuran = Math.floor(Math.random()*6)+1;
        console.log(osuran);
        if(osuran == 1){
          $(".osuimg:eq(0)").attr("src","cat1.png");
          $(".osu1:eq(0)").text("前田くん");
          $(".osu2:eq(0)").text("@maeda_kun");
          $(".osuimg:eq(1)").attr("src","cat2.png");
          $(".osu1:eq(1)").text("竜二");
          $(".osu2:eq(1)").text("@ryu-ji");
        }else if(osuran == 2){
          $(".osuimg:eq(0)").attr("src","cat2.png");
          $(".osu1:eq(0)").text("竜二");
          $(".osu2:eq(0)").text("@ryu-ji");
          $(".osuimg:eq(1)").attr("src","cat3.png");
          $(".osu1:eq(1)").text("さーさん");
          $(".osu2:eq(1)").text("@sa-san");
        }else if(osuran == 3){
          $(".osuimg:eq(0)").attr("src","cat3.png");
          $(".osu1:eq(0)").text("さーさん");
          $(".osu2:eq(0)").text("@sa-san");
          $(".osuimg:eq(1)").attr("src","cat2.png");
          $(".osu1:eq(1)").text("竜二");
          $(".osu2:eq(1)").text("@ryu-ji");
        }else if(osuran == 4){
          $(".osuimg:eq(0)").attr("src","cat1.png");
          $(".osu1:eq(0)").text("前田くん");
          $(".osu2:eq(0)").text("@maeda_kun");
          $(".osuimg:eq(1)").attr("src","cat3.png");
          $(".osu1:eq(1)").text("さーさん");
          $(".osu2:eq(1)").text("@sa-san");
        }else if(osuran == 5){
          $(".osuimg:eq(0)").attr("src","cat3.png");
          $(".osu1:eq(0)").text("さーさん");
          $(".osu2:eq(0)").text("@sa-san");
          $(".osuimg:eq(1)").attr("src","cat1.png");
          $(".osu1:eq(1)").text("前田くん");
          $(".osu2:eq(1)").text("@maeda_kun");
        }else{
          $(".osuimg:eq(0)").attr("src","cat2.png");
          $(".osu1:eq(0)").text("竜二");
          $(".osu2:eq(0)").text("@ryu-ji");
          $(".osuimg:eq(1)").attr("src","cat1.png");
          $(".osu1:eq(1)").text("前田くん");
          $(".osu2:eq(1)").text("@maeda_kun");
        }
      };
      osuimgset();
      //バツボタンをつけよう、フォローボタンを作ろう、
    };
    rightset();
    /*
    $(".flbutton").toggle(
      function(){
        $(this).css({
          "background-color":"#3ea2dc",
          "background-image":"none",
          "color":"#fff"
        });
        //$(this).text("フォロー中");
      },
      function(){
        $(this).css({
          "background-color":"#f5f8fa",
          "background-image":"linear-gradient(#fff,#f5f8fa)",
          "color":"#000"
        });
      //  $(this).append('<img class="fbutton"><span>フォロー</span>');
      }
    );
    */
    var centerkeiset = function(){
      $("#toukouran").append('<div id="forpad"><img id="toukouimage" src="anata2.png"><div id="toukoudiv"><span>いまどうしてる?</span></div></div>');
    };
    centerkeiset();
    
    var forsettimeout = 0;
    var sto = function(){
      var sintyakuran = Math.floor(Math.random()*16)+1;
      var stoo = window.setTimeout(function(){
        if(forsettimeout>300){
          console.log("止めますね");
          console.log(forsettimeout);
        }else{
          console.log("動いてます");
          forsettimeout += sintyakuran;
          $("#sintyaku").text(forsettimeout+"件の新着ツイートを表示");
          $("#sintyaku").animate({"height":"38px"},{duration:400});
          sto();
        }
      },7000);
      
      $("#sintyaku").click(function(){
        clearTimeout(stoo);
        console.log("clearしました");
      });
    };
    sto();
    //16回、setTimeoutが動いたあとのclearTimeoutは17回だった。これは、たぶん関係がある。一回でいい。早くなる。
    //こうゆう使い方をするのか、
    $("#sintyaku").click(function(){
      for(var i = 0;i<forsettimeout;i++){
        $("#tlul").prepend('<li class="moimoi0"><div class="twpad"><img class="twnusi"><div class="twaka"><strong class="hutoi"></strong><span class="hosoi"></span><span class="time"></span></div><div class="naiyou"></div><div class="kakusyu"><span class="rep"><img></span><span class="retw"><img></span><span class="twlike"><img></span><span class="twnota"><img></span></div></div></li>');
        $(".moimoi0").addClass("tweet");
      }
      $(".moimoi0").each(function(){
        var tweetrandom = Math.floor(Math.random()*12);
        var iconrandom = Math.floor(Math.random()*3)+1;
        var nanpunmae = Math.floor(Math.random()*1000);
        var retweetran = Math.floor(Math.random()*15);
        var likeran = Math.floor(Math.random()*15);
        $("img",this).attr("src","tmcon/tmcon"+iconrandom+".png");
        if(iconrandom == 1){
          $(".hutoi",this).text("姉");
          $(".hosoi",this).text("@ane_usa");
          $(".naiyou",this).text(tweetane[tweetrandom]);
        }else if(iconrandom == 2){
          $(".hutoi",this).text("母");
          $(".hosoi",this).text("@haha_usa");
          $(".naiyou",this).text(tweethaha[tweetrandom]);
        }else{
          $(".hutoi",this).text("弟");
          $(".hosoi",this).text("@otouto_usa");
          $(".naiyou",this).text(tweetotouto[tweetrandom]);
        }
        $(".time",this).text("· "+nanpunmae+"分");
        
        $(".rep img",this).attr("src","rep.png");
        $(".retw img",this).attr("src","retweet.png");
        $(".twlike img",this).attr("src","heart.png");
        $(".twnota img",this).attr("src","sonota.png");
        
        
        $(".retw",this).append('<span>');
        $(".twlike",this).append('<span>');
        
        
        if(retweetran === 0){
          console.log("ゼロでした");
        }else{
          $(".retw span",this).text(retweetran);
        }
        
        if(likeran === 0){
          console.log("ゼロでした");
        }else{
          $(".twlike span",this).text(likeran);
        }
        
        
      });
      kakusyureset();
      $(".rep img").mouseover(function(){
        $(this).attr("src","rep2.png");
      });
      $(".rep img").mouseout(function(){
        $(this).attr("src","rep.png");
      });
      
      $(".retw img").mouseover(function(){
        $(this).attr("src","retweet2.png");
      });
      $(".retw img").mouseout(function(){
        $(this).attr("src","retweet.png");
      });
      
      $(".twlike img").mouseover(function(){
        $(this).attr("src","heart2.png");
      });
      $(".twlike img").mouseout(function(){
        $(this).attr("src","heart.png");
      });
      
      $(".twnota img").mouseover(function(){
        $(this).attr("src","sonota2.png");
      });
      $(".twnota img").mouseout(function(){
        $(this).attr("src","sonota.png");
      });
      
      $("#sintyaku").css("height","0px");
      $("#sintyaku").text("");
      forsettimeout = 0;
      sto();
    });
  /*  var moizero = function(){
      $(".moimoi0").each(function(){
        $(".moimoi0").append('<div class="twpad"><img><div class="twaka"><strong class="hutoi"></strong><span class="hosoi"></span><span class="time"></span></div><div class="naiyou"></div><div class="kakusyu"><span class="rep"><img></span><span class="retw"><img></span><span class="twlike"><img></span><span class="twnota"><img></span></div></div>');
      });
    };
  */
    
    var mugentwi = function(i){
      li10("tlul","moimoi"+i);
      li10("tlul","moimoi"+i);
      li10("tlul","moimoi"+i);
      li10("tlul","moimoi"+i);
      li10("tlul","moimoi"+i);
      li10("tlul","moimoi"+i);
      
      $(".moimoi"+i).addClass("tweet");
      
      $(".moimoi"+i).each(function(){
        var tweetrandom = Math.floor(Math.random()*12);
        var iconrandom = Math.floor(Math.random()*3)+1;
        var nanpunmae = Math.floor(Math.random()*1000);
        var retweetran = Math.floor(Math.random()*15);
        var likeran = Math.floor(Math.random()*15);
        $(this).append('<div class="twpad"><img class="twnusi"><div class="twaka"><strong class="hutoi"></strong><span class="hosoi"></span><span class="time"></span></div><div class="naiyou"></div><div class="kakusyu"><span class="rep"><img></span><span class="retw"><img></span><span class="twlike"><img></span><span class="twnota"><img></span></div></div>');
        $("img",this).attr("src","tmcon/tmcon"+iconrandom+".png");
        if(iconrandom == 1){
          $(".hutoi",this).text("姉");
          $(".hosoi",this).text("@ane_usa");
          $(".time",this).text("· "+nanpunmae+"分");
          $(".naiyou",this).text(tweetane[tweetrandom]);
        }else if(iconrandom == 2){
          $(".hutoi",this).text("母");
          $(".hosoi",this).text("@haha_usa");
          $(".time",this).text("· "+nanpunmae+"分");
          $(".naiyou",this).text(tweethaha[tweetrandom]);
        }else{
          $(".hutoi",this).text("弟");
          $(".hosoi",this).text("@otouto_usa");
          $(".time",this).text("· "+nanpunmae+"分");
          $(".naiyou",this).text(tweetotouto[tweetrandom]);
        }
        $(".rep img",this).attr("src","rep.png");
        $(".retw img",this).attr("src","retweet.png");
        $(".twlike img",this).attr("src","heart.png");
        $(".twnota img",this).attr("src","sonota.png");
        
        
        $(".retw",this).append('<span>');
        $(".twlike",this).append('<span>');
        
        
        if(retweetran === 0){
          console.log("ゼロでした");
        }else{
          $(".retw span",this).text(retweetran);
        }
        
        if(likeran === 0){
          console.log("ゼロでした");
        }else{
          $(".twlike span",this).text(likeran);
        }
        
        
        
        
        /*
        (function(){
          $(".rep").text(kakusyuran);
        }());
        */
        //よく考えたらeachのコールバック関数内でonを使うというのはとてもおかしなことなんじゃないか？？？？？
      });
      /*
      $(".retw img").click(function(){
        if($(this).attr("src")=="retweet.png"){
          $(this).attr("src","retweet.png");
        }else{
          $(this).attr("src","retweet2.png");
        }
      });
      $(".twlike img").click(function(){
        if($(this).attr("src")=="heart.png"){
          $(this).attr("src","heart.png");
        }else{
          $(this).attr("src","heart2.png");
        }
      });
      */
      //これダメだ...mouseover使ってるからif文の条件がそっちに読み取られて意味がわからない...あれ？
      //逆にしたけど、逆にしたらいけると思ったけどダメだった。mouseoverとclickイベントを併用するのって少し複雑だな
    };
    mugentwi(1);
    
    var kakusyumouseset = function(){
      $(".rep img").on("mouseover",function(){
        $(this).attr("src","rep2.png");
      });
      $(".rep img").on("mouseout",function(){
        $(this).attr("src","rep.png");
      });
      
      
      $(".retw img").on("mouseover",function(){
        $(this).attr("src","retweet2.png");
      });
      $(".retw img").on("mouseout",function(){
        $(this).attr("src","retweet.png");
      });
      
      $(".twlike img").on("mouseover",function(){
        $(this).attr("src","heart2.png");
        console.log("like");
      });
      $(".twlike img").on("mouseout",function(){
        $(this).attr("src","heart.png");
      });
      
      $(".twnota img").on("mouseover",function(){
        $(this).attr("src","sonota2.png");
      });
      $(".twnota img").on("mouseout",function(){
        $(this).attr("src","sonota.png");
      });
    };
    kakusyumouseset();
    
    var kakusyureset = function(){
      $(".rep img").off("mouseover mouseout");
      
      $(".retw img").off("mouseover mouseout");
      
      $(".twlike img").off("mouseover mouseout");
      
      $(".twnota img").off("mouseover mouseout");
    };
    
    var tweetzouka = 2;
    $(window).scroll(function(){
      var bodysctf = $("html,body").scrollTop();
      var bodysctc = $("body").scrollTop();
      var body80 = $("body").height()*0.78;
      if(bodysctf > body80){
          kakusyureset();
          mugentwi(tweetzouka);
          kakusyumouseset();
          tweetzouka++;
          //←$(".cont").eachを上手いこと振り分けることができない
          console.log("firefox検知しています");
      }else if(bodysctc > body80){
          kakusyureset();
          mugentwi(tweetzouka);
          kakusyumouseset();
          tweetzouka++;
          //console.log("chrome検知しています");
      }
    });
    
    
    $("#return").click(function(){
      forsettimeout = 500;
      $("#main3").animate(
        {"width":"0%"},
        {duration:600,
         complete:function(){
           $("#main3").remove();
         }
        }
      );
      $("#joubu3").animate(
        {"width":"0%"},
        {duration:600,
         complete:function(){
           $("#joubu3").remove();
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
  uecli();
});
