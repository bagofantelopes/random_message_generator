
// Load messages from text file
const fs = require("fs");
// Messages from text file get loaded into arrays
var messagesFirstHalf = fs.readFileSync('messages.txt').toString().split("\n");
var messagesSecondHalf = fs.readFileSync('messages2.txt').toString().split("\n");
// A random index of the arrays is chosen to construct a random message
var randomMessage = messagesFirstHalf[Math.floor(Math.random() * messagesFirstHalf.length)];
var randomMessage2 = messagesSecondHalf[Math.floor(Math.random() * messagesSecondHalf.length)];

// The chosen pieces of the message are pushed into an array and joined to create a final string
let finalMessage = [];

finalMessage.push(randomMessage);
finalMessage.push(randomMessage2);
const x = finalMessage.join('\n');
console.log(x);

/*  
    This method is fast, and you can quickly add as many lines to the text files as you want, 
    but it feels a bit wonky. Seems like Javascript doesn't play too well with
    local files like Java or C++ do.
    
    Using an object of string arrays and a switch statement made within the code itself would probably work better.
*/
