
const fs = require('fs')
const chalk = require('chalk')

//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['916909137213'] //ur owner number
global.ownername = "NIPUNA RANGANA" //ur owner name
global.ytname = "YT: Xeon" //ur yt chanel name
global.socialm = "GitHub: Nipuna15" //ur github or insta name
global.location = "India, Mizoram, Aizawl" //ur location

//bot bomdy 
global.ownernomer = "916909137213" //ur number
global.premium = ['916909137213'] //ur premium number
global.botname = 'Moxie-MD_BOT' //ur bot name
global.linkz = "https://chat.whatsapp.com/HYj9wu5Jrv6CROxyeQbHoS" //your theme url which will be displayed on whatsapp
global.websitex = "https://youtu.be/WiIqCdiDjFo" //ur website to be displayed
global.botscript = 'https://github.com\nipuna15/Moxie-MD-Bot' //script link
global.themeemoji = "🔱" //ur theme emoji
global.packname = "Sticker By" //ur sticker watermark packname
global.author = "Moxie Bot" //ur sticker watermark author
global.wm = "Moxie Bot Inc." //ur watermark

//Downlod messages
global.videodownlod = "📥 Downloading Your Video..."
global.videouplod = "📤 Uploading Your Video..."
global.songdownlod = "📥 Downloading Your Song..."
global.songuplod = "📤 Uploading Your Song..."

//Image url
global.aliveimg = "https://github.com/nipuna15/nipuna15/raw/main/Moxiepic.jpg" // Alive Image Url
global.menuimg = "https://github.com/nipuna15/nipuna15/raw/main/Moxiepic.jpg" // Menu Image Url


//alive,menu messages
global.alivemg = "┌─❖\n│ Hi 👋 └┬❖  ${pushname} \n┌┤✑  ${ucapanWaktu} 😄\n│└────────────┈ ⳹\n│\n└─ 𝘽𝙊𝙏 𝙄𝙉𝙁𝙊        \n│𝗦𝗽𝗲𝗲𝗱 : ${latensie.toFixed(4)} miliseconds\n│𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}\n│𝗣𝗼𝘄𝗲𝗿𝗲𝗱 : @${ini_mark.split('@')[0]}\n│𝗕𝗼𝘁 : ${global.botname}\n│𝗢𝘄𝗻𝗲𝗿 : @${ownernya.split('@')[0]}\n│𝗣𝗿𝗲𝗳𝗶𝘅 :  NO-PREFIX \n│𝗠𝗼𝗱𝗲 : ${MoxieBotInc.public ? 'Public' : `Self`}\n│𝗛𝗼𝘀𝘁 𝗡𝗮𝗺𝗲 : ${os.hostname()}\n│𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : ${os.platform()}\n│𝗧𝗼𝘁𝗮𝗹 𝗨𝘀𝗲𝗿 : ${Object.keys(global.db.data.users).length}\n│𝗧𝗼𝘁𝗮𝗹 𝗛𝗶𝘁 : ${jumlahcmd}\n│𝗧𝗼𝘁𝗮𝗹 𝗛𝗶𝘁 𝗧𝗼𝗱𝗮𝘆 : ${jumlahharian}n/│\n└─ 𝙐𝙎𝙀𝙍 𝙄𝙉𝙁𝙊 \n│𝗡𝗮𝗺𝗲 : ${pushname}\n│𝗡𝘂𝗺𝗯𝗲𝗿 : @${me.split('@')[0]}\n│𝗣𝗿𝗲𝗺𝗶𝘂𝗺 : ${isPremium ? '✅' : `❌`}\n│𝗟𝗶𝗺𝗶𝘁 : ${isPremium ? '♾Infinity' : `〽️${db.data.users[m.sender].limit}`}\n│\n└─ 𝙏𝙄𝙈𝙀 𝙄𝙉𝙁𝙊 \n│𝗧𝗶𝗺𝗲 : ${xtime}\n│𝗗𝗮𝘁𝗲 : ${xdate}\n└┬────────────┈ ⳹\n │✑  Please Select\n\n│✑  The Button Below\n └─────────────┈ ⳹"
global.antilinkmg = "\'\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send any link in this group or u will be kicked immediately!"
global.badwordmg = "\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to use bad words in this group, one who uses will be kicked immediately!"

// Other
global.sessionName = 'session'
global.prefa = ['','!','.','#','&']
global.sp = ''

//messages
global.mess = {
    success: 'Here you go!',
    admin: 'This feature could be used by admins only!',
    botAdmin: 'Bot Must Be Admin First!',
    premime: 'Premium Special Features If You Want to Register Type Rent',
    owner: 'This feature could be used by owner only',
    group: 'Features Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This feature could be used by bot only',
    wait: 'In process...',
    linkm: 'Where is the link?',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate',
}

//media target
global.thum = fs.readFileSync("./Moxie_Plaguing/Moxie_Media/theme/Moxiepic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./Moxie_Plaguing/Moxie_Media/theme/Moxiepic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./Moxie_Plaguing/Moxie_Media/theme/Moxiepic.jpg") //ur error pic
global.thumb = fs.readFileSync("./Moxie_Plaguing/Moxie_Media/theme/Moxiepic.jpg") //ur thumb pic

//menu image maker
global.flaming = 'https://www6.flamingtext.com\net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com\net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com\net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com\net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//adventure1
    global.limitawal = {
    premium: "Infinity",
    free: 100,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}

global.limitAwal = {
 prem: 'Unlimited',
 free: 70
}

//adventure2
global.emot = {
role: '🏆',
level: '🎚️',
limit: '📊',
health: '❤️',
exp: '💫',
money: '💵',
potion: '🥤',
diamond: '💎',
common: '📦',
uncommon: '🎁',
mythic: '🗳️',
legendary: '🗃️',
pet: '🎁',
trash: '🗑',
armor: '👕',
sword: '⚔️',
wood: '🪵',
batu: '🪨',
string: '🕸️',
horse: '🐎',
cat: '🐈',
dog: '🐕',
fox: '🦊',
petFood: '🍖',
iron: '⛓️',
gold: '👑',
emerald: '💚',
budak: '🏃',
busur: '🏹',
panah: '💘',
kapak: '🪓'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
