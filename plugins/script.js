const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')

cmd({
    pattern: "script",
    react: "👑",
    alias: ["sc","repo","info"],
    desc: "get owner number",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const config = await readEnv();
let madeMenu = `❁ ════ ❃•◯•❃ ════ ❁

*⇆ ʜɪɪ ᴍʏ ᴅᴇᴀʀ ғʀɪᴇɴᴅ ⇆*

     *${pushname}*

❁ ════ ❃•◯•❃ ════ ❁

*ʜᴇʀᴇ ɪs ʙᴏᴛ sᴄʀɪᴘᴛ*

⇩━━━━━━━━❁━━━━━━━━⇩
╭⊱✫🔮✠sɪʟᴇɴᴛ-ᴋɪʟʟᴇʀ-ᴍᴅ🔮✫⊱╮
│✫ - *📂ʀᴇᴘᴏsɪᴛᴏʀʏ ɴᴀᴍᴇ:* *sɪʟᴇɴᴛ-ᴋɪʟʟᴇʀ-ᴍᴅ*
│✫ - *📃ᴅᴇsᴄʀɪᴘᴛɪᴏɴ:* *ســـؔــر آنکھـــؔــوں👀 پـــؔــر وہ لـــؔــوگ جـــؔــو منـــؔـافقـــؔـت نہیـــؔـں کرتـــؔــے 🙌🏻🔥🍾*
│✫ - *🛡️ᴏᴡɴᴇʀ:* *sɪʟᴇɴᴛ ᴋɪʟʟᴇʀ⁴⁶⁹*
│✫ - *🌐 ᴜʀʟ:* https://github.com/HANDSOMKILLER/SILENTKILLER-MD
╰━━━━━━━━━━━━━━━━━╯
> *❁ᴊᴏɪɴ ᴍʏ ᴡʜᴀᴛsᴀᴘᴘ ᴄʜᴀɴɴᴇʟ ғᴏʀ ᴜᴘᴅᴀᴛᴇs sɪʟᴇɴᴛ-ᴋɪʟʟᴇʀ-ᴍᴅ❁*

https://whatsapp.com/channel/0029VarkVkoLikg1S62MEt42

> *❁ᴊᴏɪɴ ᴏᴜʀ ʏᴏᴜᴛᴜʙᴇ ᴄʜᴀɴɴᴇʟ ғᴏʀ ᴜᴘᴅᴀᴛᴇs sɪʟᴇɴᴛ-ᴋɪʟʟᴇʀ-ᴍᴅ❁*

https://youtube.com/@silentkiller-469?si=XIj8bTPs48SaUAZ_
❁ ════ ❃•⇆•❃ ════ ❁

> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ sɪʟᴇɴᴛ_ᴋɪʟʟᴇʀ⁴⁶⁹*

╰━❁ ═══ ❃•⇆•❃ ═══ ❁━╯
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
