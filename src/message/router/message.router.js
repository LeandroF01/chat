const router = require("express").Router();
const passport = require("passport");
const messageServices = require("../services/message.services");

require("../../middlewares/auth.middleware")(passport);

router
  .route("/:conversation_id/messages")
  .get(
    passport.authenticate("jwt", { session: false }),
    messageServices.getAllMessage
  )
  .post(
    passport.authenticate("jwt", { session: false }),
    messageServices.createMessage
  );

router
  .route("/:conversation_id/messages/:message_id")
  .get(
    passport.authenticate("jwt", { session: false }),
    messageServices.getMessageByID
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    messageServices.deletMessage
  );

module.exports = router;
