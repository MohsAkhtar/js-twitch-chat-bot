const tmi = require('tmi.js');
const apikey = "oauth:ympmbfqrgzl3yi3q96kkt4s9ly5ybq"
const name = "my_chat_bot_"
const channel1 = "my_chat_bot_"

let options = {
    options: {
        debug: true
    },
    connection: {
        cluster: "aws", 
        reconnect: true
    },
    identity: {
        username: name,
        password: apikey
    },
    channels: [channel1]
}

// connect to IRC
let client = new tmi.client(options)
client.connect();

client.on("chat", function (channel, userstate, message, self) {
    client.action(channel1, userstate['display-name'] + " you are a total noob")
});

client.on('connected', (address, port) => {
    console.log("Address: " + address + " " + "Port: " + port);
    client.action(channel1, "Hi there bro");
})

