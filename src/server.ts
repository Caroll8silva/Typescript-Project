// eslint-disable-next-line import/extensions
import 'pg';
// eslint-disable-next-line import/extensions
import app from './app';

const port = process.env.TYPEORM_PORT;

app.listen(port, () => {
  console.log(`servidor rodando na porta ${port}`);
});
