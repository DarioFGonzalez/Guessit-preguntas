import Style from './QuestionCard.module.css';

export const QuestionCard = ( { info, pos } ) =>
{

    return(
    <div className={ pos%2==0 ? Style.generalLeft : Style.generalRight }>
        <p> Categoría: { info.category } </p>
        <h3> {info.text} </h3>
    </div>
    )
}