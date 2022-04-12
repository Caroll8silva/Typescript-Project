import 'pg';
// eslint-disable-next-line import/extensions
import app from './app';

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`servidor rodando na porta ${port}`);
});
