const dbConn  = require('../db/database');

// exports.GetAdmin = () =>{
//     return new Promise((resolve, reject) =>{
//         dbConn.query('SELECT * FROM admin_general', (err, res)=>{
//             if(err){
//                 return reject(err)
//             }
//          return  resolve(res);
//             //  console.log(res);
//         })
//     })
// };

exports.GetAdmin = (result) =>{
    dbConn.query('SELECT * FROM admin_general', (err, res)=>{
        if(err){
            console.log('Error while fetching users', err);
            result(err);
        }else{
            console.log('promos fetched successfully');
            result(res);
        }
    })
}


/* exports.updateAdmin = (id, token) => {
    dbConn.query(
      `UPDATE admin_general SET token="${token}" WHERE id=${id}`,
      (err, res) => {
        if (err) {
          console.log(err);
        } else {
          console.log("token updated successfully");
        }
      }
    );
  }; */