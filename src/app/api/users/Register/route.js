var db = require('../../../db');
var bcrypt = require('bcrypt');

export async function POST(req){
    var input = await req.json();

    if(input.name && input.passwd){
        var hashedPasswd = await bcrypt.hash(input.passwd, 10);
        console.log(hashedPasswd);
        db.none('INSERT INTO users(name, passwd) VALUES(${name}, ${pw})',{
            name: input.name,
            pw: hashedPasswd
        });
        return new Response('Uživatel vytvořen', {status: 201});
    }
    return new Response('Nesprávný vstup', {status: 400});
}