import { connection } from "../mysql.js";

export const getAdminMain = (req, res) => {
  connection.query("SELECT * FROM mainPage", (_, about) => {
    res.status(200).json(about);
  });
};

export const updateAdminMain = (req, res) => {
  const {
    mainPhoto,
    mainVideo,
    titleVideo,
    coord,
    mainPhotoMobile,
    id,
    contacts,
    mail,
  } = req.body;

  connection.query(
    `UPDATE mainPage SET mainPhoto="${mainPhoto}", mainVideo="${mainVideo}", titleVideo="${titleVideo}", coord="${coord}", mainPhotoMobile="${mainPhotoMobile}", contacts="${contacts}", mail="${mail}" WHERE id=${id}`,
    res.status(200).json({
      message: true,
    })
  );
};
