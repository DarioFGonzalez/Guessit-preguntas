const { Answer } = require('../../db.js');

const updateAnswer = async ( req, res ) =>
{
    const { id, newText } = req.body;

    if(newText)
    {
        try
        {
            await Answer.update( { text: newText }, { where: { id } } );
            res.status(200).json( { success: 'Answer updated' } );
        }
        catch(error)
        {
           res.status(500).json( { error_updateAnswer: error.message } );
        }
    }
    else
    {
        res.status(404).json( { error: 'New text not found' } );
    }
}

module.exports = updateAnswer;