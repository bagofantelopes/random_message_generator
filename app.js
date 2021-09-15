
// Load messages from text file
const fs = require("fs");

var messagesFirstHalf = fs.readFileSync('messages.txt').toString().split("\n");
var messagesSecondHalf = fs.readFileSync('messages2.txt').toString().split("\n");
var randomMessage = messagesFirstHalf[Math.floor(Math.random() * messagesFirstHalf.length)];
var randomMessage2 = messagesSecondHalf[Math.floor(Math.random() * messagesSecondHalf.length)];

let finalMessage = [];

finalMessage.push(randomMessage);
finalMessage.push(randomMessage2);
const x = finalMessage.join('\n');
console.log(x);
