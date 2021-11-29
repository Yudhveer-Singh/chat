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
}
$(".send").click(function(){
   sendMsg();
});
$(".send").keypress(function(e){
   if(e.which == 13){
      sendMsg();
   }
});
$(".sent").click(function(){
   let k=$(this).html();
   document.getElementById("input").value=k;
});