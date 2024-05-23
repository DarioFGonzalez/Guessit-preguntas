const { Router } = require('express');
const mainRouter = Router();
const questionRouter = require('./questionRoutes.js');
const answerRouter = require('./answerRoutes.js');

mainRouter.use('/questions', questionRouter);
mainRouter.use('/answers', answerRouter);

module.exports = mainRouter;