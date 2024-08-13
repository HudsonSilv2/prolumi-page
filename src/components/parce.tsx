
import parceImg from '../assets/parce.png'
import logo1 from '../assets/logoParce.png'
import logo2 from '../assets/logoParce1.svg'
import logo3 from '../assets/LogoParce2.webp'

export const Parce = () => {
    return (
        <>
            <div className='w-screen items-center sm:flex-none'>
                <img src={parceImg} alt="int" />
                <div className='w-28 h-28 pt-8 pl-9 flex'>
                    <h1 className=' text-gray-700 font-bold text-3xl p-4'>Nossos Parceiros</h1>
                    <div>
                        <p className='text-md p-4 h-32 w-56 text-slate-700'>
                            Texto super lindo na descrição dos parceiros da empresa prolumi.
                        </p>
                    </div>
                </div>
            </div>
            <div className='h-60 w-full flex justify-evenly items-center text-center'>
                <div className='w-32 h-16 flex'>
                    <img src={logo3} alt="Nal" />
                </div>
                <div className='w-32 h-16 flex'>
                    <img src={logo1} alt="SX" />
                </div>
                <div className='w-32 h-16 flex'>
                    <img src={logo2} alt="Well" />
                </div>
            </div>
            {/* <div className='flex bg-slate-700 text-white justify-center text-center'>
                <p>
                    Texto super lindo na descrição dos parceiros da empresa prolumi.
                </p>
            </div> */}
        </>
    );
}