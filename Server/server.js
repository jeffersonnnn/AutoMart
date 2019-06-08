import express from 'express';
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
  res.send('welcome to AutoMart');
});

app.use('/api/v1', router);

const server = app.listen(3000, () => {
  console.log('App running on port 3000');
});

app.all('*', (req, res) => {
  res.status(404).json({ message: 'Wrong endpoint. Such endpoint does not exist' });
});

export default server;
