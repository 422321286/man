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
        return arr; 
    }
    var id = getSearch()[0];//获取的id
    var content = getSearch()[1];//获取商品名称

    
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getproduct',
        data:{
            productid :id,
        },
        dataType:'json',
        success:function( info ){
           console.log( info );
          $('.m_line li:nth-child(3)').text(content);
          var htmlstr = template('bijiaTpl', info);
          $('.product ul').html(htmlstr);

       //获取productid;
    // console.log( productid);
        var   productid = $('.product li').data('id');
        $.ajax({
            type:'get',
            url:'http://127.0.0.1:9090/api/getproductcom',
            data:{
                productid:productid,
            },
            dataType:'json',
            success:function( info ){
               console.log( info )
               var ht = template('pinTpl',info);
               $('.wang ul').html(ht);
            }
        })
        }
    })

   

    
  
})