const { Question } = require('../../db.js');

const updateQuestion = async ( req, res ) =>
{
    const { newText, id } = req.body;

    if(newText)
    {
        try
        {
            await Question.update( { text: newText }, { where: { id } } );
            res.status(200).json( { success: 'Message updated' } );
        }
        catch(error)
        {
            res.status(500).json( { error_updateQ: error.message } );
        }
    }
    else
    {
        res.status(500).json( { error_missingText: 'No new text found' } );
    }
}

module.exports = updateQuestion;