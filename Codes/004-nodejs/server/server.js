// CommonJs - require/modules.export
// const os = require('os');
// EsModules - import/export
import os from 'os';

const user = os.userInfo();

console.log('Olá, mundo!');


function serverInfo() {
    console.clear();
    console.log(`Plataforma: ${os.platform()}`);
    console.log(`Usuário: ${user.username}`);
    console.log(`ID do usuário: ${user.uid}`);
    
    console.log(`Total de memória: ${os.totalmem()} bytes`);
    console.log(`Memória livre: ${os.freemem()} bytes`);
}

setInterval(serverInfo, 2000);

// modules.export = { user }
export { user, serverInfo }