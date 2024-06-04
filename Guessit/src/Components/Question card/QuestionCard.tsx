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
                <div className='grid grid-rows-3 rounded-[10px] text-black'>
                    <div className={`p-3 row-span-1 rounded-t-[10px] text-center ${estilo(info.category)}`}>
                        <p>{ info.category } </p>
                    </div>
                    <div className={`flex flex-col justify-center p-3 row-span-2 rounded-b-[10px] text-white text-center  bg-black bg-opacity-30`}>
                        <h3> {info.text} </h3>
                    </div>
                </div>
            </Link>
        </div>
    )
}