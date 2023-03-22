dotEnv = require("dotenv");
dotEnv.config();
const relate = require("./database/relationship");
relate();

const { Login, loginWithToken, loginWithApikey } = require("./auth");
// const loginWithToken = require("./auth");
// const loginWithApikey = require("./auth");

Login("nathoms@gmail.com", "ms@237#").then((user) => {
  console.log(user);
});

loginWithToken(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo1LCJlbWFpbCI6Im5hdGhvbXNAZ21haWwuY29tIiwiaWF0IjoxNjc5NTAzOTMzLCJleHAiOjE2Nzk1MTExMzN9.hRL4l5cFyDA4yOST-jjTqfVE6CzdXIUvuOQOmZ2Ad34"
).then((token) => {
  console.log(token);
});

loginWithApikey("b86eb0ba-40ae-44a8-8629-9b77b149cbe3").then((apikey) => {
  console.log(apikey);
});
