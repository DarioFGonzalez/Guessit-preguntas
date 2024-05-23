const { Answer } = require('../../db.js');

const deleteAnswer = async ( req, res ) =>
{
    const { id } = req.query;

    try
    {
        await Answer.destroy( { where: { id } } );
        res.status(200).json( { success: 'Answer deleted' } );
    }
    catch(error)
    {
        res.status(500).json( { error_deleteAnswer: error.message } );
    }
}

module.exports = deleteAnswer;