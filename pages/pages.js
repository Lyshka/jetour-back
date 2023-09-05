import { connection } from "../mysql.js";

export const getPages = (req, res) => {
  connection.query("SELECT * FROM pages", (_, about) => {
    res.status(200).json(about);
  });
};

export const updatePages = (req, res) => {
  const { title, img, id, description, name } = req.body;

  if (img != "null") {
    connection.query(
      `UPDATE pages SET title="${title}", img="${img}", description='${description}', name="${name}" WHERE id=${id}`,
      res.status(200).json({
        message: true,
      })
    );
  } else {
    connection.query(
      `UPDATE pages SET title="${title}", description='${description}', name="${name}" WHERE id=${id}`,
      res.status(200).json({
        message: true,
      })
    );
  }
};
