const { Question } = require('../../db.js');

const postQuestion = async ( req, res ) =>
{
    const questionData = req.body;

    try
    {
        const newQuestion = await Question.create( questionData );
        res.status(200).json( newQuestion );
    }
    catch(error)
    {
        res.status(500).json( { error_postQuestion: error } );
    }
}

module.exports = postQuestion;