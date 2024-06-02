import { body, param } from "express-validator";

const createMahasiswa = [
  body("nim")
    .notEmpty()
    .withMessage("NIM harus diisi")
    .isNumeric()
    .withMessage("NIM harus berupa angka"),
  body("nama").notEmpty().withMessage("Nama harus diisi"),
  body("email")
    .notEmpty()
    .withMessage("Email harus diisi")
    .isEmail()
    .withMessage("Email tidak valid"),
  body("prodi").notEmpty().withMessage("Prodi harus diisi"),
];

const updateMahasiswa = [
  param("id")
    .notEmpty()
    .withMessage("ID harus diisi")
    .isNumeric()
    .withMessage("ID harus berupa angka"),
  ...createMahasiswa,
];

export { createMahasiswa, updateMahasiswa };
