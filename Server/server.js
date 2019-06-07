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

// Set Router instance
app.use('/api/v1', router);
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to AutoMart' });
});

const server = app.listen(4000, () => {
  // eslint-disable-next-line no-console
  console.log('App running on port 4000');
});

app.all('*', (req, res) => {
  res.status(404).json({ message: 'Wrong endpoint. Such endpoint does not exist' });
});

export default server;
