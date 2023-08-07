import mongoose from "mongoose";

const Student = mongoose.model("student", {
  nama: {
    type: String,
    require: true,
  },
  nik: {
    type: String,
    require: true,
  },
  jurusan: {
    type: String,
    require: true,
  },
  asalSekolah: {
    type: String,
    require: true,
  },
  kelaminManusia: {
    type: String,
    require: true,
  },
  tempatLahir: {
    type: String,
    require: true,
  },
  tanggalLahir: {
    type: String,
    require: true,
  },
  umur: {
    type: String,
    require: true,
  },
  alamat: {
    type: String,
    require: true,
  },
});

export default Student;
