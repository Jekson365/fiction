import React, { useEffect, useState } from 'react'
import Post from './Post'
import SetSize from '../actions/SetSize'
import Create from './Create'
import useIndexPost from '../hooks/posts/useIndexPost'

function SuperPage() {

    const [currentSize, setCurrentSize] = useState(0)
    const { fetchPosts, posts, loading } = useIndexPost()
    useEffect(() => {
        fetchPosts()
    }, [])
    return (
        <>
            {window.innerWidth > 800 ? (<>
                <SetSize currentSize={currentSize} setCurrentSize={setCurrentSize} />
            </>) : null}
            <div className="container" style={{ marginTop: "20px" }}>
                <Create />
                {!loading ? (<>
                    {posts && posts.map((e) => {
                        const { id, title, img, description } = e
                        return (
                            <>
                                <Post fontSize={currentSize} object={e} />
                            </>
                        )
                    })}
                </>) : (<></>)}
            </div>
        </>
    )
}

export default SuperPage