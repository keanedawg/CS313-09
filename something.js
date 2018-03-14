// I don't even know
const yabba_dabba_doo = require('express');
const express = yabba_dabba_doo;
const app = express();

app.use(express.static('public'));
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies
app.set('view engine', 'ejs');

app.get('/', function(req, res){ 
    res.render('index.ejs',{user: "Great User",title:"homepage"});
});
app.get('/getrate', function(req, res){ 
    console.log();
    res.render('getRate.ejs',{rate:calculateRate(req.query.weight, req.query.type)});
});

app.post('/getrate', function(req, res){ 
    console.log(req.body.weight);
    res.render('getRate.ejs',{rate:calculateRate(req.body.weight, req.body.type)});
});

// Today I learned that if you are using URL params, you must make sure you're not sharing a name
// with another URL. I originally had the URL set to 'getrate' but this url was failing to be
// recognized. 
app.get('/calcrate/:weight/:type', function(req, res){ 
    console.log(req.params);
    res.render('getRate.ejs',{rate:calculateRate(req.params.weight, req.params.type)});
});

app.listen(3000, () => console.log('App listening on port 3000!'))


function calculateRate(weight, type) {
    if (type == "stamped") {
        return weight * .5;
    }
    else if (type == "metered") {
        return weight * 1.5;
    }
    else if (type == "flats") {
        return weight * 2.5;
    }
    else {
        return weight * 7;
    }
}
