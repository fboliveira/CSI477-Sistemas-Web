interface ParametersInterface {
  database: string;
  connection: string;
  pools: number;
}

function connect(parameters: ParametersInterface) {
  console.log("Connecting database ...");
  console.log(`Database: ${parameters.database}`);
  console.log(`Connection: ${parameters.connection}`);
  console.log(`Number of connections: ${parameters.pools}`);
}

console.log("Starting server... ");

const parameters: ParametersInterface = {
    database: "MySQL",
    connection: "root@localhost",
    pools: 10

}

connect(parameters);
console.log("Server is running");
