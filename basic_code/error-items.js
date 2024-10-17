//1. undefined Route......
app.use("*", (req, res) => {
  res.status(404).json({ status: "fail", data: "Not found" });
});

//### 2.
