import express from "express";
import cors from "cors";
import "./utils/connection.js";
import Student from "./utils/models.js";

const app = express();
const port = process.env.PORT || 8800;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/register", async (req, res) => {
  const student = new Student({
    nama: req.body.nama,
    nik: req.body.nik,
    jurusan: req.body.jurusan,
    asalSekolah: req.body.asalSekolah,
    tanggalLahir: req.body.tanggalLahir,
    umur: req.body.umur,
    alamat: req.body.alamat,
  });

  const result = await student.save();

  return res.json(result);
});

app.listen(port, () => {
  console.log(`Listening at port : ${port}`);
});
