const {
  GetAdminCentre,
  login,
  GetAdminCentreById,
  AddNewAdminCentre,
  DeleteAdminCentre,
  updateAdminCentre,
  // UpdatePassword,
} = require("../model/adminC.model");


const nodemailer = require("nodemailer");
const {compare} = require('bcrypt');
const jwt = require("jsonwebtoken");


exports.GetAdminCentre = (req, res) => {
  GetAdminCentre((err, admin_centre) => {
    if (err) res.send(err);
    res.send(admin_centre);
  });
};



/* exports.login = async (req, res) => {
  const cadmin = await GetAdminCentre();
  const { email, password } = req.body;
  const centre_admin = cadmin.find(
    (Cadmin) =>
      Cadmin.email == req.body.email && Cadmin.password == req.body.password
  );
  if (centre_admin) {
    const token = jwt.sign(
      { id: centre_admin.id, email },
      `${process.env.JWT_SECRET_KEY}`,
      {
        expiresIn: "2h",
      }
    );
    res.json(token);
  } else {
    res.status(400).send("information incorrect");

  }
}; */



exports.adminCentreLogin = (req, res) => {
  const body = req.body;
    login(body.email,(err,result) => {
    
      if (err) res.send(err);
      // res.send(admin_centre);
      /* if (!result){
        return res.json({
          msg: "lOGIN SUCCES",
          
      });

      } */
      const checkpass = compare(body.password, result[0].password);
      if (!checkpass) {
         result.password = undefined;
         res.status(400).send("information incorrect");

         /* return res.json({
          pass: result.password,
          msg: "information incorrect",

      }); */
        
            
        
    } else {
        const token = jwt.sign(
          { id: centre_admin.id, email },
          `${process.env.JWT_SECRET_KEY}`,
          {
            expiresIn: "2h",
          }
        );
        // const cookieOptions = {
        //     expires: new Date(
        //         Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
        //     ),
        //     httpOnly: true
        // }
        return res.status(200).send({
            msg: "lOGIN SUCCES",
            token: token
        })
    }
    })
    

}
  
  
  
  /* GetAdminCentre((err, admin_centre) => {
    if (err) res.send(err);
    res.send(admin_centre);
  }); */




exports.getAdminByID = (req, res) => {
  GetAdminCentreById(req.params.id, (err, admin_centre) => {
    if (err) res.send(err);
    res.send(admin_centre);
  });
};



exports.CreateAdmin = (req, res) => {
  const body = req.body;
  // const salt = genSaltSync(10);
  // const pass = hashSync(body.password,salt)


  // const pass = hashSync(req.body.password,salt);
  AddNewAdminCentre(
    body.nom,
    body.prenom,
    body.email,
    body.password,
    (err, admin_centre) => {
      if (err) res.send(err);
      res.send(admin_centre);
      // console.log(req.body.idc);
    }
  );



  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "testcoding975@gmail.com",
      pass: "testCoding1998",
    },
  });

  var mailOptions = {
    from: "testcoding975@gmail.com",
    to: req.body.email,
    subject: "mode de passe pour access au site",
    text: req.body.password,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email envoyer");
    }
  });
};


exports.UpdateAdminCentre = (req, res) => {
  updateAdminCentre(
    req.params.id,
    req.body.nom,
    req.body.prenom,
    req.body.email,
    req.body.password,
    // req.body.idc,
    (err, admin_centre) => {
      if (err) res.send(err);
      res.send(admin_centre);
    }
  );
};

exports.DeleteAdminByID = (req, res) => {
  DeleteAdminCentre(req.params.id, (err, admin_centre) => {
    if (err) res.send(err);
    res.send(admin_centre);
  });
};