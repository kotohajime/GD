var nakacli = function(){
  $("#naka").click(function(){
    var tm = [];
    var tmcon = [];
    var reblogheart = [];

    (function(){
      for(var i = 1; i < 49;i++){
        tm[i] = new Image();//←これは「<image>タグを作ります」という意味
        tm[i].src = "tmage/t"+i+".png";//"tmage/t"+i+".png""asobi/t"+i+".PNG"すぐ直せよ！！！！
        //console.log(tm[i]);
      }
    }());
    (function(){
      for(var i = 1;i < 4;i++){
        tmcon[i] = new Image();
        tmcon[i].src = "tmcon/tmcon"+i+".png";
      }
    }());    
    reblogheart[1] = new Image();
    reblogheart[1].src = "reblog.png";
    reblogheart[2] = new Image();
    reblogheart[2].src = "reblog2.png";
    reblogheart[3] = new Image();
    reblogheart[3].src = "heart.png";
    reblogheart[4] = new Image();
    reblogheart[4].src = "heart2.png";    
    
    divset("joubu4","joubutool4");
    $("#joubutool4").append('<a id="return" href=""><img src="return4.png"></a>');
    //$("#joubutool4").append('<img id="how3" src="how3.png"><img id="how4" src="how4.png"><img id="how1" src="how1.png"><img id="how2" src="how2.png">');
    $("#joubu4").prepend('<div id="howuse"><img src="how1.png"><img src="how2.png"><img src="how3.png"><img src="how4.png"></div>');
    
    divset("main4","dashmain");
    $("#dashmain").prepend('<div id="you"><div id = "trash">');
    $("#you").prepend('<img id="youcon" src="anata2.png">');
    $("#trash").html("<span>←「Shut the fuck up and drive the dashboard.」</span>");
    //$("#trash").html("<span>←「シャットザファックアップ、アンドダイブイントゥザダッシュボード」</span>");
    ulk("main4","dash");
    
    var mugen = function(i){
      reblogheart[1] = new Image();
      reblogheart[1].src = "reblog.png";
      reblogheart[2] = new Image();
      reblogheart[2].src = "reblog2.png";
      reblogheart[3] = new Image();
      reblogheart[3].src = "heart.png";
      reblogheart[4] = new Image();
      reblogheart[4].src = "heart2.png";    
      reblogheart[5] = new Image();
      reblogheart[5].src = "heart3.png";    
      li10("dash","karikari"+i);
      li10("dash","karikari"+i);
      $(".karikari"+i).each(function(){
        var ran = Math.floor(Math.random()*48)+1;
        var rancon = Math.floor(Math.random()*3)+1;
        var ranreact = Math.floor(Math.random()*1000)+1;
        $(this).addClass("cont");
        //$(this).prepend('<a class="focusyou" href=""></a>');
        $(this).append('<div class="oyabun">');
        $(".oyabun",this).wrap('<a class="focusyou" href=""></a>');//←ココ...12/27...いじった、focusinを効かすのとfirefoxの挙動を改善するために...上手くいかない...←いけました！！！！！
        $(".oyabun",this).append('<div class="tougou"><div class="darekara"><span class="who"></span><span class="whom"></span></div><a class="aimage" href= "blank/'+ran+'.JPG" target="_blank"></a><div class="toutou"><span class="reactsuu"></span><span class="heart"></span></div>');
        
        $(".aimage",this).append(tm[ran]);
        tm[ran]=new Image();
        tm[ran].src = "tmage/t"+ran+".png";//"tmage/t"+ran+".png""asobi/t"+ran+".PNG"ここも！！！！
        
        $(".oyabun",this).append('<div class="tmicon">');
        $(".tmicon",this).append(tmcon[rancon]);
        
        if(rancon == 1){
          $(".who",this).text("daughter ");
        }else if(rancon == 2){
          $(".who",this).text("mother ");
        }else{
          $(".who",this).text("son ");
        }
        tmcon[rancon]= new Image();
        tmcon[rancon].src = "tmcon/tmcon"+rancon+".png";
        
        $(".reactsuu",this).text(ranreact+" リアクション");
        if(ranreact > 660){
          $(".whom",this).text(" son");
        }else if(ranreact > 330 && ranreact < 661){
          $(".whom",this).text(" mother");
        }else{
          $(".whom",this).text(" daughter");
        }
        
        $(".heart",this).append('<a class="rbl" href=""></a><a class="hrt" href=""></a>');
        $(".rbl",this).append(reblogheart[1]);
        reblogheart[1] = new Image();
        reblogheart[1].src = "reblog.png";
        $(".hrt",this).append(reblogheart[3]);
        reblogheart[3] = new Image();
        reblogheart[3].src = "heart.png";
        $(".who",this).after(reblogheart[1]);
        reblogheart[1] = new Image();
        reblogheart[1].src = "reblog.png";
        //これら問題児三兄弟、解決！！！
        
      });

      $(".cont").on("keydown",function(e){
        switch(e.which){
          case 84:
            $(".rbl",this).click();
            $(".oyabun",this).css({"backgroundColor":"#fb8a8a"});
            $(".oyabun",this).stop().animate(
              {"backgroundColor":"white"},
              {duration:600
              });
            break;
          case 82:
            $(".hrt",this).click();
            break;
        }
      });
    };
    mugen(1);
    var rblicli = function(){
      $(".rbl").on("click",function(){
        $(this).html(reblogheart[2]);
        reblogheart[1]= new Image();
        reblogheart[1].src = "reblog.png";
        reblogheart[2]= new Image();
        reblogheart[2].src = "reblog2.png";
        //var jikkennjayo = $(window).offset();
        //console.log(jikkennjayo);
        //siritai();
        return false;
      });
      $(".hrt").on("click",function(){
        reblogheart[3]= new Image();
        reblogheart[3].src = "heart.png";
        reblogheart[4]= new Image();
        reblogheart[4].src = "heart2.png";
        if($("img",this).attr("src")=="heart.png"){
          $(this).css({"padding-right":"0px"});
          $(this).html('<img id="sur" src="heart2.png">');
          $("#sur").stop().animate({"opacity":"0"},
          {duration:600,
          complete:function(){
            $("#sur").remove();
            $(".hrt").css({"padding-right":"20px"});
          }}
          );
          $(this).prepend(reblogheart[4]);
          reblogheart[3]= new Image();
          reblogheart[3].src = "heart.png";
          reblogheart[4]= new Image();
          reblogheart[4].src = "heart2.png";
        }else if($("img",this).attr("src")=="heart2.png"){
          $(this).css({"padding-right":"0px"});
          $(this).html('<img id="sur" src="heart3.png">');
          $("#sur").stop().animate({"opacity":"0"},
          {duration:600,
          complete:function(){
            $("#sur").remove();
            $(".hrt").css({"padding-right":"20px"});
          }}
          );
          $(this).prepend(reblogheart[3]);
          //$(this).html(reblogheart[3]);
          reblogheart[3]= new Image();
          reblogheart[3].src = "heart.png";
          reblogheart[4]= new Image();
          reblogheart[4].src = "heart2.png";
        }
        return false;
      });              
    };
    rblicli();
    /*
    var avaava = function(){
      var oyabuntop = $('.oyabun').offset().top;
      if(oyabuntop)
    };
    $(".oyabun").on("focus",function(){
        $(".tmicon",this).attr("id","fixedtower");        
        $("#fixedtower").removeClass("tmicon");
        $("#fixedtower img").wrap('<div id="avatarfixed"></div>');
    });
    残すはアバターの移り変わりのみ！！！うそつけ！！！
    */
    
    var conthuyashi = 2;
    $(window).scroll(function(){
      var bodysctf = $("html,body").scrollTop();
      var bodysctc = $("body").scrollTop();
      var body80 = $("body").height()*0.87;
      if(bodysctf > body80){
          $(".hrt").off("click");
          $(".rbl").off("click");
          $(".cont").off("click");
          $(".cont").off("keydown");
          mugen(conthuyashi);
          rblicli();
          conthuyashi++;
          //←$(".cont").eachを上手いこと振り分けることができない
          console.log("firefox検知しています");
      }else if(bodysctc > body80){
          $(".hrt").off("click");
          $(".rbl").off("click");
          $(".cont").off("click");
          $(".cont").off("keydown");
          mugen(conthuyashi);
          rblicli();
          conthuyashi++;
          //console.log("chrome検知しています");
      }
    });    
//あははははは！！！↑コレ、めっちゃ四苦八苦したけど、どうやら、$(".cont").onのコールバック関数内で呼び出したメソッドは自動で「onしたこと」になるみたいだね。
//解決したぁ！！！！！気持ちい！！！


    //$(".cont").attr("data-scroll","");
    
    //↓の問題点を把握しておこう。
    //①$(window).scrollにイベント設定しているために粒度が細かすぎて大量にイベントが発生してしまう
    //②新規作成した<li>に諸々の情報を付加しようとして、結果的に全ての<li>に再度情報が付加されている。しかも粒度が小さいせいで何度も重複する形になっている。結果、壊れる。
    //解決策としては、まず②は、<li>に新たなclass名を与えて初代<li>との差別化を図るという方法もあるだろうが、なんか、class名を変えるのは力技っぽすぎて使いたくない
    //$(window)以外のセレクタでのscrollの方法を見つけないといけない。粒度が細かすぎる。もしくはif文の条件のより良くするか。。。
    //ん？
    
    /*$(window).scroll(function(){
      var bodysct = $("body").scrollTop();
      var body80 = $("body").height()*0.9;
      if(bodysct > body80){
        li10("dash","cont");
        (function(){
          $(".cont").append('<div class="oyabun">');
          $(".oyabun").each(function(){
            var ran = Math.floor(Math.random()*48)+1;
            var rancon = Math.floor(Math.random()*3)+1;
            var ranreact = Math.floor(Math.random()*1000)+1;
            
            $(this).append('<div class="tougou"><div class="darekara"><span class="who"></span><span class="whom"></span><a class="focusyou" href=""></a></div><a class="aimage" href= "blank/'+ran+'.JPG" target="_blank"></a><div class="toutou"><span class="reactsuu"></span><span class="heart"></span></div>');
            $(".aimage",this).append(tm[ran]);
            
            tm[ran]=new Image();
            tm[ran].src = "tmage/t"+ran+".png";//"tmage/t"+ran+".png""asobi/t"+ran+".PNG"ここも！！！！
            /*if(rancon == 1){
              $(this).text("ane");
            }else if(rancon == 2){
              $(this).text("haha");
            }else{
              $(this).text("u-tyan");
            }
            
            $(this).append('<div class="tmicon">');
            $(".tmicon",this).append(tmcon[rancon]);
            if(rancon == 1){
              $(".who",this).text("daughter ");
            }else if(rancon == 2){
              $(".who",this).text("mother ");
            }else{
              $(".who",this).text("son ");
            }
            $(".reactsuu",this).text(ranreact+" リアクション");
            if(ranreact > 660){
              $(".whom",this).text(" son");
            }else if(ranreact > 330 && ranreact < 661){
              $(".whom",this).text(" mother");
            }else{
              $(".whom",this).text(" daughter");
            }
            tmcon[rancon]= new Image();
            tmcon[rancon].src = "tmcon/tmcon"+rancon+".png";
           
          });
          $(".who").after(reblogheart[1]);
          //$("#trash").append('<img src="how3.png"><img src="how4.png"><img src="how1.png"><img src="how2.png">');
          $(".heart").append('<a class="rbl" href=""></a><a class="hrt" href=""></a>');
          $(".rbl").append(reblogheart[1]);
          $(".hrt").append(reblogheart[3]);
        }());
        
        console.log("body");
      }
      console.log("bodyがスクロールしました");
    });
    */

    
    //たとえばここに、投げた画像ファイルのなかにある画像の名前を自動で「t+i+.png」に変換するプログラムを組み合わせたら、どんな画像ファイルでもこれができるようになる。
    //それって結構難しくない？画像ファイル名のデータとかってどうやってアクセスしたらいいかわからん。アクセスできるなら、その名前をそのままこの関数内の引数にいれればいい。
    //あぁ、その画像ファイルを配列的に勝手に解釈して、そこに入ってる画像群の名前を「数値.png」に変換。new Imageした配列のsrcに指定でできあがり、か。
    //そうだな、でも画像投稿フォームとかあるから、いけそうっちゃいけそうだ。

    


    

    //$("#trash").append('<img src="how3.png"><img src="how4.png"><img src="how1.png"><img src="how2.png">');

    
    /*var siritai = function(){
      var bodysctf = $("html,body").scrollTop();
      var bodysctc = $("body").scrollTop();
      //↑ブラウザによってセレクタの記述方法が異なる
      var body80 = $("body").height()*0.8;
      var windowhe = $(window).height();
      var bodyhe = $("body").height();
      console.log("windowの高さは"+windowhe);
      console.log("bodyの高さは"+bodyhe);
      console.log("bodyの高さの80%は"+bodyhe*0.8);
      console.log("bodyの高さの80％は"+body80);
      console.log("かっかか"+bodysctf);
      console.log("かっかか"+bodysctc);
    };
    */
    //なんかFirefoxのコンソールではbodysctが検知されないんですけど。これは、薄らヤバい予感
    
    /*$("body").on("scroll",function(){
      if(bodysct > body80){
        li10("dash","cont");
        li10("dash","cont");
        li10("dash","cont");
        console.log("増えたで");
      }
    });
    */
    //bodyのscrollTopがbody.heightの80%にきた時点で増やすようにすればいいのか？

    //長かった～～～いけたぁ～～～～！！！！12/23の朝の4:30!!!!!!!!!!!!!!!!!
       
        /*$(".rbl").click(function(){
          $(this).html(reblogheart[2]);
          reblogheart[1]= new Image();
          reblogheart[1].src = "reblog.png";
          reblogheart[2]= new Image();
          reblogheart[2].src = "reblog2.png";
          return false;
        });
        */
        /*
        $(".hrt").click(function(){
          if($("img",this).attr("src")=="heart.png"){
            $(".toutou").css({"padding-right":"0px"});
            $(this).html('<img id="sur" src="heart2.png">');
            $("#sur").stop().animate({"opacity":"0"},
            {duration:600,
            complete:function(){
              $("#sur").remove();
              $(".toutou").css({"padding-right":"20px"});
            }}
            );
            reblogheart[4]= new Image();
            reblogheart[4].src = "heart2.png";
            $(this).prepend(reblogheart[4]);
            
            reblogheart[3]= new Image();
            reblogheart[3].src = "heart.png";
            reblogheart[4]= new Image();
            reblogheart[4].src = "heart2.png";
          }else{
            $(".toutou").css({"padding-right":"0px"});
            $(this).html('<img id="sur" src="heart3.png">');
            $("#sur").stop().animate({"opacity":"0"},
            {duration:600,
            complete:function(){
              $("#sur").remove();
              $(".toutou").css({"padding-right":"20px"});
            }}
            );
            reblogheart[4]= new Image();
            reblogheart[4].src = "heart2.png";
            $(this).prepend(reblogheart[3]);
            //$(this).html(reblogheart[3]);
            reblogheart[3]= new Image();
            reblogheart[3].src = "heart.png";
            reblogheart[4]= new Image();
            reblogheart[4].src = "heart2.png";
          }
          return false;
        });
        return false;
      });
      
      /*$(".rbl").on("click",function(){
        $(this).html(reblogheart[2]);
        reblogheart[1]= new Image();
        reblogheart[1].src = "reblog.png";
        reblogheart[2]= new Image();
        reblogheart[2].src = "reblog2.png";
        return false;
      });
    //});
    //$(".hrt").each(function(){
      $(".hrt").on("click",function(){
        if($("img",this).attr("src")=="heart.png"){
          $(".toutou").css({"padding-right":"0px"});
          $(this).html('<img id="sur" src="heart2.png">');
          $("#sur").stop().animate({"opacity":"0"},
          {duration:600,
          complete:function(){
            $("#sur").remove();
            $(".toutou").css({"padding-right":"20px"});
          }}
          );
          reblogheart[4]= new Image();
          reblogheart[4].src = "heart2.png";
          $(this).prepend(reblogheart[4]);
          /*
          var flyyou = $(this).offset();
          console.log(flyyou);
          reblogheart[4]= new Image();
          reblogheart[4].src = "heart2.png";
          
          $(this).append('<span id="flyspan"><img id="flyheart" src="heart2.png"></span>');
          $("#flyheart").animate({"top":flyyou},170);
          */
          /*190,"swing"*/
          /*$("#flyheart").animate(
            {"opacity":"0"},
            {duration:10000,complete:function(){$("#flyheart").remove();}}
            );
            */
          //$("#flyheart").animate({"opacity":"0"},{duration:400,complete:function(){$("#flyheart").remove();}});
          /*
          $(this).css({"display":"inline-block","height":"27px"});
          $("img",this).css({"padding-top":"0px","padding-bottom":"5px"});
          //$(".rbl img").css({"padding-top":"3px"});
          $(this).append('<div id="vanishdiv"><img id="vanishred" src="heart2.png"><div id="clear"></div>');
          $("#vanishred").stop().animate(
            {"opacity":"0"},
            {duration:700,
            complete:function(){
              $("#vanishdiv").remove();
              $(".hrt").css({"display":"inline"});
              $(".hrt img").css({"padding-bottom":"1px"});
            }
            }
            );
          ↑敗北の歴史や。結局、ハートを漂わせることはできへんかった。糞が。fixedは最初の座標を基準にしやがるからスクロールしたら対応できない。糞が。
          このへんのfixedの性質がLightningが重宝される所以だろう、再現できる気がしないわ。
          */
          
          /*
          $(this).append('<span id="flyspan"><img id="fly" src="heart2.png"></div>');
          $(this).css("position","relative");
          $("#flydiv",this).animate(
            {"opacity":"0",
              //"top":"50%"
            },
            {duration:800,
            complete:function(){
              $("#fly").remove();
            }}
          );これはLikeしたときのアニメーションを挑戦した分
          */
          /*
          reblogheart[3]= new Image();
          reblogheart[3].src = "heart.png";
          reblogheart[4]= new Image();
          reblogheart[4].src = "heart2.png";
        }else{
          $(".toutou").css({"padding-right":"0px"});
          $(this).html('<img id="sur" src="heart3.png">');
          $("#sur").stop().animate({"opacity":"0"},
          {duration:600,
          complete:function(){
            $("#sur").remove();
            $(".toutou").css({"padding-right":"20px"});
          }}
          );
          reblogheart[4]= new Image();
          reblogheart[4].src = "heart2.png";
          $(this).prepend(reblogheart[3]);
          //$(this).html(reblogheart[3]);
          reblogheart[3]= new Image();
          reblogheart[3].src = "heart.png";
          reblogheart[4]= new Image();
          reblogheart[4].src = "heart2.png";
        }
        return false;
      });
      */
    //});
    
    /*
    
    $(".rbl").each(function(){
      var rection = function(){
        if($("img",this).attr("src")=="reblog.png"){
        $(this).click(function(){
          $(this).html(reblogheart[2]);
          reblogheart[1]= new Image();
          reblogheart[1].src = "reblog.png";
          reblogheart[2]= new Image();
          reblogheart[2].src = "reblog2.png";
          console.log(".rblのワン");
          rection();
          return false;
        });
        }else if($("img",this).attr("src")=="reblog2.png"){
        $(this).click(function(){
          $(this).html(reblogheart[1]);
          console.log(".rblのツー");
          rection();
          return false;
        });  
        }  
      };
      rection();
      return false;
    });
    */
    
    
      /*
      var haction1 = function(){
            
      };
      var haction2 = function(){
        
      };
      $(this).click(function(){
        if($("img",this).attr("src")=="heart.png"){
          haction1();
        }else if($("img",this).attr("src")=="heart2.png"){
          haction2();
        }
        $(this).html(reblogheart[4]);
        
        
        
        console.log(".hrtのワン");
        
        return false;
      });
      */
      
      /*
      if($("img",this).attr("src")=="heart2.png"){
        $(this).click(function(){
          $(this).html(reblogheart[3]);
          console.log(".hrtのツー");
          return false;
        });
      }
      */
      /*
      $(this).click(function(){
        $(this).html(reblogheart[3]);
        console.log(".hrtのツー");
        
        return false;
      });
      */
      //↑悪戦苦闘の跡...  
    
    
    var key = -1;
    
    $("html").on("keydown",function(e){
      var contmany = $(".cont").length;
      /*
      var kusoga = document.getElementById("dashmain");
      var kusogamargin = kusoga.style.marginLeft;
      */
      //var dashmainmargin = parseInt($("#dashmain").css("margin-left"));
      //var dashmainmargin = parseInt(kusogamargin,10);
      /*
      var dashproto = $("#dashmain").css('margin-left');
      var dashmainmargin = parseInt(dashproto,10);
      */
      var naruhodo = $("#dashmain").offset().left;
      var dashmainmarginff = parseInt(naruhodo,10);
      switch(e.which){
       case 51:
        if(key <= 0){
          key = -1;
          $('.focusyou').blur();
          $("html,body").stop().animate(
            {scrollTop:0},
            {duration:170,complete:function(){
              
            }
          });
        }else{
          key = key-1;
          var kai=$('.cont:eq('+key+')').offset().top;
          //$(window).stop().animate({top:kai-55},170);/*190,"swing"*/
          $("html,body").stop().animate(
            {scrollTop:kai-55},
            {duration:170,complete:function(){
              $('.focusyou:eq('+key+')').focus();
            //var leftforfixed = 
              $('.focusyou:eq('+key+')').focusin(function(){
                $(".tmicon",this).attr("id","avatarfixed");
                $("#avatarfixed").css({"left":dashmainmarginff+16.5+"px"});
                $("#avatarfixed").removeClass("tmicon");
              });
              $('.focusyou:eq('+key+')').focusout(function(){
                //$("#avatarfixed").animate({"top":"-100px"},{duration:1000});
                $("#avatarfixed").addClass("tmicon");
                $(".tmicon",this).removeAttr("id");
                $(".tmicon",this).css({"left":"-85px"});
                //ココ、toggleを使って書いてみよう、というか、全体的に冗長な表現が多い
              });
            }
          });/*190,"swing"*/
          
          
          /*
          糞、全然美しくならない、問題が山積みすぎて解きほぐせない
          1.animateのcomplete関数のなかからfocus系を出したことで上にスクロールしたときに瞬時に上のアイコンにfocusされるようになったけど、同時に少しブレるようになった
          2.focusを採用しているからか、下スクロールで一度fixedしたアイコンしか、上スクロールにおいてfixedされない、お手上げレベルの謎
          3.適当にスクロールしてから3/4使ったら一気に戻る、keyの数に依存しているから
          ↓
          問題は、①key依存のスクロールロジック②focus依存のactionロジック
          keyconfigはどうやってるんだろ、根本的なロジックが違う感じだ、windowのoffsetとかを使ってんの蚊？
          とにかく、focusを根拠にfixedしたりreblog/likeしたりするのがまずい、イコールでkeyを根拠にしたプログラム
          winowのなかの面積？なんなんだろ、ほんと。少なくともfocusではない
          位置？keyconfigとtumblrオリジナルの仕様は別物だからそれを踏まえないといけない
          tumblr独自仕様は、joubuに隣接もしくは交差しているコンテンツ、そのアイコンはfixedになること
          keyconfig仕様は、joubuと交差しているコンテンツの次のコンテンツをjoubuに接するようスクロールすること
          つまり、アイコンfixed系はkeydownとは別で実装しないといけないってことか
          厳密にはreblog/likeもkeyconfigではないからね、taberarelooだから
          reblog/likeもkeydownとは別物で、アイコンfixedと同時に実装するものなんかもしれん
          とにかくkey&focusの実装だとこれ以上改善できないと思う
          一度全部バラして新しいロジックを構築しないと...
          
          $('.cont:eq('+key+') .tmcon').attr("id","fixedtower");
          $("#fixedtower").removeClass("tmcon");
          $("#fixedtower img").wrap('<div id="avatarfixed"></div>');
          */
        }//12/28,animateのコールバック関数内にfocus系を組み込むことで問題を解消したっぽい
        break;
       case 52:
          key++;
          //ここ、画面を大きくしたときに.rblにfocusするから少しズレてから着地するようになる。。。
          //いけたぁぁぁ。.darekaraに空のfocus用の<a>いれてそこにfocusするようにしたら上手くいきました
          var ba=$('.cont:eq('+key+')').offset().top;
          $("html,body").stop().animate(
            {scrollTop:ba-55},
            {duration:170,complete:function(){
              $('.focusyou:eq('+key+')').focus();
              
              $('.focusyou:eq('+key+')').focusin(function(){
                $(".tmicon",this).attr("id","avatarfixed");
                $("#avatarfixed").css({"left":dashmainmarginff+16.5+"px"});
                $("#avatarfixed").removeClass("tmicon");
              });
              $('.focusyou:eq('+key+')').focusout(function(){
                //$("#avatarfixed").animate({"top":"-100px"},{duration:1000});
                $("#avatarfixed").addClass("tmicon");
                $(".tmicon",this).removeAttr("id");
                $(".tmicon",this).css({"left":"-85px"});
              });
            }
          });/*190,"swing"*///swing、あったほうがいいかなぁ、感覚的に、決めかねてはいるけど。。。いや、ないほうが自然だし無しでいこう
          //stop()いれたことで押しっぱなしの融通が効くようになった感がある。きちんとカウントしてくれるというか。
          /*$('.cont:eq('+key+') .tmcon').attr("id","fixedtower");
          $("#fixedtower").removeClass("tmcon");
          $("#fixedtower img").wrap('<div id="avatarfixed"></div>');*/
        break;
      }
      /*
      $('.focusyou:eq('+key+')').focusin(function(){
        $(".tmicon",this).attr("id","fixedtower");        
        $("#fixedtower").removeClass("tmicon");
        $("#fixedtower img").wrap('<div id="avatarfixed"></div>');
      });
      $('.focusyou:eq('+key+')').focusout(function(){
        $("#fixedtower").addClass("tmicon");//ココ、toggleを使って書いてみよう、というか、全体的に冗長な表現が多い
        $(".tmcon",this).removeAttr("id");
        $("#avatarfixed").remove();
      });
      */
    });
    
/*   $(".oyabun").on("focus",function(){
        $(".tmicon",this).attr("id","fixedtower");        
        $("#fixedtower").removeClass("tmicon");
        $("#fixedtower img").wrap('<div id="avatarfixed"></div>');
    });
*/    
    /*
    (function(){
      if(bodysct > body80){
        li10("dash","cont");
        li10("dash","cont");
        li10("dash","cont");
        console.log("増えたで");
      }
    }());
    */
          //12/22
          //「background-color」ではなく「backgroundColor」にしたら反応したよ!!!!!!!!!!!!!！！！！！！！！！！！！！！！！！！！！！！！！！！
          //animateは基本、数値型の値をとらない属性(backgroundColorなど)には対応しません。とのこと。
          //「background-color」と「backgroundColor」の違いはなんだろ
          //あと、よくわからずいれた「stop()」がやばい、連打Reblogできるようになった。途中でanimateを中断してくれるのかな。
          //今日の収穫は1.jQueryUI 2.「backgroundColor」 3.stop(); 
          //まあ他にもいろいろある。.contにkeydownをonすることを思いついたり、focusを当てる場所を.rblにすることを思いついたり。
          //べつにscrollTopの根拠となるものとfocusを合わせるものを統一しなくてもいい、という学び
          //animateは数値を値としない属性には使えないことは勉強になった
          //あと残ってる実装は
          //1.avatar画像のposition、absoluteとfixedをスクロール検知でスイッチさせる
          //2.一定のscrollBottom(??)になったら新しいリストアイテムを追加するようにする
          //(scrollBottomというプロパティは存在しなくて、$(window).scrollTop+$(window).heightで算出できる)
          //あとなんかあったっけ。あぁ
          //3.Likeのときのアクション
          //欲を言えば、ファイル投げたらこのフォーマットで画像遊びできるやつ、もかな。
          
          
          
          
          //("class","oyabunred");
          
          
    
    /*
    var redkansi= function(){
      setTimeout(function(){
        if($(".cont div").attr("class")=="oyabunred"){
          $(".cont>div").attr("class","oyabun");
          console.log("頼む上手くいってくれ");
          redkansi();
        }else{
          console.log("暇");
          redkansi();
        }
      },1000);
    };
    redkansi();*/
    /*
     
      $(this).focusin(function(){
      $("html").on("keydown",function(e){
        
      });
    
   });
   */
          //$(window).scrollTop(ba-55);
          
          /*
          (function(){
            window.scroll(0,100);
          }());
          */
          //$("body").scroll("top",+"50px");
          //$(".cont:eq("+key+")").focus();
          //console.log(focus());
          
          
    
    
    $("#return").click(function(){
      //key = null;
      $("html").off("keydown");
      $(".cont").off("keydown");
      $("#main4").animate(
        {"width":"0%"},
        {duration:600,
         complete:function(){
           $("#main4").remove();
         }
        }
      );
      $("#joubu4").animate(
        {"width":"0%"},
        {duration:600,
         complete:function(){
           $("#joubu4").remove();
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
    
   
   /*
   var kekeke = function(){
    
    $('html').keydown(function(e){
    switch(e.which){
      case 51:
      $('#joubu4').css("background-color","red");
      (function(){
        window.scrollTo(0,0);
      }());
      break;

      case 52:
      
      
      $('#joubu4').css("background-color","black");
      $('.aimage:eq('+key+')').focus();
      //$("body").scroll("top",+"50px");
      //$(".cont:eq("+key+")").focus();
      console.log(key);
      console.log(focus());
      key++;
      kekeke();
      
      /*(function(){
        
        window.scroll(0,"476px");
      }());
      
      break;
      }
    });  
   };
   kekeke();
   */
   
    /*$("html").keyDown(function(){
      switch
    });*/
  });
};


$(function(){
  nakacli();
  
});  
  
    
    
    //なんかうまくいきそう。このranという数字を再帰する関数スコープ内で宣言して再帰したらいけるかも
    /*(function(){
      
      for(var i = 0;i < 10;i++){
      $(".cont:eq("+i+")").append('<div>'+tm[i]);
      }
      //$(".umage").attr("src","tmage/t"+ran+".png");
    }());*/
//var iti = $(".tmicon:first").offset();
    //console.log(iti.top);