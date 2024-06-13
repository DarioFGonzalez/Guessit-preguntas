import { useEffect, useState } from "preact/hooks";
import { NewQuestion } from "../New Question/NewQuestion"
import axios from 'axios';
import { QuestionCard } from "../Question card/QuestionCard";
import { useLocation } from "react-router-dom";
import { SideBar } from "../SideBar/SideBar";

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
    const buscarQuery = new URLSearchParams( location.search );
    let categoria = buscarQuery.get( 'category' );

    useEffect( () =>
    {
        setAdmin( buscarQuery.get( 'admin' )==null ? false : true );
        
        if(categoria)
        {
            axios.get(`http://localhost:3000/questions?category=${categoria}`)
            .then( ({ data }) =>
            {
                setAllQuestions( data );
            } )
            .catch( (error) =>
            {
                console.log(error);
            })
        }
        else
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
        }
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
                const buscarQuery = new URLSearchParams( location.search );
                setAdmin( buscarQuery.get( 'admin' )==null ? false : true );
                let categoria = buscarQuery.get( 'category' );
                
                if(categoria)
                {
                    axios.get(`http://localhost:3000/questions?category=${categoria}`)
                    .then( ({ data }) =>
                    {
                        setAllQuestions( data );
                    } )
                    .catch( (error) =>
                    {
                        console.log(error);
                    })
                }
                else
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
                }
            }, [click, categoria])

    return (
      <div className=" w-full bg- h-full flex flex-col max-w-[80%] justify-center gap-[70px]">
            <div className='grid grid-cols-4 gap-[100px]'>
                <div className='col-start-2 col-end-5'>
                    <NewQuestion />
                </div>
            </div> 

        <div className='grid grid-cols-4 gap-[100px] '>
            <div>
                <SideBar />
            </div>

            <div className="col-start-2 col-end-5 flex flex-col h-fit gap-[20px]">
            {allQuestions.map((info) => (
                <div>
                {admin && (
                    <button
                    onClick={() => {
                        deleteQuestion(info.id);
                    }}
                    >
                    {" "}
                    ↓ Borrar esta pregunta ↓{" "}
                    </button>
                )}
                <QuestionCard info={info} />
                </div>
            ))}
            </div>
            
        </div>
      </div>
    );
}