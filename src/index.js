const express = require('express');
const app = express();
const path = require("path")
//settings (los 3 set)
app.set('port', 6523)
app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);
//middlewares (nose)
//routes
app.use(require("./routes/index"))
//static files
app.use(express.static(path.join(__dirname, 'public')));
//listening the server qpro
app.listen(app.get('port'), () => {
	console.log(`Server on port ` + app.get('port'));

});