import { Link } from 'react-router-dom';

export const SideBar = () =>
{
    return(
        <div className='flex flex-col gap-[10px] min-w-[140px]'>
            <h3 className=' border-b-[3px] text-[30px] mb-[20px] font-bold text-center'> Categorías </h3>
            <Link to='/home'>
                <button className=' bg-slate-900 rounded-[10px] h-[40px] w-full'> Todas </button>
            </Link>
            <Link to='/home?category=Vida%20diaria'>
                <button className=' bg-red-700 rounded-[10px] h-[40px] w-full'> Vida diaria </button>
            </Link>
            <Link to='/home?category=Salud'>
                <button className=' bg-orange-700 rounded-[10px] h-[40px] w-full'> Salud </button>
            </Link>
            <Link to='/home?category=Politica'>
                <button className=' bg-yellow-500 rounded-[10px] h-[40px] w-full'> Politica </button>
            </Link>
            <Link to='/home?category=Amor'>
                <button className=' bg-green-700 rounded-[10px] h-[40px] w-full'> Amor </button>
            </Link>
            <Link to='/home?category=Educación'>
                <button className=' bg-sky-700 rounded-[10px] h-[40px] w-full'> Educación </button>
            </Link>
            <Link to='/home?category=Deportes'>
                <button className=' bg-blue-800 rounded-[10px] h-[40px] w-full'> Deportes </button>
            </Link>
            <Link to='/home?category=Otros'>
                <button className=' bg-violet-900 rounded-[10px] h-[40px] w-full'> Otros </button>
            </Link>
        </div>
    )
}