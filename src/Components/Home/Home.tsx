import { NewQuestion } from "../New Question/NewQuestion"
import Style from './Home.module.css';

export const Home = () =>
{
    const a = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0,
        1, 2, 3, 4, 5, 6, 7, 8, 9, 0,
        1, 2, 3, 4, 5, 6, 7, 8, 9, 0,
        1, 2, 3, 4, 5, 6, 7, 8, 9, 0,
        1, 2, 3, 4, 5, 6, 7, 8, 9, 0,
        1, 2, 3, 4, 5, 6, 7, 8, 9, 0
     ];

    return(
        <div className={ Style.general }>

            <NewQuestion/>

            <div>
                {a.map( x => <h1> { x } </h1>)}
            </div>

        </div>
    )
}