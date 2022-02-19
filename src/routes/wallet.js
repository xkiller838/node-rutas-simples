const express = require("express");
const router = express.Router();

const walletController = require('../controllers/wallet');

router.get("/api/wallet", walletController.create)

module.exports = router