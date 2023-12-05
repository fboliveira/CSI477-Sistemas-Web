// CommonJs - require/modules.export
// const os = require('os');
// EsModules - import/export
import os from 'os';

function serverInfo() {

    const user = os.userInfo();
    console.clear();
    console.log(`Plataforma: ${os.platform()}`);
    console.log(`Usuário: ${user.username}`);
    console.log(`ID do usuário: ${user.uid}`);
    
    console.log(`Total de memória: ${os.totalmem()} bytes`);
    console.log(`Memória livre: ${os.freemem()} bytes`);
}

function getUsername() {

}


// modules.export = { user }
export default serverInfo