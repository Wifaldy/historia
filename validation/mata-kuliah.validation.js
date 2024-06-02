import { body, param } from "express-validator";

const createMataKuliah = [
  body("kode")
    .notEmpty()
    .withMessage("Kode harus diisi")
    .isNumeric()
    .withMessage("Kode harus berupa angka")
    .custom((value) => {
      if (value < 1 || value > 9999) {
        throw new Error("Kode harus berada di antara 1-9999");
      }
      return true;
    }),
  body("nama").notEmpty().withMessage("Nama harus diisi"),
  body("sks")
    .notEmpty()
    .withMessage("SKS harus diisi")
    .isNumeric()
    .withMessage("SKS harus berupa angka")
    .custom((value) => {
      if (value < 1 || value > 6) {
        throw new Error("SKS harus berada di antara 1-6");
      }
      return true;
    }),
  body("semester")
    .notEmpty()
    .withMessage("Semester harus diisi")
    .isNumeric()
    .withMessage("Semester harus berupa angka")
    .custom((value) => {
      if (value < 1 || value > 8) {
        throw new Error("Semester harus berada di antara 1-8");
      }
      return true;
    }),
];

const updateMataKuliah = [
  ...createMataKuliah,
  param("id")
    .notEmpty()
    .withMessage("ID harus diisi")
    .isNumeric()
    .withMessage("ID harus berupa angka"),
];

export { createMataKuliah, updateMataKuliah };
