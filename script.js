/* const inputField = document.getElementById("input");
inputField.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    let input = inputField.value;
    inputField.value = "";
    output(input);
  }
}); */
if(!"webkitSpeechRecognition" in window){
	alert("Speech Recognition not Available")
} 
const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const SpeechGrammarList = window.SpeechGrammarList || webkitSpeechGrammarList;
const SpeechRecognitionEvent = window.SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

let recognition = new SpeechRecognition();
//recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = "id";
recognition.interimResults = false;
//recognition.maxAlternatives = 1;
recognition.onError = () => {
	console.log('error')
};

recognition.onresult = function (event) {
	let textResult = event.results[0][0].transcript;
	console.log(event.results[0][0].transcript);	
	//document.querySelector("#result").innerHTML = textResult;
	document.getElementById("input").value = textResult;	
	let input = textResult;
	output(input);
	//setTimeout(function(){inputField.value = "";},1000);
}

/* const inputField = document.getElementById("input");
inputField.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    let input = inputField.value;
    inputField.value = "";
    output(input);
  }
}); */
document.write('<script type="text/javascript" src="chat-model.js"></script>');

document.querySelector("#start").onclick = () => {
	recognition.start();
};

document.querySelector("#stop").onclick = () => {
	recognition.stop();
};

function output(input) {
  let product;
  let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
  text = text
    .replace(/ a /g, " ")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "")
    .replace(/r u/g, "are you");

  if (compare(utterances, answers, text)) {
    // Search for exact match in triggers
    product = compare(utterances, answers, text);
  } 
  else {
    product = alternatives[Math.floor(Math.random() * alternatives.length)];
  }

  addChatEntry(input, product);
}

function compare(utterancesArray, answersArray, string) {
  let reply;
  let replyFound = false;
  for (let x = 0; x < utterancesArray.length; x++) {
    for (let y = 0; y < utterancesArray[x].length; y++) {
      if (utterancesArray[x][y] === string) {
        let replies = answersArray[x];
        reply = replies[Math.floor(Math.random() * replies.length)];
        replyFound = true;
        break;
      }
    }
    if (replyFound) {
      break;
    }
  }
  return reply;
}

function addChatEntry(input, product) {
  const messagesContainer = document.getElementById("messages");
  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.className = "user response";
  userDiv.innerHTML = `<span>${input}</span>`;
  messagesContainer.appendChild(userDiv);

  let botDiv = document.createElement("div");
  let botText = document.createElement("span");
  botDiv.id = "bot";
  botDiv.className = "bot response";
  botText.innerText = "Typing...";
  botDiv.appendChild(botText);
  messagesContainer.appendChild(botDiv);

  messagesContainer.scrollTop =
    messagesContainer.scrollHeight - messagesContainer.clientHeight;

  setTimeout(() => {
    botText.innerText = `${product}`;
  }, 2000);
}



function output(input) {
  let product;
  let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
  text = text
    .replace(/ a /g, " ")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "")
    .replace(/r u/g, "are you");

  if (compare(utterances, answers, text)) {
    // Search for exact match in triggers
    product = compare(utterances, answers, text);
  } 
  else {
    product = alternatives[Math.floor(Math.random() * alternatives.length)];
  }

  addChatEntry(input, product);
}

function compare(utterancesArray, answersArray, string) {
  let reply;
  let replyFound = false;
  for (let x = 0; x < utterancesArray.length; x++) {
    for (let y = 0; y < utterancesArray[x].length; y++) {
      if (utterancesArray[x][y] === string) {
        let replies = answersArray[x];
        reply = replies[Math.floor(Math.random() * replies.length)];
        replyFound = true;
        break;
      }
    }
    if (replyFound) {
      break;
    }
  }
  return reply;
}

function addChatEntry(input, product) {
  const messagesContainer = document.getElementById("messages");
  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.className = "user response";
  userDiv.innerHTML = `<span>${input}</span>`;
  messagesContainer.appendChild(userDiv);

  let botDiv = document.createElement("div");
  let botText = document.createElement("span");
  botDiv.id = "bot";
  botDiv.className = "bot response";
  botText.innerText = "Typing...";
  botDiv.appendChild(botText);
  messagesContainer.appendChild(botDiv);

  messagesContainer.scrollTop =
    messagesContainer.scrollHeight - messagesContainer.clientHeight;

  setTimeout(() => {
    botText.innerText = `${product}`;
  }, 2000);
}

// const utterances = [ 
//   ["how are you", "how is life", "how are things"],							//0
//   ["hi", "hey", "hello", "good morning", "good afternoon"],					//1
//   ["what are you doing", "what is going on", "what is up"],					//2
//   ["how old are you"],														//3
//   ["who are you", "are you human", "are you bot", "are you human or bot"],  //4 
// ];
 
// // Possible responses corresponding to triggers
 
// const answers = [
// 	["Fine... how are you?", "Pretty well, how are you?", "Fantastic, how are you?"],		//0                                                                          	//0
// 	["Hello!", "Hi!", "Hey!", "Hi there!", "Howdy"],										//1
// 	["Nothing much", "About to go to sleep", "Can you guess?", "I don't know actually"],	//2
// 	["I am infinite"],																		//3
// 	["I am just a bot", "I am a bot. What are you?"],										//4
 
// ];
 
// // For any other user input
 
// const alternatives = [
//   "Go on...",
//   "Try again",
// ];