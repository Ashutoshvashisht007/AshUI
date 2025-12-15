import React, { useState } from 'react'
import {motion} from 'motion/react'
import { layoutItems } from '../../../utils/data';
import type { LayoutItemsType } from '../../../types/type';

const Layout_Translate = () => {
    const [items, setItems] = useState<LayoutItemsType[]>(layoutItems)
    const [active,setActive] = useState<LayoutItemsType | null>(null);
    const buttonNames = ['ID','Title','Description'];


    const handleClick = (btnName: string) => {
        if(btnName === 'ID'){
            const sortedById = [...items].sort((a,b) => a.id - b.id);
            setItems(sortedById);
        } else if(btnName === 'Title'){
            const sortedByTitle = [...items].sort((a,b) => a.title.localeCompare(b.title));
            setItems(sortedByTitle);
        } else if(btnName === 'Description'){
            const sortedByDescription = [...items].sort((a,b) => a.description.localeCompare(b.description));
            setItems(sortedByDescription);
        }
    }

    return (
        <section>
            <div className='flex items-center gap-4 mb-4'>
                {
                    buttonNames.map((btn)=> <button key={btn} className='border border-neutral-200 px-2 py-1 rounded-md bg-gray-300 text-neutral-600 cursor-pointer mt-5 hover:bg-white shadow-sm' onClick={()=> handleClick(btn)}>{btn}</button>)
                }
                
            </div>
            {active && <motion.div onClick={()=> setActive(null)}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.2}} className='fixed top-0 left-0 w-full h-full bg-black/30 bg-opacity-50 backdrop-blur-lg flex items-center justify-center z-50 cursor-pointer'>
                <motion.div layoutId={`component-${active.title}`} className='bg-white w-80 h-100 border border-transparent shadow-black/10 ring-1 ring-black/5 p-4 rounded-lg shadow-lg'>
                    <img src={active.image} alt={active.title} className='w-full h-48 object-cover rounded-md' />
                    <motion.h1 layoutId={`component-${active.title}`} className='text-2xl font-bold text-neutral-700 mt-4'>{active.title}</motion.h1>
                    <motion.p layoutId={`component-${active.title}`} className='text-sm text-neutral-500 mt-2'>{active.description}</motion.p>
                    {
                        active.tags.map((tag,idx) => <span key={idx} className='inline-block bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full mr-2 mt-2'>{tag}</span>)
                    }
                </motion.div>
            </motion.div>}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                {
                    items.map((item) => {
                        return <motion.div layoutId={`component-${item.title}`} key={item.id} className='flex flex-col justify-center bg-gray-300 text-black px-3 py-2 rounded-lg shadow-2xl' onClick={() => setActive(item)}>
                            <img  src={item.image} alt={item.title} className='h-50 w-full rounded-lg hover:scale-105 transition-transform duration-200 object-cover' />
                            <motion.h1 layoutId={`component-${item.title}`} className='text-lg font-medium text-neutral-600 mt-2 text-shadow-sm '>{item.title}</motion.h1>
                            <motion.p layoutId={`component-${item.title}`} className='text-sm text-neutral-500 mt-1'>{item.description}</motion.p>
                        </motion.div>
                    })
                }
            </div>
        </section>
    )
}

export default Layout_Translate