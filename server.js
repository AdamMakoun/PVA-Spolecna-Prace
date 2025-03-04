//Express, přepsat do next.js

var express = require('express');
var pg = require('pg-promise')({});
var app = express();
app.use(express.json());
var db = pg('postgres://postgres:2TaSWwue@localhost:5432/spolecnapracepva');
var bcrypt = require('bcrypt');

app.get('/', function(req, res){
    res.send('fachuje to');
});

app.post('/users/register', async function(req, res){
    if(req.body.name && req.body.password){
        try{
            var hashedPasswd = await bcrypt.hash(req.body.password, 10);
            db.none('INSERT INTO users(name, passwd) VALUES(${name}, ${passwd})',{
                name: req.body.name,
                passwd: hashedPasswd
            }
            )
            res.send('vytvořen uživatel');
        } catch{
            res.send('uživatele nelze vytvořit');
        }
    }else{
        res.status(400).send();
    }
});
app.post('/users/login', async function(req, res){
    if(req.body.name && req.body.password){
        var pwFromDb = '';
        try{
            db.one('SELECT passwd FROM users WHERE name = ${name}', {name: req.body.name}).then(data =>{
                pwFromDb = data.passwd;
            })
            if(await bcrypt.compare(req.body.password, pwFromDb)){
                console.log(pwFromDb);
                res.send('přihlášeno');
            } else{
                res.send('špatné heslo');
            }
        }catch{
            res.send('nefachčí to');
        }
    }
});

app.listen(3000);