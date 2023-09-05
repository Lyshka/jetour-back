import { connection } from "../mysql.js";

export const updateValueUser = (req, res) => {
  const { oldPassword, newPassword } = req.body;

  connection.query(
    `UPDATE user SET password="${newPassword}" WHERE password="${oldPassword}"`,
    (_, password) => {
      res.status(200).json({ message: password.affectedRows });
    }
  );
};

export const isAdmin = (req, res) => {
  const { login, password } = req.body;

  connection.query(
    `SELECT * FROM user WHERE login="${login}" AND password="${password}"`,
    (_, user) => {
      if (user.length) {
        res.status(200).json({ message: true });
      } else {
        res.status(200).json({ message: false });
      }
    }
  );
};
