const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const {
    isLoggedIn,
    isOwner,
    validateListing
} = require("../middleware.js");
const {
    index,
    renderNewForm,
    showListing,
    createListing,
    editListing,
    updateListing,
    deleteListing
} = require("../controllers/listingcontro.js")

router
    .route("/")
    .get(wrapAsync(index))
    .post(isLoggedIn, validateListing, wrapAsync(createListing));

router.get("/new", isLoggedIn, renderNewForm);

router
    .route("/:id")
    .get(wrapAsync(showListing))
    .put(isLoggedIn, isOwner, validateListing, wrapAsync(updateListing))
    .delete(isLoggedIn, isOwner, wrapAsync(deleteListing));


router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(editListing));

module.exports = router;