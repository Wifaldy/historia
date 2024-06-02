import express from "express";
const app = express();
const port = 3000;
import router from "./routes/index.js";

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
