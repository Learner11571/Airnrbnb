const express = require("express");
const router = express.Router();
const passport = require("passport");

const wrapAsync = require("../utils/wrapAsync");
const {
    saveRedirectUrl
} = require("../middleware.js");
const {
    renderSignupForm,
    signup,
    renderLoginForn,
    login,
    logout
} = require("../controllers/usercontro.js");

router
    .route("/signup")
    .get(renderSignupForm)
    .post(wrapAsync(signup));


router
.route("/login")
.get(renderLoginForn)
.post(saveRedirectUrl, passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true
}), login);

router.get("/logout", logout);

module.exports = router;