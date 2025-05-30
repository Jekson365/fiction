import React, { useRef, useState } from 'react';
import ImageIcon from '@mui/icons-material/Image';
import useCreatePost from '../hooks/posts/useCreatePost';
import CheckIcon from '@mui/icons-material/Check';
import AddIcon from '@mui/icons-material/Add';

function Create() {
    const { createPost, errorMsg, setErrorMsg } = useCreatePost();
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState(null)
    const [preview, setPreview] = useState(null);
    const fileInputRef = useRef(null);
    const [uploadReady, setUploadReady] = useState(false)

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        if (file) {
            setPreview(URL.createObjectURL(file));
        } else {
            setPreview(null);
        }
    };

    const handleSave = async () => {
        if (image == null) {
            setErrorMsg("სურათი აუცილებელია")
        }
        else if (description == null) {
            setErrorMsg("აღწერა აუცილებელია")
        }
        else if (title == null) {
            setErrorMsg("დასახელება აუცილებელია")
        }
        else {
            const res = await createPost({
                Title: title,
                Description: description,
                Image: image,
            });
            if (res?.status == 200) {
                window.location.reload();
            }
        }
    };

    return (
        <>
            {!uploadReady ? (<>
                <div
                    className='button-icon'
                    onClick={() => setUploadReady(!uploadReady)}
                >
                    <AddIcon />
                </div>
            </>) : (<>

                {errorMsg ? (<>
                    <div className="error-text">
                        <div className='text'>{errorMsg}</div>
                    </div>
                </>) : null}
                <div className="upload-post-container">
                    <div className="image-place" onClick={() => fileInputRef.current.click()}>
                        {preview ? (<>
                            <img
                                src={
                                    preview ||
                                    'https://ew.com/thmb/BvLxxbgs9aF_hlPFJYKYR3Gac2I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Cowboy-Bebop-5dbea8a55cde4ea88547485f46032a8e.jpg'
                                }
                                alt="Preview"
                                style={{ width: '100%', borderRadius: '10px' }}
                            />
                        </>) : <>
                            <div className="upload-image">
                                <div className="add-icon">
                                    <AddIcon
                                        style={{
                                            fontSize: "45px"
                                        }}
                                    />
                                </div>
                            </div>
                        </>}
                    </div>
                    <div className="inp">
                        <input type="text"
                            onChange={(e) => setTitle(e.target.value)}
                            className='title-input' placeholder='სათაური' />
                    </div>
                    <div className="inp">
                        <textarea
                            cols={85}
                            onChange={(e) => setDescription(e.target.value)}
                            rows={15}
                            style={{ width: '100%' }}
                            placeholder="წერე..."
                        />
                    </div>

                    <div className="files">
                        <div className="button-icon" onClick={() => fileInputRef.current.click()}>
                            <ImageIcon />
                        </div>
                        <div className="button-icon" onClick={handleSave}>
                            <CheckIcon />
                        </div>
                    </div>

                    <input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        onChange={handleImageChange}
                        style={{ display: 'none' }}
                    />
                </div>
            </>)}
        </>
    );
}

export default Create;
