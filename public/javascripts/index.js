/**
 * Created by 17633 on 2018/5/3.
 */
window.onload=function () {
    var oStatus=document.getElementsByClassName('indexTopOl1');
    // var oStatusImg=document.getElementsByClassName('indexTopOl2');

    var keyWordStatus=1;
    for(var i=0;i<3;i++){
        oStatus[i].index=i;
        oStatus[i].onclick=function(){
            for(j=0;j<3;j++){
                oStatus[j].style.background='none';
                oStatus[j].style.color='#FFFFFF';
                // oStatusImg[j].style.display='none';
            }
            oStatus[this.index].style.background='#FFFFFF';
            oStatus[this.index].style.color='#0307FF';
            keyWordStatus=Number(this.index);
        }
    }
    var oBtn=document.getElementById('indexTopSearchBtn');
    oBtn.onclick=function(){
    //     var keyWord=document.getElementById('indexTopSearchInput').value;
    //     var data={"keyWord":keyWord,"keyWordStatus":"keyWordStatus"};
    //     var data2=JSON.stringify(data);
    //     var oAjax=new XMLHttpRequest();
    //     oAjax.open('GET','http://localhost:3000/page',true);//open方法
    //     oAjax.setRequestHeader("content-Type","application/json;charset=utf-8");
    //     oAjax.send(data2);
    //     oAjax.onreadystatechange=function()
    //     {
    //         if(oAjax.readyState==4){                              //浏览器和服务器交互完成
    //             if(oAjax.status==200){
    //                 // alert("成功"+oAjax.responseText);
    //                 alert('123');
    //             }
    //             else {
    //                 alert('失败'+oAjax.status);
    //             }
    //         }
    //     };
        window.open("http://139.199.109.224:3000/page");
}
}
