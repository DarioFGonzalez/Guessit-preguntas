const { Router } = require('express');
const postAnswer = require('../Controllers/Answers/postAnswer');
const getAnswers = require('../Controllers/Answers/getAnswers');
const updateAnswer = require('../Controllers/Answers/updateAnswer');
const deleteAnswer = require('../Controllers/Answers/deleteAnswer');
const answerRouter = Router();

answerRouter.post('/', postAnswer);
answerRouter.get('/',  getAnswers);
answerRouter.put('/', updateAnswer);
answerRouter.delete('/', deleteAnswer);

module.exports = answerRouter;