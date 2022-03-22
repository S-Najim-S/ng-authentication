const express = require("express");
const User = require("../modals/user");
const jwt = require("jsonwebtoken");

const router = express.Router();

const mongoose = require("mongoose");
const user = require("../modals/user");

const db =
  "mongodb+srv://usernajim:najim@cluster0.8eguw.mongodb.net/authangular?retryWrites=true&w=majority";

mongoose.connect(db, (err) => {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Connected to mangodb");
  }
});
router.get("/", (req, res) => {
  res.send("From API route");
});

router.post("/register", (req, res) => {
  let userData = req.body;
  let user = new User(userData);

  user.save((err, registeredUser) => {
    if (err) {
      console.log(err);
    } else {
      let payload = { subject: registeredUser._id };
      let token = jwt.sign(payload, "secretKey");
      res.status(200).send({ token });
    }
  });
});

router.post("/login", (req, res) => {
  let userData = req.body;

  User.findOne({ email: userData.email }, (err, user) => {
    if (err) {
      console.log(err);
    } else {
      if (!user) {
        res.status(401).send("Invalid email");
      } else {
        if (user.password !== userData.password) {
          res.status(401).send("Invalid Password");
        } else {
          let payload = { subject: user._id };
          let token = jwt.sign(payload, "secretKey");

          res.status(200).send({ token });
        }
      }
    }
  });
});

router.get("/events", (req, res) => {
  let events = [
    {
      id: "1",
      name: "Auto Expo",
      description: "lorem ipsum",
      date: "2020-04-23T18:25:43.511Z",
    },
    {
      id: "1",
      name: "Auto Expo",
      description: "lorem ipsum",
      date: "2020-04-23T18:25:43.511Z",
    },
    {
      id: "2",
      name: "Auto Expo",
      description: "lorem ipsum",
      date: "2020-04-23T18:25:43.511Z",
    },
    {
      id: "3",
      name: "Auto Expo",
      description: "lorem ipsum",
      date: "2020-04-23T18:25:43.511Z",
    },
    {
      id: "4",
      name: "Auto Expo",
      description: "lorem ipsum",
      date: "2020-04-23T18:25:43.511Z",
    },
  ];
  res.json(events);
});

router.get("/special", (req, res) => {
  let events = [
    {
      id: "1",
      name: "Auto Expo",
      description: "lorem ipsum",
      date: "2020-04-23T18:25:43.511Z",
    },
    {
      id: "1",
      name: "Auto Expo",
      description: "lorem ipsum",
      date: "2020-04-23T18:25:43.511Z",
    },
    {
      id: "2",
      name: "Auto Expo",
      description: "lorem ipsum",
      date: "2020-04-23T18:25:43.511Z",
    },
    {
      id: "3",
      name: "Auto Expo",
      description: "lorem ipsum",
      date: "2020-04-23T18:25:43.511Z",
    },
    {
      id: "4",
      name: "Auto Expo",
      description: "lorem ipsum",
      date: "2020-04-23T18:25:43.511Z",
    },
  ];
  res.json(events);
});

module.exports = router;
