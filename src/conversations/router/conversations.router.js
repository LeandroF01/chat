const router = require("express").Router();
const passport = require("passport");
const conversationsServices = require("../services/conversations.services");

require("../../middlewares/auth.middleware")(passport);

router
  .route("/conversation")
  .get(
    passport.authenticate("jwt", { session: false }),
    conversationsServices.getAllConcersation
  )
  .post(
    passport.authenticate("jwt", { session: false }),
    conversationsServices.createConversation
  );

router
  .route("/:conversation_id")
  .get(
    passport.authenticate("jwt", { session: false }),
    conversationsServices.getConversationByID
  )
  .patch(
    passport.authenticate("jwt", { session: false }),
    conversationsServices.updateConversationByID
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    conversationsServices.deletConversation
  );

module.exports = router;
