$(function(){
//    标题
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getcategorytitle',
        dataType:'json',
        success:function( info ){
           console.log( info );
           var htmlstr = template('categoryTpl',info);
           $('.m_line ul').html(htmlstr);
           
            // 列表
            // console.log($('li'));
            // $('.m_line').on('click','a',function(){
            //   console.log(this);
            // })
            // $('li').data('id');
            // console.log($('li').data('id'));
            
         
        }
    })
   
    $('#ul').on('tap','li',function(){
        // console.log(1);
        
       var id = $(this).data('id');
       console.log(id);
     var that = $(this);
       $.ajax({
           type:'get',
           url:'http://127.0.0.1:9090/api/getcategory',
           data:{
            titleid:id
           },
           success:function( info ){
             console.log( info );
             var htmlstr = template('tableTpl',info);
            that[0].innerHTML += htmlstr;

            //  that.html(htmlstr);
           }
       })
       
      })

 })
  
    

  
