const express = require('express');
const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser');


// ########### SETTING MY APP ############# //
const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './public/dist/public')));

// Setup my session
app.use(session({
    secret: '2pacShakur',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 6000000000000 }
}));
// ########### END SETTING MY APP ############# //


require('./server/routes/routes')(app);

// Run my server and listen to port 8000
app.listen(8000, () => {
    console.log("Server is running in port 8000");
});
