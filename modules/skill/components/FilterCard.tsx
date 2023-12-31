import React, { useEffect, useState } from 'react'
import { filterType } from '@/common/types/filter' 
import { useDispatch, useSelector } from 'react-redux'
import { categoryHandler } from '@/context/filter/filter'
import { RootState } from '@/context/filter/store'

function FilterCard({ title, category }:filterType) {
    const [isActive,setIsActive] = useState(false)
    const filterObj = useSelector((state:RootState) => state.filter)
    
    useEffect(() => {
        filterObj.category.includes(category) ? setIsActive(true) : setIsActive(false)
    },[filterObj])

    const initialClass = 'rounded-md p-1 cursor-pointer hover:dark:bg-neutral-500 hover:bg-neutral-400 transition duration-300'
    const className = isActive ? `bg-neutral-400 dark:bg-neutral-500 ${initialClass}` : `bg-neutral-200 dark:bg-neutral-800 ${initialClass}`
    const dispatch = useDispatch();
    
    return (
        <div onClick={() => dispatch(categoryHandler(category))} className={className}>{title}</div>
    )
}

export default FilterCard