import { typeHandler as typeHandlerAction } from '@/context/filter/filter'

import React from 'react'
import { useDispatch } from 'react-redux'


function SearchBar() {

    const dispatch = useDispatch();

    const handleType = (event:React.ChangeEvent<HTMLInputElement>) => {
        const keyword = event.target.value;
        dispatch(typeHandlerAction(keyword))
    }

    return (
        <div className='gap-2 flex flex-col lg:flex-row lg:items-center items-start'>
            <h2 className='text-xl w-fit lg:text-lg'>Explore : </h2>
            <input className='rounded-md border flex items-center w-full lg:w-auto h-8 lg:h-7 px-2 py-1 lg:py-0.5 lg:text-base' onChange={handleType}></input>
        </div>
    )
}

export default SearchBar