require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, Mimetype, generateWAMessage, prepareWAMessageMedia, prepareMessageFromContent,  areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const os = require('os')
const util = require('util')
const path = require('path')
const axios = require('axios')
const chalk = require('chalk')
const crypto = require('crypto')
const yts = require('youtube-yts')
const xfar = require('xfarr-api')
const request = require('request')
const Moxietod = require("tod-api")
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const thiccysapi = require('textmaker-thiccy')
const QrCode = require('qrcode-reader')
const qrcode = require('qrcode')
const { buffergif } = require('./lib/myfunc2')
const { y2mateA, y2mateV } = require('./lib/y2mate')
const google = require('google-it')
const { exec, spawn, execSync } = require("child_process")
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { jadibot, listJadibot } = require('./lib/rentbot')
const { performance } = require('perf_hooks')
const { igApi, getSessionId } = require('insta-fetcher');
let ig = new igApi("csrftoken=6wrPrUbsa05Csm9wlqxAOSqRwxxscjD;rur=16771\05427758921939\0541695476019:01f7994241f5e244ccf1bb676853d91b4f281e385e564f6c99a3592b27b0a39dada825e8;mid=Yy21jQALAAEmUl5E0beHHz_eVvyI;ds_user_id=27758921939;sessionid=27758921939%3ASGdS1WkMZToRfs%3A12%3AAYe5Sp23sp78pv0PnIRL6X-ySJdCDpe4uxbuJxtcxw;ig_did=09B76BA7-2D56-42E5-89BB-3584A9EAD69B");
ig.setCookie("csrftoken=6wrPrUbsa05Csm9wlqxAOSqRwxxscjD;rur=16771\05427758921939\0541695476019:01f7994241f5e244ccf1bb676853d91b4f281e385e564f6c99a3592b27b0a39dada825e8;mid=Yy21jQALAAEmUl5E0beHHz_eVvyI;ds_user_id=27758921939;sessionid=27758921939%3ASGdS1WkMZToRfs%3A12%3AAYe5Sp23sp78pv0PnIRL6X-ySJdCDpe4uxbuJxtcxw;ig_did=09B76BA7-2D56-42E5-89BB-3584A9EAD69B");
const maker = require('mumaker')
const textpro = require('./lib/textpro')
const { fetchBuffer } = require("./lib/myfunc2")
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const ini_mark = `0@s.whatsapp.net`
const ownernya = ownernomer + '@s.whatsapp.net'

//TIME
const xtime = moment.tz('Asia/colombo').format('HH:mm:ss')
const xdate = moment.tz('Asia/colombo').format('DD/MM/YYYY')
const time2 = moment().tz('Asia/colombo').format('HH:mm:ss')  
 if(time2 < "23:59:00"){
var ucapanWaktu = `Good Night 🌌`
 }
 if(time2 < "19:00:00"){
var ucapanWaktu = `Good Evening 🌃`
 }
 if(time2 < "18:00:00"){
var ucapanWaktu = `Good Evening 🌃`
 }
 if(time2 < "15:00:00"){
var ucapanWaktu = `Good Afternoon 🌅`
 }
 if(time2 < "11:00:00"){
var ucapanWaktu = `Good Morning 🌄`
 }
 if(time2 < "05:00:00"){
var ucapanWaktu = `Good Morning 🌄`
 } 
 
// read database game
let tebaklagu = db.data.game.tebaklagu = []
let kuismath = db.data.game.math = []
let vote = db.data.others.vote = []

//read database jid
let premium = JSON.parse(fs.readFileSync('./database/user/premium.json'));
let banned = JSON.parse(fs.readFileSync('./database/user/banned.json'));
let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'));
let ntnsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'));
let ntvirtex = JSON.parse(fs.readFileSync('./database/antivirus.json'));
let nttoxic = JSON.parse(fs.readFileSync('./database/antitoxic.json'));
let ntwame = JSON.parse(fs.readFileSync('./database/antiwame.json'));
let ntlinkgc =JSON.parse(fs.readFileSync('./database/antilinkgc.json'));
let ntilinkall =JSON.parse(fs.readFileSync('./database/antilinkall.json'));
let ntilinktwt =JSON.parse(fs.readFileSync('./database/antilinktwitter.json'));
let ntilinktt =JSON.parse(fs.readFileSync('./database/antilinktiktok.json'));
let ntilinktg =JSON.parse(fs.readFileSync('./database/antilinktelegram.json'));
let ntilinkfb =JSON.parse(fs.readFileSync('./database/antilinkfacebook.json'));
let ntilinkig =JSON.parse(fs.readFileSync('./database/antilinkinstagram.json'));
let ntilinkytch =JSON.parse(fs.readFileSync('./database/antilinkytchannel.json'));
let ntilinkytvid =JSON.parse(fs.readFileSync('./database/antilinkytvideo.json'));
let bad = JSON.parse(fs.readFileSync('./src/toxic/bad.json'));
let autorep =JSON.parse(fs.readFileSync('./database/autoreply.json'));

//database virus and whatsapp bugs
//warrrrrrrrr
const { Moxievirtex } = require('./Moxie_Plaguing/Moxie_Bug/Moxievirtex')
const { Moxiebutton } = require('./Moxie_Plaguing/Moxie_Bug/Moxiebutton')
const { Moxiebrutal } = require('./Moxie_Plaguing/Moxie_Bug/Moxiebrutal')
const { iphone } = require('./Moxie_Plaguing/Moxie_Bug/virtex/iphone')
const { iphone5 } = require('./Moxie_Plaguing/Moxie_Bug/virtex/iphone5')
const { Moxiebutton2 } = require('./Moxie_Plaguing/Moxie_Bug/virtex/Moxiebutton2')
const { bugsw } = require('./Moxie_Plaguing/Moxie_Bug/virtex/bugsw')
const xpicvirus = fs.readFileSync(`./Moxie_Plaguing/Moxie_Bug/xpicvirus.png`)
//warrrrrrrrrr

//database auto reply
let Moxieysticker = JSON.parse(fs.readFileSync('./Moxie_Plaguing/Moxie_Media/theme/Media-Store-Karne-Ke-Liye/sticker.json'));
let Moxieyaudio = JSON.parse(fs.readFileSync('./Moxie_Plaguing/Moxie_Media/theme/Media-Store-Karne-Ke-Liye/audio.json'));
let Moxieyimage = JSON.parse(fs.readFileSync('./Moxie_Plaguing/Moxie_Media/theme/Media-Store-Karne-Ke-Liye/image.json'));
let Moxieyvideo = JSON.parse(fs.readFileSync('./Moxie_Plaguing/Moxie_Media/theme/Media-Store-Karne-Ke-Liye/video.json'));

module.exports = MoxieBotInc = async (MoxieBotInc, m, chatUpdate, store) => {
    try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°${themeemoji}π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await MoxieBotInc.decodeJid(MoxieBotInc.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const sender = m.isGroup ? (mek.key.participant ? mek.key.participant : mek.participant) : mek.key.remoteJid
const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
const type = Object.keys(mek.message)[0]  
const from = mek.key.remoteJid      
const content = JSON.stringify(mek.message)

	    const cekUser = (users, id) => {     
var cek = null
Object.keys(user).forEach((i) => { 
if (user[i].id === id){ cek = i } })
if (cek !== null){ 
if (users == "id"){ return user[cek].id }
if (users == "emote"){ return user[cek].emote }
if (users == "timers"){ return user[cek].timers }
if (users == "hit"){ return user[cek].hit }
if (users == "star"){ return user[cek].star }
if (users == "alasan"){ return user[cek].alasan }
if (users == "ban"){ return user[cek].ban }
if (users == "premium"){ return user[cek].premium }
}
if (cek == null) return null
}
	
	         //media detect \\
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
     
        //hijack function
        const ordermessage = (m.msg.xtype === 'conversation' && m.msg.message.conversation) ? m.msg.message.conversation : (m.msg.xtype == 'imageMessage') && m.msg.message.imageMessage.caption ? m.msg.message.imageMessage.caption : (m.msg.xtype == 'videoMessage') && m.msg.message.videoMessage.caption ? m.msg.message.videoMessage.caption : (m.msg.xtype == 'extendedTextMessage') && m.msg.message.extendedTextMessage.text.startsWith(prefix) ? m.msg.message.extendedTextMessage.text : (m.msg.xtype == 'buttonsResponseMessage') && m.msg.message.buttonsResponseMessage.selectedButtonId.startsWith(prefix) ? m.msg.message.buttonsResponseMessage.selectedButtonId : (m.msg.xtype == 'listResponseMessage') && m.msg.message.listResponseMessage.singleSelectReply.selectedRowId.startsWith(prefix) ? m.msg.message.listResponseMessage.singleSelectReply.selectedRowId : (m.msg.xtype == 'templateButtonReplyMessage') && m.msg.message.templateButtonReplyMessage.selectedId.startsWith(prefix) ? m.msg.message.templateButtonReplyMessage.selectedId : ''   
        const order = ordermessage.slice(0).trim().split(/ +/).shift().toLowerCase()	   
	 
	
	    //Fake
	    const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: thumb, surface: 200, message: botname, orderTitle: ownername, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
		const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: botname,jpegThumbnail: thumb}}}
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'gifPlayback': 'true', 'caption': ownername, 'jpegThumbnail': thumb}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": wm, "caption": `${pushname}`, 'jpegThumbnail': thumb}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': thumb}}}
		const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: wm,jpegThumbnail: thumb}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': ownername, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername}\nitem1.TEL;waid=916909137213:916909137213\nitem1.X-ABLabel:Mobile\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
	    const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": wm,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": fs.readFileSync('./Moxie_Plaguing/Moxie_Media/theme/Moxiepic.jpg'),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
		
	
