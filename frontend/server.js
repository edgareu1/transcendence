const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.get("/*", (req, res) => {
  if (/^.*(?:\.js|\.css|\.png|\.json)$/.test(req.url)) {
    res.sendFile(path.resolve(__dirname, req.path.slice(1)));
    return;
  }

  res.sendFile(path.resolve(__dirname, "index.html"));
});

app.listen(port, () => console.log(`Server running at port: ${port}`));
