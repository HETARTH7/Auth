const { GetData } = require("../controllers/data");
const verifyJWT = require("../middleware/verifyJWT");

const router = require("express").Router();

router.route("/").get(verifyJWT, GetData);

module.exports = router;
