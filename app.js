
// Load messages from text file
const fs = require("fs");

var messagesFirstHalf = fs.readFileSync('messages.txt').toString().split("\n");
var messagesSecondHalf = fs.readFileSync('messages2.txt').toString().split("\n");
var randomMessage = Math.floor(Math.random() * messagesFirstHalf.length);
var randomMessage2 = Math.floor(Math.random() * messagesSecondHalf.length);

console.log(`${messagesFirstHalf[randomMessage]}`);
console.log(`${messagesSecondHalf[randomMessage2]}`);
