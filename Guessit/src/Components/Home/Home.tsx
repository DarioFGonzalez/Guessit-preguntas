import { useEffect, useState } from "preact/hooks";
import { NewQuestion } from "../New Question/NewQuestion"
import Style from './Home.module.css';
import axios from 'axios';
import { QuestionCard } from "../Question card/QuestionCard";
import { useLocation } from "react-router-dom";

export const Home = () =>
{
    const [ allQuestions, setAllQuestions ] = useState( [
        {
            category: '',
            createdAt: '',
            id: '',
            text: ''
        } ] );
    const [ admin, setAdmin ] = useState( false );
    const [ click, setClick ] = useState( false );
    const location = useLocation();

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

    useEffect( () =>
    {
        const buscarQuery = new URLSearchParams( location.search );
        setAdmin( buscarQuery.get( 'admin' )==null ? false : true );
    }, [])

    const deleteQuestion = ( id: String ) =>
        {
            axios.delete(`http://localhost:3000/questions?id=${id}`)
            .then( ({data}) =>
            {
                console.log(data);
            })
            .catch( ( error ) =>
            {
                console.log( error );            
            });
            setClick(!click);
        }
        
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
            }, [click]);

    return(
        <div className={ Style.general }>

            <NewQuestion/>

            { allQuestions.map( (info, y) =>
            <div>
                <hr/>
                {admin && <button onClick={()=> {deleteQuestion(info.id)} }> x </button>}
                <hr/>
                <QuestionCard info={info} pos={y} />
            </div> ) }

        </div>
    )
}