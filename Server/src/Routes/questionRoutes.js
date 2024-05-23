const { Router } = require('express');
const questionRouter = Router();
const postQuestion = require('../Controllers/Questions/postQuestion.js');
const getQuestions = require('../Controllers/Questions/getQuestions.js');
const updateQuestion = require('../Controllers/Questions/updateQuestion.js');
const deleteQuestion = require('../Controllers/Questions/deleteQuestion.js');

questionRouter.post('/', postQuestion );
questionRouter.get('/', getQuestions );
questionRouter.put('/', updateQuestion );
questionRouter.delete('/', deleteQuestion );

module.exports = questionRouter;