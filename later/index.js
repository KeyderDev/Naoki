var express = require('express');
var app = express();
var path = require("path");
app.use('/', express.static('public'));
const session = require('express-session')
var hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});
  


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', "hbs")

app.get('/index', async (req, res) => { 
  res.render('inicio', {
    title: ""
  });
});
app.get('/servicios', async (req, res) => { 
  res.render('servicios', {
    title: ""
  });
});
app.get('/bottesting', async (req, res) => { 
  res.render('bottesting', {
    title: ""
  });
});
app.get('/discordbot', async (req, res) => { 
  res.render('faq', {
    title: ""
  });
});
app.get('/minecraftserver', async (req, res) => { 
  res.render('minecraftserver', {
    title: ""
  });
});
app.use("/", (req, res) => {
 res.render('home', {

 });
});
app.listen(3000, async() => {
  console.log("Hola 3000")
});