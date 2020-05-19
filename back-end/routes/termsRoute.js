const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const searchTermSchema = require("../models/term");

mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);

// list term in DB
router.post("/", (req, res) => {
  // const t = new searchTermSchema();
  const { term, email } = req.body;

  //   const user = searchTermSchema.find({ user: email, searched_term: term });
  //   term.searched_term = searchedTerm;
  //   term.user = email;
  //   if (user) {
  //       term.count = count + 1;
  //   } else {
  //       term.count = 1;
  //   }

  searchTermSchema.findOneAndUpdate(
    { user: email, searched_term: term },
    // { $set: { user: email, searched_term: term, count: 1 } },
    { $inc: { count: 1 } },
    { upsert: true },
    (err, term) => {
      // on failure
      if (err) {
        console.log("Error while updating");
      }
      // on success
      return res.status(200).send(term);
    }
  );
});

// get term from DB
router.get("/", (req, res) => {
  const email = req.query[0];
  searchTermSchema.aggregate(
    [{ $match: { user: email } }, { $sort: { count: -1 } }, { $limit: 10 }],
    (err, result) => {
      if (err) {
        res.send(err);
      }
      res.send(result);
    }
  );
});

module.exports = router;
