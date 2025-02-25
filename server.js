var express = require('express');
var pg = require('pg-promise')({});
var app = express();
app.use(express.json());
var db = pg('postgres://postgres:2TaSWwue@localhost:5432/spolecnapracepva');

app.get('/', function(req, res){
    res.send('fachuje to');
});

app.post('/users/register', function(req, res){
    if(req.body.name && req.body.password){
        db.none('INSERT INTO users(name, passwd) VALUES(${name}, ${passwd})',{
            name: req.body.name,
            passwd: req.body.password
        }
        )
    }
});
app.post('/users/login', function(req, res){
    if(req.body.name && req.body.password){
        db.one('SELECT passwd FROM users WHERE name = ${name}', {name: req.body.name}).then(data =>{
            if(req.body.name == data.passwd){
                res.send('Heslo je správné')
            } else{
                res.send('Heslo je nesprávné')

            }
        })
    }
});

app.listen(3000);