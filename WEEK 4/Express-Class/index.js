const express = require("express");
const app = express();

const user = [
  {
    name: "John",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

app.get("/"),
  function (req, res) {
    const johnKidneys = user[0].kidneys;
    const numberOfKidneys = kidneys.length;

    let numberOfHealthyKidneys = 0;
    for (let i = 0; i < johnKidneys.length; i++) {
      if (johnKidneys[i].healthy) {
        numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
      }
    }

    const numberOfUnHealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
      johnKidneys,
      numberOfHealthyKidneys,
      numberOfUnHealthyKidneys,
    });
  };

app.listen(3000);
