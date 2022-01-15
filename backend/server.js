const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const sanitizeHTML = require("sanitize-html");
const app = express();

let db;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

async function go() {
  const client = new MongoClient(
    "mongodb+srv://todoAppUser:arif@cluster0.dwjsc.mongodb.net/TodoApp?retryWrites=true&w=majority"
  );
  await client.connect();
  db = client.db();
  app.listen(3001);
}

go();

app.get("/items", (req, res) => {
  db.collection("items")
    .find()
    .toArray((err, items) => {
      res.json(items);
    });
});

app.post("/create-item", (req, res) => {
  const { text } = req.body;
  const safeText = sanitizeHTML(text, {
    allowedTags: [],
    allowedAttributes: [],
  });
  db.collection("items").insertOne({ text: safeText }, (err, info) => {
    res.json({ _id: info.insertedId, text: safeText });
  });
});

app.post("/update-item", (req, res) => {
  const { _id, text } = req.body;
  const safeText = sanitizeHTML(text, {
    allowedTags: [],
    allowedAttributes: [],
  });
  db.collection("items").findOneAndUpdate(
    { _id: new ObjectId(_id) },
    { $set: { text: safeText } },
    (err, info) => {
      res.json({ _id: _id, text: safeText });
    }
  );
});

app.post("/delete-item", (req, res) => {
  const { _id } = req.body;
  db.collection("items").deleteOne({ _id: new ObjectId(_id) }, (err, info) => {
    res.json(info);
  });
});
