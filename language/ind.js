exports.wait = () => {
	return`*「❗」WAIT ⏳ IN PROSES*`
}

exports.succes = () => {
	return`*「 SUKSES 」*`
}

exports.lvlon = () => {
	return`*「❗」ENABLE LEVELING*`
}

exports.lvloff = () => {
	return`*「❗」DISABLE LEVELING*`
}

exports.lvlnul = () => {
	return`*「❗」LEVELMU MASIH KOSONG*`
}

exports.lvlnoon = () => {
	return`*「❗」LEVEL DI GRUB BELUM DI AKTIFKAN*`
}

exports.noregis = () => {
	return`*「❗」BELUM DAFTAR*\n*cara daftar ${prefix}daftar nama|umur* \n\n*contoh ${prefix}daftar Nurul|18*`
}

exports.baned = () => {
	return`*「❗」SORRY SORRY AJA NIH KAK, TAPI KAU SUDAH KU BANNED YAHAHAHA HAYUUU :V*`
}

exports.rediregis = () => {
	return`*「 SUDAH DAFTAR 」*\n\n*kamu sudah terdaftar kak >_<*`
}

exports.stikga = () => {
	return`*「 GAGAL 」Coba ulangi lain kali kak*`
}

exports.linkga = () => {
	return`*「❗」maaf linknya tidak valid kak*`
}

exports.groupo = () => {
	return`*「❗」GROUP ONLY*`
}

exports.ownerb = () => {
	return`*「❗」OWNER BOT ONLY*`
}

exports.ownerg = () => {
	return`*「❗」OWNER GROUP ONLY*`
}

exports.admin = () => {
	return`*「❗」ADMIN GROUP ONLY*`
}

exports.badmin = () => {
	return`*「❗」BOT HARUS JADI ADMIN*`
}

exports.nsfwoff = () => {
	return`*「❗」NSFW GAK AKTIF*`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi*`
}

exports.wrongf = () => {
	return`*「🤔」Teks nya mana kak?*`
}

exports.clears = () => {
	return`*「🚮」Clear all Success*`
}

exports.pc = () => {
	return`*「❗」REGISTRASI*\n\nuntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender, botName) => {
	return`╭❑➢─|≪━━━𝚄𝚂𝙴𝚁 𝙸𝙽𝙵𝙾━━━≫|─➢° ᭄\n╎╎᭄\n╎❑➢  𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝚂𝙸 𝙱𝙴𝚁𝙷𝙰𝚂𝙸𝙻\n╎╎᭄\n╎╭━━━━━━━━━━━━━━━━━━━━━\n╎╎᭄\n╎╎❒► 𝙽𝚊𝚖𝚎 : ${namaUser}\n╎╎᭄\n╎╎❒► 𝙽𝚘𝚖𝚎𝚛 : wa.me/${sender.split("@")[0]}\n╎╎᭄\n╎╎❒► 𝚄𝙼𝚄𝚁 : ${umurUser}\n╎╎᭄\n╎╎❒► 𝚆𝙰𝙺𝚃𝚄 𝙳𝙰𝙵𝚃𝙰𝚁 : ${time}\n╎╎᭄\n╎╎❒► 𝚂𝙽 : ${serialUser}\n╎╎᭄\n╎╰❑➢─| 𝙽𝙾𝚃𝙴 ⊱✿⊰ 𝙱𝙾𝚃 |─➢°࿐\n╎᭄\n╎❒► 𝙿𝚎𝚜𝚊𝚗 𝙸𝚗𝚒 𝚂𝚊𝚗𝚐𝚊𝚝 𝙿𝚎𝚗𝚝𝚒𝚗𝚐!! 𝙺𝚊𝚝𝚊𝚗𝚢𝚊...\n╎᭄\n╎❒► 𝙺𝚊𝚝𝚊𝚗𝚢𝚊...:𝚅\n╎᭄\n╰❑➢─| 𝙼𝙰𝙽𝙲𝙰 ⊱✿⊰ 𝙱𝙾𝚃 |─➢°࿐`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* tidak di temukan\coba tulis *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*maaf tapi ${pushname} bukan owner script*`
}
exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
╭❑➢─|≪━━━𝚂𝙴𝙻𝙰𝙼𝙰𝚃━━━≫|─➢° ᭄
╎
╎❑➢ 𝙽𝚊𝚖𝚊 : ${pushname}
╎╎
╎❑➢ 𝙽𝚘𝚖𝚎𝚛 : wa.me/${sender.split("@")[0]}
╎╎
╎❑➢ 𝚇𝚙 : ${getLevelingXp(sender)}
╎╎
╎❑➢ 𝙻𝚎𝚟𝚎𝚕 : ${getLevel} ➸ ${getLevelingLevel(sender)}
╎
╰❑➢─| 𝙼𝙰𝙽𝙲𝙰 ⊱✿⊰ 𝙱𝙾𝚃 |─➢°࿐
`}
 
exports.limitend = (pushname) => {
	return`*maaf ${pushname} limit hari ini habis*\n*limit di reset setiap jam 24:00*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
sisa limit anda : ${limitCounts}

Upgrade premium bosku, biar bebas gunain bot`
}

exports.satukos = () => {
	return`*Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`╭❑➢─|≪━━━𝙰𝚃𝙼━━━≫|─➢° ᭄\n╎\n╎❑➢ 𝙽𝚊𝚖𝚊 : ${pushname}\n╎╎\n╎❑➢ 𝙽𝚘𝚖𝚎𝚛 : ${sender.split("@")[0]}\n╎╎\n╎❑➢ 𝚄𝚊𝚗𝚐 : ${uangkau}\n╎\n╰❑➢─| 𝙼𝙰𝙽𝙲𝙰 ⊱✿⊰ 𝙱𝙾𝚃 |─➢°࿐`
}