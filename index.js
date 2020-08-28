const express = require("express");
const helmet = require("helmet");
const welcomeRouter = require("./routers/welcome");
const recipeRouter = require("./routers/recipes");
const ingredientRouter = require("./routers/ingredients");
const instructionRouter = require("./routers/instructions");

const server = express();
const PORT = process.env.PORT || 5000;

server.use(helmet());
server.use(express.json());

server.use(welcomeRouter);
server.use(recipeRouter);
server.use(ingredientRouter);
server.use(instructionRouter);

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: "Something went wrong",
  });
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
