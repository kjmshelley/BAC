const config = require("./config");
const { Client } = require("pg");

async function connect() {
    // test connection
    let client;
    try {
        client = new Client(config);
        await client.connect();
        return true;
    } catch (ex) {
        console.log(ex);
        return false;
    } finally {
        if (client) client.end();
    }
}

async function getData(sql) {
    let client;
    try {
        client = new Client(config);
        await client.connect();
    } catch (ex) {
        console.log(ex);
    } finally {
        if (client) client.end();
    }
}

module.exports = {
    connect
};