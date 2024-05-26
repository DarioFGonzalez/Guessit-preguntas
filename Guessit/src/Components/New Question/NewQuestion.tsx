import { useState } from 'preact/hooks';
import Style from './NewQuestion.module.css';
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
    <div className={ Style.general }>
        <div className={ Style.formulario }>

            <label> Tu pregunta: </label>
            <select value={selectedOption} onChange={handleChange}>
                { categories.map( cat => <option value={cat}> {cat} </option> )}
            </select>

            <form onSubmit={handleSubmit}>
                <div className={ Style.texto }>
                    <input class={ Style.input } type='text'
                    onChange={ writeText } value={text}/>
                </div>
                <button className={ Style.boton }> ✔ </button>
            </form>

        </div>
    </div>
    )
}