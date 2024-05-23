const { Answer, Question } = require('../../db.js');

const getAnswers = async ( req, res ) =>
{
    const { id } = req.query;

    if(id)
    {
        try
        {
            const answerById = await Answer.findByPk( id, { include:
                [
                    {
                        model: Question,
                        as: "Question",
                        attributes: [ "id", "text" ]
                    }
                ] } );
    
            if(answerById==null)
            {
                return res.status(404).json( { error: 'answer not found' } );
            }
            else
            {
                return res.status(200).json( answerById );
            }
        }
        catch(error)
        {
            res.status(500).json( { error_answerById: error.message } );
        }
    }
    else
    {
        try
        {
            const allAnswers = await Answer.findAll();
            if(allAnswers.length==0)
            {
                res.status(404).json( { error: 'No answers found' } );
            }
            else
            {
                res.status(200).json( allAnswers );
            }
        }
        catch(error)
        {
            res.status(500).json( { error_getAllAnswers: error.message } );
        }
    }
}

module.exports = getAnswers;