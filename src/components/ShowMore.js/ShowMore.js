import React from 'react'
import { useState } from 'react';
import Button from '../Button';

const ShowMore = () => {
    
    const [showMore, setShowMore] = useState(false)

    const list = [
        ' Item 1 +',
        'Item 2 +',
        'Item 3 +',
        'Item 4 +',
    ]

    const handleClick = () => {
        setShowMore(true)
    }

    const numberOfItems = showMore ? list.length : 0
    return (
        <>
            { list.slice(0, numberOfItems).map((item, index) => {
                return (
                    <span key={index}>{item}</span>
                )
            })}
            <Button onClick={() => handleClick()} type="primary" size="sm">Leia mais...</Button>
        </>
    )
}

export default ShowMore;