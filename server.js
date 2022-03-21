const express = require("express");

const app = express();

const port = 5000;

app.get("/api/customers", (req, res) => {
  const customers = {
    Test: "OK",
  };
  res.json(customers);
});
app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
