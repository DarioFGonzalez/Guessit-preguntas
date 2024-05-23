import Style from './NewQuestion.module.css';

export const NewQuestion = () =>
{
    const handleSubmit = () =>
    {

    }

    return(
    <div className={ Style.general }>
        <div className={ Style.formulario }>
            <form onSubmit={ handleSubmit }>
                <h3> Tu pregunta: </h3>
                <div className={ Style.texto }>
                    <input class={ Style.input } type='text'/>
                </div>
            </form>
        </div>
    </div>
    )
}