const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js");
const {validatereview, isLoggedIn, isReviewAuthor} = require("../middleware.js");
const { showReview, deleteReview } = require("../controllers/reviewcontro.js")

//Reviews routes 

// review show route

router.post("/", validatereview,isLoggedIn, wrapAsync(showReview));

//review delete route
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(deleteReview));


module.exports = router;