// Group
        const groupMetadata = m.isGroup ? await MoxieBotInc.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
	    const isBan = banned.includes(m.sender)
        const isPremium = premium.includes(m.sender)
        const Autoreply = m.isGroup ? autorep.includes(from) : false
        const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
        const isAutoSticker = m.isGroup ? autosticker.includes(from) : false
        const antiVirtex = m.isGroup ? ntvirtex.includes(from) : false
        const Antilinkgc = m.isGroup ? ntlinkgc.includes(m.chat) : false
        const AntiLinkYoutubeVid = m.isGroup ? ntilinkytvid.includes(from) : false
        const AntiLinkYoutubeChannel = m.isGroup ? ntilinkytch.includes(from) : false
        const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(from) : false
        const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(from) : false
        const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(from) : false
        const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(from) : false
        const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(from) : false
        const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false
        const antiWame = m.isGroup ? ntwame.includes(from) : false
        const antiToxic = m.isGroup ? nttoxic.includes(from) : false
        const solot = [
		'🍊 : 🍒 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🍇 : 🍇',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍐 : 🍐 : 🍐',
		'🍊 : 🍒 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍇',
		'🔔 : 🔔 : 🔔  Win',
		'🍒 : 🍒 : 🍒 Win',
		'🍌 : 🍌 : 🍌 Lose'
		]

//afk and other
try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
            
    let chats = global.db.data.chats[m.chat]
    if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
    if (chats) {
if (!('mute' in chats)) chats.mute = false
if (!('antilink' in chats)) chats.antilink = false
    } else global.db.data.chats[m.chat] = {
mute: false,
antilink: false,
    }
    
    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
		if (!('templateImage' in setting)) setting.templateImage = true
		if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false	
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
		templateImage: true,
		templateVideo: false,
		templateGif: false,
		templateMsg: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
//function leveling & pick
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

// Public & Self
if (!MoxieBotInc.public) {
    if (!m.key.fromMe) return
}
function randomNomor(angka){
return Math.floor(Math.random() * angka) + 1
}
const hsjdh = randomNomor(5)

//auto react all message
/////MoxieBotInc.sendMessage(m.chat, {
          ////react: {
            ////////////////////////////////////////text: `${pickRandom(['😨','😅','😂','😳','😎', '🥵', '😱', '🐦', '🙄', '🐤','🗿','🐦','🤨','🥴','😐','👆','😔', '👀','👎'])}`,
            ////key: m.key,
          /////}})

//auto recording all
    if (global.autoRecord) { if (m.chat) { MoxieBotInc.sendPresenceUpdate('recording', m.chat) }
}
//autotyper all
  if (global.autoTyping) { if (m.chat) { MoxieBotInc.sendPresenceUpdate('composing', m.chat) }
}

// total hit
        global.hit = {}
if (isCmd) {
data = await fetchJson('https://api.countapi.xyz/hit/MoxieBotInc-md/visits')
jumlahcmd = `${data.value}`
dataa = await fetchJson(`https://api.countapi.xyz/hit/MoxieBotInc-md${moment.tz('Asia/Kolkata').format('DDMMYYYY')}/visits`)
jumlahharian = `${dataa.value}`
}

//premium
const prem1 = `Hi bro  ${pushname} ${ucapanWaktu} \n\nThis feature is for premium members only, please buy premium to use this feature`
const prem2 = `Click the button below to buy premium`
const prem3 = [{buttonId: `${prefix}buypreim`,buttonText: {displayText: `BUY PREMIUM`,},type: 1,},]
blomdaftar = `${ucapanWaktu} @${sender.split("@")[0]} Kamu belum terdaftar di database cek private message mu untuk mendaftar`
limitabis = `*[YOUR LIMIT IS EXPIRED]*\nBuy limit in ${prefix}buylimit or buy premium to get unlimited limit`

//WARRRRRRR
const doc = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "" } : {}) 
},
"message": {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/AgPwKRhs9an5F6WhnwXhdmhf8PX29TP_olqe4FIv1piE.enc",
"fileSha256": "u1dFgoXE6JsB5bUricNLDnIBh9NFx4QMuPMLccYrcb0=",
"fileEncSha256": "EK4PgZmQ6QoCl0GRQp3K8PCAzo9RXeMOU8NFjwnWXp0=",
"mediaKey": "XJ4fPYzZ63TWoziMvjXMHZQttVJLGpGN6wDjDpzdx7k=",
"mimetype": "image/webp",
"directPath": "/v/t62.15575-24/40664462_556808939544453_4219685480579374478_n.enc?ccb=11-4&oh=01_AVye92lzVBcYK_Ym5s5o-FrP_CF18W5sg9fb_Et5N3rV7g&oe=63639F3F",
"fileLength": "14240",
"mediaKeyTimestamp": "1664991742",
"isAnimated": false
}}}

const fmedia =  {
  key : {
    fromMe: false,
participant : '0@s.whatsapp.net'
},
     contextInfo: {
    forwardingScore: 9999,
    isForwarded: false, //:'v
showAdAttribution: true,
title: botname,
mediaType: "VIDEO",
mediaUrl: websitex,
previewType: "PHOTO",
thumbnail: thumb,
sourceUrl: "",
detectLinks: false,
    }}
    
    //reply fake
	//group target \\
const reply = (teks) => {
           MoxieBotInc.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": `${ownername}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./Moxie_Plaguing/Moxie_Media/theme/Moxiepic.jpg`),"sourceUrl": `${linkz}`}}}, { quoted: m})
        }

	//button
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const butonna = {
text: text1,
footer: desc1,
buttons: but,
headerType: 1
}
MoxieBotInc.sendMessage(id, butonna, options)
}
const http = randomNomor(500)

//document
const kontol = {
	key : {
   participant : '0@s.whatsapp.net'
},
       message: {
    documentMessage: {
    title: `${pushname}`, 
    jpegThumbnail: thumb
  }
}
      }
sendMenuDoc = async (ID, doc, fileName, fileLength, caption, footer, time, buttons, boddy, thumbnail, thumbnailUrl, sourceUrl, mediaUrl, options) => {
let buttonMessage = {
  document: doc,
  mimetype: "application/pdf",
  fileName: fileName,
  fileLength: fileLength,
  caption: caption,
  footer: footer,
  buttons: buttons,
  headerType: 4,
  contextInfo:{externalAdReply:{
     title: time,
     body: boddy,
     thumbnail: thumbnail,
     thumbnailUrl: thumbnailUrl,
     sourceUrl: sourceUrl,
     mediaUrl: mediaUrl,  
     renderLargerThumbnail: true,
     showAdAttribution: true,
     mediaType: 1
   }}
       }
   MoxieBotInc.sendMessage(m.chat, buttonMessage, options)
   }
