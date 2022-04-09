import App from "./app";

const app = App;

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`servidor rodando na porta ${port}`);
  });



