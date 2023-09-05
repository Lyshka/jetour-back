import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import fileUploaded from "express-fileupload";
import path from "path";
import { fileURLToPath } from "url";

import { connection } from "./mysql.js";
import {
  getValueAbout,
  addValueAbout,
  deleteValueAbout,
  updateValueAbout,
  getValueAboutMain,
  updateValueAboutMain,
} from "./about/about.js";
import { getValueNav, updateValueNav } from "./nav/nav.js";
import { isAdmin, updateValueUser } from "./user/user.js";
import { deleteUpload, getUpload, upload } from "./upload.js";
import { getAdminMain, updateAdminMain } from "./main/main.js";
import { getPages, updatePages } from "./pages/pages.js";
import { addNews, deleteNews, getNews, updateNews } from "./news/news.js";

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(bodyParser.json());
app.use(
  fileUploaded({
    createParentPath: true,
  })
);

app.use(express.static(__dirname + "/public"));

app.listen(process.env.PORT || 5000, (err) => {
  if (err) {
    console.error(err);
  } else {
    connection.connect((err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("START BD");
      }
    });
    console.log("START SERVER");
  }
});

app.get("/get-about", getValueAbout);
app.get("/get-about-main", getValueAboutMain);
app.post("/add-about", addValueAbout);
app.post("/delete-about", deleteValueAbout);
app.post("/update-about", updateValueAbout);
app.post("/update-about-main", updateValueAboutMain);

app.get("/get-nav", getValueNav);
app.post("/update-nav", updateValueNav);

app.post("/update-user", updateValueUser);
app.post("/is-user", isAdmin);

app.post("/upload", upload);
app.get("/get-upload", getUpload);
app.post("/delete-upload", deleteUpload);

app.get("/get-admin-main", getAdminMain);
app.post("/update-admin-main", updateAdminMain);

app.get("/get-pages", getPages);
app.post("/update-pages", updatePages);


app.get("/get-news", getNews);
app.post("/add-news", addNews);
app.post("/delete-news", deleteNews);
app.post("/update-news", updateNews);