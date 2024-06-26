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
    <div className='flex flex-col gap-[20px] w-full max-w-[1280px] '>
        <Link className='mb-[70px]' to='/home'>
            <button className='bg-black h-[40px] rounded-[10px] hover:scale-110 duration-300 min-w-[70px]'> {'< Atrás'} </button>
        </Link>
        <div className='flex flex-col text-center mb-[70px]'>
            <p className='w-full bg-black bg-opacity-0 p-3 border-b border-white rounded-t-[10px]'>{ question.category } </p>
            <h3 className='w-full text-black font-bold bg-black bg-opacity-0 p-3 h-[90px] rounded-b-[10px] flex justify-center items-center'> {question.text} </h3>
        </div>

        <div className='flex items-center mb-[35px]'>
            <p className='font-bold'> Respuestas </p>
        </div>

        <div className='mb-[70px] flex flex-col gap-2'>
            {question.Answers.length>0?question.Answers.map( x =>
            <div >
                {admin && <label onClick={()=>borrarPregunta( x.id )}> {"("}borrar pregunta{")"} </label>}
                <p className='bg-black bg-opacity-70 px-1 py-[2px]'> {x.text} </p>
            </div>):<p className='flex items-center'> Aún no hay respuestas... </p>}
        </div>

        <form className='flex flex-col gap-[10px]' onSubmit={handleSubmit}>
                <input className='text-black w-full h-[90px] outline-none rounded-[10px] p-5' placeholder={'Escribe algo 😉'} onChange={(e: any) => setText(e.target.value)} value={text}/>
                {text!='' && <button className='w-full bg-black p-3 rounded-[10px] hover:scale-105 duration-300' > Responder! </button>}
        </form>
    </div>
    )
}