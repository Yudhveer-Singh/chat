function sendMsg(){
   let msg=$("#input").val();
   if(msg!=""){
      $(".content").append('<div class="msgBox"><div class="null"></div><div class="sent">'+msg+'</div></div>');
      document.getElementById("input").value="";
      let replay=getResponse(msg);
      setTimeout(function(){
         sendRecieve(replay);
      },200);
      $(".sent").click(function(){
         let k=$(this).html();
         document.getElementById("input").value=k;
      });
   }
   sc();
   setTimeout(function (){
      sc();
   },200);
}
$(".send").click(function(){
   sendMsg();
   //document.getElementById("content").scroll(0,1000);
   //document.getElementById("input").focus();
});
$("#input").keypress(function(e){
   if(e.which == 13){
      sendMsg();
   }
});
$(".sent").click(function(){
   let k=$(this).html();
   document.getElementById("input").value=k;
});
function sc(){
   document.getElementById("content").scroll(0,10000);
}