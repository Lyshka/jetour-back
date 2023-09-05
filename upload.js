import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

import { connection } from "./mysql.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const upload = (req, res) => {
  if (!req.files) {
    return res.status(400).json({
      message: "No file uploaded",
    });
  }

  for (const fileN in req.files) {
    const file = req.files[fileN];

    if (!file) return res.json({ message: "Incorect input name" });

    const newFileName = encodeURI(Date.now() + "-" + file.name);

    file.mv(`${__dirname}/public/img/${newFileName}`, (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send(err);
      }

      connection.query(`INSERT INTO img (src) VALUES ("img/${newFileName}")`);
    });
  }

  res.json({ message: true });
};

export const getUpload = (req, res) => {
  connection.query("SELECT * FROM img", (_, imgs) => {
    res.status(200).json(imgs);
  });
};

export const deleteUpload = (req, res) => {
  const { id, title } = req.body;

  connection.query(`DELETE FROM img WHERE id=${id}`);

  fs.unlink(`${__dirname}/public/${title}`, (err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: false });
      return;
    }

    res.status(200).json({ message: true });
  });
};
