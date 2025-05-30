import React from 'react'
import axios from 'axios'
import { API } from '../Api'

function Test() {
    const ss = () => {
        API.get("/api")
            .then((res) => {
                console.log(res)
            })
    }
    return { ss }
}

export default Test