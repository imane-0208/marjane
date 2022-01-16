const dbConn  = require('../../db/connDb');

exports.GetPromo = (result) =>{
    dbConn.query('SELECT * FROM promo', (err, res)=>{
        if(err){
            console.log('Error while fetching users', err);
            result(err);
        }else{
            console.log('promos fetched successfully');
            result(res);
        }
    })
}



exports.getPromoByID = (id, result)=>{
    dbConn.query('SELECT * FROM promo WHERE id=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching utisateur by id', err);
            result(err);
        }else{
            console.log('promo fetched successfully');
            result(res);
        }
    })
    
}


exports.CreatePromo = (centre,pourcentage,id_chef_rayon,status)=>{
    // console.log(nom,prenom,email,pays,ville);
    dbConn.query( `INSERT INTO promo (centre,pourcentage,id_chef_rayon,status) VALUES ("${centre}","${pourcentage}","${id_chef_rayon}","${status}")`, (err, res)=>{
        if(err){
            console.log(err);
        }else{
            console.log('promo insered successfully');
        }
    })
}


exports.DeletePromoByID = (id)=>{  
    // console.log(id);
    dbConn.query(`DELETE FROM promo WHERE id=${id}`, (err, res)=>{
        if(err){
            console.log(err);
        }else{
            console.log('promo deleted successfully');
        }
    })
}



exports.UpdatePromo =(id,centre,pourcentage,id_chef_rayon,status)=>{
    // console.log(id,nom,prenom,email,pays,ville);
    dbConn.query(`UPDATE promo SET centre="${centre}",pourcentage="${pourcentage}",id_chef_rayon="${id_chef_rayon}",status="${status}" WHERE id = ${id}`, (err, res)=>{
        if(err){
            console.log(err);
        }else{
            console.log('promo updated successfully');
        }
    })
}