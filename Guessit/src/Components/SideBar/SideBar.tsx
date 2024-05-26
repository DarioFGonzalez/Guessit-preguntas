import { Link } from 'react-router-dom';
import Style from './SideBar.module.css';

export const SideBar = () =>
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
        <div className={ Style.SideBar }>
            <h3> Categorías </h3>
            <Link to='/home'>
                ♫  TODAS ♪
            </Link>
            <Link to='/home?category=Vida%20diaria'>
                <button className={ estilo("Vida diaria") }> Vida diaria </button>
            </Link>
            <Link to='/home?category=Salud'>
                <button className={ estilo("Salud") }> Salud </button>
            </Link>
            <Link to='/home?category=Politica'>
                <button className={ estilo("Politica") }> Politica </button>
            </Link>
            <Link to='/home?category=Amor'>
                <button className={ estilo("Amor") }> Amor </button>
            </Link>
            <Link to='/home?category=Educación'>
                <button className={ estilo("Educación") }> Educación </button>
            </Link>
            <Link to='/home?category=Deportes'>
                <button className={ estilo("Deportes") }> Deportes </button>
            </Link>
            <Link to='/home?category=Otros'>
                <button className={ estilo("Otros") }> Otros </button>
            </Link>
        </div>
    )
}