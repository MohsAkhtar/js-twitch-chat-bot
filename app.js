const tmi = require('tmi.js');
const apikey = "oauth:ympmbfqrgzl3yi3q96kkt4s9ly5ybq"
const name = "my_chat_bot_"

const options = {
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
    channels: ["room1"]
}

// connect to IRC
const client = new tmi.client(options)
client.connect();

client.on('connected', (address, port) => {
    console.log("Address: " + address + " " + "Port: " + port);
})