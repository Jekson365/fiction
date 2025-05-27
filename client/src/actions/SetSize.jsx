import React from 'react'

function SetSize({ currentSize, setCurrentSize }) {
    const sizes = [13, 17, 22]
    return (
        <div className='sizes'>
            {sizes.map((e) => {
                return (
                    <>
                        <button
                            onClick={() => setCurrentSize(e)}
                        >{e}</button>
                    </>
                )
            })}
        </div>
    )
}

export default SetSize