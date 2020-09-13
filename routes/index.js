var express = require("express");

var router = express.Router();



//router.get("/", async function (req, res, next) {
  //res.render("index",{title:"Express"})
//});

router.get("/api/products", async function (req, res, next) {
 res.send(["Laptop","Car","Something"])
});



module.exports = router;