/////////////////////////////////////////////////////////////////////
    swich(comand) {
    case 'alive': case 'panel': case 'list': case 'menu': case 'help': case '?':{
    MoxieBotInc.sendMessage(from, { react: { text: `💖`, key: m.key }}) 
    let buttons = [
    {buttonId: `menu`, buttonText: {displayText: 'MENU'}, type: 1},
    {buttonId: `ping`, buttonText: {displayText: 'PING'}, type: 1}
    ]
    let buttonMessage = {
  image : { url: `https://github.com/nipuna15/nipuna15/raw/main/Moxiepic.jpg` },
    caption: `─❖
│ Hi 👋 
└┬❖  ${pushname} 
┌┤✑  ${ucapanWaktu} 😄
│└────────────┈ ⳹
│
└─ 𝘽𝙊𝙏 𝙄𝙉𝙁𝙊        
│𝗦𝗽𝗲𝗲𝗱 : ${latensie.toFixed(4)} miliseconds
│𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
│𝗣𝗼𝘄𝗲𝗿𝗲𝗱 : @${ini_mark.split('@')[0]}
│𝗕𝗼𝘁 : ${global.botname}
│𝗢𝘄𝗻𝗲𝗿 : @${ownernya.split('@')[0]}
│𝗣𝗿𝗲𝗳𝗶𝘅 :  NO-PREFIX 
│𝗠𝗼𝗱𝗲 : ${MoxieBotInc.public ? 'Public' : `Self`}
│𝗛𝗼𝘀𝘁 𝗡𝗮𝗺𝗲 : ${os.hostname()}
│𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : ${os.platform()}
│𝗧𝗼𝘁𝗮𝗹 𝗨𝘀𝗲𝗿 : ${Object.keys(global.db.data.users).length}
│𝗧𝗼𝘁𝗮𝗹 𝗛𝗶𝘁 : ${jumlahcmd}
│𝗧𝗼𝘁𝗮𝗹 𝗛𝗶𝘁 𝗧𝗼𝗱𝗮𝘆 : ${jumlahharian}
│
└─ 𝙐𝙎𝙀𝙍 𝙄𝙉𝙁𝙊 
│𝗡𝗮𝗺𝗲 : ${pushname}
│𝗡𝘂𝗺𝗯𝗲𝗿 : @${me.split('@')[0]}
│𝗣𝗿𝗲𝗺𝗶𝘂𝗺 : ${isPremium ? '✅' : `❌`}
│𝗟𝗶𝗺𝗶𝘁 : ${isPremium ? '♾Infinity' : `〽️${db.data.users[m.sender].limit}`}
│
└─ 𝙏𝙄𝙈𝙀 𝙄𝙉𝙁𝙊 
│𝗧𝗶𝗺𝗲 : ${xtime}
│𝗗𝗮𝘁𝗲 : ${xdate}
└┬────────────┈ ⳹
   │✑  Please Select
   │✑  The Button Below
   └─────────────┈ ⳹`,
    footer: `${global.botname}`,
    buttons: buttons,
    headerType: 4,
    }
    MoxieBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
    }
    break
            case  'command':{ 
             MoxieBotInc.sendMessage(from, { react: { text: `💌`, key: m.key }}) 
	const sections = [{
								"title": "Initial Features Of Bot 🦄",
								"rows": [
									{
										"title": "Other ☕",
										"description": "Displays The List Of Other Features",
										"rowId": `${prefix}othermenu`
									}
								]
							},
							{
								"title": "Bot Features ❤️",
								"rows": [
									{
										"title": "All Menu 🥀",
										"description": "Displays The List Of All The Features!",
										"rowId": `${prefix}allmenu`
									},
									{
										"title": "Owner Menu 💠",
										"description": "Displays The List Of Owner Features",
										"rowId": `${prefix}ownermenu`
										},
									{
										"title": "Group Menu ✨",
										"description": "Displays The List Of Main Features",
										"rowId": `${prefix}groupmenu`
										},
										{
										"title": "Maker Menu 🌈",
										"description": "Displays The List Of Logo Making Features",
										"rowId": `${prefix}makermenu`
									},
									{
										"title": "Download Menu ↘️",
										"description": "Displays The List Of Download Features",
										"rowId": `${prefix}downloadmenu`
									},
									{
										"title": "Sticker Menu 🃏",
										"description": "Displays The List Of Sticker Features",
										"rowId": `${prefix}stickermenu`
									},
									{
										"title": "Search Menu 🔎",
										"description": "Displays The List Of Searching Features",
										"rowId": `${prefix}searchmenu`
									},
									{
										"title": "Random Image Menu 🌆",
										"description": "Displays The List Of Random Image Features",
										"rowId": `${prefix}randomimagemenu`
									},
									{
										"title": "Random Video Menu 🌆",
										"description": "Displays The List Of Random Video Features",
										"rowId": `${prefix}randomvideomenu`
									},
									{
										"title": "Image Effect Menu 🖼️",
										"description": "Displays The List Of Image Effect Features",
										"rowId": `${prefix}imageeffectmenu`
									},
										{
											"title": "Anime Menu 😘",
										"description": "Displays The List Of Random Anime Features",
										"rowId": `${prefix}animemenu`
										},
										{
											"title": "Emote Menu 😀",
										"description": "Displays The List Of Emote Features",
										"rowId": `${prefix}emotemenu`
										},
										{
										"title": "Anime Sticker Menu ☺️",
										"description": "Displays The List Of Anime Sticker Features",
										"rowId": `${prefix}animestickermenu`
									     },
									{
										"title": "Nsfw Menu 🤓",
										"description": "Displays The List Of Nsfe Features",
										"rowId": `${prefix}nsfwmenu`
									     },
										{
											"title": "Fun Menu 🕺",
										"description": "Displays The List Of Fun Features",
										"rowId": `${prefix}funmenu`
										},
										{
										"title": "Game Menu 🎮",
										"description": "Displays The List Of Game Features",
										"rowId": `${prefix}gamemenu`
									},
										{
											"title": "Convert Menu ⚒️",
										"description": "Displays The List Of Convert Features",
										"rowId": `${prefix}convertmenu`
										},
										{
											"title": "Database Menu ♻️",
										"description": "Displays The List Of Database Features",
										"rowId": `${prefix}databasemenu`
										},
										{
										"title": "Other Menu 🐸",
										"description": "Displays The List Miscellaneous Features",
										"rowId": `${prefix}othermenu`
									     },
										{
										"title": "War Menu☣️",
										"description": "Displays The List Of War Features",
										"rowId": `${prefix}warmenu`
									}
								]
							},
							{
								"title": "Chat With Fellow Users 🌝",
								"rows": [
									{
										"title": "Anonymous Chat Menu 🏻‍♂️",
										"description": "Displays The List Of Anonymous Chat Features",
										"rowId": `${prefix}anonymousmenu`
									}
								]
							},
							{
								"title": "Credit ©️",
								"rows": [
									{
										"title": "Thanks To ❤️",
										"description": "Displays The List Of Credit Of The Bot !!",
										"rowId": `${prefix}tqtt`
									}
								]
							}
						]
const listMessage = {
  text: "Please choose the menu",
  footer: `${botname}`,
  title: `Hi 👋 ${pushname}`,
  buttonText: "Menu",
  sections
}
const sendMsg = await MoxieBotInc.sendMessage(m.chat, listMessage)
}
break
            case 'allmenu':{
var unicorn = await getBuffer(picak+'All Menu')

const buttons = [
  {buttonId: 'script', buttonText: {displayText: 'Script 🔖'}, type: 1},
  {buttonId: 'donate', buttonText: {displayText: 'Donate 🍵'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'Owner 🤣'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═══════✪ OWNER 	
╠ ${prefix}self
╠ ${prefix}public
╠ ${prefix}join [link]
╠ ${prefix}leavegc
╠ ${prefix}setbio
╠ ${prefix}bctext [text]
╠ ${prefix}bcimage [reply img/text]
╠ ${prefix}bcvideo [reply img/text]
╠ ${prefix}setbotpp [image]
╠ ${prefix}setthumb [reply img]
╠ ${prefix}setexif
╠ ${prefix}hijack
╠ ${prefix}creategroup [name]
╠ ${prefix}block [tag/number]
╠ ${prefix}unblock [tag/number]
╠═══════✪ GROUP 	        
╠${prefix}grouplink
╠${prefix}ephemeral [option]
╠${prefix}setgcpp [image]
╠${prefix}setname [text]
╠${prefix}setdesc [text]
╠${prefix}group 
╠${prefix}resetgrouplink
╠${prefix}editinfo [option]
╠${prefix}menfess [number]
╠${prefix}add [user]
╠${prefix}kick [reply/tag]
╠${prefix}hidetag [text]
╠${prefix}tagall [text]
╠${prefix}antilinkgc [on/off]
╠${prefix}antilinktg [on/off]
╠${prefix}antilinktt [on/off]
╠${prefix}antilinkytch [on/off]
╠${prefix}antilinkytvid [on/off]
╠${prefix}antilinkig [on/off]
╠${prefix}antilinkfb [on/off]
╠${prefix}antilinktwit [on/off]
╠${prefix}antilinkall [on/off]
╠${prefix}antivirus [on/off]
╠${prefix}antitoxic [on/off]
╠${prefix}antiwame [on/off]
╠${prefix}nsfw [on/off]
╠${prefix}promote [reply/tag]
╠${prefix}demote [reply/tag]
╠${prefix}react [reply emoji]
╠${prefix}vote
╠${prefix}devote
╠${prefix}upvote
╠${prefix}checkvote
╠${prefix}delvote
╠═══════✪ MAKER 
╠${prefix}candy
╠${prefix}blackpinkneon
╠${prefix}deepsea
╠${prefix}scifi
╠${prefix}fiction
╠${prefix}berry
╠${prefix}fruitjuice
╠${prefix}biscuit
╠${prefix}wood
╠${prefix}chocolate
╠${prefix}matrix
╠${prefix}blood
╠${prefix}halloween
╠${prefix}wicker
╠${prefix}darkgold
╠${prefix}firework
╠${prefix}skeleton
╠${prefix}sand
╠${prefix}glue
╠${prefix}leaves
╠${prefix}magma
╠${prefix}lava
╠${prefix}rockart
╠${prefix}bloodglas
╠${prefix}underwater
╠${prefix}textmaker
╠${prefix}honey
╠${prefix}ice
╠${prefix}watercolor
╠${prefix}multicolor
╠${prefix}snow
╠${prefix}harrypot
╠${prefix}harrypotter
╠${prefix}brokenglass
╠${prefix}waterpipe
╠${prefix}spooky
╠${prefix}circuit
╠${prefix}metallic
╠${prefix}demon
╠${prefix}sparklechristmas
╠${prefix}christmas
╠${prefix}3dchristmas
╠${prefix}3dbox
╠${prefix}waterdrop
╠${prefix}lion2
╠${prefix}papercut
╠${prefix}transformer
╠${prefix}neondevil
╠${prefix}3davengers
╠${prefix}3dstone
╠${prefix}3dstone2
╠${prefix}summertime
╠${prefix}thunder
╠${prefix}window
╠${prefix}graffiti
╠${prefix}graffitibike
╠${prefix}pornhub
╠${prefix}glitch
╠${prefix}blackpinkart
╠${prefix}glitch2
╠${prefix}glitch3
╠${prefix}3dspace
╠${prefix}lion
╠${prefix}3dneon
╠${prefix}greenneon
╠${prefix}bokeh
╠${prefix}holographic
╠${prefix}bear
╠${prefix}wolf
╠${prefix}joker
╠${prefix}dropwater
╠${prefix}dropwater2
╠${prefix}thewall
╠${prefix}neonlight
╠${prefix}natural
╠${prefix}carbon
╠${prefix}pencil
╠${prefix}blackpink2
╠${prefix}neon
╠${prefix}neonlight2
╠${prefix}toxic
╠${prefix}strawberry
╠${prefix}discovery
╠${prefix}1917
╠ ${prefix}sci_fi
╠ ${prefix}ancient
╠ ${prefix}fabric
╠ ${prefix}hoorror
╠ ${prefix}whitebear
╠ ${prefix}juice
╠ ${prefix}batman
╠ ${prefix}multicolor
╠ ${prefix}wonderful
╠ ${prefix}sketch
╠ ${prefix}marvel
╠ ${prefix}foggy
╠ ${prefix}writing
╠ ${prefix}halloweenfire
╠ ${prefix}halloween
╠ ${prefix}watercolor
╠ ${prefix}classic
╠═════✪ DOWNLOAD 	
╠${prefix}tiktok [url]
╠${prefix}tiktokaudio [url]
╠${prefix}instagram [url]
╠${prefix}spotify [url]
╠${prefix}mediafire [url]
╠${prefix}ytmp3 [url|quality]
╠${prefix}ytmp4 [url|quality]
╠${prefix}gitclone [repo link]
╠═══════✪ SEARCH 	
╠${prefix}play [query]
╠${prefix}song [query]
╠${prefix}yts [query]
╠${prefix}lyrics [query]
╠${prefix}gimage [query]
╠${prefix}google [query]
╠${prefix}anime [query]
╠${prefix}pinterest [query]
╠${prefix}image [query]
╠${prefix}wallpaper [query]
╠${prefix}searchno [number]
╠${prefix}horoscope [query]
╠${prefix}imdb [movie name]
╠${prefix}weather [loc name]
╠${prefix}genshin [char name]
╠${prefix}wikimedia [query]
╠${prefix}ytsearch [query]
╠${prefix}ringtone [query]
╠═══════✪ CONVERT 
╠ ${prefix}toimage [reply stick]
╠ ${prefix}sticker [reply img|gif]
╠ ${prefix}take [reply img|gif|stik]
╠ ${prefix}smeme [reply img]
╠ ${prefix}emoji [emoji]
╠ ${prefix}tovideo [reply img]
╠ ${prefix}togif [reply stick]
╠ ${prefix}tovn [reply aud]
╠ ${prefix}tomp3 [reply vn]
╠ ${prefix}toaudio [reply vid]
╠ ${prefix}ebinary [reply txt]
╠ ${prefix}dbinary [reply txt]
╠ ${prefix}tinyurl [link]
╠ ${prefix}styletext [text]
╠${prefix}volume [reply aud]
╠${prefix}bass [reply aud]
╠${prefix}blown [reply aud]
╠${prefix}deep [reply aud]
╠${prefix}earrape [reply aud]
╠${prefix}fast [reply aud]
╠${prefix}fat [reply aud]
╠${prefix}nightcore [reply aud]
╠${prefix}reverse [reply aud]
╠${prefix}robot [reply aud]
╠${prefix}slow [reply aud]
╠${prefix}smooth [reply aud]
╠${prefix}squirrel [reply aud]
╠═══════✪ IMG EFFECT 
╠${prefix}removebg [reply img]
╠═══════✪ RANDOM IMG 
╠${prefix}coffee
╠${prefix}woof
╠${prefix}meow
╠${prefix}lizard
╠${prefix}chinese
╠${prefix}japanese
╠${prefix}korean
╠${prefix}indo
╠${prefix}thai
╠${prefix}vietnamese
╠${prefix}malay
╠${prefix}hijab
╠${prefix}randomgirl
╠${prefix}randomboy
╠${prefix}aesthetic
╠${prefix}antiwork
╠${prefix}cosplay
╠${prefix}car
╠${prefix}bike
╠${prefix}doggo
╠${prefix}cat
╠${prefix}notnot
╠${prefix}kayes
╠${prefix}justina
╠${prefix}ryujin
╠${prefix}boneka
╠${prefix}rose
╠${prefix}kpop
╠${prefix}blackpink
╠${prefix}ulzzangboy
╠${prefix}ulzzanggirl
╠${prefix}pubg
╠${prefix}hacking
╠${prefix}profilepicture
╠${prefix}couplepicture
╠${prefix}wallphone
╠${prefix}wallml
╠═══════✪ RANDOM VIDEO
╠${prefix}tiktokgirl	
╠${prefix}tiktoknukhty
╠${prefix}tiktokpanrika
╠${prefix}tiktokkayes
╠${prefix}tiktoknotnot
╠${prefix}tiktokghea
╠${prefix}tiktoksantuy
╠${prefix}tiktokbocil
╠═══════✪ EMOTE 
╠${prefix}instagramemoji
╠${prefix}facebookemoji
╠${prefix}iphoneemoji
╠${prefix}samsungemoji
╠${prefix}joyemoji
╠${prefix}skypeemoji
╠${prefix}twitteremoji
╠${prefix}whatsappemoji
╠${prefix}microsoftemoji
╠${prefix}googleemoji
╠${prefix}pediaemoji
╠${prefix}microsoftemoji
╠═══════✪ ANIME 
╠${prefix}animeneko
╠${prefix}waifu
╠${prefix}animewaifu
╠${prefix}animeawoo
╠${prefix}shinobu
╠${prefix}foxgirl
╠${prefix}animemegumin
╠${prefix}loli-waifu
╠${prefix}8ball
╠${prefix}animenom
╠${prefix}goose
╠${prefix}avatar
╠${prefix}tickle
╠${prefix}gecg
╠${prefix}feed
╠${prefix}husbu
╠${prefix}neko2
╠${prefix}randomanime
╠${prefix}shota
╠${prefix}waifu2
╠${prefix}animeslap
╠${prefix}animepat
╠${prefix}animeneko
╠${prefix}animekiss
╠${prefix}animewlp
╠${prefix}animecuddle
╠${prefix}animecry
╠${prefix}animekill
╠${prefix}animelick
╠${prefix}animebite
╠${prefix}animeyeet
╠${prefix}animebully
╠${prefix}animebonk
╠${prefix}animewink
╠${prefix}animepoke
╠${prefix}animesmile
╠${prefix}animewave
╠${prefix}animeawoo
╠${prefix}animeblush
╠${prefix}animesmug
╠${prefix}animeglomp
╠${prefix}animehappy
╠${prefix}animedance
╠${prefix}animecringe
╠${prefix}animehighfive
╠${prefix}animehandhold
╠${prefix}animemegumin
╠${prefix}animesmug
╠${prefix}couplepp
╠${prefix}animewall [query]
╠${prefix}animewall2 [query]
╠══════✪ STICKER 
╠ ${prefix}patrick
╠ ${prefix}emoji
╠ ${prefix}emojimix
╠ ${prefix}doge
╠ ${prefix}lovesticker
╠ ${prefix}animestick
╠ ${prefix}spongebob
╠ ${prefix}gojosatoru
╠ ${prefix}nicholas
╠ ${prefix}cartoon
╠ ${prefix}stickman
╠════✪ ANIME STICKER 
╠${prefix}loli
╠${prefix}bully
╠${prefix}cuddle
╠${prefix}cry
╠${prefix}hug
╠${prefix}awoo
╠${prefix}kiss
╠${prefix}lick
╠${prefix}pat
╠${prefix}smug
╠${prefix}bonk
╠${prefix}yeet
╠${prefix}blush
╠${prefix}smile
╠${prefix}wave
╠${prefix}highfive
╠${prefix}handhold
╠${prefix}nom
╠${prefix}glomp
╠${prefix}bite
╠${prefix}slap
╠${prefix}kill
╠${prefix}happy
╠${prefix}wink
╠${prefix}poke
╠${prefix}dance
╠${prefix}cringe
╠${prefix}neko
╠${prefix}gura
╠═══════✪ NSFW 
╠${prefix}gifhentai
╠${prefix}gifblowjob
╠${prefix}hentaivideo
╠${prefix}hneko
╠${prefix}nwaifu
╠${prefix}animespank
╠${prefix}trap
╠${prefix}gasm
╠${prefix}ahegao
╠${prefix}ass
╠${prefix}bdsm
╠${prefix}blowjob
╠${prefix}cuckold
╠${prefix}cum
╠${prefix}milf
╠${prefix}eba
╠${prefix}ero
╠${prefix}femdom
╠${prefix}foot
╠${prefix}gangbang
╠${prefix}glasses
╠${prefix}hentai
╠${prefix}jahy
╠${prefix}manga
╠${prefix}masturbation
╠${prefix}neko-hentai
╠${prefix}neko-hentai2
╠${prefix}nsfwloli
╠${prefix}orgy
╠${prefix}panties
╠${prefix}pussy
╠${prefix}tentacles
╠${prefix}thights
╠${prefix}yuri
╠${prefix}zettai
╠═══════✪ FUN 
╠ ${prefix}say [text]
╠ ${prefix}define [text]
╠ ${prefix}how [text
╠ ${prefix}when [text]
╠ ${prefix}where [text]
╠ ${prefix}is [text]
╠ ${prefix}what [text]
╠ ${prefix}can [text]
╠ ${prefix}rate [text]
╠ ${prefix}coolcheck [tag]
╠ ${prefix}stupidcheck [tag]
╠ ${prefix}waifucheck [tag]
╠ ${prefix}evilcheck [tag]
╠ ${prefix}dogcheck [tag]
╠ ${prefix}hotcheck [tag]
╠ ${prefix}smartcheck [tag]
╠ ${prefix}uncleancheck [tag]
╠ ${prefix}greatcheck [tag]
╠ ${prefix}beautifulcheck [tag]
╠ ${prefix}awesomecheck [tag]
╠ ${prefix}prettycheck [tag]
╠ ${prefix}lesbiancheck [tag]
╠ ${prefix}gaycheck [tag]
╠ ${prefix}cutecheck [tag]
╠ ${prefix}uglycheck [tag]
╠ ${prefix}hornycheck [tag]
╠ ${prefix}charactercheck [tag]
╠ ${prefix}lovelycheck [tag]
╠ ${prefix}couple
╠ ${prefix}soulmate
╠ ${prefix}hot
╠ ${prefix}sexy
╠ ${prefix}kind
╠ ${prefix}idiot
╠ ${prefix}handsome
╠ ${prefix}beautiful
╠ ${prefix}cute
╠ ${prefix}pretty
╠ ${prefix}lesbian
╠ ${prefix}noob
╠ ${prefix}bastard
╠ ${prefix}foolish
╠ ${prefix}nerd
╠ ${prefix}asshole
╠ ${prefix}gay
╠ ${prefix}smart
╠ ${prefix}stubble
╠ ${prefix}dog
╠ ${prefix}horny
╠ ${prefix}cunt
╠ ${prefix}wibu
╠ ${prefix}noobra
╠ ${prefix}nibba
╠ ${prefix}nibbi
╠ ${prefix}comrade
╠ ${prefix}mumu
╠ ${prefix}rascal
╠ ${prefix}scumbag
╠ ${prefix}nuts
╠ ${prefix}fagot
╠ ${prefix}scoundrel
╠ ${prefix}ditch
╠ ${prefix}dope
╠ ${prefix}gucci
╠ ${prefix}lit
╠ ${prefix}dumbass
╠ ${prefix}crackhead
╠ ${prefix}mf
╠ ${prefix}motherfucker
╠ ${prefix}sucker
╠ ${prefix}fuckboy
╠ ${prefix}playboy
╠ ${prefix}fuckgirl
╠ ${prefix}playgirl
╠ ${prefix}quotes
╠══════✪ GAME 
╠ ${prefix}truth
╠ ${prefix}dare
╠ ${prefix}tictactoe
╠ ${prefix}delttt
╠ ${prefix}guess [option]
╠ ${prefix}math [mode]
╠ ${prefix}suitpvp [tag]
╠══✪ ANONYMOUS CHAT 
╠${prefix}anonymous
╠${prefix}start
╠${prefix}next
╠${prefix}leave
╠══════✪ DATABASE 
╠ ${prefix}setcmd
╠ ${prefix}listcmd
╠ ${prefix}delcmd
╠ ${prefix}lockcmd
╠ ${prefix}addmsg
╠ ${prefix}listmsg
╠ ${prefix}getmsg
╠ ${prefix}delmsg
╠══════✪ OTHER 
╠ ${prefix}afk
╠ ${prefix}id
╠ ${prefix}toqr [link]
╠ ${prefix}repeat
╠ ${prefix}readmore [text]
╠ ${prefix}toviewonce
╠ ${prefix}fliptext [text]]
╠ ${prefix}chatinfo
╠ ${prefix}alive
╠ ${prefix}script
╠ ${prefix}ping
╠ ${prefix}owner
╠ ${prefix}menu
╠ ${prefix}delete
╠ ${prefix}quoted
╠ ${prefix}listpc
╠ ${prefix}listgc
╠ ${prefix}donate
╠ ${prefix}request
╠ ${prefix}report [bug]
╠═══════✪「 BUG MENU 」	
╠════☾pc attack☽
╠${prefix}pcbut [number]
╠${prefix}pcvn [number]
╠${prefix}pcstick [number]
╠${prefix}pcfast [number]
╠${prefix}pcslow [number]
╠${prefix}pcbunny [number]
╠${prefix}xcrasher [amount]
╠${prefix}pccontact [amount]
╠${prefix}virtex5 [amount]
╠${prefix}flower [amount]
╠${prefix}pollbug [amount]
╠${prefix}catalogbug [amount]
╠${prefix}trollybug [amount]
╠${prefix}trollybug2 [amount]
╠════☾gc attack☽
╠${prefix}gcslow
╠${prefix}gcfast
╠${prefix}gcbunny
╠${prefix}tagallbug
╠════☾pc & gc attack☽
╠${prefix}vnbug [amount]
╠${prefix}docbug [amount]
╠${prefix}pcgcslow [number]
╠${prefix}pcgcfast [number]
╠${prefix}pcgcbunny [number]
╠${prefix}textshot
╠${prefix}docfuck [amount]
╠${prefix}docsoft [amount]
╠${prefix}docsoft2 [amount]
╚═════════════✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await MoxieBotInc.sendMessage(m.chat, buttonMessage)
}
break

      case 'ownermenu':{
	   var unicorn = await getBuffer(picak+'Owner Menu')
const buttons = [
  {buttonId: 'script', buttonText: {displayText: 'Script 🔖'}, type: 1},
  {buttonId: 'donate', buttonText: {displayText: 'Donate 🍵'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'Owner ??'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═══════✪ OWNER 	
╠ ${prefix}self
╠ ${prefix}public
╠ ${prefix}join [link]
╠ ${prefix}leavegc
╠ ${prefix}setbio
╠ ${prefix}hijack
╠ ${prefix}creategroup [name]
╠ ${prefix}block [user]
╠ ${prefix}unblock [user]
╠ ${prefix}broadcast [text]
╠ ${prefix}setppbot [image]
╠ ${prefix}setthumb [reply img]
╠ ${prefix}setexif
╚═════════════✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await MoxieBotInc.sendMessage(m.chat, buttonMessage)
}
break

            case 'groupmenu':{
var unicorn = await getBuffer(picak+'Group Menu')

const buttons = [
  {buttonId: 'script', buttonText: {displayText: 'Script 🔖'}, type: 1},
  {buttonId: 'donate', buttonText: {displayText: 'Donate 🍵'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'Owner 🤣'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═══════✪ GROUP 	
╠${prefix}grouplink
╠${prefix}ephemeral [option]
╠${prefix}setgcpp [image]
╠${prefix}setname [text]
╠${prefix}setdesc [text]
╠${prefix}group
╠${prefix}botgroups
╠${prefix}resetgrouplink
╠${prefix}editinfo [option]
╠${prefix}add [user]
╠${prefix}menfess [number]
╠${prefix}kick [reply/tag]
╠${prefix}hidetag [text]
╠${prefix}tagall [text]
╠${prefix}autosticker [on/off]
╠${prefix}autostickerpc [on/off]
╠${prefix}leveling [on/off]
╠${prefix}antilinkgc [on/off] 
╠${prefix}antilinktg [on/off]
╠${prefix}antilinktt [on/off]
╠${prefix}antilinkytch [on/off]
╠${prefix}antilinkytvid [on/off]
╠${prefix}antilinkig [on/off]
╠${prefix}antilinkfb [on/off]
╠${prefix}antilinktwit [on/off]
╠${prefix}antilinkall [on/off]
╠${prefix}antivirus [on/off]
╠${prefix}antitoxic [on/off]
╠${prefix}antiwame [on/off]
╠${prefix}nsfw [on/off]
╠${prefix}promote [reply/tag]
╠${prefix}demote [reply/tag]
╠${prefix}react [reply emoji]
╠${prefix}getpp [reply user]
╠${prefix}vote
╠${prefix}devote
╠${prefix}upvote
╠${prefix}checkvote
╠${prefix}delvote
╚═════════════✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await MoxieBotInc.sendMessage(m.chat, buttonMessage)
}
break

case 'makermenu':{
var unicorn = await getBuffer(picak+'Maker Menu')

const buttons = [
  {buttonId: 'script', buttonText: {displayText: 'Script 🔖'}, type: 1},
  {buttonId: 'donate', buttonText: {displayText: 'Donate 🍵'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'Owner 🤣'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═══════✪ MAKER 	
╠${prefix}candy
╠${prefix}8bit
╠${prefix}horror
╠${prefix}hoorror
╠${prefix}retro
╠${prefix}blackpinkneon
╠${prefix}deepsea
╠${prefix}scifi
╠${prefix}fiction
╠${prefix}berry
╠${prefix}fruitjuice
╠${prefix}biscuit
╠${prefix}wood
╠${prefix}chocolate
╠${prefix}matrix
╠${prefix}blood
╠${prefix}halloween
╠${prefix}wicker
╠${prefix}darkgold
╠${prefix}firework
╠${prefix}skeleton
╠${prefix}sand
╠${prefix}glue
╠${prefix}leaves
╠${prefix}magma
╠${prefix}lava
╠${prefix}rockart
╠${prefix}bloodglas
╠${prefix}underwater
╠${prefix}textmaker
╠${prefix}honey
╠${prefix}ice
╠${prefix}watercolor
╠${prefix}multicolor
╠${prefix}snow
╠${prefix}harrypot
╠${prefix}harrypotter
╠${prefix}brokenglass
╠${prefix}waterpipe
╠${prefix}spooky
╠${prefix}circuit
╠${prefix}metallic
╠${prefix}demon
╠${prefix}sparklechristmas
╠${prefix}christmas
╠${prefix}3dchristmas
╠${prefix}3dbox
╠${prefix}waterdrop
╠${prefix}lion2
╠${prefix}papercut
╠${prefix}transformer
╠${prefix}neondevil
╠${prefix}3davengers
╠${prefix}3dstone
╠${prefix}3dstone2
╠${prefix}summertime
╠${prefix}thunder
╠${prefix}window
╠${prefix}graffiti
╠${prefix}graffitibike
╠${prefix}pornhub
╠${prefix}glitch
╠${prefix}blackpinkart
╠${prefix}glitch2
╠${prefix}glitch3
╠${prefix}3dspace
╠${prefix}lion
╠${prefix}3dneon
╠${prefix}greenneon
╠${prefix}bokeh
╠${prefix}holographic
╠${prefix}bear
╠${prefix}wolf
╠${prefix}joker
╠${prefix}dropwater
╠${prefix}dropwater2
╠${prefix}thewall
╠${prefix}neonlight
╠${prefix}natural
╠${prefix}carbon
╠${prefix}pencil
╠${prefix}blackpink2
╠${prefix}neon
╠${prefix}neonlight2
╠${prefix}toxic
╠${prefix}strawberry
╠${prefix}discovery
╠${prefix}1917
╠ ${prefix}sci_fi
╠ ${prefix}ancient
╠ ${prefix}fabric
╠ ${prefix}hoorror
╠ ${prefix}whitebear
╠ ${prefix}juice
╠ ${prefix}batman
╠ ${prefix}multicolor
╠ ${prefix}wonderful
╠ ${prefix}sketch
╠ ${prefix}marvel
╠ ${prefix}foggy
╠ ${prefix}writing
╠ ${prefix}halloweenfire
╠ ${prefix}halloween
╠ ${prefix}watercolor
╠ ${prefix}classic
╚═════════════✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await MoxieBotInc.sendMessage(m.chat, buttonMessage)
}
break
            case 'downloadmenu':{
var unicorn = await getBuffer(picak+'Download Menu')

const buttons = [
  {buttonId: 'script', buttonText: {displayText: 'Script 🔖'}, type: 1},
  {buttonId: 'donate', buttonText: {displayText: 'Donate 🍵'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'Owner 🤣'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═══════✪ DOWNLOAD 	
╠${prefix}tiktok [url]
╠${prefix}tiktokaudio [url]
╠${prefix}instagram [url]
╠${prefix}spotify [url]
╠${prefix}mediafire [url]
╠${prefix}ytmp3 [url|quality]
╠${prefix}ytmp4 [url|quality]
╠${prefix}gitclone [repo link]
╚═════════════✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await MoxieBotInc.sendMessage(m.chat, buttonMessage)
}
break
            case 'searchmenu':{
var unicorn = await getBuffer(picak+'Search Menu')

const buttons = [
  {buttonId: 'script', buttonText: {displayText: 'Script 🔖'}, type: 1},
  {buttonId: 'donate', buttonText: {displayText: 'Donate 🍵'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'Owner 🤣'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═══════✪ SEARCH 	
╠${prefix}play [query]
╠${prefix}song [query]
╠${prefix}yts [query]
╠${prefix}lyrics [query]
╠${prefix}google [query]
╠${prefix}google [query]
╠${prefix}anime [query]
╠${prefix}pinterest [query]
╠${prefix}image [query]
╠${prefix}wallpaper [query]
╠${prefix}searchno [number]
╠${prefix}horoscope [query]
╠${prefix}imdb [movie name]
╠${prefix}weather [loc name]
╠${prefix}genshin [char name]
╠${prefix}wikimedia [query]
╠${prefix}ytsearch [query]
╠${prefix}ringtone [query]
╚═════════════✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await MoxieBotInc.sendMessage(m.chat, buttonMessage)
}
break
            case 'convertmenu':{
var unicorn = await getBuffer(picak+'Convert Menu')

const buttons = [
  {buttonId: 'script', buttonText: {displayText: 'Script 🔖'}, type: 1},
  {buttonId: 'donate', buttonText: {displayText: 'Donate 🍵'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'Owner 🤣'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═══════✪ CONVERT 	
╠ ${prefix}toimage [reply stick]
╠ ${prefix}sticker [reply img|gif]
╠ ${prefix}take [reply img|gif|stik]
╠ ${prefix}smeme [reply img]
╠ ${prefix}emoji [emoji]
╠ ${prefix}tovideo [reply img]
╠ ${prefix}togif [reply stick]
╠ ${prefix}tovn [reply aud]
╠ ${prefix}tomp3 [reply vn]
╠ ${prefix}toaudio [reply vid]
╠ ${prefix}ebinary [reply txt]
╠ ${prefix}dbinary [reply txt]
╠ ${prefix}tinyurl [link]
╠ ${prefix}styletext [text]
╠${prefix}volume [reply aud]
╠${prefix}bass [reply aud]
╠${prefix}blown [reply aud]
╠${prefix}deep [reply aud]
╠${prefix}earrape [reply aud]
╠${prefix}fast [reply aud]
╠${prefix}fat [reply aud]
╠${prefix}nightcore [reply aud]
╠${prefix}reverse [reply aud]
╠${prefix}robot [reply aud]
╠${prefix}slow [reply aud]
╠${prefix}smooth [reply aud]
╠${prefix}squirrel [reply aud]
╚═════════════✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await MoxieBotInc.sendMessage(m.chat, buttonMessage)
}
break

case 'randomimagemenu':{
var unicorn = await getBuffer(picak+'Random Image Menu')

const buttons = [
  {buttonId: 'script', buttonText: {displayText: 'Script 🔖'}, type: 1},
  {buttonId: 'donate', buttonText: {displayText: 'Donate 🍵'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'Owner 🤣'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═══════✪ RANDOM IMG 	
╠${prefix}coffee
╠${prefix}woof
╠${prefix}meow
╠${prefix}lizard
╠${prefix}chinese
╠${prefix}japanese
╠${prefix}korean
╠${prefix}indo
╠${prefix}thai
╠${prefix}vietnamese
╠${prefix}malay
╠${prefix}hijab
╠${prefix}randomgirl
╠${prefix}randomboy
╠${prefix}aesthetic
╠${prefix}antiwork
╠${prefix}cosplay
╠${prefix}car
╠${prefix}bike
╠${prefix}doggo
╠${prefix}cat
╠${prefix}notnot
╠${prefix}kayes
╠${prefix}justina
╠${prefix}ryujin
╠${prefix}boneka
╠${prefix}rose
╠${prefix}kpop
╠${prefix}blackpink
╠${prefix}ulzzangboy
╠${prefix}ulzzanggirl
╠${prefix}pubg
╠${prefix}hacking
╠${prefix}profilepicture
╠${prefix}couplepicture
╠${prefix}wallphone
╠${prefix}wallml
╚═════════════✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await MoxieBotInc.sendMessage(m.chat, buttonMessage)
}
break
case 'randomvideomenu':{
var unicorn = await getBuffer(picak+'Random Video Menu')

const buttons = [
  {buttonId: 'script', buttonText: {displayText: 'Script 🔖'}, type: 1},
  {buttonId: 'donate', buttonText: {displayText: 'Donate 🍵'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'Owner 🤣'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═══════✪ RANDOM VIDEO
╠${prefix}tiktokgirl	
╠${prefix}tiktoknukhty
╠${prefix}tiktokpanrika
╠${prefix}tiktokkayes
╠${prefix}tiktoknotnot
╠${prefix}tiktokghea
╠${prefix}tiktoksantuy
╠${prefix}tiktokbocil
╚═════════════✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await MoxieBotInc.sendMessage(m.chat, buttonMessage)
}
break
           case 'emotemenu':{
var unicorn = await getBuffer(picak+'Emote Menu')

const buttons = [
  {buttonId: 'script', buttonText: {displayText: 'Script 🔖'}, type: 1},
  {buttonId: 'donate', buttonText: {displayText: 'Donate 🍵'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'Owner 🤣'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═══════✪ EMOTE 	
╠${prefix}instagramemoji
╠${prefix}facebookemoji
╠${prefix}iphoneemoji
╠${prefix}samsungemoji
╠${prefix}joyemoji
╠${prefix}skypeemoji
╠${prefix}twitteremoji
╠${prefix}whatsappemoji
╠${prefix}microsoftemoji
╠${prefix}googleemoji
╠${prefix}pediaemoji
╠${prefix}microsoftemoji
╚═════════════✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await MoxieBotInc.sendMessage(m.chat, buttonMessage)
}
break
            case 'imageeffectmenu':{
var unicorn = await getBuffer(picak+'Image Effect Menu')

const buttons = [
  {buttonId: 'script', buttonText: {displayText: 'Script 🔖'}, type: 1},
  {buttonId: 'donate', buttonText: {displayText: 'Donate 🍵'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'Owner 🤣'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═════✪ IMG EFFECT 	
╠${prefix}removebg [reply img]
╚═════════════✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await MoxieBotInc.sendMessage(m.chat, buttonMessage)
}
break
case 'animemenu':{
var unicorn = await getBuffer(picak+'Anime Menu')

const buttons = [
  {buttonId: 'script', buttonText: {displayText: 'Script 🔖'}, type: 1},
  {buttonId: 'donate', buttonText: {displayText: 'Donate 🍵'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'Owner 🤣'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═══════✪ ANIME 	
╠${prefix}animeneko
╠${prefix}waifu
╠${prefix}shinobu
╠${prefix}animeawoo
╠${prefix}animewaifu
╠${prefix}foxgirl
╠${prefix}animenom
╠${prefix}goose
╠${prefix}8ball
╠${prefix}avatar
╠${prefix}tickle
╠${prefix}gecg
╠${prefix}feed
╠${prefix}husbu
╠${prefix}neko2
╠${prefix}randomanime
╠${prefix}shota
╠${prefix}waifu2
╠${prefix}animeslap
╠${prefix}animepat
╠${prefix}animeneko
╠${prefix}animekiss
╠${prefix}animewlp
╠${prefix}animecuddle
╠${prefix}animecry
╠${prefix}animekill
╠${prefix}animelick
╠${prefix}animebite
╠${prefix}animeyeet
╠${prefix}animebully
╠${prefix}animebonk
╠${prefix}animewink
╠${prefix}animepoke
╠${prefix}animesmile
╠${prefix}animewave
╠${prefix}animeawoo
╠${prefix}animeblush
╠${prefix}animesmug
╠${prefix}animeglomp
╠${prefix}animehappy
╠${prefix}animedance
╠${prefix}animecringe
╠${prefix}animehighfive
╠${prefix}animehandhold
╠${prefix}animemegumin
╠${prefix}animemegumin
╠${prefix}animesmug
╠${prefix}loli-waifu
╠${prefix}couplepp
╠${prefix}animewall [query]
╠${prefix}animewall2 [query]
╚═════════════✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await MoxieBotInc.sendMessage(m.chat, buttonMessage)
}
break
            case 'stickermenu':{
var unicorn = await getBuffer(picak+'Sticker Menu')

const buttons = [
  {buttonId: 'script', buttonText: {displayText: 'Script 🔖'}, type: 1},
  {buttonId: 'donate', buttonText: {displayText: 'Donate 🍵'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'Owner 🤣'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═══════✪ STICKER 	
╠ ${prefix}patrick
╠ ${prefix}emoji
╠ ${prefix}emojimix
╠ ${prefix}doge
╠ ${prefix}lovesticker
╠ ${prefix}animestick
╠ ${prefix}spongebob
╠ ${prefix}gojosatoru
╠ ${prefix}nicholas
╠ ${prefix}cartoon
╠ ${prefix}stickman
╚═════════════✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await MoxieBotInc.sendMessage(m.chat, buttonMessage)
}
break
case 'animestickermenu':{
var unicorn = await getBuffer(picak+'Anime Sticker Menu')

const buttons = [
  {buttonId: 'script', buttonText: {displayText: 'Script 🔖'}, type: 1},
  {buttonId: 'donate', buttonText: {displayText: 'Donate 🍵'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'Owner 🤣'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═══════✪ ANIME STICKER 	
╠${prefix}loli
╠${prefix}bully
╠${prefix}cuddle
╠${prefix}cry
╠${prefix}hug
╠${prefix}awoo
╠${prefix}kiss
╠${prefix}lick
╠${prefix}pat
╠${prefix}smug
╠${prefix}bonk
╠${prefix}yeet
╠${prefix}blush
╠${prefix}smile
╠${prefix}wave
╠${prefix}highfive
╠${prefix}handhold
╠${prefix}nom
╠${prefix}glomp
╠${prefix}bite
╠${prefix}slap
╠${prefix}kill
╠${prefix}happy
╠${prefix}wink
╠${prefix}poke
╠${prefix}dance
╠${prefix}cringe
╠${prefix}neko
╠${prefix}gura
╚═════════════✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await MoxieBotInc.sendMessage(m.chat, buttonMessage)
}
break 
case 'nsfwmenu':{
var unicorn = await getBuffer(picak+'Nsfw Menu')

const buttons = [
  {buttonId: 'script', buttonText: {displayText: 'Script 🔖'}, type: 1},
  {buttonId: 'donate', buttonText: {displayText: 'Donate 🍵'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'Owner 🤣'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═══════✪ NSFW 	
╠${prefix}gifhentai
╠${prefix}gifblowjob
╠${prefix}hentaivideo
╠${prefix}hneko
╠${prefix}nwaifu
╠${prefix}animespank
╠${prefix}trap
╠${prefix}gasm
╠${prefix}ahegao
╠${prefix}ass
╠${prefix}bdsm
╠${prefix}blowjob
╠${prefix}cuckold
╠${prefix}cum
╠${prefix}milf
╠${prefix}eba
╠${prefix}ero
╠${prefix}femdom
╠${prefix}foot
╠${prefix}gangbang
╠${prefix}glasses
╠${prefix}hentai
╠${prefix}jahy
╠${prefix}manga
╠${prefix}masturbation
╠${prefix}neko-hentai
╠${prefix}neko-hentai2
╠${prefix}nsfwloli
╠${prefix}orgy
╠${prefix}panties
╠${prefix}pussy
╠${prefix}tentacles
╠${prefix}thights
╠${prefix}yuri
╠${prefix}zettai
╚═════════════✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await MoxieBotInc.sendMessage(m.chat, buttonMessage)
}
break
case 'funmenu':{
var unicorn = await getBuffer(picak+'Fun Menu')

const buttons = [
  {buttonId: 'script', buttonText: {displayText: 'Script 🔖'}, type: 1},
  {buttonId: 'donate', buttonText: {displayText: 'Donate 🍵'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'Owner 🤣'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═══════✪ Fun 
╠ ${prefix}say [text]	
╠ ${prefix}define [text]
╠ ${prefix}how [text]
╠ ${prefix}when [text]
╠ ${prefix}where [text]
╠ ${prefix}is [text]
╠ ${prefix}what [text]
╠ ${prefix}can [text]
╠ ${prefix}rate [text]
╠ ${prefix}coolcheck [tag]
╠ ${prefix}stupidcheck [tag]
╠ ${prefix}waifucheck [tag]
╠ ${prefix}evilcheck [tag]
╠ ${prefix}dogcheck [tag]
╠ ${prefix}hotcheck [tag]
╠ ${prefix}smartcheck [tag]
╠ ${prefix}uncleancheck [tag]
╠ ${prefix}greatcheck [tag]
╠ ${prefix}beautifulcheck [tag]
╠ ${prefix}awesomecheck [tag]
╠ ${prefix}prettycheck [tag]
╠ ${prefix}lesbiancheck [tag]
╠ ${prefix}gaycheck [tag]
╠ ${prefix}cutecheck [tag]
╠ ${prefix}uglycheck [tag]
╠ ${prefix}hornycheck [tag]
╠ ${prefix}charactercheck [tag]
╠ ${prefix}lovelycheck [tag]
╠ ${prefix}couple
╠ ${prefix}soulmate
╠ ${prefix}hot
╠ ${prefix}sexy
╠ ${prefix}kind
╠ ${prefix}idiot
╠ ${prefix}handsome
╠ ${prefix}beautiful
╠ ${prefix}cute
╠ ${prefix}pretty
╠ ${prefix}lesbian
╠ ${prefix}noob
╠ ${prefix}bastard
╠ ${prefix}foolish
╠ ${prefix}nerd
╠ ${prefix}asshole
╠ ${prefix}gay
╠ ${prefix}smart
╠ ${prefix}stubble
╠ ${prefix}dog
╠ ${prefix}horny
╠ ${prefix}cunt
╠ ${prefix}wibu
╠ ${prefix}noobra
╠ ${prefix}nibba
╠ ${prefix}nibbi
╠ ${prefix}comrade
╠ ${prefix}mumu
╠ ${prefix}rascal
╠ ${prefix}scumbag
╠ ${prefix}nuts
╠ ${prefix}fagot
╠ ${prefix}scoundrel
╠ ${prefix}ditch
╠ ${prefix}dope
╠ ${prefix}gucci
╠ ${prefix}lit
╠ ${prefix}dumbass
╠ ${prefix}crackhead
╠ ${prefix}mf
╠ ${prefix}motherfucker
╠ ${prefix}sucker
╠ ${prefix}fuckboy
╠ ${prefix}playboy
╠ ${prefix}fuckgirl
╠ ${prefix}playgirl
╠ ${prefix}quotes
╚═════════════✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await MoxieBotInc.sendMessage(m.chat, buttonMessage)
}
break
case 'gamemenu':{
var unicorn = await getBuffer(picak+'Game Menu')

const buttons = [
  {buttonId: 'script', buttonText: {displayText: 'Script 🔖'}, type: 1},
  {buttonId: 'donate', buttonText: {displayText: 'Donate 🍵'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'Owner 🤣'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═══════✪ GAME 	
╠ ${prefix}truth
╠ ${prefix}dare
╠ ${prefix}tictactoe
╠ ${prefix}delttt
╠ ${prefix}guess [option]
╠ ${prefix}math [mode]
╠ ${prefix}suitpvp [tag]
╚═════════════✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await MoxieBotInc.sendMessage(m.chat, buttonMessage)
}
break
            case 'anonymousmenu':{
var unicorn = await getBuffer(picak+'Anonymous Menu')

const buttons = [
  {buttonId: 'script', buttonText: {displayText: 'Script 🔖'}, type: 1},
  {buttonId: 'donate', buttonText: {displayText: 'Donate 🍵'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'Owner 🤣'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═══✪ ANONYMOUS 	
╠${prefix}anonymous
╠${prefix}start
╠${prefix}next
╠${prefix}leave
╚═════════════✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await MoxieBotInc.sendMessage(m.chat, buttonMessage)
}
break
case 'databasemenu':{
var unicorn = await getBuffer(picak+'Database Menu')

const buttons = [
  {buttonId: 'script', buttonText: {displayText: 'Script 🔖'}, type: 1},
  {buttonId: 'donate', buttonText: {displayText: 'Donate 🍵'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'Owner 🤣'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═══✪ DATABASE 	
╠ ${prefix}setcmd
╠ ${prefix}listcmd
╠ ${prefix}delcmd
╠ ${prefix}lockcmd
╠ ${prefix}addmsg
╠ ${prefix}listmsg
╠ ${prefix}getmsg
╠ ${prefix}delmsg
╚═════════════✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await MoxieBotInc.sendMessage(m.chat, buttonMessage)
}
break
case 'othermenu':{
var unicorn = await getBuffer(picak+'Other Menu')

const buttons = [
  {buttonId: 'script', buttonText: {displayText: 'Script 🔖'}, type: 1},
  {buttonId: 'donate', buttonText: {displayText: 'Donate 🍵'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'Owner 🤣'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═══════✪ OTHER 	
╠ ${prefix}afk
╠ ${prefix}id
╠ ${prefix}toqr [link]
╠ ${prefix}repeat
╠ ${prefix}readmore [text]
╠ ${prefix}toviewonce
╠ ${prefix}fliptext [text]] 
╠ ${prefix}alive
╠ ${prefix}script
╠ ${prefix}ping
╠ ${prefix}owner
╠ ${prefix}menu
╠ ${prefix}delete
╠ ${prefix}chatinfo
╠ ${prefix}quoted
╠ ${prefix}listpc
╠ ${prefix}listgc
╠ ${prefix}donate
╠ ${prefix}request
╠ ${prefix}report [bug]
╚═════════════✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await MoxieBotInc.sendMessage(m.chat, buttonMessage)
}
break
case 'warmenu':{
var unicorn = await getBuffer(picak+'War Menu')

const buttons = [
  {buttonId: 'script', buttonText: {displayText: 'Script 🔖'}, type: 1},
  {buttonId: 'donate', buttonText: {displayText: 'Donate 🍵'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'Owner 🤣'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═══════✪「 BUG MENU 」	
╠════☾pc attack☽
╠${prefix}pcbut [number]
╠${prefix}pcvn [number]
╠${prefix}pcstick [number]
╠${prefix}pcfast [number]
╠${prefix}pcslow [number]
╠${prefix}pcbunny [number]
╠${prefix}xcrasher [amount]
╠${prefix}pccontact [amount]
╠${prefix}virtex5 [amount]
╠${prefix}flower [amount]
╠${prefix}pollbug [amount]
╠${prefix}catalogbug [amount]
╠${prefix}trollybug [amount]
╠${prefix}trollybug2 [amount]
╠════☾gc attack☽
╠${prefix}gcslow
╠${prefix}gcfast
╠${prefix}gcbunny
╠${prefix}tagallbug
╠════☾pc & gc attack☽
╠${prefix}vnbug [amount]
╠${prefix}docbug [amount]
╠${prefix}pcgcslow [number]
╠${prefix}pcgcfast [number]
╠${prefix}pcgcbunny [number]
╠${prefix}textshot
╠${prefix}docfuck [amount]
╠${prefix}docsoft [amount]
╠${prefix}docsoft2 [amount]
╚═════════════✪`,
    footer: `${botname}`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await MoxieBotInc.sendMessage(m.chat, buttonMessage)
}
break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Find Partners', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    MoxieBotInc.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }       

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
