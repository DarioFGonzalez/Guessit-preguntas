import { useEffect, useState } from "preact/hooks";
import { NewQuestion } from "../New Question/NewQuestion"
import Style from './Home.module.css';
import axios from 'axios';
import { QuestionCard } from "../Question card/QuestionCard";
import { Link } from "react-router-dom";

export const Home = () =>
{
    const [ allQuestions, setAllQuestions ] = useState( [
        {
            category: '',
            createdAt: '',
            id: '',
            text: ''
        } ] );

    useEffect( () =>
    {
        axios.get('http://localhost:3000/questions')
        .then( ({ data }) =>
        {
            setAllQuestions( data );
        } )
        .catch( (error) =>
        {
            console.log(error);
            
        })
    }, []);

    return(
        <div className={ Style.general }>

            <NewQuestion/>

            { allQuestions.map( (info, y) =>
            <Link to={`/${info.id}`}>
                <QuestionCard info={info} pos={y}/> 
            </Link> ) }

        </div>
    )
}