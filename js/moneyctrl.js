$(function(){
    var currentPage =0;
    render();
    function render() {
        $.ajax({
            type:'get',
            url:'http://127.0.0.1:9090/api/getmoneyctrl',
            data:{
             pageid :currentPage
            },
            dataType:'json',
            success:function( info ){
             console.log( info );
             var htmlstr = template('proTpl',info);
             $('.product ul').html(htmlstr);
             setPage(currentPage,info.totalCount)
            }
        })
    }
  


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