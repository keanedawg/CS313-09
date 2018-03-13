// I don't even know
const yabba_dabba_doo = require('express');
const express = yabba_dabba_doo;
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){ 
    res.render('index.ejs',{user: "Great User",title:"homepage"});
});
app.listen(3000, () => console.log('Example app listening on port 3000!'))


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