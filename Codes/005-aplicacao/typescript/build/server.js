"use strict";
function connect(parameters) {
    console.log("Connecting database ...");
    console.log(`Database: ${parameters.database}`);
    console.log(`Connection: ${parameters.connection}`);
    console.log(`Number of connections: ${parameters.pools}`);
}
console.log("Starting server... ");
const parameters = {
    database: "MySQL",
    connection: "root@localhost",
    pools: 10
};
connect(parameters);
console.log("Server is running");
