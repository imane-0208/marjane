const { GetAdmin } = require('../model/admin_general.model');
const jwt = require('jsonwebtoken');
const dbConn = require('../db/database');

exports.GetAdmin = (req, res)=> {

    GetAdmin((err, users) =>{
        if(err) res.send(err);
        // console.log(res);
        res.send(users)
    })
};






/* exports.login = async(req, res)=> {
    const Admins = await GetAdmin();
  const { email, password } = req.body;
  const CAdmin = Admins.find(
    (admin) =>
      admin.email == req.body.email && admin.password == req.body.password
  );

  if (CAdmin) {
    const token = jwt.sign(
      { id: CAdmin.id, email },
      `${process.env.JWT_SECRET_KEY}`,
      {
        expiresIn: "HHHH",
      }
    );
    res.json(token);
    // updateAdmin(CAdmin.id, token);
  } else {
    res.status(400).send("information incorrect");
  }
}; */

