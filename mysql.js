import mysql from "mysql";

export const connection = mysql.createConnection({
  user: "root",
  password: "",
  host: "localhost",
  database: "jetour",
});