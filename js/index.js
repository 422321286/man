$(function(){
    //菜单栏请求 
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getindexmenu',
        dataType:'json',
       success:function( res ){
        //   console.log( res );
          var htmlstr = template('templateMenu',res);
          
          $('.m_menu ul').html(htmlstr);

        
       }
    })
    

    

    $('ul').on('click','li:nth-child(8)',function(){
        console.log(1);
        
         console.log($("li:nth-last-child(-n+4)"));
         
         
         $($("li:nth-last-child(-n+4)")).each(function(i,v){
            v.classList.toggle('current');
         //    div.classList.toggle('dd');
         })
       })


       //折扣店
       $.ajax({
           type:'get',
           url:'http://127.0.0.1:9090/api/getmoneyctrl',
           dataType:'json',
           success:function( result ){
              console.log( result );
              var htmlstr = template('productTpl',result);
              $('.product ul').html(htmlstr);
           }
       })
})


