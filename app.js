const tmi = require('tmi.js');
const apikey = "oauth:ympmbfqrgzl3yi3q96kkt4s9ly5ybq"
const botName = "my_chat_bot_"
// Channel bot connects to
const connectedChannel = "my_chat_bot_"

const options = {
    options: {
        debug: true
    },
    connection: {
        cluster: "aws", 
        reconnect: true
    },
    identity: {
        username: botName,
        password: apikey
    },
    channels: [connectedChannel]
}

// connect to IRC
let client = new tmi.client(options)
client.connect();

// On when a user enters a message in chat, bot replies to that user
client.on("chat", function (channel, userstate, message, self) {
    client.action(connectedChannel, userstate['display-name'] + " you are a total noob")
});

// On bots connection
client.on('connected', (address, port) => {
    console.log("Address: " + address + " " + "Port: " + port);
    client.action(connectedChannel, "Hi there bro");
})

