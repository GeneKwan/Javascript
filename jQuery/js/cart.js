
$(function(){
   
    /*
      思路
         1、加数量
         2、减数量
         3、价格小计
         4、单行删除
         5、全选
         6、全删：删除多个
         7、总数量
         8、总价格
     */
    
    // 用事件委托来绑定事件

    // 加数量
    $('#cart').on('click','.addnum',function(){
        let val = $(this).prev().val();  // 获取数值
        val++;  // 隐式转换
        if(val >= 100){  // 库存问题
            val = 100;
        }
        $(this).prev().val(val); //重新写入数值
        price($(this));  // 调用函数传参
        let arr = checkNum();
        tolNum(arr);
        tolPrice(arr);
    });

    // 减数量
    $('#cart').on('click','.cutnum',function(){
        let val = $(this).next().val();
        val--;
        if(val <= 1){  // 数量不能小于1
            val = 1;
        }
        $(this).next().val(val);
        price($(this));
        let arr = checkNum();
        tolNum(arr);
        tolPrice(arr);
    });

    // 价格小计
    function price(now){
        let pri = now.parent().prev().find('b').text(); // 获取单价
        let num = now.parent().find('input').val();
        let all = pri * num;
        // 写入价格
        now.parent().next().find('b').text(all.toFixed(2));
    }

    // 删除单行
    // $('#cart').on('click','.del',function(){
    $('#cart').on('click','.good_del',function(){
        var mes = confirm('您确定要删除该行吗？');
        // console.log(mes);  // true/false
        if(mes){
            // $(this).parent().parent().remove();
            $(this).parent().remove();
        }
        update();
        let arr = checkNum();
        tolNum(arr);
        tolPrice(arr);
    });

    // 全选
    let isChecked = true;
    $('#allChecked').on('click',function(){
        //prop() 添加属性(行为的)
        //attr（）添加属性
        if(isChecked){
            $('#allChecked input').prop('checked','checked');  // 勾选
            $('.good_check input').prop('checked','checked');
            let arr = checkNum();
            tolNum(arr);
            tolPrice(arr);
        } 
        else{
            $('#allChecked input').removeAttr('checked');  // 取消勾选
            $('.good_check input').removeAttr('checked');
            let arr = checkNum();
            tolNum(arr);
            tolPrice(arr);
        }
        isChecked = !isChecked;
    });

    // // 判断是否全选
    // $('#cart').on('click', '.good_check', function(){
    //     check();
    // });
    // function check(){
    //     if($('.good_check input').prop('checked')){
    //         $('#allChecked input').prop('checked','checked');           
    //     }
    // }
     
    // 勾选的数量
    function checkNum(){
        let arr = []; //创建一个空数组，存放勾选项的索引值
        let len = $('.good_check input').size();
        for(let i=0;i<len;i++){
            if($('.good_check input').eq(i).prop('checked')){
                arr.push(i);
            }
        }
        // 返回数组arr
        return arr;
    }


    // 全删
    $('#delAll').on('click',function(){
        let arr = checkNum();
        // 删除多行
        let mes = confirm('您确定要删除选中的商品吗？');
        if(mes){
            for(let i=arr.length-1;i>=0;i--){
                $('.good_check').eq(arr[i]).parent().remove();  // 从后往前删除，以免删错
            }
            update();
        }
    });

    // 当所有商品项都删除了，把全选栏也删除
    function update(){
        if($('.addnum').size() == 0){
            $('#del').remove();
        }
    }

    // 全选补充
    $('#cart').on('click','.good_check',function(){
        let arr = checkNum();  // 被勾选的
        if(arr.length == $('.good_check').size()){
            $('#allChecked input').prop('checked','checked');
        }
        else{
            $('#allChecked input').removeAttr('checked');
        }
        // 总数量
        tolNum(arr);
        // 总价格
        tolPrice(arr);
    });

    // 总数量
    function tolNum(arr){
        let num = 0;
        for(let i=0;i<arr.length;i++){
            num += parseInt($('.nownum').eq(arr[i]).val());
        }
        $('#allNum').html('已选' + num + '件商品');
    }

    // 总价格
    function tolPrice(arr){
        let price = 0;
        for(let i=0;i<arr.length;i++){
            let nowPrice = $('.good_total').eq(arr[i]).find('b').text();
            price += nowPrice*1;
        }
        $('#totalPrice').find('b').text(price.toFixed(2));
    }
});