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
        return arr[1]
    }
   var id = getSearch();
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
    }
})
})