$(function(){
   
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getbaicaijiatitle',
        dataType:'json',
        success:function( info ){
           console.log( info );
           var htmlstr = template('baiTpl',info);
           $('.nav').html(htmlstr);

        }
    })
 

    function render() {
        $.ajax({
            type:'get',
            url:'http://127.0.0.1:9090/api/getbaicaijiaproduct',
            data:{
                titleid:0,
            },
            dataType:'json',
            success:function( info ){
            console.log(info );
          var htmlstr = template('contentTpl',info);
          $('.tab-content').html(htmlstr);

          //设置区域滚动;
        var ul = document.querySelector('.nav');
        //   var lis = $('.nav li');
          console.log(ul);
          var width =10;
          $(".nav li").each(function(index,ele){
            width += ele.offsetWidth;
             
          })
          console.log(width);
        //   设置宽度
          ul.style.width = width + "px";

      
        //   // 设置 ul
        //   ul.style.width = ulWidth + "px";
        
        
          // 初始化要放在动态设置 宽度的 下面, 保证计算准确性
          new IScroll("#wrapper", {
            scrollX: true,
            scrollY: false
          });
        
            }
        })
    }
    render();
  
    $('.nav').on('click','li',function() {
        // console.log(this);
        
       var id = $(this).data('id');
       console.log(id);
       $.ajax({
           type:'get',
           url:'http://127.0.0.1:9090/api/getbaicaijiaproduct',
           data:{
               titleid:id,
           },
           dataType:'json',
           success:function( info ){
           console.log(info );
         var htmlstr = template('contentTpl',info);
         $('.tab-content').html(htmlstr);
           }
       })
      
    })

    //滚动,初始化
     
            // new IScroll('#wrapper',{  
            //     mouseWheel : true,      //鼠标滚轮支持  
               
            //     scrollY : false,         //滚动方向（垂直）  
            //     scrollX : true,         //滚动方向（水平）  
            //     bounce : true,          //边界时的反弹动画，默认true  
                  
            // });  
         
   
    

})