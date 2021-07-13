const Database = require('sqlite-async');



function execute(db) {

    return db.exec(`
        CREATE TABLE IF NOT EXISTS FP_News (
            id INTEGER PRIMARY KEY AUTOINCREMENT, 
            News TEXT,
            email TEXT,
            name TEXT,
            about TEXT,
            whatsapp TEXT,
            images TEXT,
            instructions TEXT,
            numero TEXT
        );
    `);

}

module.exports = Database.open(__dirname + '/database.sqlite').then(execute); // db