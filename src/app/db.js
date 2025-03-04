var pg = require('pg-promise')({});
var db = pg('postgres://postgres:2TaSWwue@localhost:5432/spolecnapracepva')

module.exports = db;