import Button_Swap from './Button_Swap';
import Button_Border from "./Button_Border";

const components = [
    Button_Swap,
    Button_Border
]

const Buttons = () => {
    return (
        <div className="mt-10 min-h-screen px-6">
            <div className=" bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-6 h-screen">
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
                    {components.map((Component, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center bg-gray-800/70 border border-white/10 rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 min-h-[140px]"
                        >
                            <Component />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default Buttons;