const { ApolloServer } = require("apollo-server");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { typeDefs } = require("./schema/type-defs.js");
const { resolvers } = require("./schema/resolvers");
const { connectDB } = require("./config/db.js");

connectDB();

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log("Server running " + url);
});
