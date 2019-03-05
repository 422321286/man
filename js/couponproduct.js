$(function(){
    function getSearch( ) {
        var str = location.search; //这个是没有解码的,需要解码
        //进行中文解码
        str = decodeURI(str); //?key=匡威&name=pp&age=18
        //去掉问好
        //截取字符创
        //  str.slice(start,end);//截取到start 包含start,不包括end
        // str.slice(start) 从start 开始到结尾;
        str = str.slice(1);
        var arr = str.split('=');
        return arr
    }
    var content = getSearch()[0];
    $('.header').text(content);
   var id = getSearch()[1];
  console.log(id);
  
   $.ajax({
    type:'get',
    data:{
        couponid:id,
    },
    url:'http://127.0.0.1:9090/api/getcouponproduct',
    dataType:'json',
    success:function( info ){
         console.log( info );
        var htmlstr = template('yTpl',info);
        $('.product ul').html(htmlstr);






          //实验产品
        // console.log($('.left img'));
        var imgs = $('.left img');
       var arr = [];
      imgs.each(function(index,v){
          arr.push(v.src);
      })
      $('.btn img').attr('src',arr[1]);
    //   console.log(arr);

      var nows = 0
      $('.btn .next').on('click',function(){
          console.log(1);
          nows++;
          if(nows >arr.length-1){
              nows =0
          }
         
           $('.btn img').attr('src',arr[nows]);
      })
      $('.btn .pre').on('click',function(){
        console.log(2);
        
        nows--;
        if(nows < 0){
            nows =arr.length-1;
        }
         $('.btn img').attr('src',arr[nows]);
    })
        //点击显示
        $('ul').on('click','.left a',function(){
            var imgid = $(this).data('id')
               nows = imgid;//领点击的图片的下标给数组的小标
            console.log(arr[2]);
           
            $('.btn img').attr('src',arr[imgid]);
           show();
        })
        //点击隐藏
        $('.btn span').on('click',function(){
            closeDiv();
        })
    
    }
      
})


//调用方法
function show(){
    $(".lbOverlay").css({"height":window.screen.availHeight});
    $(".lbOverlay").show();
 
    // var st=$(document).scrollTop(); //页面滑动高度
    var objH=$(".hidden_pro_au").height();//浮动对象的高度
    var ch=$(window).height();//屏幕的高度  
    var objT=(Number(ch)-Number(objH))/2;   //思路  浮动高度+（（屏幕高度-对象高度））/2
    $(".hidden_pro_au").css("top",objT);
     
    var sl=$(document).scrollLeft(); //页面滑动左移宽度
    var objW=$(".hidden_pro_au").width();//浮动对象的宽度
    var cw=$(window).width();//屏幕的宽度  
    var objL=Number(sl)+(Number(cw)-Number(objW))/2; //思路  左移浮动宽度+（（屏幕宽度-对象宽度））/2
    $(".hidden_pro_au").css("left",objL);
    $(".hidden_pro_au").slideDown("20000");//这里显示方式多种效果
}
function closeDiv(){
    $(".lbOverlay").css({"height":0});
    $(".lbOverlay").hide();
    $(".hidden_pro_au").hide();
}
})

 