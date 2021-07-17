const API = require('call-of-duty-api')({ platform: "all" });
const Slimbot = require('slimbot');
const bot = new Slimbot('1915366945:AAEwTu7T3G6A8ooESb4jSdfpDQcogsAHxJQ');


const login = async () => {
    try {
        await API.login('yur0n@yahoo.com', '786512qw')
        console.log('Logged in')
    } catch (e) {
        console.log(e)
    }
}
login()

bot.on('message', async mes => {
    console.log(mes)
    if (mes.text == '/start') {
        console.log(mes.chat.id)
        bot.sendMessage(mes.chat.id, 'Hey! Enter a Battle.net profile you want to track, for example: Recrent#2453')
    } else {
        try {
        bot.sendMessage(mes.chat.id, 'Loading...')
        const data = await API.MWcombatwz(mes.text, 'battle')
        var kills = data.matches[0].playerStats.kills
        bot.editMessageText(mes.chat.id, mes.message_id + 1, `In the last match ${mes.text} had ${kills} kills`)  
        } catch (e) {
            bot.editMessageText(mes.chat.id, mes.message_id + 1, 'Not found. Incorrect username/platform or misconfigured privacy settings.')
        } 
}
});


bot.startPolling();