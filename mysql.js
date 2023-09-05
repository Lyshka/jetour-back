import mysql from "mysql";

export const connection = mysql.createConnection({
  user: "root",
  password: "",
  host: "127.0.0.1",
  database: "jetour",
});