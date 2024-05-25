import { useEffect, useState } from 'preact/hooks';
import Style from './QuestionDetails.module.css';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export const QuestionDetails = () =>
{
    const { id } = useParams();
    const [ text, setText ] = useState( '' );
    const [ question, setQuestion ] = useState(
        {
            Answers: [ { text: '', id: '' } ],
            category: '',
            createdAt: '',
            id: '',
            text: '',
        });

    useEffect( () =>
    {
        axios.get(`http://localhost:3000/questions?id=${id}`)
        .then( ( { data } ) =>
        {
            setQuestion( data );
        })
        .catch( ( error ) =>
        {
            console.log( error );
        })
    }, [])

    const handleSubmit = (e: any) =>
    {
        axios.post('http://localhost:3000/answers', { questionId: question.id, text } )
        .then( ( { data } ) => console.log( data ) )
        .catch( ( error ) => console.log( error ) );
        setText( '' );
    }

    return(
    <div className={ Style.texto }>
        <Link to='/home'>
            <button> {'<'} </button>
        </Link>
        <p> Categoría: { question.category } </p>
        <h3> {question.text} </h3>
        <hr/>
        <p> Respuestas: </p>
        {question.Answers.length>0?question.Answers.map( x => <div> <p> {x.text} </p> <hr/> </div>):<p> Sin respuestas </p>}
        <hr/>
        <form onSubmit={handleSubmit}>
            <input style={ { height: 35 } } onChange={(e) => setText(e.target.value)} value={text}/>
            {text=='' && <button disabled> Escribe algo 😉 </button>}
            {text!='' && <button > Responder! </button>}
        </form>
    </div>
    )
}