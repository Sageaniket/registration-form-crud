const express = require("express");
const app = express();
var cors = require("cors");
const { MongoClient, ObjectId } = require("mongodb");
// Connection URL
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
// Database Name
const dbName = "userDetails";
let collection = null;

const db = client.db(dbName);
collection = db.collection("userData");

const port = 4000;
app.use(express.json());
app.use(cors());

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");

  // the following code examples can be pasted here...

  return "done.";
}


app.get('/', function (req, res) {
  res.send('Hello World')
})


app.post("/setUser", async (req, res) => {
  let userData = req.body.tempObj;
  console.log("Data is  ----> ", userData);
  const response = await collection.insertOne(userData);
  console.log("response   ----> ", response);
  res.send({ ...userData });
});



app.listen(port, () => {
  main();
  console.log(`Example app listening on port ${port}`);
});