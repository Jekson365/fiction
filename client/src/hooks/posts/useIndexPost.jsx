import React, { useState } from 'react'
import { API } from '../../Api'

function useIndexPost() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchPosts = async () => {
        try {
            await API.get("/getall")
                .then((res) => {
                    setPosts(res.data)
                    setLoading(false)
                })
        }
        catch (err) {
            setLoading(false)
            throw err
        }
    }

    return { fetchPosts, posts, loading }
}

export default useIndexPost