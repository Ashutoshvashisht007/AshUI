import { ChevronDown, ChevronUp } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'

const Dropdown = () => {

    const FRUITS = ['Apple', 'Banana', 'Orange', 'Pineapple', 'Grape', 'Strawberry', 'Mango', 'Kiwi', 'Watermelon'];
    const [filteredFruits, setFilteredFruits] = useState(FRUITS);
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState("Orange");
    const comboboxRef = useRef<HTMLDivElement>(null);

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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);
        setIsOpen(true);
        const filtered = FRUITS.filter(fruit =>
            fruit.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredFruits(filtered);
    }

    const handleSelect = (fruit: string) => {
        setInputValue(fruit);
        setFilteredFruits(FRUITS);
        setIsOpen(false);
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && filteredFruits.length > 0) {
            handleSelect(filteredFruits[0]);
            e.preventDefault();
        }
    }

    const handleInputFocus = () => {
        setFilteredFruits(FRUITS); // Ensure all options are visible
        setIsOpen(true);
    }

    return (
        <div className='mt-5 p-2 h-50 flex justify-center items-center' ref={comboboxRef}>
            <div className="relative w-64" >
                <div className='bg-white text-gray-600 rounded-lg relative z-999 w-62 left-1'>
                    <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
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
                {
                    isOpen && <div className="absolute -top-2 w-full pt-15 px-3 bg-gray-600 z-0 border border-gray-200 text-gray-white rounded-xl shadow-lg max-h-60">
                        {
                            filteredFruits.length > 0 ? (
                                <div className='max-h-40 overflow-y-auto scrollbar-hide'>
                                <ul className='overflow-y-auto h-full'>
                                    {filteredFruits.map((fruit) => (
                                        <li
                                            key={fruit}
                                            onClick={() => handleSelect(fruit)}
                                            className={`px-4 py-2 cursor-pointer rounded-lg hover:bg-gray-500 text-white`}
                                        >
                                            {fruit}
                                            {fruit === inputValue && <span className="float-right text-orange-500">•</span>}
                                        </li>
                                    ))}
                                </ul>
                                </div>
                            ) : (
                                <div className="px-4 py-2 text-gray-500">No results found</div>
                            )}
                    </div>}
            </div>
        </div>
    )
}

export default Dropdown