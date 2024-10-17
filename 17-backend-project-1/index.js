require("dotenv").config();
const app = require("./app");

const port = process.env.RUNNING_PORT;

app.listen(port, () => {
  console.log(`Server is runing at http://localhost:${port}`);
});
