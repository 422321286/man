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
    var content = getSearch()[0];
    var id = getSearch()[1];
 //将点击的数据给li 
    $('.m_line li:nth-child(3)').text(content);


  var currentPage =1;//当前的页数
 //请求列表数据
 render();

  function render() {
      //请求列表数据
    $.ajax({
        type:'get',
        url:'http://127.0.0.1:9090/api/getproductlist',
        data:{
            categoryid:id,
            page:currentPage
        },
        dataType:'json',
        success:function( info ){
             console.log( info );
             var htmlstr = template('listTpl',info);
             $('.product ul').html(htmlstr);
        //    var page= Math.ceil(info.totalCount/info.pagesize)
             setPage(currentPage,info.totalCount)
        }
    })
  }
   
 

      // 2. 设置分页
   function setPage(page,total){
    $('#pagination').pagination(total ,{
       prev_text:'上一页',
       next_text:'下一页',
        // items_per_page:10,    //一页放多少条数据,不写的话,默认也是10条
        num_edge_entries: 1,       //两侧首尾分页条目数
                  num_display_entries: 5,    //连续分页主体部分分页条目数
                  current_page: page - 1,   //当前页索引
                  load_first_page: false, //分页初始化,不让回调函数执行
                  //点击分页标签的时候,会触发
                  callback: function(index){
                      // 对应的当前页的下标
                      // console.log(index);
                      //请求新的数据,渲染到页面上

                      currentPage = index + 1;
                      console.log(currentPage);
                      
                      render();
                      
                  },  
     });

   }
})