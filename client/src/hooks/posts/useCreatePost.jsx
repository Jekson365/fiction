import { useState } from 'react';
import { API } from '../../Api';

function useCreatePost() {
    const [errorMsg, setErrorMsg] = useState("")
    const createPost = async (data) => {
        const formData = new FormData();
        formData.append("Title", data.Title);
        formData.append("Description", data.Description);
        formData.append("Image", data.Image);

        try {
            const res = await API.post("/create", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            setErrorMsg("");
            return res;
        } catch (err) {
            console.log(err)
            setErrorMsg(err.response?.data)
            console.error("Upload failed:", err.response?.data || err.message);
        }
    };

    return { createPost, errorMsg, setErrorMsg };
}

export default useCreatePost;
