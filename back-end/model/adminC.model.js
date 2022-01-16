const dbConn  = require('../db/database');

exports.GetAdminCentre = (result) =>{
    dbConn.query('SELECT * FROM admin_centre', (err, res)=>{
        if(err){
            console.log('Error while fetching users', err);
            result(err);
        }else{
            console.log('promos fetched successfully');
            result(res);
        }
    })
}

exports.login = (email, result) =>{
    dbConn.query('SELECT * FROM admin_centre where email=? ',email, (err, res)=>{
        if(err){
            console.log('Error while fetching users', err);
            result(err);
        }else{
            console.log('promos fetched successfully');
            result(res);
        }
    })
}


exports.GetAdminCentreById = (id, result) => {
    dbConn.query("SELECT * FROM admin_centre WHERE id_adminc=?", id, (err, res) => {
      if (err) {
        console.log("Error while fetching utisateur by id", err);
        result(err);
      } else {
        console.log("admin centre fetched successfully");
        result(res);
      }
    });
  };


  exports.AddNewAdminCentre = (nom, prenom, email, password) => {
    dbConn.query(
      `INSERT INTO admin_centre (nom,prenom,email,password,id_c) VALUES ("${nom}","${prenom}","${email}",${password}, 1)`,
      (err, res) => {
        if (err) {
          console.log(err);
          // result(err);
        } else {
          console.log("admin centre insered successfully");
        }
      }
    );
  };


  exports.DeleteAdminCentre = (id) => {
    // console.log(id);
    dbConn.query(`DELETE FROM admin_centre WHERE id_adminc=${id}`, (err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log("admin centre deleted successfully");
      }
    });
  };




  exports.updateAdminCentre = (id, nom, prenom, email, password) => {
    // console.log(id,nom,prenom,email,pays,ville);
    dbConn.query(
      `UPDATE admin_centre SET nom="${nom}",prenom="${prenom}",email="${email}",password="${password}" WHERE id_adminc = ${id}`,
      (err, res) => {
        if (err) {
          console.log(err);
        } else {
          console.log("admin centre updated successfully");
        }
      }
    );
  };