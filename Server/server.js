import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import router from './src/routes';

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);

app.get('/', (req, res) => {
  res.status(301).redirect('/docs');
});

app.get('/docs', (req, res) => {
  res.status(200)
    .sendFile(path.resolve('output.html'));
});

app.use(router);

const server = app.listen(process.env.PORT || 3000, () => {
  console.log('App running on port 3000, yay');
});

app.all('*', (req, res) => {
  res.status(404).json({
    message: 'Wrong endpoint. Such endpoint does not exist',
  });
});

export default server;
