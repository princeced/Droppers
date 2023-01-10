const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function dbConnect(data) {
    if (data) {
        let result = await client.connect();
        db = result.db("Dropshipper");
        return db.collection(data);
    }
}

module.exports = dbConnect;