const express = require('express');
const public = new express.Router();

import { postTokens } from './authorization';


public.post('/signin', postTokens);

export default public;