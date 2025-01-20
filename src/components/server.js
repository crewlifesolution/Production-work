const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const admin = require("firebase-admin");
require("dotenv").config();

// Firebase setup
const serviceAccount = require("./firebaseServiceAccount.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_DB_URL,
});

const db = admin.firestore();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
app.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await admin.auth().createUser({ email, password });
    res.status(200).send({ message: "User created successfully", user });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

app.post("/leave-bid", async (req, res) => {
  const { userId, bidDetails } = req.body;
  try {
    await db
      .collection("leaveBids")
      .add({ userId, bidDetails, createdAt: new Date() });
    res.status(200).send({ message: "Leave bid submitted successfully" });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

app.get("/reminders/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const reminders = await db
      .collection("reminders")
      .where("userId", "==", userId)
      .get();
    const reminderData = reminders.docs.map((doc) => doc.data());
    res.status(200).send(reminderData);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
