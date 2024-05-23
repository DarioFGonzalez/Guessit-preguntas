import { Link } from "react-router-dom"

export const Landing = () =>
{

    return(
        <main>
            <div>
                <h1> Hola, soy la landing page.</h1>
                <Link to='/home'>
                    <button> HOME </button>
                </Link>
            </div>
        </main>
    )
}