function sendRecieve(k){
   $(".content").append('<div class="msgBox"><div class="recieve">'+k+'</div></div>');
}
function getResponse(m){
   switch(m){
      case "hi":
      case "Hi":
      case "HI":
         return "hello";
         break;
      case "":
         return "That was totally empty input.";
         break;
      case "Bye":
      case "bye":
      case "BYE":
      case "goodbye":
      case "Goodbye":
         return "Goodbye,<br>It was a nice talk with you."
         break;
      case "how are you":
      case "how are you?":
      case "How are you":
      case "How are you?":
         return "I'm fine,<br>What about you?"
         break;
      default:
         return "This keyword isn't in my Dictionary.<br>Try entering something else!!";
   }
}