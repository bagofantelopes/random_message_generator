
// Load messages from text file
const fs = require("fs");

var messagesArray = fs.readFileSync('messages.txt').toString().split("\n");
var randomMessage = Math.floor(Math.random() * arr.length);


