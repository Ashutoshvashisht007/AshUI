import React, { useEffect, useRef, useState } from 'react'

const Dropdown = () => {

    const FRUITS = ['Apple', 'Banana', 'Orange', 'Pineapple', 'Grape', 'Strawberry', 'Mango', 'Kiwi', 'Watermelon'];
    const [filteredFruits, setFilteredFruits] = useState(FRUITS);
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState("Orange");
    const comboboxRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(FRUITS.indexOf('Orange'))
    const activeItemRef = useRef<HTMLLIElement | null>(null);
    const [shouldRender, setShouldRender] = useState(false)
    const [isVisible, setIsVisible] = useState(false)



    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;

            if (comboboxRef.current && !comboboxRef.current.contains(target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (isOpen && activeItemRef.current) {
            activeItemRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
            });
        }
    }, [activeIndex, isVisible]);

    useEffect(() => {
        if (isOpen) {
            setShouldRender(true)
            setTimeout(() => {
                setIsVisible(true);
            }, 10);
        } else {
            setIsVisible(false)

            const timer = setTimeout(() => {
                setShouldRender(false)
            }, 200)

            return () => clearTimeout(timer)
        }
    }, [isOpen])

    useEffect(() => {
        if (shouldRender) {
            void document.body.offsetHeight
            setIsVisible(true)
        }
    }, [shouldRender])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);
        setIsOpen(true);
        const filtered = FRUITS.filter(fruit =>
            fruit.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredFruits(filtered);
        const initialActiveIndex = filtered.findIndex(f => f.toLowerCase() === value.toLowerCase());
        setActiveIndex(initialActiveIndex >= 0 ? initialActiveIndex : 0);
    }

    const handleSelect = (fruit: string) => {
        setInputValue(fruit);
        setFilteredFruits(FRUITS);
        setActiveIndex(FRUITS.indexOf(fruit))
        setIsOpen(false);
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (!isOpen) return;

        if (e.key === 'Enter' && filteredFruits.length > 0) {
            handleSelect(filteredFruits[activeIndex]);
            e.preventDefault();
        }
        if (e.key === 'ArrowDown') {
            setActiveIndex(prev =>
                Math.min(prev + 1, filteredFruits.length - 1)
            )
            e.preventDefault()
        }
        if (e.key === 'ArrowUp') {
            setActiveIndex(prev => Math.max(prev - 1, 0));
            e.preventDefault()
        }
        if (e.key === 'Escape') {
            setIsOpen(false);
            e.preventDefault();
        }
    }

    const handleInputFocus = () => {
        setFilteredFruits(FRUITS);
        const currentActiveIndex = FRUITS.findIndex(fruit => fruit === inputValue);
        setActiveIndex(currentActiveIndex >= 0 ? currentActiveIndex : 0);
        setIsOpen(true);
    }

    return (
        <div className='mt-5 p-2 h-50 flex justify-center items-center' ref={comboboxRef}>
            <div className="relative w-64" >
                <div className='bg-white text-gray-600 rounded-lg relative z-999 w-62 left-1 shadow-2xl'>
                    <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none caret-orange-500"
                        placeholder="Search fruit..."
                        onChange={handleChange}
                        value={inputValue}
                        onFocus={handleInputFocus}
                        onKeyDown={handleKeyDown}
                    />
                    <button
                        aria-label="Toggle dropdown"
                        className="absolute top-0 right-0 h-full w-10 text-gray-500 flex items-center justify-center rounded-r-lg"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path>
                        </svg>
                    </button>
                </div>

                {shouldRender &&
                    <div className={`absolute -top-1 w-full pt-13 px-3 bg-zinc-300 z-0 text-black rounded-xl shadow-lg max-h-60 transition-all duration-200 ease-out  ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-2 scale-95'}`}>
                        {
                            filteredFruits.length > 0 ? (
                                <div className='max-h-40 overflow-y-auto scrollbar-hide pb-3'>
                                    <ul className='overflow-y-auto h-full'>
                                        {filteredFruits.map((fruit, index) => (
                                            <li
                                                key={fruit}
                                                ref={index === activeIndex ? activeItemRef : null}
                                                onClick={() => handleSelect(fruit)}
                                                className={`px-4 py-2 mb-1 cursor-pointer rounded-lg hover:bg-gray-200 ${activeIndex >=0 && index === activeIndex
                                                    ? 'bg-gray-200'
                                                    : 'hover:bg-gray-200'
                                                    } ${inputValue === fruit ? ' bg-gray-200' : ''}`}
                                            >
                                                {fruit}
                                                {inputValue.length > 0 && fruit === inputValue && <span className="float-right text-orange-500">•</span>}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ) : (
                                <div className="px-4 py-2 text-black">No results found</div>
                            )}
                    </div>}
            </div>
        </div>
    )
}

export default Dropdown