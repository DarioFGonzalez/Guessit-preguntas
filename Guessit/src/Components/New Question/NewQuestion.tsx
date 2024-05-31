import { useState } from 'preact/hooks';
import axios from 'axios';

export const NewQuestion = () =>
{
    const [ text, setText ] = useState( '' );
    const [ selectedOption, setSelectedOption ] = useState( '' );
    const categories = [ 'Otros', 'Politica', 'Salud', 'Deportes', 'Vida diaria', 'Amor', 'Educación' ];

    const handleSubmit = (e: any) =>
    {
        if( text!='' && selectedOption!='' )
        {
            axios.post('http://localhost:3000/questions', { text, category: selectedOption } )
            .then( ( { data } ) => console.log( data ) )
            .catch( ( error ) => console.log( error ) );
            setSelectedOption( '' );
            setText( '' );
        }
        else
        {
            e.preventDefault();
            alert('Faltan datos');
        }
        
    }

    const handleChange = (event: any) => {
        setSelectedOption(event.target.value);
      };

    const writeText = (event: any) =>
    {
        setText(event.target.value);
    }

    return(
        <div className=' text-black rounded-[5px] w-auto'>
            <div className='bg-white px-5 py-2 rounded-t-[20px]'>
                <select className='text-black outline-none border-b-[1px] border-b-black' value={selectedOption} onChange={handleChange}>
                    <option value="" selected>Seleccionar Categoría</option>
                    { categories.map( cat => <option value={cat}> {cat} </option> )}
                </select>
            </div>
            <form onSubmit={handleSubmit} className='flex flex-col gap-[10px]'>
                <div className='h-[90px] min-w-[315px]'>
                    <input class='w-full h-full rounded-b-[20px] bg-white bg-opacity-30 placeholder-black placeholder-opacity-50 text-black outline-none p-5' type='text' placeholder={"Escribe tu pregunta..."}
                    onChange={ writeText } value={text}/>
                </div>
                <button className=' bg-black w-full text-white p-1 h-[50px] rounded-[25px]'> Publicar </button>
            </form>

        </div>
    )
}