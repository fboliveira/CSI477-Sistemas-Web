import os from 'os';

// Iniciar o servidor:
console.log('Hello world!');
console.log(`Servername: ${os.hostname()}`);

const freememory = os.freemem() / (1024 * 1024 * 1024);
const total = os.totalmem() / (1024 * 1024 * 1024);

console.log(`Free memory: ${freememory} GB`);
console.log(`Total: ${total} GB`);