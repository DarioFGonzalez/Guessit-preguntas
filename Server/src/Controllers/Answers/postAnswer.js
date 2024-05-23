const { Answer, Question } = require('../../db.js');

const postAnswer = async ( req, res ) =>
{
    const { text, questionId } = req.body;

    try
    {
        const newAnswer = await Answer.create( { text } );
        const thisQuestion = await Question.findByPk( questionId );
        await thisQuestion.addAnswer( newAnswer );
        const releasedNewAnswer = await Answer.findByPk( newAnswer.id );

        res.status(200).json( releasedNewAnswer );
    }
    catch(error)
    {
        res.status(500).json( { error_postAnswer: error.message } );
    }
}

module.exports = postAnswer;