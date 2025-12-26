import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ ok: true, message: "Fly.io backend beží ✔" });
});

app.all("/provider", async (req, res) => {
  const action = req.query.action || req.body.action;
  const provider = req.query.provider || req.body.provider;

  res.json({
    ok: true,
    message: "Provider endpoint beží ✔",
    action,
    provider
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
