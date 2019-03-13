// TEMPLATE OF A MESSAGE
class Message {
  constructor(text,author,date) {
    this.text = text;
    this.author = author;
    this.date = new Date();//CURRENT TIME
  }
}
// ////////////////??CHAT LOGIC??//////////////////
var messages=[];//list of messages
function addMessage() {
  var input = document.querySelector('#chat .input input');
  // VALIDATION
  // message>=2symbols
  // no spaces
  var m = new Message(input.value,"user");
  messages.push(m);
  console.log( messages );
  localStorage.setItem("messages", JSON.stringify(messages));
  input.value="";
  showMessages();
}
  function loadMessages() {
    messages=JSON.parse(localStorage.getItem('messages'));
    if(messages===null){
      messages=[];
    }
    showMessages();
  }
  function showMessages() {
    var div = document.querySelector('#chat .messages');
        div.innerHTML='';
        //Show only Last 8 messages
        //
        for(var i in messages){
          var html = `<div class = "message"><p>${messages[i].text}<hr><small>${messages[i].author}/${messages[i].date}</small></p></div>`;
          div.innerHTML+=html;
        }

}
// console.log(m);
