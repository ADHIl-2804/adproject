const express = require("express");
const admin = require("firebase-admin");
const app = express();

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
