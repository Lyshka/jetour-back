import { connection } from "../mysql.js";

export const getValueAbout = (req, res) => {
  connection.query("SELECT * FROM about", (_, about) => {
    res.status(200).json(about);
  });
};

export const addValueAbout = (req, res) => {
  const { title, img } = req.body;

  connection.query(
    `INSERT INTO about (title, img) VALUES (${title}, ${img})`,
    res.status(200).json({
      message: true,
    })
  );
};

export const deleteValueAbout = (req, res) => {
  const { id } = req.body;

  connection.query(
    `DELETE FROM about WHERE id=${id}`,
    res.status(200).json({
      message: true,
    })
  );
};

export const updateValueAbout = (req, res) => {
  const { title, img, id } = req.body;

  connection.query(
    `UPDATE about SET title="${title}", img="${img}" WHERE id=${id}`,
    res.status(200).json({
      message: true,
    })
  );
};

export const getValueAboutMain = (req, res) => {
  connection.query("SELECT * FROM aboutMain", (_, about) => {
    res.status(200).json(about);
  });
};

export const updateValueAboutMain = (req, res) => {
  const { title, img, id, description } = req.body;

  connection.query(
    `UPDATE aboutMain SET title="${title}", img="${img}", description="${description}" WHERE id=${id}`,
    res.status(200).json({
      message: true,
    })
  );
};
