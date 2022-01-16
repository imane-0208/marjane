const mysql = require("mysql2");

const dbConn =mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password : '',
    database: 'gestion_promo_marjane'
});

dbConn.connect(function(err){
    if(err)
    {
        console.log("faild connection")
        throw err;

    }else
    {
        console.log("database connected successfully !")
    };
});

module.exports = dbConn;