import Style from './QuestionCard.module.css';
import { Link } from 'react-router-dom';

interface Info
{
    text: string;
    category: string;
    id: string;
}

export const QuestionCard = ( { info }: { info: Info } ) =>
{

    const estilo = ( categoria: String ) =>
    {
        switch(categoria)
        {
            case 'Amor':
                {
                    return Style.amor;
                }
            case 'Vida diaria':
                {
                    return Style.vidaDiaria;
                }
            case 'Salud':
                {
                    return Style.salud;
                }
            case 'Politica':
                {
                    return Style.politica;
                }
            case 'Educación':
                {
                    return Style.educacion;
                }
            case 'Deportes':
                {
                    return Style.deportes;
                }
            case 'Otros':
                {
                    return Style.otros;
                }
            
        }
    }

    return(
        <div>
            <Link to={`/${info.id}`}>
                <div className={ estilo(info.category) }>
                    <p> Categoría: { info.category } </p>
                    <h3> {info.text} </h3>
                </div>
            </Link>
        </div>
    )
}