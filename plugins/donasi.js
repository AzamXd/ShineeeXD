let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Pulsa [089530417506]
│ • Dana [081389368689]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Dana [081389368689]
│ • Pulsa [081389368689]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
