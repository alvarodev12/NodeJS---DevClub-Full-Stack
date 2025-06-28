import express from "express";

const app = express();
app.use(express.json());

app.get("/usuarios/:bronw", (req, res) => {
  console.log(req);

  res.send("Rota acessada com sucesso.");
});

app.post("/usuarios", (req, res) => {
  res.send("Novo poste aqui.");
});

app.listen(3000);
