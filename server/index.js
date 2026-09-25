const express = require("express");

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

app.get("/api/health", (_request, response) => {
  response.json({ status: "ok", service: "nevixs-api" });
});

app.post("/api/contact", (_request, response) => {
  response.status(501).json({ message: "Contact delivery is not configured yet." });
});

app.listen(port, () => {
  console.log(`Nevixs API placeholder listening on http://localhost:${port}`);
});
