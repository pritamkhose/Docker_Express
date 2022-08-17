var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Docker Express JS App", date: new Date() });
});

router.get("/api", function (req, res, next) {
  res.json({ title: "Docker Express JS App", date: new Date(), status: true });
});

// https://www.digitalocean.com/community/tutorials/nodejs-req-object-in-expressjs
router.get("/api/request", function (req, res, next) {
  res.json({
    title: "Docker Express JS App",
    date: new Date(),
    request: {
      method: req.method,
      url: req.url,
      params : req.params,
      query : req.query,
      headers : req.headers,
      cookies: req.cookies,
      body : req.body
    },
  });
});

router.get("/api/env", function (req, res, next) {
  res.json({ env: process.env });
});

module.exports = router;
