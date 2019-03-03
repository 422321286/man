$(function(){

    //进入的时候先渲染一次
  
        $.ajax({
            type:'get',
            url:'http://127.0.0.1:9090/api/getgsproduct',
            data:{
                 shopid:0,
                 areaid:0
            },
            dataType:'json',
            success:function( info ){
              console.log(info);
              var htmlstr = template('productTpl',info);
              $('.row').html(htmlstr);
            }
            
        })
  



    // 京东数据
  $.ajax({
      type:'get',
      url:'http://127.0.0.1:9090/api/getgsshop',
      dataType:'json',
      success:function( info ){
        //  console.log( info );
         var htmlstr = template('gsTpl',info);
         $('.jd').html(htmlstr);
         
      }
  })
//   华北地区数据
$.ajax({
    type:'get',
    url:'http://127.0.0.1:9090/api/getgsshoparea',
    dataType:'json',
    success:function( info ){
      console.log( info );
      var htmlstr = template('hbTpl',info);
      $('.hb').html(htmlstr);
    }


})
 var shopid=0;
$('.jd').on('click','li',function(){
    shopid = $(this).data('id');
   console.log(shopid);
   
});

 
$('.hb').on('click','li',function(){
     var areaid = $(this).data('id');
     console.log(areaid);
     $.ajax({
         type:'get',
         url:'http://127.0.0.1:9090/api/getgsproduct',
         data:{
              shopid:shopid,
              areaid:areaid
         },
         dataType:'json',
         success:function( info ){
           console.log(info);
           var htmlstr = template('productTpl',info);
           $('.row').html(htmlstr);
         }
         
     })
})

})