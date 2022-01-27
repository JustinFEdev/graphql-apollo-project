const express = require("express");
const app = express();
const PORT = 1688;
const { graphqlHTTP } = require("express-graphql");
const schema = require("./Schemas/index");
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(
  cors(
    "/graphql",
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  )
);

app.listen(PORT, () => {
  console.log("##################    Now the Server is Running!    ################## ");
});
