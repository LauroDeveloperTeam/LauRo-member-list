const express = require('express')
const app = express()
const SteinStore = require("stein-js-client");
const basicAuth = require("express-basic-auth")
const store = new SteinStore("https://api.steinhq.com/v1/storages/63eb636aeced9b09e9beb441");
app.use(express.static('./'));
app.set('view engine', 'ejs')
app.listen(3000, function(){
  console.log('起動完了 => Express')
})
app.get('/',(req, res) => {
  store.read("index", {authentication: { username: "yuyuttikunnhatennsainanodaxa", password: "fwuasicjnks@fecknfaweioknmjsedfvnihowfveomfowe" }}).then(data => {
    res.render('index',{data:data});
  });
})