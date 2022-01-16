const express = require("express");
const router = express.Router();
const {
  GetAdminCentre,
  adminCentreLogin,
  getAdminByID,
  CreateAdmin,
  DeleteAdminByID,
  UpdateAdminCentre,
  
} = require("../controller/adminC.controller");

router.get("/", GetAdminCentre);
router.post("/login", adminCentreLogin);
router.get("/:id", getAdminByID);
router.post("/create", CreateAdmin);
router.delete("/delete/:id", DeleteAdminByID);
router.put("/update/:id", UpdateAdminCentre);


module.exports = router;
