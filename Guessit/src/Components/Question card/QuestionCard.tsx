import Style from './QuestionCard.module.css';
import { Link } from 'react-router-dom';

export const QuestionCard = ( { info, pos } ) =>
{

    return(
        <div>
            <Link to={`/${info.id}`}>
                <div className={ pos%2==0 ? Style.generalLeft : Style.generalRight }>
                    <p> Categoría: { info.category } </p>
                    <h3> {info.text} </h3>
                </div>
            </Link>
        </div>
    )
}