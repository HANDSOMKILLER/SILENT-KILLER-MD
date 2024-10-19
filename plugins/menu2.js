const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')

cmd({
    pattern: "menu2",
    react: "👾",
    desc: "get cmd list",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const config = await readEnv();
let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
search: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `➺${commands[i].pattern}\n`;
 }
}

let madeMenu = `❁ ════ ❃•◯•❃ ════ ❁

*⇆ ᴀssᴀʟᴀᴍ-ᴏ-ᴀʟᴀɪᴋᴜᴍ🫶 ᴍʏ ʟᴏᴠᴇʀs ⇆*

     *${pushname}*

❁ ════ ❃•◯•❃ ════ ❁

⇩━━━━━━━━❁━━━━━━━━⇩
╰────────────────


╭━━━⊱ 👤 *MENU2* 👤 ⊱━━━╮

*❖ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ ᴍʏ ʙᴏᴛ ✔︎➪sɪʟᴇɴᴛ-ᴋɪʟʟᴇʀ-ᴍᴅ❖*

*ᴛʜᴇ ᴡᴏʀʟᴅ ʙᴇsᴛ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ sɪʟᴇɴᴛᴋɪʟʟᴇʀ⁴⁶⁹*
       
  ╰━━━━━━━━━━━━━━━━╯

❁ ════ ❃•◯•❃ ════ ❁
*_https://github.com/HANDOMKILLER/SILENT-KILLER-MD_*
❁ ════ ❃•◯•❃ ════ ❁
⇩━━━━━━━━❁━━━━━━━━⇩

╔═.✵.═════════.✵.═╗
> *❂ᴅᴏᴡɴʟᴏᴀᴅ ᴄᴏᴍᴍᴀɴᴅs❂*
╚═.✵.═════════.✵.═╝

❁ ════ ❃•⇆•❃ ════ ❁
${menu.download}
❁ ════ ❃•⇆•❃ ════ ❁

╔═.✵.═════════.✵.═╗
> *❂ᴍᴀɪɴ ᴄᴏᴍᴍᴀɴᴅs❂*
╚═.✵.═════════.✵.═╝

❁ ════ ❃•⇆•❃ ════ ❁
${menu.main}
❁ ════ ❃•⇆•❃ ════ ❁

╔═.✵.═════════.✵.═╗
> *❂ɢʀᴏᴜᴘ ᴄᴏᴍᴍᴀɴᴅs❂*
╚═.✵.═════════.✵.═╝

❁ ════ ❃•⇆•❃ ════ ❁
${menu.group}
❁ ════ ❃•⇆•❃ ════ ❁

╔═.✵.═════════.✵.═╗
> *❂ᴏᴡɴᴇʀ ᴄᴏᴍᴍᴀɴᴅs❂*
╚═.✵.═════════.✵.═╝

❁ ════ ❃•⇆•❃ ════ ❁
${menu.owner}
❁ ════ ❃•⇆•❃ ════ ❁

╔═.✵.═════════.✵.═╗
> *❂ᴄᴏɴᴠᴇʀᴛ ᴄᴏᴍᴍᴀɴᴅs❂*
╚═.✵.═════════.✵.═╝

❁ ════ ❃•⇆•❃ ════ ❁
${menu.convert}
❁ ════ ❃•⇆•❃ ════ ❁

╔═.✵.═════════.✵.═╗
> *❂sᴇᴀʀᴄʜ ᴄᴏᴍᴍᴀɴᴅs❂*
╚═.✵.═════════.✵.═╝

❁ ════ ❃•⇆•❃ ════ ❁
${menu.search}
❁ ════ ❃•⇆•❃ ════ ❁

*𝐏𝐎𝐖𝐄𝐑𝐃 𝐁𝐘 𝐒𝐈𝐋𝐄𝐍𝐓-𝐊𝐈𝐋𝐋𝐄𝐑⁴⁶⁹*

╰━❁ ═══ ❃•⇆•❃ ═══ ❁━╯
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
