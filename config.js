const Pool = require("pg").Pool;
const pool = new Pool({
  user: "wehjlhlk",
  host: "isilo.db.elephantsql.com",
  database: "wehjlhlk",
  password: "6qLJ7JL7m_w6QUlnXp8K4NDqudEL4nsF",
  port: 5432,
});

pool.on("connect", function () {
  console.log("connected to the db");
});

pool.on("error", function (err) {
  console.log("Error connecting to db", err);
});

module.exports = {
  db: pool,
};
