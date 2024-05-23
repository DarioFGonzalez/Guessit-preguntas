const { Question } = require('../../db.js');

const deleteQuestion = async ( req, res ) =>
{
    const { id } = req.query;

    try
    {
        await Question.destroy( { where: { id } } );
        res.status(200).json( { success: 'Message deleted' } );
    }
    catch(error)
    {
        res.status(500).json( { error_deleteQuestion: error.message } );
    }
}

module.exports = deleteQuestion;