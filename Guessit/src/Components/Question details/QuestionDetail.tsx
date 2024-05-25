import { useEffect, useState } from 'preact/hooks';
import Style from './QuestionDetails.module.css';
import axios from 'axios';
import { Link, useParams, useLocation } from 'react-router-dom';

export const QuestionDetails = () =>
{
    const { id } = useParams();
    const location = useLocation();
    const [ admin, setAdmin ] = useState( false );
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
        const buscarQuery = new URLSearchParams( location.search );
        setAdmin( buscarQuery.get( 'admin' )==null ? false : true );
    }, [])

    const handleSubmit = (e: any) =>
    {
        axios.post('http://localhost:3000/answers', { questionId: question.id, text } )
        .then( ( { data } ) => console.log( data ) )
        .catch( ( error ) => console.log( error ) );
        setText( '' );
    }

    const borrarPregunta = ( id: String ) =>
    {
        axios.delete(`http://localhost:3000/answers?id=${id}`)
        .then( ( {data} ) =>
        {
            console.log( data );            
        })
        .catch( ( error ) =>
        {
            console.log( error );            
        })
    }

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
            const buscarQuery = new URLSearchParams( location.search );
            setAdmin( buscarQuery.get( 'admin' )==null ? false : true );
        }, [borrarPregunta])

    return(
    <div className={ Style.texto }>
        <Link to='/home'>
            <button> {'<'} </button>
        </Link>
        <p> Categoría: { question.category } </p>
        <h3> {question.text} </h3>
        <hr/>
        <p> Respuestas: </p>
        <hr/> ------------------------------------------------------------------- <hr/>
        {question.Answers.length>0?question.Answers.map( x =>
        <div>
            {admin && <label onClick={()=>borrarPregunta( x.id )}> {"("}borrar pregunta{")"} </label>}
            <p> {x.text} </p>
            <hr/>
        </div>):<p> Sin respuestas </p>}
        <form onSubmit={handleSubmit}>
            <input style={ { height: 35 } } onChange={(e) => setText(e.target.value)} value={text}/>
            {text=='' && <button disabled> Escribe algo 😉 </button>}
            {text!='' && <button > Responder! </button>}
        </form>
    </div>
    )
}