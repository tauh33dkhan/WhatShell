const qrcode = require('qrcode-terminal');
var execFile = require('child_process').execFile;
require('dotenv').config();
const { Client, LocalAuth } = require('whatsapp-web.js');
const client = new Client({
    authStrategy: new LocalAuth()
});

console.log("Connecting...")
client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
    console.log("Listening commands from: " + process.env.MYWHATSAPPNUMBER)
});

client.on('message', async message => {
    if (message._data.from != process.env.MYWHATSAPPNUMBER) return
    if (message.body.startsWith("/")) {
        const cmd = message.body.split("/")[1]
        await getChatResponse(cmd, message)
    }
})

async function getChatResponse(cmd, message) {
    console.log("Executing: " + cmd)
    await new Promise((resolve) => {
        execFile('/usr/bin/bash', ["-c", `${cmd}`], (err, res) => {
            if (res == '') {
                message.reply("*Output:*\n\n " + err);
            }
            else {
                message.reply("*Output:*\n\n" + res);
            }
        });
    });

}

client.initialize();
