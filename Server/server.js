import express from 'express';
import bodyParser from 'body-parser';
import router from './src/routes/user-route';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));

app.use('/api/v1', router);
app.get('/', (req, res) => {
  res.send('ci with travis');
});

const server = app.listen(3000, () => {
  console.log('App running on port 3000');
});

export default server;
