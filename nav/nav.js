import { connection } from "../mysql.js";

export const getValueNav = (req, res) => {
  connection.query("SELECT * FROM nav", (_, nav) => {
    res.status(200).json(nav);
  });
};

export const updateValueNav = (req, res) => {
  const { title, img, url, id } = req.body;

  connection.query(
    `UPDATE nav SET title="${title}", img="${img}", url="${url}" WHERE id=${id}`,
    res.status(200).json({
      message: true,
    })
  );
};
