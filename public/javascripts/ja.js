/**
 * Created by 18846094389 on 2018/4/21.
 */
//var request = require('request');
var ajax=function () {
    var data={"id":1,"userName":"weg"};
    var data2=JSON.stringify(data);
    // request({
    //     url: url,
    //     method: "POST",
    //     json: true,
    //     headers: {
    //         "content-type": "application/json",
    //     },
    //     body: JSON.stringify(data)
    // }, function(error, response, body) {
    //     if (!error && response.statusCode == 200) {
    //         alert(body)
    //     }
    // });
    var oAjax=new XMLHttpRequest();
    oAjax.open('POST','http://139.199.109.224:3000/nodeAjax',true);//open方法
    oAjax.setRequestHeader("content-Type","application/json;charset=utf-8");
    oAjax.send(data2);
    oAjax.onreadystatechange=function()
    {
        if(oAjax.readyState==4){                              //浏览器和服务器交互完成
            if(oAjax.status==200){
                alert("成功"+oAjax.responseText);
                var oInput=document.getElementById('iInput');
                oInput.value=oAjax.responseText;
            }
            else {
                alert('失败'+oAjax.status);
            }
        }
    };
}
