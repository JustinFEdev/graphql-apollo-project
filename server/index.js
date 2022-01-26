const express = require("express");
const app = express();
const PORT = 1688;
const { graphqlHTTP } = require("express-graphql");
const schema = require("./Schemas/index");

app.use(express.json());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log("##################    Now the Server is Running!    ################## ");
});
