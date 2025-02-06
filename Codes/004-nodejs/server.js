// CommonJS
//const os = require('os')
// ESmodules
import os from 'os'
import start, { stop } from './api.js'

console.log('Olá, mundo!')

const user = os.userInfo()

console.log(`Usuário: ${user.username}`)
console.log(`Pasta: ${user.homedir}`)
console.log(`Plataforma: ${os.platform()}`)

start()
stop()