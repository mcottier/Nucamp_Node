const express = require("express");
const promotionRouter = express.Router();

promotionRouter
  .route("/promotions")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get((req, res) => {
    res.end("Will send all the promotions to you");
  })
  .post((req, res) => {
    res.end(
      `Will add the promotions: ${req.body.name} with description: ${req.body.description}`
    );
  })
  .put((req, res) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /promotion");
  })
  .delete((req, res) => {
    res.end("Deleting all promotions");
  })

  .route("/promotions/:promotionId")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next()
      .get((req, res) => {
        res.end(
          `Will send details of the promotions: ${req.params.promotionId} to you`
        );
      })

      .post((req, res) => {
        res.statusCode = 403;
        res.end(
          `POST operation not supported on /promotions/${req.params.promotionId}`
        );
      })

      .post((req, res) => {
        res.write(`Updating the promotions: ${req.params.promotionId}\n`);
        res.end(`Will update the promotions: ${req.body.name}
        with description: ${req.body.description}`);
      })

      .delete("/promotions/:promotionId", (req, res) => {
        res.end(`Deleting promotions: ${req.params.partnerId}`);
      });
  });

module.exports = promotionRouter;
