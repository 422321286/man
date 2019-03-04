$(function(){
   
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getbaicaijiatitle',
        dataType:'json',
        success:function( info ){
           console.log( info );
           var htmlstr = template('baiTpl',info);
           $('.nav').html(htmlstr);
  console.log( $('.nav li'));

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
})