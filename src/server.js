import express from 'express';

import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import cookieParser from 'cookie-parser';

import login from './routers/login';
import tasks from './routers/tasks';

const app = express();
app.use(express.static('./build'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());

app.use(login);
app.use(tasks);

app.listen(3000);