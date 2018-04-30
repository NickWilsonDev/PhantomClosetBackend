const express = require('express');
const app = express();
const router = express.Router();

import users from './users';

router.use('/users', users.routes());

app.listen(3000);