import { connection } from "../mysql.js";

export const getNews = (req, res) => {
  connection.query("SELECT * FROM news", (_, about) => {
    res.status(200).json(about);
  });
};

export const addNews = (req, res) => {
  const { title, img, descnews, date, fulldesc } = req.body;

  connection.query(
    `INSERT INTO news (title, img, descnews, date, fulldesc) VALUES ('${title}', "${img}", '${descnews}', "${date}", '${fulldesc}')`,
    res.status(200).json({
      message: true,
    })
  );
};

export const deleteNews = (req, res) => {
  const { id } = req.body;

  connection.query(
    `DELETE FROM about WHERE id=${id}`,
    res.status(200).json({
      message: true,
    })
  );
};

export const updateNews = (req, res) => {
  const { title, img, id } = req.body;

  connection.query(
    `UPDATE about SET title="${title}", img="${img}" WHERE id=${id}`,
    res.status(200).json({
      message: true,
    })
  );
};