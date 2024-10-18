const fs = require('fs');
const axios = require("axios");
const {cmd , commands} = require('../command');


cmd({
    pattern: "take",
    desc: "sticker pack Change",
    category: "main",
    react: "⛱️",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

   let data;
   if (!message.reply_message || (!message.reply_message.sticker && !message.reply_message.audio)) return await message.reply("_Reply to a sticker or audio_");
   if (message.reply_message.sticker) {
   const stickerPackName = (match || config.STICKER_PACKNAME).split(";");
   await message.send(await message.reply_message.download(), { packname: stickerPackName[0], author: stickerPackName[1] }, "sticker");
   } else if (message.reply_message.audio) {
   const buff = await message.reply_message.download();
   const audioBuffer = Buffer.from(buff);
   const audioResult = await toAudio(audioBuffer, 'mp4');
   if (match) data = match.split(";");
   data = config.AUDIO_DATA.split(";");
   await message.reply(await AddMp3Meta(audioResult, await getBuffer(data[2]), { title: data[0], body: data[1] }), { mimetype: "audio/mp4" }, "audio");
}});


cmd({
    pattern: "take",
    desc: "sticker pack Change",
    category: "main",
    react: "⛱️",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

   let data;
   if (!message.reply_message || (!message.reply_message.sticker && !message.reply_message.audio)) return await message.reply("_Reply to a sticker or audio_");
   if (message.reply_message.sticker) {
   const stickerPackName = (match || config.STICKER_PACKNAME).split(";");
   await message.send(await message.reply_message.download(), { packname: stickerPackName[0], author: stickerPackName[1] }, "sticker");
   } else if (message.reply_message.audio) {
   const buff = await message.reply_message.download();
   const audioBuffer = Buffer.from(buff);
   const audioResult = await toAudio(audioBuffer, 'mp4');
   if (match) data = match.split(";");
   data = config.AUDIO_DATA.split(";");
   await message.reply(await AddMp3Meta(audioResult, await getBuffer(data[2]), { title: data[0], body: data[1] }), { mimetype: "audio/mp4" }, "audio");
}});
