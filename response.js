function sendRecieve(k){
   $(".content").append('<div class="msgBox"><div class="recieve">'+k+'</div></div>');
}
var map= new Map();
map.set("hi","Hello")
.set("hello","Hello!!")
.set("how are you","I'm fine,<br>What about you?")
.set("who are you","I'm an artificial Chatbot.")
.set("you born","I was born on November 28, 2021")
.set("goodbye","Goodbye,<br>It was a nice talk with you.")
.set(" day","Today is "+getDay()+".")
.set("fine","Nice to hear that you're fine.")
.set("your name","You can call me by any name that you like.")
.set("my name","I can’t think of it")
.set("comes after","I'm not good at maths")
.set(" food","Your phone's battery")
.set("friend","You are my best friend.")
.set("you jok","No, I'm serious")
.set("play game","No, lets chat on...")
.set("play","I can't play")
.set("game","My favourite game is nothing.")
.set("color","My favourite color is black")
.set("hobby","My hobby is to chat with you")
.set("i want","I also want...")
.set("i wanna","me too")
.set("i am","me too")
.set("are funny","You are also funny.")
.set("good","Thank you, so much!!")
.set("why","I'm not good at reasoning.")
.set("old","I was born on Nov 28,2021")
.set("know","I don't know")
.set("ready","I'm Eveready.")
.set("serious","I always remains serious")
.set("favourite","you are my favourite.")
.set("you happy","Yes, I am feeling happy,<br>Are you happy?")
.set("happy","I am also happy.")
.set("thank","You are welcome!!")
.set("great","You are also great.")
.set("see you","See you soon")
.set("help","I am always here to help you,<br>How can I help?")
.set("nice","Yes, it is...")
.set("am i","Yes, you are")
.set("may i","Yes, Of course")
.set("right","true")
.set("wrong","right")
.set("no","ok")
.set("ok","fine")
.set("really","yes")
.set("yes","okay,<br>That's nice")
.set("are","Yes Of course, I am.")
.set("you","me")
.set("he","Yes he is.")
.set("who","That's you")
.set("how","I am not good at reasoning")
.set("bye","bye-bye,<br>See you soon!");
var all=map.entries();
var goi="";
for(let k of all){
   goi+="<b>"+k[0]+" : </b>"+k[1]+"<br />";
}
map.set(" keyword",goi);
function getResponse(m){
   m=m.toLowerCase();
   var kv=map.entries();
   var responded=false;
   if(m==""){
      return "That was totally empty input.";
   }
   for(let k of kv){
      if(m.includes(k[0])){
         return k[1];
         responded=true;
      }
   }
   if(responded==false){
      return "I'm not good at English, please enter valid grammer.";
   }
   responded=false;
   /*switch(m){
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
         return "Goodbye,<br>It was a nice talk with you.";
         break;
      case "how are you":
      case "how are you?":
      case "How are you":
      case "How are you?":
         return "I'm fine,<br>What about you?"
         break;
      default:
         return "This keyword isn't in my Dictionary.<br>Try entering something else!!";
   }*/
}
function getWish(){
   var date=new Date();
   var hrs=date.getHours();
   if(hrs<12){
     return "Good Morning";
   }
   if(hrs>=12&&hrs<=16){
     return "Good Afternoon";
   }
   if(hrs>16){
     return "Good Evening";
   }
}
function getDay(){
   let date=new Date();
   var day=date.getDay();
   var dayName;
   switch(day){
     case 0:
       return "Sunday";
       break;
     case 1:
       return "Monday";
       break;
     case 2:
       return "Tuesday";
       break;
     case 3:
       return "Wednesday";
       break;
     case 4:
       return "Thusday";
       break;
     case 5:
       return "Friday";
       break;
     case 6:
       return "Seturday";
       break;
   }
}
$(".content").append('<div class="msgBox"><div class="recieve">'+"Hey"+'</div></div>');
$(".content").append('<div class="msgBox"><div class="recieve">'+getWish()+"!!"+'</div></div>');
$(".content").append('<div class="msgBox"><div class="recieve">'+"How can I help you?"+'</div></div>');