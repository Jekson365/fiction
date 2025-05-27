import React, { useEffect, useState } from 'react'

function Post({ object, fontSize }) {
    const { id, title, img, description } = object
    const [extended, setExtended] = useState()
    
    return (
        <>
            <div className="post">
                <div className="image-place">
                    <img src={img} />
                </div>
                <div className="content">
                    <div className="title">
                        <h2>{title}</h2>
                    </div>
                    <div className={`description size-${fontSize}`}>
                        <>{description.length > 10 && !extended`` ? (
                            <>
                                {description.split(/\s+/).slice(0, 12).join(' ')}
                                <p className='space f-bold' onClick={() => setExtended(true)}>მეტი</p>
                            </>
                        ) : (<>{description} <p className='space f-bold' onClick={() => setExtended(false)}>ნაკლები</p></>)}</>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Post