var db = require('../../../db');
var bcrypt = require('bcrypt');

export async function POST(req){
    var input = await req.json();

    if(input.name && input.passwd){
        var queryResult = await db.one('SELECT passwd FROM users WHERE name = ${name}', {name: input.name});
        
        if(await bcrypt.compare(input.passwd, queryResult.passwd)){
            return new Response('Přihlášeno', {status: 200})
        }else{
            return new Response('Špatné heslo', {status: 401})
        }
    }
    else{
        return new Response('Něco je špatně. Zkontrolujte vstup.', {status: 400})
    }
}