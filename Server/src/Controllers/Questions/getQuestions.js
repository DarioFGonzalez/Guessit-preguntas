const { Question, Answer } = require('../../db.js');

const getQuestions = async (req, res) =>
{
    const { id, category } = req.query;

    if(id)
    {
        try
        {
            const questionById = await Question.findByPk( id, { include:
                [
                    {
                        model: Answer,
                        as: "Answers",
                        attributes: [ "id", "text" ],
                    }
                ]
            } );

            if(questionById==null)
            {
                return res.status(404).json( { error: 'message not found' } );
            }
            else
            {
                return res.status(200).json( questionById );
            }
        }
        catch(error)
        {
            res.status(500).json( { error_getQuById: error } );
        }
    }
    else
    {
        if(category)
        {
            try
            {
                const questionsByCategory = await Question.findAll( { where: { category } } );

                if(questionsByCategory.length!=0)
                {
                    res.status(200).json( questionsByCategory );   
                }
                else
                {
                    res.status(404).json( { error: 'No questions in that category found' } );
                }
            }
            catch(error)
            {
                res.status(500).json( { error_getByCategory: error.message } );
            }
        }
        else
        {
            try
            {
                const allQuestions = await Question.findAll();
                res.status(200).json( allQuestions );   
            }
            catch(error)
            {
                res.status(500).json( { error_getQ: error.message } );
            }
        }
    }
}

module.exports = getQuestions;